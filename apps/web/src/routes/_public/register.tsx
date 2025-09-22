import { createFileRoute, Link } from "@tanstack/react-router";
import RegisterCredentialsForm from "@/routes/_public/-components/register-form";

export const Route = createFileRoute("/_public/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center p-2 md:p-6">
      <div className="w-full max-w-md rounded-lg border bg-elevated p-4 md:p-8">
        <RegisterCredentialsForm />
        <div className="mt-4 text-center">
          Already have an account?{" "}
          <Link className="underline" to="/login">
            Log in
          </Link>
          !
        </div>
      </div>
    </div>
  );
}
