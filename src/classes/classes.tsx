import { GridComponent, ColumnsDirective, ColumnDirective, PageSettingsModel, Page, Sort, Filter, Group, Inject } from "@syncfusion/ej2-react-grids";
import { Person } from "../login/login";
import { Api } from "../services/api";
import { useEffect, useState } from "react";

interface Classes{
    classes?: Class[]
}

interface Class{
    classroom: string;
    datetimestart: string;
    datetimeend: string;
    description: string;
    courseName: string;
    teacher: string;
}


const Classes: React.FC<Person> = (person : Person) => {
    const [classes, setClasses] = useState([]);
    const [error, setError] = useState('');

    const getClasses = async() => {
        try{
            const response = await Api.get("/completeclass/ra?ra=" + person.ra);
            setClasses(response.data);
            setError("");
        }catch(error){
            setError("Erro ao reiniciar semestre!");
        }
    }

    const handleCourses = async (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();

        try{
            const response = await Api.put("/course/ra?ra="+person.ra);
            setError("");
            getClasses();
        }catch(error){
            setError("Erro ao reiniciar semestre!");
        }
    }

    useEffect(() =>{
        getClasses(); 
    }, [])

    const pageSettings: PageSettingsModel = { pageSize: 6 }
    return(
        <div>
            <h1>Aulas hoje</h1>
            <GridComponent dataSource={classes} allowPaging={true} pageSettings={ pageSettings }>
            <ColumnsDirective>
                <ColumnDirective field='Classroom' headerText="Sala" width='10' textAlign="Center"/>
                <ColumnDirective field='datetimestart' headerText="Inicio" width='10' textAlign="Center"/>
                <ColumnDirective field='datetimeend' headerText="Termino" width='10' textAlign="Center"/>
                <ColumnDirective field='Description' headerText="Descrição" width='10' textAlign="Center"/>
                <ColumnDirective field='CourseName' headerText="Curso" width='10' textAlign="Center"/>
                <ColumnDirective field='Teacher' headerText="Professor" width='10' textAlign="Center"/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>
        <button type="submit" onClick={(e) => handleCourses(e)}>Reiniciar semestre</button>
        <p>{error}</p>
        </div>
    );
};

export default Classes;