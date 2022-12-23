import { ActionParent } from "../actions/todo.action";
import { Todo } from "../models/Todo";
import { TodoActionType } from "../shared/todo-actions-types.enum";

const initialState: Todo[] = [
    {title:"Todo 1"},
    {title:"todo 2"},
    {title:"todo 3"}
];

export function TodoReducer(state = initialState, 
    action: ActionParent){
        switch(action.type) {
            case TodoActionType.Add:
                return[...state, action.payload]
            default:return state;
        }
    }