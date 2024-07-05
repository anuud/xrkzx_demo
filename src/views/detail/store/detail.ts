import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDetailSchool } from '../service/detail';
// import { getBanners } from '../service/home';

export const fetchDetailDataAction = createAsyncThunk('fetchdata', (params: any, { dispatch }) => {
  getDetailSchool(params).then((res) => {
    dispatch(changeDetailAction(res.data));
  });
});

interface DetailListState {
  DetailInfo: any[];
}
const initialState: DetailListState = {
  DetailInfo: []
};

const DetaillistSlice = createSlice({
  name: 'detaillist',
  initialState,
  reducers: {
    changeDetailAction(state, { payload }) {
      state.DetailInfo = payload;
    }
  }
});
export const { changeDetailAction } = DetaillistSlice.actions;
export default DetaillistSlice.reducer;
