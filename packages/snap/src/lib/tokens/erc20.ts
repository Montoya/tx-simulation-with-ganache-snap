import { decodeSingle } from '@metamask/abi-utils';
import { add0x } from '@metamask/utils';
import { EthereumProvider } from 'ganache';

const getTokenSymbol = async (provider: EthereumProvider, address: string) => {
  const result = await provider.request({
    method: 'eth_call',
    params: [
      {
        to: address,
        data: '0x95d89b41',
      },
    ],
  });
  const decoded = decodeSingle('string', result as `0x${string}`);
  return decoded;
};

const getTokenDecimals = async (
  provider: EthereumProvider,
  address: string,
) => {
  const result = await provider.request({
    method: 'eth_call',
    params: [
      {
        to: address,
        data: '0x95d89b41',
      },
    ],
  });
  const decoded = add0x(
    decodeSingle('uint8', result as `0x${string}`).toString(16),
  );
  return decoded;
};

export const decodeERC20Transfers = async (
  provider: EthereumProvider,
  logs: any,
) => {
  try {
    return await Promise.all(
      logs
        .filter(
          (log) =>
            log.decoded?.name === 'Transfer' ||
            log.topics[0] ===
              '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
        )
        .map(async (log) => {
          const from = decodeSingle('address', log.topics[1]);
          const to = decodeSingle('address', log.topics[2]);
          const value = decodeSingle('uint256', log.data).toString(10);
          const symbol = await getTokenSymbol(provider, log.address);
          const decimals = await getTokenDecimals(provider, log.address);
          return { from, to, value, symbol, decimals };
        }),
    );
  } catch {
    return [];
  }
};
