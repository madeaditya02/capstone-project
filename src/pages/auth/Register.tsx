import { Link } from "react-router";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useInput from "../../hooks/useInput";
import { useState } from "react";

export default function Register() {
  const [name, handleName] = useInput('');
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');
  const [confirmPassword, handleConfirmPassword] = useInput('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6">
      <section className="flex w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-lg md:min-h-120 md:flex-row">
        <aside className="flex bg-primary p-8 sm:p-12 md:w-2/5 md:flex-col md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-black sm:text-5xl">CogniCare</h1>
            <p className="mt-4 max-w-xs text-lg font-medium leading-8 text-black">
              Helping you understand your cognitive fatigue and stress so you can take better care of your mind, every day.
            </p>
          </div>

          <div className="mt-10 hidden text-center md:block">
            <p className="mb-3 text-lg font-semibold text-slate-800">Have an account?</p>
            <Link
              to="/auth"
              className="inline-flex w-36 items-center justify-center rounded-md border border-black px-4 py-2 font-semibold text-slate-900 transition-colors hover:bg-white/40"
            >
              Log in
            </Link>
          </div>
        </aside>

        <div className="flex flex-1 items-center justify-center p-8 sm:p-12">
          <form className="w-full max-w-md">
            <h2 className="mb-6 text-4xl font-semibold text-black sm:text-5xl">Register</h2>

            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <Input type="text" id="name" value={name} onChange={handleName} className="shadow-md" />
            </div>

            <div className="mb-3">
              <label htmlFor="email">Email address</label>
              <Input type="email" id="email" value={email} onChange={handleEmail} className="shadow-md" />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="mb-3 flex-1">
                <label htmlFor="password">Password</label>
                <Input type="password" id="password" value={password} onChange={handlePassword} className="shadow-md" />
              </div>

              <div className="mb-3 flex-1">
                <label htmlFor="confirm_password">Confirm Password</label>
                <Input type="password" id="confirm_password" value={confirmPassword} onChange={handleConfirmPassword} className="shadow-md" />
              </div>
            </div>

            <label htmlFor="terms" className="mb-5 flex items-center gap-3 text-slate-700">
              <input
                type="checkbox"
                id="terms"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                className="size-5 rounded accent-primary-400"
              />
              <span>
                I accept the <a href="#" className="text-blue-600 underline">terms</a> and <a href="#" className="text-blue-600 underline">conditions</a>
              </span>
            </label>

            <Button type="submit" className="w-full justify-center">
              Register
            </Button>

            <div className="mt-8 text-center md:hidden">
              <p className="mb-3 font-semibold text-slate-800">Have an account?</p>
              <Link
                to="/auth"
                className="inline-flex w-36 items-center justify-center rounded-md border border-black px-4 py-2 font-semibold text-slate-900 transition-colors hover:bg-primary-100"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
