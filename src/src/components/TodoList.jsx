import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, language }) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    language={language}
                />
            ))}
        </ul>
    );
};

export default TodoList;