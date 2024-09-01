import React from 'react';
import type { ReactNode, FC } from 'react';
import { SunflowerCardWrapper } from './styled';
import SunflowerTitle from '../sunflower-title';
import { nanoid } from 'nanoid';
interface IProps {
  children?: ReactNode;
}

const list = [
  {
    id: nanoid(),
    name: '参加国际学校入学考试评估',
    content:
      '两个小时间，完成国际学校入学考试评估，可立即获得详细的评估报告。完全模拟国际学校入学考试的形式，帮助学生了解自己的真实水平。从而更加理性的选择合适的国际学校。',
    image: require('../../../../assets/images/sunflower/2016110712.png')
  },
  {
    id: nanoid(),
    name: '根据评估报告推荐适合的国际学校',
    content:
      '根据学生的评估报告，向日葵国际的学业规划师会量身推荐2-3所适合学生的国际学校，学生和家长再根据自己的意愿进行有针对性的选择。同时还提供外教模拟英文面试，预约探校等贴心服务。',
    image: require('../../../../assets/images/sunflower/2016110713.png')
  },
  {
    id: nanoid(),
    name: '针对学生的薄弱项推荐相关的备考课程',
    content:
      '通过评估报告，找到学生每个科目的薄弱项，再有针对性的推荐相关备考课程，全程跟踪服务，直到入读理想的国际学校。',
    image: require('../../../../assets/images/sunflower/2016110714.png')
  }
];

const SunflowerCard: FC<IProps> = () => {
  return (
    <SunflowerCardWrapper>
      <SunflowerTitle title="入学诊断" />
      <div className="flex w-[80%] m-auto py-2">
        {list.map((item) => {
          return (
            <div key={item.id} className="w-[33.3%] p-2 item">
              <img src={item.image} alt={item.name} className="w-[399px] h-[275px]" />
              <h3 className="text-base font-bold text-center">{item.name}</h3>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </SunflowerCardWrapper>
  );
};
export default SunflowerCard;
