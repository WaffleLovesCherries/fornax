import { SESSIONS } from '../data/plan'
import type { Store } from '../data/storage'

interface Props {
  store: Store
  onStart: (sessionId: string) => void
}

function lastTrainedLabel(store: Store, sessionId: string): string {
  const dates = store.workouts.filter((w) => w.sessionId === sessionId).map((w) => w.date)
  if (dates.length === 0) return 'NUNCA'
  const last = new Date(dates[dates.length - 1])
  const days = Math.floor((Date.now() - last.getTime()) / 86_400_000)
  if (days <= 0) return 'HOY'
  if (days === 1) return 'AYER'
  return `HACE ${days} DÍAS`
}

export default function SessionPicker({ store, onStart }: Props) {
  return (
    <div className="session-picker">
      <p className="kicker">SESIÓN DE HOY</p>
      <h2 className="picker-title">¿Qué toca<br />entrenar?</h2>
      <div className="session-cards">
        {SESSIONS.map((session, i) => (
          <button
            key={session.id}
            type="button"
            className="session-card"
            style={{ '--c': session.color, '--ca': session.accent, animationDelay: `${i * 90}ms` } as React.CSSProperties}
            onClick={() => onStart(session.id)}
          >
            <span className="session-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="session-name">{session.label}</span>
            <span className="session-info">
              <span>{session.exercises.length} EJERCICIOS</span>
              <span className="session-last">{lastTrainedLabel(store, session.id)}</span>
            </span>
            <span className="session-arrow" aria-hidden="true">→</span>
          </button>
        ))}
      </div>
    </div>
  )
}
