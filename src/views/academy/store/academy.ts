import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSerach } from '../service/academy';

type searchinfo = {
  objectInfo: string;
  course: string;
  address: string;
};

export const fetchAcademyDataAction = createAsyncThunk('fetchdata', (params, { dispatch }) => {
  getSerach(params).then((res) => {
    dispatch(changeAcademAction(res.data));
  });
});
export const fetchAcademylistAction = createAsyncThunk(
  'fetchdata',
  (params: searchinfo, { dispatch }) => {
    getSerach(params).then((res) => {
      dispatch(changeAcademAction(res.data));
    });
  }
);

interface AcademlistState {
  academlist: any[];
}
const initialState: AcademlistState = {
  academlist: []
};

const academlistSlice = createSlice({
  name: 'Homelist',
  initialState,
  reducers: {
    changeAcademAction(state, { payload }) {
      state.academlist = payload;
    }
  }
});
export const { changeAcademAction } = academlistSlice.actions;
export default academlistSlice.reducer;
