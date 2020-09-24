export function addBookToMyListRequest({ book, rating }) {
    return {
        type: "@user/ADD_BOOK_TO_MY_LIST_REQUEST",
        payload: { book, rating },
    };
}
export function addBookToMyListSuccess({ book, rating }) {
    return {
        type: "@user/ADD_BOOK_TO_MY_LIST_SUCCESS",
        payload: { book, rating },
    };
}
