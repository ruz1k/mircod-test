const options = (state, action) => {
    if (state === undefined) {
        return {
            option1: false,
            option2: false,
            option3: false,
            option4: false,
            option5: false,
            option6: false,
            option7: false,
            option8: false,
            option9: false,
            option10: false,
            option11: false,
        }
    }

    switch (action.type) {
        case "SELECTED_OPTION1":
            return {
                ...state,
                option1: !state.option1
            }
        case "SELECTED_OPTION2":
            return {
                ...state,
                option2: !state.option2
            }
        case "SELECTED_OPTION3":
            return {
                ...state,
                option3: !state.option3
            }
        case "SELECTED_OPTION4":
            return {
                ...state,
                option4: !state.option4
            }
        case "SELECTED_OPTION5":
            return {
                ...state,
                option5: !state.option5
            }
        case "SELECTED_OPTION6":
            return {
                ...state,
                option6: !state.option6
            }
        case "SELECTED_OPTION7":
            return {
                ...state,
                option7: !state.option7
            }
        case "SELECTED_OPTION8":
            return {
                ...state,
                option8: !state.option8
            }
        case "SELECTED_OPTION9":
            return {
                ...state,
                option9: !state.option9
            }
        case "SELECTED_OPTION10":
            return {
                ...state,
                option10: !state.option10
            }
        case "SELECTED_OPTION11":
            return {
                ...state,
                option11: !state.option11
            }
        default:
            return state
    }
}

export default options;