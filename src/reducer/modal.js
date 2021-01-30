const modal = (state, action) => {
    if (state === undefined) {
        return {
            visible: false,
            title: null,
            content: null,
        };
    }
    switch (action.type) {
        case "SHOW_MODAL":
            return {
                visible: !state.visible,
                title: !state.visible ? action.payload.title : null,
                content: !state.visible ? action.payload.content : null,
            };
        default:
            return state;
    }
};

export default modal;