import { FaPlus } from "react-icons/fa6";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import useInput from "../hooks/useInput";
import type { Socials } from "../utils/types";
import SocialSummaryCard from "../components/social/SocialSummaryCard";
import FriendCard from "../components/social/FriendCard";
import PageHeadline from "../components/PageHeadline";

const socials: Socials = {
  summary: [
    { label: 'Total Friends', value: 5 },
    { label: 'Refreshed', value: 5 },
    { label: 'Near-Burnout', value: 5 },
  ],
  friends: [
    {
      name: "Sarah Johnson",
      status: "Refreshed",
      time: "2 hours ago",
      stressLevel: 25,
    },
    {
      name: "Michael Chen",
      status: "Strained",
      time: "30 minutes ago",
      stressLevel: 65,
    },
  ]
}

export default function Social() {
  const [openNewFriend, setOpenNewFriend] = useState(false)
  const [email, handlEemail] = useInput('');
  return (
    <>
      <div className="container max-w-4xl mx-auto mt-8">
        <div className="flex justify-between items-center gap-6">
          <PageHeadline page="Social" />
          <Button onClick={() => setOpenNewFriend(true)}>
            <FaPlus />
            Add Friend
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-6 gap-6">
          { socials.summary.map((stat, i) => <SocialSummaryCard key={i} stat={stat} />) }
        </div>
        <div className="list-friends mt-8 flex flex-col gap-4">
        {socials.friends.map((friend) => (
          <FriendCard friend={friend} />
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
