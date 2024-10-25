import React from 'react';
import Layout from '@/components/layout';
import BoxHeader from '@/components/ui/BoxHeader';
import FileButton from '@/components/form/FileButton';
import Link from 'next/link';

const Create = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-[32px]">
        <h5 className="font-bold text-[36px] my-[20px]">LeT’S create</h5>
        <div className="flex flex-row gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <div className="h-[123px] w-[346px] border-2 border-black rounded-[4px] flex flex-col justify-center items-center  ">
              <input
                type="text"
                placeholder="enter name here"
                className="input input-ghost w-[267px] max-w-xs focus:border-transparent focus:outline-none text-[28px]"
              />
            </div>
            <div className="h-[323px] w-[346px] border-2 border-black rounded-[4px] flex flex-col justify-center items-center gap-[24px] ">
              <p className="text-[24px] w-[237px]">
                what does your BOT look like?
              </p>
              <FileButton buttonText="add" />
            </div>
          </div>
          <div className="w-[782px]">
            <BoxHeader title="Knowledge base" bg="#fff">
              <div className="h-[350px] flex flex-col justify-center items-center">
                <FileButton buttonText="add Resources" />
                <span className="italic text-black text-opacity-50 text-[24px]">
                  (pdf, csv, video link, ppt, xls & more....)
                </span>
              </div>
            </BoxHeader>
          </div>
        </div>
        <div className="flex flex-row w-full justify-center mx-auto">
          <Link href="/preview">
            <button className="flex flex-row justify-center  items-center h-[56px] w-[230px] text-white bg-black text-[24px]">
              LeTs preview &nbsp;
              <img
                src="/arrow-left.svg"
                className="transform rotate-[135deg]"
                alt=""
              />
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Create;
