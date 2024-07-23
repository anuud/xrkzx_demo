import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import Homelist from '../views/home/store/home';
import Schoollist from '../views/school/store/school';
import Detaillist from '../views/detail/store/detail';
import AcademList from '../views/academy/store/academy';

const store = configureStore({
  reducer: {
    homelist: Homelist,
    schoollist: Schoollist,
    detaillist: Detaillist,
    academlist: AcademList
  }
});

type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type DispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispatchType = useDispatch;

export default store;
