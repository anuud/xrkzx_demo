import React from 'react';
import type { ReactNode, FC } from 'react';
import { HomeRightWrapper } from './styled';
import { Tabs } from 'antd';
interface IProps {
  children?: ReactNode;
}
const rightList = [
  {
    title: '高校招生院校',
    key: '123',
    list: [
      {
        _id: '1',
        title: 'AISSU(YHV) (原深大师院国际高中云海谷校区)',
        image: `${require('../../../../../../assets/images/school/1710232137233277.jpg')}`
      },
      {
        _id: '2',
        title: '深圳外国语学校国际部SWIS',
        image: `${require('../../../../../../assets/images/school/1710295224403044.jpg')}`
      },
      {
        _id: '3',
        title: '深圳贝赛思外籍人员子女学校',
        image: `${require('../../../../../../assets/images/school/1710295936184170.jpg')}`
      },
      {
        _id: '4',
        title: '深圳市蛇口外籍人员子女学校（SIS)',
        image: `${require('../../../../../../assets/images/school/1710296653209889.jpg')}`
      },
      {
        _id: '5',
        title: '蛇口科爱赛国际学校（QSI）',
        image: `${require('../../../../../../assets/images/school/1710297512363999.jpg')}`
      },
      {
        _id: '6',
        title: '深美外籍人员子女学校SAIS',
        image: `${require('../../../../../../assets/images/school/1710298200795248.jpg')}`
      },
      {
        _id: '7',
        title: '深圳日本人学校',
        image: `${require('../../../../../../assets/images/school/1710298419566384.jpg')}`
      },
      {
        _id: '8',
        title: '深圳KIS(韩国)国际学校',
        image: `${require('../../../../../../assets/images/school/1710299968350573.jpg')}`
      }
    ]
  }
];
const HomeRight: FC<IProps> = () => {
  function Tabschidren(list: any) {
    return (
      <div className="flex flex-wrap" key="123">
        {list.map((item: any) => {
          return (
            <div
              className=" h-15 flex mt-2 pt-2 pb-2 w-2/4 content-center text-center items-center shool m-auto"
              key={item.id}
            >
              <img src={item.image} alt={item.title} className="w-9 h-9 rounded-full" />
              <div className="text-xs ml-1 hover:text-red-500 cursor-pointer">{item.title}</div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <HomeRightWrapper>
      <div className="channel-tab">
        <Tabs
          type="card"
          items={rightList.map((item) => {
            return {
              label: <div className=" text-black">{item.title}</div>,
              key: item.key,
              children: Tabschidren(item.list)
            };
          })}
        />
      </div>
      <span className="more-btn">查看更多院校</span>
    </HomeRightWrapper>
  );
};
export default HomeRight;
