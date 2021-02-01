const connection = (state, action) => {
    if (state === undefined) {
        return {
            connection1: false,
            connection2: false,
            connection3: false,
            connection4: false,
            connection5: false,
            connection6: false,
        }
    }
    switch (action.type) {
        case "CONNECTION1":
            return {
                ...state,
                connection1: !state.connection1
            }
        case "CONNECTION2":
            return {
                ...state,
                connection2: !state.connection2
            }
        case "CONNECTION3":
            return {
                ...state,
                connection3: !state.connection3
            }
        case "CONNECTION4":
            return {
                ...state,
                connection4: !state.connection4
            }
        case "CONNECTION5":
            return {
                ...state,
                connection5: !state.connection5
            }
        case "CONNECTION6":
            return {
                ...state,
                connection6: !state.connection6
            }
        default:
            return state
    }
}

export default connection;