import { useState } from "react";
import { Api } from "../services/api";
import Classes from "../classes/classes";


export interface Person{
    id: string;
    ra: string,
    name: string,
    password?: string,
    courses?: string[],
    idcourses?: string[]
}

function Login(){

    const [ra, setRa] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState<Person>()

    const handleLogin = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        console.log("Click Login Button");

        try{
            const response = await Api.get("/person?Ra="+ra+"&Password="+password);
            console.log(response.data);
            setUser(response.data);
        }catch(error){
            setError("Usuário ou senha inválidos");
        }
    }
    return(user == null ?
        (<div>
            <h1>Login</h1>
            <form>
                <input type="text" name="ra" placeholder="Usuário" required onChange={(e) => setRa(e.target.value)} />
                <input type="password" name="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={(e) => handleLogin(e)}>Login</button>
            </form>
            <p>{error}</p>
        </div>) :
        (
            <div>
                <Classes id={user.id} ra={user.ra} name={user.name}></Classes>
            </div>
        )
    );
}


export default Login;