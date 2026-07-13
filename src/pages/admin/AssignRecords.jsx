import { useEffect, useState } from 'react';
import API from '../../api/axios';
import toast from 'react-hot-toast';

// Same record data shape as the user-facing Records.jsx (flattened across all sections)
// Statutory records, registers, books, plans & returns — OPENCAST MINES ONLY
// Underground-specific records (winding, haulage, ventilation, safety lamps, stowing,
// stone dusting, sealed-off areas, boreholes, SCAMP etc.) have been removed.
// Sources: Coal Mines Regulations 2017 | CEA (Measures relating to Safety and Electric Supply) Regulations 2023
//          Explosives Rules 2008 | OSH (Central) Rules 2026

const allRecords = [

  /* ================= CMR 2017 — GENERAL / MANAGEMENT ================= */
  { id: '1', title: "Manager's Diary (Record of Personal Supervision & Inspection)", act: 'CMR 2017', rule: 'Regulation 43(2)', frequency: 'Daily, after each inspection', signing: 'Manager' },
  { id: '2', title: "Requisition Book (Manager's requisition to Owner/Agent for men, material, machinery)", act: 'CMR 2017', rule: 'Regulation 43(4)', frequency: 'As and when required; Owner/Agent to reply within 3 days', signing: 'Manager (signed); Owner/Agent (reply)' },
  { id: '3', title: "Manager's Countersignature on All Reports, Registers and Records", act: 'CMR 2017', rule: 'Regulation 43(8)', frequency: 'Continuously, as entries are made', signing: 'Manager' },
  { id: '4', title: 'Accident / Dangerous Occurrence Enquiry Record (with plan, sections & photographs)', act: 'CMR 2017', rule: 'Regulation 43(10)', frequency: 'After every accident/dangerous occurrence; copy to CI & RI within 15 days', signing: 'Manager' },
  { id: '5', title: 'Notice of Accident & Dangerous Occurrence', act: 'CMR 2017', rule: 'Regulation 8(1)–(5)', frequency: 'Notice within 24 hrs; full particulars within 7 days', signing: 'Owner / Agent / Manager' },
  { id: '6', title: 'Charge Report of Managers (handing/taking over charge)', act: 'CMR 2017', rule: 'Regulation 28', frequency: 'On every change of Manager', signing: 'Outgoing Manager & Incoming Manager' },
  { id: '7', title: 'Bound-Paged Book of Appointments of Competent Persons (with duties & area of charge)', act: 'CMR 2017', rule: 'Regulation 35(4)', frequency: 'On every appointment/change; maintained continuously', signing: 'Manager' },
  { id: '8', title: "Safety Officer's Work Record (bound paged book)", act: 'CMR 2017', rule: 'Regulation 44(4)', frequency: 'Daily', signing: 'Safety Officer (signed); Manager (countersigned)' },
  { id: '9', title: "Assistant Manager's Inspection Record", act: 'CMR 2017', rule: 'Regulation 45(5)', frequency: 'Every working day', signing: 'Assistant Manager (signed); Manager (countersigned)' },
  { id: '10', title: "Mining Sirdar's / Competent Person's Shift Inspection Report", act: 'CMR 2017', rule: 'Regulation 129(8)', frequency: 'End of every shift (inspection within 2 hrs before shift start and once every 4 hrs)', signing: 'Mining Sirdar / Competent Person (signed); Overman / Manager (countersigned)' },
  { id: '11', title: 'Danger / Withdrawal of Persons Record & Re-examination Report', act: 'CMR 2017', rule: 'Regulation 130(2)–(4)', frequency: 'Immediately whenever danger is apprehended and persons withdrawn', signing: 'Competent Person; Manager (re-examination)' },
  { id: '12', title: 'Spot Inspection Register (contravention entries by CI / Inspector)', act: 'CMR 2017', rule: 'Regulation 117', frequency: 'On every DGMS inspection; copy displayed 15 days; reply within 15 days; preserved 3 years', signing: 'Inspector; Manager / Owner / Agent' },
  { id: '13', title: 'Attendance Register (persons entering/leaving the mine)', act: 'CMR 2017', rule: 'Regulation 40(3) r/w Sec. 48(4) Mines Act 1952', frequency: 'Every shift; open to inspection by Workmen’s Inspector (Reg. 254)', signing: 'Manager / Attendance Clerk' },
  { id: '14', title: 'Manpower Distribution Plan (Sketch showing deployment)', act: 'CMR 2017', rule: 'Regulation 246', frequency: 'First week of every month; copy kept with Attendance Clerk', signing: 'Manager' },
  { id: '15', title: 'Sketch of Fatal / Serious Accident Site (in duplicate, with photographs)', act: 'CMR 2017', rule: 'Regulation 251(2)–(3)', frequency: 'Immediately after every fatal/serious accident', signing: 'Manager / Assistant Manager, Safety Officer, Surveyor & Workmen’s Inspector' },
  { id: '16', title: 'Work-at-Height Check-List and Work Permit', act: 'CMR 2017', rule: 'Regulation 131(9)', frequency: 'For every job carried out at height', signing: 'Competent Person (issued); Manager (system framed)' },
  { id: '17', title: 'Permission of Chief Inspector for Keeping Plans/Sections/Records in Electronic Form', act: 'CMR 2017', rule: 'Regulation 256', frequency: 'One-time approval; kept on record', signing: 'Owner / Agent / Manager' },

  /* ================= CMR 2017 — PLANS, SECTIONS & SCHEMES ================= */
  { id: '18', title: 'Surface Plan (opencast benches, haul roads, dumps, surface features)', act: 'CMR 2017', rule: 'Regulations 64 & 65', frequency: 'Kept up to date; not earlier than 3 months', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '19', title: 'Vertical Sections (Longitudinal & Transverse) and Geological Plan', act: 'CMR 2017', rule: 'Regulation 64', frequency: 'Kept up to date; not earlier than 3 months', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '20', title: 'Water-Danger Plan and Section', act: 'CMR 2017', rule: 'Regulation 64', frequency: 'Kept up to date; not earlier than 3 months', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '21', title: 'Joint Survey Plan (adjoining mines / boundary)', act: 'CMR 2017', rule: 'Regulation 65', frequency: 'As required; not earlier than 3 months', signing: 'Surveyors of both mines; Managers (countersigned)' },
  { id: '22', title: 'Certificate Endorsed on Every Plan & Section', act: 'CMR 2017', rule: 'Regulation 69(2)', frequency: 'On every plan/section, on each updation', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '23', title: 'List / Index Register of All Plans, Sections, Survey Instruments & Field Books', act: 'CMR 2017', rule: 'Regulation 68(4)–(5)', frequency: 'Updated whenever a plan/instrument/field book is added or withdrawn', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '24', title: "Surveyor's Bound-Paged Book (workings within 120 m of boundary/waterlogged area; doubts on plan accuracy)", act: 'CMR 2017', rule: 'Regulation 53(2)', frequency: 'As and when the situation arises; maintained continuously', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '25', title: 'Safety Management Plan (SMP) with Risk Assessment', act: 'CMR 2017', rule: 'Regulation 104', frequency: 'Before commencement; reviewed periodically; copy to Regional Inspector', signing: 'Owner / Agent / Manager' },
  { id: '26', title: 'Scientific Study Report (pit slope, dump slope & slope-stability monitoring) — Mechanised Opencast', act: 'CMR 2017', rule: 'Regulation 106(2)', frequency: 'Before commencement / on major change; report kept in mine office', signing: 'Owner / Agent / Manager' },
  { id: '27', title: 'Transport Rules', act: 'CMR 2017', rule: 'Regulation 109', frequency: 'Framed before commencement; updated on change; copy to Regional Inspector', signing: 'Manager' },
  { id: '28', title: 'Codes of Practice (for each machinery / operation)', act: 'CMR 2017', rule: 'Regulation 110', frequency: 'Before introduction of machinery/operation; kept at mine office and at the machine', signing: 'Manager' },
  { id: '29', title: 'Emergency Response & Evacuation Plan (ERP)', act: 'CMR 2017', rule: 'Regulation 252', frequency: 'Prepared and submitted to Regional Inspector for approval; reviewed periodically', signing: 'Owner / Agent / Manager' },

  /* ================= CMR 2017 — EXPLOSIVES & SHOTFIRING ================= */
  { id: '30', title: 'Magazine In-Charge Record of Explosives Issued & Returned (per competent person)', act: 'CMR 2017', rule: 'Regulation 60(d)', frequency: 'Every issue and return; maintained continuously', signing: 'Magazine In-Charge' },
  { id: '31', title: 'Magazine Explosives Receipt & Issue Register (bound paged book) + Written Requisition', act: 'CMR 2017', rule: 'Regulation 185(3)–(4)', frequency: 'Every transaction; requisition signed by Shot-firer on each issue', signing: 'Magazine In-Charge; Shot-firer (requisition)' },
  { id: '32', title: "Shot-Firer's Shift-End Record (explosives taken, used & returned; places, no. of shots, misfires)", act: 'CMR 2017', rule: 'Regulation 206(1)(b)', frequency: 'End of every shift', signing: 'Shot-firer (signed); Manager (countersigned)' },
  { id: '33', title: 'Misfire Report Book', act: 'CMR 2017', rule: 'Regulation 204(10)', frequency: 'On every misfire, before leaving the mine', signing: 'Shot-firer (signed); Manager (countersigned)' },
  { id: '34', title: 'Misfire Handling Procedure / Plan (Opencast)', act: 'CMR 2017', rule: 'Regulation 204(12)', frequency: 'Framed before commencement of blasting; reviewed on change', signing: 'Owner / Agent / Manager' },
  { id: '35', title: 'Standing Orders for Use of Two Types of Explosives in One Hole (Opencast)', act: 'CMR 2017', rule: 'Regulation 192(7)', frequency: 'Framed before such practice; copy to Regional Inspector', signing: 'Manager' },
  { id: '36', title: 'Shot-Firing Apparatus (Exploder) Test Record', act: 'CMR 2017', rule: 'Regulation 195(3) & (5)', frequency: 'Once in every 3 months and after every failure/misfire', signing: 'Competent Person (signed); Manager (countersigned)' },
  { id: '37', title: 'Copy of Explosives Licence Kept at Mine Office', act: 'CMR 2017', rule: 'Regulation 184(4)', frequency: 'Kept continuously; renewed as per licence validity', signing: 'Manager' },

  /* ================= CMR 2017 — FIRE, DUST & WATER DANGER ================= */
  { id: '38', title: 'Register of Manager’s Written Permissions to Light Fire / Carry Fire-Producing Articles', act: 'CMR 2017', rule: 'Regulation 135(5)', frequency: 'On every permission granted', signing: 'Manager' },
  { id: '39', title: 'Fire Inspection Record — Opencast Workings, Broken Ground & Mine Entrances', act: 'CMR 2017', rule: 'Regulation 135(6)–(7)', frequency: 'Once in every 7 days', signing: 'Competent Person (signed); Manager (countersigned)' },
  { id: '40', title: 'Post-Fire Examination Report (before re-admission of persons)', act: 'CMR 2017', rule: 'Regulation 138(2)', frequency: 'After every fire / heating, before re-admission', signing: 'Manager / Assistant Manager' },
  { id: '41', title: 'Examination Record of All Fire-Fighting Equipment & Extinguishers', act: 'CMR 2017', rule: 'Regulation 139(6)–(7)', frequency: 'Once in every month', signing: 'Competent Person (signed); Manager (countersigned)' },
  { id: '42', title: 'Airborne Respirable Dust Sampling & Result Register', act: 'CMR 2017', rule: 'Regulation 143(3) & (8)', frequency: 'Sampling every month; results recorded within 14 days', signing: 'Sampling In-Charge (signed); Manager (countersigned within 24 hrs)' },
  { id: '43', title: 'Dust Prevention / Suppression Device Inspection & Test Record', act: 'CMR 2017', rule: 'Regulation 143(13)(h)', frequency: 'Inspection once in 7 days; thorough examination & test once every month', signing: 'Competent Person (signed); Manager (countersigned)' },
  { id: '44', title: 'High Flood Level (HFL) Record & Marking on Plans', act: 'CMR 2017', rule: 'Regulation 149(3)', frequency: 'Annually (before/after monsoon)', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '45', title: 'Examination Record of Surface Water Protective Measures (embankments, drains, bunds)', act: 'CMR 2017', rule: 'Regulation 149(9)–(10)', frequency: 'Every 14 days during rains, otherwise every 30 days; Manager personally inspects once every quarter', signing: 'Competent Person (signed); Manager (countersigned & personal inspection)' },

  /* ================= CMR 2017 — MACHINERY, HEMM & SURFACE PLANT ================= */
  { id: '46', title: "HEMM (Dragline / Shovel / Excavator) Operator's Inspection Book", act: 'CMR 2017', rule: 'Regulation 62(c) & (k)', frequency: 'Beginning and end of every shift', signing: 'HEMM Operator (signed); Engineer / Foreman (countersigned)' },
  { id: '47', title: "Truck / Tipper / Dumper Operator's Inspection Book", act: 'CMR 2017', rule: 'Regulation 63(1)(c) & (k)', frequency: 'Beginning and end of every shift', signing: 'Dumper Operator (signed); Engineer / Foreman (countersigned)' },
  { id: '48', title: 'HEMM Operator Competency Evaluation Record (Board of Management)', act: 'CMR 2017', rule: 'Regulation 216(5)', frequency: 'Before authorisation to operate; on periodic re-evaluation', signing: 'Evaluation Board; Manager' },
  { id: '49', title: 'Thorough Inspection Record of All Machinery & Plant (incl. electrical apparatus)', act: 'CMR 2017', rule: 'Regulation 213(5)', frequency: 'Once in every 7 days', signing: 'Competent Person / Engineer / Electrical Supervisor; Manager (countersigned)' },
  { id: '50', title: 'Copy of DGMS Approval of Every Approved Machinery / Equipment', act: 'CMR 2017', rule: 'Regulation 208(6)', frequency: 'Kept at mine office continuously', signing: 'Manager' },
  { id: '51', title: 'Safe Codes of Practice — Machinery, Surface Transport & Coal Handling Plant', act: 'CMR 2017', rule: 'Regulation 208(7)–(8)', frequency: 'Before commissioning; reviewed on change', signing: 'Engineer (framed); Manager (approved)' },
  { id: '52', title: 'Air Receiver Hydraulic Test Record (test at 1.5× working pressure)', act: 'CMR 2017', rule: 'Regulation 210(3)–(4)', frequency: 'At intervals not exceeding 3 years', signing: 'Competent Person; Engineer (countersigned)' },
  { id: '53', title: 'Crane / Hoist Inspection & Maintenance Record + Limit Switch Test Report', act: 'CMR 2017', rule: 'Regulation 215(5) & (18)', frequency: 'Operator check at start of every shift; periodic inspection & maintenance as prescribed', signing: 'Operator; Competent Person; Engineer (countersigned)' },
  { id: '54', title: 'Fence, Tank, Reservoir & Surface Structure Examination Report', act: 'CMR 2017', rule: 'Regulation 237(2)', frequency: 'Once in every 7 days', signing: 'Competent Person (signed); Manager (countersigned)' },

  /* ================= CEA (SAFETY & ELECTRIC SUPPLY) REGULATIONS, 2023 ================= */
  { id: '55', title: 'Register of Designated Persons (name, purpose, certificate of competency / permit)', act: 'CEA Regulations 2023', rule: 'Regulation 3(2) r/w 4(1)', frequency: 'Maintained continuously (paper or electronic); produced to Electrical Inspector on demand', signing: 'Owner / Manager / Electrical Supervisor' },
  { id: '56', title: 'Electrical Safety Officer — Inspection Reports & Register of Recommendations (mines >2000 kW connected load)', act: 'CEA Regulations 2023', rule: 'Regulation 5(3)', frequency: 'Inspection at intervals not exceeding 1 year; recommendations acknowledged by Owner and compliance recorded', signing: 'Electrical Safety Officer (signed); Owner (acknowledged)' },
  { id: '57', title: 'Periodic Inspection & Testing Self-Certification Report (Forms I–IV of Schedule II)', act: 'CEA Regulations 2023', rule: 'Regulations 32(3) & 45', frequency: 'At intervals not exceeding 5 years; installations >650 V in mines require approval of Electrical Inspector of Mines', signing: 'Electrical Supervisor / Engineer; Owner (certified)' },
  { id: '58', title: 'Log-Book of Daily Log Sheets — Mines & Oil-fields (Schedule XI)', act: 'CEA Regulations 2023', rule: 'Regulation 117(9)', frequency: 'Daily (every shift); all test results recorded', signing: 'Electrical Supervisor (signed); Engineer & Manager (countersigned)' },
  { id: '59', title: 'Written Appointment of Electrical Supervisor(s) (with valid Certificate of Competency)', act: 'CEA Regulations 2023', rule: 'Regulation 117(1)–(2)', frequency: 'On every appointment; record kept continuously', signing: 'Owner / Agent / Manager' },
  { id: '60', title: 'Record of Thorough Examination & Testing of All Apparatus (incl. earth-continuity; new & re-erected apparatus before service)', act: 'CEA Regulations 2023', rule: 'Regulation 117(7)', frequency: 'Before commissioning and at prescribed periodic intervals', signing: 'Electrical Supervisor (signed); Engineer (countersigned)' },
  { id: '61', title: 'Records of All Tests, Trippings, Maintenance Works and Repairs of Apparatus, Cables & Supply Lines', act: 'CEA Regulations 2023', rule: 'Regulation 48(6)', frequency: 'On every test/tripping/repair; kept comparable with past records', signing: 'Electrical Supervisor; Engineer (countersigned)' },
  { id: '62', title: 'Daily Record of Operation of Switchgear & Relays (substation / switch station)', act: 'CEA Regulations 2023', rule: 'Regulation 103(2)', frequency: 'Daily — register plus electronic form', signing: 'Electrical Supervisor / Shift In-Charge' },
  { id: '63', title: 'Register of Calibration & Testing of Switchgear and Protective Systems', act: 'CEA Regulations 2023', rule: 'Regulation 103(3)', frequency: 'At least once a year (separate register + electronic copy). Note: Schedule II Form IV checklist refers to a 3-monthly check', signing: 'Electrical Supervisor (signed); Engineer & Manager (countersigned)' },
  { id: '64', title: 'Earthing System Test Record (earth resistance testing)', act: 'CEA Regulations 2023', rule: 'Regulations 43(x)–(xi) & 50(8)', frequency: 'Annually, on a dry day in the dry season; records preserved at least 2 years', signing: 'Electrical Supervisor (signed); Engineer (countersigned)' },
  { id: '65', title: 'Annual Return for Mines (size & type of electrical apparatus) — Schedule IX', act: 'CEA Regulations 2023', rule: 'Regulation 98(1)', frequency: 'Annually — on or before 1st February each year to the Electrical Inspector of Mines', signing: 'Owner / Agent / Manager / Engineer' },
  { id: '66', title: 'Notice of New Electrical Installation / Addition / Alteration', act: 'CEA Regulations 2023', rule: 'Regulation 98(2)', frequency: 'At least 7 days before use; immediate notice for additions ≤650 V; 24-hr intimation with self-certification in emergency', signing: 'Owner / Agent / Manager' },
  { id: '67', title: 'Plan and Single Line Diagram (SLD) of Electrical Installations', act: 'CEA Regulations 2023', rule: 'Regulation 99', frequency: 'Kept at mine office; examined & corrected as often as necessary; dates of examination entered', signing: 'Electrical Supervisor / Engineer; Manager (countersigned)' },
  { id: '68', title: 'Register of Training & Refresher Training of Electrical O&M Personnel', act: 'CEA Regulations 2023', rule: 'Regulation 118(3)', frequency: 'Refresher training at intervals not exceeding 2 years; register produced to Electrical Inspector of Mines', signing: 'Engineer / Training Officer; Manager (countersigned)' },
  { id: '69', title: 'Fire Extinguisher Periodic Inspection & Test Record (electrical installations)', act: 'CEA Regulations 2023', rule: 'Regulation 29(2)', frequency: 'At prescribed periodic intervals', signing: 'Competent Person; Engineer (countersigned)' },
  { id: '70', title: 'Report of Failure of Transformer of 10 MVA and Above (Schedule VII forms)', act: 'CEA Regulations 2023', rule: 'Regulation 48(8)', frequency: 'Report within 48 hrs of failure; reasons within 1 month, to Electrical Inspector of Mines', signing: 'Owner / Agent / Manager' },

  /* ================= EXPLOSIVES RULES, 2008 ================= */
  { id: '71', title: 'Accounts of Explosives Manufactured (other than fireworks) — Form RE-2', act: 'Explosives Rules 2008', rule: 'Rule 24 r/w Part 5, Schedule V', frequency: 'Daily entries; maintained continuously (SME / bulk explosives plant)', signing: 'Licensee / Plant In-Charge' },
  { id: '72', title: 'Accounts of Receipt of Explosives — Form RE-3', act: 'Explosives Rules 2008', rule: 'Rule 24 r/w Part 5, Schedule V', frequency: 'On every receipt; maintained continuously', signing: 'Licensee / Magazine In-Charge' },
  { id: '73', title: 'Accounts of Sale / Transfer of Explosives — Form RE-4', act: 'Explosives Rules 2008', rule: 'Rule 24 r/w Part 5, Schedule V', frequency: 'On every sale/transfer; maintained continuously', signing: 'Licensee / Magazine In-Charge' },
  { id: '74', title: 'Accounts of Explosives Used by the Licensee — Form RE-5', act: 'Explosives Rules 2008', rule: 'Rule 24 r/w Part 5, Schedule V', frequency: 'Daily (quantity issued, holes fired, quantity used, quantity returned)', signing: 'Shot-firer / Blaster (signed); Magazine In-Charge' },
  { id: '75', title: 'Record of Explosives Transported by Road Van — Form RE-6', act: 'Explosives Rules 2008', rule: 'Rule 24 r/w Part 5, Schedule V', frequency: 'On every consignment transported', signing: 'Licensee / Van In-Charge' },
  { id: '76', title: 'Indent for Explosives — Form RE-11', act: 'Explosives Rules 2008', rule: 'Rules 50 & 77', frequency: 'On every procurement; issued by consignee to consignor', signing: 'Licensee (Consignee) / Manager' },
  { id: '77', title: 'Transport Pass — Form RE-12', act: 'Explosives Rules 2008', rule: 'Rules 50 & 77', frequency: 'On every consignment; issued by consignor', signing: 'Consignor (Licensee)' },
  { id: '78', title: 'Monthly Return of Explosives (received, sold, transferred, used, destroyed)', act: 'Explosives Rules 2008', rule: 'Rule 24', frequency: 'Monthly — to the Controller of Explosives and District Magistrate by the 10th of the succeeding month; also filed online', signing: 'Licensee / Manager' },
  { id: '79', title: 'Record of Accidents within Licensed Premises (magazine / explosives plant)', act: 'Explosives Rules 2008', rule: 'Rule 24 r/w Chapter on Accidents', frequency: 'On every accident; produced to inspecting authority on demand', signing: 'Licensee / Plant In-Charge' },
  { id: '80', title: 'Servicing & Maintenance Record of Plant and Equipment (SMS / ANFO / bulk explosives plant)', act: 'Explosives Rules 2008', rule: 'Rule 24 (licence conditions)', frequency: 'On every servicing; retained until next servicing', signing: 'Plant Engineer / Licensee' },
  { id: '81', title: 'Hot-Work Written Permit (licensed explosives premises)', act: 'Explosives Rules 2008', rule: 'Licence conditions r/w Rule 24', frequency: 'For every hot-work job; permit preserved for 3 months', signing: 'Licensee / Plant In-Charge' },
  { id: '82', title: 'Training Record of Persons Handling Explosives', act: 'Explosives Rules 2008', rule: 'Rule 24 (licence conditions)', frequency: 'On every training; maintained continuously', signing: 'Licensee / Training Officer' },
  { id: '83', title: 'Explosives Licences on Record — LE-3 (Possession & Use), LE-7, LE-10 (Shot-firer’s Certificate), AE-11 (Foreman’s Certificate)', act: 'Explosives Rules 2008', rule: 'Schedule IV (Forms of Licence)', frequency: 'Kept valid and on record; LE-10 valid 5 years and revalidable', signing: 'Licensee / Manager; Shot-firer (LE-10 holder)' },
  { id: '84', title: 'Barcode Generation & Scanning Record for Explosive Packages and Cartridges', act: 'Explosives Rules 2008', rule: 'Rule 24(5)–(6)', frequency: 'On every package/cartridge received, issued and used', signing: 'Magazine In-Charge / Licensee' },

  /* ================= OSH (CENTRAL) RULES, 2026 ================= */
  { id: '85', title: 'Maintenance & Production of Reports, Registers and Records (electronic form permitted)', act: 'OSH Rules 2026', rule: 'Rule 72', frequency: 'Maintained continuously; kept at an office within 3 km of the workplace; preserved 5 calendar years from date of last entry', signing: 'Employer / Manager' },
  { id: '86', title: 'Display on Notice Board (notices, abstracts, working hours, wage period)', act: 'OSH Rules 2026', rule: 'Rule 73', frequency: 'Maintained and updated continuously', signing: 'Employer / Manager' },
  { id: '87', title: 'Unified Annual Return — Form IX and Form IXA', act: 'OSH Rules 2026', rule: 'Rule 74', frequency: 'Annually — uploaded online on the MoLE (Shram Suvidha) portal on or before 28/29 February', signing: 'Employer / Occupier / Manager' },
  { id: '88', title: 'Register of Accidents and Dangerous Occurrences', act: 'OSH Rules 2026', rule: 'Rule 75', frequency: 'On every accident/dangerous occurrence; preserved 5 years', signing: 'Employer / Manager' },
  { id: '89', title: 'Register of Leave with Wages', act: 'OSH Rules 2026', rule: 'Rule 76', frequency: 'Maintained continuously; preserved 5 years from last entry', signing: 'Employer / Manager' },
  { id: '90', title: 'Attendance Register-cum-Muster Roll', act: 'OSH Rules 2026', rule: 'Rule 72(1)(ii)', frequency: 'Maintained continuously', signing: 'Employer / Attendance Clerk' },
  { id: '91', title: 'Register of Wages, Overtime and Deductions', act: 'OSH Rules 2026', rule: 'Rule 72(1)(iii)', frequency: 'Every wage period; preserved 5 years', signing: 'Employer / Manager' },
  { id: '92', title: "Safety Officer's Work Record", act: 'OSH Rules 2026', rule: 'Rule 21(4)', frequency: 'Daily', signing: 'Safety Officer (signed); Manager (countersigned)' },
  { id: '93', title: 'Record Maintained by the Training Officer', act: 'OSH Rules 2026', rule: 'Rule 166(iv)', frequency: 'Maintained continuously; monthly report to the Mine Manager', signing: 'Training Officer' },
  { id: '94', title: 'Annual Medical Examination Certificate — Form VIII (employees aged 40+ and mine workers)', act: 'OSH Rules 2026', rule: 'Rule 62 r/w Form VIII', frequency: 'Annually — within 120 days of commencement of the calendar year; free of cost', signing: 'Certifying Surgeon / Medical Officer; Employer' },
  { id: '95', title: 'Minutes of the Safety Committee Meeting', act: 'OSH Rules 2026', rule: 'Rule 15(5)', frequency: 'After every Safety Committee meeting (at least quarterly)', signing: 'Chairman / Secretary of the Safety Committee' },
  { id: '96', title: 'Registration Certificate (Form I) and Register of Establishment (Form V)', act: 'OSH Rules 2026', rule: 'Rules 3 & 5 r/w Forms I and V', frequency: 'On registration; closure to be intimated within 30 days', signing: 'Employer / Occupier' },
  { id: '97', title: 'Appointment Letters Issued to Employees', act: 'OSH Rules 2026', rule: 'Rule 8', frequency: 'On every appointment; copy retained', signing: 'Employer / HR' },
  { id: '98', title: 'First-Aid Station Equipment List / Register (Annexure V)', act: 'OSH Rules 2026', rule: 'Rule 54(ix)(B) r/w Annexure V', frequency: 'Maintained continuously; checked and replenished periodically', signing: 'First-Aid In-Charge; Manager' },
  { id: '99', title: 'Medical Room / Ambulance Room Equipment Register (Annexure VI)', act: 'OSH Rules 2026', rule: 'Rule 63(ii) r/w Annexure VI', frequency: 'Maintained continuously; checked and replenished periodically', signing: 'Medical Officer; Manager' },
];


const AssignRecords = () => {
  const [users, setUsers] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => { fetchData(); }, []);

  const fetchData = async () => {
    try {
      const [u, a] = await Promise.all([
        API.get('/users'),
        API.get('/recordassignments')
      ]);
      setUsers(u.data);
      setAssignments(a.data);
    } catch {
      toast.error('Failed to load');
    } finally {
      setLoading(false);
    }
  };

  const getAssignedUsersForRecord = (recordId) => {
    return assignments
      .filter(a => a.recordId === recordId)
      .map(a => a.assignedTo);
  };

  const openAssignPanel = (record) => {
    setSelectedRecord(record);
    const alreadyAssigned = assignments
      .filter(a => a.recordId === record.id)
      .map(a => a.assignedTo?._id);
    setSelectedUserIds(alreadyAssigned);
  };

  const toggleUser = (userId) => {
    setSelectedUserIds(prev =>
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    );
  };

  const handleSaveAssignment = async () => {
    if (!selectedRecord) return;
    setSaving(true);
    try {
      await API.post('/recordassignments/assign', {
        recordId: selectedRecord.id,
        recordTitle: selectedRecord.title,
        userIds: selectedUserIds
      });
      toast.success('Assignment saved!');
      setSelectedRecord(null);
      fetchData();
    } catch {
      toast.error('Failed to save');
    } finally {
      setSaving(false);
    }
  };

  const filtered = allRecords.filter(r =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.id.toLowerCase().includes(search.toLowerCase()) ||
    r.act.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="text-gray-400 text-center py-20">Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-normal text-gray-800 mb-2">Assign Records</h2>
      <p className="text-gray-500 text-sm mb-6">Assign each record to one or more people. A record can go to many people, and one person can hold many records.</p>

      <input
        type="text"
        placeholder="Search by title, ID, or act..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-2 mb-6 bg-white border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-blue-500"
      />

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-gray-500 font-medium w-14">ID</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Record Title</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Act</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Rule</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Frequency</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Signing Authority</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Assigned To</th>
                <th className="text-left px-4 py-3 text-gray-500 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(record => {
                const assignedUsers = getAssignedUsersForRecord(record.id);
                return (
                  <tr key={record.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-4 py-3 font-mono text-xs font-bold text-gray-600">{record.id}</td>
                    <td className="px-4 py-3 text-gray-800 font-medium max-w-xs">{record.title}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{record.act}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{record.rule}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs max-w-xs">{record.frequency}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs max-w-xs">{record.signing}</td>
                    <td className="px-4 py-3">
                      {assignedUsers.length === 0 ? (
                        <span className="text-gray-400 text-xs">Unassigned</span>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {assignedUsers.map(u => (
                            <span key={u?._id} className="px-2 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded-full text-xs whitespace-nowrap">
                              {u?.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => openAssignPanel(record)}
                        className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition whitespace-nowrap"
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Assign Panel Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-1">Assign Record</h3>
            <p className="text-gray-500 text-sm mb-1">{selectedRecord.title}</p>
            <p className="text-gray-400 text-xs mb-4">{selectedRecord.act} · {selectedRecord.rule}</p>

            <div className="max-h-80 overflow-y-auto space-y-2 mb-4">
              {users.map(u => (
                <label key={u._id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedUserIds.includes(u._id)}
                    onChange={() => toggleUser(u._id)}
                    className="w-4 h-4"
                  />
                  <div>
                    <p className="text-sm text-gray-800 font-medium">{u.name}</p>
                    <p className="text-xs text-gray-400">{u.dept}</p>
                  </div>
                </label>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleSaveAssignment}
                disabled={saving}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition"
              >
                {saving ? 'Saving...' : 'Save Assignment'}
              </button>
              <button
                onClick={() => setSelectedRecord(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignRecords;