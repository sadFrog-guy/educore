import axios from "axios";
import { useState } from "react";
import client from "../services/axios/client.ts";

export default function Auth() {
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("admin");

    const login = async (e) => {

        e.preventDefault();
        try {
            const res = await client.post(
                "/login/",
                {
                    username,
                    password,
                },
                { withCredentials: true }
            );
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="App">
            <form onSubmit={login}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}