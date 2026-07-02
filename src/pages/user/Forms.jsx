import React, { useState } from 'react';

const forms = [
  {
    id: '1',
    form: 'FORM I',
    title: 'Application for registration of establishment / Amendment to certificate / Updation of registration particulars',
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
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
    regulation: 'OSH',
    rule: 'OSH (Central) Rules 2026 ,Rules 87, 88(1) and 96(1)',
    recurrence: 'Event-based (fresh licence / renewal / amendment); Renewal: before expiry of licence',
    mode: 'FORM XXI (online - Shram Suvidha Portal)',
    signingAuthority: 'Contractor (Employer) - Signature/E-sign/Digital Sign',
    submissionAuthority: 'Registering Officer / Labour Commissioner (jurisdiction) via Shram Suvidha Portal',
    timeline: 'Before commencement of contract work; renewal before licence expiry',
    link: 'https://drive.google.com/file/d/1blI5rb_4FRAJkX3GuwsWM_HSIJzvtqeQ/view?usp=sharing',
  },
  {
    id: '16',
    form: 'FORM XXII',
    title: 'Proforma of Labour Licence (issued to contractor)',
    regulation: 'OSH',
    rule: 'OSH (Central) Rules 2026 ,Rules 89(1) and 90(2)',
    recurrence: 'Event-based (issued on grant / renewal)',
    mode: 'FORM XXII (issued by authority; displayed at establishment)',
    signingAuthority: 'Registering Officer / Licensing Authority (signs and issues the licence)',
    submissionAuthority: 'Issued by Registering Officer / Licensing Authority to the Contractor',
    timeline: 'Issued within prescribed time on complete application; displayed continuously',
    link: 'https://drive.google.com/file/d/1vcjmOeBfj-jUIJk6EIrzAs27ui9YOV6A/view?usp=sharing',
  },
  {
    id: '17',
    form: 'FORM XXIII',
    title: 'Experience certificate of contract labour',
    regulation: 'OSH',
    rule: 'OSH (Central) Rules 2026 ,Rule 100',
    recurrence: 'Event-based (on demand by contract worker)',
    mode: 'FORM XXIII',
    signingAuthority: 'Concerned Contractor (who employed the contract labour)',
    submissionAuthority: 'Issued directly to the contract labour worker (employee) on demand',
    timeline: 'On demand by contract worker',
    link: 'https://drive.google.com/file/d/1fHyOVoJllRp0Z_HEd8kQe5ccJvpyhPUC/view?usp=sharing',
  },
  {
    id: '18',
    form: 'FORM XXVI',
    title: 'Application for composition of offence',
    regulation: 'OSH',
    rule: 'OSH (Central) Rules 2026 ,Rule 182(1)',
    recurrence: 'Event-based (on commission of compoundable offence)',
    mode: 'FORM XXVI (electronic)',
    signingAuthority: 'Accused person (employer or other person committing compoundable offence)',
    submissionAuthority: 'Officer notified by Central Government for compounding of offences under Section 114',
    timeline: 'Before or after enquiry or institution of prosecution',
    link: '',
  },
];

// Add real entries here as you get them - same shape as the OSH forms above.
const cmrForms = [
  {
    id: 'cmr-1',
    form: 'FORM 1-A',
    title: 'Notice of opening',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 3',
    recurrence: 'Event-based (on opening of a mine)',
    mode: 'FORM 1-A (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines (DGMS, Dhanbad); Regional Inspector of Mines; District Magistrate',
    timeline: 'Before the intended date of opening; actual date of opening to be furnished thereafter',
    link: '',
  },
  {
    id: 'cmr-2',
    form: 'FORM 1-B',
    title: 'Notice of reopening',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 6',
    recurrence: 'Event-based (on reopening of a mine)',
    mode: 'FORM 1-B (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines (DGMS, Dhanbad); Regional Inspector of Mines; District Magistrate',
    timeline: 'Before the intended date of reopening; actual date of reopening to be furnished thereafter',
    link: '',
  },
  {
    id: 'cmr-3',
    form: 'FORM 1-C',
    title: 'Notice of closure/abandonment',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 5',
    recurrence: 'Event-based (on closure or abandonment of a mine)',
    mode: 'FORM 1-C (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines (DGMS, Dhanbad); Regional Inspector of Mines; District Magistrate',
    timeline: 'Before intended date of closure/abandonment; actual date to be furnished thereafter',
    link: '',
  },
  {
    id: 'cmr-4',
    form: 'FORM 1-D',
    title: 'Notice of discontinuance',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 5',
    recurrence: 'Event-based (on discontinuance of a mine)',
    mode: 'FORM 1-D (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines (DGMS, Dhanbad); Regional Inspector of Mines; District Magistrate',
    timeline: 'Before intended date of discontinuance; actual date to be furnished thereafter; updated plans under Regulation 66 to be enclosed',
    link: '',
  },
  {
    id: 'cmr-5',
    form: 'FORM 2-A',
    title: 'Notice of change in name of mine',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 7',
    recurrence: 'Event-based (on change in name of mine)',
    mode: 'FORM 2-A (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines (DGMS, Dhanbad); Regional Inspector of Mines',
    timeline: 'On/following the date of change of mine name',
    link: '',
  },
  {
    id: 'cmr-6',
    form: 'FORM 2-B',
    title: 'Notice of change in the ownership of a mine',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 7',
    recurrence: 'Event-based (on change in ownership of mine)',
    mode: 'FORM 2-B (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines (DGMS, Dhanbad); Regional Inspector of Mines',
    timeline: 'On/following the date of change in ownership',
    link: '',
  },
  {
    id: 'cmr-7',
    form: 'FORM 2-C',
    title: 'Notice of change in the address of the Owner, agent or manager',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 7',
    recurrence: 'Event-based (on change of address of owner/agent/manager)',
    mode: 'FORM 2-C (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines (DGMS, Dhanbad); Regional Inspector of Mines',
    timeline: 'On/following the date of change of address',
    link: '',
  },
  {
    id: 'cmr-8',
    form: 'FORM 2-D',
    title: 'Notice of appointment of agent, manager, etc.',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 7',
    recurrence: 'Event-based (on appointment of agent/manager/engineer/surveyor/ventilation officer/safety officer/assistant manager)',
    mode: 'FORM 2-D (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines (DGMS, Dhanbad); Regional Inspector of Mines',
    timeline: 'On/following the date of appointment',
    link: '',
  },
  {
    id: 'cmr-9',
    form: 'FORM 2-E',
    title: 'Notice of termination of agent, manager, etc.',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 7',
    recurrence: 'Event-based (on termination of agent/manager/engineer/surveyor/ventilation officer/safety officer/assistant manager)',
    mode: 'FORM 2-E (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines (DGMS, Dhanbad); Regional Inspector of Mines',
    timeline: 'On/following the date of termination of appointment',
    link: '',
  },
  {
    id: 'cmr-10',
    form: 'FORM 3',
    title: 'Annual returns',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 4',
    recurrence: 'Annual (for the year ending 31st December)',
    mode: 'FORM 3 (physical submission, signed with Manager\'s seal)',
    signingAuthority: 'Manager',
    submissionAuthority: 'Directorate General of Mines Safety (DGMS)',
    timeline: 'To be submitted after 31st December for the year ending on that date',
    link: '',
  },
  {
    id: 'cmr-11',
    form: 'FORM 4-A',
    title: 'Notice of Accident/Dangerous Occurrence',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 8',
    recurrence: 'Event-based (on fatal/serious accident or dangerous occurrence)',
    mode: 'FORM 4-A (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines/DGMS; Regional Inspector of Mines/Director of Mines Safety (Region)/Dy. Director in charge of Sub-Region; District Magistrate/Collector; Electrical Inspector of Mines (electrical accidents only); Competent Authority for compensation (where applicable under Reg. 8(1)(a))',
    timeline: 'Immediately on occurrence of the accident/dangerous occurrence',
    link: '',
  },
  {
    id: 'cmr-12',
    form: 'FORM 4-B',
    title: 'Particulars of deceased/injured person(s)',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 8',
    recurrence: 'Event-based (following a fatal/serious accident)',
    mode: 'FORM 4-B (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines/DGMS; Regional Inspector of Mines/Director of Mines Safety (Region)/Dy. Director in charge of Sub-Region',
    timeline: 'Within 7 days of occurrence of the accident',
    link: '',
  },
  {
    id: 'cmr-13',
    form: 'FORM 4-C',
    title: 'Particulars of injured person(s) returning to duty',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 8',
    recurrence: 'Event-based (per injured person returning to duty)',
    mode: 'FORM 4-C (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines/DGMS; Regional Inspector of Mines/Director of Mines Safety (Region)/Dy. Director in charge of Sub-Region',
    timeline: 'Within 15 days of the injured person\'s return to duty',
    link: '',
  },
  {
    id: 'cmr-14',
    form: 'FORM 5',
    title: 'Notice of disease notified under section 25 of the Mines Act',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 9',
    recurrence: 'Event-based (on notification of an occupational disease)',
    mode: 'FORM 5 (physical/postal submission)',
    signingAuthority: 'Owner / Agent / Manager',
    submissionAuthority: 'Chief Inspector of Mines, DGMS; Regional Inspector of Mines; Inspector of Mines (Medical), DGMS; District Magistrate/Collector; Competent Authority for payment of compensation',
    timeline: 'On detection/notification of the disease',
    link: '',
  },
  {
    id: 'cmr-15',
    form: 'FORM 6',
    title: 'Pointing out of contraventions during Inspections',
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 117',
    recurrence: 'Event-based (during each statutory inspection)',
    mode: 'FORM 6 (physical inspection record)',
    signingAuthority: 'Inspection Officer (IO) and accompanying Mine Official',
    submissionAuthority: 'Recorded at mine; further details of contraventions, if any, followed up by letter from Inspecting Authority',
    timeline: 'At the time of, and following, each inspection',
    link: '',
  },
  {
    id: 'cmr-16',
    form: 'FORM 7',
    title: "Manager's charge report",
    regulation: 'CMR',
    rule: 'CMR 2017, Regulation 28',
    recurrence: 'Event-based (on change of Manager)',
    mode: 'FORM 7 (physical statutory record)',
    signingAuthority: 'Incoming Manager and Outgoing Manager',
    submissionAuthority: 'Maintained as statutory mine record under Regulation 28',
    timeline: 'At the time of handing over/taking over charge of the mine',
    link: '',
  },
];


const explosivesForms = [
  // Explosives Rules, 2008 forms go here
];

const cerForms = [
  // Central Electricity Rules forms go here
];

const REGULATIONS = [
  { key: 'OSH', label: 'OSH (Central) Rules 2026', shortLabel: 'OSH Rules Forms', data: forms },
  { key: 'CMR', label: 'Coal Mines Regulations, 2017', shortLabel: 'CMR Forms', data: cmrForms },
  { key: 'Explosives', label: 'Explosives Rules, 2008', shortLabel: 'Explosives Forms', data: explosivesForms },
  { key: 'CER', label: 'Central Electricity Rules', shortLabel: 'CER Forms', data: cerForms },
];

const REGULATION_STYLES = {
  OSH: {
    link: 'bg-white text-purple-600 border-purple-200 hover:bg-purple-50',
    linkActive: 'bg-purple-600 text-white border-purple-600',
    header: 'bg-purple-600', badge: 'bg-purple-50 text-purple-600 border-purple-200',
    badgeHover: 'hover:bg-purple-100',
    btn: 'bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100', detail: 'bg-purple-50',
  },
  CMR: {
    link: 'bg-white text-green-600 border-green-200 hover:bg-green-50',
    linkActive: 'bg-green-600 text-white border-green-600',
    header: 'bg-green-600', badge: 'bg-green-50 text-green-600 border-green-200',
    badgeHover: 'hover:bg-green-100',
    btn: 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100', detail: 'bg-green-50',
  },
  Explosives: {
    link: 'bg-white text-orange-600 border-orange-200 hover:bg-orange-50',
    linkActive: 'bg-orange-600 text-white border-orange-600',
    header: 'bg-orange-600', badge: 'bg-orange-50 text-orange-600 border-orange-200',
    badgeHover: 'hover:bg-orange-100',
    btn: 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100', detail: 'bg-orange-50',
  },
  CER: {
    link: 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50',
    linkActive: 'bg-blue-600 text-white border-blue-600',
    header: 'bg-blue-600', badge: 'bg-blue-50 text-blue-600 border-blue-200',
    badgeHover: 'hover:bg-blue-100',
    btn: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100', detail: 'bg-blue-50',
  },
};

const Forms = () => {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (key) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const matchesSearch = (f) =>
    f.title.toLowerCase().includes(search.toLowerCase()) ||
    f.form.toLowerCase().includes(search.toLowerCase()) ||
    f.rule.toLowerCase().includes(search.toLowerCase()) ||
    f.id.toLowerCase().includes(search.toLowerCase());

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-normal text-gray-800 mb-1">Forms</h2>
        <p className="text-gray-500 text-sm">Statutory Forms - click a regulation to view its forms</p>
      </div>

      {/* Regulation Links */}
      <div className="mb-4 flex flex-wrap gap-3">
        {REGULATIONS.map(r => {
          const s = REGULATION_STYLES[r.key];
          const isOpen = !!openSections[r.key];
          return (
            <button
              key={r.key}
              onClick={() => toggleSection(r.key)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${isOpen ? s.linkActive : s.link}`}
            >
              {r.shortLabel} ({r.data.length}) {isOpen ? '\u25B2' : '\u25BC'}
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search within an open regulation by title, form number or rule..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* One section per open regulation */}
      {REGULATIONS.filter(r => openSections[r.key]).map(r => {
        const s = REGULATION_STYLES[r.key];
        const filtered = r.data.filter(matchesSearch);
        return (
          <div key={r.key} className="mb-8">
            <div className={`${s.header} text-white px-5 py-3 rounded-t-xl`}>
              <h3 className="font-medium text-sm">STATUTORY FORMS - {r.label.toUpperCase()} ({filtered.length} FORMS)</h3>
            </div>

            <div className="bg-white border border-gray-200 rounded-b-xl shadow-sm overflow-hidden">
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
                        <td colSpan={7} className="text-center text-gray-400 py-10">
                          {r.data.length === 0 ? `No forms added yet for ${r.label}.` : 'No forms found'}
                        </td>
                      </tr>
                    ) : filtered.map(f => (
                      <React.Fragment key={`${r.key}-${f.id}`}>
                        <tr className="border-b border-gray-50 hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-400 text-xs">{f.id}</td>
                          <td className="px-4 py-3">
                            {f.link ? (
                              <a
                                href={f.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-2 py-1 ${s.badge} rounded text-xs font-bold whitespace-nowrap ${s.badgeHover} hover:underline inline-block`}
                              >
                                {f.form}
                              </a>
                            ) : (
                              <span className={`px-2 py-1 ${s.badge} rounded text-xs font-bold whitespace-nowrap`}>
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
                              onClick={() => setExpanded(expanded === `${r.key}-${f.id}` ? null : `${r.key}-${f.id}`)}
                              className={`px-3 py-1 ${s.btn} rounded text-xs transition`}
                            >
                              {expanded === `${r.key}-${f.id}` ? 'Hide \u25B2' : 'View \u25BC'}
                            </button>
                          </td>
                        </tr>
                        {expanded === `${r.key}-${f.id}` && (
                          <tr className={s.detail}>
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
                <p className="text-gray-400 text-xs">Showing {filtered.length} of {r.data.length} forms</p>
              </div>
            </div>
          </div>
        );
      })}

      {REGULATIONS.every(r => !openSections[r.key]) && (
        <div className="text-center text-gray-400 py-16 bg-white rounded-xl border border-gray-200">
          Click a regulation above to view its forms
        </div>
      )}
    </div>
  );
};

export default Forms;