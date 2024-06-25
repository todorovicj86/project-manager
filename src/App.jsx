import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';
import Project from './components/Project';
import EmptyState from './components/EmptyState';
import { useState } from 'react';

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProject: undefined,
        projects: [],
        tasks: [],
    });

    function handleOpenForm() {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProject: null,
        }));
    }

    function handleCloseForm() {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProject: undefined,
        }));
    }

    function handleAddProject(project) {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProject: undefined,
            projects: [project, ...prevState.projects],
        }));
    }

    function openProject(projectId) {
        const project = projectsState.projects.find((project) => project.id === projectId);
        setProjectsState((prevState) => ({
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

        setProjectsState((prevState) => ({
            ...prevState,
            tasks: [newTask, ...prevState.tasks],
        }));
    }

    function handleClearTask(taskId) {
        setProjectsState((prevState) => ({
            ...prevState,
            tasks: prevState.tasks.filter((task) => task.id !== taskId),
        }));
    }

    function handleProjectDelete(projectId) {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProject: undefined,
            projects: prevState.projects.filter((project) => project.id !== projectId),
        }));
    }

    let mainContent = <Project onAddTask={handleAddTask} onClearTask={handleClearTask} project={projectsState.selectedProject} tasks={projectsState.tasks} onProjectDelete={handleProjectDelete} />;

    if (projectsState.selectedProject === null) {
        mainContent = <NewProject onButtonClick={handleCloseForm} onProjectSubmit={handleAddProject} />;
    } else if (projectsState.selectedProject === undefined) {
        mainContent = <EmptyState onOpenForm={handleOpenForm} />;
    }

    return (
        <main className="flex pt-8 h-screen gap-8">
            <Sidebar onAddProjectClick={handleOpenForm} onOpenProject={openProject} projects={projectsState.projects} />
            {mainContent}
        </main>
    );
}

export default App;
