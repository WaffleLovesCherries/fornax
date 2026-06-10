import { useEffect, useReducer, useRef, useState } from 'react'
import { getSession } from './data/plan'
import {
  exportStore, getRecord, lastWeight, loadStore, parseImport, saveStore,
  type ActiveSession, type Store, type Unit,
} from './data/storage'
import MetricsView from './components/MetricsView'
import SessionPicker from './components/SessionPicker'
import TrainingView from './components/TrainingView'

type Action =
  | { type: 'start'; sessionId: string }
  | { type: 'setWeight'; exerciseId: string; weightLb: number | null }
  | { type: 'setUnit'; exerciseId: string; unit: Unit }
  | { type: 'toggleDone'; exerciseId: string }
  | { type: 'finish' }
  | { type: 'discard' }
  | { type: 'replace'; store: Store }

function reducer(store: Store, action: Action): Store {
  switch (action.type) {
    case 'start': {
      const session = getSession(action.sessionId)
      if (!session || store.active) return store
      const active: ActiveSession = {
        sessionId: action.sessionId,
        startedAt: new Date().toISOString(),
        entries: Object.fromEntries(
          session.exercises.map((e) => [e.id, { weightLb: lastWeight(store, e.id), done: false }]),
        ),
      }
      return { ...store, active }
    }
    case 'setWeight': {
      if (!store.active) return store
      return {
        ...store,
        active: {
          ...store.active,
          entries: {
            ...store.active.entries,
            [action.exerciseId]: {
              ...(store.active.entries[action.exerciseId] ?? { done: false }),
              weightLb: action.weightLb,
            },
          },
        },
      }
    }
    case 'setUnit': {
      const record = getRecord(store, action.exerciseId)
      return {
        ...store,
        exercises: { ...store.exercises, [action.exerciseId]: { ...record, unit: action.unit } },
      }
    }
    case 'toggleDone': {
      if (!store.active) return store
      const entry = store.active.entries[action.exerciseId] ?? { weightLb: null, done: false }
      return {
        ...store,
        active: {
          ...store.active,
          entries: {
            ...store.active.entries,
            [action.exerciseId]: { ...entry, done: !entry.done },
          },
        },
      }
    }
    case 'finish': {
      if (!store.active) return store
      const date = new Date().toISOString()
      const exercises = { ...store.exercises }
      for (const [exerciseId, entry] of Object.entries(store.active.entries)) {
        if (entry.weightLb === null) continue
        const record = exercises[exerciseId] ?? { unit: 'lb' as Unit, history: [] }
        exercises[exerciseId] = {
          ...record,
          history: [...record.history, { date, weightLb: entry.weightLb }],
        }
      }
      return {
        ...store,
        exercises,
        workouts: [...store.workouts, { date, sessionId: store.active.sessionId }],
        active: null,
      }
    }
    case 'discard':
      return { ...store, active: null }
    case 'replace':
      return action.store
  }
}

export default function App() {
  const [store, dispatch] = useReducer(reducer, undefined, loadStore)
  const [tab, setTab] = useState<'train' | 'metrics'>('train')
  const [celebrate, setCelebrate] = useState<string | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    saveStore(store)
  }, [store])

  const activeSession = store.active ? getSession(store.active.sessionId) : undefined

  function handleFinish() {
    if (activeSession) setCelebrate(activeSession.id)
    dispatch({ type: 'finish' })
    window.setTimeout(() => setCelebrate(null), 2000)
  }

  function handleImportFile(file: File) {
    file.text().then((text) => {
      const imported = parseImport(text)
      if (!imported) {
        window.alert('El archivo no es un respaldo válido de Fornax.')
        return
      }
      if (window.confirm('Importar este respaldo reemplaza todos los datos actuales. ¿Continuar?')) {
        dispatch({ type: 'replace', store: imported })
      }
    })
  }

  const celebrateSession = celebrate ? getSession(celebrate) : undefined

  return (
    <div className="app">
      <header className="app-head">
        <div>
          <h1 className="wordmark">FORNAX</h1>
          <p className="tagline">PPL · 2 SETS AL FALLO</p>
        </div>
        <div className="data-btns">
          <button type="button" onClick={() => exportStore(store)} title="Exportar respaldo JSON">EXPORTAR</button>
          <button type="button" onClick={() => fileRef.current?.click()} title="Importar respaldo JSON">IMPORTAR</button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleImportFile(file)
              e.target.value = ''
            }}
          />
        </div>
      </header>

      <nav className="tabs">
        <button type="button" className={tab === 'train' ? 'on' : ''} onClick={() => setTab('train')}>
          ENTRENAR
        </button>
        <button type="button" className={tab === 'metrics' ? 'on' : ''} onClick={() => setTab('metrics')}>
          MÉTRICAS
        </button>
      </nav>

      <main>
        {tab === 'train' && (
          store.active && activeSession ? (
            <TrainingView
              store={store}
              session={activeSession}
              active={store.active}
              onWeight={(exerciseId, weightLb) => dispatch({ type: 'setWeight', exerciseId, weightLb })}
              onUnit={(exerciseId, unit) => dispatch({ type: 'setUnit', exerciseId, unit })}
              onToggleDone={(exerciseId) => dispatch({ type: 'toggleDone', exerciseId })}
              onFinish={handleFinish}
              onDiscard={() => dispatch({ type: 'discard' })}
            />
          ) : (
            <SessionPicker store={store} onStart={(sessionId) => dispatch({ type: 'start', sessionId })} />
          )
        )}
        {tab === 'metrics' && <MetricsView store={store} />}
      </main>

      {celebrateSession && (
        <div className="celebrate" style={{ '--c': celebrateSession.color } as React.CSSProperties}>
          <p className="kicker">SESIÓN {celebrateSession.label.toUpperCase()}</p>
          <span>COMPLETA</span>
        </div>
      )}
    </div>
  )
}
