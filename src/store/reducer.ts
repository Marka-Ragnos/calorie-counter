import { combineReducers } from "redux";
import { reducer as genderReducer } from "./gender/gender";
import { NameSpace } from "../const";

export const rootReducer = combineReducers({
  [NameSpace.GENDER]: genderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
