import { useMemo, useState } from 'react';
import { Search, ArrowUpRight, FileX } from 'lucide-react';

const documents = [
  { title: 'COP 1 (Haul Road)', link: 'https://drive.google.com/file/d/1ZKz7tfBAIz3At9rTkHvMohWACS7RnANg/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 2 (For Supervisors)', link: 'https://drive.google.com/file/d/1K6Tu2t3yo6GpJ5R8bKsrPapygAfCE941/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 3 (Dumping in dumping yard)', link: 'https://drive.google.com/file/d/1AQFf6az6D5SI7fMpe_WkGxaF-Mfba_HQ/view?usp=drivesdk', color: 'green' },
  { title: 'COP 4 (fly ash)', link: 'https://drive.google.com/file/d/1GS6oNai7xyGAbl9sf6ghzko5S0nNuFYg/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 5 (Person engaged in stock piles)', link: 'https://drive.google.com/file/d/1yhVsvlsztkqq6RJctq3y_cG3I8pj5c4T/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 6 (Road Safety)', link: 'https://drive.google.com/file/d/1avVXQcj4FV42kjHoOGw14Han07sBdTdj/view?usp=drivesdk', color: 'red' },
  { title: 'COP 7 (Working system of Weigh bridge)', link: 'https://drive.google.com/file/d/19_oE93DaZOvJij6cm1Lv5L-DvKK7Dk1j/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 8 (Prevent Dump Failure)', link: 'https://drive.google.com/file/d/1gpajw5zI7NDd5ZhXoJ8yjaJifJff1Qj8/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 9 (Loading and Unloading Coal)', link: 'https://drive.google.com/file/d/1HXkUrROiDq9-7tUaRtZnlaNJnND5fYwU/view?usp=drivesdk', color: 'green' },
  { title: 'COP 10 (For dumper operators)', link: 'https://drive.google.com/file/d/1W5K09Y_wBN-VDhkSl8J3_CjK30SpGw61/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 11 (Excavator operators)', link: 'https://drive.google.com/file/d/1FqF23uSRwFhhwuw_Wy9Y7fG2Cqv42G47/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 12 (Loader Operation)', link: 'https://drive.google.com/file/d/1JZNAhjiQOAKui1HrVoljc4yyYBzyh6-W/view?usp=drivesdk', color: 'red' },
  { title: 'COP 13 (Grader Operator)', link: 'https://drive.google.com/file/d/1agUTDjm07Xjcr2LB4sSGV5rfRw1IcBU-/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 14 (Dozer Operations)', link: 'https://drive.google.com/file/d/13eAUDV7mtWyzkOhrqhXsd9f8UXWypdHM/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 15 (For Excavator Operations)', link: 'https://drive.google.com/file/d/1Ab4GeDDnLLSQ38I8YqR8DNCtrAl4i1UC/view?usp=drivesdk', color: 'green' },
  { title: 'COP 16 - Dozer Operators', link: 'https://drive.google.com/file/d/1iFLF2eQBFCO6qz_EEK_XQ59xXpSU0R2x/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 17 - Grader/Pay Loader Operators', link: 'https://drive.google.com/file/d/1XHwzmbkes5CMCjkxdnXeo5WFsUx5uA0a/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 18 - Crane/Hydra Operator', link: 'https://drive.google.com/file/d/1BPm7eELnuAMd33A1avEi9UDWRb1yXv-r/view?usp=drivesdk', color: 'red' },
  { title: 'COP 19 - Use of Diesel Bowzer', link: 'https://drive.google.com/file/d/1S7Rnz9eAiTH9DO2zOWpeskywhTlK4XgL/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 20 - Marching of Drill Machine', link: 'https://drive.google.com/file/d/1k-bwv1vz1oeHN4HqpcWZQ-D1jtDjJ0WS/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 21 - Dumper Operation', link: 'https://drive.google.com/file/d/1odL5kGASpy-CG5RCIoL_8w-BnZcS5QMm/view?usp=drivesdk', color: 'green' },
  { title: 'COP 22 - Operation of Crusher Systems', link: 'https://drive.google.com/file/d/1vwFHADPKET_vDbcEjXCVPKj4GKWkybR5/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 23 - Mining Machine Maintenance', link: 'https://drive.google.com/file/d/1LFkAlfiwYLleszvWlCsUG6JTjn1zrsEj/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 24 - Reversing Machines in Open Cast Mines', link: 'https://drive.google.com/file/d/1tAGiuHoKZ_uI7xrjVr85bX7XmSa3HHuX/view?usp=drivesdk', color: 'red' },
  { title: 'COP 25 - Diesel Tanker Operation', link: 'https://drive.google.com/file/d/13wps2SHnNISfRLZw6ZQfO_bYaE0J1uwC/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 26 - Operation of a Diesel-Powered Machine', link: 'https://drive.google.com/file/d/1Yb3ZGN4nCHBtzU0D6HlPAj60KsOqHCi0/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 27 - Operation of Surface Miner', link: 'https://drive.google.com/file/d/1VdI81vjzIMk4ANVlHZeb2m5xRQk_0D9s/view?usp=drivesdk', color: 'green' },
  { title: 'COP 28 - Design and Maintenance of Surface Miner', link: 'https://drive.google.com/file/d/1Vp_U_ZH3B5pYWa9Ex3-y2rnn3bu6kK4R/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 29 - Operation of Vibro Ripper', link: 'https://drive.google.com/file/d/1sEr_Hn_48EVsFkf03eRAhNRUEEsKNvjd/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 30 - Water Tanker Operators', link: 'https://drive.google.com/file/d/1wnvR2AB-wJNtZqardw1duKzb9W9XTc5u/view?usp=drivesdk', color: 'red' },
  { title: 'COP 31 - Grader Repair Work', link: 'https://drive.google.com/file/d/195ytceNxmSd4Ou8AaSTFmZ6mQtiYug6q/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 32 - Deployment of Equipment at Gare Palma IV/2&3 Mine', link: 'https://drive.google.com/file/d/1f5S_A3tc7SUsmvy0dSxOrEw5UC-hMFrg/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 33 - Vehicle Parking and Starting Rules', link: 'https://drive.google.com/file/d/1_wqo4geVTLboqxAHNBkwaK30mVS7SBua/view?usp=drivesdk', color: 'green' },
  { title: 'COP 34 - Transport Rules', link: 'https://drive.google.com/file/d/1L1YSPlbAIAXijh3OLM7gcxcFM7C2Yp9k/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 35 - Tyre Dismantling and Assembling', link: 'https://drive.google.com/file/d/1iG3d-SBcfdq0PkzDA3RHrGggsHPduO4l/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 36 - Light Vehicle Drivers (Private and Company)', link: 'https://drive.google.com/file/d/1XnzgemCEuqUwrP6HO-961Bo-iCn_2L1K/view?usp=drivesdk', color: 'red' },
  { title: 'COP 37 - Brake Testing', link: 'https://drive.google.com/file/d/1is6dLwCkX4idTzLuNhz3e1CnCsQFL5Ux/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 38 - Drilling Operation', link: 'https://drive.google.com/file/d/10ZNYbOQaGFjsE-RE-RmD3RB26dGWc5oV/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 39 - Magazine', link: 'https://drive.google.com/file/d/1zQ_6Tt8Lnkxr3jbRNrv551LlMPPVL2K6/view?usp=drivesdk', color: 'green' },
  { title: 'COP 40 - Transport of Explosives in Bulk', link: 'https://drive.google.com/file/d/1NzYTbYJQ0yjKUzje-6cWVOhJ2dBciRrE/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 41 - Bulk Mixing Delivery (BMD)/BDS Vehicles', link: 'https://drive.google.com/file/d/1rQhpNJblPdDsChsj7SqpMzt_fN7Yc_9I/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 42 - Specification of BMD/BDS Vehicles', link: 'https://drive.google.com/file/d/1fhYY8JsO40GKW4N3HG8q3-CdO2RLfppI/view?usp=drivesdk', color: 'red' },
  { title: 'COP 43 - Explosive Van', link: 'https://drive.google.com/file/d/1BGWpoWvegD2k4nQ7-bG_iPaTHm45yNs9/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 44 - Handling SMS/SME', link: 'https://drive.google.com/file/d/18jDV2Tox75pC68G_s6kOb33d3PoByiLt/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 45 - Use of SME Explosive', link: 'https://drive.google.com/file/d/1Bn37mf4Bu5uqjHqbz58hpikhQilWItGU/view?usp=drivesdk', color: 'green' },
  { title: 'COP 46 - Prevention of Pilferage (Theft) of Explosive', link: 'https://drive.google.com/file/d/1FPygtl-Fc6y9k93n8m0Yv14_9O38JXYQ/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 47 - Conducting Blasting in Fire Area', link: 'https://drive.google.com/file/d/1xE4gJ-tjXuIfMJiO97A8Go2lyX5ppepu/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 48 - Shotfirer', link: 'https://drive.google.com/file/d/1U6CvKaZOKEWIIo2PN5xpp61XLHR9oVXv/view?usp=drivesdk', color: 'red' },
  { title: 'COP 49 - Blasting Crew', link: 'https://drive.google.com/file/d/1qw0zHg0b8TKFxjNUeey5i2hzhJaP5s_5/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 50 - Deep Hole Blasting', link: 'https://drive.google.com/file/d/1TYzObFl_mNcDWbWUCExBiEhP28opT0Hr/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 51 - Safe and Healthy Work Place While Blasting', link: 'https://drive.google.com/file/d/1TRAJ5-lz5gBF9Jd39fcasHuiTwjmYSjT/view?usp=drivesdk', color: 'green' },
  { title: 'COP 52 - Shelter During Blasting', link: 'https://drive.google.com/file/d/154fp9mNGx7_790bhVK5s6g7e5KcipwTU/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 53 - Putting a (New) Battery Into Service', link: 'https://drive.google.com/file/d/10bPCqy5QNa9JrcUP-r_kwsDrfmqcloVU/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 54 - Erection, Dismantling & Transportation of Electrical Pole/Tower', link: 'https://drive.google.com/file/d/1P5gCfBBjLJWoCFKyHXb5CPAWtEaFJZLk/view?usp=drivesdk', color: 'red' },
  { title: 'COP 55 - Safety and Maintenance of Battery and Electrical System', link: 'https://drive.google.com/file/d/12lScUh40dAJsmV0Vul6pA4GAAtDPQFGN/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 56 - Safe Use of Electricity', link: 'https://drive.google.com/file/d/1OqIeyk0TsRwYWG5ARgnTDz8G5lY45jQ0/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 57 - Electricians', link: 'https://drive.google.com/file/d/17UPzvm0SWGs-mspMMRDRNlBe5dK3DNSW/view?usp=drivesdk', color: 'green' },
  { title: 'COP 58 - Electrical Maintenance and Shutdown', link: 'https://drive.google.com/file/d/10eaQCGWRWHdOcARiBTkov7ufw8t1AOuG/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 59 - Working in Overhead Line', link: 'https://drive.google.com/file/d/1034V1P-fkwlbjFGEG_4huOguwTHWWBBy/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 60 - Shifting of DG Lighting Tower', link: 'https://drive.google.com/file/d/1oD4wIRg3jVTwgV_0cAmujUv_pn80BhP6/view?usp=drivesdk', color: 'red' },
  { title: 'COP 61 - Mechanical/Electrical/Fitters for Safety of Machines', link: 'https://drive.google.com/file/d/1HOQu32xFgXF6HufYZybanrjTcpMf4VMv/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 62 - Electrician Working on the Pole', link: 'https://drive.google.com/file/d/1j70DIzEE4QX3K1_gIhIXLHF_vaG5Ihnq/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 63 - Electrical Safety', link: 'https://drive.google.com/file/d/1fKmFYsiOCNtr8RogL5LVDxye0y_1Euc3/view?usp=drivesdk', color: 'green' },
  { title: 'COP 64 - Shutting Down Power in Open Cast Mines', link: 'https://drive.google.com/file/d/1TntHD1ulB6yCyRAPoBNnCiCH6RT_GU0f/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 65 - Use of Compressed Air', link: 'https://drive.google.com/file/d/1dRjXkEoNJrbzMLArKcAftuVRXsWYmd2R/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 66 - Work at Height', link: 'https://drive.google.com/file/d/1oP0N_2EPz5tnA0-nChDCbunY-F0PWwi3/view?usp=drivesdk', color: 'red' },
  { title: 'COP 67 - Installation, Operation & Erection of Pumps & Pipe Lines', link: 'https://drive.google.com/file/d/1r98Rsg7MFqXAJcs6Hyyzhq6RaJqXesrB/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 68 - Pump Operator', link: 'https://drive.google.com/file/d/1u5znIh5fZtaOb6nIlQ2iHkoMKJYgdBSl/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 69 - Use of Ladders', link: 'https://drive.google.com/file/d/1g-x6RZfbxQ5cGh_kr9MY2PkViI83g99I/view?usp=drivesdk', color: 'green' },
  { title: 'COP 70 - Use of Hand Tools', link: 'https://drive.google.com/file/d/1XiA7vrGr7sEHS5Jmo_GuY0-lx5-i2pqu/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 71 - Material Handling (Mechanical)', link: 'https://drive.google.com/file/d/1Vp5UpLRM9hUXhdxroojH7CEDez_fBJoZ/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 72 - Material Handling (Manual)', link: 'https://drive.google.com/file/d/1eR6v2DufllgvT6FTiYPGHLh9tcL3J14u/view?usp=drivesdk', color: 'red' },
  { title: 'COP 73 - Filling of Diesel', link: 'https://drive.google.com/file/d/1sE3WJz5yjS6UNb0EnmXrE39Elm4swCKH/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 74 - Use of Oil and Grease', link: 'https://drive.google.com/file/d/1T8mP7byFozgJpcSn91EP5s4_RkTRhNzJ/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 75 - Lifting and Carrying Heavy Goods', link: 'https://drive.google.com/file/d/16mgtM6nsq6S5GFXUU1J3hVbAxbUJ_vM7/view?usp=drivesdk', color: 'green' },
  { title: 'COP 76 - Personal Safety Tools', link: 'https://drive.google.com/file/d/1NAgJV8FYEX2_rHiwjVG6XbSum9Mxjpxp/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 77 - Method of Cutting Trees', link: 'https://drive.google.com/file/d/1wm5ZQSc3s6ATz-FkECvQgDGrMZ6q0PWv/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 78 - Welding and Cutting', link: 'https://drive.google.com/file/d/1IKP3_1ViqUWGD52qGPwpaRKpa_4a5VRY/view?usp=drivesdk', color: 'red' },
  { title: 'COP 79 - Safe Against Fire Danger', link: 'https://drive.google.com/file/d/19lLup50CKMz3iFPpmpGqBvo-S53ZlrhZ/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 80 - Fire Fighting', link: 'https://drive.google.com/file/d/1aJvEOCnwmkMJUhjT8as6d9BFnfDVy8F0/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 81 - First-Aid Box Management System', link: 'https://drive.google.com/file/d/1e-LpAHbnrisFWrjbiNiPhjz-LI-n2WKu/view?usp=drivesdk', color: 'green' },
  { title: 'COP 82 - Precaution Against Heat and Sun in Summer Season', link: 'https://drive.google.com/file/d/1ADsbmfw4pz9gytF4Ez0WcJr7Bd1ZB3Y_/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 83 - Prevention of Accident in Office', link: 'https://drive.google.com/file/d/1QijwP3h9vUUFeIf-PY4VJnoO3RD0Ra4D/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 84 - Persons Employed in Mine', link: 'https://drive.google.com/file/d/1RdVxTKLSz8sJ1Jo1HOQwjkuloXPgo93H/view?usp=drivesdk', color: 'red' },
  { title: 'COP 85 - Issuing I Card, GP IV/2&3 Coal Mine', link: 'https://drive.google.com/file/d/1_N1YLrWdjEWghNlwm4ygl-eQ5vL94yzV/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 86 - Attendance Clerk/Register Keeper', link: 'https://drive.google.com/file/d/1GAExHkxOFCkBqNH_ed8npmRoQ-qaRTgc/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 87 - Visitors/OEM Suppliers', link: 'https://drive.google.com/file/d/1L7mqHNLKmRvHK1Y7G8QJApvLBaPrjQXv/view?usp=drivesdk', color: 'green' },
  { title: 'COP 88 - All Contractor Workers Working in Mine Premises', link: 'https://drive.google.com/file/d/1jxgHr8TRKPjIuvPCrCtM5-XtzaKy62d_/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 89 - Security Guard Appointed at the Gate', link: 'https://drive.google.com/file/d/1y3b6cqFO-xpK1w0jS2H58n129NEfBzAL/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 90 - Housekeeping', link: 'https://drive.google.com/file/d/1g9BTMSdkHKaQRIvYyM_M91rrATYA4RSe/view?usp=drivesdk', color: 'red' },
  { title: 'COP 91 - Coal Core Sampling at Mine', link: 'https://drive.google.com/file/d/1faNmY9K6rdF7q-T4c7JqyDKg5r4dj9zd/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 92 - Replacement of Hose Kit', link: 'https://drive.google.com/file/d/1HGmp4xxaerr5FIEEY6Eu90T2EJfSQs9p/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 93 - Trip Man', link: 'https://drive.google.com/file/d/1zj6cNWKcLSi7dG1xOR51k3IikUyuafzd/view?usp=drivesdk', color: 'green' },
  { title: 'COP 94 - Airborne Dust Survey', link: 'https://drive.google.com/file/d/1TsHj0jF1joVikyEPRidz0aDFq9dVDyUa/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 95 - Calibration of PDS (Side Kick-51EX)', link: 'https://drive.google.com/file/d/1E9Xsv7D_SeZe13nlZzaRSA4B73axgpqk/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 96 - Safety Instructions for Compressor Operation', link: 'https://drive.google.com/file/d/1u0aDXKelH7WZ6JZNdYi5CaUJlD2Kxb2e/view?usp=drivesdk', color: 'red' },
  { title: 'COP 97 - No Use of Mobile Phones During Fly Ash Dumping Operation', link: 'https://drive.google.com/file/d/121uclTjkPDl_UlW0ilVDtJDjIkd8xtz-/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 98 - Refuelling a Vehicle Loaded with Explosives', link: 'https://drive.google.com/file/d/1R5CMUTYHlWRNhGHDSP85x1J2kbPF65Gz/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 99 - Dealing with Misfires', link: 'https://drive.google.com/file/d/1JTrD6oeFLrs_KwpIkstE-SeZQvMowqK1/view?usp=drivesdk', color: 'green' },
  { title: 'COP 100 - Dispatch of Coal', link: 'https://drive.google.com/file/d/1fufe0C5uKmURozd_bqUPzWomXn7Nf4Id/view?usp=drivesdk', color: 'purple' },
  { title: 'COP 101 - 9-Meter Drilling, Charging, and Blasting Operations', link: 'https://drive.google.com/file/d/1VJ5noePuhxHtm7aTL4T6hm3FMd9v0Gij/view?usp=drivesdk', color: 'pink' },
  { title: 'COP 102 - Safe Tarpaulin Handling on Fly Ash Dumpers', link: 'https://drive.google.com/file/d/1f-xYxlTPQBpN32YYSV6bfLXGXlt6E-cB/view?usp=drivesdk', color: 'red' },
  { title: 'COP 103 - Bench Formation Work (Pit-1, Gare Palma IV/2&3)', link: 'https://drive.google.com/file/d/1BmgffmFx1piHcC4_xoTlPixsNu3feB3g/view?usp=drivesdk', color: 'blue' },
  { title: 'COP 104 - Working Near Geologically Disturbed Areas', link: 'https://drive.google.com/file/d/1alDopXXbU5FhK9BW9C06ed_sqj4GFJF-/view?usp=drivesdk', color: 'orange' },
  { title: 'COP 105 -COP FOR ANFO HANDLING, TRANSPORTATION, MIXING, CHARGING AND BLASTING:', link: 'https://docs.google.com/document/d/1g0iKj9YMOdgXMRyD_m193oCOz0gygsBP/edit?usp=sharing&ouid=102999237454234972119&rtpof=true&sd=true', color: 'blue' },
  { title: 'COP 106 - COP for crushing of Coal through Mobile Crusher', link: 'https://docs.google.com/document/d/1B4o7ttuFuhtrxeRwWQvkRMq06vhVflRd/edit?usp=sharing&ouid=102999237454234972119&rtpof=true&sd=true', color: 'orange' },
];

const categoryStyles = {
  blue: { tab: 'bg-blue-500', chip: 'text-blue-700 bg-blue-50 ring-blue-600/20' },
  orange: { tab: 'bg-amber-500', chip: 'text-amber-700 bg-amber-50 ring-amber-600/20' },
  green: { tab: 'bg-emerald-500', chip: 'text-emerald-700 bg-emerald-50 ring-emerald-600/20' },
  purple: { tab: 'bg-violet-500', chip: 'text-violet-700 bg-violet-50 ring-violet-600/20' },
  pink: { tab: 'bg-rose-500', chip: 'text-rose-700 bg-rose-50 ring-rose-600/20' },
  red: { tab: 'bg-red-500', chip: 'text-red-700 bg-red-50 ring-red-600/20' },
};

const pad = (n) => String(n).padStart(3, '0');

// Pull the COP number out of the title, e.g. "COP 1 (Haul Road)" -> "1"
const getCode = (title) => {
  const match = title.match(/COP\s*(\d+)/i);
  return match ? match[1] : '?';
};

const InternalMineDocuments = () => {
  const [query, setQuery] = useState('');

  const enriched = useMemo(
    () => documents.map((doc) => ({ ...doc, code: getCode(doc.title) })),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return enriched;
    return enriched.filter(
      (doc) => doc.title.toLowerCase().includes(q) || doc.code.includes(q)
    );
  }, [query, enriched]);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Standard operating procedures &middot; Gare Palma IV/2&amp;3
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Codes of Practice (COP) .
          </p>
        </div>

        <div className="relative mb-4">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by title or COP number&hellip;"
            className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
          />
        </div>

        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-xs text-slate-400">
            Showing <span className="font-medium text-slate-600">{filtered.length}</span> of{' '}
            {documents.length} documents
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center gap-2 px-6 py-16 text-center">
              <FileX className="h-6 w-6 text-slate-300" />
              <p className="text-sm font-medium text-slate-600">No documents match &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400">Try a different keyword or COP number.</p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {filtered.map((doc) => {
                const style = categoryStyles[doc.color] || categoryStyles.blue;
                return (
                  <li key={doc.code + doc.title} className="group relative">
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 py-3 pl-4 pr-5 transition-colors hover:bg-slate-50"
                    >
                      <span className={`h-6 w-1 shrink-0 rounded-full ${style.tab}`} aria-hidden="true" />
                      <span className={`shrink-0 rounded-md px-2 py-1 font-mono text-xs font-medium ring-1 ring-inset ${style.chip}`}>
                        COP&middot;{pad(doc.code)}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-sm font-medium text-slate-800">
                        {doc.title}
                      </span>
                      <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-slate-400 transition-colors group-hover:text-slate-700">
                        Open PDF
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <p className="mt-4 px-1 text-xs text-slate-400">
          For controlled copies or amendments, contact the Safety Officer, Gare Palma IV/2&amp;3 Coal Mine.
        </p>
      </div>
    </div>
  );
};

export default InternalMineDocuments;