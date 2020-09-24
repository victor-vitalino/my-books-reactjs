import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { getBookSuccess, getBookDetailSuccess } from "./actions";

export function* getBook({ payload }) {
    const { name } = payload;

    const nameWithPlus = name.replace(" ", "+");
    const response = yield call(api.get, "volumes", {
        params: {
            q: nameWithPlus,
            orderBy: "relevance",
        },
    });

    const { items } = response.data;

    yield put(getBookSuccess(items));
}

export function* getBookDetail({ payload }) {
    yield put(getBookDetailSuccess(payload.book));

    payload.history && payload.history.push("/detail");
}

export default all([
    takeLatest("@bookSearch/GET_BOOK_REQUEST", getBook),
    takeLatest("@bookSearch/GET_BOOK_DETAIL_REQUEST", getBookDetail),
]);
