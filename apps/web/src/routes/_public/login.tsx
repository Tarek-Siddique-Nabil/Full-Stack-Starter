import { createFileRoute, Link } from "@tanstack/react-router";
import LoginCredentialsForm from "@/routes/_public/-components/login-form";

export const Route = createFileRoute("/_public/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center p-2 md:p-6">
      <div className="w-full max-w-md rounded-lg border bg-elevated p-4 md:p-8">
        <LoginCredentialsForm />
        <div className="mt-4 text-center">
          {"Don't have an account? "}
          <Link className="underline" to="/register">
            Register
          </Link>
          !
        </div>
      </div>
    </div>
  );
}
