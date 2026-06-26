import { useState } from 'react';
const notices = [
  {
    id: '1',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Application for Registration of Establishment',
    act: 'OSH Rules 2026',
    clause: 'Rule 3(1)',
    detail: 'Employers of establishments already registered under any Central labour law must update their registration details in Form-I within six months from the commencement of these rules.',
    form: 'FORM I',
    recurrence: 'Event-based: Before commencement of operations; within 30 days of any change in particulars',
    submissionAuthority: 'Registering Officer via Shram Suvidha Portal',
    signingAuthority: 'Employer / Manager',
    mode: 'Electronic (Shram Suvidha Portal)',
    remarks: 'Certificate of Registration issued in FORM III within 7 days; late fee applicable after 60 days',
  },
  {
    id: '2',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Application for Cancellation of Registration Certificate',
    act: 'OSH Rules 2026',
    clause: 'Rule 3(10)',
    detail: 'The employer shall within thirty days of the closing of the establishment intimate to the Registering Officer and also to Inspector-cum-Facilitator having jurisdiction in FORM-II along with certificate of payment of all dues and statutory returns to workers. Information auto-shared to EPFO and ESIC.',
    form: 'FORM II',
    recurrence: 'Event-based: Within 30 days of closing of establishment',
    submissionAuthority: 'Registering Officer; Inspector-cum-Facilitator',
    signingAuthority: 'Employer / Manager',
    mode: 'Electronic (Shram Suvidha Portal)',
    remarks: 'Cancellation certificate in FORM IV issued within 60 days. Note: This provision is for other than mines — mines have separate abandonment/closure notice under CMR Reg 58'
  },

    {
    id: '3',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Notice of Commencement / Reopening / Cessation / Discontinuance / Abandonment of Operations',
    act: 'OSH Rules 2026',
    clause: 'Rule 4(1)',
    detail: 'The employer of every mine shall give not less than thirty days prior notice of the commencement, reopening, cessation, discontinuation or abandonment of operations or closing of mines in FORM-VII.',
    form: 'FORM VII',
    recurrence: 'Event-based: Within 30 days',
    submissionAuthority: 'Registering Officer; Inspector-cum-Facilitator',
    signingAuthority: 'Employer / Manager',
    mode: 'Electronic / Physical',
    remarks: 'This form applicable where contract labour / construction work is involved at opencast mine'
  },
  {
     id: '36',
    section: 'SECTION C: SAFETY & HEALTH INCIDENT REPORTING',
    title: 'Register of Accidents and Dangerous Occurrences',
    act: 'OSH Rules 2026',
    clause: 'Rule 75',
    detail: 'The registers of accident and dangerous occurrences required by sub-clause (v) of clause (a) of section 33 of the Code shall be maintained in FORM-XIX.',
    form: 'FORM XIX',
    recurrence: 'Maintained continuously; preserved 5 years',
    submissionAuthority: 'Mine Office; available to Inspector-cum-Facilitator',
    signingAuthority: 'Manager',
    mode: 'Electronic or Manual',
    remarks: 'Notice of accident to CIFF/RIFF within 24 hrs (section 10 of Code); intimation of injury within 7 days'
  },
  {
    id: '4',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Notice of Opening',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 3(1), (2), (3)',
    detail: 'The notice for commencement of any mining operation under section 16 of the Act shall be submitted in the Form and method as may be specified by the Chief Inspector, accompanied by a plan showing the boundaries of the mine, to the Chief Inspector and a copy thereof to the Regional Inspector. On opening, the actual date of opening shall forthwith be communicated.',
    form: 'Form & method as specified by the Chief Inspector',
    recurrence: 'Event-based: Before commencement; actual date communicated forthwith on opening',
    submissionAuthority: 'Chief Inspector; Regional Inspector (copy); District Magistrate (date of opening)',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Electronic / Physical',
    remarks: 'Boundary-change plan to be submitted within 7 days (regs 121/122).'
  },
  {
    id: '5',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Notice of Abandonment, Closure or Discontinuance',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 5(1), (2), (3)',
    detail: 'When it is intended to abandon or close a mine or seam or to discontinue workings thereof for a period exceeding sixty days, the owner, agent or manager shall give a notice stating the reasons and the number of persons likely to be affected thereby, not less than thirty days before such abandonment or discontinuance.',
    form: 'Form & method as specified by the Chief Inspector',
    recurrence: 'Event-based: Not less than 30 days before (or forthwith if unforeseen); follow-up notice within 7 days',
    submissionAuthority: 'Chief Inspector; Regional Inspector; District Magistrate',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Electronic / Physical',
    remarks: 'Reg. 5(2): additional notice required where Govt./railway/structure overlies the working.'
  },
  {
    id: '6',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Notice of Reopening',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 6(1), (2)',
    detail: 'When it is intended to reopen a mine or seam after abandonment, closure or discontinuance for a period exceeding sixty days, the owner, agent or manager shall, not less than thirty days before resumption of mining operations, give notice. The actual date of reopening is to be communicated forthwith.',
    form: 'Form & method as specified by the Chief Inspector',
    recurrence: 'Event-based: Not less than 30 days before resumption; actual date communicated forthwith',
    submissionAuthority: 'Chief Inspector; Regional Inspector; District Magistrate',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Electronic / Physical',
    remarks: 'Event-based.'
  },
  {
    id: '7',
    section: 'SECTION B: MANAGEMENT & PERSONNEL NOTIFICATIONS',
    title: 'Notice of Change in Ownership / Appointment of Agent, Manager, etc.',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 7(1), (3), (7)',
    detail: 'When a change occurs in the name or ownership of a mine or in the address of the owner, the owner, agent or manager shall, within seven days from the date of the change, give a notice. This also applies on appointment or termination of agent, manager, engineer, surveyor, ventilation/safety officer or assistant manager, and on changes to the authorised-persons statement.',
    form: 'Form & method as specified by the Chief Inspector',
    recurrence: 'Event-based: Within 7 days of the change / appointment / termination',
    submissionAuthority: 'Chief Inspector; Regional Inspector',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Electronic / Physical',
    remarks: 'Reg. 7(2): on transfer, all plans, reports, registers & records handed to new owner; both inform CI/RI in writing.'
  },
  {
    id: '8',
    section: 'SECTION B: MANAGEMENT & PERSONNEL NOTIFICATIONS',
    title: 'Statement of Persons Authorised to Act for the Owner',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 7(4), (5), (6)',
    detail: "The owner of a mine shall submit in writing to the Chief Inspector and the Regional Inspector a statement showing the name and designation of every person authorised to act on behalf of the owner in respect of management, control, supervision or direction of the mine, stating each person's responsibilities.",
    form: 'Written statement (no prescribed form)',
    recurrence: 'Event-based: On authorisation; updated within 7 days of any change',
    submissionAuthority: 'Chief Inspector; Regional Inspector',
    signingAuthority: 'Owner',
    mode: 'Physical (written statement)',
    remarks: "Defines who is an 'agent' for the mine."
  },
  {
    id: '9',
    section: 'SECTION C: SAFETY & HEALTH INCIDENT REPORTING',
    title: 'Notice of Dangerous Occurrence or Accident',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 8(1), (2), (3), (4), (5)',
    detail: 'The owner, agent or manager shall forthwith inform the Regional Inspector about the occurrence by telephone, fax, e-mail or special messenger, and shall also, within twenty-four hours of every such occurrence, give notice thereof. A copy is to be exhibited on the mine notice board for not less than 14 days; electrical cases are also reported to the Inspector of Mines (Electrical); a death follow-up is required within 24 hours; and particulars of killed/injured persons are submitted within 7 days and within 15 days of return to duty.',
    form: 'Form & method as specified by the Chief Inspector',
    recurrence: 'Event-based: Forthwith, then within 24 hours; particulars within 7 days and 15 days',
    submissionAuthority: 'Regional Inspector (forthwith); District Magistrate; Chief Inspector; Competent Authority (loss-of-life cases); Inspector of Mines (Electrical) for electrical cases',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Telephone / Fax / E-mail / Special messenger, followed by formal written notice',
    remarks: "Defines 19 categories of 'dangerous occurrence' in 8(1)(b)."
  },
  {
    id: '10',
    section: 'SECTION C: SAFETY & HEALTH INCIDENT REPORTING',
    title: 'Notice of Disease',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 9',
    detail: 'Where any person employed in a mine contracts any disease notified by the Central Government under section 25 of the Act, the owner, agent or manager shall, within three days of being informed of the disease, give notice thereof.',
    form: 'Form & method as specified by the Chief Inspector',
    recurrence: 'Event-based: Within 3 days of being informed',
    submissionAuthority: 'Chief Inspector; Regional Inspector; Inspector of Mines (Medical); District Magistrate; Competent Authority',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Electronic / Physical',
    remarks: 'Notifiable diseases under Sec. 25.'
  },
  {
    id: '11',
    section: 'SECTION B: MANAGEMENT & PERSONNEL NOTIFICATIONS',
    title: 'Charge Report of Managers (Change of Manager)',
    act: 'Coal Mines Regulations, 2017',
    clause: 'Reg. 28',
    detail: 'When there is a change of manager of any mine, the outgoing manager shall hand over to the incoming manager a charge report, signed by both the outgoing and incoming managers, with a copy sent to the Regional Inspector.',
    form: 'Charge report (format specified by Chief Inspector)',
    recurrence: 'Event-based: On every change of manager',
    submissionAuthority: 'Regional Inspector (copy)',
    signingAuthority: 'Outgoing Manager / Incoming Manager (both sign)',
    mode: 'Physical (signed charge report)',
    remarks: 'Event-based handover.'
  }
 
 
];

const Notices = () => {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

  const filtered = notices.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.id.toLowerCase().includes(search.toLowerCase()) ||
    n.act.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-normal text-gray-800 mb-1">Notices & Circulars</h2>
        <p className="text-gray-500 text-sm">DGMS / OSH Rules 2026 / CMR 2026 — Statutory Notices</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, ID or act..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Section Header */}
      <div className="bg-blue-600 text-white px-5 py-3 rounded-t-xl">
        <h3 className="font-medium text-sm">SECTION A: ESTABLISHMENT REGISTRATION</h3>
      </div>

      {/* Notices Table */}
      <div className="bg-white border border-gray-200 rounded-b-xl shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-gray-500 font-medium w-16">ID</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Title</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Act</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Clause</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Form</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Due</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(n => (
                <>
                  <tr key={n.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-3 text-blue-500 font-mono text-xs font-bold">{n.id}</td>
                    <td className="px-4 py-3 text-gray-800 font-medium max-w-xs">
                      <p className="leading-snug">{n.title}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{n.act}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{n.clause}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded text-xs whitespace-nowrap">
                        {n.form}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs max-w-xs">{n.recurrence}</td>
                  
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setExpanded(expanded === n.id ? null : n.id)}
                        className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded text-xs hover:bg-blue-100 transition"
                      >
                        {expanded === n.id ? 'Hide ▲' : 'View ▼'}
                      </button>
                    </td>
                  </tr>
                  {expanded === n.id && (
                    <tr key={`${n.id}-detail`} className="bg-blue-50">
                      <td colSpan={8} className="px-6 py-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs font-medium text-gray-500 mb-1">Detail</p>
                            <p className="text-sm text-gray-700 leading-relaxed">{n.detail}</p>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Submission Authority</p>
                              <p className="text-sm text-gray-700">{n.submissionAuthority}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Assigned Authority</p>
                              <p className="text-sm text-gray-700">{n.signingAuthority}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Mode of Submission</p>
                              <p className="text-sm text-gray-700">{n.mode}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Remarks</p>
                              <p className="text-sm text-gray-700">{n.remarks}</p>
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
          <p className="text-gray-400 text-xs">Showing {filtered.length} of {notices.length} notices</p>
        </div>
      </div>
    </div>
  );
};

export default Notices;