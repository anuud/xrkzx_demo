import React from 'react';
import type { ReactNode, FC } from 'react';
import AreaHeader from '../../../../components/area-header';
import { AppPhilosophyWrapper } from './styled';
import Advantage from '../../../../assets/data/Advantage';
interface IProps {
  children?: ReactNode;
}
const AppPhilosophy: FC<IProps> = () => {
  return (
    <AppPhilosophyWrapper>
      <div className="w-4/5 m-auto">
        <AreaHeader topheader="Service Advantage" abstract="服务优势" />
        <div className="flex lg:justify-between xs:flex-wrap xs:justify-center xs:items-center">
          {Advantage?.map((item) => {
            return (
              <div
                key={item.title}
                className="border active lg:w-[19.9%] lg:h-[280px] xs:w-[100%] "
              >
                <img src={item.url} className=" block m-auto pt-12 p-3" />
                <h3 className=" block text-center leading-10 text-xl p-3">{item.title}</h3>
                <div className="text-center">{item?.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </AppPhilosophyWrapper>
  );
};
export default AppPhilosophy;
