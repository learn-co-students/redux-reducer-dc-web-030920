export function manageFriends(state={friends:[]}, action){
   let newState= {}
    switch(action.type){
        case 'ADD_FRIEND':
            let friendArray = [...state.friends]
            friendArray.push(action.friend)
            newState['friends'] = friendArray
            return newState
        case 'REMOVE_FRIEND':
            let removeFriendArray = [...state.friends]
            newState['friends'] = removeFriendArray.filter(f => f.id !== action.id)
            return newState
    }
   return state 
}
