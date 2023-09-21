import { todoState } from "../atoms/TodoState";

import { selector } from "recoil";

export const totalTodos= selector({
    key: 'totaltodos',
    get: ({get}) => {
        const totalTs = get(todoState);
        return totalTs.length 
    }
})