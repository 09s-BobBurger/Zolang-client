import { createSlice } from '@reduxjs/toolkit';

const yamlSlice = createSlice({
    name: 'yaml',
    initialState: {
        yaml : "",
    },
    reducers: {
        setYaml(state, props) {
            state.yaml = props.payload
        },
    }
});

export const { setYaml } = yamlSlice.actions;
export default yamlSlice.reducer;