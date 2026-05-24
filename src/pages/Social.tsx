import { FaPlus } from "react-icons/fa6";
import Button from "../components/Button";
import { useState } from "react";
import type { LoaderData, Socials } from "../utils/types";
import SocialSummaryCard from "../components/social/SocialSummaryCard";
import FriendCard from "../components/social/FriendCard";
import PageHeadline from "../components/PageHeadline";
import { useLoaderData } from "react-router";
import AddFriend from "../components/social/AddFriend";

export default function Social() {
  const { data: socials } = useLoaderData() as LoaderData<Socials>;
  const [openNewFriend, setOpenNewFriend] = useState(false);

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
        <AddFriend onClose={() => setOpenNewFriend(false)} />
      )}
    </>
  );
}
