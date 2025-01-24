import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [language, setLanguage] = useState('en'); // 'en' أو 'ar'
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`container mt-5 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
      <h1 className="text-center mb-4">
        {language === 'en' ? 'To-Do Manager' : 'مدير المهام'}
      </h1>
      <div className="d-flex justify-content-between mb-4">
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
      </div>
      <TodoForm addTodo={addTodo} language={language} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        language={language}
      />
    </div>
  );
};

export default App;