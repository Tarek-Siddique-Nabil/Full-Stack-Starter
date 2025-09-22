import {
  ExternalLinkIcon,
  Link2Icon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Button } from "@repo/ui/components/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTheme } from "next-themes";
import { Fragment } from "react/jsx-runtime";
import urlJoin from "url-join";
import { authClient } from "@/clients/authClient";
import { env } from "@/env";
import { postsLinkOptions } from "@/routes/_protected/posts/-validations/posts-link-options";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session } = authClient.useSession();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="mt-1">
      {session?.user && (
        <Fragment>
          <div className="mb-5 flex flex-col rounded-lg bg-elevated p-3">
            <div>
              Welcome, <span className="font-bold">{session.user.name}</span>!
            </div>
            <div className="mt-3 flex gap-x-1.5">
              Click{" "}
              <Link
                {...postsLinkOptions}
                className="flex items-center gap-x-1 text-blue-500 underline"
              >
                here <Link2Icon className="mt-0.5" />
              </Link>{" "}
              to view your posts.
            </div>

            <div className="mt-3">
              <p>
                You can also interact with the OpenAPI specification using
                Scalar:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  <a
                    className="inline-flex items-center gap-x-1 break-words text-blue-500 underline"
                    href={urlJoin(
                      env.PUBLIC_SERVER_URL,
                      env.PUBLIC_SERVER_API_PATH
                    )}
                    rel="noreferrer"
                    target="_blank"
                  >
                    API
                    <ExternalLinkIcon className="mt-0.5 h-4 w-4" />
                  </a>
                </li>
                <li>
                  <a
                    className="inline-flex items-center gap-x-1 break-words text-blue-500 underline"
                    href={urlJoin(
                      env.PUBLIC_SERVER_URL,
                      env.PUBLIC_SERVER_API_PATH,
                      "auth",
                      "reference"
                    )}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Auth
                    <ExternalLinkIcon className="mt-0.5 h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Fragment>
      )}
      <div>
        This is the live demo for{" "}
        <a
          className="text-blue-500 underline brightness-125"
          href="https://github.com/nktnet1/rt-stack"
          rel="noreferrer"
          target="_blank"
        >
          RT Stack
        </a>
        .
      </div>
      {!session?.user && (
        <div className="mt-4">
          Please{" "}
          <Link className="font-bold underline" to="/login">
            log in
          </Link>
          .
        </div>
      )}

      <div className="mt-3 flex items-center gap-x-2">
        Toggle theme:
        <Button
          className="h-9 w-9 rounded-full border-2 border-gray-500"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          variant="ghost"
        >
          {resolvedTheme === "dark" ? (
            <MoonIcon className="text-yellow-300" />
          ) : (
            <SunIcon className="text-red-600" />
          )}
        </Button>
      </div>
    </div>
  );
}
