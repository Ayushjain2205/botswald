import React, { ReactNode } from 'react';

interface BoxHeaderProps {
  children: ReactNode;
  title: string;
  bg?: string;
}

const BoxHeader = ({ children, title, bg }: BoxHeaderProps) => {
  return (
    <div className="flex flex-col z-1 h-full border-2 border-black rounded-[4px]">
      <div
        className={`h-[68px] border-b-2 border-black rounded-t-[10px] flex items-center px-[32px] z-0 ${
          bg ? `bg-[${bg}]` : ''
        }`}
      >
        <span className=" text-[32px]">{title}</span>
      </div>
      <div className="flex flex-col p-[24px]">{children}</div>
    </div>
  );
};

export default BoxHeader;
