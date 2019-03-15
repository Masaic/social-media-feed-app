export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.playload];
        default:
            return state;
    }
}