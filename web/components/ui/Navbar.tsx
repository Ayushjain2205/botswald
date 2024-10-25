'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import * as Popover from '@radix-ui/react-popover';
import { InputNumber } from 'antd';
import { ethers } from 'ethers';
import { abi } from '../../config/abi';
import { fetchCovalentData } from '../../helpers/covalentHelper.js';

const Navbar = () => {
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [inputValue, setInputValue] = useState(100);
  const [tokenBalance, setTokenBalance] = useState<string | null>(null); // new state variable to hold token balance

  const address = useAddress();

  const contractAddress = '0x581f62c0901d4dce2553cb6140dBb4CeE533d834';

  const contractABI = abi;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as ethers.providers.ExternalProvider,
      );

      const signer = provider.getSigner();

      const contractInstance = new ethers.Contract(
        contractAddress,
        contractABI,
        signer,
      );

      setContract(contractInstance);

      async function getTokenBalance() {
        if (address) {
          let balance = await contractInstance.balanceOf(address);
          let decimals = await contractInstance.decimals();
          let adjustedBalance = ethers.utils.formatUnits(balance, decimals);
          setTokenBalance(adjustedBalance);
        } else {
          console.log('The address is not defined');
        }
      }

      getTokenBalance();
      fetchCovalentData();
    } else {
      console.log('Please install MetaMask or another Ethereum wallet');
      // handle the error, e.g. show a message to the user
    }
  }, [address]);

  async function mintTokens() {
    if (!contract) {
      console.error('Contract is not loaded');
      return;
    }

    let to = address || '0xCafa93E9985793E2475bD58B9215c21Dbd421fD0';
    const amount = ethers.utils.parseUnits(inputValue.toString(), 18); // The amount of b-coins to be minted

    await contract.mint(to, amount);
  }

  const [active, setActive] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <div className="navbar bg-base-100 h-[88px] padding-auto px-[40px] border-b-2 border-[#373F41]">
      <div className="navbar-start">
        <Link href="/">
          <img src="/logo.svg" className="h-[49px] w-[168px]" alt="" />
        </Link>
      </div>
      <div className="navbar-center">
        <div className="flex flex-row gap-[48px] text-[20px]">
          <Link href="/">
            <span
              className={`text-${
                active === '/' ? 'gray-500 font-bold' : 'base-500'
              }`}
            >
              eXPLORE
            </span>
          </Link>
          <Link href="/create">
            <span
              className={`text-${
                active === '/create' ? 'gray-500 font-bold' : 'base-500'
              }`}
            >
              cREATE
            </span>
          </Link>
          <Link href="/dashboard">
            <span
              className={`text-${
                active === '/dashboard' ? 'gray-500 font-bold' : 'base-500'
              }`}
            >
              dASHBOARD
            </span>
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <div className="flex flex-row justify-center items-center gap-[10px]">
          <Popover.Root>
            <Popover.Trigger asChild>
              <button className="flex flex-row justify-center items-center h-[48px] w-[151px] text-white bg-black text-[16px] rounded-[2px]">
                {active === '/' ? (
                  'Buy coins'
                ) : (
                  <>
                    <img src="/bcoin.svg" alt="" /> &nbsp; &nbsp;
                    {Math.floor(Number(tokenBalance))}
                  </>
                )}
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                className="rounded p-5 w-[311px] h-[252px] bg-black shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                sideOffset={5}
              >
                <p className="font-bold text-[24px] text-[#F24E1E]">
                  10 B-coins = $1
                </p>
                <p className="text-[18px] text-white mt-[16px]">
                  let’s purchase?
                </p>
                <InputNumber
                  min={0}
                  max={1000}
                  defaultValue={100}
                  className="mt-[8px] input input-bordered w-[279px] h-[48px] flex items-center hover:border-[#262626] hover:border-opacity-40 overflow-hidden rounded-[2px]"
                  onChange={(value) => {
                    if (value !== null) {
                      setInputValue(value);
                    }
                  }}
                />
                <div className="flex flex-row justify-between w-[279px] mt-[24px]">
                  <img src="/stars.svg" alt="" />
                  <button
                    onClick={mintTokens}
                    className="bg-[#F24E1E] h-[48px] w-[96px] font-bold text-white text-[16px] rounded-[2px]"
                  >
                    Buy now
                  </button>
                </div>

                <Popover.Arrow className="fill-black" />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
          <ConnectWallet className="connect-btn" theme="light" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
