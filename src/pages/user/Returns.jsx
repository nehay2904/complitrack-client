import { useState } from 'react';

const returns = [
  {
    id: '1',
    title: 'Report of Medical Examination (For Mine Employees Only)',
    act: 'OSH Rules 2026',
    clause: 'Rules 109, 113(1), 119(1), 142',
    detail: 'The employer of every mine shall make arrangements for: (i) initial medical examination of every person seeking employment in a mine; (ii) periodical medical examination of person employed in a mine annually; (iii) the medical examination shall be conducted as per FORM-IX. Rescue trained persons to be re-examined once at least in every 12 months.',
    form: 'FORM IX',
    recurrence: 'Initial: Before employment; Periodic: Annually; Rescue trained persons: Once in every 12 months',
    submissionAuthority: 'Maintained by employer on-site; copy to Inspector-cum-Facilitator / Chief Inspector-cum-Facilitator on demand',
    signingAuthority: 'Examining Authority / Designated Medical Practitioner',
    mode: 'Physical (examination); Records at Mine Office',
    remarks: 'Standard as specified by CIFF; person declared unfit ceases to be rescue trained person',
  },
  {
    id: '2',
    title: 'Annual Return — Employer (Category of Employees, Health & Welfare)',
    act: 'OSH Rules 2026',
    clause: 'Rules 74 ',
    detail: 'Every employer of an establishment shall send an annual return in FORM-XVII related to category of employees, health and welfare facilities, retrenchment or layoffs, bonus, maternity benefits etc. to the Inspector-cum-Facilitator having jurisdiction, electronically, on or before last day of February following end of each Calendar year.',
    form: 'FORM XVII (Part II)',
    recurrence: 'Annual: On or before last day of February each year (for preceding calendar year)',
    submissionAuthority: 'Inspector-cum-Facilitator (jurisdiction)',
    signingAuthority: 'Employer / Principal Employer / Manager',
    mode: 'Electronic (Shram Suvidha Portal / designated portal)',
    remarks: 'FORM XVII Part IV (self-declaration for EPF/ESIC) also to be submitted electronically per Rule 72(8)',
  },
  {
    id: '3',
    title: 'Annual Return — Principal Employer (Contract Labour)',
    act: 'OSH Rules 2026',
    clause: 'Rule 98(9)',
    detail: 'Every principal employer of an establishment shall also submit annual return in FORM-XVII (Part III) electronically to the authority and concerned Deputy Chief Labour Commissioner (Central) on or before last day of February, except in cases of contract which undertakes to produce given result.',
    form: 'FORM XVII ( Part III)',
    recurrence: 'Annual: On or before last day of February each year (for preceding calendar year)',
    submissionAuthority: 'Deputy Chief Labour Commissioner (Central) — for Part III',
    signingAuthority: 'Employer / Principal Employer / Manager',
    mode: 'Electronic (Shram Suvidha Portal / designated portal)',
    remarks: 'FORM XVII Part IV (self-declaration for EPF/ESIC) also to be submitted electronically per Rule 72(8)',
  },
  {
    id: '4',
    title: 'Half-Yearly Return — Contractor (January–June / July–December)',
    act: 'OSH Rules 2026',
    clause: 'Rules 72(5) and 98(7)',
    detail: 'Every contractor shall send half-yearly return in FORM-XVIII electronically to the Deputy Chief Labour Commissioner (Central) concerned not later than thirty days from the close of the half year, that is to say January to June, July to December. Also: The employer to which the provisions of this Code applies, on or before the 28th or 29th day of February following the end of each Calendar year, upload a return in FORM-XVII and XVIII on the designated portal.',
    form: 'FORM XVIII',
    recurrence: 'Half-Yearly: Within 30 days of close of each half year — by 30 July (Jan–June) and 30 January (Jul–Dec); Annual upload by 28/29 February',
    submissionAuthority: 'Deputy Chief Labour Commissioner (Central); Shram Suvidha Portal (annual upload)',
    signingAuthority: 'Contractor',
    mode: 'Electronic (Shram Suvidha Portal)',
    remarks: 'Due date is 30 days from close of half year — 30th July and 30th January respectively',
  },
    {
    id: '38',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Annual Returns (Mine)',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 4(1), (2)',
    detail: 'On or before 1st day of February in every year, the owner, agent or manager shall submit to the Chief Inspector, the Regional Inspector and to the District Magistrate annual returns in respect of the preceding year.',
    form: 'Form & method as specified by the Chief Inspector',
    recurrence: 'Annual: On or before 1 February each year (for the preceding year)',
    submissionAuthority: 'Chief Inspector; Regional Inspector; District Magistrate',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Electronic / Physical',
    remarks: 'Reg. 4(2): if abandoned/closed/discontinued for more than 60 days, or on change of ownership \u2014 return due within 30 days (or 90 days for discontinuance).'
  }
];

const Returns = () => {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

  const filtered = returns.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.id.toLowerCase().includes(search.toLowerCase()) ||
    r.act.toLowerCase().includes(search.toLowerCase()) ||
    r.form.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-normal text-gray-800 mb-1">Returns</h2>
        <p className="text-gray-500 text-sm">Statutory Returns — OSH Rules 2026</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, ID, form or act..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Section Header */}
      <div className="bg-green-600 text-white px-5 py-3 rounded-t-xl">
        <h3 className="font-medium text-sm">STATUTORY RETURNS — OSH RULES 2026</h3>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-200 rounded-b-xl shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-gray-500 font-medium w-20">ID</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Title</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Act</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Clause</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Form</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Recurrence</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center text-gray-400 py-10">No returns found</td>
                </tr>
              ) : filtered.map(r => (
                <>
                  <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-3 text-green-600 font-mono text-xs font-bold">{r.id}</td>
                    <td className="px-4 py-3 text-gray-800 font-medium max-w-xs">
                      <p className="leading-snug">{r.title}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{r.act}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{r.clause}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs whitespace-nowrap">
                        {r.form}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs max-w-xs">{r.recurrence}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setExpanded(expanded === r.id ? null : r.id)}
                        className="px-3 py-1 bg-green-50 text-green-600 border border-green-200 rounded text-xs hover:bg-green-100 transition"
                      >
                        {expanded === r.id ? 'Hide ▲' : 'View ▼'}
                      </button>
                    </td>
                  </tr>
                  {expanded === r.id && (
                    <tr key={`${r.id}-detail`} className="bg-green-50">
                      <td colSpan={7} className="px-6 py-4">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-xs font-medium text-gray-500 mb-1">Detail</p>
                            <p className="text-sm text-gray-700 leading-relaxed">{r.detail}</p>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Submission Authority</p>
                              <p className="text-sm text-gray-700">{r.submissionAuthority}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Signing Authority</p>
                              <p className="text-sm text-gray-700">{r.signingAuthority}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Mode of Submission</p>
                              <p className="text-sm text-gray-700">{r.mode}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Remarks</p>
                              <p className="text-sm text-gray-700">{r.remarks}</p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
          <p className="text-gray-400 text-xs">Showing {filtered.length} of {returns.length} returns</p>
        </div>
      </div>
    </div>
  );
};

export default Returns;