import { useState } from 'react';

const TodoForm = ({ addTodo, language }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder={language === 'en' ? 'Add a new task' : 'إضافة مهمة جديدة'}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                    {language === 'en' ? 'Add' : 'إضافة'}
                </button>
            </div>
        </form>
    );
};

export default TodoForm;