import { useState } from 'react'
import { findStale, progressSeries } from '../data/metrics'
import { SESSIONS } from '../data/plan'
import { formatWeight, getRecord, type Store } from '../data/storage'
import ProgressChart from './ProgressChart'

interface Props {
  store: Store
}

export default function MetricsView({ store }: Props) {
  const [selectedId, setSelectedId] = useState(SESSIONS[0].exercises[0].id)

  const selected = SESSIONS.flatMap((s) => s.exercises.map((e) => ({ exercise: e, session: s })))
    .find((x) => x.exercise.id === selectedId) ?? { exercise: SESSIONS[0].exercises[0], session: SESSIONS[0] }

  const record = getRecord(store, selectedId)
  const history = progressSeries(store, selectedId)
  const stale = findStale(store)
  const totalWorkouts = store.workouts.length

  return (
    <div className="metrics">
      <div className="metrics-summary">
        <p className="kicker">HISTORIAL</p>
        <h2 className="metrics-title">
          {totalWorkouts === 0
            ? 'Todavía sin sesiones'
            : totalWorkouts === 1
              ? '1 sesión completada'
              : `${totalWorkouts} sesiones completadas`}
        </h2>
      </div>

      <div className="exercise-select">
        {SESSIONS.map((session) => (
          <div key={session.id} className="select-group" style={{ '--c': session.color } as React.CSSProperties}>
            <p className="select-label">{session.label.toUpperCase()}</p>
            <div className="select-chips">
              {session.exercises.map((exercise) => (
                <button
                  key={exercise.id}
                  type="button"
                  className={`chip${selectedId === exercise.id ? ' on' : ''}`}
                  onClick={() => setSelectedId(exercise.id)}
                >
                  {exercise.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="chart-panel" style={{ '--c': selected.session.color } as React.CSSProperties}>
        <div className="chart-head">
          <h3>{selected.exercise.name}</h3>
          <span className="chart-count">
            {history.length === 1 ? '1 REGISTRO' : `${history.length} REGISTROS`}
          </span>
        </div>
        <ProgressChart
          history={history}
          unit={record.unit}
          color={selected.session.color}
          accent={selected.session.accent}
        />
      </div>

      <section className="stale-panel">
        <p className="kicker warn">⚠ ESTANCADOS</p>
        {stale.length === 0 ? (
          <p className="stale-empty">
            Nada estancado por ahora. Un ejercicio aparece acá cuando lleva 3+ sesiones sin subir de peso
            durante al menos 2 semanas.
          </p>
        ) : (
          <ul className="stale-list">
            {stale.map(({ exercise, session, sessionsStuck, daysStuck, weightLb }) => {
              const unit = getRecord(store, exercise.id).unit
              return (
                <li key={exercise.id} style={{ '--c': session.color } as React.CSSProperties}>
                  <div className="stale-info">
                    <strong>{exercise.name}</strong>
                    <span>
                      {sessionsStuck} sesiones en {formatWeight(weightLb, unit)} {unit.toUpperCase()} · {daysStuck} días
                    </span>
                  </div>
                  <p className="stale-hint">Subí ~2.5 kg / 5 lb, sumá reps o cambiá el ejercicio.</p>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}
