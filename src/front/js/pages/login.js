import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(()=> {
		if(store.token && store.token !== "" && store.token !== undefined){
			navigate("/")
		}
	}, [store.token])

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>

			<h1>Login</h1>
			<div>
				<input type="text" placeholder="email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
				<input type="password" placeholder="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
				<button className="btn btn-primary" onClick={ (e) => actions.login(email, password) }>Login </button>
			</div>

		</div>
	);
};
