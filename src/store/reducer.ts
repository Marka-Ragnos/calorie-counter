import { combineReducers } from "redux";
import { reducer as genderReducer } from "./gender/gender";
import { reducer as parametersReducer } from "./parameters/parameters";
import { reducer as activityReducer } from "./activity/activity";
import { reducer as resultReducer } from "./result/result";
import { NameSpace } from "../const";

export const rootReducer = combineReducers({
  [NameSpace.GENDER]: genderReducer,
  [NameSpace.PARAMETERS]: parametersReducer,
  [NameSpace.ACTIVITY]: activityReducer,
  [NameSpace.RESULT]: resultReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
