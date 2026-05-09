function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-slate-900 text-white p-12 text-center md:text-left border-b-4 border-indigo-500 relative">
      {/* Кнопка перемикання теми */}
      <button 
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full text-xs font-mono transition-all"
      >
        {theme === 'light' ? '🌙 DARK MODE' : '☀️ LIGHT MODE'}
      </button>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">Yeva Malakhova</h1>
      <div className="mt-4 flex flex-col md:flex-row gap-4 text-sm text-slate-300 font-mono">
        <span className="flex items-center gap-2">Lviv, Ukraine</span>
        <span className="hidden md:inline">|</span>
        <span>yeva.malakhova.kb.2023@lpnu.ua</span>
        <span className="hidden md:inline">|</span>
        <span className="text-indigo-400">Digital Artist & Security Student</span>
      </div>
    </header>
  );
}
export default Header;