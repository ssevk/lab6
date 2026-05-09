function Experience() {
  const jobs = [
    { title: "Freelance Digital Artist", date: "October 2025 — Present", desc: "Digital illustrations and concept art for international clients." },
    { title: "Sales Manager", date: "June 2024 — March 2026", desc: "Client relations and sales management." }
  ];

  return (
    <section>
      <h2 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-8">Professional Experience</h2>
      <div className="space-y-10">
        {jobs.map((job, index) => (
          <div key={index} className="relative">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-bold leading-tight">{job.title}</h3>
              <span className="text-xs font-mono text-gray-400">{job.date}</span>
            </div>
            <p className="leading-relaxed text-sm border-l-2 border-gray-200 pl-4">
              {job.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Experience;