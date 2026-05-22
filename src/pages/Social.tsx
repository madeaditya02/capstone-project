import { FaPlus } from "react-icons/fa6";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import useInput from "../hooks/useInput";
import type { LoaderData, Socials } from "../utils/types";
import SocialSummaryCard from "../components/social/SocialSummaryCard";
import FriendCard from "../components/social/FriendCard";
import PageHeadline from "../components/PageHeadline";
import { useLoaderData } from "react-router";

export default function Social() {
  const { data: socials } = useLoaderData() as LoaderData<Socials>;
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
          <FriendCard key={friend.id} friend={friend} />
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
