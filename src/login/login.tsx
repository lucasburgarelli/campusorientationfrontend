import axios from "axios";
import { useState } from "react";


function Login(){

    const [ra, setRa] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        console.log("Click Login Button");

        const response = await axios.post("");
    }
    return(
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" name="ra" placeholder="Usuário" required onChange={(e) => setRa(e.target.value)} />
                <input type="password" name="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={(e) => handleLogin(e)}>Login</button>
            </form>
        </div>
    );
}


export default Login;