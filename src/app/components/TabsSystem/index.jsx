import { useState } from "react";
import { AllTabs } from "./styles";
import ServerTaskProcess from "../ServerTaskProcess";

export default function TabsSystem() {
    const tabsList = ["LEME", "Tab2", "Tab3", "Tab4"];
    const [serverTab, setServerTab] = useState(tabsList[0]);
   

    function handleSelectTab(tabName) {
        setServerTab(tabName);
    }


    return(<>
        <AllTabs>
            {tabsList.map( (t,i) => (<button key={i} onClick={() => handleSelectTab(t)}>{t}</button>))}
        </AllTabs>
        <ServerTaskProcess server={serverTab}/>
        
    </>)
}