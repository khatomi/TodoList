const ThemeToggle = ({ darkMode, toggleTheme }) => {
    return (
        <button className="btn btn-outline-secondary" onClick={toggleTheme}>
            {darkMode ? <i className="bi bi-sun"></i> : <i className="bi bi-moon"></i>}
        </button>
    );
};

export default ThemeToggle;