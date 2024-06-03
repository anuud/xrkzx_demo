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
        <div className="flex justify-between h-80">
          {Advantage?.map((item) => {
            return (
              <div key={item.title} className="border active">
                <img src={item.url} className=" block m-auto pt-12 p-3" />
                <h3 className=" block text-center leading-10 text-xl p-3">{item.title}</h3>
                <p className=" leading-10 p-3">{item?.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </AppPhilosophyWrapper>
  );
};
export default AppPhilosophy;
