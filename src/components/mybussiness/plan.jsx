import { useState } from "react";
import ChartTwo from "./chartTwo"
import TableOne from "./table"
import { TaskProvider } from './TaskContext';
import TaskForm from './TaskForm';


export const Plan = () => {
    const [currentTask, setCurrentTask] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    return (

        <>
            <TaskProvider>
                <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} isEditing={isEditing} setIsEditing={setIsEditing} />
                <TableOne setCurrentTask={setCurrentTask} setIsEditing={setIsEditing} />
                <ChartTwo />
            </TaskProvider>
        </>
    )
}