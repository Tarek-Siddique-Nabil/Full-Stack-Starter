import {
  ArrowDownIcon,
  ArrowUpIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import type { RouterOutput } from "@repo/api/client";
import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/tooltip";
import { useQuery } from "@tanstack/react-query";
import {
  createFileRoute,
  Link,
  type SearchSchemaInput,
  stripSearchParams,
  useNavigate,
} from "@tanstack/react-router";
import * as v from "valibot";
import { apiClient } from "@/clients/apiClient";
import { queryClient } from "@/clients/queryClient";
import CreatePostButton from "@/routes/_protected/posts/-components/create-post";
import DeletePostButton from "@/routes/_protected/posts/-components/delete-post";
import {
  type PostSearchSchema,
  postsSearchDefaults,
  postsSearchSchema,
} from "@/routes/_protected/posts/-validations/posts-link-options";

export const Route = createFileRoute("/_protected/posts/")({
  loader: () => queryClient.ensureQueryData(apiClient.posts.all.queryOptions()),
  component: RouteComponent,
  validateSearch: (input: SearchSchemaInput) =>
    v.parse(postsSearchSchema, input),
  search: {
    middlewares: [stripSearchParams(postsSearchDefaults)],
  },
  errorComponent: ({ error }) => (
    <div className="flex w-full flex-col items-center gap-y-3">
      <div>{error.message}</div>
    </div>
  ),
});

function PostItem({
  post,
  disabled,
}: Readonly<{
  post: RouterOutput["posts"]["all"][number];
  disabled: boolean;
}>) {
  return (
    <Link
      className="flex w-full items-center justify-between gap-3 rounded-xl border border-gray-500 bg-elevated p-4 hover:brightness-90"
      disabled={disabled}
      params={{ postid: post.id }}
      to="/posts/$postid"
    >
      <div className="flex flex-col gap-y-1">
        <div className="wrap-anywhere line-clamp-3 font-bold text-lg">
          {post.title}
        </div>
        <div className="text-sm italic">
          {new Date(post.createdAt).toLocaleString()}
        </div>
      </div>

      <DeletePostButton postId={post.id}>
        <TrashIcon />
      </DeletePostButton>
    </Link>
  );
}

function RouteComponent() {
  const { data: posts, isPending } = useQuery(
    apiClient.posts.all.queryOptions()
  );
  const navigate = useNavigate({ from: Route.fullPath });
  const search = Route.useSearch();

  const updateFilters = (name: keyof PostSearchSchema, value: unknown) => {
    navigate({ search: (prev) => ({ ...prev, [name]: value }) });
  };

  /**
   * You could memoize posts, although if you use the react 19 compiler
   * (which RT-stack will in the future), it won't be necessary.
   */
  const lowercaseSearch = search.searchString.toLowerCase();
  const filteredPost = posts
    ?.filter((p) => p.title.toLowerCase().includes(lowercaseSearch))
    ?.sort((a, b) =>
      search.sortDirection === "asc"
        ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col p-1.5 md:p-4">
      <div className="flex items-center justify-between border">
        <h1 className="text-2xl">Posts</h1>
        <CreatePostButton />
      </div>
      <hr className="mt-4 border-gray-400 border-b-2" />

      <div className="relative mt-4 flex items-center justify-end gap-x-2">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild onClick={(e) => e.preventDefault()}>
              <Button
                className="w-12 border border-input hover:brightness-150"
                onClick={() =>
                  updateFilters(
                    "sortDirection",
                    search.sortDirection === "asc" ? "desc" : "asc"
                  )
                }
                variant="link"
              >
                {search.sortDirection === "asc" ? (
                  <ArrowUpIcon />
                ) : (
                  <ArrowDownIcon />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent
              align="center"
              className="bg-neutral-500 fill-neutral-500 duration-0"
              onPointerDownOutside={(e) => e.preventDefault()}
              side="top"
              sideOffset={4}
            >
              <span>Sort by created date ({search.sortDirection})</span>
              <TooltipArrow className="duration-0" height={10} width={15} />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="relative w-full sm:max-w-64">
          <Input
            className="peer w-full pr-10 placeholder:italic"
            onChange={(e) => updateFilters("searchString", e.target.value)}
            placeholder="Search by title..."
            value={search.searchString}
          />
          <MagnifyingGlassIcon className="-translate-y-1/2 absolute top-1/2 right-3 transform text-input transition-colors peer-focus:text-foreground" />
        </div>
      </div>

      <div className="my-4 flex flex-wrap gap-x-3 gap-y-3 md:my-6">
        {filteredPost?.length
          ? filteredPost.map((p) => (
              <PostItem disabled={isPending} key={p.id} post={p} />
            ))
          : "There are no posts available."}
      </div>
    </div>
  );
}
