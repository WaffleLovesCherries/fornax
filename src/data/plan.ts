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
        name: 'Press inclinado con mancuernas',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Pecho superior, deltoides ant.',
        notes: 'Banco inclinado a 30–45°. Sentado, toma las mancuernas y llévalas a la altura del pecho con un giro de muñeca. Empuja hacia arriba y ligeramente hacia adentro describiendo un arco. No bloquees los codos arriba; mantén tensión. Baja controlado hasta que los codos queden por debajo del nivel del banco.',
      },
      {
        id: 'press-pecho-maquina',
        name: 'Press de pecho en máquina',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Pecho, tríceps',
        notes: 'Máquina #20 SmartFit. Ajusta el asiento para que los agarres queden al nivel del pecho medio. Espalda apoyada completamente en el respaldo, pies en el suelo. Empuja los agarres al frente hasta casi extender los codos, luego regresa lento (3s) sin dejar que el peso descanse entre reps.',
      },
      {
        id: 'mariposa-maquina',
        name: 'Mariposa / Pec deck (máquina)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Pecho, deltoides ant.',
        notes: 'Máquina #21 SmartFit. Ajusta el asiento para que los codos queden al nivel de los hombros. Apoya los antebrazos en los pads. Cierra los brazos hacia el centro como si quisieras que los codos se tocaran; pausa 1s apretando el pecho. Regresa lento sin dejar que los pads lleguen al tope (mantén tensión).',
      },
      {
        id: 'cruce-cables-bajo',
        name: 'Cruce de cables bajo (cable crossover)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Pecho inferior',
        notes: 'Máquina #63 SmartFit (cable crossover). Ajusta las poleas en la posición más baja. Párate en el centro con un pie adelante para estabilidad. Toma un agarre con cada mano, inclínate ligeramente hacia adelante. Cruza los cables hacia arriba y al frente en arco hasta que las manos se encuentren a la altura del pecho. Pausa 1s y regresa controlado.',
      },
      // ── HOMBRO ────────────────────────────────────────────────────────────
      {
        id: 'press-militar',
        name: 'Press militar (barra o máquina)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Deltoides, tríceps',
        notes: 'Máquina #50 SmartFit, o con barra sentado en banco con respaldo vertical. Agarre prono a la anchura de hombros. Empuja directamente hacia arriba hasta casi extender los codos. Baja hasta que los brazos queden paralelos al suelo (90°). Mantén el core activo; no arquees la lumbar al empujar.',
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
        id: 'elevaciones-lat-cable',
        name: 'Elevaciones laterales en cable',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Deltoides medial',
        notes: 'Máquina #63. Polea en posición baja. Párate de lado a la máquina, toma el agarre con la mano más alejada (agarre cruzado frente al cuerpo). Eleva el brazo lateralmente hasta la altura del hombro. El cable mantiene tensión constante a diferencia de la mancuerna. Haz todas las reps de un lado, luego cambia.',
      },
      {
        id: 'elevaciones-frontales',
        name: 'Elevaciones frontales (mancuernas)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Deltoides anterior',
        notes: 'De pie, mancuernas frente a los muslos con agarre prono. Eleva un brazo hacia adelante hasta la altura del hombro (no más arriba). Baja lento y alterna con el otro brazo. Mantén el torso quieto; si lo balanceas, la carga es demasiado pesada.',
      },
      // ── TRÍCEPS ───────────────────────────────────────────────────────────
      {
        id: 'extensiones-triceps',
        name: 'Extensiones de tríceps en polea (cuerda)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Tríceps',
        notes: 'Máquina #51 o #63 SmartFit. Polea alta con accesorio de cuerda. De pie frente a la máquina, agarra la cuerda con ambas manos, codos pegados a los costados (no los muevas durante el ejercicio). Extiende los brazos hacia abajo separando los extremos de la cuerda al final del movimiento. Regresa lento hasta que los antebrazos queden paralelos al suelo.',
      },
      {
        id: 'press-frances',
        name: 'Press francés (barra EZ)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Tríceps (cabeza larga)',
        notes: 'Banco plano. Acostado, sostén la barra EZ con agarre prono cerrado. Extiende los brazos hacia arriba (perpendiculares al suelo). Sin mover los codos, baja la barra hacia la frente o ligeramente detrás de la cabeza. Regresa explosivo. Los codos deben apuntar al techo durante todo el movimiento.',
      },
      {
        id: 'fondos-triceps',
        name: 'Fondos en banco (triceps dips)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Tríceps, pecho',
        notes: 'Banco plano o dos bancas paralelas. Apoya las manos en el borde del banco detrás de ti, dedos hacia adelante. Cuerpo recto, piernas extendidas al frente. Baja el cuerpo hasta que los codos lleguen a 90°, luego empuja hacia arriba. Para aumentar dificultad, apoya los pies en otra superficie o añade peso encima de las piernas.',
      },
      // ── CORE ──────────────────────────────────────────────────────────────
      {
        id: 'plank-rotacion',
        name: 'Plank con rotación',
        sets: '2',
        rpe: '~30s c/u',
        muscles: 'Core anterior y oblicuos',
        notes: 'Posición de plancha sobre antebrazos. Cadera neutra (ni hundida ni elevada). Desde esa posición, rota el torso abriendo un brazo hacia el techo, luego regresa. Alterna lados. Si no rotás, simplemente mantén el plank 30–45s. La clave es no dejar que la cadera caiga en ningún momento.',
        core: true,
      },
      {
        id: 'cable-woodchop',
        name: 'Cable woodchop (corte de leña)',
        sets: '2',
        rpe: '12 reps c/lado',
        muscles: 'Oblicuos, core rotacional',
        notes: 'Máquina #63 SmartFit. Polea alta. Párate de lado a la máquina, toma el agarre con ambas manos. Con los brazos casi extendidos, jala el cable diagonalmente desde arriba-afuera hacia abajo-adentro (como cortar con un hacha). La rotación debe venir del torso, no de los brazos. Haz todas las reps de un lado, luego cambia.',
        core: true,
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
        id: 'remo-barra',
        name: 'Remo con barra (Pendlay o inclinado)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Dorsal, romboides, bíceps',
        notes: 'De pie, rodillas ligeramente flexionadas, torso inclinado ~45° (Pendlay = paralelo al suelo). Agarre prono a la anchura de hombros. Jala la barra hacia el ombligo apretando escápulas al final. Pausa 1s en contracción. Baja controlado. No uses el torso para hacer palanca.',
      },
      {
        id: 'jalon-pecho',
        name: 'Jalón al pecho en polea',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Dorsal, bíceps',
        notes: 'Máquina #30 SmartFit. Sentado, muslos bajo los pads de sujeción. Agarre prono más ancho que los hombros. Inclínate ligeramente atrás (~15°). Jala la barra hacia la parte superior del pecho llevando los codos hacia los costados y abajo. Aprieta el dorsal en la contracción. Regresa lento con los brazos completamente extendidos.',
      },
      {
        id: 'pull-up',
        name: 'Pull-up / Dominadas (peso corporal)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Dorsal, bíceps, core',
        notes: 'Barra de dominadas (área funcional SmartFit). Agarre prono a la anchura de hombros. Cuelga completamente (brazos extendidos). Jala el cuerpo hacia arriba hasta que la barbilla supere la barra. Baja lento en 3s hasta la extensión completa. Si no llegas al fallo en reps limpias, haz negativas (sube con impulso, baja solo en 5s).',
      },
      {
        id: 'remo-polea-baja',
        name: 'Remo en polea baja (cable)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Dorsal medio, trapecios',
        notes: 'Máquina #34 SmartFit. Sentado en el banco con pies apoyados. Agarre neutro (en V). Torso recto, no te inclines hacia atrás para hacer palanca. Jala el agarre hacia el abdomen bajo apretando escápulas. Pausa 1s. Regresa extendiendo completamente los brazos y dejando que las escápulas se abran.',
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
        id: 'pullover-cable',
        name: 'Pullover en polea alta',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Dorsal, serrato',
        notes: 'Máquina #63. Polea alta. Párate de espaldas a la máquina o arrodíllate frente a ella. Toma el agarre (barra recta o cuerda), brazos extendidos sobre la cabeza. Baja los brazos hacia los muslos describiendo un arco, manteniendo los codos casi rectos. El movimiento viene del dorsal, no de los brazos. Regresa lento.',
      },
      // ── BÍCEPS ────────────────────────────────────────────────────────────
      {
        id: 'curl-ez',
        name: 'Curl de bíceps con barra EZ',
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
        name: 'Curl predicador (máquina o barra EZ)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Bíceps (pico)',
        notes: 'Máquina #42 SmartFit, o banco predicador con barra EZ. Apoya los tríceps en el pad inclinado, codos al borde. Agarra la barra o los agarres de la máquina. Sube hasta casi la vertical sin que los codos se levanten del pad. Baja lento hasta la extensión completa (este estiramiento es crucial para el crecimiento).',
      },
      {
        id: 'curl-cable-polea',
        name: 'Curl en polea baja (cable)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Bíceps',
        notes: 'Máquina #63. Polea baja con barra recta o agarre en D. De pie frente a la máquina. Codos pegados a los costados. Sube el agarre hasta los hombros girando la muñeca hacia afuera al final (supinación completa). El cable mantiene tensión constante en el punto de máxima contracción, a diferencia de la mancuerna.',
      },
      // ── HOMBRO POSTERIOR ──────────────────────────────────────────────────
      {
        id: 'pajaros-mancuernas',
        name: 'Pájaros / Reverse fly (mancuernas)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Deltoides posterior, romboides',
        notes: 'Sentado en el borde de un banco, inclínate hacia adelante hasta que el torso quede casi paralelo al suelo. Mancuernas colgando bajo el pecho con agarre neutro. Eleva los brazos lateralmente con codos ligeramente rotos hasta la altura de los hombros. Pausa 1s. Baja lento. No uses impulso ni balancees el torso.',
      },
      // ── CORE ──────────────────────────────────────────────────────────────
      {
        id: 'dead-bug',
        name: 'Dead bug',
        sets: '2',
        rpe: '10 reps c/lado',
        muscles: 'Core profundo, oblicuos',
        notes: 'En el suelo, boca arriba. Brazos extendidos hacia el techo, rodillas a 90° en el aire (posición de mesa). Sin dejar que la espalda baja se despegue del suelo, extiende simultáneamente el brazo derecho hacia atrás y la pierna izquierda hacia adelante. Regresa y repite con el lado opuesto. Lento y controlado.',
        core: true,
      },
      {
        id: 'hollow-hold',
        name: 'Hollow hold',
        sets: '2',
        rpe: '30s',
        muscles: 'Core anterior, flexores de cadera',
        notes: 'En el suelo, boca arriba. Aplana la espalda baja contra el suelo contrayendo el abdomen. Eleva hombros y piernas juntas formando una "banana" cóncava. Brazos extendidos sobre la cabeza. Piernas a ~30–45° del suelo. Mantén la posición sin dejar que la espalda baja se arquee. Si es muy difícil, dobla las rodillas.',
        core: true,
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
        name: 'Sentadilla (barra libre o hack squat)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Cuádriceps, glúteo, isquio',
        notes: 'Máquina #10 SmartFit (hack squat) o squat rack. Hombros bajo los pads (hack) o barra en la parte alta de los trapecios (barra libre). Pies a la anchura de hombros o un poco más, puntillas ligeramente hacia afuera. Desciende hasta por debajo de paralela (muslos bajo las rodillas). Rodillas siguen la línea de los pies. Empuja el suelo hacia abajo al subir.',
      },
      {
        id: 'prensa-pierna',
        name: 'Prensa de pierna 45°',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Cuádriceps, glúteo',
        notes: 'Máquina #09 SmartFit. Siéntate en la silla y apoya los pies en la plataforma a la anchura de hombros. Suelta los seguros y baja la plataforma controlado hasta que las rodillas lleguen cerca del pecho. Empuja hasta casi extender las piernas (no bloquees las rodillas). Pies altos en la plataforma = más glúteo; pies bajos = más cuádriceps.',
      },
      {
        id: 'extensiones-cuadriceps',
        name: 'Extensiones de cuádriceps (máquina)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Cuádriceps',
        notes: 'Máquina #02 SmartFit. Ajusta el pad para que quede en el empeine (no en la espinilla). Espalda apoyada en el respaldo. Extiende ambas piernas hasta casi la extensión completa. Pausa 1s apretando el cuádriceps. Baja en 3s controlado hasta 90°. Este es el ejercicio de mayor aislamiento para el cuádriceps.',
      },
      {
        id: 'prensa-horizontal',
        name: 'Prensa de pierna horizontal',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Cuádriceps, glúteo',
        notes: 'Máquina #01 SmartFit. Acostado en la silla, pies en la plataforma. A diferencia de la prensa 45°, el movimiento es horizontal. Baja la plataforma hasta que las rodillas queden a 90°. Empuja hasta casi extender. Útil si la prensa 45° genera molestia en la espalda baja.',
      },
      // ── ISQUIOTIBIALES ────────────────────────────────────────────────────
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
        muscles: 'Isquiotibiales (énfasis proximal)',
        notes: 'Máquina #04 SmartFit. Sentado, ajusta el pad superior sobre los muslos para fijar la cadera. Coloca el pad inferior en los tobillos. Jala los talones hacia abajo y atrás. Esta variante genera más activación en la inserción proximal del isquiotibial (cerca de la cadera) que la versión acostada.',
      },
      {
        id: 'peso-muerto-rumano',
        name: 'Peso muerto rumano (mancuernas)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Isquiotibiales, glúteo',
        notes: 'De pie con mancuernas frente a los muslos. Rodillas ligeramente flexionadas y fijas (no las doblas más durante el movimiento). Empuja las caderas hacia atrás dejando que las mancuernas bajen por las piernas. Siente el estiramiento en los isquios. Cuando llegues a media pantorrilla, activa glúteos y empieza a subir empujando las caderas hacia adelante. Espalda recta en todo momento.',
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
        muscles: 'Glúteo medio, TFL',
        notes: 'Máquina #05 SmartFit. Sentado, pads en la parte externa de las rodillas. Abre las piernas contra la resistencia hasta el rango máximo cómodo. Pausa 1s. Regresa lento sin dejar que los pads lleguen al punto de contacto (mantén tensión). Espalda apoyada en el respaldo durante todo el movimiento.',
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
      // ── CORE ──────────────────────────────────────────────────────────────
      {
        id: 'ab-rollout',
        name: 'Ab rollout / rueda abdominal',
        sets: '2',
        rpe: '~10 reps',
        muscles: 'Core anterior completo',
        notes: 'De rodillas en el suelo (o de pie para nivel avanzado), toma la rueda abdominal. Desde las rodillas, rueda hacia adelante extendiendo los brazos hasta que el torso quede casi paralelo al suelo. La espalda no debe arquearse; el abdomen soporta toda la carga. Regresa jalando el abdomen hacia las rodillas. Si no hay rueda: desde rodillas extiende los brazos en el suelo y regresa.',
        core: true,
      },
      {
        id: 'crunch-cable',
        name: 'Crunch en polea alta (cable)',
        sets: '2',
        rpe: 'Fallo',
        muscles: 'Recto abdominal',
        notes: 'Máquina #63 SmartFit. Polea alta con accesorio de cuerda. Arrodíllate frente a la máquina, agarra la cuerda detrás de la cabeza o en los lados de esta. Sin mover las caderas, dobla el torso hacia abajo jalando con el abdomen (no con los brazos). Lleva los codos hacia las rodillas. Pausa 1s abajo apretando el abdomen. Regresa controlado. Las caderas no se mueven durante todo el movimiento.',
        core: true,
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