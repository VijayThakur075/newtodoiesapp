import React from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa'
import moment from 'moment'
import { useSelectedProjectValue } from '../context'
import { useState } from 'react'

export const AddTask=({
    showAddtaskMain = true,
    showshouldMain = false,
    showQuickAddTask,
    setShowQuickAddTask,
}) =>{

    const [task, setask] = useState('');
    const [tasdate, setTaskDate] = useState('');
    const [project, setProject] = useState('');
    const [showMain, setShowMain]= useState(showshouldMain);
    const [showProjectOverlay, setShowProjectOverlay]= useState(false);
    const [showTaskdate, setShowTaskdate]= useState(false);


    return (
        <div>
            
        </div>
    )
}
