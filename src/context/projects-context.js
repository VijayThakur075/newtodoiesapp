import React, { createContext, useContext } from 'react';
import { useProjects } from '../hooks';

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
    const {projects} = useProjects()
    console.log("deve",projects);

    return (
        <ProjectsContext.Provider value={projects}>
            {children}
        </ProjectsContext.Provider>
    )
}
export const useProjectsValue = () => useContext(ProjectsContext);
