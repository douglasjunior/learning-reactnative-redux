
const INITIAL_STATE = {
    title: "",
    body: ""
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGE_POST_TITLE":
            return { ...state, title: action.payload }
        case "CHANGE_POST_BODY":
            return { ...state, body: action.payload }
        case "CREATE_POST":
            return INITIAL_STATE
        default:
            return state;
    }
}