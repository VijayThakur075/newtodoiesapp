import React, { useState } from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from 'react-icons/fa';
import { Projects } from './Projects';
import { useDispatch, useSelector } from 'react-redux';
import { setselectedProject } from '../../actions';
import { useSelectedProjectValue } from '../../context';
import AddProject from '../AddProject';
import { setActive, setShowProjects } from '../../actions';

export const Sidebar = () => {
  const dispatch = useDispatch()
  const active = useSelector(state => state.showActive.active)
  const showProjects = useSelector(state => state.showproject.showProjects)

  return (
    <div className="sidebar" data-testid="sidebar">
      <ul className="sidebar__generic">
        <li
          data-testid="inbox"
          className={active === 'inbox' ? 'active' : undefined}
        >
          <div
            data-testid="inbox-action"
            aria-label="Show inbox tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              dispatch(setActive('inbox'));
              dispatch(setselectedProject('INBOX'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(setActive('inbox'));
                dispatch(setselectedProject('INBOX'));
              }
            }}
          >
            <span>
              <FaInbox />
            </span>
            <span>Inbox</span>
          </div>
        </li>
        <li
          data-testid="today"
          className={active === 'today' ? 'active' : undefined}
        >
          <div
            data-testid="today-action"
            aria-label="Show today's tasks"
            tabIndex={0}
            role="button"
            onClick={() => {
              dispatch(setActive('today'));
              dispatch(setselectedProject('TODAY'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(setActive('today'));
                dispatch(setselectedProject('TODAY'));
              }
            }}
          >
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </div>
        </li>
        <li
          data-testid="next_7"
          className={active === 'next_7' ? 'active' : undefined}
        >
          <div
            data-testid="next_7-action"
            aria-label="Show tasks for the next 7 days"
            tabIndex={0}
            role="button"
            onClick={() => {
              dispatch(setActive('next_7'));
              dispatch(setselectedProject('NEXT_7'));
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                dispatch(setActive('next_7'));
                dispatch(setselectedProject('NEXT_7'));
              }
            }}
          >
            <span>
              <FaRegCalendarAlt />
            </span>
            <span>Next 7 days</span>
          </div>
        </li>
      </ul>
      <div
        className="sidebar__middle"
        aria-label="Show/hide projects"
        onClick={() => dispatch(setShowProjects(!showProjects))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') dispatch(setShowProjects(!showProjects));
        }}
        role="button"
        tabIndex={0}
      >
        <span>
          <FaChevronDown
            className={!showProjects ? 'hidden-projects' : undefined}
          />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
      {showProjects && <AddProject />}
    </div>
  );
};