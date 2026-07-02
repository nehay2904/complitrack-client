import React, { useState } from 'react';

const forms = [
  {
    id: '1',
    form: 'FORM I',
    title: 'Application for registration of establishment / Amendment to certificate / Updation of registration particulars',
    rule: 'OSH (Central) Rules 2026 ,Rule 3(1)',
    recurrence: 'Event-based (at commencement; within 30 days of any change; within 6 months for existing registrations)',
    mode: 'FORM I (online - Shram Suvidha Portal)',
    signingAuthority: 'Employer / Occupier / Owner / Agent / Chief Executive (Signature/E-sign/Digital Sign)',
    submissionAuthority: 'Registering Officer (via Shram Suvidha Portal / designated portal)',
    timeline: 'Within 60 days of applicability; 6 months for existing establishments',
    link: 'https://drive.google.com/file/d/1ZymNVlL733ZETruVP1U3zQ83_m7ehvO5/view?usp=drive_link',
  },
  {
    id: '2',
    form: 'FORM V ',
    title: 'The registering officer shall maintain in FORM-V showing the particulars of establishment in relation to which certificates of registration have been issued.',
    rule: 'OSH (Central) Rules 2026 ,Rule  3(9)',
    recurrence: 'event based (maintained by authority; updated on new registrations / amendments)',
    mode: 'FORM V (online/electronic)',
    signingAuthority: 'Owner / Agent / Manager of Mine (Employer)',
    submissionAuthority: 'Maintained in mines',
    timeline: '',
    link: 'https://drive.google.com/file/d/15xZcGxD57HK3UYLUpYrln7Nl_h7Ct6UF/view?usp=drive_link',
  },
  {
    id: '3',
    form: 'FORM VII',
    title: 'Notice of Commencement / Re-opening / Cessation / Discontinuance / Abandonment of operations / Closing of mines',
    rule: 'OSH (Central) Rules 2026 ,Rule 4(2)',
    recurrence: 'Event-based (prior notice >= 30 days before commencement / cessation / abandonment)',
    mode: 'FORM VII (online/electronic)',
    signingAuthority: 'Owner / Agent / Manager of Mine (Employer)',
    submissionAuthority: 'Inspector-cum-Facilitator (jurisdiction) + Registering Officer',
    timeline: 'Not less than 30 days prior notice',
    link: 'https://drive.google.com/file/d/146IwGqZ40PFA8zUFTwr7cr94mtHKi-6F/view?usp=drive_link',
  },
  {
    id: '4',
    form: 'FORM IX',
    title: 'Report of medical examination (For mine employees only) - initial, periodic (annual), and special examinations',
    rule: 'OSH (Central) Rules 2026 ,Rules 109, 113(1), 119(1), 142',
    recurrence: 'Annual (periodic); Event-based for initial & special examinations',
    mode: 'FORM IX',
    signingAuthority: 'Qualified Medical Practitioner (signs examination certificate); Employer (arranges & maintains records)',
    submissionAuthority: 'Maintained by employer on-site; copy to Inspector-cum-Facilitator / Chief Inspector-cum-Facilitator on demand',
    timeline: 'Initial: before employment; Periodic: annually; Special: as directed',
    link: 'https://drive.google.com/file/d/1KHKbsyVa-Edi093DTipexlmiTymmGFgh/view?usp=drive_link',
  },
  {
    id: '5',
    form: 'FORM XI',
    title: 'Notice of accident or dangerous occurrence',
    rule: 'OSH (Central) Rules 2026 ,Rules 7(1) and 7(2)',
    recurrence: 'Event-based (immediately on death; within 12 hrs after 48-hr disability threshold)',
    mode: 'FORM XI (electronic + telephone for deaths)',
    signingAuthority: 'Employer / Occupier / Manager / Agent (of the establishment)',
    submissionAuthority: 'Inspector-cum-Facilitator; Chief Inspector-cum-Facilitator; District Magistrate / SDO; Police Station in-charge; Family of victim',
    timeline: 'Forthwith (death); within 12 hrs after 48 hrs disability; within 12 hrs for dangerous occurrences',
    link: 'https://drive.google.com/file/d/16pAK5_n61KqSDku6FFGxgMq4j5D5j9n3/view?usp=drive_link',
  },
  {
    id: '6',
    form: 'FORM XII',
    title: 'Notice of periods of work (to be displayed and sent to Inspector-cum-Facilitator)',
    rule: 'OSH (Central) Rules 2026 ,Rule 71',
    recurrence: 'Event-based (whenever work hours schedule is set or revised) + Ongoing display',
    mode: 'FORM XII (notice board / electronic board)',
    signingAuthority: 'Employer / Manager of the establishment',
    submissionAuthority: 'Inspector-cum-Facilitator (electronically or by speed post); displayed at conspicuous place within establishment',
    timeline: 'Before commencement of work schedule; revised notice on any change',
    link: 'https://drive.google.com/file/d/12umBoIbxALzeGJeAPi6tKIhd3-m0Ajt4/view?usp=drive_link',
  },
  {
    id: '7',
    form: 'FORM XIII',
    title: 'Employee register',
    rule: 'OSH (Central) Rules 2026 ,Rule 72(1)(i)',
    recurrence: 'Ongoing / Continuous maintenance; produced during inspection on demand',
    mode: 'FORM XIII (electronic or physical)',
    signingAuthority: 'Employer / Manager of the establishment',
    submissionAuthority: 'Maintained at establishment; produced to Inspector-cum-Facilitator on demand',
    timeline: 'Maintained continuously; updated on any change in employee details',
    link: 'https://drive.google.com/file/d/1gOIe0riRUohfSKw_dFSsfe4ceAfJSXh3/view?usp=drive_link',
  },
  {
    id: '8',
    form: 'FORM XIV',
    title: 'Attendance register-cum-muster roll',
    rule: 'OSH (Central) Rules 2026 ,Rule 72(1)(ii)',
    recurrence: 'Ongoing / Continuous (daily attendance; monthly muster rolls)',
    mode: 'FORM XIV (electronic or physical)',
    signingAuthority: 'Employer / Manager / Person responsible for supervision',
    submissionAuthority: 'Maintained at establishment; produced to Inspector-cum-Facilitator on demand',
    timeline: 'Maintained daily; available on demand',
    link: 'https://drive.google.com/file/d/1IuBByBDQe8tvr2XhlaS8XNxPMi_2BvF_/view?usp=drive_link',
  },
  {
    id: '9',
    form: 'FORM XV',
    title: 'Register for wages, overtime and deductions',
    rule: 'OSH (Central) Rules 2026 ,Rule 72(1)(iii)',
    recurrence: 'Ongoing / Continuous maintenance (updated each wage period)',
    mode: 'FORM XV (electronic or physical)',
    signingAuthority: 'Employer / Manager of the establishment',
    submissionAuthority: 'Maintained at establishment; produced to Inspector-cum-Facilitator on demand',
    timeline: 'Maintained every wage period; available on demand',
    link: 'https://drive.google.com/file/d/1zIxgA5Jc4Oopa0DfNUOIQoVCgIDYFrsC/view?usp=drive_link',
  },
  {
    id: '10',
    form: 'FORM XVI',
    title: 'Wage slip',
    rule: 'OSH (Central) Rules 2026 ,Rule 72(2)',
    recurrence: 'Per wage payment cycle (weekly / fortnightly / monthly)',
    mode: 'FORM XVI (electronic to employees)',
    signingAuthority: 'Employer / Manager of the establishment',
    submissionAuthority: 'Issued electronically to each employee',
    timeline: 'On or before the day of payment of wages',
    link: 'https://drive.google.com/file/d/18rEawngcU8eeK13HL07xHtPshPXU_owf/view?usp=drive_link',
  },
  {
    id: '11',
    form: 'FORM XVII',
    title: 'Annual Return (employer of establishment + principal employer for Part III - contract labour)',
    rule: 'OSH (Central) Rules 2026 ,Rules 98(9) & 72 r/w 74',
    recurrence: 'Annual (Calendar year basis - Jan to Dec)',
    mode: 'FORM XVII (electronic on Shram Suvidha Portal)',
    signingAuthority: 'Employer / Occupier / Principal Employer',
    submissionAuthority: 'Inspector-cum-Facilitator (jurisdiction); Deputy Chief Labour Commissioner (Central) - for principal employer Part III',
    timeline: 'On or before last day of February following end of Calendar year',
    link: 'https://drive.google.com/file/d/1RPXy65dvPaEGEFIiBBvQhRrxpBysHIS4/view?usp=sharing',
  },
  {
    id: '12',
    form: 'FORM XVIII',
    title: 'Half Yearly Return (Contractor - January to June / July to December)',
    rule: 'OSH (Central) Rules 2026 ,Rules 72(5) and 98(7)',
    recurrence: 'Half-Yearly (Jan-Jun and Jul-Dec)',
    mode: 'FORM XVIII (electronic)',
    signingAuthority: 'Contractor (who engages contract labour)',
    submissionAuthority: 'Deputy Chief Labour Commissioner (Central) concerned',
    timeline: 'Within 30 days from close of each half-year (by 30 July and 30 January)',
    link: 'https://drive.google.com/file/d/16u1WLyAPLTxA6slyHUUDmQP0OKGB4wYT/view?usp=sharing',
  },
  {
    id: '13',
    form: 'FORM XIX',
    title: 'Register of accidents and dangerous occurrences',
    rule: 'OSH (Central) Rules 2026 ,Rule 75',
    recurrence: 'Ongoing / Continuous maintenance; event-based entries',
    mode: 'FORM XIX (electronic or physical)',
    signingAuthority: 'Employer / Manager / Safety Officer',
    submissionAuthority: 'Maintained at establishment; available to Inspector-cum-Facilitator on demand',
    timeline: 'Entry made immediately after each accident/dangerous occurrence',
    link: 'https://drive.google.com/file/d/14LBQ10Yl7Eld9ERPxYuo9IVQ6ex5DKQV/view?usp=sharing',
  },
  {
    id: '14',
    form: 'FORM XX',
    title: 'Register for leave with wages',
    rule: 'OSH (Central) Rules 2026 ,Rule 76',
    recurrence: 'Ongoing / Continuous; shared with employee annually (on demand)',
    mode: 'FORM XX (electronic or physical)',
    signingAuthority: 'Employer / Manager of the establishment',
    submissionAuthority: 'Maintained at establishment; shared with each employee once per calendar year',
    timeline: 'Maintained continuously; annual sharing with employee',
    link: 'https://drive.google.com/file/d/1tLaLPC2JXhk7VTeOdvNeytmATGP-YJSD/view?usp=drive_link',
  },
  {
    id: '15',
    form: 'FORM XXI',
    title: 'Application for Licence / Renewal of Licence / Amendment of Licence - Contractor',
    rule: 'OSH (Central) Rules 2026 ,Rules 87, 88(1) and 96(1)',
    recurrence: 'Event-based (fresh licence / renewal / amendment); Renewal: before expiry of licence',
    mode: 'FORM XXI (online - Shram Suvidha Portal)',
    signingAuthority: 'Contractor (Employer) - Signature/E-sign/Digital Sign',
    submissionAuthority: 'Registering Officer / Labour Commissioner (jurisdiction) via Shram Suvidha Portal',
    timeline: 'Before commencement of contract work; renewal before licence expiry',
    link: '',
  },
  {
    id: '16',
    form: 'FORM XXII',
    title: 'Proforma of Labour Licence (issued to contractor)',
    rule: 'OSH (Central) Rules 2026 ,Rules 89(1) and 90(2)',
    recurrence: 'Event-based (issued on grant / renewal)',
    mode: 'FORM XXII (issued by authority; displayed at establishment)',
    signingAuthority: 'Registering Officer / Licensing Authority (signs and issues the licence)',
    submissionAuthority: 'Issued by Registering Officer / Licensing Authority to the Contractor',
    timeline: 'Issued within prescribed time on complete application; displayed continuously',
    link: '',
  },
  {
    id: '17',
    form: 'FORM XXIII',
    title: 'Experience certificate of contract labour',
    rule: 'OSH (Central) Rules 2026 ,Rule 100',
    recurrence: 'Event-based (on demand by contract worker)',
    mode: 'FORM XXIII',
    signingAuthority: 'Concerned Contractor (who employed the contract labour)',
    submissionAuthority: 'Issued directly to the contract labour worker (employee) on demand',
    timeline: 'On demand by contract worker',
    link: '',
  },
  {
    id: '18',
    form: 'FORM XXVI',
    title: 'Application for composition of offence',
    rule: 'OSH (Central) Rules 2026 ,Rule 182(1)',
    recurrence: 'Event-based (on commission of compoundable offence)',
    mode: 'FORM XXVI (electronic)',
    signingAuthority: 'Accused person (employer or other person committing compoundable offence)',
    submissionAuthority: 'Officer notified by Central Government for compounding of offences under Section 114',
    timeline: 'Before or after enquiry or institution of prosecution',
    link: '',
  },
];

const Forms = () => {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

  const filtered = forms.filter(f =>
    f.title.toLowerCase().includes(search.toLowerCase()) ||
    f.form.toLowerCase().includes(search.toLowerCase()) ||
    f.rule.toLowerCase().includes(search.toLowerCase()) ||
    f.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-normal text-gray-800 mb-1">Forms</h2>
        <p className="text-gray-500 text-sm">Statutory Forms - OSH Rules 2026</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, form number or rule..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="bg-purple-600 text-white px-5 py-3 rounded-t-xl">
        <h3 className="font-medium text-sm">STATUTORY FORMS - OSH RULES 2026 ({forms.length} FORMS)</h3>
      </div>

      <div className="bg-white border border-gray-200 rounded-b-xl shadow-sm overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-gray-500 font-medium w-10">#</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Form</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Title</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Rule</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Recurrence</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Timeline</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Details</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center text-gray-400 py-10">No forms found</td>
                </tr>
              ) : filtered.map(f => (
                <React.Fragment key={f.id}>
                  <tr className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-400 text-xs">{f.id}</td>
                    <td className="px-4 py-3">
                      {f.link ? (
                        <a
                          href={f.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2 py-1 bg-purple-50 text-purple-600 border border-purple-200 rounded text-xs font-bold whitespace-nowrap hover:bg-purple-100 hover:underline inline-block"
                        >
                          {f.form}
                        </a>
                      ) : (
                        <span className="px-2 py-1 bg-purple-50 text-purple-600 border border-purple-200 rounded text-xs font-bold whitespace-nowrap">
                          {f.form}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-800 font-medium max-w-xs">
                      <p className="leading-snug">{f.title}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{f.rule}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs max-w-xs">{f.recurrence}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs max-w-xs">{f.timeline}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setExpanded(expanded === f.id ? null : f.id)}
                        className="px-3 py-1 bg-purple-50 text-purple-600 border border-purple-200 rounded text-xs hover:bg-purple-100 transition"
                      >
                        {expanded === f.id ? 'Hide \u25B2' : 'View \u25BC'}
                      </button>
                    </td>
                  </tr>
                  {expanded === f.id && (
                    <tr className="bg-purple-50">
                      <td colSpan={7} className="px-6 py-4">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Signing Authority</p>
                              <p className="text-sm text-gray-700">{f.signingAuthority}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Submission Authority</p>
                              <p className="text-sm text-gray-700">{f.submissionAuthority}</p>
                            </div>
                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">Mode of Submission</p>
                              <p className="text-sm text-gray-700">{f.mode}</p>
                            </div>
                          </div>
                          <div className="space-y-3"></div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
          <p className="text-gray-400 text-xs">Showing {filtered.length} of {forms.length} forms</p>
        </div>
      </div>
    </div>
  );
};

export default Forms;