export default function reducer(state, action) {
    switch (action.type) {
        case "chooseDriver":
            return [...action.payload];

        default:
            return [...state];
    }
}
