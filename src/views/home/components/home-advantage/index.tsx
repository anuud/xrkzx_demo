import { nanoid } from 'nanoid';
import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeAdvantageWrapper } from './styled';
import ChannelTit from '../../../../components/channel-tit';
interface IProps {
  children?: ReactNode;
}

const list = [
  {
    id: nanoid(),
    name: '及时反馈沟通',
    title: '多方位跟进监督，严格监控学习过程，对学员学习情况进行反馈，及时调整学习方案。'
  },
  {
    id: nanoid(),
    name: '及时答疑解惑',
    title: '建立专属学习群，严格按照作业目标进行作业批改、单词拼写，24小时实时答疑等工作。'
  },
  {
    id: nanoid(),
    name: '教学服务贴心',
    title: '一对一服务，阶段水平测试，课后及时反馈，适时课程调整，一切为了帮助学生提升。'
  },
  {
    id: nanoid(),
    name: '师资实力雄厚',
    title: '对师资要求高，提供标准高质量教学，帮助学员全面提升综合能力，冲刺目标成绩。'
  },
  {
    id: nanoid(),
    name: '教学体系完善',
    title: '机构有着丰富的教学经验，完善的教学体系，统一教学和服务体系，助力学子成功留学'
  }
];

const HomeAdvantage: FC<IProps> = () => {
  return (
    <HomeAdvantageWrapper>
      <ChannelTit text="核心优势" />
      <div className="flex py-4">
        {list.map((item) => {
          return (
            <div key={item.id} className="item">
              <div className="top-tit">{item.name}</div>
              <div className="bottom_con">{item.title}</div>
            </div>
          );
        })}
      </div>
    </HomeAdvantageWrapper>
  );
};
export default HomeAdvantage;
