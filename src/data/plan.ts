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
      {
        id: 'press-banca',
        name: 'Press de banca (barra)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Pecho, tríceps, deltoides ant.',
        notes: 'Banco plano con rack. Acostado, pies planos en el suelo. Agarre prono a la anchura de hombros o un poco más ancho. Baja la barra controlado en 2s hasta rozar el pecho (no rebotar). Empuja explosivo hacia arriba. Escápulas retraídas y deprimidas durante todo el set. No arquees la espalda baja excesivamente.',
      },
      {
        id: 'press-inclinado',
        name: 'Press inclinado (barra)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Pecho superior, deltoides ant.',
        notes: 'Banco inclinado a 30–45° con rack. Agarre prono un poco más ancho que los hombros. Baja la barra controlado hasta la parte alta del pecho. Empuja explosivo hacia arriba sin bloquear los codos. Escápulas retraídas y deprimidas; no arquees la espalda baja excesivamente.',
      },
      {
        id: 'mariposa-maquina',
        name: 'Mariposa / Pec deck (máquina)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Pecho (aislamiento)',
        notes: 'Máquina #21 SmartFit. Ajusta el asiento para que los codos queden al nivel de los hombros. Apoya los antebrazos en los pads. Cierra los brazos hacia el centro como si quisieras que los codos se tocaran; pausa 1s apretando el pecho. Regresa lento sin dejar que los pads lleguen al tope (mantén tensión).',
      },
      // ── HOMBRO ────────────────────────────────────────────────────────────
      {
        id: 'press-militar',
        name: 'Press militar (barra)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Deltoides ant. + med., tríceps',
        notes: 'De pie o sentado en banco con respaldo vertical. Barra a la altura del pecho con agarre prono a la anchura de hombros. Empuja directamente hacia arriba hasta casi extender los codos. Baja hasta que los brazos queden paralelos al suelo (90°). Mantén el core activo; no arquees la lumbar al empujar.',
      },
      {
        id: 'elevaciones-laterales',
        name: 'Elevaciones laterales (mancuernas)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Deltoides medial',
        notes: 'De pie o sentado. Mancuernas a los lados, codos ligeramente rotos (no completamente extendidos). Eleva los brazos lateralmente hasta la altura de los hombros; inclina el meñique levemente hacia arriba (como vaciando agua de un vaso). Pausa 1s en la cima. Baja controlado en 3s. Sin balancear el torso ni usar impulso.',
      },
      {
        id: 'elevaciones-lat-inclinado',
        name: 'Elevaciones laterales inclinado (mancuernas)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Deltoides medial (énfasis)',
        notes: 'Apoya el torso lateralmente en un banco inclinado a ~30–45°, o sostente de un poste inclinando el cuerpo hacia afuera. Toma la mancuerna con la mano libre. La posición inclinada pre-estira el deltoides medial al inicio del movimiento. Eleva el brazo lateralmente hasta la altura del hombro. Baja lento hasta el estiramiento completo. Haz todas las reps de un lado, luego cambia.',
      },
      {
        id: 'press-arnold',
        name: 'Press Arnold (mancuernas)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Deltoides ant. + med.',
        notes: 'Sentado en banco con respaldo. Comienza con las mancuernas frente a ti a la altura del pecho, palmas mirando hacia ti (como al final de un curl). Al empujar hacia arriba, rota las muñecas hacia afuera de modo que las palmas queden mirando al frente al final del movimiento. Baja invirtiendo la rotación. El rango rotacional recluta más fibras del deltoides anterior y medial.',
      },
      // ── TRÍCEPS ───────────────────────────────────────────────────────────
      {
        id: 'fondos-triceps',
        name: 'Fondos en banco (triceps dips)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Tríceps, pecho',
        notes: 'Banco plano o dos bancas paralelas. Apoya las manos en el borde del banco detrás de ti, dedos hacia adelante. Cuerpo recto, piernas extendidas al frente. Baja el cuerpo hasta que los codos lleguen a 90°, luego empuja hacia arriba. Para aumentar dificultad, apoya los pies en otra superficie o añade peso encima de las piernas.',
      },
      {
        id: 'extensiones-cabeza-mancuerna',
        name: 'Extensiones sobre cabeza (mancuernas)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Tríceps (cabeza larga)',
        notes: 'Sentado en banco con respaldo o de pie. Sostén una mancuerna con ambas manos sobre la cabeza, brazos extendidos. Sin mover los codos, baja la mancuerna detrás de la cabeza hasta sentir el estiramiento máximo en el tríceps. Regresa a la extensión completa. Los codos deben apuntar al techo y mantenerse quietos durante todo el movimiento.',
      },
      {
        id: 'press-frances',
        name: 'Press francés (barra EZ)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Tríceps (cabeza larga)',
        notes: 'Banco plano. Acostado, sostén la barra EZ con agarre prono cerrado. Extiende los brazos hacia arriba (perpendiculares al suelo). Sin mover los codos, baja la barra hacia la frente o ligeramente detrás de la cabeza. Regresa explosivo. Los codos deben apuntar al techo durante todo el movimiento.',
      },
    ],
  },
  {
    id: 'pull',
    label: 'Pull',
    color: '#2f7ee8',
    accent: '#61aaff',
    exercises: [
      // ── ESPALDA ───────────────────────────────────────────────────────────
      {
        id: 'remo-maquina-sentado',
        name: 'Remo en máquina sentado (pecho apoyado)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Dorsal, romboides',
        notes: 'Máquina de remo con pecho apoyado (chest-supported row). Siéntate con el pecho apoyado en el pad inclinado para eliminar el balanceo del torso. Pies apoyados en los reposapiés. Agarre neutro o prono. Jala los codos hacia atrás y hacia los costados apretando las escápulas al final. Pausa 1s en contracción. Regresa lento con los brazos completamente extendidos.',
      },
      {
        id: 'pull-up',
        name: 'Dominadas / Pull-up',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Dorsal, bíceps',
        notes: 'Barra de dominadas (área funcional SmartFit). Agarre prono a la anchura de hombros. Cuelga completamente (brazos extendidos). Jala el cuerpo hacia arriba hasta que la barbilla supere la barra. Baja lento en 3s hasta la extensión completa. Si no llegas al fallo en reps limpias, haz negativas (sube con impulso, baja solo en 5s).',
      },
      {
        id: 'remo-mancuerna',
        name: 'Remo con mancuerna (un brazo)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Dorsal, romboides',
        notes: 'Banco plano. Apoya la rodilla y la mano del lado contrario al que trabajás. Torso paralelo al suelo. Toma la mancuerna con la mano libre, brazo extendido. Jala el codo hacia el techo (no hacia atrás) hasta que la mancuerna quede al nivel del torso. Pausa 1s apretando el dorsal. Baja controlado. Haz todas las reps, luego cambia de lado.',
      },
      {
        id: 'jalon-pecho',
        name: 'Jalón al pecho en polea',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Dorsal, bíceps',
        notes: 'Máquina #30 SmartFit. Sentado, muslos bajo los pads de sujeción. Agarre prono más ancho que los hombros. Inclínate ligeramente atrás (~15°). Jala la barra hacia la parte superior del pecho llevando los codos hacia los costados y abajo. Aprieta el dorsal en la contracción. Regresa lento con los brazos completamente extendidos.',
      },
      // ── TRAPECIOS / HOMBRO POSTERIOR ──────────────────────────────────────
      {
        id: 'shrugs-mancuernas',
        name: 'Encogimientos / Shrugs (mancuernas)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Trapecios superiores',
        notes: 'De pie, mancuernas a los costados con agarre neutro (palmas hacia adentro). Brazos completamente extendidos. Eleva los hombros directamente hacia las orejas lo más alto posible. Pausa 1s en la cima. Baja controlado en 2s hasta el punto de máximo estiramiento. No gires los hombros ni uses el cuello. El movimiento es vertical puro.',
      },
      {
        id: 'reverse-fly-maquina',
        name: 'Reverse fly en máquina (pec deck inverso)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Deltoides posterior, romboides',
        notes: 'Máquina #21 SmartFit en modo reverse fly. Siéntate mirando hacia el pad, pecho apoyado. Agarra los agarres con brazos casi extendidos a la altura de los hombros. Abre los brazos lateralmente hacia atrás hasta que queden en línea con el torso. Pausa 1s apretando el deltoides posterior y los romboides. Regresa lento.',
      },
      {
        id: 'face-pull-polea',
        name: 'Face pull en polea (cuerda)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Deltoides post., romboides',
        notes: 'Máquina #63 SmartFit. Polea alta con accesorio de cuerda. De pie frente a la máquina, agarra los extremos de la cuerda con ambas manos. Jala la cuerda hacia la cara separando los extremos a los lados de la cabeza (pulgares apuntando hacia atrás). Los codos deben quedar por encima de los hombros al final del movimiento. Pausa 1s. Regresa lento.',
      },
      // ── BÍCEPS ────────────────────────────────────────────────────────────
      {
        id: 'curl-ez',
        name: 'Curl con barra EZ',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Bíceps, braquial',
        notes: 'De pie, agarra la barra EZ en la parte inclinada interior. Codos pegados a los costados durante todo el movimiento (no los adelantes al subir). Sube la barra hasta que los antebrazos queden verticales. Pausa 1s apretando el bíceps. Baja completamente en 3s. Sin balancear el torso.',
      },
      {
        id: 'curl-martillo',
        name: 'Curl martillo con mancuernas',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Braquiorradial, bíceps',
        notes: 'De pie o sentado. Mancuernas con agarre neutro (pulgar arriba), como si sostuvieras un martillo. Codos fijos a los costados. Sube alternando brazos o simultáneo hasta que los antebrazos queden verticales. No gires la muñeca. Baja lento.',
      },
      {
        id: 'curl-predicador',
        name: 'Curl predicador (máquina)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Bíceps (pico)',
        notes: 'Máquina #42 SmartFit. Apoya los tríceps en el pad inclinado, codos al borde. Agarra los agarres de la máquina. Sube hasta casi la vertical sin que los codos se levanten del pad. Baja lento hasta la extensión completa (este estiramiento es crucial para el crecimiento).',
      },
    ],
  },
  {
    id: 'pierna',
    label: 'Pierna',
    color: '#1db87a',
    accent: '#5de0aa',
    exercises: [
      // ── CUÁDRICEPS ────────────────────────────────────────────────────────
      {
        id: 'sentadilla',
        name: 'Sentadilla (barra libre)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Cuádriceps, glúteo',
        notes: 'Squat rack. Barra en la parte alta de los trapecios (high bar) o a nivel de los deltoides posteriores (low bar). Pies a la anchura de hombros o un poco más, puntillas ligeramente hacia afuera. Desciende hasta por debajo de paralela (muslos bajo las rodillas). Rodillas siguen la línea de los pies. Empuja el suelo hacia abajo al subir. Core braceado durante todo el movimiento.',
      },
      {
        id: 'prensa-pierna',
        name: 'Prensa 45°',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Cuádriceps, glúteo',
        notes: 'Máquina #09 SmartFit. Siéntate en la silla y apoya los pies en la plataforma a la anchura de hombros. Suelta los seguros y baja la plataforma controlado hasta que las rodillas lleguen cerca del pecho. Empuja hasta casi extender las piernas (no bloquees las rodillas). Pies altos en la plataforma = más glúteo; pies bajos = más cuádriceps.',
      },
      {
        id: 'extensiones-cuadriceps',
        name: 'Extensiones de cuádriceps',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Cuádriceps (aislamiento)',
        notes: 'Máquina #02 SmartFit. Ajusta el pad para que quede en el empeine (no en la espinilla). Espalda apoyada en el respaldo. Extiende ambas piernas hasta casi la extensión completa. Pausa 1s apretando el cuádriceps. Baja en 3s controlado hasta 90°. Este es el ejercicio de mayor aislamiento para el cuádriceps.',
      },
      // ── ISQUIOTIBIALES ────────────────────────────────────────────────────
      {
        id: 'peso-muerto-rumano',
        name: 'Peso muerto rumano (barra)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Isquiotibiales, glúteo',
        notes: 'De pie con la barra frente a los muslos, agarre prono a la anchura de hombros. Rodillas ligeramente flexionadas y fijas (no las doblas más durante el movimiento). Empuja las caderas hacia atrás dejando que la barra baje por las piernas cerca del cuerpo. Siente el estiramiento en los isquios. Cuando llegues a media pantorrilla, activa glúteos y sube empujando las caderas hacia adelante. Espalda recta en todo momento.',
      },
      {
        id: 'curl-isquios',
        name: 'Curl de isquiotibiales acostado',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Isquiotibiales',
        notes: 'Máquina #03 SmartFit. Boca abajo en la máquina, pad en la parte baja de los gemelos (no en el talón). Cadera pegada al banco durante todo el movimiento. Lleva los talones hacia los glúteos completando todo el rango. Pausa 1s arriba. Baja lento en 3s.',
      },
      {
        id: 'curl-isquios-sentado',
        name: 'Curl de isquiotibiales sentado',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Isquiotibiales (proximal)',
        notes: 'Máquina #04 SmartFit. Sentado, ajusta el pad superior sobre los muslos para fijar la cadera. Coloca el pad inferior en los tobillos. Jala los talones hacia abajo y atrás. Esta variante genera más activación en la inserción proximal del isquiotibial (cerca de la cadera) que la versión acostada.',
      },
      // ── GLÚTEOS ───────────────────────────────────────────────────────────
      {
        id: 'hip-thrust-maquina',
        name: 'Hip thrust (máquina)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Glúteo mayor',
        notes: 'Máquina #07 SmartFit. Siéntate con la espalda alta apoyada en el pad. Pies a la anchura de hombros, rodillas a 90° en la posición alta. Empuja las caderas hacia el techo apretando los glúteos en la cima. No hiperextiendas la espalda lumbar: el movimiento termina cuando el torso y los muslos forman una línea recta. Baja controlado hasta casi el suelo.',
      },
      {
        id: 'abduccion-cadera',
        name: 'Abducción de cadera (máquina)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Glúteo medio',
        notes: 'Máquina #05 SmartFit. Sentado, pads en la parte externa de las rodillas. Abre las piernas contra la resistencia hasta el rango máximo cómodo. Pausa 1s. Regresa lento sin dejar que los pads lleguen al punto de contacto (mantén tensión). Espalda apoyada en el respaldo durante todo el movimiento.',
      },
      {
        id: 'aduccion-cadera',
        name: 'Aducción de cadera (máquina)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Aductores',
        notes: 'Máquina #06 SmartFit. Sentado, pads en la parte interna de las rodillas. Cierra las piernas contra la resistencia hasta que se toquen o lleguen al centro. Pausa 1s. Regresa lento sin dejar que los pads lleguen al punto de apertura máxima (mantén tensión). Espalda apoyada en el respaldo durante todo el movimiento.',
      },
      // ── PANTORRILLAS ──────────────────────────────────────────────────────
      {
        id: 'pantorrillas',
        name: 'Pantorrillas de pie (máquina)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Gastrocnemio, sóleo',
        notes: 'Máquina #08 SmartFit. Coloca los hombros bajo los pads, puntas de los pies en la plataforma (talones al aire). Baja los talones lo más que puedas sintiendo el estiramiento completo del gemelo (2s abajo). Sube hasta la punta máxima y pausa 2s apretando la pantorrilla. Las pantorrillas requieren rango completo y contracción sostenida para responder al entrenamiento.',
      },
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