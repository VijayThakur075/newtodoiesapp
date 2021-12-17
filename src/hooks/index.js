import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { useDispatch,useSelector} from "react-redux";
import { settask,setArchivedTasks,setProjects } from "../actions";
import { collatedTasksExist } from '../helpers'
import moment from "moment";

export const useTasks = (selectedproject) => {
    
    const tasks = useSelector((state) => state.tasks.task);
    const dispatch = useDispatch();

    console.log("vijay", tasks);
    const archivedTasks = useSelector((state) => state.Archiveds.Archived);
    console.log("hjhkf",archivedTasks);

    useEffect(() => {
        let unsubscirbe = firebase.firestore()
            .collection('tasks')
            .where('userId', '==', "admin@");

        unsubscirbe =
            selectedproject && !collatedTasksExist(selectedproject)
                ? (unsubscirbe = unsubscirbe.where('projectId', '==', selectedproject))
                : selectedproject === 'Today'
                    ? (unsubscirbe = unsubscirbe.where('data', '==', moment().format('DD/MM/YYYY')))
                    : selectedproject === 'INDOX' || selectedproject === 0
                        ? (unsubscirbe = unsubscirbe.where('date', '==', ''))
                        : unsubscirbe;

        unsubscirbe = unsubscirbe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data(),
            }));

            dispatch(settask(
                selectedproject === 'NEXT_7'
                    ? newTasks.filter(
                        task =>
                            moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 &&
                            task.archived !== true
                    )
                    : newTasks.filter(task => task.archived !== true)
            ));
           dispatch(setArchivedTasks(newTasks.filter(task => task.archived !== false)))
        });
        return () => unsubscirbe()
    }, [selectedproject]);

    return { tasks, archivedTasks }
};


export const useProjects = () => {
    // const [projects, setProjects] = useState(null)
    const projects = useSelector((state) => state.projects.project);
    const dispatch=useDispatch()
   console.log("uuuuuuu",projects);

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .where('userId', '==', 'admin@')
            .orderBy('projectId')
            .get()
            .then(snapshot => {
                const allProjects = snapshot.docs.map(project => ({
                    ...project.data(),
                    docId: project.id,
                }));
                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    dispatch(setProjects(allProjects))
                }
            });
    }, [])

    return { projects };
};