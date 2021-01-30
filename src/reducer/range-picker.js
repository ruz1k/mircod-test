const rangePicker = (state, action) => {
    if (state === undefined) {
        return {
            value: 0
        }
    }
    switch (action.type) {
        case "RANGEPICKER_UPDATED":
            return {
                value: getAdjustedValue(action.payload)
            }
    }
}