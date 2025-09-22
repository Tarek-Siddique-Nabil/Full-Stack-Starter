import { Link } from "@tanstack/react-router";
import type { AuthSession } from "@/clients/authClient";
import { postsLinkOptions } from "@/routes/_protected/posts/-validations/posts-link-options";
import NavContainer from "@/routes/-components/layout/nav/nav-container";
import UserAvatar from "@/routes/-components/layout/nav/user-avatar";

const activeClassName = "underline decoration-2 opacity-70";

export function Navbar({ session }: Readonly<{ session: AuthSession }>) {
  return (
    <NavContainer>
      <div className="flex gap-x-4">
        <Link
          activeOptions={{ exact: true }}
          activeProps={{ className: activeClassName }}
          to="/"
        >
          Home
        </Link>
        {session?.user ? (
          <Link
            {...postsLinkOptions}
            activeProps={{ className: activeClassName }}
          >
            Posts
          </Link>
        ) : null}
      </div>
      {session?.user ? (
        <UserAvatar user={session.user} />
      ) : (
        <div className="flex justify-between gap-x-2">
          <Link
            activeOptions={{ exact: true }}
            activeProps={{ className: activeClassName }}
            to="/login"
          >
            Login
          </Link>
          <span>|</span>
          <Link
            activeOptions={{ exact: true }}
            activeProps={{ className: activeClassName }}
            to="/register"
          >
            Register
          </Link>
        </div>
      )}
    </NavContainer>
  );
}
