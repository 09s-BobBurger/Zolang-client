import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        clusterName: "클러스터 이름을 입력해주세요.",
    },
    reducers: {
        initClusterNameInToken(state) {
            state.clusterName = "클러스터 이름을 입력해주세요.";
            // state.clusterName = null;
        },
        setClusterNameInToken(state, props) {
            state.clusterName = props.payload;
            // state.clusterName = props.payload.clusterName;
        },
    }
});

export const { initClusterNameInToken, setClusterNameInToken } = tokenSlice.actions;
export default tokenSlice.reducer;