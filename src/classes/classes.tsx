import { Person } from "../login/login";

let Classes: React.FC<Person> = (person : Person) => {
    console.log(person);
    
    return(
        <div>
            <h1>Aulas hoje</h1>
        </div>
    );
};

export default Classes;