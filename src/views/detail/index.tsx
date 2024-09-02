import React, { useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { DetailWrapper } from './styled';
import DetailTopinfo from './components/detail-topinfo';
import {
  BookOutlined,
  FileTextOutlined,
  FormOutlined,
  HighlightOutlined,
  PayCircleOutlined,
  ScheduleOutlined,
  SmileOutlined
} from '@ant-design/icons';
import { Flex, Tag } from 'antd';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchDetailDataAction } from './store/detail';
import { shallowEqual } from 'react-redux';
interface IProps {
  children?: ReactNode;
}
const Detail: FC<IProps> = () => {
  const parms = useParams();
  const dispatch = useAppDispatch();
  const { id } = parms;

  const { detailInfo } = useAppSelector(
    (state) => ({
      detailInfo: state.detaillist.DetailInfo
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(fetchDetailDataAction(id));
  }, [id]);
  return (
    <DetailWrapper>
      {detailInfo &&
        detailInfo.map((item) => {
          return (
            <div key={item.name}>
              <div
                className="detail-banner flex justify-center items-center text-center text-5xl text-black font-bold"
                style={{
                  backgroundImage: `url(${item?.campus[0].shool_image}) `,
                  width: '100%',
                  height: '500px',
                  backgroundSize: '100% 100%'
                }}
              >
                {item.name}
              </div>
              <div className="detail-content">
                <div>
                  <DetailTopinfo name={item.name} istext="简介" icon={'abstract'} />
                  <div className="content-item">
                    <div className="my-3 flex">
                      <div className="lg:w-[10%]">
                        <FileTextOutlined />
                        <span className="text-base font-bold ml-1">学校详情:</span>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm">{item.introduce}</span>
                      </div>
                    </div>
                    <div className="flex my-3">
                      <div className="flex lg:w-[10%]">
                        <SmileOutlined />
                        <span className="text-base font-bold ml-1 flex">学校优势：</span>
                      </div>
                      <div className="flex-1">
                        <Flex wrap>
                          {item.superiority.map((item: string) => {
                            return (
                              <Tag key={item} color="#2db7f5">
                                {item}
                              </Tag>
                            );
                          })}
                        </Flex>
                      </div>
                    </div>
                    <div className="my-3 flex">
                      <div className="lg:w-[10%]">
                        <HighlightOutlined />
                        <span className="text-base font-bold ml-1">办学资历:</span>
                      </div>
                      <div className="flex-1">
                        <span className="text-sm ">{item.process}</span>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      <div className="flex lg:w-[10%]">
                        <BookOutlined />
                        <span className="text-base font-bold ml-1 flex">招生简介：</span>
                      </div>
                      <div className="flex-1">
                        <span>正在招生/可插班</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <DetailTopinfo name="招生及考试信息" icon="information" />
                  <div className="my-3">
                    <div className="flex mt-2">
                      <div className="flex lg:w-[10%]">
                        <ScheduleOutlined />
                        <span className="text-base font-bold ml-1 flex">身份要求：</span>
                      </div>
                      <div className="flex-1">
                        {' '}
                        <span>{item.require}</span>
                      </div>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="flex my-2">
                      <div className="flex lg:w-[10%]">
                        <FormOutlined />
                        <span className="text-base font-bold ml-1 w-[80px]">入学测试：</span>
                      </div>
                      <div className="flex-1">
                        <span>{item.test}</span>
                      </div>
                    </div>
                    <div className="my-2 flex">
                      <div className="flex lg:w-[10%]">
                        <PayCircleOutlined />
                        <span className="text-base font-bold ml-1 w-[80px]">价 格：</span>
                      </div>
                      <span className="text-xl text-red-400">{item.price}/一年</span>
                      <div className="flex-1"></div>
                    </div>
                  </div>
                </div>
                <div className="campus mt-4">
                  <DetailTopinfo name="校园环境" icon="img" />
                  <div className="flex mt-2 xs:flex-wrap">
                    {item.campus.map((item: any, index: string) => {
                      return (
                        <div key={index} className="lg:w-[25%] p-1 xs:w-1/2">
                          <img
                            src={item.shool_image}
                            alt=""
                            style={{ width: '100%', height: '155px' }}
                          />
                          <div className="flex justify-center items-center">
                            <span>{item.name}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </DetailWrapper>
  );
};
export default Detail;
