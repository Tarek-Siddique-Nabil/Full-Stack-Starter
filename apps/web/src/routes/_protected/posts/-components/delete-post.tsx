import { Button } from "@repo/ui/components/button";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/tooltip";
import { cn } from "@repo/ui/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { toast } from "sonner";
import { apiClient } from "@/clients/apiClient";
import Spinner from "@/routes/-components/common/spinner";

export default function DeletePostButton({
  children,
  className,
  postId,
}: Readonly<{
  children: ReactNode;
  className?: string;
  postId: string;
}>) {
  const { refetch } = useQuery(apiClient.posts.all.queryOptions());

  const deletePostMutation = useMutation(
    apiClient.posts.delete.mutationOptions({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: async () => {
        await refetch();
        toast.info("Post deleted successfully.");
      },
    })
  );
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn("h-9 w-10", className)}
            disabled={deletePostMutation.isPending}
            onClick={(e) => {
              e.preventDefault();
              deletePostMutation.mutate({ id: postId });
            }}
            variant="destructive"
          >
            {deletePostMutation.isPending ? <Spinner /> : children}
          </Button>
        </TooltipTrigger>
        <TooltipContent
          align="center"
          className="bg-neutral-500 fill-neutral-500 duration-0"
          side="left"
          sideOffset={4}
        >
          <span>Delete Post</span>
          <TooltipArrow className="duration-0" height={10} width={15} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
