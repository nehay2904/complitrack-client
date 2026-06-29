import { useState } from 'react';

const sections = [
  {
    title: 'SECTION 1: MANAGEMENT & INSPECTION RECORDS',
    color: 'bg-blue-600',
    records: [
      {
        id: 'REC-1',
        title: "Manager's Diary",
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 43(2)',
        detail: 'The manager shall maintain, in a bound paged book kept for the purpose, a diary, recording daily personal-supervision and other prescribed entries.',
        form: 'Bound paged book',
        frequency: 'Maintained daily',
        authority: 'Maintained at mine; produced to Inspector',
        signing: 'Manager',
        mode: 'Maintained (signed & dated entries)',
        remarks: 'Core managerial record.',
      },
      {
        id: 'REC-2',
        title: "Safety Officer's Record of Work",
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 44',
        detail: 'The safety officer shall maintain, in a bound paged book, a detailed record of the work performed by him.',
        form: 'Bound paged book',
        frequency: 'Maintained continuously',
        authority: 'Maintained at mine',
        signing: 'Safety Officer',
        mode: 'Maintained',
        remarks: 'Record.',
      },
      {
        id: 'REC-3',
        title: "Assistant Manager's Record",
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 45',
        detail: 'The assistant manager shall, in a bound paged book kept for the purpose, record the result of each inspection or duty performed.',
        form: 'Bound paged book',
        frequency: 'Maintained per shift / inspection',
        authority: 'Maintained at mine',
        signing: 'Assistant Manager',
        mode: 'Maintained',
        remarks: 'Record.',
      },
 
      {
        id: 'REC-5',
        title: "Overman's Report / Report Book",
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 47',
        detail: 'At the end of his shift, the overman shall record in a bound paged book kept for the purpose a general report in the prescribed form.',
        form: 'Bound paged book',
        frequency: 'End of every shift',
        authority: 'Maintained at mine',
        signing: 'Overman',
        mode: 'Maintained (signed & dated)',
        remarks: 'Record.',
      },
      {
        id: 'REC-6',
        title: "Sirdar's Report / Inspection Record",
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 48 (r/w Reg. 129)',
        detail: 'A sirdar (or other competent person) shall record reports of inspection of working places; a report of every such examination shall be recorded in a bound paged book kept for the purpose and shall be signed and dated by the person who made the inspection.',
        form: 'Bound paged book',
        frequency: 'Per inspection / per shift',
        authority: 'Maintained at mine',
        signing: 'Sirdar / Competent Person',
        mode: 'Maintained (signed & dated)',
        remarks: 'Reg. 129 governs examination by sirdars.',
      },
  
      {
        id: '7',
        title: "Safety Officer's Work Record",
        act: 'OSH Rules 2026',
        rule: 'OSH Rule 21(4)',
        detail: 'The safety officer shall maintain in a bound paged book or in retrievable and non-editable electronic mode a detailed record of the work performed by safety officer.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Daily',
        authority: 'Kept at Mine Office',
        signing: 'Safety Officer',
        mode: 'Physical / Electronic',
        remarks: "Safety officer for opencast — holds First Class Manager's Certificate (Coal) or restricted certificate",
      },
      {
        id: '7A',
        title: 'Record maintained by Training Officer',
        act: 'OHS Rules',
        rule: 'Rule 166(iv)',
        detail: 'To maintain records of the training given to every person and to furnish monthly reports to the mine manager on the progress of the persons undergoing training.',
        form: 'Training Records',
        frequency: 'Monthly reports to mine manager',
        authority: 'Mine Manager',
        signing: 'Training Officer',
        mode: 'Physical / Electronic',
        remarks: '',
      },
    ],
  },
  {
    title: 'SECTION 2: ATTENDANCE & EMPLOYEE RECORDS',
    color: 'bg-green-600',
    records: [
      {
        id: 'REC-9',
        title: 'Register Keeper / Attendance Register',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 61 (r/w Sec. 48(4) of the Act)',
        detail: 'Every person appointed to keep the register shall record the names of persons; attendance and the persons present below ground are recorded in the register maintained under sub-section (4) of section 48 of the Act.',
        form: 'Statutory register',
        frequency: 'Each shift / continuously',
        authority: 'Maintained at mine; open to inspection',
        signing: 'Register Keeper / Attendance Clerk',
        mode: 'Maintained',
        remarks: 'Statutory attendance register.',
      },
      {
        id: '10',
        title: 'Attendance Register-cum-Muster Roll',
        act: 'OSH Rules 2026',
        rule: 'Rule 72(1)(ii)',
        detail: 'Every employer of an establishment shall maintain an attendance register-cum-muster roll in FORM XIV.',
        form: 'FORM XIV',
        frequency: 'Maintained continuously',
        authority: 'Kept at Mine Office',
        signing: 'Employer / Attendance Clerk',
        mode: 'Electronic or Manual',
        remarks: 'Attendance clerk to remain on duty throughout; report absent official within 2 hrs (CMR Reg 53)',
      },
      {
        id: '11',
        title: 'Register of Wages, Overtime and Deductions',
        act: 'OSH Rules 2026',
        rule: 'Rule 72(1)(iii)',
        detail: 'Every employer shall maintain a register for wages, overtime and deduction in FORM XV.',
        form: 'FORM XV',
        frequency: 'Maintained continuously; preserved 5 years',
        authority: 'Kept at Mine Office',
        signing: 'Employer / Manager',
        mode: 'Electronic or Manual',
        remarks: 'Wage slips in FORM XVI to be issued electronically on or before payment day',
      },
      {
        id: '12',
        title: 'Register of Leave with Wages',
        act: 'OSH Rules 2026',
        rule: 'Rule 76(1)',
        detail: 'The employer of every establishment shall maintain in respect of every employee a record of leave with wages electronically or otherwise in FORM-XX and shall share the leave records of the respective employee, once in a Calendar year, on demand.',
        form: 'FORM XX',
        frequency: 'Maintained continuously; preserved 5 years after last entry',
        authority: 'Kept at Mine Office',
        signing: 'Employer / Manager',
        mode: 'Electronic or Manual',
        remarks: 'Not to be destroyed after 5 years unless properly transferred to new register',
      },
      {
        id: 'REC-21',
        title: 'Manpower Distribution Plan',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 246',
        detail: 'During the first week of every month, a survey shall be made of the number of persons normally employed in every district, and a sketch plan showing the results, signed and dated by the manager, shall be kept in the office of the mine, with a copy kept with the attendance clerk.',
        form: 'Sketch plan',
        frequency: 'Monthly — first week of every month',
        authority: 'Kept at mine office; copy with attendance clerk',
        signing: 'Manager (signs & dates)',
        mode: 'Maintained',
        remarks: 'Monthly record (not a return).',
      },
      {
        id: 'REC-22',
        title: "Register Under Section 48(1) (Open to Workers' Representative)",
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 254 (r/w Sec. 48(1) of the Act)',
        detail: "The register maintained under sub-section (1) of section 48 of the Act shall be open to inspection by the workmen's representative.",
        form: 'Statutory register',
        frequency: 'Maintained continuously',
        authority: "Maintained at mine; open to workers' representative",
        signing: 'Manager / Management',
        mode: 'Maintained',
        remarks: "Workers' representative inspection right.",
      },
    ],
  },
  {
    title: 'SECTION 3: PLANS & SECTIONS',
    color: 'bg-orange-600',
    records: [
      {
        id: 'REC-12',
        title: 'Mine Plans and Sections',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 65, 67, 69',
        detail: 'The owner, agent or manager of every mine shall keep the prescribed plans and sections (surface plan, underground/working plans, etc.), prepared and kept up-to-date by the surveyor.',
        form: 'Plans & sections',
        frequency: 'Kept up-to-date continuously',
        authority: 'Kept at mine; produced/submitted on requirement',
        signing: 'Surveyor / Manager',
        mode: 'Maintained',
        remarks: 'Plans are statutory records; see also Reg. 256.',
      },
      {
        id: 'REC-23',
        title: 'Plans, Sections and Records (Alternative Arrangement)',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 256',
        detail: 'Where special conditions exist, the Chief Inspector may permit alternative ways of keeping the required plans, sections and records.',
        form: 'Plans / sections / records',
        frequency: 'As permitted',
        authority: 'As directed by Chief Inspector',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintained',
        remarks: 'Enabling provision for record-keeping.',
      },
    ],
  },
  {
    title: 'SECTION 4: SAFETY MANAGEMENT & STRATA CONTROL',
    color: 'bg-red-600',
    records: [
      {
        id: 'REC-16',
        title: 'Strata Control & Monitoring Plan and Records',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 123',
        detail: 'The owner, agent and manager of every mine shall prepare and maintain a Strata Control and Monitoring Plan together with the related monitoring records.',
        form: 'Plan + records',
        frequency: 'Maintained / updated continuously',
        authority: 'Maintained at mine; produced on requirement',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintained',
        remarks: 'Record / plan.',
      },
    ],
  },
  {
    title: 'SECTION 5: PLANT, MACHINERY & HEMM EXAMINATION RECORDS',
    color: 'bg-yellow-600',
    records: [
      {
        id: 'REC-10',
        title: 'HEMM / Truck-Tipper-Dumper Operator Inspection Records',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 62 & 63',
        detail: 'The operator shall enter the condition of the machine (truck, tipper or dumper) at the end of his shift in the register or book maintained, and shall maintain a record of every inspection made in a bound paged book kept for the purpose.',
        form: 'Register / bound paged book',
        frequency: 'End of every shift',
        authority: 'Maintained at mine',
        signing: 'HEMM / Truck-Tipper-Dumper Operator',
        mode: 'Maintained',
        remarks: 'Record.',
      },
      {
        id: 'REC-13',
        title: 'Record of Periodic Examination of Shaft, Incline & Other Outlets',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 75',
        detail: 'A report of every such examination shall immediately thereafter be recorded in a bound paged book kept for the purpose and shall be signed and dated by the person making the examination.',
        form: 'Bound paged book',
        frequency: 'At prescribed periodic intervals',
        authority: 'Maintained at mine',
        signing: 'Competent Person',
        mode: 'Maintained (signed & dated)',
        remarks: 'Examination record.',
      },
      {
        id: 'REC-14',
        title: 'Record of Examination of Winding Equipment',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 88',
        detail: 'A report of every examination made under sub-regulation (1) shall be recorded in the bound paged book kept for the purpose.',
        form: 'Bound paged book',
        frequency: 'At prescribed intervals',
        authority: 'Maintained at mine',
        signing: 'Engineer / Competent Person',
        mode: 'Maintained',
        remarks: 'Examination record.',
      },
      {
        id: 'REC-15',
        title: 'Record of Examination of Haulage Engines & Roadways',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 98 & 99',
        detail: 'A report of every such examination under sub-regulation (1) shall be recorded in a bound paged book kept for the purpose.',
        form: 'Bound paged book',
        frequency: 'At prescribed intervals',
        authority: 'Maintained at mine',
        signing: 'Overman / Competent Person',
        mode: 'Maintained',
        remarks: 'Examination record.',
      },
      {
        id: 'REC-20',
        title: 'Record of Working & Examination of Machinery',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 213',
        detail: 'On the working and examination of machinery, a report of every such examination shall be recorded in a bound paged book kept for the purpose.',
        form: 'Bound paged book',
        frequency: 'At prescribed intervals',
        authority: 'Maintained at mine',
        signing: 'Competent Person',
        mode: 'Maintained',
        remarks: 'Examination record.',
      },
      {
        id: 'REC-18',
        title: 'Record of Maintenance & Examination of Safety Lamps',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 179',
        detail: 'On maintenance and examination of safety lamps, the result of every such examination shall be recorded in a bound paged book kept for the purpose.',
        form: 'Bound paged book',
        frequency: 'At prescribed intervals',
        authority: 'Maintained at lamp room',
        signing: 'Lamp-Room In-charge / Competent Person',
        mode: 'Maintained',
        remarks: 'Examination record.',
      },
    ],
  },
  {
    title: 'SECTION 6: EXPLOSIVES & BLASTING RECORDS',
    color: 'bg-pink-600',
    records: [
      {
        id: 'REC-19',
        title: 'Record of Inspections After Shot-Firing',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 203',
        detail: 'After a shot is fired, the inspection particulars shall be recorded in a bound paged book kept for the purpose, signed and dated.',
        form: 'Bound paged book',
        frequency: 'After each shot-firing',
        authority: 'Maintained at mine',
        signing: 'Shot-Firer',
        mode: 'Maintained (signed & dated)',
        remarks: 'Examination record.',
      },
    ],
  },
  {
    title: 'SECTION 7: DANGER AVOIDANCE & SAFETY RECORDS',
    color: 'bg-red-700',
    records: [],
  },
  {
    title: 'SECTION 8: FIRE, GAS & SPONTANEOUS HEATING RECORDS',
    color: 'bg-orange-700',
    records: [
      {
        id: 'REC-17',
        title: 'Record of Determination of Inflammable Gas & Environmental Conditions',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 169',
        detail: 'Determinations of the percentage of inflammable gas and environmental conditions are made, and the results of every such test shall be recorded in a bound paged book kept for the purpose.',
        form: 'Bound paged book',
        frequency: 'At prescribed intervals',
        authority: 'Maintained at mine',
        signing: 'Competent Person',
        mode: 'Maintained',
        remarks: 'Gas-testing record.',
      },
    ],
  },
  {
    title: 'SECTION 9: ACCIDENT & DANGEROUS OCCURRENCE REGISTERS',
    color: 'bg-red-800',
    records: [
      {
        id: '36',
        title: 'Register of Accidents and Dangerous Occurrences',
        act: 'OSH Rules 2026',
        rule: 'Rule 75',
        detail: 'The registers of accident and dangerous occurrences required by sub-clause (v) of clause (a) of section 33 of the Code shall be maintained in FORM-XIX.',
        form: 'FORM XIX',
        frequency: 'Maintained continuously; preserved 5 years',
        authority: 'Mine Office; available to Inspector-cum-Facilitator',
        signing: 'Manager',
        mode: 'Electronic or Manual',
        remarks: 'Notice of accident to CIFF/RIFF within 24 hrs; intimation of injury within 7 days',
      },
      {
        id: 'REC-11',
        title: 'Register of Contraventions',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 117',
        detail: 'On finding a contravention, the Inspector shall enter it in an interleaved, paged and bound register maintained in the prescribed Form, and shall also point it out to the owner, agent or manager. A copy is displayed on the notice board within one day.',
        form: 'Interleaved, paged & bound register',
        frequency: 'On each inspection / contravention',
        authority: 'Kept at mine; entries made by Inspector',
        signing: 'Chief Inspector / Inspector (makes entry, signs & dates)',
        mode: 'Maintained (carbon copy taken)',
        remarks: 'Maintained by the mine; entries made by the Inspectorate.',
      },
    ],
  },
  {
    title: 'SECTION 11: HEALTH, WELFARE & FIRST-AID RECORDS',
    color: 'bg-teal-600',
    records: [
      {
        id: '41',
        title: 'First-Aid Station Equipment Register / List',
        act: 'OSH Rules 2026',
        rule: 'CMR Reg (Chapter — Health)',
        detail: 'At every mine there shall be provided and maintained first aid stations equipped with first-aid equipment in good order and replenished whenever required. An up-to-date list of all first-aid stations provided in the mine shall be kept in the office of the mine.',
        form: 'Station List / Register',
        frequency: 'Maintained continuously; list kept at Mine Office',
        authority: 'Mine Office',
        signing: 'Manager; First-Aid Trained Person In-Charge',
        mode: 'Physical',
        remarks: 'One ambulance room per 150 persons in opencast; first aid box per 50 workers',
      },
      {
        id: '42',
        title: 'Health Examination Records (Mine Employees)',
        act: 'OSH Rules 2026',
        rule: 'Rule as applicable / FORM IX',
        detail: 'Report of medical examination for mine employees. Persons certified for competency fitness. Records of rescue trained persons annual medical re-examination.',
        form: 'FORM IX',
        frequency: 'As per examination schedule; annually for rescue trained persons',
        authority: 'Mine Office; examining authority',
        signing: 'Examining Authority / Medical Officer',
        mode: 'Physical',
        remarks: 'Applies to rescue trained persons at opencast mines',
      },
    ],
  },
  {
    title: 'SECTION 12: GENERAL PRESERVATION & PRODUCTION RULES',
    color: 'bg-gray-700',
    records: [
      {
        id: '43',
        title: 'General Preservation of All Registers & Records',
        act: 'OSH Rules 2026',
        rule: 'Rules 72(4), 72(7)(ii)',
        detail: 'All registers and other records required to be maintained under the Code shall be maintained complete and up-to-date. All registers and other records shall be preserved in original for a period of five calendar years from the date of last entry made therein.',
        form: 'All Registers',
        frequency: 'Preserved 5 years from date of last entry',
        authority: 'Mine Office or within 3 km of workplace',
        signing: 'Employer / Manager',
        mode: 'Physical / Electronic',
        remarks: 'To be produced on demand before Inspector-cum-Facilitator; electronically or by speed post',
      },
      {
        id: '44',
        title: 'Display on Notice Board',
        act: 'OSH Rules 2026',
        rule: 'Rule 73',
        detail: 'Every employer shall display at conspicuous places: name and address of establishment, hours of work, wage period, date of payment of wages, details of accidents and dangerous occurrences for last five years, name and address of Inspector-cum-Facilitator, date of payment of unpaid wages.',
        form: 'Notice Board',
        frequency: 'Continuously maintained and updated',
        authority: 'Mine Notice Board (conspicuous places)',
        signing: 'Employer / Manager',
        mode: 'Physical (posted)',
        remarks: 'In English/Hindi and local language',
      },
      {
        id: '48',
        title: 'Airborne Respirable Dust Measurement Record',
        act: 'OSH Rules 2026',
        rule: 'Rule 135(8)',
        detail: 'All results of measurements of airborne respirable dust and all other relevant particulars shall be systematically recorded within fourteen days of the date of collection of samples, in a bound paged book or in retrievable and non-editable electronic form and every entry shall be countersigned and dated by the manager within twenty-four hours.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Recorded within 14 days of sample collection; manager to countersign each entry within 24 hours',
        authority: 'Mine Office',
        signing: 'Sampling In-Charge (entry); Manager (countersigned within 24 hrs)',
        mode: 'Physical / Electronic',
        remarks: 'Dust prevention/suppression device inspection results also recorded in this same register',
      },
      {
        id: '49',
        title: 'Dust Prevention / Suppression Device Inspection & Test Record',
        act: 'OSH Rules 2026',
        rule: 'Rule 135(13)(h)',
        detail: 'Every device used for the prevention and suppression of dust produced by any machinery, equipment or process as also for the filtering of the exhausted air and every dust respirator shall be inspected once at least in every seven days and shall be thoroughly examined and tested at least once in every month.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Inspection: Once in every 7 days; Thorough examination and test: Once in every month',
        authority: 'Mine Office',
        signing: 'Competent Person (signed)',
        mode: 'Physical / Electronic',
        remarks: 'Results recorded in the Airborne Respirable Dust Measurement register',
      },
      {
        id: '50',
        title: 'Dust Sample Analysis Result Book',
        act: 'OSH Rules 2026',
        rule: 'Rule 135(17)',
        detail: 'Within seven days of taking of each sample, it shall be sent for analysis and the result of such analysis, immediately on its receipt, shall be recorded in a bound-paged book or in retrievable and non-editable electronic form and every entry shall be signed and dated by the sampling in-charge and countersigned and dated by the manager.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Sample sent within 7 days of collection; result recorded immediately on receipt',
        authority: 'Mine Office',
        signing: 'Sampling In-Charge (signed/e-signed); Manager (countersigned)',
        mode: 'Physical / Electronic',
        remarks: 'Separate book from dust measurement register — specifically for analysis results from laboratory',
      },
      {
        id: '52',
        title: 'Noise Mapping & Personal Noise Dosimetry Records',
        act: 'OSH Rules 2026',
        rule: 'Rule 230(12)',
        detail: 'The Owner, agent and manager shall ensure that area noise mapping is conducted in working areas and personal noise dosimetry for work persons exposed to noise level exceeding 85 dB(A). Areas where noise level exceeds 90 dB(A) shall be clearly demarcated.',
        form: 'Noise Mapping Record / Dosimetry Report',
        frequency: 'As per procedure specified by CIFF; periodically and on change in operations',
        authority: 'Mine Office',
        signing: 'Owner / Agent / Manager',
        mode: 'Physical / Electronic',
        remarks: 'No work without ear protection where noise ≥90 dB(A); no entry where noise ≥140 dB(A)',
      },
      {
        id: '53',
        title: 'Minutes of the Meeting of the Safety Committee',
        act: 'OHS Rules',
        rule: 'Regulation 15(5)',
        detail: 'The minutes of the meeting of the Safety Committee shall be recorded.',
        form: 'Minutes Register',
        frequency: 'After every Safety Committee meeting',
        authority: 'Mine Office',
        signing: 'Safety Officer / Committee Secretary',
        mode: 'Physical / Electronic',
        remarks: '',
      },
    ],
  },
];
const colorMap = {
  'bg-blue-600': { header: 'bg-blue-600', badge: 'bg-blue-50 text-blue-600 border-blue-200', btn: 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100', expand: 'bg-blue-50' },
  'bg-green-600': { header: 'bg-green-600', badge: 'bg-green-50 text-green-600 border-green-200', btn: 'bg-green-50 text-green-600 border-green-200 hover:bg-green-100', expand: 'bg-green-50' },
  'bg-orange-600': { header: 'bg-orange-600', badge: 'bg-orange-50 text-orange-600 border-orange-200', btn: 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100', expand: 'bg-orange-50' },
  'bg-red-600': { header: 'bg-red-600', badge: 'bg-red-50 text-red-600 border-red-200', btn: 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100', expand: 'bg-red-50' },
  'bg-yellow-600': { header: 'bg-yellow-600', badge: 'bg-yellow-50 text-yellow-600 border-yellow-200', btn: 'bg-yellow-50 text-yellow-600 border-yellow-200 hover:bg-yellow-100', expand: 'bg-yellow-50' },
  'bg-pink-600': { header: 'bg-pink-600', badge: 'bg-pink-50 text-pink-600 border-pink-200', btn: 'bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100', expand: 'bg-pink-50' },
  'bg-red-700': { header: 'bg-red-700', badge: 'bg-red-50 text-red-700 border-red-200', btn: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100', expand: 'bg-red-50' },
  'bg-orange-700': { header: 'bg-orange-700', badge: 'bg-orange-50 text-orange-700 border-orange-200', btn: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100', expand: 'bg-orange-50' },
  'bg-red-800': { header: 'bg-red-800', badge: 'bg-red-50 text-red-800 border-red-200', btn: 'bg-red-50 text-red-800 border-red-200 hover:bg-red-100', expand: 'bg-red-50' },
  'bg-teal-600': { header: 'bg-teal-600', badge: 'bg-teal-50 text-teal-600 border-teal-200', btn: 'bg-teal-50 text-teal-600 border-teal-200 hover:bg-teal-100', expand: 'bg-teal-50' },
  'bg-gray-700': { header: 'bg-gray-700', badge: 'bg-gray-50 text-gray-700 border-gray-200', btn: 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100', expand: 'bg-gray-50' },
};

const Records = () => {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

  const allRecords = sections.flatMap(s => s.records.map(r => ({ ...r, section: s.title, color: s.color })));

  const filtered = search
    ? allRecords.filter(r =>
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.id.toLowerCase().includes(search.toLowerCase()) ||
        r.act.toLowerCase().includes(search.toLowerCase()) ||
        r.rule.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  return (
    <div className="p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-normal text-gray-800 mb-1">Records</h2>
        <p className="text-gray-500 text-sm">Statutory Records — CMR 2026 / OSH Rules 2026</p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by title, ID, act or rule..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Search Results */}
      {filtered ? (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="bg-gray-700 text-white px-5 py-3">
            <h3 className="font-medium text-sm">SEARCH RESULTS ({filtered.length} found)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 text-gray-500 font-medium w-12">ID</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-medium">Title</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-medium">Act</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-medium">Rule</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-medium">Frequency</th>
                  <th className="text-left px-4 py-3 text-gray-500 font-medium">Details</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr><td colSpan={6} className="text-center text-gray-400 py-10">No records found</td></tr>
                ) : filtered.map(r => {
                  const c = colorMap[r.color] || colorMap['bg-gray-700'];
                  return (
                    <>
                      <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="px-4 py-3 font-mono text-xs font-bold text-gray-600">{r.id}</td>
                        <td className="px-4 py-3 text-gray-800 font-medium max-w-xs"><p className="leading-snug">{r.title}</p></td>
                        <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{r.act}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{r.rule}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs max-w-xs">{r.frequency}</td>
                        <td className="px-4 py-3">
                          <button onClick={() => setExpanded(expanded === `s-${r.id}` ? null : `s-${r.id}`)}
                            className={`px-3 py-1 border rounded text-xs transition ${c.btn}`}>
                            {expanded === `s-${r.id}` ? 'Hide ▲' : 'View ▼'}
                          </button>
                        </td>
                      </tr>
                      {expanded === `s-${r.id}` && (
                        <tr key={`s-${r.id}-detail`} className={c.expand}>
                          <td colSpan={6} className="px-6 py-4">
                            <div className="grid grid-cols-2 gap-6">
                              <div>
                                <p className="text-xs font-medium text-gray-500 mb-1">Detail</p>
                                <p className="text-sm text-gray-700 leading-relaxed">{r.detail}</p>
                              </div>
                              <div className="space-y-3">
                                <div><p className="text-xs font-medium text-gray-500 mb-1">Authority</p><p className="text-sm text-gray-700">{r.authority}</p></div>
                                <div><p className="text-xs font-medium text-gray-500 mb-1">Signing Authority</p><p className="text-sm text-gray-700">{r.signing}</p></div>
                                <div><p className="text-xs font-medium text-gray-500 mb-1">Mode</p><p className="text-sm text-gray-700">{r.mode}</p></div>
                                {r.remarks && <div><p className="text-xs font-medium text-gray-500 mb-1">Remarks</p><p className="text-sm text-gray-700">{r.remarks}</p></div>}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Section by Section */
        sections.map(section => {
          const c = colorMap[section.color] || colorMap['bg-gray-700'];
          return (
            <div key={section.title} className="mb-8">
              <div className={`${c.header} text-white px-5 py-3 rounded-t-xl`}>
                <h3 className="font-medium text-sm">{section.title} ({section.records.length} records)</h3>
              </div>
              <div className="bg-white border border-gray-200 rounded-b-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <th className="text-left px-4 py-3 text-gray-500 font-medium w-12">ID</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-medium">Title</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-medium">Act</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-medium">Rule</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-medium">Form</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-medium">Frequency</th>
                        <th className="text-left px-4 py-3 text-gray-500 font-medium">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.records.map(r => (
                        <>
                          <tr key={r.id} className="border-b border-gray-50 hover:bg-gray-50">
                            <td className="px-4 py-3 font-mono text-xs font-bold text-gray-600">{r.id}</td>
                            <td className="px-4 py-3 text-gray-800 font-medium max-w-xs"><p className="leading-snug">{r.title}</p></td>
                            <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{r.act}</td>
                            <td className="px-4 py-3 text-gray-500 text-xs">{r.rule}</td>
                            <td className="px-4 py-3">
                              <span className={`px-2 py-1 border rounded text-xs whitespace-nowrap ${c.badge}`}>{r.form}</span>
                            </td>
                            <td className="px-4 py-3 text-gray-500 text-xs max-w-xs">{r.frequency}</td>
                            <td className="px-4 py-3">
                              <button onClick={() => setExpanded(expanded === r.id ? null : r.id)}
                                className={`px-3 py-1 border rounded text-xs transition ${c.btn}`}>
                                {expanded === r.id ? 'Hide ▲' : 'View ▼'}
                              </button>
                            </td>
                          </tr>
                          {expanded === r.id && (
                            <tr key={`${r.id}-detail`} className={c.expand}>
                              <td colSpan={7} className="px-6 py-4">
                                <div className="grid grid-cols-2 gap-6">
                                  <div>
                                    <p className="text-xs font-medium text-gray-500 mb-1">Detail</p>
                                    <p className="text-sm text-gray-700 leading-relaxed">{r.detail}</p>
                                  </div>
                                  <div className="space-y-3">
                                    <div><p className="text-xs font-medium text-gray-500 mb-1">Authority</p><p className="text-sm text-gray-700">{r.authority}</p></div>
                                    <div><p className="text-xs font-medium text-gray-500 mb-1">Signing Authority</p><p className="text-sm text-gray-700">{r.signing}</p></div>
                                    <div><p className="text-xs font-medium text-gray-500 mb-1">Mode</p><p className="text-sm text-gray-700">{r.mode}</p></div>
                                    {r.remarks && <div><p className="text-xs font-medium text-gray-500 mb-1">Remarks</p><p className="text-sm text-gray-700">{r.remarks}</p></div>}
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
              </div>
            </div>
          );
        })
      )}

      <div className="text-center text-gray-400 text-xs py-4">
        Total: {allRecords.length} records across {sections.length} sections
      </div>
    </div>
  );
};

export default Records;