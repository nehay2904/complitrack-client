import { useState } from 'react';

const returns = [
  /* ================= COAL MINES REGULATIONS, 2017 ================= */
  {
    id: '1',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Annual Returns (Mine)',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 4(1), (2)',
    detail: 'On or before 1st day of February in every year, the owner, agent or manager shall submit to the Chief Inspector, the Regional Inspector and to the District Magistrate annual returns in respect of the preceding year in the Form and method as may be specified by the Chief Inspector for the purpose.',
    form: 'Form & method as specified by the Chief Inspector',
    recurrence: 'Annual: On or before 1 February each year (for the preceding year)',
    submissionAuthority: 'Chief Inspector; Regional Inspector; District Magistrate',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Electronic / Physical',
    remarks: 'Reg. 4(2): if abandoned/closed/discontinued for more than 60 days, or on change of ownership — return due within 30 days (or 90 days for discontinuance).',
  },
  {
    id: '2',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Monthly Stowing Statement',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 112(9)',
    detail: 'Where the voids formed as a result of extraction are stowed with sand or other materials, the owner, agent or manager shall, on or before the 10th day of every month submit to the Regional Inspector a statement giving the quantity of coal raised and the quantity of sand or other material stowed in every district during the preceding month.',
    form: 'Statement (no prescribed form)',
    recurrence: 'Monthly: On or before the 10th day of every month (for the preceding month)',
    submissionAuthority: 'Regional Inspector',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Physical / Electronic',
    remarks: 'Applies only where sand stowing or other material stowing is practised (belowground). Not applicable to a purely opencast mine.',
  },
 
  /* ================= OSH (CENTRAL) RULES, 2026 ================= */
  {
    id: '3',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Annual Return — Employer (Category of Employees, Health & Welfare)',
    act: 'OSH Rules 2026',
    clause: 'Rule 74',
    detail: 'Every employer of an establishment shall send an annual return in FORM-XVII related to category of employees, health and welfare facilities, retrenchment or layoffs, bonus, maternity benefits etc. to the Inspector-cum-Facilitator having jurisdiction, electronically, on or before last day of February following end of each Calendar year.',
    form: 'FORM XVII (Part II)',
    recurrence: 'Annual: On or before last day of February each year (for the preceding calendar year)',
    submissionAuthority: 'Inspector-cum-Facilitator (jurisdiction)',
    signingAuthority: 'Employer / Principal Employer / Manager',
    mode: 'Electronic (Shram Suvidha Portal / designated portal)',
    remarks: 'Unified return covering all establishments under the OSH Code, including mines.',
  },
  {
    id: '4',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Annual Return — Principal Employer (Contract Labour)',
    act: 'OSH Rules 2026',
    clause: 'Rule 98(9)',
    detail: 'Every principal employer of an establishment shall also submit annual return in FORM-XVII (Part III) electronically to the authority and concerned Deputy Chief Labour Commissioner (Central) on or before last day of February, except in cases of contract which undertakes to produce given result.',
    form: 'FORM XVII (Part III)',
    recurrence: 'Annual: On or before last day of February each year (for the preceding calendar year)',
    submissionAuthority: 'Deputy Chief Labour Commissioner (Central)',
    signingAuthority: 'Principal Employer / Manager',
    mode: 'Electronic (Shram Suvidha Portal / designated portal)',
    remarks: 'Relevant to JPL as principal employer for contractor-deployed manpower in mines and the SME plant.',
  },
  {
    id: '5',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Half-Yearly Return — Contractor (January–June / July–December)',
    act: 'OSH Rules 2026',
    clause: 'Rules 72(5) and 98(7)',
    detail: 'Every contractor shall send half-yearly return in FORM-XVIII electronically to the Deputy Chief Labour Commissioner (Central) concerned not later than thirty days from the close of the half year, that is to say January to June, July to December.',
    form: 'FORM XVIII',
    recurrence: 'Half-Yearly: Within 30 days of close of each half year — by 30 July (Jan–Jun) and 30 January (Jul–Dec)',
    submissionAuthority: 'Deputy Chief Labour Commissioner (Central)',
    signingAuthority: 'Contractor',
    mode: 'Electronic (Shram Suvidha Portal)',
    remarks: 'Filed by the contractor, not the principal employer. Principal employer should obtain proof of filing from each contractor.',
  },
  {
    id: '6',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Annual Self-Declaration — EPF / ESIC Compliance',
    act: 'OSH Rules 2026',
    clause: 'Rule 72(8)',
    detail: 'The employer to which the provisions of this Code applies shall, on or before the 28th or 29th day of February following the end of each Calendar year, upload a return in FORM-XVII and FORM-XVIII on the designated portal, including the self-declaration in FORM-XVII (Part IV) relating to EPF and ESIC.',
    form: 'FORM XVII (Part IV)',
    recurrence: 'Annual: On or before 28/29 February each year',
    submissionAuthority: 'Designated portal (Shram Suvidha) / Inspector-cum-Facilitator',
    signingAuthority: 'Employer / Principal Employer',
    mode: 'Electronic (Shram Suvidha Portal)',
    remarks: 'Uploaded together with the FORM XVII / XVIII annual filing.',
  },
 
  /* ================= EXPLOSIVES RULES, 2008 ================= */
  {
    id: '7',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Monthly Return of Explosives (Received, Sold, Transferred, Used, Destroyed)',
    act: 'Explosives Rules, 2008',
    clause: 'Rule 24',
    detail: 'Every licensee shall maintain records in the forms specified in Part 5 of Schedule V and shall submit a monthly return of explosives received, sold, transferred, used and destroyed to the Controller of Explosives and to the District Magistrate by the 10th day of the succeeding month; the return shall also be filed online on the PESO portal.',
    form: 'Monthly return (online) — derived from FORM RE-3 (receipt), RE-4 (sale), RE-5 (use)',
    recurrence: 'Monthly: By the 10th day of the succeeding month',
    submissionAuthority: 'Controller of Explosives (PESO); District Magistrate',
    signingAuthority: 'Licensee / Manager / Magazine In-Charge',
    mode: 'Electronic (PESO online portal) + Physical copy',
    remarks: 'Applies to the LE-3 magazine licence and to the SME / bulk explosives plant licence separately. Records in Forms RE-2 to RE-6 feed this return.',
  },
 
  /* ================= CEA (SAFETY & ELECTRIC SUPPLY) REGULATIONS, 2023 ================= */
  {
    id: '8',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Annual Return of Electrical Apparatus (Mines)',
    act: 'CEA Regulations, 2023',
    clause: 'Reg. 98(1) r/w Schedule IX',
    detail: 'The owner, agent or manager of every mine shall, on or before the 1st day of February in each year, submit to the Electrical Inspector of Mines a return in the form set out in Schedule IX showing the size and type of electrical apparatus in use at the mine.',
    form: 'SCHEDULE IX — Form of Annual Return for Mines',
    recurrence: 'Annual: On or before 1 February each year',
    submissionAuthority: 'Electrical Inspector of Mines (DGMS)',
    signingAuthority: 'Owner / Agent / Manager / Engineer (Electrical)',
    mode: 'Physical / Electronic',
    remarks: 'Same due date as the CMR 2017 annual return — file both together.',
  },
  {
    id: '9',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Periodic Inspection & Testing Self-Certification Report (Electrical Installations)',
    act: 'CEA Regulations, 2023',
    clause: 'Regs. 32(3) and 45 r/w Schedule II',
    detail: 'Every electrical installation shall be periodically inspected and tested at intervals not exceeding five years and a self-certification report shall be submitted to the Electrical Inspector in the forms set out in Forms I to IV of Schedule II; installations in mines operating above 650 volts require the approval of the Electrical Inspector of Mines.',
    form: 'SCHEDULE II — FORMS I to IV (Form IV: Electrical Installations in a Mine)',
    recurrence: 'Periodic: At intervals not exceeding 5 years',
    submissionAuthority: 'Electrical Inspector / Electrical Inspector of Mines',
    signingAuthority: 'Electrical Supervisor / Engineer (Electrical); certified by Owner',
    mode: 'Physical / Electronic',
    remarks: 'Installations up to 650 V may be self-certified; above 650 V need Electrical Inspector of Mines approval.',
  },
  {
    id: '10',
    section: 'SECTION D: PERIODIC RETURNS',
    title: 'Electrical Safety Officer — Annual Inspection Report & Register of Recommendations',
    act: 'CEA Regulations, 2023',
    clause: 'Reg. 5(3)',
    detail: 'Every mine having a connected load exceeding 2000 kW shall appoint an Electrical Safety Officer who shall carry out periodic tests and inspect the installation at intervals not exceeding one year, record the results in the forms set out in Schedule II, and maintain a register of recommendations which shall be acknowledged by the owner along with a record of compliance.',
    form: 'Test reports in Forms I–IV of Schedule II; Register of Recommendations',
    recurrence: 'Annual: At intervals not exceeding 12 months',
    submissionAuthority: 'Owner (acknowledgement); produced to Electrical Inspector of Mines on demand',
    signingAuthority: 'Electrical Safety Officer; acknowledged by Owner',
    mode: 'Physical / Electronic',
    remarks: 'Mandatory for JPL mines with connected load > 2000 kW. Compliance against each recommendation must be recorded.',
  },
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