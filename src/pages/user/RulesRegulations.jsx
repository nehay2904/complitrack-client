const documents = [
  {
    title: 'OSH Code 2020 (Occupational Safety, Health and Working Conditions Code, 2020)',
    link: 'https://drive.google.com/file/d/1SJJ1AamiI4H5F6qqjHgUXZ0ttk0XOI3b/view?usp=sharing',
    color: 'blue',
  },
  {
    title: 'CMR 2026 (Coal Mines Regulations, 2026)',
    link: 'https://drive.google.com/file/d/1M_WNGtANCNd54cRgkVfqmtPAEprVTXnI/view?usp=sharing',
    color: 'orange',
  },
  {
    title: 'OSH Central Rules 2026 (Occupational Safety, Health and Working Conditions Central Rules, 2026)',
    link: 'https://drive.google.com/file/d/1apaoSEccNgTUtynRJu2a_MMjwX38H5ga/view?usp=sharing',
    color: 'green',
  }, {
    title: '	Central Electricity Authority (Measures relating to Safety and Electric Supply) Regulations, 2023',
    link: 'https://drive.google.com/file/d/1agplAk7P-30BEEdxzuaZkf6FrMXlfLYV/view?usp=sharing',
    color: 'purple',
  },
  {
    title: 'The Explosives Rules, 2008',
    link: 'https://drive.google.com/file/d/1Uk_4ci225hXHieWmW7oyEU0if77I_k_A/view?usp=sharing',
    color: 'pink',
  }, {
    title: 'Explosives (Amendment) Rules, 2025 - PESO',
    link: 'https://drive.google.com/file/d/1pAzytbDMN54Z3d6JBTtZi0LfWVV0ReS7/view?usp=sharing',
    color: 'red',
  },
];

const colorMap = {
  blue: { dot: 'bg-blue-600', text: 'text-blue-600', light: 'bg-blue-50' },
  orange: { dot: 'bg-orange-600', text: 'text-orange-600', light: 'bg-orange-50' },
  green: { dot: 'bg-green-600', text: 'text-green-600', light: 'bg-green-50' },
  purple: { dot: 'bg-purple-600', text: 'text-purple-600', light: 'bg-purple-50' },
  pink: { dot: 'bg-pink-600', text: 'text-pink-600', light: 'bg-pink-50' },
  red: { dot: 'bg-red-600', text: 'text-red-600', light: 'bg-red-50' }
};

const RulesRegulations = () => {
  return (
    <div className="p-8">
      <div className="mb-3">
        <h2 className="text-2xl font-normal text-gray-800 mb-1">Rules & Regulations</h2>
        <p className="text-gray-500 text-sm">Official statutory documents governing mine operations</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y divide-gray-100">
        {documents.map(doc => {
          const c = colorMap[doc.color];
          return (
            <a
              key={doc.title}
              href={doc.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                <span className="text-gray-800 text-sm font-medium">{doc.title}</span>
              </div>
              <span className={`px-3 py-1.5 ${c.light} ${c.text} rounded-lg text-sm font-semibold whitespace-nowrap ml-4`}>
                Open PDF →
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default RulesRegulations;