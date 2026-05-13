export type Stress = 'Refreshed' | 'Strained' | 'Near-Burnout';

export interface Stat {
  'Screen Time': number,
  'Device Before Sleep': number,
  'Sleep Duration': number,
  'Caffeine Intake': number,
  'Mood': string,
  'Physical Activity': number
}

export type StatKey = keyof Stat;

export interface History {
  date: string,
  title: string,
  stressStatus: Stress,
  stressLevel: number,
  details: {
    label: StatKey,
    value: string,
  }[]
}

export const historySummaryLabels = ['Avg Screen Time', 'Avg Sleep Duration', 'Avg Exercise', 'Avg Stress'] as const
export type HistorySummaryLabel = typeof historySummaryLabels[number];

export interface Histories {
  'summary': {
    label: HistorySummaryLabel,
    value: string
  }[],
  'history': History[]
}
