import '@/styles/base.css';
import type { AppProps } from 'next/app';
import { DM_Sans } from 'next/font/google';
import {
  ThirdwebProvider,
  localWallet,
  metamaskWallet,
} from '@thirdweb-dev/react';
import { Fantom, HederaTestnet } from '@thirdweb-dev/chains';

const DM = DM_Sans({ weight: ['500', '400', '700'], subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThirdwebProvider
        activeChain={Fantom}
        supportedWallets={[localWallet(), metamaskWallet()]}
      >
        <main className={DM.className}>
          <Component {...pageProps} />
        </main>
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
