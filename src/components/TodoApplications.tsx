import React from "react"
import TodoApplication from "./TodoApplication";

const TodoApplications = () => {
    const items: string[] = ["Anonna", "Akther"];
    const onClick = (text: string): void => alert(text);
    return(
        <div>
            <TodoApplication items={items} onClick={onClick}/>
        </div>
    );
};
export default TodoApplications;