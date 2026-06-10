import { SESSIONS, type Exercise, type Session } from './plan'
import { getRecord, type HistoryEntry, type Store } from './storage'

export interface StaleExercise {
  exercise: Exercise
  session: Session
  /** Sesiones consecutivas sin progreso (las últimas N con el mismo techo). */
  sessionsStuck: number
  /** Días desde la primera de esas sesiones estancadas. */
  daysStuck: number
  weightLb: number
}

const MIN_ENTRIES = 3
const MIN_DAYS = 14

export function progressSeries(store: Store, exerciseId: string): HistoryEntry[] {
  return getRecord(store, exerciseId).history
}

/**
 * Un ejercicio está estancado cuando en sus últimas 3 sesiones registradas
 * no hubo aumento neto de peso y esas sesiones abarcan al menos 14 días.
 */
export function findStale(store: Store): StaleExercise[] {
  const stale: StaleExercise[] = []
  for (const session of SESSIONS) {
    for (const exercise of session.exercises) {
      const history = getRecord(store, exercise.id).history
      if (history.length < MIN_ENTRIES) continue

      const last = history[history.length - 1]

      // Cuántas sesiones seguidas llevan sin superar el peso actual.
      let stuck = 1
      while (
        stuck < history.length &&
        history[history.length - 1 - stuck].weightLb >= last.weightLb
      ) {
        stuck++
      }
      if (stuck < MIN_ENTRIES) continue

      const firstStuck = history[history.length - stuck]
      const days = Math.floor(
        (new Date(last.date).getTime() - new Date(firstStuck.date).getTime()) / 86_400_000,
      )
      if (days < MIN_DAYS) continue

      stale.push({ exercise, session, sessionsStuck: stuck, daysStuck: days, weightLb: last.weightLb })
    }
  }
  return stale.sort((a, b) => b.daysStuck - a.daysStuck)
}
