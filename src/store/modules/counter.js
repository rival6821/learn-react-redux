import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의
// 모듈명 / 액션명
const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션함수 생성
// export const changeColor = color => ({
//     type : CHANGE_COLOR,
//     color
// });
// export const increment = () => ({
//     type : INCREMENT
// });
// export const decrement = () => ({
//     type : DECREMENT
// });

export const changeColor = createAction(CHANGE_COLOR, color => color);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 초기상태 정의
const initialState = {
    color : 'red',
    number : 0
}

// 리듀서 작성
// export default function counter(state = initialState, action){
//     switch (action.type){
//         case CHANGE_COLOR : 
//             return {
//                 ...state,
//                 color : action.color,
//             };
//         case INCREMENT : 
//             return {
//                 ...state,
//                 number : state.number + 1,
//             };
//         case DECREMENT :
//             return {
//                 ...state,
//                 number : state.number - 1,
//             };
//         default :
//             return state;
//     }
// }

export default handleActions({
    [CHANGE_COLOR] : (state,action) => ({
        ...state,
        color : action.payload
    }),
    [INCREMENT] : (state,action) => ({
        ...state,
        number : state.number + 1
    }),
    [DECREMENT] : (state,action) => ({
        ...state,
        number : state.number - 1
    }),
},initialState);