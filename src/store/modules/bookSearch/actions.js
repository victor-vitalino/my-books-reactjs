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

export function getBookDetailRequest(book, history) {
    return {
        type: "@bookSearch/GET_BOOK_DETAIL_REQUEST",
        payload: { book, history },
    };
}
export function getBookDetailSuccess(book) {
    return {
        type: "@bookSearch/GET_BOOK_DETAIL_SUCCESS",
        payload: { book },
    };
}

export function getBookFailure() {
    return {
        type: "@bookSearch/GET_BOOK_FAILURE",
    };
}
