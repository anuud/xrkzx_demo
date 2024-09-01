import React from 'react';
import type { ReactNode, FC } from 'react';
import { SunFlowerWrapper } from './styled';
import { Button, Space } from 'antd';
import { SearchOutlined, WhatsAppOutlined } from '@ant-design/icons';
import TopBanner from '../../components/top-banner';
import SunflowerTitle from './components/sunflower-title';
import SunflowerCard from './components/sunflower-card';
import SunflowerSchool from './components/sunflower-school';
interface IProps {
  children?: ReactNode;
}
const SunFlower: FC<IProps> = () => {
  return (
    <SunFlowerWrapper>
      <div className="w-full m-auto">
        <TopBanner />
        <div className="">
          <SunflowerCard />
          <div>
            <SunflowerTitle title="找国际化学校问小葵" />
            <div className="lg:w-[80%] m-auto ">
              <div className="flex">
                <div className="lay flex-1">
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
                      <span>擅长根据学生综合情况，快速匹配3-5所</span>
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
                <div className="w-[35%]">
                  <img
                    src={require('../../assets/images/sunflower/65107.jpg')}
                    alt=""
                    className=""
                  />
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
          <SunflowerSchool />
        </div>
      </div>
    </SunFlowerWrapper>
  );
};
export default SunFlower;
