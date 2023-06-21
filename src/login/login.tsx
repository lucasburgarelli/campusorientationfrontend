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
    const [user, setUser] = useState<Person>({
        id: "",
        ra: "",
        name: "",
        password: "",
        courses: [],
        idcourses: []
    });

    const handleLogin = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();

        try{
            const response = await Api.get("/person?Ra="+ra+"&Password="+password);
            if(response.status == 204){
                setError("Usuário ou senha inválidos");
                return;
            }
            setUser(response.data);
        }catch(error){
            setError("Problema de conexão, tente novamente mais tarde.");
        }
    }
    
    return(user.ra == "" ?
        (<div>
            <form>
                <input type="text" name="ra" placeholder="Usuário" required onChange={(e) => setRa(e.target.value)} /><br></br>
                <input type="password" name="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} /><br></br>
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