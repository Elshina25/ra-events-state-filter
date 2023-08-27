import { useState } from 'react';
import { projects } from '../../projects/projects';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar from '../Toolbar/Toolbar';

export default function Portfolio() {
    const [state, setState] = useState('All');

    const filteredProjects = projects.filter(project => {
        if (state === 'All') {
            return true;
        } else {
           return project.category === state;
        }
    });
    
    return (
        <div>
            <Toolbar 
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected={state}
            onSelectFilter={setState}
            />
            <ProjectList projects={filteredProjects}/>
        </div>
    )

}