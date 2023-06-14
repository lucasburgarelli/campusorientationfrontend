import { GridComponent, ColumnsDirective, ColumnDirective, PageSettingsModel, Page, Sort, Filter, Group, Inject } from "@syncfusion/ej2-react-grids";
import { Person } from "../login/login";
import { Api } from "../services/api";
import { useEffect, useState } from "react";

interface Classes{
    classes?: Class[]
}

interface Class{
    classroom: string;
    datetime: string;
    description: string;
    courseName: string;
    teacher: string;
}


let Classes: React.FC<Person> = (person : Person) => {
    const [classes, setClasses] = useState([]);

    const getClasses = async() => {
        try{
            const response = await Api.get("/completeclass/ra?Ra=" + person.ra);
            console.log(response.data);
            setClasses(response.data);
        }catch(error){
            console.log("erro");
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
                <ColumnDirective field='Classroom' width='100' textAlign="Right"/>
                <ColumnDirective field='Datetime' width='100'/>
                <ColumnDirective field='Description' width='100' textAlign="Right"/>
                <ColumnDirective field='CourseName' width='100' format="C2" textAlign="Right"/>
                <ColumnDirective field='Teacher' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group]} />
        </GridComponent>
        </div>
    );
};

export default Classes;