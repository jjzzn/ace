import React, { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Courses = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('simplify');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['simplify', 'anterior', 'masters'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const courses = {
    simplify: {
      id: 'simplify',
      title: 'Simplify Your Revision™',
      subtitle: 'INSTRUCTIONAL COURSE',
      fullTitle: 'Simplify Your Revision™',
      image: 'https://in2it-service.com/ace/revision.png',
      description: 'The Simplify Your Revision™ Instructional Course is designed to provide surgeons with the knowledge, skills and confidence to perform Revision Hip & Knee Arthroplasty procedures utilizing the DePuy Synthes revision portfolio, in particular ATTUNE Revision and the Reclaim family of hip stems.\n\nThis course is designed to be an interactive hands-on learning experience on innovative solutions for the treatment of revision arthroplasty. Our expert faculty panel will walk participants through case presentations and discuss the treatment algorithms they use for their patients. The program focus is to train on the safe and effective use of Participants will leave with practical skills to perform the Direct Anterior surgical approach for THA and experience with technology solutions for Total Hip Arthroplasty.',
      whoShouldAttend: 'This program is designed for Orthopaedic surgeons performing greater than 50 primary hip & knee procedures per year who are interested in learning how to manage revision procedures. ',
      dates: 'May 17th & 18th, 2026',
      location: 'Asia Pacific Learning Center',
      city: 'Bangkok, Thailand',
      hasAgenda: true,
      agenda: {
        monday: {
          title: 'Monday 18th May',
          subtitle: 'Dinner & Presentations',
          time: '18:30 hrs. -21:00 hrs.',
          sessions: [
            { time: '18:30 hrs.', duration: '5mins', title: 'Welcome and Course Objectives', speaker: 'xxxx(DPS)' },
            { time: '18:35 hrs.', duration: '5mins', title: 'ATTUNE Revision System Design Overview', speaker: 'DPS or Faculty' },
            { time: '18:40 hrs.', duration: '5mins', title: 'RECLAIM Revision Stems Design Overview', speaker: 'DPS or Faculty' },
            { time: '18:45 hrs.', duration: '10mins', title: 'Implant Removal techniques in rTKA', speaker: '' },
            { time: '19:00 hrs.', duration: '10mins', title: 'Implant Removal in rTHA', speaker: '' },
            { time: '19:10 hrs.', duration: '10mins', title: 'Watson Extraction System Surgical Video', speaker: '' },
            { time: '19:20 hrs.', duration: '60mins', title: 'Dinner', speaker: '' },
            { time: '20:20 hrs.', duration: '15mins', title: 'Exposure in Revision TKA\n• Tibial Tubercle Osteotomy\n• Rectus Snip', speaker: '' },
            { time: '20:35 hrs.', duration: '15mins', title: 'Managing Complications in Revision THA\n• Femoral Fracture\n• Extended Trochanteric Osteotomy', speaker: '' },
            { time: '20:50 hrs.', duration: '10mins', title: 'Close Day 1, Day 2 logistics and transfers information', speaker: 'xxxxx(DPS)' }
          ]
        },
        tuesday: {
          title: 'Tuesday 19th May',
          subtitle: 'DePuy Synthes Skills Lab',
          time: '9:00 hrs. -16:00hrs.',
          sessions: [
            { time: '9:00 hrs.', duration: '60mins', title: 'Welcome and Objectives', speaker: '(DPS)', isHeader: true },
            { time: '9:00 hrs.', duration: '60mins', title: 'Group A Surgical Demonstrations:\n• Reclaim MB Surgical technique demonstration\n• Reclaim Modular technique demonstration', colSpan: 1, speaker: '' },
            { time: '9:00 hrs.', duration: '60mins', title: 'Group B Surgical Demonstrations:\n• ATTUNE Revision RP & Sleeves', colSpan: 1, speaker: '' },
            { time: '10:05 hrs.', duration: '15mins', title: 'Morning Tea Break', speaker: '', isBreak: true },
            { time: '10:20 hrs.', duration: '100mins', title: 'Hands-on Skills Lab Group A: Revision Hip\n• Exposure & Extensile Releases\n• Implant Removal – Watson Extraction System\n• Femoral Preparation – Reclaim MB or Reclaim Modular\n• Trial and Implantation', colSpan: 1, speaker: 'All delegates and faculty' },
            { time: '10:20 hrs.', duration: '100mins', title: 'Hands-on Skills Lab Group B: Revision Knee\n• Exposure & Extensile Releases\n• Implant Removal\n• Tibial Preparation & defect management\n• Femoral Preparation & defect management\n• Trial and Implant Assembly', colSpan: 1, speaker: 'All delegates and faculty' },
            { time: '12:00 hrs.', duration: '60mins', title: 'Lunch Break', speaker: '', isBreak: true },
            { time: '13:00 hrs.', duration: '60mins', title: 'Group B Surgical Demonstrations:\n• ATTUNE Revision RP & Sleeves', colSpan: 1, speaker: '' },
            { time: '13:00 hrs.', duration: '60mins', title: 'Rotation A Surgical Demonstrations:\n• Reclaim MB Surgical technique demonstration\n• Reclaim Modular technique demonstration', colSpan: 1, speaker: '' },
            { time: '14:00 hrs.', duration: '100mins', title: 'Hands-on Skills Lab Rotation B: Revision Knee\n• Exposure & Extensile Releases\n• Implant Removal\n• Tibial Preparation & defect management\n• Femoral Preparation & defect management\n• Trial and Implant Assembly', colSpan: 1, speaker: 'All delegates and faculty' },
            { time: '14:00 hrs.', duration: '100mins', title: 'Hands-on Skills Lab Rotation A: Revision Hip\n• Exposure & Extensile Releases\n• Implant Removal – Watson Extraction System\n• Femoral Preparation – Reclaim MB or Reclaim Modular\n• Trial and Implantation', colSpan: 1, speaker: 'All delegates and faculty' },
            { time: '15:40 hrs.', duration: '20mins', title: 'Close and Certificates', speaker: 'Tom Carey (DPS) and faculty' }
          ]
        }
      },
      faculty: [
        { name: 'Dr. Matt Lyons', role: 'Bangkok Hip & Knee CenterSydney, Australia' },
        { name: 'Dr. xxxxxx', role: 'Consultant Orthopaedic Surgeon Perth, Western Australia' },
      ]
    },
    anterior: {
      id: 'anterior',
      title: 'ANTERIOR ADVANTAGE™',
      subtitle: 'INSTRUCTIONAL COURSE',
      fullTitle: 'ANTERIOR ADVANTAGE™',
      image: 'https://in2it-service.com/ace/hip.png',
      description: 'The ANTERIOR ADVANTAGE™ Instructional Course is designed to provide surgeons with the knowledge, skills and confidence to perform Total Hip Arthroplasty procedures using the Direct Anterior Approach with the ACTIS™ Femoral Stem.\n\nParticipants will leave with practical skills to perform the Direct Anterior surgical approach for THA and experience with technology solutions for Total Hip Arthroplasty.',
      whoShouldAttend: 'This program is designed for Orthopaedic surgeons who are interested in incorporating the Direct Anterior Approach into their hip arthroplasty practice. The course will provide an in depth look at the Anterior Approach technique with an emphasis on incorporating advanced technologies, including VELYS™ Hip Navigation and KINCISE™2 Surgical Automated System.',
      dates: 'May 17th & 18th, 2026',
      schedule: [
        'Sunday 17th Dinner 19.00 hrs. - 22.00 hrs.',
        'Monday 18th 20:30 hrs. - 22.00 hrs.'
      ],
      location: 'DePuy Synthes Asia Pacific Learning Center',
      city: 'Bangkok, Thailand',
      hasAgenda: true,
      agenda: {
        monday: {
          title: 'Monday 18th May',
          subtitle: 'Skills Lab',
          time: '9.00 hrs. - 15:30 hrs.',
          sessions: [
            { time: '9:00 hrs.', duration: '5mins', title: 'Welcome and Objectives', speaker: 'Tom Carey (DPS)', isHeader: true },
            { time: '09:05 hrs.', duration: '30mins', title: 'Surgical Technique Presentations –Direct Anterior Approach (DAA) using standard OR table\n• Patient positioning and exposure\n• Osteotomy\n• Acetabular Preparation\n• Femoral Preparation\n• Trial and Implantation', speaker: 'Dr. Phonthakorn Panichkul' },
            { time: '09:35 hrs.', duration: '10mins', title: 'Direct Anterior Approach: reducing over the learning curve', speaker: 'Dr. Tim Alton' },
            { time: '09:45 hrs.', duration: '20mins', title: 'Technology in DAA THA – Fluoroscopic Navigation and Automated Impaction', speaker: 'Dr. Samuel Duff' },
            { time: '10:05 hrs.', duration: '15mins', title: 'Morning Tea', speaker: '', isBreak: true },
            { time: '10:20 hrs.', duration: '120mins', title: 'Hands-on Skills Lab Rotation 1: Direct Anterior Approach\n• Patient Positioning & Exposure\n• Femoral Head Osteotomy\n• Acetabular Preparation\n• Femoral Preparation\n• Trial and Implantation', speaker: 'All delegates and faculty' },
            { time: '12:20 hrs.', duration: '60mins', title: 'Lunch Break', speaker: '', isBreak: true },
            { time: '13:20 hrs.', duration: '120mins', title: 'Hands-on Skills Lab Rotation 2: Direct Anterior Approach\n• Patient Positioning & Exposure\n• Femoral Head Osteotomy\n• Acetabular Preparation\n• Femoral Preparation\n• Trial and Implantation', speaker: 'All delegates and faculty' },
            { time: '15:20 hrs.', duration: '10mins', title: 'Close and Certificates', speaker: 'Tom Carey (DPS) and faculty' }
          ]
        }
      },
      faculty: [
        { name: 'Dr. Phonthakorn Panichkul', role: 'Bangkok Hip & Knee Center Bangkok, Thailand' },
        { name: 'Dr. Timothy Alton', role: 'Proliance Surgeons Renton, Washington' },
        { name: 'Dr. Samuel Duff', role: 'Consultant Orthopaedic Surgeon Perth, Western Australia' },
      ]
    },
    masters: {
      id: 'masters',
      title: 'MASTERS KNEE COURSE',
      subtitle: 'INSTRUCTIONAL COURSE',
      fullTitle: 'ACE: Masters Knee Course',
      image: 'https://in2it-service.com/ace/knee.png',
      description: 'The ACE: Masters Knee Course is designed to provide surgeons with increased practical skills and confidence to optimize Total Knee and Unicompartmental Knee Arthroplasty procedures using ATTUNE™, SIGMA PARTIAL™ and VELYS™ Robotic Assisted Solution.\n\nThe TKA sessions will focus on Kinematic Restoration for KA and iKA technique optimization, as well as pre and intra-operative process to maximise OR efficicency.\n\nThe UKA sessions will provide deeper insights into the implant design and surgical technique for SIGMA PARTIAL™ as well as the VELYS™ Robotic-Assisted Solution UKA software.',
      whoShouldAttend: 'This program is designed for Orthopaedic surgeons who have performed more than 50 Robotic-Assisted TKA cases and / or more than 30 Robotic-Assisted UKA cases, who are wanting to improve their knowledge and use of VELYS™ RAS with ATTUNE™ and SIGMA PARTIAL™.',
      dates: 'May 17th & 18th, 2026',
      schedule: [
        'Sunday 17th Dinner 18:30hrs. - 21:30 hrs.',
        'Monday 18th 20:30 hrs. - 22.00 hrs.'
      ],
      location: 'DePuy Synthes Asia Pacific Learning Center',
      city: 'Bangkok, Thailand',
      hasAgenda: true,
      agenda: {
        monday: {
          title: 'Sunday 17th May',
          subtitle: 'Dinner & Presentations',
          time: '18:00pm -21:30pm',
          sessions: [
            { time: '18:00 hrs.', duration: '5mins', title: 'Welcome and Course Objectives', speaker: '(DPS)', isHeader: true },
            { time: '18:05 hrs.', duration: '10mins', title: 'TKA vs UKA – patient selection, patient satisfaction', speaker: '' },
            { time: '18:15 hrs.', duration: '15mins', title: 'ATTUNE & MS Insert – The Kinematic Knee Implant', speaker: '' },
            { time: '18:30 hrs.', duration: '10mins', title: 'VELYS RAS TKA System Overview', speaker: '' },
            { time: '19:00 hrs.', duration: '10mins', title: 'Why I choose Inverse Kinematic Alignment (iKA)', speaker: '' },
            { time: '19:10 hrs.', duration: '10mins', title: 'Why I choose Kinematic Alignment (KA)', speaker: '' },
            { time: '19:20 hrs.', duration: '10mins', title: 'Why I choose Functional Alignment (FA)', speaker: '' },
            { time: '19:23 hrs.', duration: '60mins', title: 'Dinner', speaker: '', isBreak: true },
            { time: '20:30 hrs.', duration: '15mins', title: 'Sigma Partial Design & Survivorship', speaker: '' },
            { time: '20:45 hrs.', duration: '10mins', title: 'VELYS RAS UKA System Overview', speaker: '' },
            { time: '21:15 hrs.', duration: '10mins', title: 'UKA Exposure and Wound Closure', speaker: '' },
            { time: '21:25 hrs.', duration: '5mins', title: 'Close Day 1, Day 2 logistics and transfers information', speaker: '(DPS)' }
          ]
        },
        tuesday: {
          title: 'Monday 18th May',
          subtitle: 'Skills Lab',
          time: '21.00 hrs. - 22.00 hrs.',
          sessions: [
            { time: '9:00 hrs.', duration: '5mins', title: 'Welcome and Objectives', speaker: '(DPS)', isHeader: true },
            { time: '', duration: '', title: 'Session 1: Kinematic Restoration', speaker: '', isHeader: true },
            { time: '9:05 hrs.', duration: '15mins', title: 'Demonstration: Landmarking and Planning for Kinematic Alignment with VELYS Robotic-Assisted Solution', speaker: '' },
            { time: '9:20 hrs.', duration: '15mins', title: 'Demonstration: Landmarking and Planning for Inverse Kinematic Alignment with VELYS Robotic-Assisted Solution', speaker: '' },
            { time: '9:35 hrs.', duration: '120mins', title: 'Hands-on Skills Lab : Kinematic Restoration\n• iKA, KA or FA workflow\n• Surgical Efficiency Tips & Tricks from faculty', speaker: 'All delegates and faculty' },
            { time: '11:35 hrs.', duration: '45mins', title: 'Lunch Break', speaker: '', isBreak: true },
            { time: '', duration: '', title: 'Session 2: UKA with VELYS RAS', speaker: '', isHeader: true },
            { time: '12:20 hrs.', duration: '15mins', title: 'Demonstration: Landmarking and Planning for UKA with VELYS Robotic-Assisted Solution', speaker: '' },
            { time: '12:35 hrs.', duration: '120mins', title: 'Hands-on Skills Lab: UKA with VELYS RAS\n• Landmarking / registration process\n• Planning & Implant Sizing tips and tricks\n• Resections\n• Surgical Efficiencies', speaker: 'All delegates and faculty' },
            { time: '14:35 hrs.', duration: '', title: '', speaker: '' },
            { time: '15:50 hrs.', duration: '10mins', title: 'Close and Certificates', speaker: '(DPS) and faculty' }
          ]
        }
      },
      faculty: [
        { name: 'Dr. Matt Lyons', role: 'Bangkok Hip & Knee Center Sydney, Australia' },
      ]
    }
  };

  const activeCourse = courses[activeTab];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-8 md:py-12 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Course</h1>
          
          {/* Tab Navigation */}
          <div className="flex gap-0 border-b-2 border-gray-200">
            <button
              onClick={() => setActiveTab('simplify')}
              className={`px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                activeTab === 'simplify'
                  ? 'text-primary-600 border-b-3 border-primary-600 -mb-0.5'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Simplify Your Revision™
            </button>
            <button
              onClick={() => setActiveTab('anterior')}
              className={`px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                activeTab === 'anterior'
                  ? 'text-primary-600 border-b-3 border-primary-600 -mb-0.5'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Anterior Advantage™
            </button>
            <button
              onClick={() => setActiveTab('masters')}
              className={`px-6 py-3 font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                activeTab === 'masters'
                  ? 'text-primary-600 border-b-3 border-primary-600 -mb-0.5'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Masters Knee Course
            </button>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Top Section - Image and Title */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Image */}
          <div className="md:col-span-1">
            <div className="bg-gray-300 rounded-lg overflow-hidden h-80">
              <img 
                src={activeCourse.image} 
                alt={activeCourse.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Date and Location */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">{activeCourse.dates}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">LOCATION</p>
                  <p className="text-gray-700">{activeCourse.location}</p>
                  <p className="text-gray-700">{activeCourse.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2 flex flex-col">
            <div>
              <p className="text-sm text-primary-600 font-semibold mb-2">{activeCourse.subtitle}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 italic">
                {activeCourse.fullTitle}
              </h2>

              <div className="text-gray-700 mb-6 leading-relaxed space-y-4">
                {activeCourse.description.split('\n\n').map((paragraph, idx) => {
                  if (idx === 0) {
                    const courseName = activeCourse.fullTitle;
                    if (paragraph.includes(courseName)) {
                      const parts = paragraph.split(courseName);
                      return (
                        <p key={idx}>
                          The <strong>{courseName}</strong>{parts[1]}
                        </p>
                      );
                    }
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>

              {activeCourse.details && activeCourse.details.map((detail, idx) => (
                <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                  {detail}
                </p>
              ))}

              {/* Distinguished Faculty */}
              {activeCourse.faculty && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">DISTINGUISHED FACULTY</h3>
                  <div className="flex flex-wrap gap-6">
                    {activeCourse.faculty.map((member, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div>
                          <p className="font-semibold text-sm">{member.name}</p>
                          <p className="text-xs text-gray-600">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Who Should Attend */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Who should attend?</h3>
                <p className="text-gray-700 text-sm">
                  {activeCourse.whoShouldAttend}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agenda Section - Full Width */}
        {activeCourse.hasAgenda && (
          <div className="w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Agenda: Monday 18th May</h3>
                
            {/* Monday Schedule */}
            <div className="mb-8">
              <div className="bg-primary-600 text-white px-4 py-2 rounded-t-lg">
                <h4 className="font-bold">{activeCourse.agenda.monday.title}</h4>
                <p className="text-sm">{activeCourse.agenda.monday.subtitle}</p>
                <p className="text-sm">{activeCourse.agenda.monday.time}</p>
              </div>
              <div className="border border-gray-200 rounded-b-lg overflow-hidden">
                {activeCourse.agenda.monday.sessions.map((session, idx) => (
                  <div 
                    key={idx} 
                    className={`grid grid-cols-12 border-b border-gray-200 last:border-b-0 ${
                      session.isBreak ? 'bg-gray-100' : session.isHeader ? 'bg-primary-100' : session.title.includes('Dinner') ? 'bg-gray-100' : 'bg-white'
                    }`}
                  >
                    <div className="col-span-2 p-3 border-r border-gray-200 text-sm font-semibold text-gray-700">
                      {session.time}
                    </div>
                    <div className="col-span-2 p-3 border-r border-gray-200 text-sm text-gray-600">
                      {session.duration}
                    </div>
                    <div className="col-span-6 p-3 border-r border-gray-200">
                      <p className="text-sm text-gray-900 whitespace-pre-line">{session.title}</p>
                    </div>
                    <div className="col-span-2 p-3 text-sm text-gray-700">
                      {session.speaker}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tuesday Schedule - Only show if exists */}
            {activeCourse.agenda.tuesday && (
              <div className="mb-8">
                <div className="bg-primary-600 text-white px-4 py-2 rounded-t-lg">
                  <h4 className="font-bold">{activeCourse.agenda.tuesday.title}</h4>
                  <p className="text-sm">{activeCourse.agenda.tuesday.subtitle}</p>
                  <p className="text-sm">{activeCourse.agenda.tuesday.time}</p>
                </div>
                <div className="border border-gray-200 rounded-b-lg overflow-hidden">
                  {activeCourse.agenda.tuesday.sessions.map((session, idx) => (
                    <div 
                      key={idx} 
                      className={`grid grid-cols-12 border-b border-gray-200 last:border-b-0 ${
                        session.isBreak ? 'bg-gray-100' : session.isHeader ? 'bg-primary-100' : 'bg-white'
                      }`}
                    >
                      <div className="col-span-2 p-3 border-r border-gray-200 text-sm font-semibold text-gray-700">
                        {session.time}
                      </div>
                      <div className="col-span-2 p-3 border-r border-gray-200 text-sm text-gray-600">
                        {session.duration}
                      </div>
                      <div className="col-span-6 p-3 border-r border-gray-200">
                        <p className="text-sm text-gray-900 whitespace-pre-line">{session.title}</p>
                      </div>
                      <div className="col-span-2 p-3 text-sm text-gray-700">
                        {session.speaker}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
