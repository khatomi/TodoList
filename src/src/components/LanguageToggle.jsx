const LanguageToggle = ({ language, toggleLanguage }) => {
    return (
        <button className="btn btn-outline-secondary" onClick={toggleLanguage}>
            {language === 'en' ? 'العربية' : 'English'}
        </button>
    );
};

export default LanguageToggle;