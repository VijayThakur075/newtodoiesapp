import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';

export const SelectedProjectContext = createContext();
export const SelectedProjectProvider = ({ children }) => {

    const projects = useSelector((state) => state.projects.project);
    console.log("hkdjdj",);
    const selectedProject = useSelector((state) => state.selectedprojects.selectedProject);
    return (
        <SelectedProjectContext.Provider value={selectedProject}>
            {children}
        </SelectedProjectContext.Provider>
    )

}
export const useSelectedProjectValue = () => useContext(SelectedProjectContext);
