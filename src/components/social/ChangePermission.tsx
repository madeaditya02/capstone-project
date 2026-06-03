import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";

const permissions = [
  {
    id: "stress",
    label: "Stress status",
    description: "Allow friends to see your latest stress status.",
  },
  {
    id: "activity",
    label: "Activity history",
    description: "Allow friends to open your shared activity history.",
  },
  {
    id: "profile",
    label: "Profile details",
    description: "Allow friends to see profile details such as job and hobby.",
  },
];

export default function ChangePermission({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState(["stress", "activity"]);

  const togglePermission = (permissionId: string) => {
    setSelected((current) =>
      current.includes(permissionId)
        ? current.filter((id) => id !== permissionId)
        : [...current, permissionId]
    );
  };

  return (
    <Modal title="Change Permission" onClose={onClose}>
      <form className="space-y-4">
        <div>
          <p className="font-semibold text-slate-900">Sharing access</p>
          <p className="mt-1 text-sm text-slate-500">
            Choose what your friends can access from your social profile.
          </p>
        </div>

        <div className="space-y-3">
          {permissions.map((permission) => (
            <label
              key={permission.id}
              htmlFor={permission.id}
              className="flex cursor-pointer items-start gap-3 rounded-md border border-slate-200 bg-white p-3 transition-colors hover:border-primary-400 hover:bg-primary-50"
            >
              <input
                id={permission.id}
                type="checkbox"
                checked={selected.includes(permission.id)}
                onChange={() => togglePermission(permission.id)}
                className="mt-1 size-4 accent-primary-600"
              />
              <span>
                <span className="block font-semibold text-slate-800">
                  {permission.label}
                </span>
                <span className="block text-sm text-slate-500">
                  {permission.description}
                </span>
              </span>
            </label>
          ))}
        </div>

        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="rounded px-4 py-2 font-semibold text-slate-600 transition-colors hover:bg-slate-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <Button type="button" className="justify-center" onClick={onClose}>
            Save Permission
          </Button>
        </div>
      </form>
    </Modal>
  );
}
