export default function(state = { }, action){
    
    switch(action.type){
        case 'COMMENT_LIST':
         return { ...state, commentList:action.payload}
         default:
             return state;
    }
}