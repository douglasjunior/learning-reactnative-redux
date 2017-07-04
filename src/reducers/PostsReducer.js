
const INITIAL_STATE = {
    all: [],
    selected: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return { ...state, all: action.payload.data }
        case "FETCH_POST":
            return { ...state, selected: action.payload.data }
        case "CREATE_POST": {
            const all = [...state.all, action.payload.data];
            return { ...state, all }
        }
        case "UPDATE_POST": {
            const selected = action.payload.data;
            const all = state.all.map(item => {
                if (item.id === selected.id) {
                    return selected;
                }
                return item;
            })
            return { ...state, selected, all }
        }
        case "DELETE_POST": {
            const selected = state.selected;
            const all = state.all.filter(item => {
                if (item.id === selected.id) {
                    return false;
                }
                return true;
            })
            return { ...state, selected: null, all }
        }
        default:
            return state;
    }

}