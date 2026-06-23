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
    id: '4',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Notice of Change of Mine Boundary (Opencast)',
    act: 'CMR 2026',
    clause: 'Regulation 29(1) / Regulation 114(1)',
    detail: 'In case of change in the boundary of a mine under Reg 114 (opencast), a plan showing the new boundary shall be submitted within seven days of the said change. No boundary change in opencast mine without prior written permission of CIFF.',
    form: 'Surface Plan showing new boundary',
    recurrence: 'Within 7 days of the boundary change',
    submissionAuthority: 'CIFF; RIFF',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Written + Plan',
    remarks: 'Opencast mine boundary is in vertical plane — Reg 114(1)'
  },
  {
    id: '5',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Notice of Change of Name / Ownership / Address of Mine',
    act: 'CMR 2026',
    clause: 'Regulation 29(9)',
    detail: 'When a change occurs in the name or ownership of a mine or in the address of the owner, the owner, agent or manager shall, within seven days from the date of the change, give notice to CIFF and RIFF. Change of any partner, member, director or shareholder shall also be intimated within 7 days.',
    form: 'Form as specified by CIFF',
    recurrence: 'Within 7 days of change',
    submissionAuthority: 'CIFF; RIFF',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Written / Electronic',
    remarks: 'Transfer of all plans, registers and records to new owner within 7 days (Reg 29(10))'
  },
  {
    id: '6',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Communication of Transfer of Ownership and Records',
    act: 'CMR 2026',
    clause: 'Regulation 29(10)',
    detail: 'When the ownership of a mine is transferred, the previous owner or his agent shall make over to the new owner all plans, sections, reports, registers and other records within 7 days of transfer. Both previous and new owners/agents shall forthwith inform CIFF and RIFF in writing.',
    form: 'Written intimation',
    recurrence: 'Forthwith after transfer of records (within 7 days of transfer)',
    submissionAuthority: 'CIFF; RIFF',
    signingAuthority: 'Previous Owner and New Owner (both)',
    mode: 'Written',
    remarks: 'All plans, registers, correspondence relating to mine working to be transferred'
  },
  {
    id: '7',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Submission of Contractor Details',
    act: 'CMR 2026',
    clause: 'Regulation 32(3)',
    detail: 'When deploying contractors, the owner or agent shall submit the details of every contractor engaged in the mine, indicating the ownership, address with contact details, the contract awarded and a statement showing the names and address of every person working on behalf of the contractor.',
    form: 'Written statement',
    recurrence: 'At the time of deploying each contractor',
    submissionAuthority: 'CIFF / RIFF',
    signingAuthority: 'Owner / Agent',
    mode: 'Written',
    remarks: 'Contractor must be registered/licensed as required (Reg 32(2)(b))'
  },
  {
    id: '8',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Safety Management Plan (SMP) — Submission',
    act: 'CMR 2026',
    clause: 'Regulation 96(5)',
    detail: 'The owner, agent and manager of every mine shall submit a copy of the Safety Management Plan, duly signed by the owner, to the Regional Inspector-cum-Facilitator who may, at any time by an order in writing, require such modifications in the plan as may be specified therein.',
    form: 'SMP Document',
    recurrence: 'Before commencement; reviewed every 12 months or on significant change',
    submissionAuthority: 'RIFF',
    signingAuthority: 'Owner (signed); Manager',
    mode: 'Written / Electronic',
    remarks: 'SMP must include PHMPs; copy also submitted with Opening Notice (Reg 29(2)(b))'
  },
  {
    id: '9',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Scheme of Mining — Mechanised Opencast',
    act: 'CMR 2026',
    clause: 'Regulation 98(1)(ii)',
    detail: 'Based on scientific study, the owner/agent/manager shall prepare a detailed scheme of mining covering method of work, mechanisation, pit and dump configuration, backfilling, slope monitoring, haul road design. Submit notice along with scheme copy at least 60 days prior to start of work.',
    form: 'Scheme of Mining document + Notice',
    recurrence: 'At least 60 days before commencement of opencast working',
    submissionAuthority: 'CIFF; RIFF',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Written / Electronic',
    remarks: 'Existing mines without scheme: submit within 1 year of CMR coming into force'
  },
  {
    id: '10',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Emergency Response and Evacuation Plan — Submission',
    act: 'CMR 2026',
    clause: 'Regulation 242(4)',
    detail: 'The owner, agent and manager shall submit a copy of the emergency response and evacuation plan to the RIFF who may, by an order in writing, approve such action plan either in the form submitted or with additions and alterations, and the action plan so approved shall be enforced at the mine.',
    form: 'Emergency Plan document',
    recurrence: 'Before commencement of mine; updated on change',
    submissionAuthority: 'RIFF',
    signingAuthority: 'Owner / Agent / Manager',
    mode: 'Written / Electronic',
    remarks: 'Includes evacuation, communication, rescue procedures'
  },
  {
    id: '11',
    section: 'SECTION A: ESTABLISHMENT REGISTRATION',
    title: 'Standing Orders for Use of Two Explosives in One Shothole — Submission (Opencast)',
    act: 'CMR 2026',
    clause: 'Regulation 184(7)',
    detail: 'In opencast mines, to use two types of explosives in any shot-hole, the manager shall frame and enforce standing orders for the safe use of explosives and a copy of the same shall be submitted to the RIFF.',
    form: 'Standing Orders document',
    recurrence: 'Before such blasting practice is adopted',
    submissionAuthority: 'RIFF',
    signingAuthority: 'Manager',
    mode: 'Written',
    remarks: 'Allows use of two types of explosives (e.g., ANFO + emulsion) in opencast deep hole blasting'
  },
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