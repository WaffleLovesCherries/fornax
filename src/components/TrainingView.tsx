import { useState } from 'react'
import type { Session } from '../data/plan'
import { formatWeight, getRecord, lastWeight, type ActiveSession, type Store, type Unit } from '../data/storage'
import ExerciseCard from './ExerciseCard'

interface Props {
  store: Store
  session: Session
  active: ActiveSession
  onWeight: (exerciseId: string, weightLb: number | null) => void
  onUnit: (exerciseId: string, unit: Unit) => void
  onToggleDone: (exerciseId: string) => void
  onFinish: () => void
  onDiscard: () => void
}

export default function TrainingView({
  store, session, active, onWeight, onUnit, onToggleDone, onFinish, onDiscard,
}: Props) {
  const [confirmDiscard, setConfirmDiscard] = useState(false)

  const total = session.exercises.length
  const doneCount = session.exercises.filter((e) => active.entries[e.id]?.done).length
  const allDone = doneCount === total && total > 0
  const remaining = total - doneCount
  const remainingLabel = remaining === 1 ? 'FALTA 1 EJERCICIO' : `FALTAN ${remaining} EJERCICIOS`

  return (
    <div className="training" style={{ '--c': session.color, '--ca': session.accent } as React.CSSProperties}>
      <header className="training-head">
        <div className="training-title">
          <p className="kicker">ENTRENANDO AHORA</p>
          <h2>{session.label}</h2>
        </div>
        <div className="training-progress">
          <span className="progress-count">{doneCount}<i>/{total}</i></span>
          <div className="progress-bar" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={doneCount}>
            <div style={{ width: `${(doneCount / total) * 100}%` }} />
          </div>
        </div>
      </header>

      <div className="exercise-list">
        {session.exercises.map((exercise, i) => {
          const entry = active.entries[exercise.id] ?? { weightLb: null, done: false }
          const record = getRecord(store, exercise.id)
          const prev = lastWeight(store, exercise.id)
          return (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              index={i}
              weightLb={entry.weightLb}
              unit={record.unit}
              done={entry.done}
              lastWeightLabel={prev !== null ? `${formatWeight(prev, record.unit)} ${record.unit.toUpperCase()}` : null}
              onWeight={(w) => onWeight(exercise.id, w)}
              onUnit={(u) => onUnit(exercise.id, u)}
              onToggleDone={() => onToggleDone(exercise.id)}
            />
          )
        })}
      </div>

      <footer className="training-foot">
        <button type="button" className={`finish-btn${allDone ? ' ready' : ''}`} disabled={!allDone} onClick={onFinish}>
          {allDone ? 'TERMINAR ENTRENAMIENTO' : remainingLabel}
        </button>
        {confirmDiscard ? (
          <div className="discard-confirm">
            <span>¿Descartar la sesión?</span>
            <button type="button" onClick={onDiscard}>SÍ, DESCARTAR</button>
            <button type="button" onClick={() => setConfirmDiscard(false)}>NO</button>
          </div>
        ) : (
          <button type="button" className="discard-btn" onClick={() => setConfirmDiscard(true)}>
            Descartar sesión
          </button>
        )}
      </footer>
    </div>
  )
}
