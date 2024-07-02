function TodoList ({content}) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>{task.text}</li>
            ))}
        </ul>
    );
}

export default TodoList;