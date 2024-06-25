import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import Project from './components/Project';
import EmptyState from './components/EmptyState';
import { useState } from 'react';

function App() {
    const [projects, setProjects] = useState({
        selectedProject: undefined,
        projects: [],
        tasks: [],
    });

    function handleOpenForm() {
        setProjects((prevState) => ({
            ...prevState,
            selectedProject: null,
        }));
    }

    function handleCloseForm() {
        setProjects((prevState) => ({
            ...prevState,
            selectedProject: undefined,
        }));
    }

    function handleAddProject(project) {
        setProjects((prevState) => ({
            ...prevState,
            selectedProject: undefined,
            projects: [project, ...prevState.projects],
        }));
    }

    function openProject(projectId) {
        const project = projects.projects.find((project) => project.id === projectId);
        setProjects((prevState) => ({
            ...prevState,
            selectedProject: project,
        }));
    }

    function handleAddTask(projectId, taskValue) {
        const newTask = {
            id: `task-${Date.now().toString()}`,
            name: taskValue,
            projectId: projectId,
        };

        setProjects((prevState) => ({
            ...prevState,
            tasks: [newTask, ...prevState.tasks],
        }));
    }

    function handleClearTask(taskId) {
        setProjects((prevState) => ({
            ...prevState,
            tasks: prevState.tasks.filter((task) => task.id !== taskId),
        }));
    }

    function handleProjectDelete(projectId) {
        setProjects((prevState) => ({
            ...prevState,
            selectedProject: undefined,
            projects: prevState.projects.filter((project) => project.id !== projectId),
        }));
    }

    let mainContent = <Project onAddTask={handleAddTask} onClearTask={handleClearTask} project={projects.selectedProject} tasks={projects.tasks} onProjectDelete={handleProjectDelete} />;

    if (projects.selectedProject === null) {
        mainContent = <NewProject onButtonClick={handleCloseForm} onProjectSubmit={handleAddProject} />;
    } else if (projects.selectedProject === undefined) {
        mainContent = <EmptyState onOpenForm={handleOpenForm} />;
    }

    return (
        <main className="flex pt-8 h-screen gap-8">
            <Sidebar onAddProjectClick={handleOpenForm} onOpenProject={openProject} projects={projects.projects} />
            {mainContent}
        </main>
    );
}

export default App;
