import Navbar from '@/components/ui/Navbar';
import React from 'react';
import Link from 'next/link';
import styles from '../styles/landing.module.css';

declare global {
  interface Window {
    use_modal: HTMLDialogElement;
  }
}

const HexagonalGrid = () => {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <Navbar />
      <div className={styles.main}>
        <div className={styles.container}>
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={() => window.use_modal.showModal()}
          >
            <img className="m-auto mt-[25px]" src="/landing1.svg" alt="" />
          </div>

          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={() => window.use_modal.showModal()}
          >
            <img className="m-auto mt-[25px]" src="/landing2.svg" alt="" />
          </div>
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={() => window.use_modal.showModal()}
          >
            <img className="m-auto mt-[25px]" src="/landing3.svg" alt="" />
          </div>
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={() => window.use_modal.showModal()}
          >
            <img className="m-auto mt-[25px]" src="/landing4.svg" alt="" />
          </div>
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={() => window.use_modal.showModal()}
          >
            <img className="m-auto mt-[25px]" src="/landing5.svg" alt="" />
          </div>
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={() => window.use_modal.showModal()}
          >
            <img className="m-auto mt-[25px]" src="/landing6.svg" alt="" />
          </div>
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={() => window.use_modal.showModal()}
          >
            <img className="m-auto mt-[25px]" src="/landing7.svg" alt="" />
          </div>
          <div
            className="flex flex-row items-center justify-center cursor-pointer"
            onClick={() => window.use_modal.showModal()}
          >
            <img className="m-auto mt-[25px]" src="/landing8.svg" alt="" />
          </div>
        </div>
      </div>
      <dialog id="use_modal" className="modal">
        <form
          method="dialog"
          className="absolute modal-box h-[709px] w-[820px] max-w-[820px] border-black border-[2px] rounded-[4px] bg-[#FFC022] p-0"
        >
          <div className="absolute w-full">
            <div className="h-[613px] flex flex-col align-center justify-center">
              <img className="w-[729] h-[566px] " src="/cover.svg" alt="" />
            </div>
            <div className=" w-full left-0 right-0 border-t-2 border-black flex flex-row items-center h-[96px] gap-[24px] justify-end px-[24px]">
              <Link href="/personalize">
                <button className="h-[64px] w-[210px] text-white bg-black text-[24px]">
                  pERSONALIZE
                </button>
              </Link>
              <Link href="/chat">
                <button className="h-[64px] w-[210px] text-white bg-black text-[24px]">
                  LETs uSE
                </button>
              </Link>
            </div>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default HexagonalGrid;
