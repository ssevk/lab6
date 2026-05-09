import { useState, useEffect } from 'react';

const Comments = ({ theme }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/15/comments')
      .then(res => res.json())
      .then(data => setComments(data)); 
  }, []);

  return (
    <div className="w-full">
      <h3 className="text-indigo-500 font-bold mb-8 uppercase text-center tracking-widest">
        Community Feedback
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {comments.map(c => (
          <div 
            key={c.id} 
            className={`p-6 rounded-lg border transition-all hover:shadow-lg ${
              theme === 'dark' 
                ? 'border-slate-700 bg-slate-900/40 text-slate-300' 
                : 'border-gray-200 bg-gray-50 text-gray-700'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                {c.email[0].toUpperCase()}
              </div>
              <p className="font-bold text-indigo-400 text-xs truncate">
                {c.email}
              </p>
            </div>
            <p className="text-sm italic leading-relaxed">
              "{c.body}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;