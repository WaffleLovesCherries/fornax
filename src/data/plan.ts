// ============================================================================
// PLAN DE ENTRENAMIENTO — única fuente de verdad de sesiones y ejercicios.
//
// Para agregar o quitar ejercicios, editá solo este archivo.
//
// ⚠️  El historial de pesos se guarda por `id`. Reglas:
//   - Nunca renombres ni reutilices un `id` existente (perderías/mezclarías
//     el historial de ese ejercicio).
//   - Quitar un ejercicio es seguro: su historial queda guardado y reaparece
//     si lo volvés a agregar con el mismo `id`.
//   - Agregar uno nuevo es seguro: empieza con historial vacío.
// ============================================================================

export interface Exercise {
  /** Identificador estable — clave del historial en storage. No renombrar. */
  id: string
  name: string
  sets: string
  rpe: string
  muscles: string
  notes: string
  core?: boolean
}

export interface Session {
  id: string
  label: string
  color: string
  accent: string
  exercises: Exercise[]
}

export const SESSIONS: Session[] = [
  {
    id: 'push',
    label: 'Push',
    color: '#e85d2f',
    accent: '#ff8c61',
    exercises: [
      { id: 'press-banca', name: 'Press de banca (barra)', sets: '2', rpe: 'Fallo', muscles: 'Pecho, tríceps, deltoides ant.', notes: 'Agarre a la anchura de hombros. Controla la bajada 2s.' },
      { id: 'press-inclinado', name: 'Press inclinado con mancuernas', sets: '2', rpe: 'Fallo', muscles: 'Pecho superior, deltoides ant.', notes: '45°. No bloquees codos arriba.' },
      { id: 'press-militar', name: 'Press militar (barra o máquina)', sets: '2', rpe: 'Fallo', muscles: 'Deltoides, tríceps', notes: 'Barra pasa por frente de cara, no detrás.' },
      { id: 'elevaciones-laterales', name: 'Elevaciones laterales', sets: '2', rpe: 'Fallo', muscles: 'Deltoides medial', notes: 'Codo ligero roto, no balanceo.' },
      { id: 'extensiones-triceps', name: 'Extensiones de tríceps en polea', sets: '2', rpe: 'Fallo', muscles: 'Tríceps', notes: 'Codos fijos. Pronación al final.' },
      { id: 'plank-rotacion', name: 'Plank con rotación', sets: '2', rpe: '~30s c/u', muscles: 'Core anterior y oblicuos', notes: 'Mantén cadera neutral, no dejes que caiga.', core: true },
    ],
  },
  {
    id: 'pull',
    label: 'Pull',
    color: '#2f7ee8',
    accent: '#61aaff',
    exercises: [
      { id: 'remo-barra', name: 'Remo con barra (Pendlay o inclinado)', sets: '2', rpe: 'Fallo', muscles: 'Dorsal, romboides, bíceps', notes: 'Pecho contra banco o espalda ~45°. Jala al ombligo.' },
      { id: 'jalon-pecho', name: 'Jalón al pecho en polea', sets: '2', rpe: 'Fallo', muscles: 'Dorsal, bíceps', notes: 'Agarre prono, jala hasta barbilla, codos a costillas.' },
      { id: 'remo-polea-baja', name: 'Remo en polea baja (cable)', sets: '2', rpe: 'Fallo', muscles: 'Dorsal medio, trapecios', notes: 'Pecho recto, no te inclines hacia atrás en exceso.' },
      { id: 'curl-ez', name: 'Curl de bíceps con barra EZ', sets: '2', rpe: 'Fallo', muscles: 'Bíceps, braquial', notes: 'Codos fijos. Nada de balanceo.' },
      { id: 'curl-martillo', name: 'Curl martillo con mancuernas', sets: '2', rpe: 'Fallo', muscles: 'Braquiorradial, bíceps', notes: 'Supinación neutra todo el recorrido.' },
      { id: 'dead-bug', name: 'Dead bug', sets: '2', rpe: '10 reps c/lado', muscles: 'Core profundo, oblicuos', notes: 'Espalda baja pegada al suelo todo el tiempo.', core: true },
    ],
  },
  {
    id: 'pierna',
    label: 'Pierna',
    color: '#1db87a',
    accent: '#5de0aa',
    exercises: [
      { id: 'sentadilla', name: 'Sentadilla (barra libre o hack squat)', sets: '2', rpe: 'Fallo', muscles: 'Cuádriceps, glúteo, isquio', notes: 'Profundidad por debajo de paralela. Rodillas sobre pies.' },
      { id: 'prensa-pierna', name: 'Prensa de pierna', sets: '2', rpe: 'Fallo', muscles: 'Cuádriceps, glúteo', notes: 'Pies a la anchura de hombros. No bloquees rodillas arriba.' },
      { id: 'extensiones-cuadriceps', name: 'Extensiones de cuádriceps (máquina)', sets: '2', rpe: 'Fallo', muscles: 'Cuádriceps', notes: 'Pausa 1s arriba. Baja controlado.' },
      { id: 'curl-isquios', name: 'Curl de isquiotibiales (máquina)', sets: '2', rpe: 'Fallo', muscles: 'Isquiotibiales', notes: 'Cadera pegada al banco. Recorrido completo.' },
      { id: 'pantorrillas', name: 'Pantorrillas de pie (máquina o libre)', sets: '2', rpe: 'Fallo', muscles: 'Gastrocnemio, sóleo', notes: 'Estiramiento completo abajo, pausa arriba.' },
      { id: 'ab-rollout', name: 'Ab rollout o rueda abdominal', sets: '2', rpe: '~10 reps', muscles: 'Core anterior completo', notes: 'Si no tienes rueda: extensión de brazos en suelo desde rodillas.', core: true },
    ],
  },
]

export function getSession(id: string): Session | undefined {
  return SESSIONS.find((s) => s.id === id)
}

export function getExercise(id: string): { exercise: Exercise; session: Session } | undefined {
  for (const session of SESSIONS) {
    const exercise = session.exercises.find((e) => e.id === id)
    if (exercise) return { exercise, session }
  }
  return undefined
}
