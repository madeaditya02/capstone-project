import Button from "../components/Button";
import Input from "../components/Input";
import useInput from "../hooks/useInput";

export default function Profile() {
  const [name, handleName] = useInput('Aditya');
  const [email] = useInput('aditya@example.com');
  const [oldPassword, handleOldPassword] = useInput('');
  const [newPassword, handleNewPassword] = useInput('');
  const [confirmNewPassword, handleConfirmNewPassword] = useInput('');

  return (
    <main className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">Profile</h1>
        <p className="mt-1 text-slate-600">Update your account information and password.</p>
      </div>

      <div className="flex flex-col gap-6">
        <section className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-slate-900">Personal Information</h2>
            <p className="mt-1 text-sm text-slate-500">Edit your name. Your email address cannot be changed here.</p>
          </div>

          <form action="">
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <Input type="text" id="name" value={name} onChange={handleName} />
            </div>

            <div className="mb-5">
              <label htmlFor="email">Email</label>
              <Input type="email" id="email" value={email} disabled className="cursor-not-allowed bg-slate-100 text-slate-500" />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Save Profile</Button>
            </div>
          </form>
        </section>

        <section className="rounded-xl bg-white p-6 shadow-md">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-slate-900">Update Password</h2>
            <p className="mt-1 text-sm text-slate-500">Enter your current password before setting a new one.</p>
          </div>

          <form action="">
            <div className="mb-3">
              <label htmlFor="old_password">Old Password</label>
              <Input type="password" id="old_password" value={oldPassword} onChange={handleOldPassword} />
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div className="mb-3">
                <label htmlFor="new_password">New Password</label>
                <Input type="password" id="new_password" value={newPassword} onChange={handleNewPassword} />
              </div>

              <div className="mb-3">
                <label htmlFor="confirm_new_password">Confirm New Password</label>
                <Input type="password" id="confirm_new_password" value={confirmNewPassword} onChange={handleConfirmNewPassword} />
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit">Update Password</Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}
