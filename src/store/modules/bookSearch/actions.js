export function getBookRequest(name) {
    return {
        type: "@bookSearch/GET_BOOK_REQUEST",
        payload: { name },
    };
}

export function getBookSuccess(books) {
    return {
        type: "@bookSearch/GET_BOOK_SUCCESS",
        payload: { books },
    };
}

export function getBookFailure() {
    return {
        type: "@bookSearch/GET_BOOK_FAILURE",
    };
}
