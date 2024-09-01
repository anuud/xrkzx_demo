import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeServiceWrapper } from './styled';
import ChannelTit from '../../../../components/channel-tit';
interface IProps {
  children?: ReactNode;
}
const list = [
  {
    id: '01',
    text: '学生水平评估',
    content: '评估测试 （数学+英语），科学评估孩子真实能力与潜力，快速锁定择校范围',
    image: require('../../../../assets/images/home/2016110702.png')
  },
  {
    id: '02',
    text: ' 目标学校规划',
    content: '导师1V1规划，提供国际课程及国际学校定位及建议 ；规划导师给予择校规划方案 ',
    image: require('../../../../assets/images/home/2016110703.png')
  },
  {
    id: '03',
    text: '预约参观学校',
    content: '校方招生官带领参观校园了解考情；规划导师协助申请报名与入学考试',
    image: require('../../../../assets/images/home/2016110704.png')
  },
  {
    id: '04',
    text: '录取后续服务',
    content: 'Offer选择与分析、入学准备与适应期咨询及支持',
    image: require('../../../../assets/images/home/2016110707.png')
  }
];
const HomeService: FC<IProps> = () => {
  return (
    <HomeServiceWrapper>
      <ChannelTit text="课程服务" />
      <div className="flex bg-white py-5 flex-wrap">
        {list.map((item) => {
          return (
            <div key={item.id} className="item w-[49.5%] px-10 py-4">
              <div className="flex justify-center items-center">
                <img src={item.image} alt="" />
              </div>
              <div className="text">
                <div className="text-center text-xl font-bold">{item.text}</div>
                <div className="text-center w-[282px] m-auto">{item.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HomeServiceWrapper>
  );
};
export default HomeService;
