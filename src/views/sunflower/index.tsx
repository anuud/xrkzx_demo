import React from 'react';
import type { ReactNode, FC } from 'react';
import { SunFlowerWrapper } from './styled';
import { Button, Space } from 'antd';
import { SearchOutlined, WhatsAppOutlined } from '@ant-design/icons';
import TopBanner from '../../components/top-banner';
interface IProps {
  children?: ReactNode;
}
const SunFlower: FC<IProps> = () => {
  return (
    <SunFlowerWrapper>
      <div className="w-full m-auto">
        <TopBanner />
        <div className="lg:w-[70%] xs:w-[100%] m-auto">
          <div className="flex mt-8">
            <div className="flex-1 crad-left">
              <h4 className="text-base font-bold p-2 text-center">入学诊断</h4>
              <p className="p-2 text-blue-400 text-center">
                有哪些国际化学校？需要什么入学条件？快速找到适合孩子的学校
              </p>
            </div>
            <div className="flex-1 crad-right lg:ml-20">
              <h4 className="text-base font-bold p-2 text-center">学校大全</h4>
              <p className="p-2 text-blue-400 text-center">
                汇集各区国际高中、初中、小学、幼儿园等100+所学校
              </p>
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <div className="text-center">
              <img
                src={require('../../assets/images/home/14d6296df26b19663c4c6fa3a59d1dd9dd44ba42.png')}
                className="w-[80px] h-[70px] m-auto"
                alt=""
              />
              <h5 className="text-sm font-bold p-2">名校榜单</h5>
              <span>TOP10 | 热门学校</span>
            </div>
            <div className="text-center">
              <img
                src={require('../../assets/images/home/3e89f98864ccc3648065480a26c453d6d77941ec.png')}
                className="w-[80px] h-[70px] m-auto"
                alt=""
              />
              <h5 className="text-sm font-bold p-2">向日葵探校</h5>
              <span>打卡校园 | 一探究竟</span>
            </div>
            <div className="text-center">
              <img
                src={require('../../assets/images/home/b925958892bb265c885d162b339237df9380cddc.png')}
                className="w-[80px] h-[70px] m-auto"
                alt=""
              />
              <h5 className="text-sm font-bold p-2">校园看点</h5>
              <span className=" text-xs">学生社团 | 升学毕业</span>
            </div>
          </div>
        </div>
        <div className="mb-5 lg:w-[60%] m-auto mt-5">
          <span className="font-bold block py-2">找国际化学校问小葵</span>
          <div className="lay">
            <div className="stop">
              <div className="flex mb-5">
                <div className="top-avatar bg-blue-400 rounded-full mr-3"></div>
                <div className=" font-bold pt-2">
                  <span className="text-sm text-black">向日葵择校-</span>
                  <span className="text-sm text-blue-500">小葵</span>
                </div>
              </div>
              <div className="m-6 onOne">
                <div className="flex">
                  <img
                    src={require('../../assets/images/sunflower/time_school2.png')}
                    alt=""
                    className="w-[25px] h-[25px]"
                  />
                  <span className="leading-5 ml-2">1v1专属择校顾问，超级宠粉有问必答</span>
                </div>
                <div className="flex mt-1">
                  <img
                    src={require('../../assets/images/sunflower/time_school.png')}
                    alt=""
                    className="w-[25px] h-[25px]"
                  />
                  <span className="leading-8 ml-2">访遍本土国际化学校，熟知学校内部开设</span>
                </div>
              </div>
              <div className="w-[50%] m-auto pb-4">
                <Space>
                  <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    className="lg:w-[200px] xs:w-[110px]"
                  >
                    帮我找
                  </Button>
                  <Button
                    type="primary"
                    icon={<WhatsAppOutlined />}
                    className="lg:w-[200px] bg-orange-400 xs:w-[110px]"
                  >
                    在线咨询
                  </Button>
                </Space>
              </div>
            </div>
            <div className="boottom">
              <div>
                <span>精准择校：</span>
                <span>擅长根据学生综合情况，快速匹配5-8所</span>
              </div>
              <div>
                <span>个性规划：</span>
                <span>目标学校的入学考试、探校等全程规划</span>
              </div>
              <div>
                <span>免费咨询：</span>
                <span>幼 / 小 / 初 / 高阶段，免费国际学校择校咨询</span>
              </div>
              <div>
                <span>专业靠谱：</span>
                <span>访遍本土国际化学校，熟知学校开设流程</span>
              </div>
              <div>
                <span>省时省心：</span>
                <span>从择校到入学全程专属跟进，助力读心仪名校</span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center">
              <div className="line-l"></div>
              <div className="line-text">7重权益护航</div>
              <div className="line-l"></div>
            </div>
          </div>
        </div>
      </div>
    </SunFlowerWrapper>
  );
};
export default SunFlower;
