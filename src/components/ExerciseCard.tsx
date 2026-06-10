import { useState } from 'react'
import type { Exercise } from '../data/plan'
import type { Unit } from '../data/storage'
import WeightInput from './WeightInput'

interface Props {
  exercise: Exercise
  index: number
  weightLb: number | null
  unit: Unit
  done: boolean
  lastWeightLabel: string | null
  onWeight: (weightLb: number | null) => void
  onUnit: (unit: Unit) => void
  onToggleDone: () => void
}

export default function ExerciseCard({
  exercise, index, weightLb, unit, done, lastWeightLabel, onWeight, onUnit, onToggleDone,
}: Props) {
  const [showNote, setShowNote] = useState(false)

  return (
    <article className={`exercise-card${done ? ' done' : ''}`} style={{ animationDelay: `${index * 60}ms` }}>
      <div className="card-top">
        <button
          type="button"
          className="check"
          role="checkbox"
          aria-checked={done}
          aria-label={`Marcar ${exercise.name} como ${done ? 'pendiente' : 'hecho'}`}
          onClick={onToggleDone}
        >
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M2.5 8.5l4 4 7-8.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
          </svg>
        </button>
        <div className="card-title">
          <h3>
            {exercise.core && <span className="core-tag">CORE</span>}
            {exercise.name}
          </h3>
          <p className="muscles">{exercise.muscles}</p>
        </div>
        <div className="card-dose">
          <span className="dose-sets">{exercise.sets}×</span>
          <span className="dose-rpe">{exercise.rpe}</span>
        </div>
      </div>

      <div className="card-controls">
        <WeightInput weightLb={weightLb} unit={unit} onWeight={onWeight} onUnit={onUnit} />
        <div className="card-meta">
          {lastWeightLabel && <span className="last-weight">ANT. {lastWeightLabel}</span>}
          <button
            type="button"
            className={`note-btn${showNote ? ' open' : ''}`}
            aria-expanded={showNote}
            onClick={() => setShowNote((v) => !v)}
          >
            TÉCNICA
          </button>
        </div>
      </div>

      {showNote && <p className="note">{exercise.notes}</p>}
    </article>
  )
}
