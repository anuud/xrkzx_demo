import React from 'react';
import type { ReactNode, FC } from 'react';
import { NewsGatherWrapper } from './styled';
import HomeTabs from '../home-tabs';
import { ArrowRightOutlined } from '@ant-design/icons';
import { homelist } from '../../../../assets/data/homelist';
import { List } from 'antd';
interface IProps {
  children?: ReactNode;
}
const journalism = [
  {
    id: '001',
    text: '热点资讯排行',
    newgatherlist: [
      {
        _id: '1',
        list: '中外合作办学怎么申请？有哪些优势劣势？'
      },
      {
        _id: '2',
        list: '2024年北京香港DSE国际学校排名一览(附学费)'
      },
      {
        _id: '3',
        list: '速看!2024年北京最难进的10所幼儿园名单出炉（含民办幼儿园）'
      },
      {
        _id: '4',
        list: '2024年北京丰台区26所高中名单已公示（附分数线），中考择校提前知'
      },
      {
        _id: '5',
        list: '2024年北京理工大学中外合作办学学费盘点'
      },
      {
        _id: '6',
        list: '中国传媒大学DAP国际本科2+2项目国外大学对接专业'
      },
      {
        _id: '7',
        list: '西北大学英国中外合办1+3留学录取要求'
      },
      {
        _id: '8',
        list: '2024年温州大学英国本科留学预科招生专业盘点'
      }
    ]
  },
  {
    id: '002',
    text: '学校排行',
    newgatherlist: [
      {
        _id: '1',
        list: '中外合作办学怎么申请？有哪些优势劣势？'
      },
      {
        _id: '2',
        list: '2024年北京香港DSE国际学校排名一览(附学费)'
      },
      {
        _id: '3',
        list: '速看!2024年北京最难进的10所幼儿园名单出炉（含民办幼儿园）'
      },
      {
        _id: '4',
        list: '2024年北京丰台区26所高中名单已公示（附分数线），中考择校提前知'
      },
      {
        _id: '5',
        list: '2024年北京理工大学中外合作办学学费盘点'
      },
      {
        _id: '6',
        list: '中国传媒大学DAP国际本科2+2项目国外大学对接专业'
      },
      {
        _id: '7',
        list: '西北大学英国中外合办1+3留学录取要求'
      },
      {
        _id: '8',
        list: '2024年温州大学英国本科留学预科招生专业盘点'
      }
    ]
  },
  {
    id: '003',
    text: '简章排行',
    newgatherlist: [
      {
        _id: '1',
        list: '中外合作办学怎么申请？有哪些优势劣势？'
      },
      {
        _id: '2',
        list: '2024年北京香港DSE国际学校排名一览(附学费)'
      },
      {
        _id: '3',
        list: '速看!2024年北京最难进的10所幼儿园名单出炉（含民办幼儿园）'
      },
      {
        _id: '4',
        list: '2024年北京丰台区26所高中名单已公示（附分数线），中考择校提前知'
      },
      {
        _id: '5',
        list: '2024年北京理工大学中外合作办学学费盘点'
      },
      {
        _id: '6',
        list: '中国传媒大学DAP国际本科2+2项目国外大学对接专业'
      },
      {
        _id: '7',
        list: '西北大学英国中外合办1+3留学录取要求'
      },
      {
        _id: '8',
        list: '2024年温州大学英国本科留学预科招生专业盘点'
      }
    ]
  }
];
const NewsGather: FC<IProps> = () => {
  return (
    <NewsGatherWrapper>
      <div className="w-4/5 m-auto mt-5 flex">
        <div className="w-2/3 p-2 bg-white  ">
          <div className="flex justify-between daily-rec-tit">
            <div className="daily-rec-img mt-2"></div>
            <div className="daily-rec-btn mt-2 leading-10 mr-2">
              <span className="text-sm mr-2 mt-1 font-bold">更多</span>
              <ArrowRightOutlined style={{ color: '#8a060b' }} />
            </div>
          </div>
          <div className="w-full h-full text-current">
            <List
              itemLayout="vertical"
              size="large"
              dataSource={homelist}
              renderItem={(item) => (
                <List.Item key={item.title} extra={<img width={272} alt="logo" src={item.href} />}>
                  <List.Item.Meta
                    title={<a href="#">{item.title}</a>}
                    description={item.subtitle}
                  />
                  {item.subtitle}
                </List.Item>
              )}
            />
          </div>
        </div>
        <div className="w-1/3  bg-white ml-1">
          <div className="w-full p-2 ">
            <div className="got-sort-tit"></div>
            <HomeTabs tabData={journalism} />
          </div>
        </div>
      </div>
    </NewsGatherWrapper>
  );
};
export default NewsGather;
