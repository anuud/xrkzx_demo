import React from 'react';
import type { ReactNode, FC } from 'react';
import { MediaStrategyWrapper } from './styled';
import Caption from '../caption';
import { strategy_media } from '../../../../assets/data/strategy-media';
import { strategy_banner } from '../../../../assets/data/strategy-banner';
import { RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
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
          <Carousel autoplay className="mt-8">
            {strategy_banner.map((item) => {
              return (
                <div key={item._id} className="h-[270px] banner-item mb-3">
                  <div className="flex">
                    {item.list.map((list) => {
                      return (
                        <div key={list._id} className=" relative">
                          <img src={list.img} alt="" />
                          <div className=" absolute left-3 bottom-2">
                            <div className="text-center">{list.name}</div>
                            <div className="text-center">{list.text}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        {/* <div className="m-footer">
          <div className=" relative text-base font-bold text-white">
            <h6 className="text-center">
              免费预约参加 <br />
              近期国际学校择校展
            </h6>
            <Form action="">
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
                style={{ textAlign: 'center', marginTop: '30px' }}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入名字"
                  style={{ width: '200px', height: '45px' }}
                />
              </Form.Item>
              <Form.Item
                name="ipone"
                rules={[{ required: true, message: 'Please input your Password!' }]}
                style={{ textAlign: 'center' }}
              >
                <Input
                  prefix={<WhatsAppOutlined />}
                  type="password"
                  placeholder="请输入电话"
                  style={{ width: '200px', height: '45px' }}
                />
              </Form.Item>
            </Form>
          </div>
        </div> */}
      </div>
    </MediaStrategyWrapper>
  );
};
export default MediaStrategy;
