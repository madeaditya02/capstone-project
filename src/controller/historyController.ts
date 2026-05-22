import type { LoaderFunctionArgs } from "react-router";
import type { Histories, MonthData } from "../utils/types";

// Halaman History
export async function allHistory() {

  const histories: MonthData[] = [
    {
      month: "Apr 2026",
      monthPath: "2026-04",
      recordedDays: 6,
      stressStatus: "Refreshed",
      averageStress: "56%",
      metrics: [
        {
          label: "Avg Screen Time",
          value: "8.0h",
        },
        {
          label: "Avg Sleep Duration",
          value: "6.6h",
        },
        {
          label: "Avg Exercise",
          value: "29m",
        },
        {
          label: "Avg Stress",
          value: "56%",
        },
      ],
    }
  ]

  return { data: histories }
}

// Halaman Detail History (Detail Bulan)
export async function detailHistory({ params }: LoaderFunctionArgs) {
  const { bulan } = params;

  if (!bulan || !/^\d{4}-\d{2}$/.test(bulan)) {
    throw new Response("Format bulan tidak valid", { status: 400 });
  }

  const histories: Histories = {
    month: 'Apr 2026',
    summary: [
      { label: 'Avg Exercise', value: '3.5h' },
      { label: 'Avg Screen Time', value: '12.5h' },
      { label: 'Avg Sleep Duration', value: '8.2h' },
      { label: 'Avg Stress', value: '82%' },
    ],
    history: [
      {
        date: "Sel, 28 Apr 2026",
        dateRaw: "2026-04-28",
        title: "Daily Activity Log",
        stressStatus: "Near-Burnout",
        stressLevel: 82,
        details: [
          { label: "Screen Time", value: "9.2h" },
          { label: "Device Before Sleep", value: "2h" },
          { label: "Sleep Duration", value: "5.5h" },
          { label: "Physical Activity", value: "0 min" },
          { label: "Caffeine Intake", value: "4 cups" },
          { label: "Mood", value: "😊 Anxious" },
        ],
      },
    ]
  }
  return { data: histories }
}