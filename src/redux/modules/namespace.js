import { createSlice } from '@reduxjs/toolkit';

const namespaceSlice = createSlice({
    name: 'namespace',
    initialState: {
        namespace : "All",
    },
    reducers: {
        initNamespace(state) {
            state.namespace = "All"
        },
        setNamespace(state, props) {
            state.namespace = props.payload
        },
    }
});

export const { initNamespace, setNamespace } = namespaceSlice.actions;
export default namespaceSlice.reducer;