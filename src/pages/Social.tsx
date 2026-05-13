import { FaArrowTrendDown, FaArrowTrendUp, FaMinus, FaPlus } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import useInput from "../hooks/useInput";

const friends = [
  {
    initials: "SJ",
    name: "Sarah Johnson",
    status: "Refreshed",
    time: "2 hours ago",
    stressLevel: 25,
    accent: "bg-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
    trendColor: "text-emerald-500",
  },
  {
    initials: "MC",
    name: "Michael Chen",
    status: "Strained",
    time: "30 minutes ago",
    stressLevel: 65,
    accent: "bg-amber-500",
    badge: "bg-amber-100 text-amber-700",
    trendColor: "text-amber-500",
  },
];

export default function Social() {
  const [openNewFriend, setOpenNewFriend] = useState(false)
  const [email, handlEemail] = useInput('');
  return (
    <>
      <div className="container max-w-4xl mx-auto mt-8">
        <div className="flex justify-between items-center gap-6">
          <div className="flex gap-4">
            <div className="size-12 rounded-xl flex justify-center items-center bg-white shadow-md">
              <FiUsers className="size-6 text-primary-700" />
            </div>
            <div className="">
              <h3 className="text-2xl font-semibold">Social</h3>
              <p>Track your friends' wellness journey</p>
            </div>
          </div>
          <Button onClick={() => setOpenNewFriend(true)}>
            <FaPlus />
            Add Friend
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-6 gap-6">
          <div className="p-4 rounded-xl bg-white col-span-3 md:col-span-2">
            <div className="">Total Friends</div>
            <h3 className="text-3xl font-semibold">5</h3>
          </div>
          <div className="p-4 rounded-xl bg-white col-span-3 md:col-span-2">
            <div className="">Total Friends</div>
            <h3 className="text-3xl font-semibold">5</h3>
          </div>
          <div className="p-4 rounded-xl bg-white col-span-full md:col-span-2">
            <div className="">Total Friends</div>
            <h3 className="text-3xl font-semibold">5</h3>
          </div>
        </div>
        <div className="list-friends mt-8 flex flex-col gap-4">
        {friends.map((friend) => (
          <div
            key={friend.name}
            className="flex sm:items-center justify-between flex-col sm:flex-row rounded-xl bg-white px-5 py-4 shadow-md gap-1.5"
          >
            <div className="flex items-center gap-1.5 sm:gap-4">
              <div className="flex size-9 sm:size-12 items-center justify-center rounded-full bg-primary text-sm sm:text-base font-bold text-slate-800 shrink-0">
                {friend.initials}
              </div>
              <div className="flex md:flex-col w-full justify-between">
                <h4 className="sm:text-lg font-semibold text-slate-800">{friend.name}</h4>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className={`rounded-full px-2 sm:px-3 py-1 text-[8px] sm:text-xs font-medium ${friend.badge}`}>
                    {friend.status}
                  </span>
                  <span className="text-[10px] sm:text-base">• {friend.time}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:items-end sm:gap-2">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span>Stress Level</span>
                <span className={`text-base font-semibold ${friend.trendColor}`}>
                  {friend.status == 'Near-Burnout' ? <FaArrowTrendUp /> : (friend.status == 'Refreshed' ? <FaArrowTrendDown /> : <FaMinus />)}
                </span>
              </div>

              <div className="flex items-center gap-5">
                <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full ${friend.accent}`}
                    style={{ width: `${friend.stressLevel}%` }}
                  />
                </div>
                <span className="w-10 text-right text-lg font-bold text-slate-800">
                  {friend.stressLevel}%
                </span>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      {openNewFriend && (
      <Modal title="Add Friend" onClose={() => setOpenNewFriend(false)}>
        <form action="">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" value={email} onChange={handlEemail} placeholder="example@gmail.com" />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Add Friend</Button>
          </div>
        </form>
      </Modal>
      )}
    </>
  );
}
