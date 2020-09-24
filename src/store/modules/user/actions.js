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
export function selectUserRequest({ name, history }) {
    return {
        type: "@user/SELECT_USER_REQUEST",
        payload: { name, history },
    };
}
export function selectUserSuccess({ name, myList }) {
    return {
        type: "@user/SELECT_USER_SUCCESS",
        payload: { name, myList },
    };
}
export function exitSystem() {
    return {
        type: "@user/EXIT",
    };
}
