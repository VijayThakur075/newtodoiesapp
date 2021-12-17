import React from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa'
import moment from 'moment'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generatePushId } from '../helpers'
import { useProjectsValue, useSelectedProjectValue } from '../context'
import { firebase } from '../firebase'
import { setShoeMain, setAddTask } from '../actions'
import { TaskDate } from './TaskDate'


export const AddTask = ({
    showAddtaskMain = true,
    // showshouldMain = false,
    showQuickAddTask,
    setShowQuickAddTask,
}) => {
    const dispatch = useDispatch()
    const task = useSelector((state) => state.addTask.task)
    const selectedProject = useSelector(state => state.selectedprojects.selectedProject)
    const [project] = useState('');
    const showMain = useSelector((state) => state.setShowMain.showMain)
    const projectId = generatePushId();
    const projects = useProjectsValue();
    // const selectedProject = useSelectedProjectValue()

    const [taskDate, setTaskDate ] = useState('');
    const [showTaskDate, setShowTaskDate] = useState('')
      console.log('ttttttttt',showTaskDate);
    const addTask = () => {
        const projectId = project || selectedProject;
        let collatedDate = '';
        if (projectId === 'TODAY') {
            collatedDate = moment().format('DD/MM/YYYY');
        } else if (projectId === 'NEXT_7') {
            collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
        }

        return (
            task && projectId &&
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    projectId,
                    task,
                    userId: 'admin@',
                    date: collatedDate || taskDate
                })
                .then(() => {

                    dispatch(setShoeMain(''));
                })
        )
    }

    return (
        <div>
            <div className="add-task__main" data-testid="add-task__main">
                {showMain && (
                    <div className="add-task__input" data-testid="add-task-inner">
                        <input
                            className="add-task__content"
                            aria-label="Enter your task"
                            data-testid="add-task-content"
                            type="text"
                            value={task}
                            onChange={(e) => dispatch(setAddTask(e.target.value))}
                        />
                        <TaskDate
            setTaskDate={setTaskDate}
            showTaskDate={showTaskDate}
            setShowTaskDate={setShowTaskDate}
          />
                        <button
                            className="add-task__submit"
                            type="button"
                            onClick={() => addTask()}
                            data-testid="add-task-submit"
                        >
                            Add Task
                        </button>
                        <span
                            aria-label="Cancel adding task"
                            data-testid="hide-task-overlay"
                            className="add-task__cancel"
                            onClick={() => dispatch(setShoeMain(false))}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') dispatch(setShoeMain(false));
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            Cancel
                        </span>
                    </div>
                )}
                <span className="add-task__plus">+</span>
                <span
                    aria-label="Add task"
                    data-testid="add-task-action"
                    className="add-task__text"
                    onClick={() => dispatch(setShoeMain(!showMain))}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') dispatch(setShoeMain(!showMain));
                    }}
                    role="button"
                    tabIndex={0}
                >
                    Add Task
                   
                </span>
                <FaRegCalendarAlt />
            </div>
        </div>
    )
}
