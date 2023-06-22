import { useState } from "react";
import { Api } from "../services/api";
import Classes from "../classes/classes";
import { toast } from "react-toastify";
import { ShowError } from "../App";

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

        if(ra === "" || password === ""){
            ShowError('Usuário ou senha inválidos');
                return;
        }

        try{
            const response = await Api.get("/person?Ra="+ra+"&Password="+password);
            console.log(response.status);
            if(response.status === 204){
                ShowError('Usuário ou senha inválidos');
                return;
            }
            setUser(response.data);
        }catch(error){
            ShowError("Problema de conexão");
        }
    }
    
    return(user.ra === "" ?
        (<div>
            <form>
                <input type="text" className="input" name="ra" placeholder="Usuário" required onChange={(e) => setRa(e.target.value)} /><br></br>
                <input type="password" className="input" name="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} /><br></br>
                <button type="submit" className="button" onClick={(e) => handleLogin(e)}>Login</button>
            </form>
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