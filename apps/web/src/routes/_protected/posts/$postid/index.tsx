import { ArrowLeftIcon, ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@repo/ui/components/button";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/tooltip";
import { createFileRoute, Link } from "@tanstack/react-router";
import { apiClient } from "@/clients/apiClient";
import { queryClient } from "@/clients/queryClient";
import { postsLinkOptions } from "@/routes/_protected/posts/-validations/posts-link-options";

export const Route = createFileRoute("/_protected/posts/$postid/")({
  loader: ({ params }) =>
    queryClient.ensureQueryData(
      apiClient.posts.one.queryOptions({ input: { id: params.postid } })
    ),
  component: RouteComponent,
  errorComponent: ({ error, reset }) => {
    return (
      <div className="flex w-full flex-col items-center gap-y-3">
        <div>{error.message}</div>
        <div className="flex gap-2">
          <Button asChild className="w-full" variant="outline">
            <Link {...postsLinkOptions}>
              <ArrowLeftIcon />
              Go Back
            </Link>
          </Button>
          <Button
            className="w-full"
            onClick={() => {
              // Reset the router error boundary
              reset();
            }}
            variant="secondary"
          >
            Retry? <ReloadIcon />
          </Button>
        </div>
      </div>
    );
  },
});

function RouteComponent() {
  const post = Route.useLoaderData();

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col break-words px-4">
      <div className="rounded-2xl p-5 text-center">
        <h1 className="font-bold text-2xl md:text-4xl">{post.title}</h1>
        <h2 className="mt-2 text-gray-500 text-sm">
          Created by <span className="font-medium">{post.author.name}</span>
        </h2>
        <h2 className="mt-1 text-gray-500 text-sm">
          {new Date(post.createdAt).toLocaleString()}
        </h2>
      </div>
      <hr className="mt-3 border border-gray-500" />

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              asChild
              className="mt-4 w-12 border border-gray-500 hover:brightness-150 md:mt-6"
              variant="link"
            >
              <Link {...postsLinkOptions}>
                <ArrowLeftIcon />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent
            align="center"
            className="bg-neutral-500 fill-neutral-500 duration-0"
            side="right"
            sideOffset={4}
          >
            <span>View all posts</span>
            <TooltipArrow className="duration-0" height={10} width={15} />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="my-4 min-h-96 w-full rounded-2xl border border-gray-500 bg-elevated p-6 shadow md:my-6">
        <p className="whitespace-break-spaces leading-relaxed">
          {post.content ?? "No content available."}
        </p>
      </div>
    </div>
  );
}
