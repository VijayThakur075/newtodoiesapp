import { useState, useEffect} from "react";
import {FaTrashAlt} from 'react-icons/fa';
import { useProjectsValue,useSelectedProjectValue } from "../context";
import {firebase} from '../firebase'
import React from 'react'
import { useDispatch } from "react-redux";
import { setProjects,setselectedProject } from "../actions";

export const IndividualProject =({project})=> {
    const dispatch = useDispatch()
    const [showConfirm,setShowConfirm] = useState(false);
    const [projects] = useProjectsValue(false);
    // const [selectedProject] = useSelectedProjectValue();


    const deleteProject = docId => {
        firebase
        .firestore()
        .collection('projects')
        .doc(docId)
        .delete()
        .then(()=>{
            dispatch(setProjects([...projects]))
            dispatch(setselectedProject('INBOX'));

        })
    }
    return (
        <div>
            <span className ="sidebar__dot">.</span>
            <span className ="sidebar__project-name">{project.name}</span>
            <span className ="sidebar__project-delete" data-testid="delete-project" 
            role="button"
            onClick={()=>setShowConfirm(!showConfirm)}
            onKeyDown={()=>setShowConfirm(!showConfirm)}>
                <FaTrashAlt/>
                {showConfirm && (
          <div className="project-delete-modal">
            <div className="project-delete-modal__inner">
              <p>Are you sure you want to delete this project?</p>
              <button
                type="button"
                onClick={() => deleteProject(project.docId)}
              >    Delete
              </button>
              </div>
              </div>
                )}
            </span>
        </div>
    )
}
