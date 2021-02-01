const range = (state, action) => {
    if (state === undefined) {
        return {
            value: 0
        }
    }
    switch (action.type) {
        case "RANGEPICKER":
            return {
                value: action.payload
            }
        default:
            return  state
    }
}

export default range;