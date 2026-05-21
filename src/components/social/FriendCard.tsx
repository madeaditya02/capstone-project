import type { Friend } from "../../utils/types";
import { initials } from "../../utils/util";
import StressBadge from "../StressBadge";
import StressProgress from "../StressProgress";
import StressTrend from "../StressTrend";

export default function FriendCard({ friend }: { friend: Friend }) {
  return (
    <div
      key={friend.name}
      className="flex sm:items-center justify-between flex-col sm:flex-row rounded-xl bg-white px-5 py-4 shadow-md gap-1.5"
    >
      <div className="flex items-center gap-1.5 sm:gap-4">
        <div className="flex size-9 sm:size-12 items-center justify-center rounded-full bg-primary text-sm sm:text-base font-bold text-slate-800 shrink-0">
          {initials(friend.name)}
        </div>
        <div className="flex md:flex-col w-full justify-between">
          <h4 className="sm:text-lg font-semibold text-slate-800">{friend.name}</h4>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <StressBadge label={friend.status} />
            <span className="text-[10px] sm:text-base">• {friend.time}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:items-end sm:gap-2">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span>Stress Level</span>
          <StressTrend label={friend.status} />
        </div>

        <div className="flex items-center gap-5">
          <StressProgress label={friend.status} stressLevel={friend.stressLevel} />
        </div>
      </div>
    </div>
  )
}