import { createAction, handleActions } from 'redux-actions';

const CHAGE_INPUT = 'wating/CHAGE_INPUT';   //  인풋값 변경
const CREATE = 'wating/CREATE'; //  이름 추가
const ENTER = 'wating/ENTER';   //  입장
const LEAVE = 'wating/LEAVE';   //  나감

let id = 1;
export const chageInput = createAction(CHAGE_INPUT, text => text);
export const create = createAction(CREATE, text => ({ text, id : id++ }) );
export const enter = createAction(ENTER, id => id );
export const leave = createAction(LEAVE, id => id );

const initialState = {
    input : '',
    list : [{
        id:0,
        name:'홍길동',
        entered:true,
    }]
}

export default handleActions({
    [CHAGE_INPUT]:(state,action) => ({
        ...state,
        input : action.payload
    }),
    [CREATE] : (state,action)=>({
        ...state,
        list : state.list.concat({
            id : action.payload.id,
            name : action.payload.text,
            entered:false
        }),
    }),
    [ENTER] : (state,action) => ({
        ...state,
        list : state.list.map(
            item => (item.id === action.payload)? {...item, entered : !item.enterd} : item
        ),
    }),
    [LEAVE] : (state,action) => ({
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
    }),
},initialState)