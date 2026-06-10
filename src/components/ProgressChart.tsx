import { lbToKg, type HistoryEntry, type Unit } from '../data/storage'

interface Props {
  history: HistoryEntry[]
  unit: Unit
  color: string
  accent: string
}

const W = 440
const H = 180
const PAD = { top: 18, right: 16, bottom: 26, left: 16 }

function shortDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getDate()}/${d.getMonth() + 1}`
}

/** Gráfico de línea SVG hecho a mano — sin dependencias. */
export default function ProgressChart({ history, unit, color, accent }: Props) {
  if (history.length === 0) {
    return <div className="chart-empty">Sin registros todavía. Terminá un entrenamiento para ver tu progreso.</div>
  }

  const values = history.map((h) => (unit === 'lb' ? h.weightLb : lbToKg(h.weightLb)))
  const min = Math.min(...values)
  const max = Math.max(...values)
  const span = max - min || 1

  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top - PAD.bottom

  const points = values.map((v, i) => ({
    x: PAD.left + (history.length === 1 ? innerW / 2 : (i / (history.length - 1)) * innerW),
    y: PAD.top + innerH - ((v - min) / span) * innerH,
  }))

  const line = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  const area = `${line} L${points[points.length - 1].x.toFixed(1)},${H - PAD.bottom} L${points[0].x.toFixed(1)},${H - PAD.bottom} Z`
  const last = points[points.length - 1]
  const unitLabel = unit.toUpperCase()

  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Progreso de peso">
      <defs>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {[0.25, 0.5, 0.75].map((t) => (
        <line
          key={t}
          x1={PAD.left} x2={W - PAD.right}
          y1={PAD.top + innerH * t} y2={PAD.top + innerH * t}
          className="chart-grid"
        />
      ))}

      {history.length > 1 && <path d={area} fill="url(#chart-fill)" />}
      {history.length > 1 && <path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />}

      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === points.length - 1 ? 4.5 : 3} fill={i === points.length - 1 ? accent : color} />
      ))}

      <text x={PAD.left} y={PAD.top - 6} className="chart-label">
        MAX {Math.round(max * 10) / 10} {unitLabel}
      </text>
      <text x={last.x} y={last.y - 10} textAnchor="end" className="chart-value" fill={accent}>
        {Math.round(values[values.length - 1] * 10) / 10} {unitLabel}
      </text>
      <text x={PAD.left} y={H - 8} className="chart-label">{shortDate(history[0].date)}</text>
      <text x={W - PAD.right} y={H - 8} textAnchor="end" className="chart-label">
        {shortDate(history[history.length - 1].date)}
      </text>
    </svg>
  )
}
