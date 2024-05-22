import { createSlice } from '@reduxjs/toolkit';

const clusterSlice = createSlice({
    name: 'cluster',
    initialState: {
        clusterId: -1,
        // clusterName: null,
    },
    reducers: {
        initCluster(state) {
            state.clusterId = -1;
            // state.clusterName = null;
        },
        setCluster(state, props) {
            state.clusterId = props.payload;
            // state.clusterName = props.payload.clusterName;
        },
    }
});

export const { initCluster, setCluster } = clusterSlice.actions;
export default clusterSlice.reducer;