import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Comments from './components/Comments.jsx';
import Modal from './components/Modal';

function App() {
  const [theme, setTheme] = useState('light');
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 7 || hours >= 21) {
      setTheme('dark');
    }

    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

const themeClasses = theme === 'dark' 
    ? 'bg-slate-900 text-slate-200'
    : 'bg-gray-100 text-gray-900';

  const cardClasses = theme === 'dark'
    ? 'bg-slate-800 border-slate-700 shadow-indigo-900/20'
    : 'bg-white border-gray-200 shadow-2xl';

  return (
    <div className={`${themeClasses} min-h-screen py-10 px-4 font-serif transition-colors duration-500`}>
      <div className={`max-w-5xl mx-auto rounded-sm overflow-hidden border ${cardClasses}`}>

        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main className="p-8 md:p-12">
          <About />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-10">
            <aside className="md:col-span-4 space-y-8">
              <Skills />
            </aside>
            
            <section className="md:col-span-8 space-y-12 border-l border-gray-200 dark:border-slate-700 pl-0 md:pl-12">
              <Education />
              <Experience />
            </section>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-slate-700">
            <Comments theme={theme} />
          </div>
        </main>
        
        <Footer />
      </div>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;