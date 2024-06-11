export default function Project() {
  return (
    <section>
      <h2>Project title</h2>
      <button>delete</button>
      <p>due data</p>
      <p>project description</p>
      <hr></hr>
      <h3>Task</h3>
      <input type="text" />
      <button>add task</button>

      <p>This project does not have tasks</p>
      <ul>
        <li>
          task name
          <button>clear</button>
        </li>
        <li>
          task name
          <button>clear</button>
        </li>
        <li>
          task name
          <button>clear</button>
        </li>
      </ul>
    </section>
  );
}
