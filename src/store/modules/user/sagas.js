import { all, takeLatest, put } from "redux-saga/effects";

import { addBookToMyListSuccess } from "./actions";

export function* addBookToList({ payload }) {
    const { book, rating } = payload;

    yield put(addBookToMyListSuccess({ book, rating }));
}

export default all([
    takeLatest("@user/ADD_BOOK_TO_MY_LIST_REQUEST", addBookToList),
]);
