import React, { useEffect, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { StartegyTitle } from '../../../../assets/data/strategy-title';
import classNames from 'classnames';
import { TabbelWrapper } from './styled';
import { Table } from 'antd';
interface IProps {
  children?: ReactNode;
}
const columns = [
  {
    title: '区域',
    dataIndex: 'district',
    key: 'name'
  },
  {
    title: '学校名称',
    dataIndex: 'schoolname',
    key: 'school'
  },
  {
    title: '开设学段',
    dataIndex: 'system',
    key: 'system'
  },
  {
    title: '课程体系',
    dataIndex: 'section',
    key: 'section'
  },
  {
    title: '学费参考',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '公立/私立',
    dataIndex: 'public_private',
    key: 'public_private'
  }
];
const TabbelStrategy: FC<IProps> = () => {
  const [currentTabid, setCurrentTabid] = useState(0);
  const [currentTab, setCurrentTab] = useState<any>();
  const tabchange = (index: number, item: any) => {
    setCurrentTabid(index);
    setCurrentTab(item);
    console.log(currentTab);
  };
  useEffect(() => {
    setCurrentTab(StartegyTitle[0] as any);
  }, []);
  return (
    <TabbelWrapper>
      <div className="flex items-center new-nav truncate mx-4">
        {StartegyTitle &&
          StartegyTitle?.map((item, index) => {
            return (
              <div
                className={classNames(
                  'twoxx1 font-semibold flex-1 m-2 text-center rounded-md text-lg mr-2 cursor-pointer',
                  index === currentTabid ? 'active' : ''
                )}
                key={item.key}
                onClick={() => tabchange(index, item)}
              >
                {item.district}
              </div>
            );
          })}
      </div>
      <Table pagination={false} columns={columns} dataSource={currentTab?.list}></Table>
    </TabbelWrapper>
  );
};
export default TabbelStrategy;
