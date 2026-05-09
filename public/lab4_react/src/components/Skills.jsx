function Skills() {
  const categories = [
    { title: "Artistic", items: [{n:"2D Illustration", s:"9/10"}, {n:"Concept Art", s:"8/10"}] },
    { title: "Technical", items: [{n:"Cybersecurity", s:"4/10"}, {n:"Python", s:"3/10"}, {n:"C/C++", s:"3/10"}] },
    { title: "Languages", items: [{n:"Ukrainian", s:"10/10"}, {n:"English", s:"9/10"}] }
  ];

  return (
    <section>
      <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Expertise</h2>
      <div className="space-y-6">
        {categories.map(cat => (
          <div key={cat.title}>
            <h3 className="text-[10px] font-bold text-indigo-500 uppercase mb-3">{cat.title}</h3>
            {cat.items.map(skill => (
              <div key={skill.n} className="flex justify-between text-sm py-1 border-b border-gray-200 mb-1">
                <span className="">{skill.n}</span>
                <span className="font-mono text-gray-400">{skill.s}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skills;