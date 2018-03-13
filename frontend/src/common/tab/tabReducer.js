const INITIAL_STATE = {selected: '', visible: {}, list:{}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TAB_SELECTED':
            return {...state, selected: action.payload}
        case 'TAB_SHOWED':
            return {...state, visible: action.payload}
        case 'BILLING_CYCLES_FETCHED':
            return {...state, list: action.payload.data}
        default:
            return state
    }
}