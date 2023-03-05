import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType):  Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up':
                    return [...state].sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase())?1:(a.name.toLowerCase() < b.name.toLowerCase())?-1:0)
                case 'down':
                    return [...state].sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase())?1:(a.name.toLowerCase() > b.name.toLowerCase())?-1:0)
                default:
                    return [...state];
            }
        }
        case 'check': {
            return [...state].filter((i)=> i.age >= action.payload) // need to fix
        }
        default:
            return {...state}
    }
}
Array<string>