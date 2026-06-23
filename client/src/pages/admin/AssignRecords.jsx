import { useEffect, useState } from 'react';
import API from '../../api/axios';
import toast from 'react-hot-toast';

// Same record data shape as the user-facing Records.jsx (flattened across all sections)
const allRecords = [
  { id: '1', title: "Manager's Diary / Inspection Book", act: 'CMR 2026', rule: 'Regulation 35(2)', frequency: 'Daily (after each inspection)', signing: 'Manager' },
  { id: '2', title: "Assistant Manager's Inspection Book", act: 'CMR 2026', rule: 'Regulation 36(5)', frequency: 'Daily (each working day)', signing: 'Assistant Manager' },
  { id: '3', title: "Mining Supervisor's General Shift Report", act: 'CMR 2026', rule: 'Regulation 121(7)', frequency: 'End of every shift', signing: 'Mining Supervisor' },
  { id: '4', title: "Mechanical Supervisor's Shift Report", act: 'CMR 2026', rule: 'Regulation 39(e)', frequency: 'End of every shift', signing: 'Mechanical Supervisor' },
  { id: '5', title: "Assistant Mining Supervisor's Examination/Shift Report (Opencast)", act: 'CMR 2026', rule: 'Regulation 121(8)', frequency: 'At end of every shift; inspection also within 2 hrs before commencement and once every 4 hrs', signing: 'Assistant Mining Supervisor' },
  { id: '6', title: "Manager's Accident Investigation Report", act: 'CMR 2026', rule: 'Regulation 35(10)', frequency: 'Within 15 days of accident; copy to CIFF and RIFF', signing: 'Manager' },
  { id: '7', title: "Safety Officer's Work Record", act: 'OSH Rules 2026', rule: 'OSH Rule 21(4)', frequency: 'Daily', signing: 'Safety Officer' },
  { id: '7A', title: 'Record maintained by Training Officer', act: 'OHS Rules', rule: 'Rule 166(iv)', frequency: 'Monthly reports to mine manager', signing: 'Training Officer' },
  { id: '8', title: "Requisition Book (Manager's supply requests to Owner/Agent)", act: 'CMR 2026', rule: 'Regulation 35(4)', frequency: 'As and when required', signing: 'Manager' },
  { id: '10', title: 'Attendance Register-cum-Muster Roll', act: 'OSH Rules 2026', rule: 'Rule 72(1)(ii)', frequency: 'Maintained continuously', signing: 'Employer / Attendance Clerk' },
  { id: '11', title: 'Register of Wages, Overtime and Deductions', act: 'OSH Rules 2026', rule: 'Rule 72(1)(iii)', frequency: 'Maintained continuously; preserved 5 years', signing: 'Employer / Manager' },
  { id: '12', title: 'Register of Leave with Wages', act: 'OSH Rules 2026', rule: 'Rule 76(1)', frequency: 'Maintained continuously; preserved 5 years after last entry', signing: 'Employer / Manager' },
  { id: '13', title: 'Manpower Distribution Plan (Sketch)', act: 'CMR 2026', rule: 'Regulation 237', frequency: 'First week of every month', signing: 'Manager' },
  { id: '14', title: 'Surface Plan (with opencast bench levels, haul roads)', act: 'CMR 2026', rule: 'Regulations 56, 57(1)(a), 57(5)', frequency: 'Updated at intervals not exceeding 3 months', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '15', title: 'Vertical Mine Sections (Opencast — Longitudinal & Transverse)', act: 'CMR 2026', rule: 'Regulation 57(1)(c) Proviso', frequency: 'Updated at intervals not exceeding 3 months', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '16', title: 'Water-Danger Plan and Section', act: 'CMR 2026', rule: 'Regulation 57(1)(g)', frequency: 'Updated continuously; not earlier than 3 months old', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '17', title: 'List of Plans, Sections, Instruments (Index Register)', act: 'CMR 2026', rule: 'Regulation 60(4)–(5)', frequency: 'Updated whenever new plan/instrument added', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '18', title: "Surveyor's Observation Book", act: 'CMR 2026', rule: 'Regulation 45(2)', frequency: 'As and when required', signing: 'Surveyor (signed); Manager (countersigned)' },
  { id: '19', title: 'Safety Management Plan (SMP)', act: 'CMR 2026', rule: 'Regulation 96(3)–(5)', frequency: 'Reviewed every 12 months or on significant change', signing: 'Owner (signed); Manager' },
  { id: '20', title: 'Transport Rules', act: 'CMR 2026', rule: 'Regulation 101(1)–(3)', frequency: 'Framed before commencement; updated on change', signing: 'Manager' },
  { id: '21', title: 'Code of Practice for Each Machinery (HEMM etc.)', act: 'CMR 2026', rule: 'Regulation 102(3)(d)', frequency: 'Framed before machinery introduction', signing: 'Engineer (framed); Manager (approved)' },
  { id: '22', title: 'Scheme of Mining (Mechanised Opencast)', act: 'CMR 2026', rule: 'Regulation 98(1)(ii)', frequency: 'Before commencement (60 days notice); reviewed on major change', signing: 'Owner (signed); Manager' },
  { id: '23', title: "HEMM (Shovel/Dragline/Excavator) Operator's Inspection Book", act: 'CMR 2026', rule: 'Regulation 54(c) and (l)', frequency: 'Beginning and end of every shift', signing: 'HEMM Operator (signed); Mechanical Supervisor' },
  { id: '24', title: "Truck/Tipper/Dumper Operator's Inspection Book", act: 'CMR 2026', rule: 'Regulation 55(c) and (k)', frequency: 'Beginning and end of every shift', signing: 'Truck/Dumper Operator (signed); Mechanical Supervisor' },
  { id: '25', title: 'Fence / Surface Structure Examination Report', act: 'CMR 2026', rule: 'Regulation 228(2)', frequency: 'Once in every 7 days', signing: 'Competent Person (signed)' },
  { id: '26', title: 'Spot Inspection Register (CIFF/Inspector Entries)', act: 'CMR 2026', rule: 'Regulation 109(1)–(5)', frequency: 'On each DGMS inspection; kept 3 years', signing: 'CIFF / Inspector-cum-Facilitator; Manager' },
  { id: '27', title: 'Magazine Explosives Issue & Receipt Register', act: 'CMR 2026', rule: 'Regulation 177(4)', frequency: 'Every transaction (issue/receipt); maintained continuously', signing: 'Magazine In-Charge' },
  { id: '28', title: "Shot-Firer's Shift-End Report / Explosives Usage Record", act: 'CMR 2026', rule: 'Regulation 198(b)', frequency: 'End of every shift', signing: 'Shot-Firer (signed)' },
  { id: '29', title: 'Misfire Report Book', act: 'CMR 2026', rule: 'Regulation 196(10)(b)–(c)', frequency: 'Whenever a misfire occurs; before leaving mine', signing: 'Shot-Firer (signed); Mine Management informed' },
  { id: '30', title: 'Magazine Explosives Records (CMR Reg 52)', act: 'CMR 2026', rule: 'Regulation 52(d)', frequency: 'Every transaction (daily)', signing: 'Magazine In-Charge (signed); Manager' },
  { id: '31', title: 'Danger/Emergency Record (Withdrawal of Persons)', act: 'CMR 2026', rule: 'Regulation 122(2)–(4)', frequency: 'Immediately when danger occurs', signing: 'Competent Person; Manager' },
  { id: '32', title: 'Water Flood Level Record (Annual Rains Monitoring)', act: 'CMR 2026', rule: 'Regulation 141(3)', frequency: 'Annually during monsoon; updated on Mine Plans', signing: 'Manager / Surveyor' },
  { id: '34', title: 'Spontaneous Heating/Fire Inspection Record (Opencast)', act: 'CMR 2026', rule: 'Regulation 130', frequency: 'Once in every 7 days', signing: 'Competent Person (signed); Manager (countersigned)' },
  { id: '35', title: 'Fire Safety Equipment Check Record (HEMM — Opencast)', act: 'CMR 2026', rule: 'Regulation 129(5) / 130', frequency: 'As per code of practice / shift-wise', signing: 'Competent Person / Mechanical Supervisor' },
  { id: '36', title: 'Register of Accidents and Dangerous Occurrences', act: 'OSH Rules 2026', rule: 'Rule 75', frequency: 'Maintained continuously; preserved 5 years', signing: 'Manager' },
  { id: '37', title: 'Notice/Sketch of Fatal/Serious Accident Site', act: 'CMR 2026', rule: 'Regulation 241(2)–(4)', frequency: 'Immediately after accident; particulars within 7 days', signing: 'Manager / Assistant Manager / Safety Officer / Surveyor' },
  { id: '41', title: 'First-Aid Station Equipment Register / List', act: 'CMR 2026 / OSH Rules 2026', rule: 'CMR Reg (Chapter — Health)', frequency: 'Maintained continuously; list kept at Mine Office', signing: 'Manager; First-Aid Trained Person In-Charge' },
  { id: '42', title: 'Health Examination Records (Mine Employees)', act: 'OSH Rules 2026', rule: 'Rule as applicable / FORM IX', frequency: 'As per examination schedule; annually for rescue trained persons', signing: 'Examining Authority / Medical Officer' },
  { id: '43', title: 'General Preservation of All Registers & Records', act: 'OSH Rules 2026', rule: 'Rules 72(4), 72(7)(ii)', frequency: 'Preserved 5 years from date of last entry', signing: 'Employer / Manager' },
  { id: '44', title: 'Display on Notice Board', act: 'OSH Rules 2026', rule: 'Rule 73', frequency: 'Continuously maintained and updated', signing: 'Employer / Manager' },
  { id: '45', title: "Surveyor's Bound Paged Book / Field Record Book", act: 'CMR 2026', rule: 'Regulation 45', frequency: 'As and when required; continuously maintained', signing: 'Surveyor (signed/e-signed); Manager (countersigned)' },
  { id: '46', title: 'Magazine In-Charge Records of Explosives (Receipt, Storage & Issue)', act: 'CMR 2026', rule: 'Regulation 52(d)', frequency: 'Every transaction (issue/receipt); maintained continuously', signing: 'Magazine In-Charge' },
  { id: '47', title: 'Post-Fire / Spontaneous Heating Examination Report', act: 'CMR 2026', rule: 'Regulation 135', frequency: 'After every fire or spontaneous heating incident', signing: 'Manager / Assistant Manager' },
  { id: '48', title: 'Airborne Respirable Dust Measurement Record', act: 'CMR 2026', rule: 'Regulation 135(8)', frequency: 'Recorded within 14 days of sample collection', signing: 'Sampling In-Charge; Manager (countersigned within 24 hrs)' },
  { id: '49', title: 'Dust Prevention / Suppression Device Inspection & Test Record', act: 'CMR 2026', rule: 'Regulation 135(13)(h)', frequency: 'Inspection: every 7 days; Test: every month', signing: 'Competent Person (signed)' },
  { id: '50', title: 'Dust Sample Analysis Result Book', act: 'CMR 2026', rule: 'Regulation 135(17)', frequency: 'Sample sent within 7 days; result recorded immediately on receipt', signing: 'Sampling In-Charge; Manager (countersigned)' },
  { id: '51', title: 'Fence / Tank / Reservoir Examination Report (Surface — Opencast)', act: 'CMR 2026', rule: 'Regulation 228(2)', frequency: 'Once in every 7 days', signing: 'Competent Person (signed/e-signed and dated)' },
  { id: '52', title: 'Noise Mapping & Personal Noise Dosimetry Records', act: 'CMR 2026', rule: 'Regulation 230(12)', frequency: 'As per procedure specified by CIFF; periodically', signing: 'Owner / Agent / Manager' },
  { id: '53', title: 'Minutes of the Meeting of the Safety Committee', act: 'OHS Rules', rule: 'Regulation 15(5)', frequency: 'After every Safety Committee meeting', signing: 'Safety Officer / Committee Secretary' },
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