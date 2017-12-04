
/*
    All reducers get two parameters passed in, state and action that occur.

*/
// "state"= null is set so that we dont throw an error when app first boots.
export default function (state=null, action){
    switch (action.type) {
        case 'TRAINER_SELECTED':
            return action.payload;
            break;
    }

    return state;
}