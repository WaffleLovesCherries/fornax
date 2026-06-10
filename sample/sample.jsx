import { useState } from "react";

const PLAN = {
    Push: {
        color: "#e85d2f",
        accent: "#ff8c61",
        exercises: [
            { name: "Press de banca (barra)", sets: "2", rpe: "Fallo", muscles: "Pecho, tríceps, deltoides ant.", notes: "Agarre a la anchura de hombros. Controla la bajada 2s." },
            { name: "Press inclinado con mancuernas", sets: "2", rpe: "Fallo", muscles: "Pecho superior, deltoides ant.", notes: "45°. No bloquees codos arriba." },
            { name: "Press militar (barra o máquina)", sets: "2", rpe: "Fallo", muscles: "Deltoides, tríceps", notes: "Barra pasa por frente de cara, no detrás." },
            { name: "Elevaciones laterales", sets: "2", rpe: "Fallo", muscles: "Deltoides medial", notes: "Codo ligero roto, no balanceo." },
            { name: "Extensiones de tríceps en polea", sets: "2", rpe: "Fallo", muscles: "Tríceps", notes: "Codos fijos. Pronación al final." },
            { name: "CORE: Plank con rotación", sets: "2", rpe: "~30s c/u", muscles: "Core anterior y oblicuos", notes: "Mantén cadera neutral, no dejes que caiga." },
        ]
    },
    Pull: {
        color: "#2f7ee8",
        accent: "#61aaff",
        exercises: [
            { name: "Remo con barra (Pendlay o inclinado)", sets: "2", rpe: "Fallo", muscles: "Dorsal, romboides, bíceps", notes: "Pecho contra banco o espalda ~45°. Jala al ombligo." },
            { name: "Jalón al pecho en polea", sets: "2", rpe: "Fallo", muscles: "Dorsal, bíceps", notes: "Agarre prono, jala hasta barbilla, codos a costillas." },
            { name: "Remo en polea baja (cable)", sets: "2", rpe: "Fallo", muscles: "Dorsal medio, trapecios", notes: "Pecho recto, no te inclines hacia atrás en exceso." },
            { name: "Curl de bíceps con barra EZ", sets: "2", rpe: "Fallo", muscles: "Bíceps, braquial", notes: "Codos fijos. Nada de balanceo." },
            { name: "Curl martillo con mancuernas", sets: "2", rpe: "Fallo", muscles: "Braquiorradial, bíceps", notes: "Supinación neutra todo el recorrido." },
            { name: "CORE: Dead bug", sets: "2", rpe: "10 reps c/lado", muscles: "Core profundo, oblicuos", notes: "Espalda baja pegada al suelo todo el tiempo." },
        ]
    },
    Pierna: {
        color: "#1db87a",
        accent: "#5de0aa",
        exercises: [
            { name: "Sentadilla (barra libre o hack squat)", sets: "2", rpe: "Fallo", muscles: "Cuádriceps, glúteo, isquio", notes: "Profundidad por debajo de paralela. Rodillas sobre pies." },
            { name: "Prensa de pierna", sets: "2", rpe: "Fallo", muscles: "Cuádriceps, glúteo", notes: "Pies a la anchura de hombros. No bloquees rodillas arriba." },
            { name: "Extensiones de cuádriceps (máquina)", sets: "2", rpe: "Fallo", muscles: "Cuádriceps", notes: "Pausa 1s arriba. Baja controlado." },
            { name: "Curl de isquiotibiales (máquina)", sets: "2", rpe: "Fallo", muscles: "Isquiotibiales", notes: "Cadera pegada al banco. Recorrido completo." },
            { name: "Pantorrillas de pie (máquina o libre)", sets: "2", rpe: "Fallo", muscles: "Gastrocnemio, sóleo", notes: "Estiramiento completo abajo, pausa arriba." },
            { name: "CORE: Ab rollout o rueda abdominal", sets: "2", rpe: "~10 reps", muscles: "Core anterior completo", notes: "Si no tienes rueda: extensión de brazos en suelo desde rodillas." },
        ]
    }
};

const SCHEDULE = [
    { day: "Lunes", session: "Push" },
    { day: "Martes", session: "Pull" },
    { day: "Miércoles", session: "Pierna" },
    { day: "Jueves", session: "Push" },
    { day: "Viernes", session: "Pull" },
    { day: "Sábado", session: "Pierna" },
    { day: "Domingo", session: null },
];

const PRINCIPLES = [
    { icon: "🎯", title: "2 sets al fallo real", body: "Lleva cada set hasta que no puedas hacer una rep más con buena forma. Un set hecho bien vale más que 5 mediocres." },
    { icon: "📈", title: "Sobrecarga progresiva", body: "Cada semana intenta agregar 1–2 reps o 2.5 kg por ejercicio. Si no progresás, el entrenamiento no está funcionando." },
    { icon: "⏱️", title: "Descanso entre sets", body: "2–3 min para compuestos (press, sentadilla, remos). 60–90s para aislados (curl, extensiones, laterales)." },
    { icon: "🔄", title: "Deload cada 6–8 semanas", body: "Una semana al 60% de carga normal. Obligatorio. La recuperación es donde crece el músculo." },
    { icon: "😴", title: "Sueño y nutrición", body: "A 112 kg / 183 cm con objetivo de recomposición: apunta a ~1.8–2g proteína/kg. Sin sueño de calidad los sets al fallo son contraproducentes." },
    { icon: "🛡️", title: "Forma > ego", body: "Al fallo con mala técnica es lesión garantizada. Si la forma se quiebra antes del fallo, ese es tu fallo real." },
];

export default function App() {
    const [activeTab, setActiveTab] = useState("Push");
    const [expandedIdx, setExpandedIdx] = useState(null);
    const [view, setView] = useState("plan"); // plan | schedule | principles

    const session = PLAN[activeTab];

    return (
        <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0f0f10", minHeight: "100vh", color: "#e8e8e8", maxWidth: 480, margin: "0 auto" }}>
            {/* Header */}
            <div style={{ padding: "24px 20px 0", borderBottom: "1px solid #1e1e22" }}>
                <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "#666", textTransform: "uppercase", marginBottom: 4 }}>Plan de entrenamiento</div>
                <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>Push / Pull / Pierna</div>
                {/* Nav */}
                <div style={{ display: "flex", gap: 0, borderBottom: "1px solid #1e1e22" }}>
                    {["plan", "schedule", "principles"].map(v => (
                        <button key={v} onClick={() => setView(v)} style={{
                            background: "none", border: "none", color: view === v ? "#fff" : "#555", fontSize: 13, fontWeight: view === v ? 600 : 400,
                            padding: "8px 14px", cursor: "pointer", borderBottom: view === v ? "2px solid #fff" : "2px solid transparent",
                            marginBottom: -1, textTransform: "capitalize"
                        }}>
                            {v === "plan" ? "Ejercicios" : v === "schedule" ? "Semana" : "Principios"}
                        </button>
                    ))}
                </div>
            </div>

            {view === "plan" && (
                <div>
                    {/* Session tabs */}
                    <div style={{ display: "flex", gap: 8, padding: "16px 20px 0" }}>
                        {Object.keys(PLAN).map(tab => (
                            <button key={tab} onClick={() => { setActiveTab(tab); setExpandedIdx(null); }} style={{
                                background: activeTab === tab ? PLAN[tab].color : "#1a1a1e",
                                color: activeTab === tab ? "#fff" : "#777",
                                border: "none", borderRadius: 8, padding: "8px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer",
                                transition: "all 0.15s"
                            }}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Exercise list */}
                    <div style={{ padding: "12px 20px 32px" }}>
                        {session.exercises.map((ex, i) => {
                            const isCore = ex.name.startsWith("CORE:");
                            const isOpen = expandedIdx === i;
                            return (
                                <div key={i} onClick={() => setExpandedIdx(isOpen ? null : i)} style={{
                                    background: isCore ? "#161620" : "#17171b",
                                    border: `1px solid ${isCore ? "#2a2a35" : "#1e1e24"}`,
                                    borderLeft: isCore ? `3px solid #9b6fff` : `3px solid ${session.color}`,
                                    borderRadius: 10, marginBottom: 8, cursor: "pointer",
                                    transition: "background 0.1s"
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 14px" }}>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                                                {isCore && <span style={{ fontSize: 10, background: "#9b6fff22", color: "#9b6fff", padding: "2px 7px", borderRadius: 20, fontWeight: 700, letterSpacing: "0.1em" }}>CORE</span>}
                                                <span style={{ fontSize: 14, fontWeight: 600, color: isCore ? "#c4b0ff" : "#f0f0f0" }}>
                          {ex.name.replace("CORE: ", "")}
                        </span>
                                            </div>
                                            <div style={{ fontSize: 12, color: "#555" }}>{ex.muscles}</div>
                                        </div>
                                        <div style={{ textAlign: "right", paddingLeft: 12 }}>
                                            <div style={{ fontSize: 13, fontWeight: 700, color: session.accent }}>{ex.sets}×</div>
                                            <div style={{ fontSize: 11, color: "#555" }}>{ex.rpe}</div>
                                        </div>
                                    </div>
                                    {isOpen && (
                                        <div style={{ padding: "0 14px 14px", borderTop: "1px solid #1e1e24" }}>
                                            <div style={{ fontSize: 12, color: "#aaa", marginTop: 10, lineHeight: 1.6 }}>
                                                💡 {ex.notes}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        <div style={{ fontSize: 11, color: "#444", marginTop: 8, textAlign: "center" }}>Toca un ejercicio para ver notas técnicas</div>
                    </div>
                </div>
            )}

            {view === "schedule" && (
                <div style={{ padding: "20px 20px 32px" }}>
                    <div style={{ fontSize: 12, color: "#555", marginBottom: 16 }}>PPL×2 — 6 días de entrenamiento, 1 de descanso activo</div>
                    {SCHEDULE.map(({ day, session }) => (
                        <div key={day} style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            padding: "14px 16px", marginBottom: 6, borderRadius: 10,
                            background: session ? "#17171b" : "#111113",
                            border: `1px solid ${session ? "#1e1e24" : "#161618"}`
                        }}>
                            <span style={{ fontSize: 14, fontWeight: 500, color: session ? "#e8e8e8" : "#333" }}>{day}</span>
                            {session ? (
                                <span style={{
                                    fontSize: 12, fontWeight: 700, color: PLAN[session].color,
                                    background: PLAN[session].color + "18", padding: "4px 12px", borderRadius: 20
                                }}>{session}</span>
                            ) : (
                                <span style={{ fontSize: 12, color: "#333" }}>Descanso</span>
                            )}
                        </div>
                    ))}
                    <div style={{ marginTop: 20, background: "#17171b", borderRadius: 10, padding: 16, border: "1px solid #1e1e24" }}>
                        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>¿Cuánto dura cada sesión?</div>
                        <div style={{ fontSize: 12, color: "#777", lineHeight: 1.7 }}>
                            Con 2 sets al fallo + descansos adecuados: <strong style={{ color: "#bbb" }}>~50–65 minutos</strong>.<br />
                            Push y Pull: ~55 min. Pierna: puede llegar a 65 min por el core más demandante.
                        </div>
                    </div>
                    <div style={{ marginTop: 12, background: "#17171b", borderRadius: 10, padding: 16, border: "1px solid #1e1e24" }}>
                        <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Calentamiento (5–8 min)</div>
                        <div style={{ fontSize: 12, color: "#777", lineHeight: 1.7 }}>
                            • 1 set liviano al 50% del primer ejercicio (×15 reps)<br />
                            • Movilidad articular específica del día<br />
                            • Push: rotaciones de hombro / Pull: retracción escapular / Pierna: sentadilla con peso corporal
                        </div>
                    </div>
                </div>
            )}

            {view === "principles" && (
                <div style={{ padding: "20px 20px 32px" }}>
                    {PRINCIPLES.map((p, i) => (
                        <div key={i} style={{ background: "#17171b", border: "1px solid #1e1e24", borderRadius: 10, padding: "16px", marginBottom: 10 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                                <span style={{ fontSize: 20 }}>{p.icon}</span>
                                <span style={{ fontSize: 14, fontWeight: 600 }}>{p.title}</span>
                            </div>
                            <div style={{ fontSize: 12, color: "#888", lineHeight: 1.7, paddingLeft: 30 }}>{p.body}</div>
                        </div>
                    ))}
                    <div style={{ marginTop: 16, background: "#0d1a14", border: "1px solid #1a3028", borderRadius: 10, padding: 16 }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#5de0aa", marginBottom: 8 }}>Tu punto de partida</div>
                        <div style={{ fontSize: 12, color: "#777", lineHeight: 1.7 }}>
                            112 kg / 183 cm → IMC ~33. El plan PPL×2 con fallo real y core diario es adecuado para tu experiencia previa.<br /><br />
                            <strong style={{ color: "#aaa" }}>Objetivo realista a 6 meses:</strong> recomposición corporal progresiva — fuerza visible en 4–6 semanas, cambio físico notorio en 10–14 semanas con nutrición consistente.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}