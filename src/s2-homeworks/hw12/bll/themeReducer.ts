
const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdAT): {themeId:number} => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state,themeId:action.id}
        default:
            return state
    }
}

type changeThemeIdAT = {type:string,id:number}

export const changeThemeId = (id: number): changeThemeIdAT=> ({ type: 'SET_THEME_ID', id }) // fix any
