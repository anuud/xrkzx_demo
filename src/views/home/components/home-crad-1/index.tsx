import React, { useCallback, useEffect, useState } from 'react';
import type { ReactNode, FC } from 'react';
import { HomeCrad1Wrapper } from './styled';
import { HomeCard1, HomeShool } from '../../../../assets/data/home-crad1';
import SectionsTabs from '../../../../components/section-tabs';
import { Tag } from 'antd';
import { FolderOpenOutlined, MessageOutlined } from '@ant-design/icons';
interface IProps {
  children?: ReactNode;
}
const HomeCrad1: FC<IProps> = () => {
  const [name, setName] = useState<any[]>();
  const tabClickHandle = useCallback((index: number, item: any) => {
    setName(item.list);
    console.log(item);
  }, []);
  useEffect(() => {
    setName(HomeShool[0].list);
  });
  return (
    <HomeCrad1Wrapper>
      <div className="w-3/5 m-auto mt-7 bg-white">
        <div className="flex justify-between">
          {HomeCard1?.map((item) => {
            return (
              <div className="mb-4 text-center" key={item._id}>
                <img src={item.image_url} />
                <div className="ml-2">{item.text}</div>
              </div>
            );
          })}
        </div>
        <div className="flex">
          <div className="flex-1 crad-left">
            <h4 className="text-base font-bold p-2">入学诊断</h4>
            <p className="p-2 text-blue-400">
              有哪些国际化学校？需要什么入学条件？快速找到适合孩子的学校
            </p>
          </div>
          <div className="flex-1 crad-right ml-8">
            <h4 className="text-base font-bold p-2">学校大全</h4>
            <p className="p-2 text-blue-400">汇集各区国际高中、初中、小学、幼儿园等100+所学校</p>
          </div>
        </div>
        <div className="flex justify-around mt-8">
          <div className="text-center">
            <img
              src={require('../../../../assets/images/home/14d6296df26b19663c4c6fa3a59d1dd9dd44ba42.png')}
              alt=""
            />
            <h5 className="text-sm font-bold p-2">名校榜单</h5>
            <span>TOP10 | 热门学校</span>
          </div>
          <div className="text-center">
            <img
              src={require('../../../../assets/images/home/3e89f98864ccc3648065480a26c453d6d77941ec.png')}
              alt=""
            />
            <h5 className="text-sm font-bold p-2">向日葵探校</h5>
            <span>打卡校园 | 一探究竟</span>
          </div>
          <div className="text-center">
            <img
              src={require('../../../../assets/images/home/b925958892bb265c885d162b339237df9380cddc.png')}
              alt=""
            />
            <h5 className="text-sm font-bold p-2">校园看点</h5>
            <span>学生社团 | 升学毕业</span>
          </div>
        </div>
        <div className="w-[80%] m-auto home-help">
          <span className="absolute left-[40%] text-white font-bold text-xl bottom-[22%]">
            立即帮我找学校
          </span>
        </div>
        <div className="w-[80%] m-auto">
          <SectionsTabs tabNames={HomeShool} tabClick={tabClickHandle} />
          <div className="w-[100%] ">
            {name?.map((item) => {
              return (
                <div key={item._id}>
                  <div className="flex justify-between my-4 w-[100%]">
                    <div className="crad1-left w-[15%]">
                      <img src={item.profile} />
                    </div>
                    <div className="crad1-main w-[70%] ">
                      <h1 className="text-base font-bold">{item.name}</h1>
                      <div className="flex">
                        <h5 className="flex leading-7">
                          <img
                            src={require('../../../../assets/images/home/location.png')}
                            alt=""
                          />
                          {item.district}
                        </h5>
                        <p className="flex leading-7 ml-4">
                          <img src={require('../../../../assets/images/home/discuss.png')} alt="" />
                          {item.questions}个问答
                        </p>
                      </div>
                      <div>
                        <div className="py-1">
                          <span></span>
                          <p>开设阶段：{item.stage}</p>
                        </div>
                        <div className="py-1">
                          <span></span>
                          <p>开设课程：{item.course}</p>
                        </div>
                        <div className="py-1">
                          <span></span>
                          <p>留学国家：{item.nation}</p>
                        </div>
                        <div className="py-1">
                          {item?.tag.map((item: any) => {
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
                  <div className="flex h-[186px] pb-5 cread-footer mb-4">
                    {item.image_url.map((item: any) => {
                      return (
                        <img
                          src={item.URL}
                          alt=""
                          key={item._id}
                          style={{ width: '33.3%', marginRight: '10px', height: '100%' }}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center">
          <span>更多学校了解》</span>
        </div>
      </div>
    </HomeCrad1Wrapper>
  );
};
export default HomeCrad1;
