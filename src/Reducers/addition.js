// const initialState = {ans:0};

export default (state = {ans:0}, action) => {
    let ans;
    switch (action.type) {
        case 'sum': {
            ans = action.no1 + action.no2;
            return { ans }
        }
        case 'sub': {
            ans = action.no1 - action.no2;
            return { ans }
        }
        case 'mul': {
            ans = action.no1 * action.no2;
            return { ans }
        }
        case 'div': {
            ans = action.no1 / action.no2;
            return { ans }
        }
        default: return state;
    }
}

