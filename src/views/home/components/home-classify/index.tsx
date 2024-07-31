import React, { useCallback, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import SectionsTabs from '../../../../components/section-tabs';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { shallowEqual } from 'react-redux';
import { fetchHomeStystemDataAction } from '../../store/home';
import { nanoid } from 'nanoid';
import { HomeClassWrapper } from './styled';
import { Tag } from 'antd';
import { FolderOpenOutlined, MessageOutlined, RightOutlined } from '@ant-design/icons';
interface IProps {
  children?: ReactNode;
}
const stytem = [
  {
    id: nanoid(),
    name: '分层教学'
  },
  {
    id: nanoid(),
    name: '教学严谨'
  },
  {
    id: nanoid(),
    name: '个性化教学'
  },
  {
    id: nanoid(),
    name: '老牌学校'
  }
];
const HomeClassify: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const { stystemlist } = useAppSelector(
    (state) => ({ stystemlist: state.homelist.stystemlist }),
    shallowEqual
  );
  const tabClickHandle = useCallback((index: number, item: any) => {
    dispatch(fetchHomeStystemDataAction(item.name));
  }, []);

  useEffect(() => {
    dispatch(fetchHomeStystemDataAction('分层教学'));
  }, []);
  return (
    <HomeClassWrapper>
      <div className="mt-7 bg-white">
        <SectionsTabs tabNames={stytem} tabClick={tabClickHandle} />
        <div className="w-[100%]">
          {stystemlist &&
            stystemlist?.map((item) => {
              return (
                <div key={item.name} className="item">
                  <div className="flex justify-between my-4 w-[100%]">
                    <div className="crad1-left lg:w-[15%] ">
                      <img src={item.school_stytem.stytem_icon} />
                    </div>
                    <div className="crad1-main w-[70%] pl-2">
                      <h1 className="text-base font-bold">{item.name}</h1>
                      <div className="flex">
                        <h5 className="flex leading-7">
                          <img
                            src={require('../../../../assets/images/home/location.png')}
                            alt=""
                          />
                          {item.school_stytem.district}
                        </h5>
                      </div>
                      <div>
                        <div className="py-1">
                          <span></span>
                          <p>开设阶段：{item.school_stytem.stage}</p>
                        </div>
                        <div className="py-1">
                          <span></span>
                          <p>开设课程：{item.course}</p>
                        </div>
                        <div className="py-1">
                          <span></span>
                          <p>留学国家：{item.school_stytem.nation}</p>
                        </div>
                        <div className="py-1">
                          {item?.school_stytem.circmstances.map((item: any) => {
                            return (
                              <Tag color="#2db7f5" key={item}>
                                {item}
                              </Tag>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="crad1-right w-[15%]">
                      <span className="flex p-2 crad1-right-item">
                        <FolderOpenOutlined style={{ marginLeft: '15%' }} />
                        <h1 className="ml-2">领取资料</h1>
                      </span>
                      <span className="flex p-2 mt-2 bg-blue-400">
                        <MessageOutlined style={{ marginLeft: '15%' }} />
                        <h1 className="ml-2">在线咨询</h1>
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[186px] pb-5 cread-footer">
                    {item.school_stytem.school_table.map((item: any) => {
                      return (
                        <img
                          src={item}
                          alt=""
                          key={item}
                          className="w-[33%] lg:mr-4 lg:h-[200px]"
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="text-center mt-1">
          <span className="p-1 bg-slate-100">
            更多学校了解
            <RightOutlined />
          </span>
        </div>
      </div>
    </HomeClassWrapper>
  );
};
export default HomeClassify;
