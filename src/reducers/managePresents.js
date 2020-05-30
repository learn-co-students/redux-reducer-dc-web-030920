export function managePresents(state= {numberOfPresents:0}, action){
   let newState = {}
    switch(action.type){
        case 'INCREASE': 
            newState['numberOfPresents'] = (state.numberOfPresents+ 1 )
            return newState
    }
    return state
}
