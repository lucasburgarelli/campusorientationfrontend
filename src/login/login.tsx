import { useState } from "react";


function Login(){

    const [ra, setRa] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        console.log("Click Login Button");
    }

    return(
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" name="ra" placeholder="Usuário" required />
                <input type="password" name="password" placeholder="Senha" required />
                <button type="submit" onClick={(e) => handleLogin(e)}>Login</button>
            </form>
        </div>
    );
}


export default Login;