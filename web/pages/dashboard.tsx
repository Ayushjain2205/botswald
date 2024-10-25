import React from 'react';
import Layout from '@/components/layout';

import TabsHolder from '@/components/ui/Tabs';

const Dashboard = () => {
  return (
    <Layout>
      <p className="font-bold text-[36px]">your bot analytics</p>
      <div className="flex flex-row">
        <div className="mb-[32px] mt-[24px] flex flex-row gap-[20px] leading-[30px] p-[23px] h-[138px] w-[240px] border-black border-2 rounded-[4px] bg-[#FFC022]">
          <div className="w-[90px] text-[24px]">all HEALTH MAN</div>
          <img src="/mascot.svg" alt="" />
        </div>
      </div>
      <TabsHolder />
    </Layout>
  );
};

export default Dashboard;
