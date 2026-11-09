import React, { useState } from 'react';
import { X, Plus, Trash2, RotateCcw, Calculator, Code2, CheckCircle2, AlertCircle } from 'lucide-react';

interface SubjectEntry {
  id: string;
  name: string;
  marks: number;
  maxMarks: number;
  credits: number;
}

interface GradeCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  githubUrl: string;
}

const DEFAULT_SUBJECTS: SubjectEntry[] = [
  { id: '1', name: 'Programming in Python', marks: 88, maxMarks: 100, credits: 4 },
  { id: '2', name: 'Engineering Mathematics', marks: 82, maxMarks: 100, credits: 4 },
  { id: '3', name: 'Digital Logic Design', marks: 79, maxMarks: 100, credits: 3 },
  { id: '4', name: 'Web Development Basics', marks: 91, maxMarks: 100, credits: 3 },
];

export const GradeCalculatorModal: React.FC<GradeCalculatorModalProps> = ({ isOpen, onClose, githubUrl }) => {
  const [subjects, setSubjects] = useState<SubjectEntry[]>(DEFAULT_SUBJECTS);
  const [activeTab, setActiveTab] = useState<'calculator' | 'code'>('calculator');
  const [newSubName, setNewSubName] = useState('');
  const [newSubMarks, setNewSubMarks] = useState('');
  const [newSubCredits, setNewSubCredits] = useState('3');

  if (!isOpen) return null;

  // Calculation Logic
  const totalObtained = subjects.reduce((acc, sub) => acc + (Number(sub.marks) || 0), 0);
  const totalMax = subjects.reduce((acc, sub) => acc + (Number(sub.maxMarks) || 100), 0);
  const percentage = totalMax > 0 ? (totalObtained / totalMax) * 100 : 0;
  
  // Grade scale
  const getGrade = (pct: number) => {
    if (pct >= 90) return { letter: 'A+', gpa: 10.0, status: 'Outstanding', color: 'text-emerald-400' };
    if (pct >= 80) return { letter: 'A', gpa: 9.0, status: 'Excellent', color: 'text-blue-400' };
    if (pct >= 70) return { letter: 'B+', gpa: 8.0, status: 'Very Good', color: 'text-indigo-400' };
    if (pct >= 60) return { letter: 'B', gpa: 7.0, status: 'Good', color: 'text-purple-400' };
    if (pct >= 50) return { letter: 'C', gpa: 6.0, status: 'Satisfactory', color: 'text-yellow-400' };
    if (pct >= 40) return { letter: 'P', gpa: 5.0, status: 'Pass', color: 'text-orange-400' };
    return { letter: 'F', gpa: 0.0, status: 'Re-appear', color: 'text-rose-400' };
  };

  const gradeInfo = getGrade(percentage);

  // Weighted GPA
  const totalCredits = subjects.reduce((acc, s) => acc + (Number(s.credits) || 1), 0);
  const weightedGpaPoints = subjects.reduce((acc, s) => {
    const subPct = (s.marks / s.maxMarks) * 100;
    const subGpa = getGrade(subPct).gpa;
    return acc + subGpa * (Number(s.credits) || 1);
  }, 0);
  const weightedGpa = totalCredits > 0 ? (weightedGpaPoints / totalCredits).toFixed(2) : '0.00';

  const handleUpdateMarks = (id: string, marks: number) => {
    const clamped = Math.max(0, Math.min(100, isNaN(marks) ? 0 : marks));
    setSubjects((prev) => prev.map((s) => (s.id === id ? { ...s, marks: clamped } : s)));
  };

  const handleAddSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubName.trim()) return;
    const marksNum = Math.max(0, Math.min(100, Number(newSubMarks) || 0));
    const creditsNum = Math.max(1, Math.min(10, Number(newSubCredits) || 3));
    setSubjects((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: newSubName.trim(),
        marks: marksNum,
        maxMarks: 100,
        credits: creditsNum,
      },
    ]);
    setNewSubName('');
    setNewSubMarks('');
    setNewSubCredits('3');
  };

  const handleRemoveSubject = (id: string) => {
    if (subjects.length <= 1) return;
    setSubjects((prev) => prev.filter((s) => s.id !== id));
  };

  const handleReset = () => {
    setSubjects(DEFAULT_SUBJECTS);
  };

  const pythonSnippet = `# Student Grade Calculator in Python
# Developed by Manoj Yadav (Aspiring AI Engineer)

def calculate_student_grade(subjects_data):
    total_obtained = sum(sub['marks'] for sub in subjects_data)
    total_max = sum(sub['max_marks'] for sub in subjects_data)
    
    percentage = (total_obtained / total_max) * 100 if total_max > 0 else 0
    
    if percentage >= 90:
        grade, gpa = 'A+', 10.0
    elif percentage >= 80:
        grade, gpa = 'A', 9.0
    elif percentage >= 70:
        grade, gpa = 'B+', 8.0
    elif percentage >= 60:
        grade, gpa = 'B', 7.0
    elif percentage >= 50:
        grade, gpa = 'C', 6.0
    elif percentage >= 40:
        grade, gpa = 'P', 5.0
    else:
        grade, gpa = 'F', 0.0
        
    return {
        "total_obtained": total_obtained,
        "total_max": total_max,
        "percentage": round(percentage, 2),
        "grade": grade,
        "gpa": gpa,
        "status": "PASS" if percentage >= 40 else "FAIL"
    }

# Sample Execution
subjects = [
    {"name": "Python Programming", "marks": 88, "max_marks": 100},
    {"name": "Engineering Mathematics", "marks": 82, "max_marks": 100},
    {"name": "Digital Logic", "marks": 79, "max_marks": 100},
]

result = calculate_student_grade(subjects)
print(f"Percentage: {result['percentage']}% | Grade: {result['grade']}")
`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0d1d] border border-blue-500/20 rounded-2xl p-6 md:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
              <span>Project Demo</span>
              <span aria-hidden="true">·</span>
              <span>Python & JavaScript Implementation</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              <Calculator className="w-6 h-6 text-blue-400" />
              Student Grade Calculator — Live Interactive Demo
            </h3>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Test out the calculation algorithm live with dynamic subjects, marks, weighted credits, and performance grading.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between gap-4 mt-6 mb-6">
          <div className="flex items-center gap-2 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'calculator'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              Interactive Calculator
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'code'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Python Source Code
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-md transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Defaults
            </button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-md hover:bg-blue-500/20 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {activeTab === 'calculator' ? (
          <div className="space-y-6">
            {/* Real-time Summary Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <span className="text-xs text-slate-400 block mb-1">Aggregate Marks</span>
                <span className="text-2xl font-bold font-mono tabular-nums text-white">
                  {totalObtained}
                  <span className="text-xs text-slate-500 font-sans ml-1">/ {totalMax}</span>
                </span>
              </div>
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <span className="text-xs text-slate-400 block mb-1">Percentage</span>
                <span className="text-2xl font-bold font-mono tabular-nums text-blue-400">
                  {percentage.toFixed(1)}%
                </span>
              </div>
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <span className="text-xs text-slate-400 block mb-1">Weighted SGPA</span>
                <span className="text-2xl font-bold font-mono tabular-nums text-purple-400">
                  {weightedGpa}
                  <span className="text-xs text-slate-500 font-sans ml-1">/ 10</span>
                </span>
              </div>
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl">
                <span className="text-xs text-slate-400 block mb-1">Final Grade</span>
                <div className="flex items-center gap-2">
                  <span className={`text-2xl font-bold font-mono ${gradeInfo.color}`}>
                    {gradeInfo.letter}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">({gradeInfo.status})</span>
                </div>
              </div>
            </div>

            {/* Subject Input Table */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl overflow-hidden">
              <div className="px-4 py-3 bg-slate-800/40 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400 grid grid-cols-12 gap-3 items-center">
                <div className="col-span-5 sm:col-span-6">Subject / Course Name</div>
                <div className="col-span-3 sm:col-span-3 text-center">Marks (0-100)</div>
                <div className="col-span-2 sm:col-span-2 text-center">Credits</div>
                <div className="col-span-2 sm:col-span-1 text-right">Action</div>
              </div>

              <div className="divide-y divide-slate-800/60">
                {subjects.map((sub) => {
                  const subPct = (sub.marks / sub.maxMarks) * 100;
                  const itemGrade = getGrade(subPct);
                  return (
                    <div
                      key={sub.id}
                      className="px-4 py-3 grid grid-cols-12 gap-3 items-center hover:bg-slate-800/20 transition-colors"
                    >
                      <div className="col-span-5 sm:col-span-6">
                        <div className="font-medium text-sm text-slate-200">{sub.name}</div>
                        <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                          <span>Grade: <span className={itemGrade.color}>{itemGrade.letter}</span></span>
                          <span aria-hidden="true">·</span>
                          <span>GP: {itemGrade.gpa}</span>
                        </div>
                      </div>

                      <div className="col-span-3 sm:col-span-3 flex items-center justify-center">
                        <input
                          type="number"
                          min="0"
                          max="100"
                          value={sub.marks}
                          onChange={(e) => handleUpdateMarks(sub.id, parseInt(e.target.value))}
                          className="w-20 px-2.5 py-1 text-center font-mono tabular-nums bg-slate-950 border border-slate-700 rounded-md text-white focus:outline-none focus:border-blue-500 text-sm"
                        />
                      </div>

                      <div className="col-span-2 sm:col-span-2 text-center text-sm font-mono text-slate-300">
                        {sub.credits}
                      </div>

                      <div className="col-span-2 sm:col-span-1 text-right">
                        <button
                          onClick={() => handleRemoveSubject(sub.id)}
                          disabled={subjects.length <= 1}
                          className="p-1.5 text-slate-500 hover:text-rose-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          title="Remove subject"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Add Course Form */}
              <form onSubmit={handleAddSubject} className="p-4 bg-slate-900/90 border-t border-slate-800">
                <div className="text-xs font-medium text-slate-400 mb-2">Add New Course:</div>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <div className="sm:col-span-6">
                    <input
                      type="text"
                      placeholder="e.g. Basic Electrical Engineering"
                      value={newSubName}
                      onChange={(e) => setNewSubName(e.target.value)}
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-md text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <input
                      type="number"
                      placeholder="Marks (0-100)"
                      min="0"
                      max="100"
                      value={newSubMarks}
                      onChange={(e) => setNewSubMarks(e.target.value)}
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-md text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 text-center font-mono"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <select
                      value={newSubCredits}
                      onChange={(e) => setNewSubCredits(e.target.value)}
                      className="w-full px-2 py-1.5 bg-slate-950 border border-slate-700 rounded-md text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="1">1 Credit</option>
                      <option value="2">2 Credits</option>
                      <option value="3">3 Credits</option>
                      <option value="4">4 Credits</option>
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <button
                      type="submit"
                      disabled={!newSubName.trim()}
                      className="w-full h-full flex items-center justify-center p-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-md transition-colors"
                      title="Add Course"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Performance analysis & feedback */}
            <div className="p-4 bg-blue-950/20 border border-blue-900/30 rounded-xl flex items-start gap-3">
              {percentage >= 40 ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div className="text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white">Status Assessment: </span>
                {percentage >= 75 ? (
                  <>First Class with Distinction. Excellent academic performance across core first-year subjects.</>
                ) : percentage >= 60 ? (
                  <>First Class. Consistent understanding in all evaluated coursework modules.</>
                ) : percentage >= 40 ? (
                  <>Passing Standard Met. Recommend focused revision in subjects with scores below 60%.</>
                ) : (
                  <>Below Passing Threshold. Requires remedial study in flagged modules.</>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>grade_calculator.py</span>
              <span>Python 3.x Script</span>
            </div>
            <pre className="p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed selection:bg-blue-500/30">
              <code>{pythonSnippet}</code>
            </pre>
          </div>
        )}

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Created by Manoj Yadav · First-Year B.Tech CSE Project
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Demo
          </button>
        </div>
      </div>
    </div>
  );
};
