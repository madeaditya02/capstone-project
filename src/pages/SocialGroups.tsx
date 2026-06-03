import { Link } from "react-router";
import { FaArrowLeft, FaPlus, FaUsers } from "react-icons/fa6";
import PageHeadline from "../components/PageHeadline";
import Button from "../components/Button";
import { useState } from "react";
import Modal from "../components/Modal";
import Input from "../components/Input";
import useFormInput from "../hooks/useFormInput";
import Textarea from "../components/Textarea";

const groups = [
  {
    groupName: "Close Friends",
    slug: "close-friends",
    members: 8,
    description: "Friends who can see your full wellbeing activity.",
  },
  {
    groupName: "Work Circle",
    slug: "work-circle",
    members: 12,
    description: "Colleagues with access to basic profile and stress updates.",
  },
  {
    groupName: "Support Team",
    slug: "support-team",
    members: 5,
    description: "Trusted people for quick check-ins and shared progress.",
  },
];

export default function SocialGroups() {
  const [openNewGroup, setOpenNewGroup] = useState(false);

  const [form, handleInput] = useFormInput({
    groupName: '',
    description: '',
  })

  return (
    <>
    <div className="container mx-auto mt-8 max-w-4xl px-4 pb-10">
      <Link
        to="/social"
        className="mb-4 inline-flex items-center gap-3 border-b border-transparent text-slate-600 hover:border-slate-600"
      >
        <FaArrowLeft />
        Back to social
      </Link>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <PageHeadline page="Social" title="Groups" />
        <Button
          type="button"
          className="justify-center whitespace-nowrap"
          onClick={() => setOpenNewGroup(true)}
        >
          <FaPlus />
          Add Group
        </Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <Link to={`/social/groups/${group.slug}`}
            key={group.groupName}
            className="block rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:scale-105"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  {group.groupName}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {group.description}
                </p>
              </div>
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-900">
                <FaUsers />
              </div>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-700">
              {group.members} members
            </p>
          </Link>
        ))}
      </div>
    </div>
    {openNewGroup && (
      <Modal title="Add Group" onClose={() => setOpenNewGroup(false)}>
        <form action="">
          <div className="mb-3">
            <label htmlFor="groupName">Group Name</label>
            <Input type="text" id="groupName" value={form.groupName} onChange={handleInput} placeholder="Group name" />
          </div>
          <div className="mb-3">
            <label htmlFor="description">Description</label>
            <Textarea type="text" id="description" value={form.description} onChange={handleInput} placeholder="Group name" />
          </div>
          <div className="flex justify-end">
            <Button type="submit">Add Group</Button>
          </div>
        </form>
      </Modal>
    )}
    </>
  );
}
