import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        clusterName: "",
    },
    reducers: {
        initClusterNameInToken(state) {
            state.clusterName = "";
        },
        setClusterNameInToken(state, props) {
            state.clusterName = props.payload;
        },
    }
});

export const { initClusterNameInToken, setClusterNameInToken } = tokenSlice.actions;
export default tokenSlice.reducer;