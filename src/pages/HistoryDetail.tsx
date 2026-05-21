import { Link, useLoaderData } from "react-router";
import type { Histories } from "../utils/types";
import AverageCard from "../components/history/AverageCard";
import ActivityCard from "../components/history/ActivityCard";
import PageHeadline from "../components/PageHeadline";
import { FaArrowLeft } from "react-icons/fa6";

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

type HistoryDetailLoaderData = {
  bulan: string;
};

export default function HistoryDetail() {
  const { bulan } = useLoaderData() as HistoryDetailLoaderData;

  return (
    <div className="container max-w-4xl mx-auto mt-8 px-4">
      <Link to="/history" className="inline-flex gap-4 items-center text-slate-600 mb-4 border-b border-transparent hover:border-slate-600">
        <FaArrowLeft />
        Back to monthly history
      </Link>
      <div className="flex justify-between items-center gap-6">
        <div>
          <PageHeadline page="History" title={`History in ${bulan}`} />
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
