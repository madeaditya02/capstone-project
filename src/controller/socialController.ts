import type { LoaderFunctionArgs } from "react-router"
import type { SocialProfile, Socials } from "../utils/types"

export async function allFriends() {
  const socials: Socials = {
    summary: [
      { label: 'Total Friends', value: 5 },
      { label: 'Refreshed', value: 5 },
      { label: 'Near-Burnout', value: 5 },
    ],
    friends: [
      {
        id: 1,
        emailAddress: "sarah@gmail.com",
        name: "Sarah Johnson",
        username: "sarahjohnson",
        status: "Refreshed",
        time: "2 hours ago",
        stressLevel: 25,
      },
      {
        id: 2,
        name: "Michael Chen",
        emailAddress: "michael@gmail.com",
        username: "michaelchen",
        status: "Strained",
        time: "30 minutes ago",
        stressLevel: 65,
      },
    ]
  }
  return { data: socials }
}

export async function friendDetail({ params }: LoaderFunctionArgs) {
  const { username } = params;

  const profile: SocialProfile = {
    friend: {
      id: 1,
      name: "Sarah Johnson",
      username: username ?? "",
      emailAddress: "sarah@gmail.com",
      status: "Refreshed",
      time: "2 hours ago",
      stressLevel: 25,
      job: "Product Designer",
      workLocation: "Jakarta, Indonesia",
      hobby: "Morning walk and journaling",
      bio: "Sarah keeps a steady routine with short screen breaks, consistent sleep, and light activity after work.",
    },
    histories: {
      month: "Apr 2026",
      summary: [
        { label: "Avg Exercise", value: "42m" },
        { label: "Avg Screen Time", value: "5.8h" },
        { label: "Avg Sleep Duration", value: "7.6h" },
        { label: "Avg Stress", value: "25%" },
      ],
      history: [
        {
          date: "Sel, 28 Apr 2026",
          dateRaw: "2026-04-28",
          title: "Daily Activity Log",
          stressStatus: "Refreshed",
          stressLevel: 24,
          details: [
            { label: "Screen Time", value: "5.4h" },
            { label: "Device Before Sleep", value: "30m" },
            { label: "Sleep Duration", value: "7.8h" },
            { label: "Physical Activity", value: "45 min" },
            { label: "Caffeine Intake", value: "1 cup" },
            { label: "Mood", value: "Calm" },
          ],
        },
        {
          date: "Sen, 27 Apr 2026",
          dateRaw: "2026-04-27",
          title: "Daily Activity Log",
          stressStatus: "Refreshed",
          stressLevel: 28,
          details: [
            { label: "Screen Time", value: "6.1h" },
            { label: "Device Before Sleep", value: "45m" },
            { label: "Sleep Duration", value: "7.4h" },
            { label: "Physical Activity", value: "40 min" },
            { label: "Caffeine Intake", value: "2 cups" },
            { label: "Mood", value: "Focused" },
          ],
        },
      ],
    },
  };

  return { data: profile };
}