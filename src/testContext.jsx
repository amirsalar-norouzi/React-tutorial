import { createContext } from "react"
import TimeList from "./timelist";

export const TestContext=createContext({
    timeArray:[],
    settimeArray:()=>{}
});