import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function SignUp(props) {
	if (props.sesion) {
		return (
			<form>
				<label htmlFor="email">Email</label>
				<input type="email" id="email" />
				<label htmlFor="password">Password</label>
				<input type="password" id="password" />
				<button>Create</button>
			</form>
		);
	}
	return null;
}

function App() {
	const [sesion, setSesion] = useState(false);

	return (
		<div>
			<button onClick={() => setSesion(true)}>Sign Up</button>
			<SignUp sesion={sesion} />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));