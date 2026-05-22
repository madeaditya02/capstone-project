import { Link } from "react-router";
import type { Friend } from "../../utils/types";
import { initials } from "../../utils/util";
import StressBadge from "../StressBadge";
import StressProgress from "../StressProgress";
import StressTrend from "../StressTrend";
import { FaChevronRight } from "react-icons/fa6";

export default function FriendCard({ friend }: { friend: Friend }) {
  return (
    <div className="flex gap-4 rounded-xl bg-white px-5 py-4 shadow-md items-center">
      <div
        className="flex flex-1 sm:items-center justify-between flex-col sm:flex-row gap-1.5"
      >
        <div className="flex items-center gap-1.5 sm:gap-4">
          <Link to={`/social/${friend.username}`} className="flex size-9 sm:size-12 items-center justify-center rounded-full bg-primary text-sm sm:text-base font-bold text-slate-800 shrink-0">
            {initials(friend.name)}
          </Link>
          <div className="flex md:flex-col w-full justify-between">
            <Link to={`/social/${friend.username}`} className="sm:text-lg font-semibold text-slate-800 hover:underline">{friend.name}</Link>
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
      <Link to={`/social/${friend.username}`}>
        <FaChevronRight />
      </Link>
    </div>
  )
}