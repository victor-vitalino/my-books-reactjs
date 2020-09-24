import produce from "immer";

const INITIAL_STATE = {
    user: { name: "" },
    myList: [],
};

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "@user/ADD_BOOK_TO_MY_LIST_SUCCESS":
            return produce(state, (draft) => {
                let { book, rating } = action.payload;

                let index = draft.myList.findIndex((i) => i.id === book.id);

                index >= 0
                    ? (draft.myList[index].rating = rating)
                    : draft.myList.push({ ...book, rating });
            });

        case "@user/SELECT_USER_SUCCESS":
            return produce(state, (draft) => {
                let { name, myList } = action.payload;
                draft.user.name = name;
                draft.myList = myList;
            });
        case "@user/EXIT":
            return INITIAL_STATE;

        default:
            return state;
    }
}
