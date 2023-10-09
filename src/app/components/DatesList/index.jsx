import { useEffect, useState } from "react";
import axios from "axios";

export default function DatesList({setTaskList}) {
    const [dateList, setDateList] = useState(undefined);
    const [selectedDate, setSelectedDate] = useState(undefined);
    const [date, setDate] = useState(undefined);

    useEffect(() => {
        const config = {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE3MmU2OWQ2YzVkYWFiZTQyYzFmMjAiLCJpYXQiOjE2OTYwMTg2NTl9.wTLYu4pJeZwXdbCMwvydETOvuch3eS90G9Af7iQPbrE`,
            },
          }; 

        const promise = axios.get(`http://146.235.45.255:5000/logs/dates`, config);
        
        promise.then(res => {
            setDateList(res.data);
        });
        
        promise.catch(err => console.log(err.response.data));
    }, [])

    function handleOptionSelect() {
        if (selectedDate) {
            const config = {
                headers: {
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE3MmU2OWQ2YzVkYWFiZTQyYzFmMjAiLCJpYXQiOjE2OTYwMTg2NTl9.wTLYu4pJeZwXdbCMwvydETOvuch3eS90G9Af7iQPbrE`,
                },
            }; 

            const partDate = selectedDate.split("/");

            const formatedDate = `${partDate[0]}-${partDate[1]}-${partDate[2]}`
            

            console.log(formatedDate);
            const promise = axios.get(`http://146.235.45.255:5000/logs/LEME/GFS/${formatedDate}`, config);
            
            promise.then(res => {
                setTaskList(res.data)
    
            });
            
            promise.catch(err => console.log(err.response.data));
        }
    }

    if(!dateList) {
        return <>Carregando...</>
    }

    return (
        <> 
            <select name="dates" onChange={e => setSelectedDate(e.target.value)} onClick={handleOptionSelect}>
                {dateList?.map((d,i) =>(<option key={i} value={d}  >{d}</option>))}
                    
            </select>
        </>
        
    )
}