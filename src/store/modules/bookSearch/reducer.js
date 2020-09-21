import produce from "immer";

const INITIAL_STATE = {
    books: [],
};

export default function bookSearch(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "@bookSearch/GET_BOOK_SUCCESS":
            return produce(state, (draft) => {
                draft.books = action.payload.books;
            });
        default:
            return state;
    }
}
