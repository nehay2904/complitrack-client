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
        remarks: 'Record / plan. (For opencast: read as slope/bench & dump stability monitoring.)',
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
  {
    title: 'SECTION 13: CMR 2017 — ADDITIONAL MANAGEMENT, ACCIDENT & INSPECTION RECORDS',
    color: 'bg-blue-700',
    records: [
      {
        id: 'CMR-1',
        title: 'Submission of Particulars of Persons Killed or Injured',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 8(5)',
        detail: 'Particulars of persons killed or injured shall be submitted in the prescribed form within 7 days of the occurrence, and within 15 days of the injured person returning to duty.',
        form: 'Prescribed Form',
        frequency: 'Within 7 days of occurrence; within 15 days of injured person\'s return to duty',
        authority: 'Chief Inspector / Regional Inspector',
        signing: 'Owner / Agent / Manager',
        mode: 'Physical / As Prescribed',
        remarks: 'Statutory intimation, distinct from FORM XIX register (Rec. 36).',
      },
      {
        id: 'CMR-2',
        title: 'Manager\'s Written Reports on Safety Materials & Appliances',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 43(4)',
        detail: 'The manager shall submit written reports to the owner/agent regarding materials and appliances required for the safety of the mine whenever the need is beyond his own authority.',
        form: 'Written Report',
        frequency: 'As required, when materials/appliances beyond manager\'s authority are needed',
        authority: 'Owner / Agent',
        signing: 'Manager',
        mode: 'Physical / Written',
        remarks: 'Distinct from the Manager\'s Diary (Rec. REC-1).',
      },
      {
        id: 'CMR-3',
        title: 'Record of Accident / Dangerous Occurrence Enquiry',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 43(10)',
        detail: 'Result of every accident/dangerous occurrence enquiry, including plan, sections and photographs, shall be recorded in a bound paged book and a copy furnished to the Chief Inspector and Regional Inspector.',
        form: 'Bound Paged Book + Enquiry Report',
        frequency: 'Within 15 days of accident',
        authority: 'Chief Inspector + Regional Inspector',
        signing: 'Manager / Assistant Manager',
        mode: 'Physical',
        remarks: 'Linked to Register of Accidents (Rec. 36) and Reg. 8(5) intimation.',
      },
      {
        id: 'CMR-4',
        title: 'Surveyor\'s Record Book',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 53(2)',
        detail: 'The surveyor shall maintain, in a bound paged book, a record of approach to boundary within 120 m, doubts on plan accuracy, and other matters relating to plans.',
        form: 'Bound Paged Book',
        frequency: 'As required / continuous',
        authority: 'Maintained at mine (countersigned by Manager)',
        signing: 'Surveyor (countersigned by Manager)',
        mode: 'Maintain at Site',
        remarks: '',
      },
      {
        id: 'CMR-5',
        title: 'Overman\'s Daily Diary',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 19(5)',
        detail: 'The overman shall record in a bound paged book the daily inspection of working places, defects found, instructions issued and persons employed in each district.',
        form: 'Bound Paged Book',
        frequency: 'Every working day / each shift',
        authority: 'Maintained at Mine',
        signing: 'Overman / Assistant Manager / Mining Sardar',
        mode: 'Maintain at Site',
        remarks: 'Related to Overman\'s Report (Rec. REC-5, Reg. 47) — cross-check numbering with current CMR edition.',
      },
      {
        id: 'CMR-6',
        title: 'Mining Sardar\'s Shift Record',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 21(3)',
        detail: 'The Mining Sardar shall record particulars of work performed, inspections done and any unusual occurrence observed during the shift in a bound paged book.',
        form: 'Bound Paged Book',
        frequency: 'Every shift',
        authority: 'Maintained at Mine',
        signing: 'Mining Sardar (countersigned by Overman / Assistant Manager)',
        mode: 'Maintain at Site',
        remarks: '',
      },
    
      {
        id: 'CMR-8',
        title: 'Foreman\'s Daily Diary (Opencast)',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 20(4)',
        detail: 'The foreman shall record daily inspection of working areas, plant, equipment, roads and slopes, along with defects and corrective actions, in a bound paged book.',
        form: 'Bound Paged Book',
        frequency: 'Every working day / each shift',
        authority: 'Maintained at Mine',
        signing: 'Overman / Assistant Manager / Mining Sardar',
        mode: 'Maintain at Site',
        remarks: '',
      },
   
      {
        id: 'CMR-10',
        title: 'Weekly Inspection Record of Heavy Earth Moving Machinery',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 62',
        detail: 'Operators of heavy earth moving machinery (excluding trucks, tippers and dumpers) shall maintain a record of every inspection made, in a bound paged book, and sign every entry.',
        form: 'Bound Paged Book',
        frequency: 'Every week',
        authority: 'Maintained at Mine',
        signing: 'HEMM Operators',
        mode: 'Maintain at Site',
        remarks: 'Complements the shift-end record at Rec. REC-10 (Reg. 62 & 63).',
      },
    ],
  },
  {
    title: 'SECTION 14: CMR 2017 — PLANS, SURVEYS & GEOLOGICAL RECORDS',
    color: 'bg-orange-700',
    records: [
      {
        id: 'CMR-11',
        title: 'Surface Plan',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 65(1)(a)',
        detail: 'The surface plan showing surface features, shafts, railways, rivers, buildings etc. shall be kept up-to-date (not earlier than 3 months) and updated before abandonment/closure.',
        form: 'Surface Plan',
        frequency: 'Maintained up-to-date (not earlier than 3 months)',
        authority: 'Available for inspection at Mine Office',
        signing: 'Owner / Agent / Manager (prepared by Surveyor)',
        mode: 'Maintain at Site / Produce on Inspection',
        remarks: 'Sub-set of Mine Plans & Sections (Rec. REC-12, Reg. 65/67/69).',
      },
      {
        id: 'CMR-12',
        title: 'Geological Plan of Leasehold Area',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 65(1)(f)',
        detail: 'A geological plan of the leasehold area shall be maintained on a suitable scale.',
        form: 'Geological Plan',
        frequency: 'Maintained at mine',
        authority: 'Available for inspection at Mine Office',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintain at Site / Produce on Inspection',
        remarks: '',
      },
      {
        id: 'CMR-13',
        title: 'Water-Danger Plan and Section',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 65(1)(g)',
        detail: 'A water-danger plan and section showing water bodies, workings, dykes, faults and flooding levels shall be maintained.',
        form: 'Water-Danger Plan/Section',
        frequency: 'Maintained up-to-date',
        authority: 'Available for inspection at Mine Office',
        signing: 'Owner / Agent / Manager (Surveyor)',
        mode: 'Maintain at Site / Produce on Inspection',
        remarks: '',
      },
      {
        id: 'CMR-14',
        title: 'Scientific Study Report for Mechanised Opencast Design',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 106(2)',
        detail: 'Before starting mechanised opencast working, the owner/agent shall ensure design (pit slope, dump slope, slope stability monitoring) is based on a scientific study, and keep a copy of the report at the mine office.',
        form: 'Scientific Study Report',
        frequency: 'Before start of mechanised opencast working; within 1 year for existing mines',
        authority: 'Available at Mine Office',
        signing: 'Owner / Agent',
        mode: 'Maintain at Site',
        remarks: 'Directly relevant to the underground CM mine\'s slope/strata planning (cf. Rec. REC-16).',
      },
    ],
  },
  {
    title: 'SECTION 15: CMR 2017 — EXPLOSIVES, FENCING, FIRE & DUST RECORDS',
    color: 'bg-pink-700',
    records: [
      {
        id: 'CMR-15',
        title: 'Surface Fire-Precaution Inspection (Mine Entrances / Opencast)',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 135(6) & (7)',
        detail: 'Surface inspection of mine entrances and opencast workings for fire-precaution compliance shall be carried out and the result recorded in a bound paged book.',
        form: 'Bound Paged Book',
        frequency: 'Once at least in every 7 days',
        authority: 'Maintained at Mine',
        signing: 'Competent Person',
        mode: 'Maintain at Site',
        remarks: '',
      },
      {
        id: 'CMR-16',
        title: 'Explosive Storage Licence Copy',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 184(4)',
        detail: 'A true copy of the licence for explosive storage granted by the Licensing Authority shall be kept at the mine office.',
        form: 'Licence Copy',
        frequency: 'Continuous; produce on inspection',
        authority: 'Mine Office',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintain at Site / Produce on Inspection',
        remarks: '',
      },
      {
        id: 'CMR-17',
        title: 'Shot-Firer\'s Shift-End Record',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 206(b)',
        detail: 'The shot-firer shall record at the end of every shift the quantity of explosives taken, used and returned, places and number of shots fired, and misfires, in a bound paged book.',
        form: 'Bound Paged Book',
        frequency: 'At end of every shift',
        authority: 'Maintained at Mine',
        signing: 'Shot-Firer',
        mode: 'Maintain at Site',
        remarks: 'Distinct from the post-firing inspection record (Rec. REC-19, Reg. 203).',
      },
      {
        id: 'CMR-18',
        title: 'Misfire Report',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 204(10)(b) & (c)',
        detail: 'Every misfire (suspected or actual), whether relieved or not, and the action taken shall be recorded in a bound paged book before the shot-firer leaves the mine.',
        form: 'Bound Paged Book',
        frequency: 'Before leaving mine at end of shift',
        authority: 'Maintained at Mine',
        signing: 'Shot-Firer',
        mode: 'Maintain at Site',
        remarks: '',
      },
      {
        id: 'CMR-19',
        title: 'Standing Orders for Use of Explosives (Opencast Shot-Holes)',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 192(7)',
        detail: 'Standing orders for the use of two types of explosives in opencast mine shot-holes shall be submitted to the Regional Inspector.',
        form: 'Standing Orders',
        frequency: 'Before use / as required',
        authority: 'Regional Inspector',
        signing: 'Manager',
        mode: 'Physical',
        remarks: '',
      },
      {
        id: 'CMR-20',
        title: 'Surface Fence Examination Record',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 237(2)',
        detail: 'Every surface fence shall be examined once in every 7 days and the result recorded in a bound paged book.',
        form: 'Bound Paged Book',
        frequency: 'Once at least in every 7 days',
        authority: 'Maintained at Mine',
        signing: 'Competent Person',
        mode: 'Maintain at Site',
        remarks: '',
      },
      {
        id: 'CMR-21',
        title: 'Airborne Respirable Dust Measurement Record (CMR)',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 143(3)',
        detail: 'All results of airborne respirable dust measurements and related particulars shall be recorded within 14 days of sample collection in a bound paged book, countersigned by the manager within 24 hours.',
        form: 'Bound Paged Book',
        frequency: 'Within 14 days of collection of samples',
        authority: 'Manager',
        signing: 'Manager',
        mode: 'Mine Office Record',
        remarks: 'CMR counterpart of the OSH Rules 2026 dust record (Rec. 48, Rule 135(8)).',
      },
      {
        id: 'CMR-22',
        title: 'Daily Record of Coal Dust Cleaning / Stone Dusting',
        act: 'Mines Act, 1952 r/w Coal Mines Regulations, 2017',
        rule: 'Reg. 144(7)',
        detail: 'A daily record of areas cleaned of coal dust and areas treated with incombustible dust or water, and the amount of incombustible dust used, shall be maintained in a bound paged book, signed by the dust in-charge and countersigned by the manager/ventilation officer.',
        form: 'Bound Paged Book',
        frequency: 'Daily',
        authority: 'Mine Office',
        signing: 'Dust In-Charge (countersigned by Manager / Ventilation Officer)',
        mode: 'Mine Office Record',
        remarks: '',
      },
    ],
  },
  {
    title: 'SECTION 16: MINES RULES 1955 — WORKMEN\'S INSPECTORS & SAFETY COMMITTEE',
    color: 'bg-red-900',
    records: [
   
    
            {
        id: 'MR-3',
        title: 'Constitution of Safety Committee',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.29T)',
        rule: 'Safety Committee provisions (Rule 15 family — confirm exact sub-rule against bare Rules text)',
        detail: 'A Safety Committee continues to be mandatory under the consolidated OSH Rules 2026 framework, with the Committee\'s tenure fixed at 3 years. Threshold/composition should be re-verified against the notified Rules rather than assumed to equal the old 100-person Mines Rules 1955 threshold.',
        form: 'Committee Constitution Order',
        frequency: 'Constituted once; tenure of 3 years, then reconstituted',
        authority: 'Chief Inspector / Inspector-cum-Facilitator',
        signing: 'Owner / Agent / Manager',
        mode: 'Mine Office Record',
        remarks: '⬆ UPGRADED reference. Confirmed via secondary legal commentary (OSH Rules 2026 notification, G.S.R. 345(E), 8-5-2026) that Committee tenure is 3 years — cross-check exact rule number in the bare Act/Rules before citing in the DGMS submission.',
      },
            {
        id: 'MR-4',
        title: 'Safety Committee Tenure & Meeting Frequency',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.29V(5))',
        rule: 'Safety Committee provisions (Rule 15 family — confirm exact sub-rule)',
        detail: 'Under the OSH Rules 2026, the Safety Committee\'s tenure is fixed at 3 years; meeting frequency should be re-verified against the notified Rules rather than assumed to remain the old 30-day minimum under Mines Rules 1955.',
        form: 'Meeting Record',
        frequency: 'Tenure: 3 years (meeting frequency to be confirmed against bare Rules)',
        authority: 'N/A — internal proceedings',
        signing: 'Manager (Chairman)',
        mode: 'Maintain at Site',
        remarks: '⬆ UPGRADED reference — 3-year tenure confirmed via secondary commentary. Meeting-frequency figure not independently verified; keep the old 30-day cadence as a safe working assumption until the exact Rule is checked.',
      },
            {
        id: 'MR-5',
        title: 'Action Taken on Safety Committee Recommendations',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.29W)',
        rule: 'Safety Committee provisions (Rule 15 family — confirm exact sub-rule)',
        detail: 'The employer is required to take action and implement the Safety Committee\'s recommendations, and communicate the action taken, within 15 days of receipt of such recommendations — this timeline is confirmed as unchanged under OSH (Central) Rules, 2026.',
        form: 'Action Taken Note',
        frequency: 'Within 15 days of recommendations',
        authority: 'Secretary, Safety Committee',
        signing: 'Owner / Agent / Manager',
        mode: 'Physical / Mine Office Record',
        remarks: '⬆ UPGRADED & CONFIRMED — the 15-day action window carries forward unchanged into OSH Rules 2026 per published legal commentary on the May 2026 notification.',
      },
      {
        id: 'MR-6',
        title: 'Mining Committee Minutes',
        act: 'Mines Rules, 1955',
        rule: 'Rule 16',
        detail: 'The Secretary of the Mining Committee shall circulate proceedings after each meeting to all members present in India and record them in a permanent minute book, signed by the Chairman.',
        form: 'Minute Book',
        frequency: 'After every committee meeting',
        authority: 'Committee Members / Chief Inspector',
        signing: 'Secretary (Inspector of Mines nominated by Chief Inspector)',
        mode: 'Mine Office Record',
        remarks: '',
      },
    ],
  },
  {
    title: 'SECTION 17: WELFARE, HEALTH & FIRST-AID (⬆ upgraded to OSH Rules 2026 Chapter VI — cross-check rule numbers)',
    color: 'bg-teal-700',
    records: [
            {
        id: 'MR-7',
        title: 'Provision of Drinking Water',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.30(1))',
        rule: 'Chapter VI — Welfare provisions (potable water; exact rule number to verify)',
        detail: 'Potable water requirements for mines are now consolidated into the single, horizontally applicable Chapter VI welfare framework of the OSH Rules 2026, replacing the sector-specific Mines Rules 1955 provision.',
        form: 'Facility / Inspection Record',
        frequency: 'Continuous / every working shift',
        authority: 'Inspector-cum-Facilitator on demand',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintain at Site',
        remarks: '⬆ UPGRADED reference — consolidation into Chapter VI confirmed via published legal commentary; exact sub-rule number not yet independently verified against the bare Rules.',
      },
            {
        id: 'MR-8',
        title: 'Cleaning & Refilling of Drinking Water Storage',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.31(1))',
        rule: 'Chapter VI — Welfare provisions (exact rule number to verify)',
        detail: 'Storage-vessel hygiene requirements for non-piped drinking water supply now fall under the consolidated Chapter VI welfare framework of the OSH Rules 2026.',
        form: 'Facility Record',
        frequency: 'Daily',
        authority: 'Inspector-cum-Facilitator on demand',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintain at Site',
        remarks: '⬆ UPGRADED reference — verify exact sub-rule number before final DGMS submission.',
      },
            {
        id: 'MR-9',
        title: 'Certificate of Fitness of Drinking Water',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.31(2))',
        rule: 'Chapter VI — Welfare provisions (exact rule number to verify)',
        detail: 'Requirement for a health-authority fitness certificate for non-public-supply drinking water sources continues under the consolidated Chapter VI welfare framework.',
        form: 'Fitness Certificate',
        frequency: 'On Inspector\'s order, with least possible delay',
        authority: 'Inspector-cum-Facilitator',
        signing: 'Owner / Agent / Manager',
        mode: 'Physical',
        remarks: '⬆ UPGRADED reference — verify exact sub-rule number before final DGMS submission.',
      },
            {
        id: 'MR-10',
        title: 'First-Aid Training Arrangements',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.40(1))',
        rule: 'Chapter VI — First-Aid & Medical Facilities (cf. Rule 54 / Annexures V–VI)',
        detail: 'Arrangements for training persons in first-aid, and provision of prescribed equipment, are now governed by the consolidated OSH Rules 2026 first-aid framework, with equipment lists set out in Annexures V and VI.',
        form: 'Training Arrangement Record',
        frequency: 'Continuous / before commencement',
        authority: 'Inspector-cum-Facilitator on demand',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintain at Site',
        remarks: '⬆ UPGRADED reference — Rule 54 and Annexures V/VI confirmed to exist for mine first-aid equipment; exact clause governing training itself still to be pinned down.',
      },
            {
        id: 'MR-11',
        title: 'Arrangements for Removal of Injured/Ill Persons',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.40(2))',
        rule: 'Chapter VI — First-Aid & Medical Facilities (cf. Rule 63, Ambulance Room provisions)',
        detail: 'Arrangements for speedy removal of seriously injured/ill persons to a dispensary or hospital continue under the consolidated OSH Rules 2026 medical-facilities framework; the ambulance-room threshold has been relaxed to 500 workers.',
        form: 'Standing Arrangement Record',
        frequency: 'Continuous',
        authority: 'Inspector-cum-Facilitator on demand',
        signing: 'Owner / Agent / Manager',
        mode: 'Mine Office Record',
        remarks: '⬆ UPGRADED & PARTLY CONFIRMED — ambulance room threshold now 500 workers (relaxed from the earlier 150-person norm) per published legal commentary; exact rule number for this specific duty still to verify.',
      },
            {
        id: 'MR-12',
        title: 'Medical Facilities Room / Dispensary',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.43(1) & (3))',
        rule: 'Rule 63(ii) — equipment for medical facilities room or dispensary (Annexure VI)',
        detail: 'The first-aid room requirement for mines employing more than 150 persons is now addressed through the OSH Rules 2026 medical facilities room / dispensary provision, with the equipment list prescribed in Annexure VI under Rule 63(ii).',
        form: 'Medical Facilities Room',
        frequency: 'Continuous',
        authority: 'Inspector-cum-Facilitator on demand',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintain at Site',
        remarks: '⬆ UPGRADED & CONFIRMED — Rule 63(ii) and Annexure VI verified from the official Rules index; re-check the applicable employee-count threshold, which may differ from the old 150-person figure.',
      },
            {
        id: 'MR-13',
        title: 'First-Aid Stations in Opencast Workings',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.44(1)(b))',
        rule: 'Rule 54(ix)(B) — equipment for first-aid station in case of mines (Annexure V)',
        detail: 'First-aid stations in opencast workings are now governed by the OSH Rules 2026 first-aid station provision for mines, with the prescribed equipment list set out in Annexure V under Rule 54(ix)(B).',
        form: 'First-Aid Station',
        frequency: 'Continuous / every working shift',
        authority: 'Inspector-cum-Facilitator on demand',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintain at Site',
        remarks: '⬆ UPGRADED & CONFIRMED — Rule 54(ix)(B) and Annexure V verified from the official Rules index. Complements the First-Aid Station Equipment Register (Rec. \'41\'); re-check the per-persons ratio, which may differ from the old 1-per-50 figure.',
      },
            {
        id: 'MR-14',
        title: 'Shelters at Opencast Workings / Workshops',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.62)',
        rule: 'Chapter VI — Welfare provisions, Shelter & Rest Room (exact rule number to verify)',
        detail: 'Shelter/rest-room requirements at opencast workings, workshops and mine entrances are now consolidated into the single Chapter VI welfare framework of the OSH Rules 2026.',
        form: 'Shelter Facility',
        frequency: 'Before commencement / continuous',
        authority: 'Inspector-cum-Facilitator on demand',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintain at Site',
        remarks: '⬆ UPGRADED reference — consolidation into Chapter VI confirmed; exact sub-rule number and employee-count threshold still to verify.',
      },
            {
        id: 'MR-15',
        title: 'Canteen',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.64(1))',
        rule: 'Chapter VI — Welfare provisions, Canteen (exact rule number to verify)',
        detail: 'Canteen thresholds and requirements — previously varying by sector and statute — are now unified under the single Chapter VI welfare framework of the OSH Rules 2026, applicable horizontally across covered establishments including mines.',
        form: 'Canteen Facility',
        frequency: 'Per revised uniform threshold (verify — no longer solely at Chief Inspector\'s direction)',
        authority: 'Inspector-cum-Facilitator',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintain at Site',
        remarks: '⬆ UPGRADED reference — the old \'more than 250 persons, on direction of Chief Inspector\' trigger from Mines Rules 1955 has been replaced by a fixed uniform threshold in Chapter VI; exact figure and rule number to verify.',
      },
            {
        id: 'MR-16',
        title: 'Appointment of Welfare Officer',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.72(1))',
        rule: 'Chapter VI — Welfare Officer provisions (exact rule number to verify)',
        detail: 'Every mine ordinarily employing 250 to 500 workers must appoint at least one Welfare Officer; an additional Welfare Officer is required for every additional 500 workers beyond 500, with one designated Chief Welfare Officer where there are two or more. The Welfare Officer should hold a degree/diploma in social work or human resource management and know the language spoken by the majority of workers.',
        form: 'Appointment Order',
        frequency: 'Threshold lowered from 500 to 250; continuous',
        authority: 'Chief Inspector / Inspector-cum-Facilitator (written notice)',
        signing: 'Owner / Agent / Manager',
        mode: 'Mine Office Record',
        remarks: '⬆ UPGRADED & CONFIRMED — threshold reduced from the earlier 500-person Mines Rules 1955 figure to 250, per the final notified OSH Rules 2026 (verified via published legal commentary).',
      },
    ],
  },
  {
    title: 'SECTION 18: WORKING HOURS, LEAVE & WAGES REGISTERS (⚠ mostly SUPERSEDED/duplicate — see cross-refs)',
    color: 'bg-green-700',
    records: [
    
            {
        id: 'MR-18',
        title: 'Register of Compensatory Days of Rest (Form F)',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.49(4))',
        rule: 'Hours/rest-day provisions (exact rule/Form number to verify)',
        detail: 'The register of compensatory rest days continues to be required, now under the consolidated OSH Rules 2026 framework with a renumbered Form (legacy Form F).',
        form: 'Form to verify (legacy: Form F)',
        frequency: 'Continuous / daily',
        authority: 'Inspector-cum-Facilitator on demand',
        signing: 'Owner / Agent / Manager',
        mode: 'Maintain at Site',
        remarks: '⬆ UPGRADED reference — no confirmed direct OSH-era duplicate elsewhere in this workbook; keep as a distinct line item until the new Form number is verified.',
      },
  
            {
        id: 'MR-20',
        title: 'Preservation of Leave Registers — SUPERSEDED, see Rec. \'43\'',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.53(2))',
        rule: 'Rules 72(4), 72(7)(ii) — General Preservation of Registers',
        detail: 'The old 2-year minimum preservation period for Forms G & H is superseded by the OSH Rules 2026 general preservation requirement of 5 calendar years from the date of last entry, applicable to all statutory registers (see Rec. \'43\').',
        form: 'Superseded — see Rec. \'43\'',
        frequency: 'Preservation period extended: 2 years → 5 years',
        authority: 'N/A',
        signing: 'N/A',
        mode: 'Duplicate — retained for audit trail only',
        remarks: '⚠ SUPERSEDED — preservation period has increased from 2 years to 5 years under the OSH Rules 2026 general preservation rule.',
      },
            {
        id: 'MR-21',
        title: 'Register of Overtime Wages — SUPERSEDED, see Rec. \'11\'',
        act: 'OSH (Central) Rules, 2026 (supersedes Mines Rules 1955, r.59, Form I)',
        rule: 'Rule 72(1)(iii), FORM XV',
        detail: 'This Mines Rules 1955 requirement (Form I) is fully superseded by the Register of Wages, Overtime and Deductions already captured at Rec. \'11\' (OSH Rules 2026, Rule 72(1)(iii), FORM XV).',
        form: 'Superseded — see FORM XV (Rec. \'11\')',
        frequency: 'N/A',
        authority: 'N/A',
        signing: 'N/A',
        mode: 'Duplicate — retained for audit trail only',
        remarks: '⚠ DUPLICATE/SUPERSEDED. Do not maintain separately from Rec. \'11\'.',
      },

 
    ],
  },
  {
    title: 'SECTION 20: CER 2023 — ELECTRICAL INSTALLATION, TESTING & SUPERVISION RECORDS',
    color: 'bg-purple-700',
    records: [
      {
        id: 'CER-1',
        title: 'Supply-Point Test Result Record',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 33(4) & Schedule III',
        detail: 'The supplier shall maintain a record of test results at each supply point to a consumer, in the forms prescribed in Schedule III.',
        form: 'Schedule III Forms',
        frequency: 'At each supply commencement / reconnection',
        authority: 'Retained by Supplier (available to Electrical Inspector)',
        signing: 'Supplier / Licensed Electrical Contractor',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-2',
        title: 'Alteration of Overhead Line / Underground Cable on Deposit',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 65(7)',
        detail: 'The supplier/owner shall alter the overhead line or underground cable within 2 months of receipt of deposit (or an extended period permitted in writing by the Electrical Inspector) so that Regulations 60, 62, 63 and 79 are not contravened.',
        form: 'Compliance Record',
        frequency: 'Within 2 months of receipt of deposit',
        authority: 'Electrical Inspector',
        signing: 'Supplier / Owner',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-3',
        title: 'Electrical Installation Plan & Single Line Diagram',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 99(1), (2) & (4)',
        detail: 'A correct plan and Single Line Diagram of electrical installations (from point of supply) shall be maintained in the mine/oil-field office, showing all fixed apparatus and conductors; examined, corrected as necessary, and examination dates recorded.',
        form: 'Plan / Single Line Diagram',
        frequency: 'Ongoing; corrected as needed',
        authority: 'Electrical Inspector / Inspector of Mines (on demand)',
        signing: 'Manager / Owner of Mine or Wells',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-4',
        title: 'Appointment of Electrical Supervisor(s)',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 117(1)',
        detail: 'The owner/agent/manager shall appoint electrical supervisor(s) in writing; the number on duty shall be as per DGMS guidelines or Electrical Inspector\'s direction.',
        form: 'Appointment Letter',
        frequency: 'Before commencement; ongoing',
        authority: 'Electrical Inspector of Mines',
        signing: 'Owner / Agent / Manager of Mine or Oil-field',
        mode: 'Offline / Both',
        remarks: '',
      },
      {
        id: 'CER-5',
        title: 'Electrical Supervisor\'s Log-Book (Schedule XI)',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 117(9) & Schedule XI',
        detail: 'The electrical supervisor shall maintain a log-book of daily log sheets (Schedule XI format), recording test results, defects, accidents, disconnection/reconnection of supply and examination of earth fault detectors.',
        form: 'Schedule XI Log-Book',
        frequency: 'Daily',
        authority: 'Electrical Inspector of Mines (on demand)',
        signing: 'Electrical Supervisor / Substitute Electrical Supervisor',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-6',
        title: 'Switchgear & Protective Relay Operation Register',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 103(2)',
        detail: 'Operation of switchgear and protective relays shall be recorded daily in a register (also in electronic form) at the generating station, substation or switch station.',
        form: 'Register (Physical/Electronic)',
        frequency: 'Daily',
        authority: 'Electrical Inspector of Mines (on demand)',
        signing: 'Owner / Manager of Mine or Oil-field',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-7',
        title: 'Switchgear & Protective System Calibration/Testing Record',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 103(3) & Proviso',
        detail: 'Effectiveness of switchgear and protective systems shall be checked by calibration and testing at least once a year; results recorded in a separate register. Numerical relays tested per OEM guidelines at least annually.',
        form: 'Register (Physical/Electronic)',
        frequency: 'At least once a year',
        authority: 'Electrical Inspector of Mines (on demand)',
        signing: 'Owner / Electrical Supervisor',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-8',
        title: 'Apparatus, Cable & Supply Line Maintenance Record (>650 V)',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 48(6)',
        detail: 'All apparatus, cables and supply lines exceeding 650 V shall be maintained in healthy condition; records of all tests, trippings, maintenance works and repairs shall be kept for comparison with past records.',
        form: 'Maintenance Record',
        frequency: 'Ongoing',
        authority: 'Electrical Inspector (on demand)',
        signing: 'Owner of Installation',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-9',
        title: 'Earthing System Test Record (>650 V)',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 50(8)',
        detail: 'Earthing systems of supplier and consumer (>650 V) shall be tested for resistance to earth on a dry day during dry season at least once a year; records maintained and produced before the Electrical Inspector.',
        form: 'Test Record',
        frequency: 'At least once a year',
        authority: 'Electrical Inspector (on demand)',
        signing: 'Supplier / Consumer / Owner',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-10',
        title: 'Earthing System Test Record (≤650 V)',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 43(x) & (xi)',
        detail: 'Earthing systems (≤650 V) belonging to the supplier shall be tested for resistance on a dry day during dry season at least once a year; test records kept for not less than 2 years.',
        form: 'Test Record',
        frequency: 'At least once a year; records retained for 2 years',
        authority: 'Electrical Inspector (on demand)',
        signing: 'Supplier',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-11',
        title: 'Register of Trained Electrical Personnel',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 118(1), (2) & (3)',
        detail: 'Persons engaged for operation/maintenance of electrical installations shall undergo type training per DGMS syllabus, with refresher training every 2 years; a register of trained persons, with due dates for refresher training, shall be maintained.',
        form: 'Register (Physical/Electronic)',
        frequency: 'Every 2 years (refresher); ongoing register',
        authority: 'Electrical Inspector of Mines',
        signing: 'Owner / Manager / Agent of Mine; Owner / Agent of Wells',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-12',
        title: 'EV Charging Station Inspection & Test Records',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 128(1)–(4)',
        detail: 'The owner of a charging station shall keep records of design, construction, labelling, relevant test certificates and results of every inspection/testing/periodic assessment, in hard or electronic form, for at least 7 years.',
        form: 'Records (Physical/Electronic)',
        frequency: 'Ongoing; retained for at least 7 years',
        authority: 'Officials during inspection',
        signing: 'Owner of EV Charging Station',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-13',
        title: 'Licensed Electrical Contractor Authorisation',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 31(1)',
        detail: 'No person shall carry out electrical installation work (including additions, alterations, repairs) except through a State-licensed electrical contractor under supervision of a competent certificate-holder and a permit-holder.',
        form: 'Contractor Licence / Permit',
        frequency: 'Before commencement of work',
        authority: 'Electrical Inspector / State Government',
        signing: 'Licensed Electrical Contractor / Permit-holder',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'CER-14',
        title: 'GIS Installation Monitoring (Partial Discharge / SF6 Leakage)',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 134(3) & (4)',
        detail: 'GIS installations of 220 kV and above shall be provided with a partial discharge monitoring system; SF6 gas leakage rate from any compartment shall not exceed limits in relevant standards.',
        form: 'Monitoring Record',
        frequency: 'Ongoing monitoring',
        authority: 'Electrical Inspector (on demand)',
        signing: 'Owner of GIS Installation',
        mode: 'Both',
        remarks: '',
      },
      {
        id: 'CER-15',
        title: 'Site Test Record for New/Reconnected Equipment (>650 V)',
        act: '(CER), 2023 - Electricity',
        rule: 'Regulation 48(2) & (3)',
        detail: 'No new apparatus, cable or supply line >650 V shall be commissioned without site tests as per relevant standards; equipment disconnected for 6 months or more shall not be reconnected without site tests.',
        form: 'Site Test Record',
        frequency: 'Before commissioning / before reconnection',
        authority: 'Electrical Inspector (approval / on demand)',
        signing: 'Owner of Electrical Installation',
        mode: 'Both',
        remarks: '',
      },
    ],
  },
  {
    title: 'SECTION 21: EXPLOSIVES RULES 2008 — LICENSING & CERTIFICATION',
    color: 'bg-rose-700',
    records: [
      {
        id: 'EXR-1',
        title: 'Explosives Licence',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 7 r/w Rule 8',
        detail: 'A licence shall be obtained before manufacture, import, export, transport, possession for sale, or use of any explosive.',
        form: 'Licence',
        frequency: 'Before commencement of activity',
        authority: 'Chief Controller / Controller / District Magistrate (Schedule IV Part 1)',
        signing: 'Occupier / Applicant',
        mode: 'Offline (PESO portal)',
        remarks: '',
      },
      {
        id: 'EXR-2',
        title: 'Shot Firer\'s Certificate (Form LE-10)',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 107(5); Rule 98(1)',
        detail: 'A Shot Firer\'s Certificate (Form LE-10) shall be obtained for blasting operations outside Mines Act areas. Valid 5 years; renewed by revalidation.',
        form: 'Form LE-10',
        frequency: 'Before commencement of blasting; renewal every 5 years',
        authority: 'Controller of Explosives',
        signing: 'Applicant / Shot Firer',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-3',
        title: 'Foreman\'s Certificate (Form LE-11)',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 107(6)',
        detail: 'A Foreman\'s Certificate (Form LE-11) shall be obtained for supervision of manufacture of fireworks or safety fuse. Valid 5 years; renewed by revalidation.',
        form: 'Form LE-11',
        frequency: 'Before commencement of supervisory role; renewal every 5 years',
        authority: 'Controller of Explosives',
        signing: 'Applicant / Foreman',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-4',
        title: 'Road Van / Compressor-Mounted Transport Licence',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 61(1)(3)',
        detail: 'A licence for road van or compressor-mounted motor truck/tractor shall be obtained before transporting explosives; antecedents of drivers/cleaners verified with local police and re-verified annually.',
        form: 'Transport Licence',
        frequency: 'Before commencement of transport; annual re-verification',
        authority: 'Controller of Explosives (licence); Local Police (verification)',
        signing: 'Road Van Licensee',
        mode: 'Offline',
        remarks: '',
      },
    ],
  },
  {
    title: 'SECTION 22: EXPLOSIVES RULES 2008 — STOCK, TRANSACTION & TRAINING REGISTERS',
    color: 'bg-rose-800',
    records: [
      {
        id: 'EXR-5',
        title: 'Manufacture Stock Register (Form RE-2)',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 24(1)(2); SET-I Cond. 16; SET-II Cond. 11; SET-V Cond. 12',
        detail: 'A stock register (Form RE-2) of all explosives manufactured shall be maintained, page-numbered and certified, and exhibited to inspecting officers on demand.',
        form: 'Form RE-2',
        frequency: 'Continuous; produce on demand',
        authority: 'Maintained at licensed premises; produced under Rule 128',
        signing: 'Licensee / Occupier',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-6',
        title: 'Receipt / Sale / Storage Stock Register (Form RE-3 / RE-4)',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 24(1)(2); SET-VII Cond. 10; SET-VIII Cond. 11',
        detail: 'A stock register (Form RE-3 or RE-4) of all explosives received, sold or stored in the magazine shall be maintained, page-numbered, and exhibited to inspecting officers on demand.',
        form: 'Form RE-3 / RE-4',
        frequency: 'Continuous; produce on demand',
        authority: 'Maintained at licensed premises; produced under Rule 128',
        signing: 'Licensee / Magazine Holder',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-7',
        title: 'Road Van Transaction Record (Form RE-5)',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 61(2); LE-7 Cond. 13',
        detail: 'A transaction record (Form RE-5) for the road van licensee showing all explosives transported shall be maintained and produced on demand to the inspecting officer.',
        form: 'Form RE-5',
        frequency: 'Continuous; produce on demand',
        authority: 'Maintained in road van / licensed premises; produced under Rule 128',
        signing: 'Road Van Licensee',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-8',
        title: 'Daily Stock & Usage Record — Gunpowder / Adirvettus',
        act: 'Explosives Rules, 2008',
        rule: 'LE-2 Condition 16',
        detail: 'A daily stock and usage record for gunpowder and adirvettus manufactured and fired (Form RE-2/RE-4) shall be maintained and produced to the inspecting authority.',
        form: 'Form RE-2 / RE-4',
        frequency: 'Continuous; produce on demand',
        authority: 'Maintained at licensed premises; produced to District Magistrate / Controller',
        signing: 'Licensee / Occupier',
        mode: 'Offline',
        remarks: '',
      },
   
      {
        id: 'EXR-10',
        title: 'Shot Firer\'s Daily Explosives Record',
        act: 'Explosives Rules, 2008',
        rule: 'LE-10 Condition 11',
        detail: 'The Shot Firer shall maintain a daily record of all explosives received, fired or disposed of; records retained for five years.',
        form: 'Daily Record',
        frequency: 'Daily; retain for 5 years',
        authority: 'Maintained by shot firer; produced to Controller on demand',
        signing: 'Shot Firer',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-11',
        title: 'Safety Training & Plant/Machinery Servicing Records',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 35; Rule 37(5)',
        detail: 'Records of all safety training imparted to manufacturing personnel shall be maintained; records of plant/machinery servicing, maintenance and major repairs shall be preserved till next replacement.',
        form: 'Training / Maintenance Record',
        frequency: 'Continuous; major repair records retained till next replacement',
        authority: 'Maintained at licensed premises; produced to inspecting authority',
        signing: 'Licensee / Manager',
        mode: 'Offline',
        remarks: '',
      },
  
      {
        id: 'EXR-13',
        title: 'Accident Record (Licensed Premises)',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 25',
        detail: 'Records of all accidents occurring within licensed premises shall be maintained and made available to the inspecting authority.',
        form: 'Accident Record',
        frequency: 'Continuous; immediate update on accident',
        authority: 'Maintained at licensed premises; made available to inspecting authority',
        signing: 'Licensee / Occupier',
        mode: 'Offline',
        remarks: '',
      },

      {
        id: 'EXR-15',
        title: 'Fireworks Display Stock Record',
        act: 'Explosives Rules, 2008',
        rule: 'LE-6 Condition 20',
        detail: 'Records of all fireworks received, used and stock on hand shall be maintained by the public display licensee, following local bye-laws.',
        form: 'Stock Record',
        frequency: 'Continuous; during period of licence',
        authority: 'Maintained at display premises; produced to District Magistrate on demand',
        signing: 'Display Licensee',
        mode: 'Offline',
        remarks: '',
      },
    ],
  },
  {
    title: 'SECTION 23: EXPLOSIVES RULES 2008 — TRANSPORT, DISTANCE & SECURITY SAFEGUARDS',
    color: 'bg-rose-900',
    records: [
      {
        id: 'EXR-16',
        title: 'Transport Documents Carried by Driver/Attendant',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 50(1)',
        detail: 'The driver and attendant shall carry prescribed documents during transport: copy of indent (Form RE-11), transport pass (Form RE-12), road van licence copy, and original bill of explosives.',
        form: 'Form RE-11 / RE-12 + Licence Copy',
        frequency: 'Throughout duration of transport',
        authority: 'Produced on demand to authority under Rule 128',
        signing: 'Road Van Operator / Driver',
        mode: 'Offline',
        remarks: '',
      },
  
      {
        id: 'EXR-18',
        title: 'Convoy Spacing Record (Road Van Transport)',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 67(8)',
        detail: 'A minimum convoy spacing of 300 metres between each vehicle shall be maintained when two or more road vans transport explosives together.',
        form: 'Convoy Compliance Record',
        frequency: 'Throughout duration of convoy transport',
        authority: 'Maintained by driver; observed during transport',
        signing: 'Road Van Driver / Licensee',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-19',
        title: 'Safety Distance & Magazine Perimeter Maintenance',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 86(1)(2)(3); Schedule VIII; SET-VII Cond. 21; SET-VIII Cond. 19',
        detail: 'Prescribed safety distances between the licensed factory/magazine and protected works (Schedule VIII and licence conditions) shall be maintained; a 15-metre zone around the magazine shall be kept clear of dry grass, bush or flammable materials at all times.',
        form: 'Distance / Perimeter Record',
        frequency: 'At all times; continuous obligation',
        authority: 'Maintained at licensed premises; verified by inspecting authority',
        signing: 'Licensee / Occupier',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-20',
        title: 'Lightning Conductor Resistance Test',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 12(2); SET-VIII Condition 9',
        detail: 'Lightning conductor resistance of every magazine or process building shall be tested at least once every year by a qualified electrical engineer or State Government certified person; the test certificate shall be displayed prominently.',
        form: 'Test Certificate',
        frequency: 'At least once every year; certificate displayed continuously',
        authority: 'Maintained at licensed premises; produced to inspecting authority',
        signing: 'Licensee / Qualified Electrical Engineer',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-21',
        title: 'Security Guard Arrangements for Factory/Magazine',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 21(1)(2)(5)',
        detail: 'Security guards of strength determined by the District Magistrate shall be provided for custody of the factory or magazine (other than fireworks); guard shelter shall be located not less than 30 metres from the magazine.',
        form: 'Security Arrangement Record',
        frequency: 'At all times',
        authority: 'Compliance reported to District Magistrate / licensing authority during inspection',
        signing: 'Licensee / Occupier',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-22',
        title: 'Shot Firer\'s Certificate Carried During Blasting',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 98(1)(2)',
        detail: 'Blasting operations outside mines shall be carried out only by a shot firer holding a valid certificate issued by the Controller; the shot firer shall carry a copy of the certificate during blasting operations.',
        form: 'Certificate Copy',
        frequency: 'At all times during blasting operations',
        authority: 'Certificate produced on demand to authority under Rule 128',
        signing: 'Shot Firer',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-23',
        title: 'Public Warning Before/After Shot Firing',
        act: 'Explosives Rules, 2008',
        rule: 'SET-VII Conditions 31, 32, 33',
        detail: 'Adequate warning shall be given to the public using an efficient signal system and red flags before commencing shot firing; the public shall be warned not to approach the blasting site for at least 30 minutes after the explosion.',
        form: 'Warning Compliance Record',
        frequency: 'Before and after each blasting event',
        authority: 'Compliance ensured by licensee; reported to inspecting authority',
        signing: 'Licensee / Shot Firer',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-24',
        title: 'Return of Unused Explosives to Storage',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 90(4)',
        detail: 'Explosives left over after a day\'s work shall be returned to licensed storage premises; only the required quantity shall be conveyed from licensed storage to the blasting site.',
        form: 'Return / Movement Record',
        frequency: 'At end of each working day / blasting session',
        authority: 'Licensed storage premises; records maintained by licensee',
        signing: 'Shot Firer / Licensee',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-25',
        title: 'Access & Facilities for Inspecting Officer',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 125(1); SET-I Cond. 19; SET-VI Cond. 11; SET-VIII Cond. 24',
        detail: 'Free access shall be allowed to the inspecting officer at all reasonable times, with all facilities to ascertain compliance with the Act and Rules; licence/authenticated copy produced on demand.',
        form: 'Access / Compliance Record',
        frequency: 'At all times on demand',
        authority: 'Compliance demonstrated to authority under Rule 128',
        signing: 'Licensee / Occupier',
        mode: 'Offline',
        remarks: '',
      },
      {
        id: 'EXR-26',
        title: 'Half-Yearly Magazine Inspection by Magistrate/Police',
        act: 'Explosives Rules, 2008',
        rule: 'Rule 128(4)',
        detail: 'Executive Magistrates and Police Officers shall inspect magazines within their jurisdiction at least once in 6 months, assess security guard adequacy, and submit an inspection report to the District Magistrate / SP / Commissioner of Police and licensing authority.',
        form: 'Inspection Report',
        frequency: 'At least once in 6 months',
        authority: 'District Magistrate; Superintendent / Commissioner of Police; Licensing Authority',
        signing: 'Executive Magistrate / Police Officer (Sub-Inspector and above)',
        mode: 'Offline',
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