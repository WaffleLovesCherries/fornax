// ============================================================================
// Almacenamiento — localStorage versionado, clave única `fornax.v1`.
//
// El peso se guarda SIEMPRE en libras (canónico). `unit` es solo la
// preferencia de visualización por ejercicio; al alternar lb/kg el valor
// guardado no cambia, así no hay deriva por redondeo.
//
// El historial está indexado por id de ejercicio: ids desconocidos (ejercicios
// quitados del plan) se conservan intactos, ids nuevos empiezan vacíos.
// ============================================================================

export type Unit = 'lb' | 'kg'

export interface HistoryEntry {
  date: string // ISO
  weightLb: number
}

export interface ExerciseRecord {
  unit: Unit
  history: HistoryEntry[]
}

export interface ActiveEntry {
  weightLb: number | null
  done: boolean
}

export interface ActiveSession {
  sessionId: string
  startedAt: string
  entries: Record<string, ActiveEntry>
}

export interface Store {
  version: 1
  exercises: Record<string, ExerciseRecord>
  workouts: { date: string; sessionId: string }[]
  active: ActiveSession | null
}

const KEY = 'fornax.v1'
const LB_PER_KG = 2.20462

export function lbToKg(lb: number): number {
  return lb / LB_PER_KG
}

export function kgToLb(kg: number): number {
  return kg * LB_PER_KG
}

/** Redondeo de visualización: 1 decimal, sin ceros sobrantes. */
export function formatWeight(weightLb: number, unit: Unit): string {
  const value = unit === 'lb' ? weightLb : lbToKg(weightLb)
  return String(Math.round(value * 10) / 10)
}

export function emptyStore(): Store {
  return { version: 1, exercises: {}, workouts: [], active: null }
}

export function isValidStore(data: unknown): data is Store {
  if (typeof data !== 'object' || data === null) return false
  const store = data as Record<string, unknown>
  return (
    store.version === 1 &&
    typeof store.exercises === 'object' && store.exercises !== null &&
    Array.isArray(store.workouts)
  )
}

export function loadStore(): Store {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return emptyStore()
    const parsed: unknown = JSON.parse(raw)
    if (!isValidStore(parsed)) return emptyStore()
    return { ...emptyStore(), ...parsed }
  } catch {
    return emptyStore()
  }
}

export function saveStore(store: Store): void {
  localStorage.setItem(KEY, JSON.stringify(store))
}

export function getRecord(store: Store, exerciseId: string): ExerciseRecord {
  return store.exercises[exerciseId] ?? { unit: 'lb', history: [] }
}

export function lastWeight(store: Store, exerciseId: string): number | null {
  const history = getRecord(store, exerciseId).history
  return history.length > 0 ? history[history.length - 1].weightLb : null
}

// --- Exportar / Importar -----------------------------------------------------

export function exportStore(store: Store): void {
  const blob = new Blob([JSON.stringify(store, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `fornax-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

export function parseImport(text: string): Store | null {
  try {
    const parsed: unknown = JSON.parse(text)
    if (!isValidStore(parsed)) return null
    return { ...emptyStore(), ...parsed }
  } catch {
    return null
  }
}
