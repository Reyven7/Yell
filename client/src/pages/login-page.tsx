import LoginForm from "@/components/forms/login-form";
import { Toaster } from "sonner";

const LoginPage = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
        <Toaster />
      </div>
    </div>
  );
};

export default LoginPage;
