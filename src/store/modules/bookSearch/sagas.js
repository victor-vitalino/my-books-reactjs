import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { getBookSuccess } from "./actions";
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

export default all([takeLatest("@bookSearch/GET_BOOK_REQUEST", getBook)]);
