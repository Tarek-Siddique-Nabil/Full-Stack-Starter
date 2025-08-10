import { createORPCClient } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import type { ContractRouterClient } from '@orpc/contract';
import { createORPCReactQueryUtils } from '@orpc/react-query';
import type { contract } from '@repo/contract';

const rpcLink = new RPCLink({
  url: new URL('/rpc', 'http://localhost:3000'),
  headers: () => ({
    Authorization: 'Bearer default-token',
  }),
});

export const orpcClient: ContractRouterClient<typeof contract> =
  createORPCClient(rpcLink);

export const orpc = createORPCReactQueryUtils(orpcClient);
