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
    const [user, setUser] = useState<Person>();

    const handleLogin = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();

        try{
            const response = await Api.get("/person?Ra="+ra+"&Password="+password);
            setUser(response.data);
            if(response.data == null) setError("Usuário ou senha inválidos");
        }catch(error){
            setError("Problema de conexão, tente novamente mais tarde.");
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
        </div>) 
        :
        (
            <div>
                <Classes ra={user.ra} name={user.name} id={user.id}></Classes>
            </div>
        )
    );
}


export default Login;