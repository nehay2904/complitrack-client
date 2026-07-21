import { useState } from "react";

const DATA = {
  "dgms": {
    "label": "DGMS",
    "color": "#0F5132",
    "icon": "<path d=\"M4 21v-7a8 8 0 0 1 16 0v7\" /><path d=\"M4 21h16\" /><path d=\"M9 21v-4a3 3 0 0 1 6 0v4\" />",
    "items": {
      "Notice": [
        {
          "desc": "Application for Registration of Establishment",
          "act": "OSH Rules 2026",
          "ref": "Rule 3(1)",
          "detail": "Employers of establishments already registered under any Central labour law must update their registration details in Form-I within six months from the commencement of these rules.",
          "form": "FORM I",
          "freq": "Before commencement; within 30 days of any change in particulars",
          "authority": "Registering Officer via Shram Suvidha Portal",
          "signer": "Employer / Manager",
          "mode": "Electronic (Shram Suvidha Portal)",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Certificate of Registration issued in FORM III within 7 days; late fee applicable after 60 days"
        },
        {
          "desc": "Application for Cancellation of Registration Certificate",
          "act": "OSH Rules 2026",
          "ref": "Rule 3(10)",
          "detail": "The employer shall within thirty days of the closing of the establishment intimate to the Registering Officer and the Inspector-cum-Facilitator having jurisdiction in FORM-II along with certificate of payment of all dues and statutory returns to workers.",
          "form": "FORM II",
          "freq": "Within 30 days of closing of establishment",
          "authority": "Registering Officer; Inspector-cum-Facilitator",
          "signer": "Employer / Manager",
          "mode": "Electronic (Shram Suvidha Portal)",
          "appl": "All four mines — on occurrence of the event",
          "remarks": "Cancellation certificate in FORM IV issued within 60 days"
        },
        {
          "desc": "Notice of Commencement / Reopening / Cessation / Discontinuance / Abandonment of Operations",
          "act": "OSH Rules 2026",
          "ref": "Rule 4(1)",
          "detail": "The employer of every mine shall give not less than thirty days prior notice of the commencement, reopening, cessation, discontinuation or abandonment of operations or closing of mines in FORM-VII.",
          "form": "FORM VII",
          "freq": "Not less than 30 days prior notice",
          "authority": "Registering Officer; Inspector-cum-Facilitator",
          "signer": "Employer / Manager",
          "mode": "Electronic / Physical",
          "appl": "All four mines — on occurrence of the event",
          "remarks": "Greenfield blocks (Banai-Banamunda, GP Sector-I) must file commencement notice before opening"
        },
        {
          "desc": "Notice of accident / dangerous occurrence and intimation of injury",
          "act": "OSH Rules 2026 (Code s.10) r/w CMR 2017",
          "ref": "Rule 75 / CMR Reg 8",
          "detail": "Notice of accident to the Chief/Regional Inspector-cum-Facilitator shall be given within 24 hours, and intimation of injury within 7 days, in respect of accidents and dangerous occurrences.",
          "form": "—",
          "freq": "Within 24 hrs (accident); 7 days (injury)",
          "authority": "CIFF / RIFF (DGMS)",
          "signer": "Manager",
          "mode": "Electronic / Physical",
          "appl": "All four mines — on occurrence of the event",
          "remarks": ""
        }
      ],
      "Return": [
        {
          "desc": "Annual Return — Employer (Category of Employees, Health & Welfare)",
          "act": "OSH Rules 2026",
          "ref": "Rule 74",
          "detail": "Every employer shall send an annual return in FORM-XVII (category of employees, health and welfare facilities, retrenchment/layoffs, bonus, maternity benefits, etc.) to the Inspector-cum-Facilitator, electronically, on or before the last day of February following the end of each calendar year.",
          "form": "FORM XVII (Part II)",
          "freq": "Annual — on or before last day of February",
          "authority": "Inspector-cum-Facilitator (jurisdiction)",
          "signer": "Employer / Principal Employer / Manager",
          "mode": "Electronic (Shram Suvidha)",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Unified return covering all establishments under the OSH Code, including mines"
        },
        {
          "desc": "Annual Return — Principal Employer (Contract Labour)",
          "act": "OSH Rules 2026",
          "ref": "Rule 98(9)",
          "detail": "Every principal employer shall submit an annual return in FORM-XVII (Part III) electronically to the authority and the concerned Deputy Chief Labour Commissioner (Central) on or before the last day of February.",
          "form": "FORM XVII (Part III)",
          "freq": "Annual — on or before last day of February",
          "authority": "Deputy Chief Labour Commissioner (Central)",
          "signer": "Principal Employer / Manager",
          "mode": "Electronic (Shram Suvidha)",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Relevant as principal employer for contractor-deployed manpower in mines and the SME plant"
        },
        {
          "desc": "Half-Yearly Return — Contractor",
          "act": "OSH Rules 2026",
          "ref": "Rules 72(5) & 98(7)",
          "detail": "Every contractor shall send a half-yearly return in FORM-XVIII electronically to the Deputy Chief Labour Commissioner (Central) not later than thirty days from the close of each half year (January–June, July–December).",
          "form": "FORM XVIII",
          "freq": "Half-yearly — by 30 July and 30 January",
          "authority": "Deputy Chief Labour Commissioner (Central)",
          "signer": "Contractor",
          "mode": "Electronic (Shram Suvidha)",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Filed by the contractor; principal employer should obtain proof of filing"
        },
        {
          "desc": "Annual Self-Declaration — EPF / ESIC Compliance",
          "act": "OSH Rules 2026",
          "ref": "Rule 72(8)",
          "detail": "The employer shall, on or before 28/29 February following the end of each calendar year, upload a return in FORM-XVII and FORM-XVIII on the designated portal, including the self-declaration in FORM-XVII (Part IV) relating to EPF and ESIC.",
          "form": "FORM XVII (Part IV)",
          "freq": "Annual — on or before 28/29 February",
          "authority": "Designated portal (Shram Suvidha) / Inspector-cum-Facilitator",
          "signer": "Employer / Principal Employer",
          "mode": "Electronic (Shram Suvidha)",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Uploaded together with the FORM XVII / XVIII annual filing"
        }
      ],
      "Record": [
        {
          "desc": "Manager's Diary",
          "act": "CMR 2017",
          "ref": "Reg 43(2)",
          "detail": "The manager shall maintain, in a bound paged book kept for the purpose, a diary recording daily personal supervision and other prescribed entries.",
          "form": "Bound paged book",
          "freq": "Maintained daily",
          "authority": "Maintained at mine; produced to Inspector",
          "signer": "Manager",
          "mode": "Maintained (signed & dated)",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Core managerial record"
        },
        {
          "desc": "Safety Officer's Record of Work",
          "act": "OSH Rules 2026 r/w CMR 2017",
          "ref": "OSH Rule 21(4) / Reg 44",
          "detail": "The safety officer shall maintain, in a bound paged book or retrievable non-editable electronic mode, a detailed record of the work performed by the safety officer.",
          "form": "Bound paged book / Electronic",
          "freq": "Daily",
          "authority": "Kept at Mine Office",
          "signer": "Safety Officer",
          "mode": "Physical / Electronic",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Opencast safety officer holds First Class Manager's Certificate (Coal) or restricted certificate"
        },
        {
          "desc": "Assistant Manager's Record",
          "act": "CMR 2017",
          "ref": "Reg 45",
          "detail": "The assistant manager shall, in a bound paged book kept for the purpose, record the result of each inspection or duty performed.",
          "form": "Bound paged book",
          "freq": "Per shift / inspection",
          "authority": "Maintained at mine",
          "signer": "Assistant Manager",
          "mode": "Maintained",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Overman's Report / Report Book",
          "act": "CMR 2017",
          "ref": "Reg 47",
          "detail": "At the end of his shift, the overman shall record in a bound paged book a general report in the prescribed form.",
          "form": "Bound paged book",
          "freq": "End of every shift",
          "authority": "Maintained at mine",
          "signer": "Overman",
          "mode": "Maintained (signed & dated)",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Record maintained by Training Officer",
          "act": "OSH Rules 2026",
          "ref": "Rule 166(iv)",
          "detail": "The training officer shall maintain records of the training given to every person and furnish monthly reports to the mine manager on the progress of persons undergoing training.",
          "form": "Training Records",
          "freq": "Monthly reports to mine manager",
          "authority": "Mine Manager",
          "signer": "Training Officer",
          "mode": "Physical / Electronic",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": ""
        },
        {
          "desc": "Attendance Register-cum-Muster Roll",
          "act": "OSH Rules 2026",
          "ref": "Rule 72(1)(ii)",
          "detail": "Every employer shall maintain an attendance register-cum-muster roll in FORM-XIV.",
          "form": "FORM XIV",
          "freq": "Maintained continuously",
          "authority": "Kept at Mine Office",
          "signer": "Employer / Attendance Clerk",
          "mode": "Electronic or Manual",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Attendance clerk to remain on duty throughout; report absent official within 2 hrs (CMR Reg 53)"
        },
        {
          "desc": "Register of Wages, Overtime and Deductions",
          "act": "OSH Rules 2026",
          "ref": "Rule 72(1)(iii)",
          "detail": "Every employer shall maintain a register for wages, overtime and deductions in FORM-XV.",
          "form": "FORM XV",
          "freq": "Continuous; preserved 5 years",
          "authority": "Kept at Mine Office",
          "signer": "Employer / Manager",
          "mode": "Electronic or Manual",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Wage slips in FORM XVI to be issued electronically on or before payment day"
        },
        {
          "desc": "Register of Leave with Wages",
          "act": "OSH Rules 2026",
          "ref": "Rule 76(1)",
          "detail": "The employer shall maintain, for every employee, a record of leave with wages electronically or otherwise in FORM-XX and share the leave record of the employee once in a calendar year on demand.",
          "form": "FORM XX",
          "freq": "Continuous; preserved 5 years after last entry",
          "authority": "Kept at Mine Office",
          "signer": "Employer / Manager",
          "mode": "Electronic or Manual",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Not to be destroyed after 5 years unless properly transferred to a new register"
        },
        {
          "desc": "Mine Plans and Sections",
          "act": "CMR 2017",
          "ref": "Reg 65, 67, 69",
          "detail": "The owner, agent or manager shall keep the prescribed plans and sections (surface plan, working plans, etc.), prepared and kept up-to-date by the surveyor.",
          "form": "Plans & sections",
          "freq": "Kept up-to-date continuously",
          "authority": "Kept at mine; produced on requirement",
          "signer": "Surveyor / Manager",
          "mode": "Maintained",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Plans are statutory records; see also Reg 256"
        },
        {
          "desc": "Plans, Sections and Records (Alternative Arrangement)",
          "act": "CMR 2017",
          "ref": "Reg 256",
          "detail": "Where special conditions exist, the Chief Inspector may permit alternative ways of keeping the required plans, sections and records.",
          "form": "Plans / sections / records",
          "freq": "As permitted",
          "authority": "As directed by Chief Inspector",
          "signer": "Owner / Agent / Manager",
          "mode": "Maintained",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": ""
        },
        {
          "desc": "Strata Control & Monitoring Plan and Records",
          "act": "CMR 2017",
          "ref": "Reg 123",
          "detail": "The owner, agent and manager shall prepare and maintain a Strata Control and Monitoring Plan together with the related monitoring records (for opencast, read as slope/bench & dump stability monitoring).",
          "form": "Plan + records",
          "freq": "Maintained / updated continuously",
          "authority": "Maintained at mine; produced on requirement",
          "signer": "Owner / Agent / Manager",
          "mode": "Maintained",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "HEMM / Truck-Tipper-Dumper Operator Inspection Records",
          "act": "CMR 2017",
          "ref": "Reg 62 & 63",
          "detail": "The operator shall enter the condition of the machine at the end of his shift in the register maintained, and shall maintain a record of every inspection in a bound paged book.",
          "form": "Register / bound paged book",
          "freq": "End of every shift",
          "authority": "Maintained at mine",
          "signer": "HEMM / Dumper Operator",
          "mode": "Maintained",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Record of Working & Examination of Machinery",
          "act": "CMR 2017",
          "ref": "Reg 213",
          "detail": "A report of every examination of the working and examination of machinery shall be recorded in a bound paged book kept for the purpose.",
          "form": "Bound paged book",
          "freq": "At prescribed intervals",
          "authority": "Maintained at mine",
          "signer": "Competent Person",
          "mode": "Maintained",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Register of Accidents and Dangerous Occurrences",
          "act": "OSH Rules 2026",
          "ref": "Rule 75",
          "detail": "The registers of accident and dangerous occurrences required by section 33(a)(v) of the Code shall be maintained in FORM-XIX.",
          "form": "FORM XIX",
          "freq": "Continuous; preserved 5 years",
          "authority": "Mine Office; available to Inspector-cum-Facilitator",
          "signer": "Manager",
          "mode": "Electronic or Manual",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Notice of accident to CIFF/RIFF within 24 hrs; intimation of injury within 7 days"
        },
        {
          "desc": "Register of Contraventions",
          "act": "CMR 2017",
          "ref": "Reg 117",
          "detail": "On finding a contravention, the Inspector shall enter it in an interleaved, paged and bound register in the prescribed form and point it out to the owner/agent/manager; a copy is displayed on the notice board within one day.",
          "form": "Interleaved, paged & bound register",
          "freq": "On each inspection / contravention",
          "authority": "Kept at mine; entries by Inspector",
          "signer": "Chief Inspector / Inspector (entry)",
          "mode": "Maintained (carbon copy taken)",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Maintained by the mine; entries made by the Inspectorate"
        },
        {
          "desc": "Submission of Particulars of Persons Killed or Injured",
          "act": "CMR 2017",
          "ref": "Reg 8(5)",
          "detail": "Particulars of persons killed or injured shall be submitted in the prescribed form within 7 days of the occurrence and within 15 days of the injured person returning to duty.",
          "form": "Prescribed Form",
          "freq": "Within 7 days of occurrence; 15 days of return to duty",
          "authority": "Chief Inspector / Regional Inspector",
          "signer": "Owner / Agent / Manager",
          "mode": "Physical / As prescribed",
          "appl": "All four mines — on occurrence of the event",
          "remarks": "Statutory intimation, distinct from the FORM XIX register"
        },
        {
          "desc": "Manager's Written Reports on Safety Materials & Appliances",
          "act": "CMR 2017",
          "ref": "Reg 43(4)",
          "detail": "The manager shall submit written reports to the owner/agent regarding materials and appliances required for the safety of the mine whenever such need arises.",
          "form": "Written report",
          "freq": "As and when required",
          "authority": "Owner / Agent",
          "signer": "Manager",
          "mode": "Written",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "First-Aid Station Equipment Register / List",
          "act": "OSH Rules 2026",
          "ref": "CMR Reg (Health chapter)",
          "detail": "First-aid stations equipped and replenished shall be maintained, and an up-to-date list of all first-aid stations kept in the office of the mine.",
          "form": "Station List / Register",
          "freq": "Maintained continuously",
          "authority": "Mine Office",
          "signer": "Manager; First-Aid Trained In-Charge",
          "mode": "Physical",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "One ambulance room per 150 persons in opencast; first-aid box per 50 workers"
        },
        {
          "desc": "Health Examination Records (Mine Employees)",
          "act": "OSH Rules 2026",
          "ref": "FORM IX (as applicable)",
          "detail": "Report of medical examination for mine employees; persons certified for fitness; records of rescue-trained persons' annual medical re-examination.",
          "form": "FORM IX",
          "freq": "Per examination schedule; annually for rescue-trained",
          "authority": "Mine Office; examining authority",
          "signer": "Examining Authority / Medical Officer",
          "mode": "Physical",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "General Preservation of All Registers & Records",
          "act": "OSH Rules 2026",
          "ref": "Rules 72(4), 72(7)(ii)",
          "detail": "All registers and records required under the Code shall be kept complete and up-to-date and preserved in original for five calendar years from the date of the last entry.",
          "form": "All Registers",
          "freq": "Preserved 5 years from last entry",
          "authority": "Mine Office or within 3 km of workplace",
          "signer": "Employer / Manager",
          "mode": "Physical / Electronic",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Produced on demand before Inspector-cum-Facilitator, electronically or by speed post"
        },
        {
          "desc": "Display on Notice Board",
          "act": "OSH Rules 2026",
          "ref": "Rule 73",
          "detail": "Every employer shall display at conspicuous places the name and address of the establishment, hours of work, wage period, date of payment of wages, details of accidents/dangerous occurrences for the last five years, name and address of the Inspector-cum-Facilitator, and date of payment of unpaid wages.",
          "form": "Notice Board",
          "freq": "Continuously maintained and updated",
          "authority": "Mine Notice Board",
          "signer": "Employer / Manager",
          "mode": "Physical (posted)",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "In English/Hindi and local language"
        },
        {
          "desc": "Airborne Respirable Dust Measurement Record",
          "act": "OSH Rules 2026",
          "ref": "Rule 135(8)",
          "detail": "All results of airborne respirable dust measurements shall be recorded within 14 days of sample collection in a bound paged book or retrievable non-editable electronic form, every entry countersigned and dated by the manager within 24 hours.",
          "form": "Bound Paged Book / Electronic",
          "freq": "Within 14 days of collection; countersign within 24 hrs",
          "authority": "Mine Office",
          "signer": "Sampling In-Charge (entry); Manager (countersign)",
          "mode": "Physical / Electronic",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Dust Prevention / Suppression Device Inspection & Test Record",
          "act": "OSH Rules 2026",
          "ref": "Rule 135(13)(h)",
          "detail": "Every dust prevention/suppression device and dust respirator shall be inspected at least once in every 7 days and thoroughly examined and tested at least once in every month.",
          "form": "Bound Paged Book / Electronic",
          "freq": "Inspection every 7 days; test every month",
          "authority": "Mine Office",
          "signer": "Competent Person",
          "mode": "Physical / Electronic",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Results recorded in the Airborne Respirable Dust register"
        },
        {
          "desc": "Dust Sample Analysis Result Book",
          "act": "OSH Rules 2026",
          "ref": "Rule 135(17)",
          "detail": "Within 7 days of taking each sample it shall be sent for analysis and the result recorded immediately on receipt in a bound paged book or electronic form, signed and dated by the sampling in-charge and countersigned by the manager.",
          "form": "Bound Paged Book / Electronic",
          "freq": "Sample sent within 7 days; result on receipt",
          "authority": "Mine Office",
          "signer": "Sampling In-Charge; Manager (countersign)",
          "mode": "Physical / Electronic",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Separate book from the dust measurement register — for laboratory analysis results"
        },
        {
          "desc": "Noise Mapping & Personal Noise Dosimetry Records",
          "act": "OSH Rules 2026",
          "ref": "Rule 230(12)",
          "detail": "Area noise mapping shall be conducted in working areas and personal noise dosimetry for persons exposed above 85 dB(A); areas exceeding 90 dB(A) shall be clearly demarcated.",
          "form": "Noise Mapping / Dosimetry Report",
          "freq": "As per CIFF procedure; periodically and on change",
          "authority": "Mine Office",
          "signer": "Owner / Agent / Manager",
          "mode": "Physical / Electronic",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "No work without ear protection where noise ≥90 dB(A); no entry where ≥140 dB(A)"
        },
        {
          "desc": "Minutes of the Meeting of the Safety Committee",
          "act": "OSH Rules 2026",
          "ref": "Reg 15(5)",
          "detail": "The minutes of the meeting of the Safety Committee shall be recorded.",
          "form": "Minutes Register",
          "freq": "After every Safety Committee meeting",
          "authority": "Mine Office",
          "signer": "Safety Officer / Committee Secretary",
          "mode": "Physical / Electronic",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        }
      ]
    }
  },
  "peso": {
    "label": "PESO",
    "color": "#B45309",
    "icon": "<path d=\"M12 2v4\" /><path d=\"M9 6h6l2 4H7l2-4z\" /><path d=\"M6 10h12l1 4a7 7 0 0 1-14 0z\" />",
    "items": {
      "Notice": [
        {
          "desc": "Prior approval before construction of explosives premises (magazine / SME-ANFO plant)",
          "act": "Explosives Rules 2008",
          "ref": "Rule 101(1)",
          "detail": "No premises for the manufacture, possession or storage of explosives shall be constructed except with the prior approval of the licensing authority of the specimen plans.",
          "form": "—",
          "freq": "Prior to commencement of construction",
          "authority": "Chief Controller / Controller of Explosives",
          "signer": "Applicant / Occupier",
          "mode": "PESO portal / Offline",
          "appl": "Greenfield (Banai-Banamunda, GP Sector-I) — due before opening; already complied at working mines",
          "remarks": ""
        },
        {
          "desc": "No Objection Certificate from District Magistrate / DGMS",
          "act": "Explosives Rules 2008",
          "ref": "Rule 102(1) r/w 103(1)",
          "detail": "After prior approval and before commencement of construction, a no objection certificate shall be obtained from the District Magistrate, or from the DGMS where the premises lie within a mining lease.",
          "form": "—",
          "freq": "After prior approval, before construction",
          "authority": "District Magistrate / DGMS",
          "signer": "Applicant / Occupier",
          "mode": "Offline",
          "appl": "Greenfield (Banai-Banamunda, GP Sector-I) — due before opening; already complied at working mines",
          "remarks": ""
        },
        {
          "desc": "Application for grant of licence after completion of construction",
          "act": "Explosives Rules 2008",
          "ref": "Rule 105 r/w 113",
          "detail": "On completion of construction in accordance with the approved plans, application for grant of licence shall be made in the appropriate form with prescribed documents and fees.",
          "form": "AE-1 to AE-9 (as applicable)",
          "freq": "After completion of construction",
          "authority": "Licensing authority (Sch IV Part 1)",
          "signer": "Occupier / Applicant",
          "mode": "PESO portal / Offline",
          "appl": "Greenfield (Banai-Banamunda, GP Sector-I) — due before opening; already complied at working mines",
          "remarks": ""
        },
        {
          "desc": "Licence for possession / conversion of Ammonium Nitrate (SME plant & AN storage)",
          "act": "Ammonium Nitrate Rules 2012",
          "ref": "Rules 8-12",
          "detail": "No person shall store or convert ammonium nitrate in quantities exceeding the prescribed limits except under and in accordance with a licence granted under these rules.",
          "form": "P-forms as applicable",
          "freq": "Before storage/conversion; renew before expiry",
          "authority": "Chief Controller / Controller of Explosives",
          "signer": "Occupier / Licensee",
          "mode": "PESO portal / Offline",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Verify current P-form number under AN Rules 2012 before relying"
        },
        {
          "desc": "Immediate report — accident, fire, loss, shortage or theft of explosives",
          "act": "Explosives Rules 2008",
          "ref": "Rule 69(1); licence conditions",
          "detail": "Every accident by fire or explosion, and every loss, shortage or theft of explosives, shall be reported immediately to the nearest police station, the licensing authority and the jurisdictional Controller.",
          "form": "—",
          "freq": "Immediately on occurrence",
          "authority": "Nearest Police Station + Licensing Authority + Controller",
          "signer": "Licensee / Occupier / Shot-firer",
          "mode": "Offline",
          "appl": "All four mines — on occurrence of the event",
          "remarks": ""
        },
        {
          "desc": "Transport pass for every consignment of explosives",
          "act": "Explosives Rules 2008",
          "ref": "Rule 47(1)-(3)",
          "detail": "A transport pass shall be issued for every consignment of explosives transported and copies sent to the licensing authority, the Controller and the District Superintendent of Police of both origin and destination.",
          "form": "RE-12",
          "freq": "Before despatch of each consignment",
          "authority": "Controller + Dist. SP (origin & destination)",
          "signer": "Consignor / Licensee",
          "mode": "Offline",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        }
      ],
      "Return": [
        {
          "desc": "Monthly Return of Explosives (Received, Sold, Transferred, Used, Destroyed)",
          "act": "Explosives Rules 2008",
          "ref": "Rule 24",
          "detail": "Every licensee shall maintain records in the forms specified in Part 5 of Schedule V and submit a monthly return of explosives received, sold, transferred, used and destroyed to the Controller of Explosives and the District Magistrate by the 10th day of the succeeding month; also filed online on the PESO portal.",
          "form": "Monthly return (RE-3/RE-4/RE-5 derived)",
          "freq": "Monthly — by the 10th of the succeeding month",
          "authority": "Controller of Explosives (PESO); District Magistrate",
          "signer": "Licensee / Manager / Magazine In-Charge",
          "mode": "Electronic (PESO portal) + Physical",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Applies to the LE-3 magazine licence and the SME / bulk explosives plant licence separately"
        },
        {
          "desc": "Renewal of licence before expiry",
          "act": "Explosives Rules 2008 (as amended 2025)",
          "ref": "Rule 112(1)-(4)",
          "detail": "Every licence shall be renewed on application made before its expiry with the original licence and prescribed fee; a licence may be granted or renewed for up to ten financial years.",
          "form": "RE-1",
          "freq": "On or before expiry of licence",
          "authority": "Licensing authority",
          "signer": "Licensee",
          "mode": "PESO portal / Offline",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Quarterly return by magazine licensee",
          "act": "Explosives Rules 2008",
          "ref": "Rule 24(3) r/w SET-VII Cond. 16",
          "detail": "The licensee of a magazine shall submit a quarterly return of transactions to the District Magistrate and the District Superintendent/Commissioner of Police by the 10th of the succeeding month.",
          "form": "RE-7",
          "freq": "Quarterly — by 10th of succeeding month",
          "authority": "District Magistrate + Dist. SP/CP",
          "signer": "Licensee / Magazine holder",
          "mode": "Offline",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        }
      ],
      "Record": [
        {
          "desc": "Record of Inspections After Shot-Firing",
          "act": "CMR 2017 r/w Explosives Rules 2008",
          "ref": "CMR Reg 203",
          "detail": "After a shot is fired, the inspection particulars shall be recorded in a bound paged book kept for the purpose, signed and dated.",
          "form": "Bound paged book",
          "freq": "After each shot-firing",
          "authority": "Maintained at mine",
          "signer": "Shot-Firer",
          "mode": "Maintained (signed & dated)",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Kept at the mine under CMR; explosives drawn/used/returned also recorded per Explosives Rules"
        },
        {
          "desc": "Stock register of explosives manufactured (SME / ANFO bulk plant)",
          "act": "Explosives Rules 2008",
          "ref": "Rule 24(1)-(2)",
          "detail": "A true account of all explosives manufactured shall be maintained in the prescribed register, page-numbered and certified, and exhibited to inspecting officers on demand.",
          "form": "RE-2",
          "freq": "Continuous; produce on demand",
          "authority": "Maintained at licensed premises",
          "signer": "Licensee / Occupier",
          "mode": "At site",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Stock register of magazine (receipts, issues, balance)",
          "act": "Explosives Rules 2008",
          "ref": "Rule 24(1)-(2); SET-VII/VIII",
          "detail": "A true account of all explosives received into, issued from and stored in the magazine shall be maintained in the prescribed register and exhibited to inspecting officers on demand.",
          "form": "RE-3 / RE-4",
          "freq": "Continuous; produce on demand",
          "authority": "Maintained at licensed premises",
          "signer": "Licensee / Magazine holder",
          "mode": "At site",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Safety distances and 15 m clear zone around magazine",
          "act": "Explosives Rules 2008",
          "ref": "Rule 86; Sch VIII",
          "detail": "The prescribed safety distances from protected works shall be maintained at all times and the area within 15 metres of the magazine kept clear of dry grass, bush and flammable material.",
          "form": "—",
          "freq": "At all times",
          "authority": "Verified by inspecting authority",
          "signer": "Licensee / Occupier",
          "mode": "At site",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Annual test of lightning conductor and display of certificate",
          "act": "Explosives Rules 2008",
          "ref": "Rule 12(2); SET-VIII Cond. 9",
          "detail": "The lightning conductor of every magazine or process building shall be tested at least once every year by a qualified electrical engineer and the certificate of test results displayed.",
          "form": "—",
          "freq": "At least once every year",
          "authority": "Maintained/displayed at premises",
          "signer": "Licensee / Qualified Electrical Engineer",
          "mode": "At site",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Ammonium Nitrate stock account (receipt, conversion, consumption)",
          "act": "Ammonium Nitrate Rules 2012",
          "ref": "Rule 30",
          "detail": "A true account of ammonium nitrate received, converted and consumed shall be maintained day-to-day at the licensed premises and produced to the inspecting officer on demand.",
          "form": "—",
          "freq": "Daily; produce on demand",
          "authority": "Maintained at licensed premises",
          "signer": "Licensee / Occupier",
          "mode": "At site",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Verify exact rule/form under AN Rules 2012 before relying"
        }
      ]
    }
  },
  "cea": {
    "label": "Central Electricity Authority",
    "color": "#1D4ED8",
    "icon": "<path d=\"M13 2 4 14h7l-1 8 9-12h-7z\" />",
    "items": {
      "Notice": [
        {
          "desc": "Prior notice before energising new electrical installation in a mine",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 98(2) & provisos",
          "detail": "Not less than 7 days' written notice shall be given to the Electrical Inspector of Mines before any new installation is brought into use; immediate notice for additions/alterations ≤650 V, and notice within 24 hours with self-certification in emergencies.",
          "form": "—",
          "freq": "≥7 days (new); immediate (≤650 V); 24 h (emergency)",
          "authority": "Electrical Inspector of Mines",
          "signer": "Owner / Agent / Manager / Engineer",
          "mode": "Offline / Both",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": ""
        },
        {
          "desc": "Written permission before blasting within 300 m of substation / lines >650 V",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 67(2)",
          "detail": "No blasting shall be carried out within 300 metres of the boundary of a substation or of electric supply lines or towers above 650 V without written permission — within a mining lease, of the Electrical Inspector of Mines.",
          "form": "—",
          "freq": "Before blasting activity",
          "authority": "Electrical Inspector of Mines",
          "signer": "Person conducting blasting / Manager",
          "mode": "Offline",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        }
      ],
      "Return": [
        {
          "desc": "Annual Return of Electrical Apparatus (Mines)",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 98(1) r/w Sch IX",
          "detail": "The owner, agent or manager of every mine shall, on or before the 1st day of February each year, submit to the Electrical Inspector of Mines a return in the form set out in Schedule IX showing the size and type of electrical apparatus in use.",
          "form": "SCHEDULE IX",
          "freq": "Annual — on or before 1 February",
          "authority": "Electrical Inspector of Mines (DGMS)",
          "signer": "Owner / Agent / Manager / Engineer (Electrical)",
          "mode": "Physical / Electronic",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Same due date as the CMR annual return — file both together"
        },
        {
          "desc": "Periodic Inspection & Testing Self-Certification Report (Electrical Installations)",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 32(3) & 45 r/w Sch II",
          "detail": "Every electrical installation shall be periodically inspected and tested at intervals not exceeding five years and a self-certification report submitted to the Electrical Inspector in Forms I to IV of Schedule II; mine installations above 650 V require approval of the Electrical Inspector of Mines.",
          "form": "SCHEDULE II — FORMS I to IV",
          "freq": "Periodic — not exceeding 5 years",
          "authority": "Electrical Inspector / Electrical Inspector of Mines",
          "signer": "Electrical Supervisor / Engineer; certified by Owner",
          "mode": "Physical / Electronic",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Up to 650 V may be self-certified; above 650 V needs Electrical Inspector of Mines approval"
        },
        {
          "desc": "Electrical Safety Officer — Annual Inspection Report & Register of Recommendations",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 5(3)",
          "detail": "Every mine with connected load exceeding 2000 kW shall appoint an Electrical Safety Officer who shall inspect and test the installation at intervals not exceeding one year, record results in Schedule II forms, and maintain a register of recommendations acknowledged by the owner with a record of compliance.",
          "form": "Forms I–IV (Sch II); Register of Recommendations",
          "freq": "Annual — not exceeding 12 months",
          "authority": "Owner (acknowledgement); Electrical Inspector of Mines on demand",
          "signer": "Electrical Safety Officer; acknowledged by Owner",
          "mode": "Physical / Electronic",
          "appl": "Where threshold/condition is met (verify manpower/installation per mine)",
          "remarks": "Mandatory for mines with connected load > 2000 kW; compliance against each recommendation recorded"
        }
      ],
      "Record": [
        {
          "desc": "Plan and Single Line Diagram of electrical installations",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 99(1),(2),(4)",
          "detail": "A correct plan and single line diagram of the electrical installations from the point of supply shall be maintained at the mine office, examined and corrected as often as necessary, with dates of examination recorded.",
          "form": "—",
          "freq": "Ongoing; corrected as needed",
          "authority": "Electrical Inspector of Mines (on demand)",
          "signer": "Manager / Engineer",
          "mode": "Both",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": ""
        },
        {
          "desc": "Appointment of electrical supervisor(s) in writing",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 117(1)",
          "detail": "The owner, agent or manager shall appoint electrical supervisor(s) in writing, the number on duty being as per DGMS guidelines or as directed by the Electrical Inspector of Mines.",
          "form": "—",
          "freq": "Before commencement; ongoing",
          "authority": "Electrical Inspector of Mines",
          "signer": "Owner / Agent / Manager",
          "mode": "Offline / Both",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": ""
        },
        {
          "desc": "Electrical supervisor's daily log book",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 117(9) r/w Sch XI",
          "detail": "The electrical supervisor shall maintain a log-book of daily log sheets recording test results, defects, accidents, disconnection and reconnection of supply and examination of earth-fault detectors.",
          "form": "Sch XI",
          "freq": "Daily",
          "authority": "Electrical Inspector of Mines (on demand)",
          "signer": "Electrical Supervisor",
          "mode": "Both",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Daily register of switchgear and protective relay operations",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 103(2)",
          "detail": "The operation of switchgear and protective relays shall be recorded daily in a register, which may also be in electronic form, at the substation or switch station.",
          "form": "—",
          "freq": "Daily",
          "authority": "Electrical Inspector of Mines (on demand)",
          "signer": "Manager / Electrical Supervisor",
          "mode": "Both",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Annual calibration & testing of switchgear and protective relays",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 103(3) & proviso",
          "detail": "The effectiveness of switchgear and protection shall be checked by calibrating and testing at least once a year, numerical relays as per OEM guidelines, and the results recorded in a separate register.",
          "form": "—",
          "freq": "At least once a year",
          "authority": "Electrical Inspector of Mines (on demand)",
          "signer": "Owner / Electrical Supervisor",
          "mode": "Both",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Annual earth-resistance testing of earthing systems (>650 V)",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 50(8)",
          "detail": "Earthing systems shall be tested for resistance to earth on a dry day during the dry season not less than once a year, and the records maintained and produced before the Electrical Inspector when required.",
          "form": "—",
          "freq": "At least once a year",
          "authority": "Electrical Inspector (on demand)",
          "signer": "Owner / Consumer",
          "mode": "Both",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Register of type-trained & refresher-trained electrical personnel",
          "act": "CER / CEA Regulations 2023",
          "ref": "Reg 118(1)-(3)",
          "detail": "Persons engaged in operation and maintenance of electrical installations in mines shall undergo type training as per DGMS syllabus with refresher training every two years, and a register of trained persons with refresher due dates maintained.",
          "form": "—",
          "freq": "Refresher every 2 years; register ongoing",
          "authority": "Electrical Inspector of Mines (on demand)",
          "signer": "Owner / Manager",
          "mode": "Both",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": ""
        }
      ]
    }
  },
  "environment": {
    "label": "Environment",
    "color": "#15803D",
    "icon": "<path d=\"M12 22s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11z\" /><path d=\"M12 8v6\" /><path d=\"M9 11h6\" />",
    "items": {
      "Notice": [
        {
          "desc": "Prior Environmental Clearance for the mining project (incl. expansion of production)",
          "act": "EIA Notification 2006 (EP Act 1986)",
          "ref": "EIA Notification, cl. 2 & 7; Sch item 1(a)",
          "detail": "No coal mining project or its expansion beyond the appraised capacity shall be undertaken without prior environmental clearance from the competent authority following the prescribed appraisal process.",
          "form": "Form 1 + EIA/EMP",
          "freq": "Before construction / expansion",
          "authority": "MoEF&CC (Cat A) / SEIAA",
          "signer": "Owner / Project Proponent",
          "mode": "Parivesh portal",
          "appl": "Greenfield (Banai-Banamunda, GP Sector-I) — action due before opening; already complied for working mines",
          "remarks": ""
        },
        {
          "desc": "Consent to Establish (CTE) under Water and Air Acts",
          "act": "Water Act 1974 s.25 / Air Act 1981 s.21",
          "ref": "s.25 / s.21",
          "detail": "No industrial plant or process shall be established without the previous consent of the State Pollution Control Board.",
          "form": "As per SPCB",
          "freq": "Before establishment",
          "authority": "CG Environment Conservation Board (SPCB)",
          "signer": "Owner / Occupier",
          "mode": "SPCB portal",
          "appl": "Greenfield (Banai-Banamunda, GP Sector-I) — action due before opening; already complied for working mines",
          "remarks": ""
        },
        {
          "desc": "Consent to Operate (CTO) and renewal",
          "act": "Water Act 1974 s.25 / Air Act 1981 s.21",
          "ref": "s.25 / s.21 & consent conditions",
          "detail": "The mine shall operate only under a valid consent to operate, and application for renewal shall be made before its expiry as stipulated by the Board.",
          "form": "As per SPCB",
          "freq": "Before expiry of existing consent",
          "authority": "CG Environment Conservation Board (SPCB)",
          "signer": "Owner / Occupier",
          "mode": "SPCB portal",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Forest Clearance for diversion of forest land (where applicable)",
          "act": "Van (Sanrakshan Evam Samvardhan) Adhiniyam 1980",
          "ref": "s.2",
          "detail": "No forest land shall be used for non-forest purposes (mining) without the prior approval of the Central Government; compensatory afforestation and NPV conditions shall be complied with.",
          "form": "As prescribed",
          "freq": "Before breaking forest land",
          "authority": "MoEF&CC through State Govt.",
          "signer": "Owner / Project Proponent",
          "mode": "Parivesh portal",
          "appl": "Greenfield (Banai-Banamunda, GP Sector-I) — action due before opening; already complied for working mines",
          "remarks": ""
        },
        {
          "desc": "NOC for ground water abstraction",
          "act": "CGWA (EP Act 1986)",
          "ref": "CGWA guidelines [verify rule/form no. in force]",
          "detail": "No ground water shall be abstracted for mining/industrial use without a valid No Objection Certificate from the Central Ground Water Authority, subject to the conditions thereof.",
          "form": "As prescribed",
          "freq": "Before abstraction; renew before expiry",
          "authority": "Central Ground Water Authority",
          "signer": "Owner / Occupier",
          "mode": "CGWA portal",
          "appl": "All mines — working (GPIV/2&3, GPIV/1) ongoing; greenfield (Banai-Banamunda, GP Sector-I) from commencement",
          "remarks": ""
        }
      ],
      "Return": [
        {
          "desc": "Half-yearly EC compliance report",
          "act": "EIA Notification 2006",
          "ref": "cl. 10(i)",
          "detail": "The project proponent shall submit half-yearly compliance reports in respect of the stipulated environmental clearance conditions on 1st June and 1st December of each calendar year.",
          "form": "—",
          "freq": "1 June & 1 December every year",
          "authority": "MoEF&CC Regional Office (IRO) + SPCB",
          "signer": "Owner / Environment Officer",
          "mode": "Parivesh / e-mail + hard copy",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Annual Environmental Statement",
          "act": "Environment (Protection) Rules 1986",
          "ref": "Rule 14",
          "detail": "Every person carrying on an industry, operation or process requiring consent shall submit an environmental statement for the financial year ending 31 March on or before 30 September.",
          "form": "Form V",
          "freq": "On or before 30 September every year",
          "authority": "CG Environment Conservation Board (SPCB)",
          "signer": "Owner / Occupier",
          "mode": "SPCB portal",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Annual return of hazardous and other wastes",
          "act": "Hazardous & Other Wastes (M&TM) Rules 2016",
          "ref": "Rule 20(2)",
          "detail": "The occupier handling hazardous or other wastes shall file an annual return for the period ending 31 March on or before the 30th day of June following.",
          "form": "Form 4",
          "freq": "On or before 30 June every year",
          "authority": "SPCB",
          "signer": "Owner / Occupier",
          "mode": "SPCB portal",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Ground water abstraction returns under CGWA NOC",
          "act": "CGWA NOC conditions",
          "ref": "NOC conditions [verify rule/form no. in force]",
          "detail": "Returns of ground water abstraction, water-level monitoring and recharge measures shall be furnished at the periodicity stipulated in the NOC.",
          "form": "As prescribed",
          "freq": "As per NOC (quarterly/annual) [verify rule/form no. in force]",
          "authority": "CGWA / Nodal officer",
          "signer": "Owner / Occupier",
          "mode": "CGWA portal",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        }
      ],
      "Record": [
        {
          "desc": "Authorisation for handling hazardous waste (used oil, waste oil from HEMM)",
          "act": "Hazardous & Other Wastes (M&TM) Rules 2016",
          "ref": "Rule 6",
          "detail": "The occupier shall obtain and keep valid an authorisation for generation, storage and disposal of hazardous wastes, and comply with its conditions.",
          "form": "Form 2 (application)",
          "freq": "Before handling; renew before expiry",
          "authority": "SPCB",
          "signer": "Owner / Occupier",
          "mode": "SPCB portal",
          "appl": "All mines — working (GPIV/2&3, GPIV/1) ongoing; greenfield (Banai-Banamunda, GP Sector-I) from commencement",
          "remarks": ""
        },
        {
          "desc": "Records of hazardous waste generated, stored and disposed",
          "act": "Hazardous & Other Wastes (M&TM) Rules 2016",
          "ref": "Rule 20(1)",
          "detail": "The occupier shall maintain records of hazardous and other wastes handled in the prescribed form and make them available for inspection.",
          "form": "Form 3",
          "freq": "Continuous",
          "authority": "SPCB (on inspection)",
          "signer": "Owner / Environment Officer",
          "mode": "At site",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Manifest for transport of hazardous waste to authorised recycler/TSDF",
          "act": "Hazardous & Other Wastes (M&TM) Rules 2016",
          "ref": "Rule 19",
          "detail": "Hazardous waste shall be transported only with the prescribed movement document (manifest), copies whereof shall be retained and circulated as prescribed; used/waste oil sold only to registered recyclers.",
          "form": "Form 10",
          "freq": "Every movement",
          "authority": "Transporter / Receiver / SPCB copies",
          "signer": "Owner / Environment Officer",
          "mode": "At site",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Ambient air, stack, water and noise monitoring records per consent/EC",
          "act": "EP Act 1986 / consent & EC conditions",
          "ref": "CTO & EC conditions",
          "detail": "Periodic environmental quality monitoring (PM10/PM2.5, water quality of mine discharge, noise) shall be carried out at the stipulated locations and frequency and the results recorded and reported as per consent and EC conditions.",
          "form": "—",
          "freq": "As per CTO/EC (monthly/quarterly)",
          "authority": "SPCB / IRO with reports",
          "signer": "Environment Officer",
          "mode": "At site + reports",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Effluent management: garland drains, settling ponds/ETP operation logs",
          "act": "Consent & EC conditions",
          "ref": "CTO & EC conditions",
          "detail": "Garland drains, catch drains and settling ponds/ETP shall be maintained and desilted, mine discharge treated to prescribed standards, and operation and maintenance logs kept.",
          "form": "—",
          "freq": "Continuous; pre-monsoon desilting",
          "authority": "SPCB (on inspection)",
          "signer": "Environment Officer / Mine Manager",
          "mode": "At site",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Top soil management, OB dump stabilisation and green belt/plantation records",
          "act": "EC conditions",
          "ref": "EC stipulations",
          "detail": "Top soil shall be stacked separately and used for reclamation; OB dumps benched, stabilised and vegetated; annual plantation targets achieved and survival records maintained.",
          "form": "—",
          "freq": "Continuous / annual plantation season",
          "authority": "IRO with half-yearly report",
          "signer": "Environment Officer / Mine Manager",
          "mode": "At site",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Piezometric ground water level monitoring",
          "act": "CGWA NOC / EC conditions",
          "ref": "NOC & EC conditions",
          "detail": "Ground water levels in and around the mine shall be monitored through the network of piezometers at prescribed frequency and records maintained.",
          "form": "—",
          "freq": "As per NOC/EC (monthly/quarterly)",
          "authority": "CGWA / IRO with reports",
          "signer": "Environment Officer",
          "mode": "At site",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        }
      ]
    }
  },
  "labour": {
    "label": "Labour",
    "color": "#6D28D9",
    "icon": "<circle cx=\"12\" cy=\"8\" r=\"3\" /><path d=\"M6 21v-2a6 6 0 0 1 12 0v2\" />",
    "items": {
      "Notice": [],
      "Return": [
        {
          "desc": "Monthly EPF contribution and Electronic Challan-cum-Return (ECR)",
          "act": "Code on Social Security 2020 (EPF Scheme)",
          "ref": "EPF Scheme para 38 [verify rule/form no. in force]",
          "detail": "Contributions deducted together with employer's share shall be remitted and the electronic challan-cum-return filed within fifteen days of the close of every month.",
          "form": "ECR",
          "freq": "By 15th of following month",
          "authority": "EPFO (unified portal)",
          "signer": "Owner / Authorised Signatory",
          "mode": "EPFO portal",
          "appl": "All mines — working (GPIV/2&3, GPIV/1) ongoing; greenfield (Banai-Banamunda, GP Sector-I) from commencement",
          "remarks": ""
        },
        {
          "desc": "Employees' Compensation — report of fatal/serious accident to Commissioner",
          "act": "Code on Social Security 2020 (erstwhile EC Act 1923)",
          "ref": "s.? [verify rule/form no. in force]",
          "detail": "Notice of any accident resulting in death or serious bodily injury shall be given to the competent authority (Commissioner) within seven days in the prescribed form, and compensation deposited where payable.",
          "form": "As prescribed [verify rule/form no. in force]",
          "freq": "Within 7 days of accident",
          "authority": "Commissioner (Employees' Compensation)",
          "signer": "Owner / Manager",
          "mode": "Offline / portal",
          "appl": "All mines — on occurrence of the event",
          "remarks": ""
        },
        {
          "desc": "Annual unified return under the Labour Codes",
          "act": "OSH Code 2020 & rules",
          "ref": "rules [verify rule/form no. in force]",
          "detail": "The employer shall file the consolidated annual return electronically in respect of the establishment in the prescribed unified form.",
          "form": "Unified return [verify rule/form no. in force]",
          "freq": "Annually, by prescribed date [verify rule/form no. in force]",
          "authority": "Inspector-cum-Facilitator (Shram Suvidha)",
          "signer": "Owner / HR Head",
          "mode": "Shram Suvidha portal",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Payment of Bonus — payment and annual return",
          "act": "Code on Wages 2019",
          "ref": "s.26-39 r/w rules [verify rule/form no. in force]",
          "detail": "Bonus payable under the Code shall be paid within eight months of the close of the accounting year and the register/return of bonus maintained and filed as prescribed.",
          "form": "As prescribed [verify rule/form no. in force]",
          "freq": "Within 8 months of close of accounting year",
          "authority": "Inspector-cum-Facilitator",
          "signer": "Owner / HR",
          "mode": "Portal / at site",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        }
      ],
      "Record": [
        {
          "desc": "Registration of the establishment under OSH Code",
          "act": "OSH Code 2020",
          "ref": "s.3 r/w Central Rules [verify rule/form no. in force]",
          "detail": "Every establishment to which the Code applies shall be registered electronically with the registering officer within the prescribed period, and the registration kept amended for material changes.",
          "form": "As prescribed [verify rule/form no. in force]",
          "freq": "Within 60 days of applicability; on change",
          "authority": "Registering Officer (Shram Suvidha)",
          "signer": "Owner / Occupier",
          "mode": "Shram Suvidha portal",
          "appl": "All mines — working (GPIV/2&3, GPIV/1) ongoing; greenfield (Banai-Banamunda, GP Sector-I) from commencement",
          "remarks": ""
        },
        {
          "desc": "Registration as Principal Employer for engagement of contract labour",
          "act": "OSH Code 2020 (erstwhile CLRA 1970)",
          "ref": "s.119? [verify rule/form no. in force]",
          "detail": "No principal employer shall engage contract labour except under a certificate of registration, and particulars of contractors and contract labour shall be maintained.",
          "form": "As prescribed [verify rule/form no. in force]",
          "freq": "Before engaging contract labour",
          "authority": "Registering Officer",
          "signer": "Owner / Principal Employer",
          "mode": "Shram Suvidha portal",
          "appl": "All mines — working (GPIV/2&3, GPIV/1) ongoing; greenfield (Banai-Banamunda, GP Sector-I) from commencement",
          "remarks": ""
        },
        {
          "desc": "Verification of contractor's licence and register of contractors",
          "act": "OSH Code 2020 (erstwhile CLRA 1970)",
          "ref": "s.45-47 r/w rules [verify rule/form no. in force]",
          "detail": "Contract labour shall be engaged only through licensed contractors; a register of contractors with particulars of work and labour engaged shall be maintained by the principal employer.",
          "form": "As prescribed [verify rule/form no. in force]",
          "freq": "Continuous",
          "authority": "Inspector-cum-Facilitator (on demand)",
          "signer": "Principal Employer / HR",
          "mode": "At site",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Presence of authorised representative at disbursement of wages to contract labour",
          "act": "Code on Wages 2019 / OSH Code 2020",
          "ref": "rules [verify rule/form no. in force]",
          "detail": "The principal employer shall ensure disbursement of wages to contract labour in the presence of its authorised representative, who shall certify the payment.",
          "form": "—",
          "freq": "Every wage period",
          "authority": "Record at site",
          "signer": "Authorised Representative",
          "mode": "At site",
          "appl": "Working OC mines (GPIV/2&3, GPIV/1) — ongoing",
          "remarks": ""
        },
        {
          "desc": "Register of wages, overtime, fines and deductions; wage slips",
          "act": "Code on Wages 2019",
          "ref": "s.50 r/w Central Rules [verify rule/form no. in force]",
          "detail": "The employer shall maintain registers of wages, overtime worked, fines and deductions in the prescribed electronic or physical form and issue wage slips to every employee.",
          "form": "Forms as per Wages (Central) Rules [verify rule/form no. in force]",
          "freq": "Every wage period; continuous",
          "authority": "Inspector-cum-Facilitator (on demand)",
          "signer": "Owner / HR / Payroll",
          "mode": "At site / electronic",
          "appl": "All mines — working (GPIV/2&3, GPIV/1) ongoing; greenfield (Banai-Banamunda, GP Sector-I) from commencement",
          "remarks": ""
        },
        {
          "desc": "Time-limit for payment of wages",
          "act": "Code on Wages 2019",
          "ref": "s.17",
          "detail": "Wages shall be paid before the expiry of the seventh day after the end of the wage period where less than one thousand persons are employed, and before the tenth day in other cases.",
          "form": "—",
          "freq": "7th / 10th of following month",
          "authority": "—",
          "signer": "Owner / Payroll",
          "mode": "—",
          "appl": "All mines — working (GPIV/2&3, GPIV/1) ongoing; greenfield (Banai-Banamunda, GP Sector-I) from commencement",
          "remarks": ""
        },
        {
          "desc": "Display of abstracts, minimum rates of wages and notices",
          "act": "Code on Wages 2019 & rules",
          "ref": "rules [verify rule/form no. in force]",
          "detail": "Notices containing the abstracts of the Code, the minimum rates of wages and other prescribed particulars shall be displayed at the establishment in the prescribed manner.",
          "form": "—",
          "freq": "Continuous display",
          "authority": "Inspector-cum-Facilitator (on inspection)",
          "signer": "Owner / HR",
          "mode": "Display at site",
          "appl": "All mines — working (GPIV/2&3, GPIV/1) ongoing; greenfield (Banai-Banamunda, GP Sector-I) from commencement",
          "remarks": ""
        },
        {
          "desc": "Payment of Gratuity — notice of opening, nominations and records",
          "act": "Code on Social Security 2020 (erstwhile PG Act 1972)",
          "ref": "rules [verify rule/form no. in force]",
          "detail": "Notice of opening of the establishment shall be given to the controlling authority, nominations obtained from employees, and gratuity paid within thirty days of it becoming payable.",
          "form": "Nomination forms [verify rule/form no. in force]",
          "freq": "Opening notice at start; nomination on joining; payment within 30 days",
          "authority": "Controlling Authority",
          "signer": "Owner / HR",
          "mode": "Portal / offline",
          "appl": "All mines — working (GPIV/2&3, GPIV/1) ongoing; greenfield (Banai-Banamunda, GP Sector-I) from commencement",
          "remarks": ""
        },
        {
          "desc": "Maternity benefit — records, notices and paid leave",
          "act": "Code on Social Security 2020 (erstwhile MB Act 1961)",
          "ref": "s.59-72 r/w rules [verify rule/form no. in force]",
          "detail": "Every woman employee shall be allowed maternity benefit as per the Code, records of such benefit maintained, and the prescribed abstract displayed.",
          "form": "As prescribed [verify rule/form no. in force]",
          "freq": "Continuous / on occurrence",
          "authority": "Inspector-cum-Facilitator (on demand)",
          "signer": "Owner / HR",
          "mode": "At site",
          "appl": "Applicable where threshold/condition is met (check manpower/installation at each mine)",
          "remarks": ""
        },
        {
          "desc": "Equal remuneration and non-discrimination records",
          "act": "Code on Wages 2019",
          "ref": "s.3 r/w rules [verify rule/form no. in force]",
          "detail": "There shall be no discrimination on grounds of gender in wages for same or similar work, and the register of employees with wages paid shall evidence compliance.",
          "form": "—",
          "freq": "Continuous",
          "authority": "Inspector-cum-Facilitator (on demand)",
          "signer": "Owner / HR",
          "mode": "At site",
          "appl": "All mines — working (GPIV/2&3, GPIV/1) ongoing; greenfield (Banai-Banamunda, GP Sector-I) from commencement",
          "remarks": ""
        },
        {
          "desc": "Appointment of Welfare Officer (threshold-based)",
          "act": "OSH Code 2020",
          "ref": "s.24(3) r/w rules [verify rule/form no. in force]",
          "detail": "In every mine wherein the prescribed number of workers (five hundred or more) are ordinarily employed, a qualified welfare officer shall be appointed and intimation given as prescribed.",
          "form": "—",
          "freq": "Before threshold; continuous",
          "authority": "CIM / Inspector-cum-Facilitator",
          "signer": "Owner",
          "mode": "Offline / portal",
          "appl": "Applicable where threshold/condition is met (check manpower/installation at each mine)",
          "remarks": ""
        },
        {
          "desc": "Creche facility (threshold-based)",
          "act": "OSH Code 2020",
          "ref": "s.24 r/w rules [verify rule/form no. in force]",
          "detail": "In every establishment wherein fifty or more workers are ordinarily employed, a creche facility with prescribed standards shall be provided and maintained.",
          "form": "—",
          "freq": "Continuous",
          "authority": "Inspector on demand",
          "signer": "Owner / Welfare Officer",
          "mode": "At site",
          "appl": "Applicable where threshold/condition is met (check manpower/installation at each mine)",
          "remarks": ""
        }
      ]
    }
  },
  "hr": {
    "label": "HR & Establishment",
    "color": "#0E7490",
    "icon": "<rect x=\"3\" y=\"7\" width=\"18\" height=\"14\" rx=\"2\" /><path d=\"M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\" /><path d=\"M3 13h18\" /><path d=\"M12 11v4\" />",
    "items": {
      "Notice": [
        {
          "desc": "Constitution of POSH Internal Committee & display of penal consequences",
          "act": "Sexual Harassment of Women at Workplace (POSH) Act 2013",
          "ref": "s.4 & s.19",
          "detail": "Every employer of a workplace with ten or more workers shall, by written order, constitute an Internal Committee, display at conspicuous places the penal consequences of sexual harassment and the order constituting the Committee, and organise awareness programmes.",
          "form": "Written order + display",
          "freq": "On reaching 10 workers; committee reconstituted every 3 years",
          "authority": "District Officer (for information)",
          "signer": "Employer / VP (HR)",
          "mode": "Physical (order) + display",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "IC to be headed by a senior woman employee; at least half the members women; one external NGO member"
        },
        {
          "desc": "Registration under Chhattisgarh Professional Tax",
          "act": "CG Vritti Kar (Professional Tax) Act",
          "ref": "Registration provisions",
          "detail": "Every employer liable to deduct professional tax shall obtain a certificate of registration/enrolment from the prescribed authority before deducting and depositing tax.",
          "form": "PT Registration / Enrolment",
          "freq": "Before first deduction; on any change",
          "authority": "CG Commercial Tax Dept.",
          "signer": "Employer / Finance Head",
          "mode": "Online (CG portal)",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Verify current form/rule number under the notified rules before relying"
        },
        {
          "desc": "Notice of opening / gratuity — submission to Controlling Authority",
          "act": "Payment of Gratuity Act 1972 (now Code on Social Security 2020)",
          "ref": "Rule 3 / s.? ",
          "detail": "Within thirty days of the rules becoming applicable, the employer shall submit a notice of opening to the controlling authority, and any change in name, address or nature of business shall be notified.",
          "form": "Form A (Notice of Opening); Form B/C (change/closure)",
          "freq": "Within 30 days of applicability; on change",
          "authority": "Controlling Authority (Labour)",
          "signer": "Employer / HR",
          "mode": "Physical / portal",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Verify current form/rule number under the notified rules before relying"
        }
      ],
      "Return": [
        {
          "desc": "CMPF — monthly contribution and return (Provident Fund)",
          "act": "Coal Mines Provident Fund & Miscellaneous Provisions Act 1948 (CMPF Scheme)",
          "ref": "CMPF Scheme paras",
          "detail": "Every employer of a coal mine shall deduct the employee's share of provident fund together with the employer's share and remit the contribution to the Coal Mines Provident Fund, filing the prescribed monthly return, by the due date each month.",
          "form": "CMPF monthly challan / return",
          "freq": "Monthly — by the prescribed due date",
          "authority": "Coal Mines Provident Fund Organisation (CMPFO)",
          "signer": "Employer / Finance / HR",
          "mode": "Online (CMPFO portal)",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Coal-specific PF — separate from EPFO. CMPFO also administers the Coal Mines Pension Scheme (CMPS)."
        },
        {
          "desc": "CMPS — monthly pension contribution and return (Coal Mines Pension Scheme)",
          "act": "Coal Mines Pension Scheme 1998",
          "ref": "CMPS provisions",
          "detail": "The employer shall remit the prescribed pension contribution in respect of every eligible employee to the Coal Mines Pension Fund and file the associated monthly return along with the CMPF return.",
          "form": "CMPS return (with CMPF filing)",
          "freq": "Monthly — with CMPF remittance",
          "authority": "CMPFO (Pension Fund)",
          "signer": "Employer / Finance / HR",
          "mode": "Online (CMPFO portal)",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Verify current form/rule number under the notified rules before relying"
        },
        {
          "desc": "Professional Tax — periodic return and deposit",
          "act": "CG Vritti Kar (Professional Tax) Act",
          "ref": "Return & payment provisions",
          "detail": "The employer shall deduct professional tax from wages at the slab rates, deposit it and file the prescribed periodic (monthly/annual) return with the Commercial Tax authority.",
          "form": "PT return",
          "freq": "Monthly / annual as prescribed",
          "authority": "CG Commercial Tax Dept.",
          "signer": "Employer / Finance",
          "mode": "Online (CG portal)",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Verify current form/rule number under the notified rules before relying"
        },
        {
          "desc": "Payment of Bonus — annual payment and return",
          "act": "Payment of Bonus Act 1965 (now Code on Wages 2019)",
          "ref": "s.19 / Rule 5",
          "detail": "Bonus payable under the Act shall be paid within eight months of the close of the accounting year, and the annual return of bonus paid furnished to the inspector in the prescribed form.",
          "form": "Form D (Annual Return)",
          "freq": "Within 8 months of close of accounting year",
          "authority": "Inspector-cum-Facilitator",
          "signer": "Employer / HR / Finance",
          "mode": "Physical / portal",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Verify current form/rule number under the notified rules before relying"
        }
      ],
      "Record": [
        {
          "desc": "Provision & maintenance of Canteen (threshold-based)",
          "act": "OSH Code 2020 (Canteen provisions) r/w mines rules",
          "ref": "OSH Code s.23 r/w rules",
          "detail": "In every mine wherein the prescribed number of workers are ordinarily employed, a canteen with the prescribed standards of construction, accommodation, furniture and equipment shall be provided and maintained, managed through a canteen managing committee.",
          "form": "Canteen + Managing Committee records",
          "freq": "Continuous; committee meets periodically",
          "authority": "Inspector-cum-Facilitator on demand",
          "signer": "Owner / Welfare Officer",
          "mode": "At site",
          "appl": "Where threshold/condition is met (verify manpower per mine)",
          "remarks": "Erstwhile Mines Rules 1955 canteen provisions now under OSH Code; Verify current form/rule number under the notified rules before relying"
        },
        {
          "desc": "POSH — Internal Committee annual report & complaint register",
          "act": "POSH Act 2013",
          "ref": "s.21 & s.22",
          "detail": "The Internal Committee shall maintain a register of complaints and prepare an annual report which the employer shall include in its annual report and forward to the District Officer.",
          "form": "Annual Report + Complaint Register",
          "freq": "Annual (calendar year); register continuous",
          "authority": "District Officer",
          "signer": "IC Presiding Officer / HR",
          "mode": "Physical / Electronic",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": ""
        },
        {
          "desc": "Payment of Gratuity — nominations, notice of payment & gratuity register",
          "act": "Payment of Gratuity Act 1972 (now CoSS 2020)",
          "ref": "Rules 6-8",
          "detail": "The employer shall obtain nominations from employees, maintain the gratuity records, and on gratuity becoming payable issue notice of payment and disburse within thirty days.",
          "form": "Form F (Nomination); gratuity register",
          "freq": "Nomination on joining; payment within 30 days of becoming due",
          "authority": "Controlling Authority (on dispute)",
          "signer": "Employer / HR",
          "mode": "Physical / Electronic",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Verify current form/rule number under the notified rules before relying"
        },
        {
          "desc": "Register of employees / staff master (unified establishment register)",
          "act": "Code on Wages 2019 / OSH Code 2020",
          "ref": "Wages Central Rules r/w OSH rules",
          "detail": "The employer shall maintain a consolidated register of employees showing personal particulars, designation, date of appointment, wages payable and other prescribed details, in electronic or physical form.",
          "form": "Register of employees (as prescribed)",
          "freq": "Continuous; preserved as prescribed",
          "authority": "Inspector-cum-Facilitator on demand",
          "signer": "Employer / HR",
          "mode": "Electronic / Physical",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": "Verify current form/rule number under the notified rules before relying"
        },
        {
          "desc": "Professional Tax deduction register / employee-wise record",
          "act": "CG Vritti Kar (Professional Tax) Act",
          "ref": "Record provisions",
          "detail": "The employer shall maintain an employee-wise record of professional tax deducted and deposited, and produce it before the assessing authority on demand.",
          "form": "PT deduction register",
          "freq": "Every wage period; retained as prescribed",
          "authority": "CG Commercial Tax Dept. (on demand)",
          "signer": "Employer / Finance / Payroll",
          "mode": "Electronic / Physical",
          "appl": "All four mines — working ongoing; greenfield from commencement",
          "remarks": ""
        },
        {
          "desc": "Welfare amenities record — rest shelters, latrines/urinals, washing & drinking water",
          "act": "OSH Code 2020 r/w mines rules",
          "ref": "OSH Code s.23-24 r/w rules",
          "detail": "Prescribed welfare amenities — rest shelters, sufficient latrines and urinals separately for men and women, washing facilities and wholesome drinking water — shall be provided, maintained and their upkeep recorded.",
          "form": "Welfare amenities register",
          "freq": "Continuous",
          "authority": "Inspector-cum-Facilitator on demand",
          "signer": "Owner / Welfare Officer",
          "mode": "At site",
          "appl": "Working OC mines (GP IV/2&3, GP IV/1) — ongoing",
          "remarks": "Verify current form/rule number under the notified rules before relying"
        },
        {
          "desc": "Appointment of Welfare Officer (mines employing ≥500 persons)",
          "act": "OSH Code 2020 r/w mines rules",
          "ref": "OSH Code s.24(3) r/w rules",
          "detail": "In every mine wherein five hundred or more persons are ordinarily employed, a qualified welfare officer shall be appointed and intimation of the appointment given as prescribed.",
          "form": "Appointment order + intimation",
          "freq": "On reaching threshold; continuous",
          "authority": "Chief Inspector-cum-Facilitator",
          "signer": "Owner / VP",
          "mode": "Offline / portal",
          "appl": "Where threshold/condition is met (verify manpower per mine)",
          "remarks": "Verify current form/rule number under the notified rules before relying"
        }
      ]
    }
  }, 
  "Underground mining": {
  "label": "Underground Mining",
  "color": "#334155",
  "icon": "<path d=\"M4 15a8 8 0 0 1 16 0\" /><path d=\"M2 15h20\" /><circle cx=\"12\" cy=\"9\" r=\"1.6\" /><path d=\"M12 9v-2\" />",
  "items": {
    "Notice": [
      {
        "desc": "Prior permission for depillaring operations",
        "act": "CMR 2017",
        "ref": "Reg 112",
        "detail": "No depillaring operation shall be undertaken except with the prior permission in writing of the Chief Inspector and in accordance with such conditions as may be specified therein.",
        "form": "Application for permission",
        "freq": "Before commencing depillaring; on any material change",
        "authority": "Chief Inspector of Mines (DGMS)",
        "signer": "Owner / Agent / Manager",
        "mode": "Offline / DGMS portal",
        "appl": "Underground mines / belowground workings — where applicable",
        "remarks": "Permission is method- and panel-specific; keep the sanction and its conditions with mine records"
      },
      {
        "desc": "Permission to extract coal by a method other than bord-and-pillar",
        "act": "CMR 2017",
        "ref": "Reg 113",
        "detail": "Coal shall not be extracted by any method other than the bord and pillar system except with the previous permission in writing of the Chief Inspector and subject to the conditions imposed.",
        "form": "Application for permission",
        "freq": "Before adopting the method",
        "authority": "Chief Inspector of Mines (DGMS)",
        "signer": "Owner / Agent / Manager",
        "mode": "Offline / DGMS portal",
        "appl": "Underground mines — longwall / other than bord-and-pillar",
        "remarks": ""
      },
      {
        "desc": "Permission for working under or in the vicinity of railways, roads, structures and water bodies",
        "act": "CMR 2017",
        "ref": "Reg 119",
        "detail": "No working shall be made under or within the prescribed distance of any railway, public road, permanent structure, river, reservoir or other body of water except with the previous permission in writing of the Chief Inspector and in accordance with the approved parting/plan.",
        "form": "Application for permission",
        "freq": "Before working the affected area",
        "authority": "Chief Inspector of Mines (DGMS)",
        "signer": "Owner / Agent / Manager",
        "mode": "Offline / DGMS portal",
        "appl": "Underground mines — where workings approach surface features",
        "remarks": ""
      },
      {
        "desc": "Permission for multi-section and contiguous working",
        "act": "CMR 2017",
        "ref": "Reg 118",
        "detail": "Multi-section working, or working of contiguous seams, shall not be carried out except with the previous permission in writing of the Chief Inspector and subject to the conditions specified.",
        "form": "Application for permission",
        "freq": "Before commencing such working",
        "authority": "Chief Inspector of Mines (DGMS)",
        "signer": "Owner / Agent / Manager",
        "mode": "Offline / DGMS portal",
        "appl": "Underground mines — multi-section / contiguous seams",
        "remarks": ""
      },
      {
        "desc": "Approval before installation of a mechanical ventilator belowground",
        "act": "CMR 2017",
        "ref": "Reg 155",
        "detail": "A mechanical ventilator shall not be installed belowground except with the previous permission in writing of the Chief Inspector and subject to such conditions as he may impose.",
        "form": "Application for permission",
        "freq": "Before installation",
        "authority": "Chief Inspector of Mines (DGMS)",
        "signer": "Owner / Agent / Manager / Ventilation Officer",
        "mode": "Offline / DGMS portal",
        "appl": "Underground mines — booster/underground fans",
        "remarks": ""
      },
      {
        "desc": "Permission for working near mine boundaries in belowground mines",
        "act": "CMR 2017",
        "ref": "Reg 121",
        "detail": "Workings shall not approach or extend within the prescribed distance of the boundary of the mine, or of adjoining workings, except with the previous permission in writing of the Chief Inspector.",
        "form": "Application for permission",
        "freq": "Before approaching the boundary",
        "authority": "Chief Inspector of Mines (DGMS)",
        "signer": "Owner / Agent / Manager / Surveyor",
        "mode": "Offline / DGMS portal",
        "appl": "Underground mines — barrier/boundary workings",
        "remarks": "Read with danger-from-inundation provisions (Reg 150) where old/adjacent waterlogged workings exist"
      },
      {
        "desc": "Intimation on detection of inflammable gas / change in degree of gassiness of seam",
        "act": "CMR 2017",
        "ref": "Reg 133 r/w Reg 8 & 9",
        "detail": "On detection of inflammable gas altering the degree of gassiness of a seam, or on any ignition/occurrence of gas, the owner, agent or manager shall forthwith intimate the Regional Inspector so that the seam may be classified/re-classified in the appropriate degree of gassiness.",
        "form": "Notice / intimation",
        "freq": "Forthwith on occurrence/detection",
        "authority": "Regional Inspector (DGMS)",
        "signer": "Manager / Ventilation Officer",
        "mode": "Offline / Both",
        "appl": "Underground mines — gassy seams",
        "remarks": "Classification governs ventilation, lamps, permitted explosives and monitoring obligations"
      }
    ],
    "Return": [
      {
        "desc": "Annual return of the belowground mine",
        "act": "CMR 2017",
        "ref": "Reg 4",
        "detail": "The owner, agent or manager shall submit the annual return of the mine in the prescribed form to the Chief Inspector/Regional Inspector by the prescribed date, covering production, persons employed and other particulars of belowground working.",
        "form": "As prescribed (CMR annual return)",
        "freq": "Annual — by prescribed date",
        "authority": "Chief Inspector / Regional Inspector (DGMS)",
        "signer": "Owner / Agent / Manager",
        "mode": "Physical / DGMS portal",
        "appl": "Underground mines — ongoing",
        "remarks": "File together with the CEA Schedule IX electrical return where due dates align"
      },
      {
        "desc": "Periodic submission of environmental (tele)monitoring data",
        "act": "CMR 2017",
        "ref": "Reg 170 [verify frequency in force]",
        "detail": "Data from the environmental monitoring/telemonitoring system (gas, air velocity, CO, etc.) shall be maintained and made available/submitted to the Inspector at the prescribed periodicity or on demand.",
        "form": "Monitoring report / log",
        "freq": "As prescribed / on demand [verify]",
        "authority": "Regional Inspector (DGMS)",
        "signer": "Ventilation Officer / Manager",
        "mode": "Electronic / Physical",
        "appl": "Underground gassy mines with monitoring devices",
        "remarks": ""
      }
    ],
    "Record": [
      {
        "desc": "Sirdar's pre-shift & during-shift inspection report (gas and general safety)",
        "act": "CMR 2017",
        "ref": "Reg 129 r/w Reg 48",
        "detail": "The sirdar shall, before persons are permitted to work and during the shift, inspect his district for gas, ventilation, roof and sides and general safety, and record the result of each inspection in the bound paged book kept for the purpose.",
        "form": "Sirdar's Report Book (bound paged)",
        "freq": "Every shift (pre-shift and during-shift)",
        "authority": "Maintained at mine",
        "signer": "Mining Sirdar",
        "mode": "Maintained (signed & dated)",
        "appl": "Underground mines — ongoing",
        "remarks": "Core belowground safety record; countersigned by overman/manager as prescribed"
      },
      {
        "desc": "Overman's report book (belowground)",
        "act": "CMR 2017",
        "ref": "Reg 47",
        "detail": "At the end of his shift the overman shall record in a bound paged book a general report on the state of his charge belowground, including ventilation, support and any dangers observed.",
        "form": "Overman's Report Book (bound paged)",
        "freq": "End of every shift",
        "authority": "Maintained at mine",
        "signer": "Overman",
        "mode": "Maintained (signed & dated)",
        "appl": "Underground mines — ongoing",
        "remarks": ""
      },
      {
        "desc": "Ventilation Officer — records of ventilation supervision",
        "act": "CMR 2017",
        "ref": "Reg 46 r/w Reg 31",
        "detail": "The ventilation officer, appointed where required by Reg 31, shall supervise the maintenance of the ventilation system and keep the prescribed records of ventilation surveys, measurements and remedial action.",
        "form": "Ventilation records",
        "freq": "Continuous / per survey",
        "authority": "Maintained at mine",
        "signer": "Ventilation Officer",
        "mode": "Physical / Electronic",
        "appl": "Gassy underground mines meeting the Reg 31 output/degree thresholds",
        "remarks": "Ventilation officer to hold Manager's Certificate not restricted to opencast (per Reg 31)"
      },
      {
        "desc": "Air measurement records at splits and airways (quantity & velocity)",
        "act": "CMR 2017",
        "ref": "Reg 158 r/w Reg 160",
        "detail": "The quantity and velocity of air current in each ventilation split and at prescribed stations shall be measured at the prescribed intervals and the results recorded in the book kept for the purpose.",
        "form": "Air Measurement Book",
        "freq": "At prescribed intervals",
        "authority": "Maintained at mine",
        "signer": "Ventilation Officer / Competent Person",
        "mode": "Maintained",
        "appl": "Underground mines — ongoing",
        "remarks": ""
      },
      {
        "desc": "Determination of percentage of inflammable gas & environmental conditions (gas testing)",
        "act": "CMR 2017",
        "ref": "Reg 169",
        "detail": "The percentage of inflammable gas and the environmental conditions shall be determined at the prescribed places and intervals by a person holding a Gas Testing Certificate, and the results recorded in the prescribed register.",
        "form": "Gas Testing Register",
        "freq": "At prescribed intervals",
        "authority": "Maintained at mine",
        "signer": "Gas Testing Certificate holder",
        "mode": "Maintained (signed & dated)",
        "appl": "Underground gassy mines",
        "remarks": "Gas Testing Certificate is a distinct DGMS competency (see CMR Reg 24)"
      },
      {
        "desc": "Environmental monitoring / monitoring devices records",
        "act": "CMR 2017",
        "ref": "Reg 170",
        "detail": "The prescribed monitoring devices (fixed/portable/telemonitoring for CH4, CO, air velocity, etc.) shall be provided, calibrated and maintained, and their records kept and produced on demand.",
        "form": "Monitoring/Calibration records",
        "freq": "Continuous; calibration as prescribed",
        "authority": "Maintained at mine",
        "signer": "Ventilation Officer / Competent Person",
        "mode": "Electronic / Physical",
        "appl": "Underground gassy mines",
        "remarks": ""
      },
      {
        "desc": "Ventilation plan kept up to date",
        "act": "CMR 2017",
        "ref": "Reg 163",
        "detail": "A ventilation plan showing the direction, distribution and quantity of air current, position of ventilation appliances and monitoring stations shall be maintained and brought up to date at the prescribed intervals.",
        "form": "Ventilation Plan",
        "freq": "Updated at prescribed intervals",
        "authority": "Maintained at mine",
        "signer": "Ventilation Officer / Surveyor",
        "mode": "Maintained",
        "appl": "Underground mines — ongoing",
        "remarks": ""
      },
      {
        "desc": "Standing Orders for ventilation control and emergencies",
        "act": "CMR 2017",
        "ref": "Reg 157",
        "detail": "The manager shall frame standing orders regarding the control of ventilation and action to be taken in the event of stoppage or derangement of the ventilating apparatus, and keep them posted/available.",
        "form": "Standing Orders",
        "freq": "Framed; reviewed on change",
        "authority": "Maintained/posted at mine",
        "signer": "Manager",
        "mode": "Physical",
        "appl": "Underground mines — ongoing",
        "remarks": ""
      },
      {
        "desc": "Maintenance and examination of safety lamps",
        "act": "CMR 2017",
        "ref": "Reg 179",
        "detail": "Safety lamps shall be maintained, examined and tested before issue in accordance with the prescribed procedure, and records of examination kept in the lamp room.",
        "form": "Lamp Room Register",
        "freq": "Before every issue",
        "authority": "Lamp room at mine",
        "signer": "Lamp Room In-charge",
        "mode": "Maintained",
        "appl": "Underground mines using safety lamps",
        "remarks": ""
      },
      {
        "desc": "Systematic Support Rules & record of support setting",
        "act": "CMR 2017",
        "ref": "Reg 124 r/w Reg 123",
        "detail": "Systematic support rules shall be framed and enforced for the setting of supports at the prescribed spacing, and records of support setting/withdrawal maintained.",
        "form": "Support Rules + record",
        "freq": "Continuous; rules reviewed on change",
        "authority": "Maintained at mine",
        "signer": "Manager / Support-man / Sirdar",
        "mode": "Maintained",
        "appl": "Underground mines — ongoing",
        "remarks": "Read with withdrawal of supports (Reg 125) and roof canopies/cabs (Reg 126)"
      },
      {
        "desc": "Strata Control & Monitoring Plan and convergence records",
        "act": "CMR 2017",
        "ref": "Reg 123",
        "detail": "The owner, agent and manager shall prepare and maintain a Strata Control and Monitoring Plan together with convergence and strata-behaviour monitoring records for the belowground workings.",
        "form": "Plan + monitoring records",
        "freq": "Maintained / updated continuously",
        "authority": "Maintained at mine",
        "signer": "Owner / Agent / Manager",
        "mode": "Maintained",
        "appl": "Underground mines — ongoing",
        "remarks": ""
      },
      {
        "desc": "Emergency Response and Evacuation Plan",
        "act": "CMR 2017",
        "ref": "Reg 252",
        "detail": "The owner, agent and manager shall prepare, keep updated and rehearse an emergency response and evacuation plan providing for withdrawal of persons and response to fire, explosion, inundation and other emergencies.",
        "form": "ERP document + drill records",
        "freq": "Maintained; periodic mock drills",
        "authority": "Maintained at mine; produced to Inspector",
        "signer": "Owner / Agent / Manager",
        "mode": "Physical / Electronic",
        "appl": "Underground mines — ongoing",
        "remarks": "Maintain records of mock rehearsals/drills"
      },
      {
        "desc": "Self-rescuer issue, training and maintenance record",
        "act": "CMR 2017",
        "ref": "Reg 243",
        "detail": "Every person going belowground shall be provided with a self-rescuer maintained in efficient working order, and records of issue, training in use, inspection and maintenance shall be kept.",
        "form": "Self-rescuer register",
        "freq": "Continuous; periodic inspection",
        "authority": "Maintained at mine",
        "signer": "Manager / Store In-charge",
        "mode": "Maintained",
        "appl": "Underground mines — ongoing",
        "remarks": ""
      },
      {
        "desc": "Manpower Distribution Plan (belowground)",
        "act": "CMR 2017",
        "ref": "Reg 246",
        "detail": "A manpower distribution plan showing the deployment of persons in each district/section and shift shall be prepared, kept up to date and made available for inspection.",
        "form": "Manpower Distribution Plan",
        "freq": "Maintained; updated on change",
        "authority": "Maintained at mine",
        "signer": "Manager",
        "mode": "Maintained",
        "appl": "Underground mines — ongoing",
        "remarks": ""
      },
      {
        "desc": "Deployment of statutory number of sirdars and overmen",
        "act": "CMR 2017",
        "ref": "Reg 247 r/w Reg 35",
        "detail": "The prescribed number of sirdars and overmen holding the requisite certificates of competency shall be appointed and deployed in each shift/district as required, and the appointments recorded.",
        "form": "Appointment orders / deployment record",
        "freq": "Every shift; appointments on record",
        "authority": "Maintained at mine; produced to Inspector",
        "signer": "Manager",
        "mode": "Maintained",
        "appl": "Underground mines — ongoing",
        "remarks": "Sirdar/Overman competency certificates issued by the Board of Mining Examination (Reg 10-24)"
      },
      {
        "desc": "Rescue station / rescue room — establishment or association and equipment",
        "act": "OSH Central Rules 2026",
        "ref": "Rule 123 & 125 r/w Rule 124, 126 & 131",
        "detail": "Every below ground mine in which inflammable or noxious gas is likely to be present shall be served by a rescue station established at the prescribed location, and shall establish and equip a rescue room performing the functions prescribed, with the equipment maintained ready for immediate use.",
        "form": "Rescue station/room records",
        "freq": "Continuous; equipment maintained",
        "authority": "Rescue Station / DGMS",
        "signer": "Owner / Agent / Manager",
        "mode": "Maintained",
        "appl": "Underground mines liable to be served by a rescue station/room",
        "remarks": "Rescue provisions are now in OSH Central Rules 2026 Ch XI Part IV (replacing the erstwhile Mines Rescue Rules 1985)"
      },
      {
        "desc": "Appointment, disposition and register of rescue-trained persons in the mine",
        "act": "OSH Central Rules 2026",
        "ref": "Rule 139 r/w Rule 140",
        "detail": "The manager shall appoint and dispose the prescribed strength of rescue-trained persons in the mine, select suitable persons for training in rescue work, and maintain their particulars, disposition and accommodation as prescribed.",
        "form": "Register of rescue-trained persons",
        "freq": "Continuous; prescribed strength maintained",
        "authority": "Maintained at mine; Rescue Station",
        "signer": "Manager",
        "mode": "Maintained",
        "appl": "Underground mines",
        "remarks": ""
      },
      {
        "desc": "Rescue-trained persons — instructions, practices and periodic medical examination",
        "act": "OSH Central Rules 2026",
        "ref": "Rule 141 r/w Rule 142",
        "detail": "Rescue-trained persons shall undergo the prescribed instructions and practices with breathing apparatus and periodic medical examination for fitness, and the records of practices and of medical examination shall be maintained.",
        "form": "Practice & medical records",
        "freq": "Practices & medical examination at prescribed intervals",
        "authority": "Rescue Station / Mine Office",
        "signer": "Manager / Rescue Superintendent",
        "mode": "Maintained",
        "appl": "Underground mines with rescue-trained persons",
        "remarks": "A rescue-trained person may be suspended for non-fitness/non-practice under Rule 143"
      },
      {
        "desc": "Shot-firing belowground with permitted explosives — records",
        "act": "CMR 2017",
        "ref": "Reg 198 r/w Reg 199 & 201",
        "detail": "In gassy/dusty belowground workings only permitted explosives shall be used under the prescribed conditions, with the additional precautions for belowground shot-firing observed, and the shot-firing particulars recorded by the shot-firer.",
        "form": "Shot-firing record (bound paged)",
        "freq": "Each round of shots",
        "authority": "Maintained at mine",
        "signer": "Shot-firer",
        "mode": "Maintained (signed & dated)",
        "appl": "Underground mines — where drilling & blasting is used",
        "remarks": "Read with inspections after shot-firing (Reg 203) and misfires (Reg 204)"
      }
    ]
  }
},

};
// 
const AUTH_ORDER = ["dgms", "peso", "cea", "environment", "labour", "hr", "Underground mining"];
const SUBS = [
  { key: "Notice", label: "Notices", accent: "#1D4ED8" },
  { key: "Return", label: "Returns", accent: "#B45309" },
  { key: "Record", label: "Records", accent: "#6D28D9" },
];

const Ico = ({ path, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
    dangerouslySetInnerHTML={{ __html: path }} />
);

const Field = ({ label, value }) =>
  value ? (
    <div>
      <span className="text-gray-400 text-[11px] uppercase tracking-wide">{label}</span>
      <p className="text-gray-700 text-xs mt-0.5">{value}</p>
    </div>
  ) : null;

const ComplianceRow = ({ item, index, accent }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start gap-3 px-4 py-3 text-left hover:bg-gray-50 transition"
      >
        <span
          className="mt-0.5 shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold text-white"
          style={{ background: accent }}
        >
          {index + 1}
        </span>
        <span className="flex-1">
          <span className="text-gray-800 text-sm font-medium">{item.desc}</span>
          <span className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-[11px] text-gray-500">
            <span>📘 {item.act}</span>
            <span>§ {item.ref}</span>
            {item.form && item.form !== "—" && (
              <span className="text-gray-600 font-medium">{item.form}</span>
            )}
            <span>🕑 {item.freq}</span>
          </span>
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" className={`shrink-0 mt-1 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-1 border-t border-gray-100 bg-gray-50/60">
          <div className="rounded-lg bg-white border border-gray-200 p-3 mb-3">
            <span className="text-gray-400 text-[11px] uppercase tracking-wide">Compliance details (statutory wording)</span>
            <p className="text-gray-700 text-xs mt-1 leading-relaxed">{item.detail}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <Field label="Form No." value={item.form} />
            <Field label="Frequency / Due" value={item.freq} />
            <Field label="Submitted / Kept with" value={item.authority} />
            <Field label="Signing / Responsible" value={item.signer} />
            <Field label="Mode" value={item.mode} />
            <Field label="Applicability" value={item.appl} />
          </div>
          {item.remarks && (
            <div className="mt-3 text-xs text-gray-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              <span className="font-medium text-amber-700">Remarks: </span>{item.remarks}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MineCompliances = () => {
  const [auth, setAuth] = useState("dgms");
  const [sub, setSub] = useState("Notice");
  const [query, setQuery] = useState("");
  const active = DATA[auth];
  const activeSub = SUBS.find((s) => s.key === sub);

  let list = active.items[sub] || [];
  if (query.trim()) {
    const q = query.toLowerCase();
    list = list.filter(
      (i) =>
        i.desc.toLowerCase().includes(q) ||
        i.act.toLowerCase().includes(q) ||
        i.ref.toLowerCase().includes(q) ||
        (i.form || "").toLowerCase().includes(q)
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-1">Mine Compliances</h2>
      <p className="text-gray-500 text-sm mb-6">
        Statutory compliances grouped by regulatory authority, then by notices, returns and records
      </p>

      {/* Authority cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {AUTH_ORDER.map((k) => {
          const a = DATA[k];
          const on = auth === k;
          const total = a.items.Notice.length + a.items.Return.length + a.items.Record.length;
          return (
            <button
              key={k}
              onClick={() => { setAuth(k); setSub("Notice"); setQuery(""); }}
              className={`text-left rounded-2xl p-4 border transition ${
                on ? "shadow-md" : "border-gray-200 bg-white hover:shadow-sm"
              }`}
              style={on ? { borderColor: a.color, background: `${a.color}0D` } : undefined}
            >
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-2"
                style={{ background: `${a.color}1A`, color: a.color }}
              >
                <Ico path={a.icon} />
              </span>
              <p className="text-gray-800 text-sm font-semibold leading-tight">{a.label}</p>
              <p className="text-gray-400 text-[11px] mt-1">{total} compliances</p>
            </button>
          );
        })}
      </div>

      {/* Sub-category pills + search */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex flex-wrap gap-1 bg-gray-100 p-1 rounded-xl w-fit">
          {SUBS.map((s) => {
            const count = active.items[s.key].length;
            const on = sub === s.key;
            return (
              <button
                key={s.key}
                onClick={() => setSub(s.key)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                  on ? "bg-white shadow-sm" : "text-gray-500 hover:text-gray-700"
                }`}
                style={on ? { color: s.accent } : undefined}
              >
                {s.label}
                <span className="ml-1.5 text-[11px] opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search in this section..."
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-gray-500 w-full sm:w-64"
        />
      </div>

      {/* Active section header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: activeSub.accent }} />
        <h3 className="text-gray-800 font-semibold">
          {active.label} — {activeSub.label}
        </h3>
      </div>

      {/* List */}
      <div className="space-y-2">
        {list.length === 0 ? (
          <div className="text-center text-gray-400 py-16 bg-white rounded-xl border border-gray-200">
            {query.trim()
              ? "No matches in this section"
              : `No ${activeSub.label.toLowerCase()} under ${active.label}`}
          </div>
        ) : (
          list.map((it, i) => (
            <ComplianceRow key={i} item={it} index={i} accent={activeSub.accent} />
          ))
        )}
      </div>
    </div>
  );
};

export default MineCompliances;
