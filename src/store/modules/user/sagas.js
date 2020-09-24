import { all, takeLatest, put, select } from "redux-saga/effects";

import {
    addBookToMyListSuccess,
    updateBookStarsSuccess,
    selectUserSuccess,
} from "./actions";
import { getBookDetailRequest } from "../bookSearch/actions";

export function* addBookToList({ payload }) {
    const { book, rating } = payload;

    yield put(addBookToMyListSuccess({ book, rating }));
    const newBookDetail = { ...book, rating };

    yield put(getBookDetailRequest(newBookDetail, null));

    // get state from redux
    const { user, myList } = yield select((state) => state.userReducer);
    //add to localStorage
    localStorage.setItem(
        `@usersData/${user.name}`,
        JSON.stringify({ name: user.name, myList })
    );
}

export function* getUserDataFromStorage({ payload }) {
    const { name, history } = payload;

    let myList = [];
    const response = localStorage.getItem(`@usersData/${name}`);
    if (response) {
        const parsedData = JSON.parse(response);
        myList = parsedData.myList;
    }

    yield put(selectUserSuccess({ name, myList }));
    history.push("/");
}

export default all([
    takeLatest("@user/ADD_BOOK_TO_MY_LIST_REQUEST", addBookToList),
    takeLatest("@user/SELECT_USER_REQUEST", getUserDataFromStorage),
]);
