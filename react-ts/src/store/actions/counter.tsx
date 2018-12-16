import * as types from '../action-types';
export interface increment {
    type: typeof types.INCREMENT
}
export interface decrement {
    type: typeof types.DECREMENT
}
export type Action = increment | decrement;
export default {
    increment(): increment {
        return { type: types.INCREMENT }
    },
    incrementDelay() {
        return function (dispatch: any, getState: any) {
            setTimeout(() => {
                dispatch({ type: types.INCREMENT })
            }, 1000)
        }
    },
    decrement(): decrement {
        return { type: types.DECREMENT }
    }
}