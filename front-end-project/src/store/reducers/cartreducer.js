const INTIAL_VALUE ={ 
    menu:[]
};

export default (state= INTIAL_VALUE , action)=>{
        switch(action.type){
            case'Add-FAVORITE':
                    return{
                        ...state,
                        menu: action.payload
                    }
            default:
                return state
        }
}