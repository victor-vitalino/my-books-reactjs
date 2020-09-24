import { all } from "redux-saga/effects";

import bookSearch from "./bookSearch/sagas";
import user from "./user/sagas";

export default function* rootSaga() {
    return yield all([bookSearch, user]);
}
