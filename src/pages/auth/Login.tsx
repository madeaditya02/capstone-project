import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import { login } from "../../utils/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await login({
        emailAddress: email,
        password,
      });

      navigate("/", { replace: true });
    } catch {
      setError("Email atau password salah.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6">
      <section className="flex w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-white shadow-lg md:min-h-120 md:flex-row">
        <aside className="flex bg-primary p-8 sm:p-12 md:w-2/5 md:flex-col md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-black sm:text-5xl">CogniCare</h1>
            <p className="mt-4 max-w-xs text-lg font-medium leading-8 text-black">
              Helping you understand your cognitive fatigue and stress—so you can take better care of your mind, every day.
            </p>
          </div>

          <div className="text-center hidden md:block">
            <div className="mb-6">
              <p className="text-lg font-semibold text-slate-800">Don't have an account?</p>
              <Link to="/auth/register" className="font-semibold underline">
                Get Started!
              </Link>
            </div>
            <p>Read our <a href="#" className="underline">terms</a> and <a href="#" className="underline">conditions</a></p>
          </div>
        </aside>

        <div className="flex flex-1 items-center justify-center p-8 sm:p-12">
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <h2 className="mb-6 text-4xl font-semibold text-black sm:text-5xl">Account Login</h2>

            <div className="mb-3">
              <label htmlFor="email">Email address</label>
              <Input type="email" id="email" value={email} onChange={handleEmail} className="shadow-md" required />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <Input type="password" id="password" value={password} onChange={handlePassword} className="shadow-md" required />
            </div>

            <label htmlFor="remember" className="mb-5 flex items-center gap-3 text-slate-700">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="size-5 rounded accent-primary-400"
              />
              <span>Remember Me</span>
            </label>

            {error && <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

            <Button type="submit" className="w-full justify-center disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Log in"}
            </Button>

            <div className="mt-8 text-center md:hidden">
              <p className="font-semibold text-slate-800">Don't ave an account?</p>
              <Link to="/auth/register" className="font-semibold underline">
                Get Started!
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
