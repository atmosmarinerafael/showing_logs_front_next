import { useEffect, useState } from "react"
import { BoxProcess, ContainerTasks, ContainerTitleAndDate, ServerComponentStyles, TaskTag } from "./styles";
import axios from "axios";
import DatesList from "../DatesList";

export default function ServerTaskProcess() {
    const [taskList, setTaskList] = useState(undefined);

    useEffect(() => {
        const config = {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE3MmU2OWQ2YzVkYWFiZTQyYzFmMjAiLCJpYXQiOjE2OTYwMTg2NTl9.wTLYu4pJeZwXdbCMwvydETOvuch3eS90G9Af7iQPbrE`,
            },
          };

        console.log(process.env.NEXT_PUBLIC_BACK_END_URL)  

        const promise = axios.get(`http://146.235.45.255:5000/logs/LEME/GFS`, config);
        
        promise.then(res => {
            setTaskList(res.data);
        });
        
        promise.catch(err => console.log(err.response.data));
    }, [])

    return (<ServerComponentStyles>
        <ContainerTitleAndDate>
            <h1>LEME - GFS</h1>
            <DatesList setTaskList={setTaskList}/>
        </ContainerTitleAndDate>
        
        <ContainerTasks>
            {taskList?.map( task => 
            <TaskTag key={task._id}>
                <BoxProcess color={task.status === "start" ? "#024D94" : "#F10D82"}>
                    <p>Processo:</p>
                    <span>{task.process}</span>
                    <p>Status:</p>
                    <span>{task.status}</span>
                </BoxProcess>
            </TaskTag>)}
        </ContainerTasks>
        
    </ServerComponentStyles>)
}