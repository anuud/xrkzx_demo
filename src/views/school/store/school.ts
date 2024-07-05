import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAddressSchool } from '../service/school';
// import { getBanners } from '../service/home';

export const fetchSchoolDataAction = createAsyncThunk('fetchdata', (_, { dispatch }) => {
  getAddressSchool('南山区').then((res) => {
    dispatch(changeNanshanAction(res.data));
  });
  getAddressSchool('福田区').then((res) => {
    dispatch(changefutianAction(res.data));
  });
  getAddressSchool('宝安区').then((res) => {
    dispatch(changebaoanAction(res.data));
  });
  getAddressSchool('龙岗区').then((res) => {
    dispatch(changelonggangAction(res.data));
  });
  getAddressSchool('龙华区').then((res) => {
    dispatch(changelonghuaAction(res.data));
  });
});
export const fetchHandleSchoolDataAction = createAsyncThunk(
  'fetchdata',
  (params: { address: string; courseL: string }, { dispatch }) => {
    const { address, courseL } = params;
    switch (address) {
      case '南山区':
        getAddressSchool('南山区', courseL).then((res) => {
          dispatch(changeNanshanAction(res.data));
        });
        break;
      case '福田区':
        getAddressSchool('福田区', courseL).then((res) => {
          dispatch(changefutianAction(res.data));
        });
        break;
      case '宝安区':
        getAddressSchool('宝安区', courseL).then((res) => {
          dispatch(changebaoanAction(res.data));
        });
        break;
      case '龙岗区':
        getAddressSchool('龙岗区', courseL).then((res) => {
          dispatch(changelonggangAction(res.data));
        });
        break;
      case '龙华区':
        getAddressSchool('龙华区', courseL).then((res) => {
          dispatch(changelonghuaAction(res.data));
        });
    }
  }
);
interface SchoolListState {
  nanshanDistrict: any[];
  futianDistrict: any[];
  baoanDistrict: any[];
  longgangDistrict: any[];
  longhuaDistrict: any[];
}
const initialState: SchoolListState = {
  nanshanDistrict: [],
  futianDistrict: [],
  baoanDistrict: [],
  longgangDistrict: [],
  longhuaDistrict: []
};

const schoollistSlice = createSlice({
  name: 'Schoollist',
  initialState,
  reducers: {
    changeNanshanAction(state, { payload }) {
      state.nanshanDistrict = payload;
    },
    changefutianAction(state, { payload }) {
      state.futianDistrict = payload;
    },
    changebaoanAction(state, { payload }) {
      state.baoanDistrict = payload;
    },
    changelonggangAction(state, { payload }) {
      state.longgangDistrict = payload;
    },
    changelonghuaAction(state, { payload }) {
      state.longhuaDistrict = payload;
    }
  }
});
export const {
  changeNanshanAction,
  changefutianAction,
  changebaoanAction,
  changelonggangAction,
  changelonghuaAction
} = schoollistSlice.actions;
export default schoollistSlice.reducer;
