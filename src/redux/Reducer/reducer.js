
const initialState = {
    user:{},
    errormsg:{}
}

const Reducer = (state=initialState, action) => {
    switch(action.type){
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                user:action.payload
            }
        case 'REGISTER_FAIL':
            return{
                ...state,
                errormsg:action.payload
            }

        case 'LOGIN_SUCCESS':
            return{
                ...state,
                user:action.payload
            }
        
        case 'GET_USER':
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
    
}

export default Reducer;