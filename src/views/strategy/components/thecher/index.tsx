import React from 'react';
import type { ReactNode, FC } from 'react';
import { TheCherWrapper } from './styled';
import Caption from '../caption';
import { Carousel } from 'antd';
import { thecher } from '../../../../assets/data/thecher';
interface IProps {
  children?: ReactNode;
}
const TheCher: FC<IProps> = () => {
  return (
    <TheCherWrapper>
      <Caption
        title="新航道国际备考教师团队"
        subtitle="新航道始终坚信以学生为中心，从满意到感动，成就学员梦想"
      />
      <div className="w-[70%] m-auto">
        <Carousel autoplay dots={false} autoplaySpeed={3000} effect="fade">
          {thecher &&
            thecher?.map((item) => {
              return (
                <div key={item.id} className="h-[350px] relative">
                  <div className="banner-item">
                    <div className="left">
                      <img src={item.image_url} alt="" />
                    </div>
                    <div className="right">
                      <div className="flex justify-between text-lg">
                        <h1>{item.name}</h1>
                        <span className="btn">
                          <a href="https://bj.xhd.cn/kefu_1.htm" target="_blank" rel="noreferrer">
                            预约试听课
                          </a>
                        </span>
                      </div>
                      {item.position && (
                        <div>
                          <div className="item">
                            <h5>职位</h5>
                            <p>{item.position}</p>
                          </div>
                          <div className="item2">
                            <h5>个人简介</h5>
                            <p>{item.ruseme}</p>
                          </div>
                        </div>
                      )}
                      {item?.educational && (
                        <div>
                          <div className="item">
                            <h5>教育背景</h5>
                            <p>{item.educational}</p>
                          </div>
                          <div className="item2">
                            <h5>所受学科</h5>
                            <p>{item.subject}</p>
                          </div>
                          <div className="item2">
                            <h5>授课特点 </h5>
                            <p>{item.trait}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bottom "></div>
                </div>
              );
            })}
        </Carousel>
        <div className="bootm-banner w-[70%] absolute flex justify-between left-[50%] right-[50%] h-[80px]">
          <a className="bottom-left w-[2%] m-5"></a>
          <div className="bottom-main w-[96%] overflow-hidden">
            <div className="float-left h-[100px] w-[1200px]">
              {thecher &&
                thecher?.map((item) => {
                  return (
                    <div key={item.id} className=" float-left h-[100%] ">
                      <img src={item.icon} alt="" className="image" />
                    </div>
                  );
                })}
            </div>
          </div>
          <a className="bottom-right w-[2%] m-5"></a>
        </div>
      </div>
    </TheCherWrapper>
  );
};
export default TheCher;
