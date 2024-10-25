interface LayoutProps {
  children?: React.ReactNode;
}
import { ConnectWallet } from '@thirdweb-dev/react';
import Navbar from './ui/Navbar';

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <Navbar />
      <div className="flex flex-row items-center mx-auto pb-[50px]">
        <main className="mx-auto flex-col overflow-scroll">{children}</main>
      </div>
    </div>
  );
}
