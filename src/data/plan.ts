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
      // ── PECHO ─────────────────────────────────────────────────────────────
      { id: 'press-banca', name: 'Press de banca (barra)', sets: '2', rpe: 'Fallo', muscles: 'Pecho, tríceps, deltoides ant.', notes: 'Agarre a la anchura de hombros. Controla la bajada 2s.' },
      { id: 'press-inclinado', name: 'Press inclinado con mancuernas', sets: '2', rpe: 'Fallo', muscles: 'Pecho superior, deltoides ant.', notes: '45°. No bloquees codos arriba.' },
      { id: 'press-pecho-maquina', name: 'Press de pecho en máquina', sets: '2', rpe: 'Fallo', muscles: 'Pecho, tríceps', notes: 'Máquina #20 SmartFit. Asiento ajustado al nivel del pecho.' },
      { id: 'mariposa-maquina', name: 'Mariposa / Pec deck (máquina)', sets: '2', rpe: 'Fallo', muscles: 'Pecho, deltoides ant.', notes: 'Máquina #21 SmartFit. Arco completo, pausa 1s en contracción.' },
      { id: 'cruce-cables-bajo', name: 'Cruce de cables bajo (cable crossover)', sets: '2', rpe: 'Fallo', muscles: 'Pecho inferior', notes: 'Máquina #63 SmartFit. Cables desde abajo, cruza hacia arriba.' },
      // ── HOMBRO ────────────────────────────────────────────────────────────
      { id: 'press-militar', name: 'Press militar (barra o máquina)', sets: '2', rpe: 'Fallo', muscles: 'Deltoides, tríceps', notes: 'Máquina #50 SmartFit. Barra pasa por frente de cara.' },
      { id: 'elevaciones-laterales', name: 'Elevaciones laterales (mancuernas)', sets: '2', rpe: 'Fallo', muscles: 'Deltoides medial', notes: 'Codo ligero roto, no balanceo. Pausa en la cima.' },
      { id: 'elevaciones-lat-cable', name: 'Elevaciones laterales en cable', sets: '2', rpe: 'Fallo', muscles: 'Deltoides medial', notes: 'Máquina #63. Polea baja, agarre cruzado. Aislamiento limpio.' },
      { id: 'elevaciones-frontales', name: 'Elevaciones frontales (mancuernas)', sets: '2', rpe: 'Fallo', muscles: 'Deltoides anterior', notes: 'Alterna brazos. No balancees el torso.' },
      // ── TRÍCEPS ───────────────────────────────────────────────────────────
      { id: 'extensiones-triceps', name: 'Extensiones de tríceps en polea (cuerda)', sets: '2', rpe: 'Fallo', muscles: 'Tríceps', notes: 'Máquina #51 / #63. Codos fijos. Separa la cuerda al fondo.' },
      { id: 'press-frances', name: 'Press francés (barra EZ)', sets: '2', rpe: 'Fallo', muscles: 'Tríceps (cabeza larga)', notes: 'Banco plano. Baja a la frente, codos apuntando al techo.' },
      { id: 'fondos-triceps', name: 'Fondos en banco (triceps dips)', sets: '2', rpe: 'Fallo', muscles: 'Tríceps, pecho', notes: 'Cuerpo recto, codos hacia atrás. Agrega peso en piernas si es fácil.' },
      // ── CORE ──────────────────────────────────────────────────────────────
      { id: 'plank-rotacion', name: 'Plank con rotación', sets: '2', rpe: '~30s c/u', muscles: 'Core anterior y oblicuos', notes: 'Mantén cadera neutral, no dejes que caiga.', core: true },
      { id: 'cable-woodchop', name: 'Cable woodchop (corte de leña)', sets: '2', rpe: '12 reps c/lado', muscles: 'Oblicuos, core rotacional', notes: 'Máquina #63. Polea alta, rota desde el torso, no los brazos.', core: true },
    ],
  },
  {
    id: 'pull',
    label: 'Pull',
    color: '#2f7ee8',
    accent: '#61aaff',
    exercises: [
      // ── ESPALDA ───────────────────────────────────────────────────────────
      { id: 'remo-barra', name: 'Remo con barra (Pendlay o inclinado)', sets: '2', rpe: 'Fallo', muscles: 'Dorsal, romboides, bíceps', notes: 'Espalda ~45°. Jala al ombligo. Pausa en contracción.' },
      { id: 'jalon-pecho', name: 'Jalón al pecho en polea', sets: '2', rpe: 'Fallo', muscles: 'Dorsal, bíceps', notes: 'Máquina #30 SmartFit. Agarre prono, jala hasta barbilla.' },
      { id: 'pull-up', name: 'Pull-up / Dominadas (peso corporal)', sets: '2', rpe: 'Fallo', muscles: 'Dorsal, bíceps, core', notes: 'Agarre prono, ancho de hombros. Si falla la forma, para.' },
      { id: 'remo-polea-baja', name: 'Remo en polea baja (cable)', sets: '2', rpe: 'Fallo', muscles: 'Dorsal medio, trapecios', notes: 'Máquina #34 SmartFit. Pecho recto, jala al ombligo.' },
      { id: 'remo-mancuerna', name: 'Remo con mancuerna (un brazo)', sets: '2', rpe: 'Fallo', muscles: 'Dorsal, romboides', notes: 'Apoya rodilla y mano en banco. Jala el codo hacia el techo.' },
      { id: 'pullover-cable', name: 'Pullover en polea alta', sets: '2', rpe: 'Fallo', muscles: 'Dorsal, serrato', notes: 'Máquina #63. Brazos extendidos, arco completo desde overhead.' },
      // ── BÍCEPS ────────────────────────────────────────────────────────────
      { id: 'curl-ez', name: 'Curl de bíceps con barra EZ', sets: '2', rpe: 'Fallo', muscles: 'Bíceps, braquial', notes: 'Codos fijos contra el torso. Nada de balanceo.' },
      { id: 'curl-martillo', name: 'Curl martillo con mancuernas', sets: '2', rpe: 'Fallo', muscles: 'Braquiorradial, bíceps', notes: 'Supinación neutra todo el recorrido.' },
      { id: 'curl-predicador', name: 'Curl predicador (máquina o barra EZ)', sets: '2', rpe: 'Fallo', muscles: 'Bíceps (pico)', notes: 'Máquina #42 SmartFit. Codo fijo en el pad. Recorrido completo.' },
      { id: 'curl-cable-polea', name: 'Curl en polea baja (cable)', sets: '2', rpe: 'Fallo', muscles: 'Bíceps', notes: 'Máquina #63. Codo fijo. Gira la muñeca al subir (supinación).' },
      // ── HOMBRO POSTERIOR ──────────────────────────────────────────────────
      { id: 'pajaros-mancuernas', name: 'Pájaros / Reverse fly (mancuernas)', sets: '2', rpe: 'Fallo', muscles: 'Deltoides posterior, romboides', notes: 'Inclinado 45°. Codos ligeramente rotos, no balancear.' },
      // ── CORE ──────────────────────────────────────────────────────────────
      { id: 'dead-bug', name: 'Dead bug', sets: '2', rpe: '10 reps c/lado', muscles: 'Core profundo, oblicuos', notes: 'Espalda baja pegada al suelo todo el tiempo.', core: true },
      { id: 'hollow-hold', name: 'Hollow hold', sets: '2', rpe: '30s', muscles: 'Core anterior, flexores de cadera', notes: 'Espalda baja en contacto con el suelo, piernas a ~30° del piso.', core: true },
    ],
  },
  {
    id: 'pierna',
    label: 'Pierna',
    color: '#1db87a',
    accent: '#5de0aa',
    exercises: [
      // ── CUÁDRICEPS ────────────────────────────────────────────────────────
      { id: 'sentadilla', name: 'Sentadilla (barra libre o hack squat)', sets: '2', rpe: 'Fallo', muscles: 'Cuádriceps, glúteo, isquio', notes: 'Máquina #10 SmartFit (hack). Profundidad por debajo de paralela.' },
      { id: 'prensa-pierna', name: 'Prensa de pierna 45°', sets: '2', rpe: 'Fallo', muscles: 'Cuádriceps, glúteo', notes: 'Máquina #09 SmartFit. Pies a la anchura de hombros. No bloquees rodillas.' },
      { id: 'extensiones-cuadriceps', name: 'Extensiones de cuádriceps (máquina)', sets: '2', rpe: 'Fallo', muscles: 'Cuádriceps', notes: 'Máquina #02 SmartFit. Pausa 1s arriba. Baja controlado 3s.' },
      { id: 'prensa-horizontal', name: 'Prensa de pierna horizontal', sets: '2', rpe: 'Fallo', muscles: 'Cuádriceps, glúteo', notes: 'Máquina #01 SmartFit. Pies altos = más glúteo; pies bajos = más quad.' },
      // ── ISQUIOTIBIALES ────────────────────────────────────────────────────
      { id: 'curl-isquios', name: 'Curl de isquiotibiales acostado', sets: '2', rpe: 'Fallo', muscles: 'Isquiotibiales', notes: 'Máquina #03 SmartFit. Cadera pegada al banco. Recorrido completo.' },
      { id: 'curl-isquios-sentado', name: 'Curl de isquiotibiales sentado', sets: '2', rpe: 'Fallo', muscles: 'Isquiotibiales (énfasis proximal)', notes: 'Máquina #04 SmartFit. Mayor activación proximal vs. acostado.' },
      { id: 'peso-muerto-rumano', name: 'Peso muerto rumano (mancuernas)', sets: '2', rpe: 'Fallo', muscles: 'Isquiotibiales, glúteo', notes: 'Rodilla ligeramente flexionada. Empuja caderas atrás, no dobles la espalda.' },
      // ── GLÚTEOS ───────────────────────────────────────────────────────────
      { id: 'hip-thrust-maquina', name: 'Hip thrust (máquina)', sets: '2', rpe: 'Fallo', muscles: 'Glúteo mayor', notes: 'Máquina #07 SmartFit. Aprieta glúteos en la cima, no hiperextiendas lumbar.' },
      { id: 'abduccion-cadera', name: 'Abducción de cadera (máquina)', sets: '2', rpe: 'Fallo', muscles: 'Glúteo medio, TFL', notes: 'Máquina #05 SmartFit. Movimiento controlado, sin rebote.' },
      // ── PANTORRILLAS ──────────────────────────────────────────────────────
      { id: 'pantorrillas', name: 'Pantorrillas de pie (máquina)', sets: '2', rpe: 'Fallo', muscles: 'Gastrocnemio, sóleo', notes: 'Máquina #08 SmartFit. Estiramiento completo abajo, pausa 2s arriba.' },
      // ── CORE ──────────────────────────────────────────────────────────────
      { id: 'ab-rollout', name: 'Ab rollout / rueda abdominal', sets: '2', rpe: '~10 reps', muscles: 'Core anterior completo', notes: 'Si no tienes rueda: extensión de brazos en suelo desde rodillas.', core: true },
      { id: 'crunch-cable', name: 'Crunch en polea alta (cable)', sets: '2', rpe: 'Fallo', muscles: 'Recto abdominal', notes: 'Máquina #63. De rodillas, jala el cable hacia el suelo con el abdomen.', core: true },
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
