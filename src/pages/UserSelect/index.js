import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectUserRequest } from "../../store/modules/user/actions";

import { AiOutlineUserAdd } from "react-icons/ai";

import { Container, FormUser, SearchContainer, UsersList } from "./styles";

function UserSelect() {
    const [text, setText] = useState("");
    const [users, setUsers] = useState({
        names: [],
    });

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        getUsersInLocalStorage();
    }, []);

    const getUsersInLocalStorage = () => {
        const users = localStorage.getItem("@book/users");
        if (users) {
            setUsers(JSON.parse(users));
        }
    };
    const setNewUser = () => {
        let NewUser = users.names;

        NewUser.push(text);
        setUsers({ names: NewUser });

        localStorage.setItem("@book/users", JSON.stringify(users));
        localStorage.setItem(
            `@usersData/${text}`,
            JSON.stringify({ name: text, myList: [] })
        );
    };
    const SelectUser = (index) => {
        const name = users.names[index];
        dispatch(selectUserRequest({ name, history }));
    };

    return (
        <Container>
            <h2>Usuários</h2>
            <UsersList>
                <ul>
                    {users != null &&
                        users.names.map((user, i) => (
                            <li key={i}>
                                <div onClick={() => SelectUser(i)}>
                                    <p>{user}</p>
                                </div>
                            </li>
                        ))}
                </ul>
            </UsersList>

            <FormUser>
                <form onSubmit={setNewUser}>
                    <SearchContainer>
                        <div>
                            <AiOutlineUserAdd size={36} />
                        </div>

                        <input
                            type="text"
                            placeholder="Adicionar usuário"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </SearchContainer>
                </form>
            </FormUser>
        </Container>
    );
}

export default UserSelect;
