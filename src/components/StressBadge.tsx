import type { Stress } from "../utils/types";

const badgeStyles: Record<Stress, string> = {
  'Relaxed': 'bg-emerald-100 text-emerald-700',
  'Normal': 'bg-amber-100 text-amber-700',
  'Exhausted': 'bg-rose-100 text-rose-700',
}

export default function StressBadge({ label }: { label: Stress } ) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeStyles[label]}`}>
      { label }
    </span>
  )
}