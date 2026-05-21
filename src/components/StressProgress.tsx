import type { Stress } from "../utils/types";

const accents: Record<Stress, string> = {
  'Refreshed': 'bg-emerald-500',
  'Strained': 'bg-amber-500',
  'Near-Burnout': 'bg-rose-500',
}

export default function StressProgress({ label, stressLevel }: { label: Stress, stressLevel: number } ) {
  return (
    <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-200">
      <div
        className={`h-full rounded-full ${accents[label]}`}
        style={{ width: `${stressLevel}%` }}
      />
    </div>
  )
}