import { combineReducers } from "redux";

import addedFeatureReducer from "./AddedFeatureReducer";

export default combineReducers({
    feature: addedFeatureReducer
})