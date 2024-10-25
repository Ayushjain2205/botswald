import Layout from '@/components/layout';
import React from 'react';
import BoxHeader from '@/components/ui/BoxHeader';
import Link from 'next/link';
import ChatBot from '@/components/chatbox';
import { CopyBlock, dracula } from 'react-code-blocks';
import { apiCode } from '@/config/apiCode';

const Preview = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-[24px] w-[1152px]">
        <ChatBot height={578} />
        <div className="flex flex-row gap-[24px]">
          <div className="w-[516px]">
            <BoxHeader title="How should it be used?" bg="#fff">
              <div className="flex flex-col gap-[16px]">
                <div className="flex felx-row items-center gap-[10px]">
                  <input
                    type="checkbox"
                    className="checkbox h-[24px] w-[24px]"
                  />
                  <span className="text-[24px]">Use as web interface</span>
                </div>
                <div className="flex felx-row items-center gap-[10px]">
                  <input
                    type="checkbox"
                    className="checkbox h-[24px] w-[24px]"
                  />
                  <span className="text-[24px]">Use a chrome extension</span>
                </div>
                <div className="flex felx-row items-center gap-[10px]">
                  <input
                    type="checkbox"
                    className="checkbox h-[24px] w-[24px]"
                  />
                  <span className="text-[24px]">Use as API</span>
                </div>
                <div className="flex felx-row items-center gap-[10px]">
                  <input
                    type="checkbox"
                    className="checkbox h-[24px] w-[24px]"
                  />
                  <span className="text-[24px]">Use a widget in mobile</span>
                </div>
              </div>
            </BoxHeader>
          </div>
          <div className="w-[612px]">
            <BoxHeader title="bOT API" bg="#fff">
              <div className="max-h-[214px] overflow-scroll">
                <CopyBlock
                  text={apiCode}
                  language="js"
                  showLineNumbers={true}
                  theme={dracula}
                  codeBlock
                />
              </div>
            </BoxHeader>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <Link href="personalize">
            <button className="flex flex-row justify-center  items-center h-[56px] w-[315px] text-white bg-black text-[24px]">
              <img src="/arrow-left.svg" alt="" />
              &nbsp;go back to training
            </button>
          </Link>
          <button className="h-[56px] w-[315px] text-white bg-black text-[24px]">
            proceed to checkout
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Preview;
