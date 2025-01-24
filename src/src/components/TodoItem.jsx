const TodoItem = ({ todo, toggleComplete, deleteTodo, language }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="me-2"
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.task}
                </span>
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
                <i className="bi bi-trash"></i>
            </button>
        </li>
    );
};

export default TodoItem;