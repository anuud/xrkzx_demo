import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { AboutHeaderWrapper } from '../about-header/styled';
import AreaHeader from '../../../../components/area-header';
interface IProps {
  children?: ReactNode;
}
const AboutProfile: FC<IProps> = () => {
  return (
    <AboutHeaderWrapper>
      <div className="w-4/5 m-auto">
        <div className="w-full mt-5">
          <AreaHeader topheader="COMPANY PROFILE" abstract="公司简介" />
          <p className="text-sm indent-8 leading-8 block lg:w-2/5 xs:w-full m-auto">
            向日葵择校是深圳地区乃至大湾区最受国际学校家长关注的择校平台之一，云集了大量的专业择校老师，旨在为每一个学生制作独一无二的国际教育升学规划方案。自媒体平台曾撰写过多篇关于国际学校选择方面的原创爆文，目前正在持续产出《名校系列》高质量原创文章，助力大湾区每一个具有国际化视野的家长，帮助孩子选择最适合的学校。截止今日，向日葵择校已在深圳举办过多次关于国际择校方面的展会，其中覆盖了深圳以及大湾区100+的国际学校，已为2000+的家庭做过择校方面的规划，行业经验充足，拥有专业的一站式择校团队，领跑全行业。
          </p>
          <div className="pt-5 m-auto">
            <img
              src={require('../../../../assets/images/1653110557209205.jpg')}
              alt=""
              className=" m-auto w-full"
            />
          </div>
        </div>
        <div className="w-full mt-5">
          <AreaHeader topheader="CORPORATE PHILOSPHY" abstract="企业理念" />
          <div className="lg:flex justify-between mb-5 mt-2">
            <div className="lg:w-1/2 p-5 bg-slate-300 xs:w-[100%]">
              <span className="block text-sm font-medium leading-8">品牌及价值观：</span>
              <span className="font-black leading-8">对学员有帮助的，就是对的</span>
              <p className="leading-4">
                “做一个有诚信、专业、有品质，受人信赖、受人尊敬的品牌”，这在YuLoo，是最核心的价值观。
              </p>
              <p className="leading-6">
                珍惜品牌声誉，倾听每一位学员的声音，包括学员的赞誉和抱怨，用心为学员设计、规划最适合的学习方案。在YuLoo，我们常常要求员工假设：如果我是学生或家长，我希望得到什么样的咨询服务和帮助？
              </p>
            </div>
            <div className="lg:w-1/2 p-5 bg-slate-300 lg:ml-1 leading-6 xs:w-[100%]">
              <p className="block text-sm font-medium leading-8 ">产品及服务：</p>
              <p className="font-black leading-8"> 如果您有不满意 那一定是我们做的还不够好</p>
              <p className="leading-6">
                我们的学员,可能一辈子只参加一次高考，一辈子只参加一次考研辅导，一次出国留学...一生这么短暂，能有几个第一次可以挥霍呢?
                所以,我们必须力求为学员提供最好的产品和服务,推荐最适合的学校,推荐最有就业前景的专业,推荐最适合的学习方式...努力让每位学员有一个好的前途与未来,为学员做终身服务,这是你的信任所赋予我们的责任。
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutHeaderWrapper>
  );
};
export default memo(AboutProfile);
