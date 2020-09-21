import { all } from "redux-saga/effects";

import bookSearch from "./bookSearch/sagas";

export default function* rootSaga() {
    return yield all([bookSearch]);
}
