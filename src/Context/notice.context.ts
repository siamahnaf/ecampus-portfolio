import { createContext } from "react";

//Types
interface Context {
    index: number;
    setIndex: Function;
}

export const NoticeContext = createContext<Context>({
    index: 0,
    setIndex: () => 0
})