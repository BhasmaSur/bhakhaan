import { createStore } from "redux";
import  projectReducer  from "./Project/ProjectReducer";

const store = createStore(projectReducer);
export default store;