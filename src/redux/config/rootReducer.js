import { combineReducers } from '@reduxjs/toolkit';
import yamlReducer from '../modules/yaml.js';
import namespaceReducer from '../modules/namespace.js';
import clusterReducer from "../modules/cluster.js";

// modules에서 작성한 reducer를 가져온다.
const rootReducer = combineReducers({
    yaml: yamlReducer,
    cluster: clusterReducer,
    namespace: namespaceReducer,
});

export default rootReducer;