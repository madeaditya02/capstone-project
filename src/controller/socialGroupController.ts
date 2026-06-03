import type { LoaderFunctionArgs } from "react-router";
import type { Friend, Socials } from "../utils/types";

export type SocialGroup = {
  groupName: string;
  slug: string;
  members: number;
  description: string;
  friends: Friend[];
};

export type SocialGroupDetail = {
  group: Omit<SocialGroup, "friends">;
  summary: Socials["summary"];
  friends: Friend[];
};

const groups: SocialGroup[] = [
  {
    groupName: "Close Friends",
    slug: "close-friends",
    members: 8,
    description: "Friends who can see your full wellbeing activity.",
    friends: [
      {
        id: 1,
        emailAddress: "sarah@gmail.com",
        name: "Sarah Johnson",
        username: "sarahjohnson",
        status: "Relaxed",
        time: "2 hours ago",
        stressLevel: 25,
      },
      {
        id: 2,
        name: "Michael Chen",
        emailAddress: "michael@gmail.com",
        username: "michaelchen",
        status: "Normal",
        time: "30 minutes ago",
        stressLevel: 65,
      },
      {
        id: 3,
        name: "Nadia Putri",
        emailAddress: "nadia@gmail.com",
        username: "nadiaputri",
        status: "Exhausted",
        time: "10 minutes ago",
        stressLevel: 86,
      },
    ],
  },
  {
    groupName: "Work Circle",
    slug: "work-circle",
    members: 12,
    description: "Colleagues with access to basic profile and stress updates.",
    friends: [
      {
        id: 4,
        name: "Raka Pratama",
        emailAddress: "raka@gmail.com",
        username: "rakapratama",
        status: "Relaxed",
        time: "1 hour ago",
        stressLevel: 31,
      },
      {
        id: 5,
        name: "Anisa Laras",
        emailAddress: "anisa@gmail.com",
        username: "anisalaras",
        status: "Exhausted",
        time: "18 minutes ago",
        stressLevel: 82,
      },
    ],
  },
  {
    groupName: "Support Team",
    slug: "support-team",
    members: 5,
    description: "Trusted people for quick check-ins and shared progress.",
    friends: [
      {
        id: 6,
        name: "Dimas Ardi",
        emailAddress: "dimas@gmail.com",
        username: "dimasardi",
        status: "Relaxed",
        time: "3 hours ago",
        stressLevel: 20,
      },
      {
        id: 7,
        name: "Maya Sari",
        emailAddress: "maya@gmail.com",
        username: "mayasari",
        status: "Normal",
        time: "45 minutes ago",
        stressLevel: 58,
      },
    ],
  },
];

export async function groupDetail({ params }: LoaderFunctionArgs) {
  const group = groups.find((item) => item.slug === params.slug);

  if (!group) {
    throw new Response("Not Found", { status: 404 });
  }

  const relaxedFriends = group.friends.filter((friend) => friend.status === "Relaxed").length;
  const exhaustedFriends = group.friends.filter((friend) => friend.status === "Exhausted").length;

  const detail: SocialGroupDetail = {
    group: {
      groupName: group.groupName,
      slug: group.slug,
      members: group.members,
      description: group.description,
    },
    summary: [
      { label: "Total Friends", value: group.friends.length },
      { label: "Relaxed", value: relaxedFriends },
      { label: "Exhausted", value: exhaustedFriends },
    ],
    friends: group.friends,
  };

  return { data: detail };
}
