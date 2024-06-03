import { createSlice } from '@reduxjs/toolkit';

const clusterSlice = createSlice({
    name: 'cluster',
    initialState: {
        clusterId: -1,
    },
    reducers: {
        initCluster(state) {
            state.clusterId = -1;
        },
        setCluster(state, props) {
            state.clusterId = props.payload;
        },
    }
});

export const { initCluster, setCluster } = clusterSlice.actions;
export default clusterSlice.reducer;