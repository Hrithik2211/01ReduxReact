const initalState = 0
const changeTheNumber = (state = initalState, action) => {
    switch (action.type) {
        case "INCREMENT":return state+action.payload
        case "DECREMENT": return state - action.payload
        default: return state;
    }
}

export default changeTheNumber