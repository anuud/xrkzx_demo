import React from 'react';
import type { ReactNode, FC } from 'react';
import { MediaStrategyWrapper } from './styled';
import Caption from '../caption';
import { strategy_media } from '../../../../assets/data/strategy-media';
import { RightOutlined } from '@ant-design/icons';
interface IProps {
  children?: ReactNode;
}
const MediaStrategy: FC<IProps> = () => {
  return (
    <MediaStrategyWrapper>
      <div className="media_1 ">
        <div className="w-[100%] m-auto">
          <Caption title="各大国际学校定期线上直播" />
        </div>
        <div className="w-[85%] m-auto mt-5 bg-white pt-5 pb-5">
          <ul className="flex justify-center flex-wrap px-9">
            {strategy_media?.map((item, index) => {
              return (
                <li key={index} className="w-[22%] h-[151px] m-1 bg-white rounded-md relative">
                  {item.text && (
                    <div>
                      <img src={item.url} alt="" className="" />
                      <p className=" absolute right-[20%] bottom-[8%]">{item.text}</p>
                    </div>
                  )}
                  {item.istext && (
                    <div>
                      <img src={item.url} alt="" className="" />
                      <p className=" absolute right-[20%] bottom-[8%]">{item.text}</p>
                    </div>
                  )}
                  {item.isbtn && (
                    <div className=" relative">
                      <img src={item.url} alt="" className="" />
                      <a
                        href="https://bj.xhd.cn/kefu_1.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="item_btn"
                      >
                        GO
                        <RightOutlined />
                      </a>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-[85%] m-auto mt-5 mb-5 media-banner">
          <h5>历届教育展帮您了解国际学校详细信息</h5>
        </div>
      </div>
    </MediaStrategyWrapper>
  );
};
export default MediaStrategy;
