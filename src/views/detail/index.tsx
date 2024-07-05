import React, { useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { DetailWrapper } from './styled';
import DetailTopinfo from './components/detail-topinfo';
import { campus } from '../../assets/data/homelist';
import {
  BookOutlined,
  FileTextOutlined,
  HighlightOutlined,
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
              <div className="detail-banner flex justify-center items-center text-2xl text-white font-bold">
                {item.name}
              </div>
              <div className="detail-content">
                <div>
                  <DetailTopinfo name={item.name} istext="简介" />
                  <div className="content-item">
                    <div className="my-3">
                      <FileTextOutlined />
                      <span className="text-base font-bold ml-1">学校详情：</span>
                      <span className="text-sm">{item.introduce}</span>
                    </div>
                    <div className="flex my-3">
                      <SmileOutlined />
                      <span className="text-base font-bold ml-1 flex">学校优势：</span>
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
                    <div className="my-3">
                      <HighlightOutlined />
                      <span className="text-base font-bold ml-1">办学资历:</span>
                      <span className="text-sm ml-1">{item.process}</span>
                    </div>
                    <div className="flex mt-2">
                      <BookOutlined />
                      <span className="text-base font-bold ml-1 flex">招生简介：</span>
                      <span>正在招生/可插班</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <DetailTopinfo name="招生及考试信息" />
                  <div className="my-3">
                    <div className="flex my-2">
                      <span className="text-base font-bold ml-1 flex">身份要求：</span>
                      <span>{item.require}</span>
                    </div>
                  </div>
                  <div className="my-3">
                    <div className="my-2">
                      <span className="text-base font-bold ml-1 w-[80px]">入学测试：</span>
                      <span>{item.test}</span>
                    </div>
                    <div className="my-2">
                      <span className="text-base font-bold ml-1 w-[80px]">价 格：</span>
                      <span className="text-xl text-red-300">{item.price}/一年</span>
                    </div>
                  </div>
                </div>
                <div className="campus mt-4">
                  <DetailTopinfo name="校园环境" />
                  <div className="flex mt-2">
                    {item.campus.map((item: any, index: string) => {
                      return (
                        <div key={index} className="w-[25%] p-1">
                          <img
                            src={item.shool_image}
                            alt=""
                            style={{ width: '217px', height: '155px' }}
                          />
                          <div className="text-center">{item.name}</div>
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
