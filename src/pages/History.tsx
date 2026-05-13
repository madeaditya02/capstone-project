import { CiCalendar } from "react-icons/ci";
import type { Histories, History } from "../utils/types";
import AverageCard from "../components/history/AverageCard";
import ActivityCard from "../components/history/ActivityCard";

const histories: Histories = {
  summary: [
    { label: 'Avg Exercise', value: '3.5h' },
    { label: 'Avg Screen Time', value: '12.5h'},
    { label: 'Avg Sleep Duration', value: '8.2h'},
    { label: 'Avg Stress', value: '82%'},
  ],
  history: [
    {
      date: "Sel, 28 Apr 2026",
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

export default function History() {
  return (
    <div className="container max-w-4xl mx-auto mt-8 px-4">
      <div className="flex justify-between items-center gap-6">
        <div className="flex gap-4">
          <div className="size-12 rounded-xl flex justify-center items-center bg-white shadow-md">
            <CiCalendar className="size-6 text-primary-700" />
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold">History</h3>
            <p>Track your daily wellness activities</p>
          </div>
        </div>
        {/* Input Search & Filter */}
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {histories.summary.map((average, i) => (
          <AverageCard key={i} attribute={average.label} value={average.value} />
        ))}
      </div>
      <div className="histories mt-8 flex flex-col gap-4">
        {histories.history.map((history) => (
          <ActivityCard history={history} />
        ))}
      </div>
    </div>
  );
}
