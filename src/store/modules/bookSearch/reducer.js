import produce from "immer";

const INITIAL_STATE = {
    books: [],
    bookSelected: null,
};

export default function bookSearch(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "@bookSearch/GET_BOOK_SUCCESS":
            return produce(state, (draft) => {
                draft.books = action.payload.books;
            });
        case "@bookSearch/GET_BOOK_DETAIL_SUCCESS":
            return produce(state, (draft) => {
                draft.bookSelected = action.payload.book;
            });
        case "@user/EXIT":
            return INITIAL_STATE;
        default:
            return state;
    }
}
