import React, { useContext } from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { updateUser } from "../../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function Update() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handelUpdate = (e) => {
        e.preventDefault();
        updateUser({ name, email }, dispatch)
    }

    const handelDelete = (e) => {
        e.preventDefault();
        // dispatch(remove())
    }
    return (
        <div className="update">
            <div className="updateWrapper">
                <h3 className="updateTitle">Update Your Account</h3>
                <Warning />
                <button className="delete" onClick={handelDelete}>Delete Account</button>
                <div className="updateContainer">
                    <form>
                        <div className="formItem">
                            <label>Profile Picture</label>
                            <div className="profilePic">
                                <img
                                    className="avatar"
                                    src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                                <span className="change">Change</span>
                            </div>
                        </div>
                        <div className="formItem">
                            <label>Username</label>
                            <input
                                className="formInput"
                                type="text"
                                placeholder={user.userInfo.name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="formItem">
                            <label>Email</label>
                            <input
                                className="formInput"
                                type="text"
                                placeholder={user.userInfo.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="formItem">
                            <label>Password</label>
                            <input className="formInput" type="password" />
                        </div>
                        <button
                            disabled={user.pending}
                            className="updateButton"
                            onClick={handelUpdate}
                        >
                            Update
                        </button>
                        {user.error && user.pending === false ? <span className="error">{user.errorContent}</span> :
                            <span className="success">Account has been updated!</span>
                        }

                    </form>
                </div>
            </div>
        </div>
    );
}