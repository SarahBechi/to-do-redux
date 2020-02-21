const inputReducer = (state = "", action) => {
    switch (action.type) {
        case "CHANGE-INPUT":
            return action.val

        default:
            return state
    }
}


export default inputReducer;