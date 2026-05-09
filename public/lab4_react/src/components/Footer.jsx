import { useState, useEffect } from 'react';

const Footer = ({ theme }) => {
  const [systemInfo, setSystemInfo] = useState('');

  useEffect(() => {
    const info = `OS: ${navigator.platform} | Browser: ${navigator.userAgent.split(' ')[0]}`;
    
    localStorage.setItem('userSystemInfo', info);
    
    setSystemInfo(localStorage.getItem('userSystemInfo'));
  }, []);

  return (
    <footer className={`p-8 text-center border-t transition-colors duration-500 ${
      theme === 'dark' 
        ? 'border-slate-700 text-slate-400' 
        : 'border-gray-200 text-gray-500'
    }`}>
      <p className="mb-2">&copy; 2026 Yeva Malakhova. Prepared for Laboratory Work №4.</p>
      
      <div className="text-xs font-mono py-2 px-4 inline-block rounded bg-indigo-500/10 text-indigo-400">
        {systemInfo || "Loading system info..."}
      </div>
    </footer>
  );
};

export default Footer;