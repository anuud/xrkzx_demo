import React, { useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { SchoolWrapper } from './styled';
import SubTitle from './components/subTabs';
import SubSchool from './components/subschool';
import { useAppDispatch, useAppSelector } from '../../store';
import { useTitle } from 'ahooks';
import { fetchHandleSchoolDataAction, fetchSchoolDataAction } from './store/school';
import TopBanner from '../../components/top-banner';
import { shallowEqual } from 'react-redux';
interface IProps {
  children?: ReactNode;
}
const School: FC<IProps> = () => {
  useTitle('找学校');
  const dispatch = useAppDispatch();

  const { nanshanDistrict, futianDistrict, baoanDistrict, longgangDistrict, longhuaDistrict } =
    useAppSelector(
      (state) => ({
        nanshanDistrict: state.schoollist.nanshanDistrict,
        futianDistrict: state.schoollist.futianDistrict,
        baoanDistrict: state.schoollist.baoanDistrict,
        longgangDistrict: state.schoollist.longgangDistrict,
        longhuaDistrict: state.schoollist.longhuaDistrict
      }),
      shallowEqual
    );

  const tabClick = (address: string, courseL: string) => {
    dispatch(fetchHandleSchoolDataAction({ address, courseL }));
  };

  useEffect(() => {
    dispatch(fetchSchoolDataAction());
  }, []);
  return (
    <SchoolWrapper>
      <TopBanner />
      <div className="my-4">
        <SubTitle name="南山区" tabClick={tabClick} />
        <SubSchool schoolInfo={nanshanDistrict} />
      </div>
      <div className="my-4">
        <SubTitle name="福田区" tabClick={tabClick} />
        <SubSchool schoolInfo={futianDistrict} />
      </div>
      <div className="my-4">
        <SubTitle name="宝安区" tabClick={tabClick} />
        <SubSchool schoolInfo={baoanDistrict} />
      </div>
      <div className="my-4">
        <SubTitle name="龙岗区" tabClick={tabClick} />
        <SubSchool schoolInfo={longgangDistrict} />
      </div>
      <div className="my-4">
        <SubTitle name="龙华区" tabClick={tabClick} />
        <SubSchool schoolInfo={longhuaDistrict} />
      </div>
    </SchoolWrapper>
  );
};
export default School;
