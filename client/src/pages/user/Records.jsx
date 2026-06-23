import { useState } from 'react';

const sections = [
  {
    title: 'SECTION 1: MANAGEMENT & INSPECTION RECORDS',
    color: 'bg-blue-600',
    records: [
      {
        id: '1',
        title: "Manager's Diary / Inspection Book",
        act: 'CMR 2026',
        rule: 'Regulation 35(2)',
        detail: 'The manager shall maintain, in a bound paged book kept for the purpose or in retrievable and non-editable electronic form, a diary; and shall record therein the result of each of his inspections and also the action taken by manager to rectify the defects noticed, if any.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Daily (after each inspection)',
        authority: 'Kept at Mine Office',
        signing: 'Manager',
        mode: 'Physical / Electronic',
        remarks: 'Manager to visit mine daily; opencast mines — personal daily supervision',
      },
      {
        id: '2',
        title: "Assistant Manager's Inspection Book",
        act: 'CMR 2026',
        rule: 'Regulation 36(5)',
        detail: 'The assistant manager shall, in a bound paged book kept for the purpose or in retrievable and non-editable electronic form, record the result of each of his or her inspections and also the action taken by him or her to rectify the defects noticed, if any.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Daily (each working day)',
        authority: 'Kept at Mine Office',
        signing: 'Assistant Manager',
        mode: 'Physical / Electronic',
        remarks: 'Countersigned by Manager',
      },
      {
        id: '3',
        title: "Mining Supervisor's General Shift Report",
        act: 'CMR 2026',
        rule: 'Regulation 121(7)',
        detail: 'At the end of shift, he or she shall record in a bound paged book or in retrievable and non-editable electronic form a general report on the performance of all duties during the shift, including anything concerning the proper working of the mine and the safety and discipline of persons employed.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'End of every shift',
        authority: 'Kept at Mine Office; examined by Manager',
        signing: 'Mining Supervisor',
        mode: 'Physical / Electronic',
        remarks: 'Opencast specific duties include benches, haul roads, dumps (Reg 38(6))',
      },
      {
        id: '4',
        title: "Mechanical Supervisor's Shift Report",
        act: 'CMR 2026',
        rule: 'Regulation 39(e)',
        detail: 'At the end of his or her shift, record in a bound paged book or in retrievable and non-editable electronic form a report on all activities concerning proper and safe working of plant and machinery under his or her charge.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'End of every shift',
        authority: 'Kept at Mine Office',
        signing: 'Mechanical Supervisor',
        mode: 'Physical / Electronic',
        remarks: 'Covers all HEMM and surface machinery',
      },
      {
        id: '5',
        title: "Assistant Mining Supervisor's Examination/Shift Report (Opencast)",
        act: 'CMR 2026',
        rule: 'Regulation 121(8)',
        detail: 'The assistant mining supervisor shall, at the completion of the shift, record without delay the result of inspections in a bound paged book. In opencast workings, shall pay attention to overhangs, undercuts, presence of loose stone, materials or trees within 3 meters of edges, foot paths, fencing on top of quarry and benches, use of PPE and condition of dumps.',
        form: 'Bound Paged Book / Specified Format',
        frequency: 'At end of every shift; inspection also within 2 hrs before commencement and once every 4 hrs',
        authority: 'Kept at Mine Office; examined by Manager',
        signing: 'Assistant Mining Supervisor',
        mode: 'Physical / Electronic',
        remarks: 'Must include number of persons, instructions given, date/time, signature',
      },
      {
        id: '6',
        title: "Manager's Accident Investigation Report",
        act: 'CMR 2026',
        rule: 'Regulation 35(10)',
        detail: 'When there occurs in a mine any accident resulting in bodily injury or loss of life or any dangerous occurrence, the manager shall inspect the site and have an enquiry made. The result of every such enquiry along with a plan and sections and photographs shall be recorded in a bound paged book or in retrievable and non-editable electronic form.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Within 15 days of accident; copy to CIFF and RIFF',
        authority: 'Chief Inspector-cum-Facilitator; Regional Inspector-cum-Facilitator',
        signing: 'Manager',
        mode: 'Physical / Electronic',
        remarks: 'Sketch required before disturbance of accident site (Reg 241)',
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
        remarks: 'Safety officer for opencast — holds First Class Manager\'s Certificate (Coal) or restricted certificate',
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
      {
        id: '8',
        title: "Requisition Book (Manager's supply requests to Owner/Agent)",
        act: 'CMR 2026',
        rule: 'Regulation 35(4)',
        detail: 'If manager is not the owner or agent of the mine, he shall report in writing to the owner or agent when anything is required for the safety of the mine. A copy of every such report shall be recorded in a bound paged book or in retrievable and non-editable electronic form.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'As and when required',
        authority: 'Kept at Mine Office; forwarded to Owner/Agent',
        signing: 'Manager',
        mode: 'Physical / Electronic',
        remarks: 'Owner/Agent to reply within 3 days of receipt',
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
      {
        id: '13',
        title: 'Manpower Distribution Plan (Sketch)',
        act: 'CMR 2026',
        rule: 'Regulation 237',
        detail: 'During the first week of every month, a survey shall be made of the number of persons normally employed in every district and other places in the mine and a sketch plan showing the results of such a manpower survey, signed and dated by the manager shall be kept in the office of the mine and a copy kept with the attendance clerk.',
        form: 'Sketch Plan',
        frequency: 'First week of every month',
        authority: 'Mine Office; copy with Attendance Clerk',
        signing: 'Manager',
        mode: 'Physical / Electronic',
        remarks: 'Relevant for opencast — shows distribution across benches/districts',
      },
    ],
  },
  {
    title: 'SECTION 3: PLANS & SECTIONS (OPENCAST SPECIFIC)',
    color: 'bg-orange-600',
    records: [
      {
        id: '14',
        title: 'Surface Plan (with opencast bench levels, haul roads)',
        act: 'CMR 2026',
        rule: 'Regulations 56, 57(1)(a), 57(5)',
        detail: 'The owner, agent or manager of every mine shall keep a surface plan showing every surface feature within boundaries and up to 200 m outside, including opencast workings. The plan shall also show spot levels on the floor of every bench and haul roads at intervals not exceeding fifty meters.',
        form: 'Mine Plan',
        frequency: 'Updated at intervals not exceeding 3 months',
        authority: 'Mine Office (not to be removed without RIFF approval)',
        signing: 'Surveyor (signed); Manager (countersigned)',
        mode: 'Physical (inked) / Digital',
        remarks: 'Scale 2000:1 or 1000:1; surface contour lines at ≤5 m vertical intervals',
      },
      {
        id: '15',
        title: 'Vertical Mine Sections (Opencast — Longitudinal & Transverse)',
        act: 'CMR 2026',
        rule: 'Regulation 57(1)(c) Proviso',
        detail: 'In case of a mine having opencast workings, vertical mine sections showing vertical projections of mine workings at suitable intervals not exceeding 100 m, in both longitudinal as well as transverse directions, shall be prepared and maintained irrespective of the inclination of coal seam.',
        form: 'Mine Section',
        frequency: 'Updated at intervals not exceeding 3 months',
        authority: 'Mine Office',
        signing: 'Surveyor (signed); Manager (countersigned)',
        mode: 'Physical / Digital',
        remarks: 'Mandatory for all opencast mines regardless of seam inclination',
      },
      {
        id: '16',
        title: 'Water-Danger Plan and Section',
        act: 'CMR 2026',
        rule: 'Regulation 57(1)(g)',
        detail: 'Plans and sections showing: nullah, river, lake, water pond on surface within 200 m; water-logged opencast workings on the surface; waterlogged workings belowground within 60 m; every reservoir, dam or other structure to control water inrush; highest flood level of the area.',
        form: 'Mine Plan',
        frequency: 'Updated continuously; not earlier than 3 months old',
        authority: 'Mine Office',
        signing: 'Surveyor (signed); Manager (countersigned)',
        mode: 'Physical / Digital',
        remarks: 'Flood level to be marked by permanent posts annually during rains (Reg 148)',
      },
      {
        id: '17',
        title: 'List of Plans, Sections, Instruments (Index Register)',
        act: 'CMR 2026',
        rule: 'Regulation 60(4)–(5)',
        detail: 'A list of all plans and sections maintained under these regulations; of all survey instruments with their type, specifications and identification numbers; and of all field books and other notes, shall be kept in a bound paged book or in retrievable and non-editable electronic form, and updated whenever necessary.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Updated whenever new plan/instrument added',
        authority: 'Mine Office',
        signing: 'Surveyor (signed); Manager (countersigned)',
        mode: 'Physical / Electronic',
        remarks: 'Field books and notes to be duly indexed (Reg 60(3))',
      },
      {
        id: '18',
        title: "Surveyor's Observation Book",
        act: 'CMR 2026',
        rule: 'Regulation 45(2)',
        detail: 'The surveyor shall record in a bound paged book: (a) full facts when workings have approached to about 120 m from mine boundary or disused/waterlogged workings; (b) any doubts concerning accuracy of plans; (c) any other matters relating to preparation of plans.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'As and when required',
        authority: 'Mine Office',
        signing: 'Surveyor (signed); Manager (countersigned)',
        mode: 'Physical / Electronic',
        remarks: 'Critical for opencast boundary working — Reg 114',
      },
    ],
  },
  {
    title: 'SECTION 4: SAFETY MANAGEMENT PLAN & TRANSPORT RULES',
    color: 'bg-red-600',
    records: [
      {
        id: '19',
        title: 'Safety Management Plan (SMP)',
        act: 'CMR 2026',
        rule: 'Regulation 96(3)–(5)',
        detail: 'Based on the identified hazards and risk analysis, the owner, agent and manager of every mine shall prepare a Safety Management Plan that includes organisational structure, planning, activities, responsibilities, practices, procedures, processes and resources for developing, implementing, achieving, reviewing and maintaining occupational safety, health and safe working conditions.',
        form: 'SMP Document',
        frequency: 'Reviewed every 12 months or on significant change; submitted to RIFF',
        authority: 'Mine Office; Copy to Regional Inspector-cum-Facilitator',
        signing: 'Owner (signed); Manager',
        mode: 'Physical / Electronic',
        remarks: 'Principal Hazard Management Plans (PHMPs) to be part of SMP',
      },
      {
        id: '20',
        title: 'Transport Rules',
        act: 'CMR 2026',
        rule: 'Regulation 101(1)–(3)',
        detail: 'The manager of every mine shall frame and enforce a code of transport rules with due regard to the size and capacity of transportation machinery in use and prevailing local conditions. A copy shall be submitted to the Regional Inspector-cum-Facilitator. Copies to be given to all operators, drivers and officials and posted at conspicuous places.',
        form: 'Code of Transport Rules',
        frequency: 'Framed before commencement; submitted to RIFF; updated on change',
        authority: 'Mine Office; Regional Inspector-cum-Facilitator',
        signing: 'Manager',
        mode: 'Physical (posted at mine)',
        remarks: 'Specific to opencast HEMM — dumpers, tippers, trucks',
      },
      {
        id: '21',
        title: 'Code of Practice for Each Machinery (HEMM etc.)',
        act: 'CMR 2026',
        rule: 'Regulation 102(3)(d)',
        detail: 'The manager of every mine shall, before introducing any machinery, frame and enforce a code of practice. The code shall provide for the manner in which records of examination shall be kept. A copy to always be kept in the office of the mine and at the place of operation.',
        form: 'Code of Practice Document',
        frequency: 'Framed before machinery introduction; copy at Mine Office and at machine',
        authority: 'Mine Office; Regional Inspector-cum-Facilitator',
        signing: 'Engineer (framed); Manager (approved)',
        mode: 'Physical / Electronic',
        remarks: 'Mandatory for each type of HEMM — dragline, shovel, dumper, dozer, drill',
      },
      {
        id: '22',
        title: 'Scheme of Mining (Mechanised Opencast)',
        act: 'CMR 2026',
        rule: 'Regulation 98(1)(ii)',
        detail: 'Based on scientific study, the owner, agent or manager shall prepare a detailed scheme of mining covering method of work, mechanization, pit and dump configuration, backfilling, monitoring of pit and dump slopes, haul road design and other applicable parameters.',
        form: 'Scheme of Mining',
        frequency: 'Before commencement (60 days notice); reviewed on major change',
        authority: 'Chief Inspector-cum-Facilitator; Regional Inspector-cum-Facilitator',
        signing: 'Owner (signed); Manager',
        mode: 'Physical / Electronic',
        remarks: 'Also covers dump slope monitoring; updates required on changes (Reg 98(2))',
      },
    ],
  },
  {
    title: 'SECTION 5: PLANT, MACHINERY & HEMM EXAMINATION RECORDS',
    color: 'bg-yellow-600',
    records: [
      {
        id: '23',
        title: "HEMM (Shovel/Dragline/Excavator) Operator's Inspection Book",
        act: 'CMR 2026',
        rule: 'Regulation 54(c) and (l)',
        detail: 'Every person authorised to operate heavy earth moving machineries such as dragline, shovel or excavator shall maintain a record of every inspection made at the beginning of working shift in a bound paged book or in retrievable and non-editable electronic form and shall sign every entry. The condition of the machine at end of shift shall also be entered for information of successor.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Beginning and end of every shift',
        authority: 'Kept with machine / Mine Office',
        signing: 'HEMM Operator (signed); Mechanical Supervisor',
        mode: 'Physical / Electronic',
        remarks: 'Inspection covers systems, sub-systems, protective devices per manufacturer\'s spec',
      },
      {
        id: '24',
        title: "Truck/Tipper/Dumper Operator's Inspection Book",
        act: 'CMR 2026',
        rule: 'Regulation 55(c) and (k)',
        detail: 'Every person authorised to operate trucks, tippers and dumpers shall maintain a record of every inspection made at the beginning of his shift in a bound paged book or in retrievable and non-editable electronic form. The condition of the truck, tipper or dumper at the end of the shift shall be entered for information of successor.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Beginning and end of every shift',
        authority: 'Kept with vehicle / Mine Office',
        signing: 'Truck/Dumper Operator (signed); Mechanical Supervisor',
        mode: 'Physical / Electronic',
        remarks: 'Overloading and tipping hazards specific to opencast operations',
      },
      {
        id: '25',
        title: 'Fence / Surface Structure Examination Report',
        act: 'CMR 2026',
        rule: 'Regulation 228(2)',
        detail: 'Every fence erected on the surface shall, once at least in every seven days, be examined by a competent person and a report of every such inspection shall be recorded in a bound paged book or in retrievable and non-editable electronic form, duly signed and dated by the person who made the examination.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Once in every 7 days',
        authority: 'Mine Office',
        signing: 'Competent Person (signed)',
        mode: 'Physical / Electronic',
        remarks: 'Includes fencing at top of opencast working — Reg 120; abandoned quarry fencing',
      },
      {
        id: '26',
        title: 'Spot Inspection Register (CIFF/Inspector Entries)',
        act: 'CMR 2026',
        rule: 'Regulation 109(1)–(5)',
        detail: 'If the Chief Inspector-cum-Facilitator or an Inspector-cum-Facilitator, during inspection of any mine, finds any contravention, he shall enter such contravention in the Spot Inspection Register. Owner/agent/manager to return copy with remedial action within 15 days. Register to be kept available for inspection for at least 3 years after date of last entry.',
        form: 'Form as specified by CIFF',
        frequency: 'On each DGMS inspection; kept 3 years',
        authority: 'Mine Office (available for inspection); CIFF/RIFF',
        signing: 'CIFF / Inspector-cum-Facilitator; Manager (remedial action)',
        mode: 'Physical / Electronic',
        remarks: 'Copy of entry to be displayed on mine notice board for at least 15 days',
      },
    ],
  },
  {
    title: 'SECTION 6: EXPLOSIVES & BLASTING RECORDS',
    color: 'bg-pink-600',
    records: [
      {
        id: '27',
        title: 'Magazine Explosives Issue & Receipt Register',
        act: 'CMR 2026',
        rule: 'Regulation 177(4)',
        detail: 'The person in charge of the magazine or store or premises shall maintain, in a bound paged book, a clear and accurate record of explosives issued to each competent person and a similar record of explosives returned to the magazine or store or premises.',
        form: 'Bound Paged Book',
        frequency: 'Every transaction (issue/receipt); maintained continuously',
        authority: 'Kept at Magazine / Mine Office',
        signing: 'Magazine In-Charge',
        mode: 'Physical',
        remarks: 'Explosives issued only on written requisition signed by shot-firer or authorised official',
      },
      {
        id: '28',
        title: "Shot-Firer's Shift-End Report / Explosives Usage Record",
        act: 'CMR 2026',
        rule: 'Regulation 198(b)',
        detail: 'Immediately after the end of his shift, the shot-firer shall record in a bound paged book or in retrievable and non-editable electronic form, the quantity of explosive taken, used and returned, the places where shots were fired and the number of shots fired, and misfires, if any.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'End of every shift',
        authority: 'Mine Office',
        signing: 'Shot-Firer (signed)',
        mode: 'Physical / Electronic',
        remarks: 'In opencast, shot-firer must hold Manager\'s/Mining Supervisor\'s/Asst Mining Supervisor\'s Certificate',
      },
      {
        id: '29',
        title: 'Misfire Report Book',
        act: 'CMR 2026',
        rule: 'Regulation 196(10)(b)–(c)',
        detail: 'When a misfired shot is not found or relieved, the shot-firer shall, before leaving the mine, record in a bound paged book or in retrievable and non-editable electronic form, a report on every misfire, whether suspected, and whether the shot-hole is relieved or not.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Whenever a misfire occurs; before leaving mine',
        authority: 'Mine Office',
        signing: 'Shot-Firer (signed); Mine Management informed',
        mode: 'Physical / Electronic',
        remarks: 'In opencast, misfire location to be marked with red flag (Reg 196(3))',
      },
      {
        id: '30',
        title: 'Magazine Explosives Records (CMR Reg 52)',
        act: 'CMR 2026',
        rule: 'Regulation 52(d)',
        detail: 'The magazine in-charge shall record in a bound paged book or retrievable and non-editable electronic form, the names of various competent persons and the quantity and nature of explosives issued to each of them; and similarly record the quantity and nature of explosives returned to the magazine by each such person.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Every transaction (daily)',
        authority: 'Magazine / Mine Office',
        signing: 'Magazine In-Charge (signed); Manager',
        mode: 'Physical / Electronic',
        remarks: 'Explosives License copy to be kept at Mine Office (Reg 176(4))',
      },
    ],
  },
  {
    title: 'SECTION 7: DANGER AVOIDANCE & OPENCAST SAFETY RECORDS',
    color: 'bg-red-700',
    records: [
      {
        id: '31',
        title: 'Danger/Emergency Record (Withdrawal of Persons)',
        act: 'CMR 2026',
        rule: 'Regulation 122(2)–(4)',
        detail: 'If at any time it is found by a competent person that the mine or district is dangerous, persons shall be withdrawn immediately. The competent person shall record the fact in the bound paged book or in retrievable and non-editable electronic form.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Immediately when danger occurs',
        authority: 'Mine Office; RIFF informed',
        signing: 'Competent Person (initial record); Manager (examination report)',
        mode: 'Physical / Electronic',
        remarks: 'Opencast specific: overhangs, undercuts, bench stability per Reg 121(7)',
      },
      {
        id: '32',
        title: 'Water Flood Level Record (Annual Rains Monitoring)',
        act: 'CMR 2026',
        rule: 'Regulation 141(3)',
        detail: 'Every year, during the rains, constant watch shall be kept on the flood levels on the surface of the mine. If at any time the levels cross the highest levels earlier recorded, such levels shall be marked by permanent posts along the edges of water and the new highest levels thus observed shall be recorded with date.',
        form: 'Mine Plans (marked); Field Record',
        frequency: 'Annually during monsoon; updated on Mine Plans',
        authority: 'Mine Office (on Plans); RIFF to be informed',
        signing: 'Manager / Surveyor',
        mode: 'Physical (on Plans)',
        remarks: 'Flood inrush prevention critical for opencast workings',
      },
    ],
  },
  {
    title: 'SECTION 8: FIRE, GAS & SPONTANEOUS HEATING RECORDS',
    color: 'bg-orange-700',
    records: [
      {
        id: '34',
        title: 'Spontaneous Heating/Fire Inspection Record (Opencast)',
        act: 'CMR 2026',
        rule: 'Regulation 130',
        detail: 'A competent person shall, once at least in every seven days, inspect the top of all entrances to a mine, all opencast workings for symptoms of spontaneous heating and fire. A report of every such inspection shall be recorded in a bound paged book or in retrievable and non-editable electronic form.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Once in every 7 days',
        authority: 'Mine Office',
        signing: 'Competent Person (signed); Manager (countersigned)',
        mode: 'Physical / Electronic',
        remarks: 'All herbaceous plants to be removed from opencast workings (Reg 131(3))',
      },
      {
        id: '35',
        title: 'Fire Safety Equipment Check Record (HEMM — Opencast)',
        act: 'CMR 2026',
        rule: 'Regulation 129(5) / 130',
        detail: 'Every heavy earth moving machinery (HEMM) used in opencast workings shall be provided with automatically operated fire detection and suppression system. Inspections and records as per code of practice for each machinery.',
        form: 'Code of Practice / Maintenance Log',
        frequency: 'As per code of practice / shift-wise',
        authority: 'Mine Office',
        signing: 'Competent Person / Mechanical Supervisor',
        mode: 'Physical / Electronic',
        remarks: 'Fire suppression mandatory for HEMMs in opencast (Reg 129(5))',
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
        id: '37',
        title: 'Notice/Sketch of Fatal/Serious Accident Site',
        act: 'CMR 2026',
        rule: 'Regulation 241(2)–(4)',
        detail: 'Before the place of a fatal or serious accident is disturbed, a sketch of the site illustrating the accident and all relevant details shall be prepared in duplicate. Signed by manager/assistant manager, safety officers, surveyor and workers representative. One copy to be sent to RIFF.',
        form: 'Sketch + Form specified by CIFF',
        frequency: 'Immediately after accident; particulars within 7 days',
        authority: 'Regional Inspector-cum-Facilitator; Mine Records',
        signing: 'Manager / Assistant Manager / Safety Officer / Surveyor',
        mode: 'Physical',
        remarks: 'Supported by photographs; sketch prepared even if site disturbed for safety reasons',
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
        act: 'CMR 2026 / OSH Rules 2026',
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
        remarks: 'Applies to rescue trained persons at opencast mines under CMR Reg 141–142',
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
        id: '45',
        title: "Surveyor's Bound Paged Book / Field Record Book",
        act: 'CMR 2026',
        rule: 'Regulation 45',
        detail: 'The surveyor shall record in a bound paged book or in retrievable and non-editable electronic form all matters required to be recorded under these regulations, including full facts when workings have approached to about 120 m from mine boundary or disused/waterlogged workings, any doubts concerning accuracy of plans.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'As and when required; continuously maintained',
        authority: 'Mine Office',
        signing: 'Surveyor (signed/e-signed); Manager (countersigned)',
        mode: 'Physical / Electronic',
        remarks: 'CMR Reg 45 — Surveyor\'s general obligation to maintain records in bound paged book',
      },
      {
        id: '46',
        title: 'Magazine In-Charge Records of Explosives (Receipt, Storage & Issue)',
        act: 'CMR 2026',
        rule: 'Regulation 52(d)',
        detail: 'The magazine in-charge shall maintain such records of the explosives received, stored and issued as are required under the provisions of the Code, the Explosives Act, 1884 and the rules, regulations or orders made thereunder.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Every transaction (issue/receipt); maintained continuously',
        authority: 'Magazine / Mine Office',
        signing: 'Magazine In-Charge',
        mode: 'Physical / Electronic',
        remarks: 'Reg 52(a)–(b): Magazine in-charge responsible for proper receipt, storage and issue of explosives',
      },
      {
        id: '47',
        title: 'Post-Fire / Spontaneous Heating Examination Report',
        act: 'CMR 2026',
        rule: 'Regulation 135',
        detail: 'No person other than those required for dealing with or sealing off the fire or heating shall be admitted in the mine until the fire or heating has been extinguished or effectively sealed off and an examination has been made by the manager or by the assistant manager and the mine has been declared safe.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'After every fire or spontaneous heating incident; before readmission of persons',
        authority: 'Mine Office',
        signing: 'Manager / Assistant Manager',
        mode: 'Physical / Electronic',
        remarks: 'CMR Reg 135 — Precautions after fire; persons not to be readmitted until mine declared safe',
      },
      {
        id: '48',
        title: 'Airborne Respirable Dust Measurement Record',
        act: 'CMR 2026',
        rule: 'Regulation 135(8)',
        detail: 'All results of measurements of airborne respirable dust and all other relevant particulars shall be systematically recorded within fourteen days of the date of collection of samples, in a bound paged book or in retrievable and non-editable electronic form and every entry shall be countersigned and dated by the manager within twenty-four hours.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Recorded within 14 days of sample collection; manager to countersign each entry within 24 hours',
        authority: 'Mine Office',
        signing: 'Sampling In-Charge (entry); Manager (countersigned within 24 hrs)',
        mode: 'Physical / Electronic',
        remarks: 'Reg 135(13)(h) — Dust prevention/suppression device inspection results also recorded in this same register',
      },
      {
        id: '49',
        title: 'Dust Prevention / Suppression Device Inspection & Test Record',
        act: 'CMR 2026',
        rule: 'Regulation 135(13)(h)',
        detail: 'Every device used for the prevention and suppression of dust produced by any machinery, equipment or process as also for the filtering of the exhausted air and every dust respirator shall be inspected once at least in every seven days and shall be thoroughly examined and tested at least once in every month.',
        form: 'Bound Paged Book / Electronic (same register as Reg 135(8))',
        frequency: 'Inspection: Once in every 7 days; Thorough examination and test: Once in every month',
        authority: 'Mine Office',
        signing: 'Competent Person (signed)',
        mode: 'Physical / Electronic',
        remarks: 'Results recorded in the Airborne Respirable Dust Measurement register maintained under Reg 135(8)',
      },
      {
        id: '50',
        title: 'Dust Sample Analysis Result Book',
        act: 'CMR 2026',
        rule: 'Regulation 135(17)',
        detail: 'Within seven days of taking of each sample, it shall be sent for analysis and the result of such analysis, immediately on its receipt, shall be recorded in a bound-paged book or in retrievable and non-editable electronic form and every entry shall be signed and dated by the sampling in-charge and countersigned and dated by the manager.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Sample sent within 7 days of collection; result recorded immediately on receipt',
        authority: 'Mine Office',
        signing: 'Sampling In-Charge (signed/e-signed); Manager (countersigned)',
        mode: 'Physical / Electronic',
        remarks: 'Separate book from Reg 135(8) dust measurement register — specifically for analysis results from laboratory',
      },
      {
        id: '51',
        title: 'Fence / Tank / Reservoir Examination Report (Surface — Opencast)',
        act: 'CMR 2026',
        rule: 'Regulation 228(2)',
        detail: 'Every fence erected on the surface shall, once at least in every seven days, be examined by a competent person and a report of every such inspection shall be recorded in a bound paged book or in retrievable and non-editable electronic form, duly signed and dated by the person who made the examination.',
        form: 'Bound Paged Book / Electronic',
        frequency: 'Once in every 7 days',
        authority: 'Mine Office',
        signing: 'Competent Person (signed/e-signed and dated)',
        mode: 'Physical / Electronic',
        remarks: 'Reg 228(1): Every tank, reservoir or dangerous place formed as result of mining operations to be securely fenced',
      },
      {
        id: '52',
        title: 'Noise Mapping & Personal Noise Dosimetry Records',
        act: 'CMR 2026',
        rule: 'Regulation 230(12)',
        detail: 'The Owner, agent and manager shall ensure that area noise mapping is conducted in working areas and personal noise dosimetry for work persons exposed to noise level exceeding 85 dB(A). Areas where noise level exceeds 90 dB(A) shall be clearly demarcated.',
        form: 'Noise Mapping Record / Dosimetry Report',
        frequency: 'As per procedure specified by CIFF; periodically and on change in operations',
        authority: 'Mine Office',
        signing: 'Owner / Agent / Manager',
        mode: 'Physical / Electronic',
        remarks: 'Reg 230(8): No work without ear protection where noise ≥90 dB(A); Reg 230(9): No entry where noise ≥140 dB(A)',
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