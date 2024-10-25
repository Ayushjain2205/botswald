import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { data } from '../../config/chartData';

const TabsHolder = () => (
  <Tabs.Root className="flex flex-col w-[1152px] mb-[50px]" defaultValue="tab1">
    <Tabs.List
      className="shrink-0 flex border-b border-black border-[2px] rounded-tl-[4px] rounded-tr-[4px]"
      aria-label="Manage your account"
    >
      <Tabs.Trigger
        className="bg-white text-[#262626] text-opacity-40 px-5 h-[76px] border-l border-r rounded-tl-[4px] border-black flex-1 flex items-center justify-center text-[24px] leading-none select-none first:rounded-tl-[4px] last:rounded-tr-[4px] data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black  outline-none cursor-default data-[state=active]:text-black"
        value="tab1"
      >
        Finance
      </Tabs.Trigger>
      <Tabs.Trigger
        className="bg-white text-[#262626] text-opacity-40 px-5 h-[76px] border-l border-r border-black flex-1 flex items-center justify-center text-[24px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default data-[state=active]:text-black"
        value="tab2"
      >
        Users
      </Tabs.Trigger>
      <Tabs.Trigger
        disabled={true}
        className="bg-white text-[#262626] text-opacity-40 font-bold px-5 h-[76px] border-l border-black flex-1 flex items-center justify-center text-[24px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black data-[state=active]:font-bold outline-none cursor-default data-[state=active]:text-black"
        value="tab3"
      ></Tabs.Trigger>
      <Tabs.Trigger
        disabled={true}
        className="bg-white text-[#262626] text-opacity-40 font-bold px-5 h-[76px] border-r border-black flex-1 flex items-center justify-center text-[24px] leading-none select-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black data-[state=active]:font-bold outline-none cursor-default data-[state=active]:text-black"
        value="tab4"
      ></Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content
      className="grow px-[42px] py-[58px] bg-white border-l-2 border-r-2 border-b-2 border-t-2 border-black rounded-b-md outline-none focus:shadow-black"
      value="tab1"
    >
      <div className="flex flex-row gap-[32px]">
        <div className="flex flex-col w-[333px] h-[172px] border-black border-2 rounded-[4px] p-[24px] gap-[20px]">
          <p className="font-bold text-[24px]">Coins debit</p>
          <div className="flex flex-row justify-between">
            <div className="font-bold text-[48px]">500</div>
            <div className="flex flex-row align-center items-center text-[24px]">
              +11.01% <img src="/dashboard-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[333px] h-[172px] border-black border-2 rounded-[4px] p-[24px] gap-[20px]">
          <p className="font-bold text-[24px]">Coins credit</p>
          <div className="flex flex-row justify-between">
            <div className="font-bold text-[48px]">500</div>
            <div className="flex flex-row align-center items-center text-[24px]">
              +3.01% <img src="/dashboard-arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[333px] h-[172px] border-black border-2 rounded-[4px] p-[24px] gap-[20px]">
          <p className="font-bold text-[24px]">Profit</p>
          <div className="flex flex-row justify-between">
            <div className="font-bold text-[48px]">800</div>
            <div className="flex flex-row align-center items-center text-[24px]">
              +10.01% <img src="/dashboard-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1000px] h-[414px] mt-[40px]">
        <p className="font-bold text-[24px] mb-[24px]">Total Revenue</p>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#C4C4C4"
              strokeWidth={3}
            />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#000000"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white border-l-2 border-r-2 border-b-2 border-t-2 border-black rounded-b-md outline-none focus:shadow-black"
      value="tab2"
    >
      Hello
    </Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white border-l-2 border-r-2 border-b-2 border-t-2 border-black rounded-b-md outline-none focus:shadow-black"
      value="tab3"
    ></Tabs.Content>
    <Tabs.Content
      className="grow p-5 bg-white border-l-2 border-r-2 border-b-2 border-t-2 border-black rounded-b-md outline-none focus:shadow-black"
      value="tab4"
    ></Tabs.Content>
  </Tabs.Root>
);

export default TabsHolder;
