import { useState } from 'react'
import { formatWeight, kgToLb, type Unit } from '../data/storage'

interface Props {
  weightLb: number | null
  unit: Unit
  onWeight: (weightLb: number | null) => void
  onUnit: (unit: Unit) => void
}

/**
 * Campo de peso con su propio selector lb/kg. El texto se edita localmente
 * y se propaga siempre convertido a libras (valor canónico); al cambiar de
 * unidad solo se re-formatea lo visible.
 */
export default function WeightInput({ weightLb, unit, onWeight, onUnit }: Props) {
  const [text, setText] = useState(() => (weightLb !== null ? formatWeight(weightLb, unit) : ''))

  // Re-derivar el texto visible en el mismo render en que cambia la unidad
  // (patrón "adjust state during render"), sin parpadeo del valor anterior.
  const [prevUnit, setPrevUnit] = useState(unit)
  if (prevUnit !== unit) {
    setPrevUnit(unit)
    setText(weightLb !== null ? formatWeight(weightLb, unit) : '')
  }

  function handleChange(value: string) {
    setText(value)
    const parsed = parseFloat(value.replace(',', '.'))
    if (Number.isFinite(parsed) && parsed >= 0) {
      onWeight(unit === 'lb' ? parsed : kgToLb(parsed))
    } else {
      onWeight(null)
    }
  }

  return (
    <div className="weight-input">
      <input
        type="text"
        inputMode="decimal"
        placeholder="—"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        aria-label="Peso"
      />
      <div className="unit-toggle" role="group" aria-label="Unidad de peso">
        {(['lb', 'kg'] as const).map((u) => (
          <button
            key={u}
            type="button"
            className={unit === u ? 'on' : ''}
            aria-pressed={unit === u}
            onClick={() => onUnit(u)}
          >
            {u.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}
