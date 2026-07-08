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
    link: 'https://drive.google.com/file/d/1-5giw-nhO3wfEe9tl6LEa7_Dff_Q41YY/view?usp=sharing',
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
    link: 'https://drive.google.com/file/d/1yCRyRgUbN2CsJsCv778CRVw9K4393ohi/view?usp=sharing',
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
    link: 'https://drive.google.com/file/d/1xKvZZjdYjOXYpOSoJSLHBINkt3tXjfTC/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/1JihQB3lR21JMoMcvzqzlYCE4VK8Z05gJ/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/1NqcqzxMTjYsaegl5hvTeRVNcTksilM28/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/1NEqx1XJpxJTpaKUpOM9qwm34e-nYuM3s/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/1juH4Z4BiNHhUENEGyEVq6_nuTJMUIOCR/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/1PsJSBpfPktcmzAsRDAI-xurVnECc3h0y/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/1TPGZldoDuWxlPfp0ematE0AYfbnDf_q6/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/1q1fuVA5YqIOWY4gd2jAkyWMAqYql7I2l/view?usp=sharing',
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
    link: 'https://drive.google.com/file/d/1zdmLB_RV61t7gg4qFdVZkhunamIMs-3I/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/1V52MSKKf1F93i9JpvLr82HksC9qvjZ54/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/15x557BYF7KnlV1Yqm8zrnIAUD6K-eGTZ/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/185uWECmajIFtt1Snq2gCs0fQPxSC5Smq/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/1KYJPMx1jNSUTx4pH9yW-ayD6ZTHn_i23/view?usp=drive_link',
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
    link: 'https://drive.google.com/file/d/1nVix1VUTPvDjhr0RIJcfl22PZtYpU0cs/view?usp=drive_link',
  },
];


const explosivesForms = [
  {
    id: 'er-1',
    form: 'FORM LE-3',
    title: 'Licence to possess for use, explosives of Class 1, 2, 3, 4, 5, 6 or 7 in a magazine',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 99, Schedule IV Part 1, Article 3(c)',
    recurrence: 'One-time grant, renewable annually (via RE-1)',
    mode: 'FORM LE-3 (licence certificate issued by licensing authority)',
    signingAuthority: 'Occupier / Licensee',
    submissionAuthority: 'Chief Controller or Controller of Explosives authorised by Chief Controller (PESO)',
    timeline: 'Prior to possession/use of explosives at the mine magazine; renewed annually before expiry',
    link: '',
  },
  {
    id: 'er-2',
    form: 'FORM AE-3',
    title: 'Application for approval or grant or amendment or transfer of licence for possession and use of explosives in a magazine',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 113',
    recurrence: 'Event-based (new licence, amendment, or transfer)',
    mode: 'FORM AE-3 (physical/postal submission to Controller of Explosives)',
    signingAuthority: 'Occupier / Applicant',
    submissionAuthority: 'Chief Controller or Controller of Explosives (PESO)',
    timeline: 'Before commencing possession/use, or before amendment/transfer of an existing licence',
    link: '',
  },
  {
    id: 'er-3',
    form: 'FORM LE-7',
    title: 'Licence to transport explosives in a road van',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 99, Schedule IV Part 1, Article 7',
    recurrence: 'One-time grant, renewable annually (via RE-1)',
    mode: 'FORM LE-7 (licence certificate issued by licensing authority)',
    signingAuthority: 'Occupier / Licensee',
    submissionAuthority: 'Controller of Explosives (PESO)',
    timeline: 'Prior to transporting explosives by road van; renewed annually before expiry',
    link: '',
  },
  {
    id: 'er-4',
    form: 'FORM AE-7',
    title: 'Application for approval or grant or amendment or transfer of licence for transport of explosives in road van',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 113',
    recurrence: 'Event-based (new licence, amendment, or transfer)',
    mode: 'FORM AE-7 (physical/postal submission to Controller of Explosives)',
    signingAuthority: 'Occupier / Applicant',
    submissionAuthority: 'Controller of Explosives (PESO)',
    timeline: 'Before commencing road van transport, or before amendment/transfer',
    link: 'https://drive.google.com/file/d/1N_uusT-mnkF1Mbkj6yUEPHKrXp4mILqs/view?usp=drivesdk',
  },
  {
    id: 'er-5',
    form: 'FORM AE-12',
    title: 'Application for grant of no objection certificate under the Explosives Rules, 2008',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 113 (format per Rules 102 & 103)',
    recurrence: 'Event-based (prior to licence application)',
    mode: 'FORM AE-12 (physical/postal submission)',
    signingAuthority: 'Occupier / Applicant',
    submissionAuthority: 'District Magistrate / Directorate General of Mines Safety (DGMS, for sites under the Mines Act)',
    timeline: 'Before applying for magazine, manufacture, or road van transport licence',
    link: 'https://drive.google.com/file/d/1TUMcAcMG21PqFzVVzDU8POOFFnwPRU37/view?usp=drivesdk',
  },
  {
    id: 'er-6',
    form: 'FORM LE-1',
    title: 'Licence to manufacture at site, ANFO explosives not exceeding 200 kilogrammes at any one time',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 99, Schedule IV Part 1, Article 1(d)',
    recurrence: 'One-time grant, renewable annually (via RE-1)',
    mode: 'FORM LE-1 (licence certificate issued by licensing authority)',
    signingAuthority: 'Occupier / Licensee',
    submissionAuthority: 'Controller of Explosives (PESO)',
    timeline: 'Prior to commencing on-site ANFO manufacture; renewed annually before expiry',
    link: 'https://drive.google.com/file/d/1HbR1hmsLAyKDsHJehLNPhLCddm9OFQWP/view?usp=drivesdk',
  },
  {
    id: 'er-7',
    form: 'FORM AE-1',
    title: 'Application for approval or grant or amendment or transfer of licence for manufacture of explosives',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 113',
    recurrence: 'Event-based (new licence, amendment, or transfer)',
    mode: 'FORM AE-1 (physical/postal submission to Controller of Explosives)',
    signingAuthority: 'Occupier / Applicant',
    submissionAuthority: 'Controller of Explosives (PESO)',
    timeline: 'Before commencing manufacture, or before amendment/transfer of an existing licence',
    link: 'https://drive.google.com/file/d/11tU2wVmtXSDqAGV-OFy5vJp2N9c9fkZY/view?usp=drivesdk',
  },
  {
    id: 'er-8',
    form: 'FORM RE-1',
    title: 'Application for renewal or revalidation of licence or certificate',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 112',
    recurrence: 'Annual (before expiry of each licence held — LE-1, LE-3, LE-7)',
    mode: 'FORM RE-1 (physical/postal submission to licensing authority)',
    signingAuthority: 'Occupier / Licensee',
    submissionAuthority: 'Chief Controller or Controller of Explosives, as applicable to the licence (PESO)',
    timeline: 'Before expiry of the licence/certificate being renewed',
    link: '',
  },
  {
    id: 'er-9',
    form: 'FORM RE-2',
    title: 'Form of account to be maintained by a licensee — accounts of explosives manufactured (other than fireworks)',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 24',
    recurrence: 'Continuous (record to be kept up-to-date)',
    mode: 'FORM RE-2 (register maintained at licensed premises)',
    signingAuthority: 'Occupier / Licensee / Authorised Signatory',
    submissionAuthority: 'Maintained at site for inspection by Controller of Explosives',
    timeline: 'Updated continuously as ANFO is manufactured',
    link: 'https://drive.google.com/file/d/1OFdEUVNQt7I9xH556IMENHHYPmrXcejG/view?usp=drivesdk',
  },
  {
    id: 'er-10',
    form: 'FORM RE-3',
    title: 'Form of account to be maintained by a licensee — accounts of receipt of explosives (other than fireworks)',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 24',
    recurrence: 'Continuous (record to be kept up-to-date)',
    mode: 'FORM RE-3 (register maintained at licensed premises)',
    signingAuthority: 'Occupier / Licensee / Authorised Signatory',
    submissionAuthority: 'Maintained at site for inspection by Controller of Explosives',
    timeline: 'Updated on each receipt of explosives into the magazine',
    link: 'https://drive.google.com/file/d/1lxBHOwcqCBuxO4RIfJ6kMoI4eoAaxPqE/view?usp=drivesdk',
  },
  {
    id: 'er-11',
    form: 'FORM RE-5',
    title: 'Form of account to be maintained by a licensee — accounts of explosives used by licensee (other than fireworks)',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 24',
    recurrence: 'Continuous (per blast/shift)',
    mode: 'FORM RE-5 (register maintained at licensed premises)',
    signingAuthority: 'Shot firer / Occupier / Licensee',
    submissionAuthority: 'Maintained at site for inspection by Controller of Explosives',
    timeline: 'Updated after every blasting operation',
    link: '',
  },
  {
    id: 'er-12',
    form: 'FORM RE-6',
    title: 'Form of records to be maintained by a licensee — records of explosives transported by road van',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 61(2)',
    recurrence: 'Event-based (each road van trip)',
    mode: 'FORM RE-6 (register maintained by road van licensee)',
    signingAuthority: 'Occupier / Licensee / Driver-in-charge',
    submissionAuthority: 'Maintained at site for inspection by Controller of Explosives',
    timeline: 'Updated for every transport of explosives by road van',
    link: 'https://drive.google.com/file/d/10TQLLzU4XxaQ4hGehPFhTn1hPv57w8Vt/view?usp=drivesdk',
  },
  {
    id: 'er-13',
    form: 'FORM RE-7',
    title: 'Return of explosives — received, used, sold, destroyed and stolen during the month, in respect of the explosives magazine or store house',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 24',
    recurrence: 'Monthly',
    mode: 'FORM RE-7 (physical/postal submission)',
    signingAuthority: 'Occupier / Licensee',
    submissionAuthority: 'Controller of Explosives (PESO)',
    timeline: 'Monthly, within the prescribed period after month-end',
    link: '',
  },
  {
    id: 'er-14',
    form: 'FORM RE-11',
    title: 'Form of indent for explosives',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rules 50 and 77',
    recurrence: 'Event-based (each purchase order)',
    mode: 'FORM RE-11 (indent to licensed supplier)',
    signingAuthority: 'Occupier / Licensee',
    submissionAuthority: 'Licensed supplier/manufacturer',
    timeline: 'Raised each time explosives are ordered for the mine',
    link: '',
  },
  {
    id: 'er-15',
    form: 'FORM RE-12',
    title: 'Pass issued by the consignor for transport of a consignment of explosives',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rules 47 and 50',
    recurrence: 'Event-based (each consignment)',
    mode: 'FORM RE-12 (accompanies consignment; copy forwarded to Controller of Explosives)',
    signingAuthority: 'Consignor (Supplier), countersigned on receipt by Consignee (Occupier)',
    submissionAuthority: 'Controller of Explosives (PESO) — copy forwarded',
    timeline: 'Issued with every consignment dispatched to the mine',
    link: 'https://drive.google.com/file/d/17wuWBNI9QDUrzvg6ZuzNZ3Ek7gu4eXHe/view?usp=drivesdk',
  },
  {
    id: 'er-16',
    form: 'FORM DE-1',
    title: 'Distance form to be submitted by the applicant indicating the clear distances available around proposed storage magazine for explosives or proposed explosives factory',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 113',
    recurrence: 'Event-based (submitted with licence application)',
    mode: 'FORM DE-1 (submitted alongside AE-1/AE-3 application)',
    signingAuthority: 'Occupier / Applicant',
    submissionAuthority: 'Controller of Explosives (PESO)',
    timeline: 'Submitted along with the licence application, before grant',
    link: '',
  },
  {
    id: 'er-17',
    form: 'FORM DE-2',
    title: 'Distance form attached to the licence — safety distances required to be kept clear around magazine for high explosives or factory',
    regulation: 'ER 2008',
    rule: 'Explosives Rules, 2008, Rule 113',
    recurrence: 'One-time (attached at grant); safety distances maintained through licence validity',
    mode: 'FORM DE-2 (annexure attached to LE-1/LE-3 licence)',
    signingAuthority: 'Controller of Explosives (issuing authority)',
    submissionAuthority: 'Controller of Explosives (PESO)',
    timeline: 'Issued at time of licence grant; distances to be maintained throughout validity',
    link: 'https://drive.google.com/file/d/1FtytptGs4MyoXNAT7hCd8JH3PfBlqXiE/view?usp=drivesdk',
  },
];

// CEA (Measures relating to Safety and Electric Supply) Regulations, 2023
// Alert convention used: alertDate = 30 days before the due date (adjust to your policy).

const cerForms = [
  {
    id: 'cer-1',
    form: 'FORM I',
    title: 'Inspection Report — electrical installations of voltage up to and including 250 V',
    regulation: 'CEA 2023',
    rule: 'CEA (Measures relating to Safety and Electric Supply) Regulations, 2023, Regulations 32 & 45, Schedule II',
    details: 'Inspection report / self-certification of a low-voltage installation (up to 250 V). Records the general safety conditions of the installation against Regulations 14–19, 36, 37, 43, 44 and overhead-line requirements (particulars of installation, connected load, earthing, RCD, etc.). Installations at or below the notified voltage are self-certified by the owner/supplier/consumer and the report submitted to the Electrical Inspector (Reg 32(3) & Reg 45).',
    recurrence: 'Periodic (Electrical Safety Officer inspection at intervals not exceeding 1 year; statutory self-certification not exceeding 5 years)',
    mode: 'FORM I (inspection report / self-certification submitted to Electrical Inspector)',
    signingAuthority: 'Supplier / Owner / Consumer (self-certification) or Electrical Inspector',
    submissionAuthority: 'Electrical Inspector (State Electrical Inspectorate)',
    timeline: 'Before commencement of supply and on periodic inspection / self-certification',
    dueDate: 'Before commencement of supply and after any shutdown of 6 months or more (Reg 45); ESO inspection at intervals not exceeding 1 year (Reg 5); statutory periodic self-certification not exceeding 5 years (Reg 32(2))',
    alertDate: '30 days before the due inspection / self-certification date',
    link: 'https://drive.google.com/file/d/16_hOByrwSe0Eb4E8cZEbiRGPaBwSoeTi/view?usp=drivesdk',
  },
  {
    id: 'cea-2',
    form: 'FORM II',
    title: 'Inspection Report — electrical installations of voltage more than 250 V up to and including 650 V',
    regulation: 'CEA 2023',
    rule: 'CEA (Measures relating to Safety and Electric Supply) Regulations, 2023, Regulations 32 & 45, Schedule II',
    details: 'Inspection report / self-certification of a medium-voltage installation (>250 V up to 650 V). Covers the record of designated persons (Reg 3), overloading, service lines, cut-outs, switches, danger notices, first-aid and resuscitation instructions, insulation resistance, switchboard clearances, earthing and overhead-line requirements. Report submitted to the Electrical Inspector (Reg 32 & Reg 45).',
    recurrence: 'Periodic (Electrical Safety Officer inspection at intervals not exceeding 1 year; statutory self-certification not exceeding 5 years)',
    mode: 'FORM II (inspection report / self-certification submitted to Electrical Inspector)',
    signingAuthority: 'Supplier / Owner / Consumer (self-certification) or Electrical Inspector',
    submissionAuthority: 'Electrical Inspector (State Electrical Inspectorate)',
    timeline: 'Before commencement of supply and on periodic inspection / self-certification',
    dueDate: 'Before commencement of supply and after any shutdown of 6 months or more (Reg 45); ESO inspection at intervals not exceeding 1 year (Reg 5); statutory periodic inspection / self-certification not exceeding 5 years (Reg 32(2))',
    alertDate: '30 days before the due inspection / self-certification date',
    link: 'https://drive.google.com/file/d/1KEbnAE-dTTVhHl_p_zUZxDVMGDbZkXCx/view?usp=drivesdk',
  },
  {
    id: 'cea-3',
    form: 'FORM III',
    title: 'Inspection Report — electrical installations of voltage exceeding 650 V (with self-certification certificate)',
    regulation: 'CEA 2023',
    rule: 'CEA (Measures relating to Safety and Electric Supply) Regulations, 2023, Regulations 32 & 45, Schedule II',
    details: 'Inspection report for a high-voltage installation (exceeding 650 V), including detailed equipment-wise test details for transformers, generators, circuit breakers, isolators, cables, panels, earthing, CTs/PTs and overhead lines, plus residual-life assessment for equipment over 15 years old. Installations above the notified voltage are inspected by the Electrical Inspector; the self-certification certificate is countersigned by a Chartered Electrical Safety Engineer (Reg 32(1) & Reg 45).',
    recurrence: 'Periodic (Electrical Safety Officer inspection at intervals not exceeding 1 year; statutory inspection not exceeding 5 years)',
    mode: 'FORM III (inspection report; self-certification certificate countersigned by Chartered Electrical Safety Engineer, submitted to Electrical Inspector)',
    signingAuthority: 'Supplier / Owner / Consumer and Chartered Electrical Safety Engineer, or Electrical Inspector',
    submissionAuthority: 'Electrical Inspector (State Electrical Inspectorate)',
    timeline: 'Before commencement of supply and on periodic inspection',
    dueDate: 'Before commencement of supply and after any shutdown of 6 months or more (Reg 45); ESO inspection at intervals not exceeding 1 year (Reg 5); statutory periodic inspection by Electrical Inspector not exceeding 5 years (Reg 32(2))',
    alertDate: '30 days before the due inspection date',
    link: 'https://drive.google.com/file/d/1ivuer584hif1sbK1fMTpd2im_lJTvnEX/view?usp=drivesdk',
  },
  {
    id: 'cea-4',
    form: 'FORM IV',
    title: 'Inspection Report — electrical installations in a mine',
    regulation: 'CEA 2023',
    rule: 'CEA (Measures relating to Safety and Electric Supply) Regulations, 2023, sub-regulation (3) of Regulation 32, Schedule II',
    details: 'Inspection report for electrical installations in a mine. Records mine and personnel details, illumination level, percentage of methane/other explosive gas, temperatures and air velocity, and compliance with Regulations 98–118 (annual return, plans, illumination, transformers/switchgear, earthing, supply voltages, cables, flexible cables, remote control, log-book in Schedule XI, haulage, electrical supervisors and training). Prepared by the Inspecting Officer; copy forwarded to the Electrical Inspector of mines.',
    recurrence: 'Periodic (Electrical Safety Officer / Electrical Inspector of mines inspection at intervals not exceeding 1 year)',
    mode: 'FORM IV (inspection report prepared by Inspecting Officer; copy forwarded to Electrical Inspector of mines)',
    signingAuthority: 'Inspecting Officer (Electrical Inspector of mines)',
    submissionAuthority: 'Electrical Inspector of mines',
    timeline: 'On periodic inspection of the mine electrical installation',
    dueDate: 'ESO inspection at intervals not exceeding 1 year (Reg 5); periodic statutory inspection of mine installations as directed by the Central Government (Reg 32(2) proviso)',
    alertDate: '30 days before the due inspection date',
    link: 'https://drive.google.com/file/d/1kGawyJY9Ykv5nXl0ZL_ywQ8d64gn6ZwY/view?usp=drivesdk',
  },
  {
    id: 'cea-5',
    form: 'SCHEDULE IX',
    title: 'Form of Annual Return for Mines',
    regulation: 'CEA 2023',
    rule: 'CEA (Measures relating to Safety and Electric Supply) Regulations, 2023, sub-regulation (1) of Regulation 98',
    details: 'Annual return for a mine giving the size and type of apparatus together with particulars of its use. Part A records mine identification (name, situation, owner, agent, manager, engineer, electrical supervisor); Part B records the system and voltage of supply, particulars of motors on surface and in the mine, ventilation and percentage of inflammable gas, and lighting. Sent to the Electrical Inspector of mines (Reg 98).',
    recurrence: 'Annual',
    mode: 'SCHEDULE IX (annual return submitted to Electrical Inspector of mines)',
    signingAuthority: 'Owner / Agent / Manager / Engineer',
    submissionAuthority: 'Electrical Inspector of mines',
    timeline: 'On or before 1 February every year',
    dueDate: 'On or before 1 February every year (Reg 98(1))',
    alertDate: '1 January every year (about 30 days before the 1 February deadline)',
    link: 'https://drive.google.com/file/d/1qzXhU2xMkVTeNy_IYjZ5GRG0eEMIXDXt/view?usp=drivesdk',
  },
  {
    id: 'cea-6',
    form: 'SCHEDULE XI',
    title: 'Log Sheet for Mines and Oil-fields',
    regulation: 'CEA 2023',
    rule: 'CEA (Measures relating to Safety and Electric Supply) Regulations, 2023, sub-regulation (9) of Regulation 112 and sub-regulation (9) of Regulation 117',
    details: 'Daily log sheet maintained by the Electrical Supervisor recording the condition of system insulation, specified insulation defects, accidents or dangerous occurrences (including electric shock and open sparking), disconnection/reconnection of supply, examination of earth-fault detectors/recorders (Reg 102(3)), and routine and special examinations of apparatus (Reg 117(9)). Examined and countersigned by the Engineer and the Manager.',
    recurrence: 'Daily (continuous log)',
    mode: 'SCHEDULE XI (daily log sheet maintained at the mine)',
    signingAuthority: 'Electrical Supervisor; examined by Engineer and Manager',
    submissionAuthority: 'Maintained at the mine for inspection by Electrical Inspector of mines',
    timeline: 'Filled in daily by the Electrical Supervisor',
    dueDate: 'Daily (each working day)',
    alertDate: 'Daily reminder at the start of each working day',
    link: 'https://drive.google.com/file/d/1jB1JjPp2wJo6iq82Tri7BzW-Hhjgb-Oa/view?usp=drivesdk',
  },
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