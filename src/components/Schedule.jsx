import React, { useState } from 'react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const day1Tracks = [
    {
      title: 'Mainstage',
      sessions: [
        { start: '11:00', end: '13:00', topic: 'Registration', speaker: '', isBreak: true },
        { start: '12:00', end: '13:00', topic: 'Lunch', speaker: '', isBreak: true },
        { start: '13:00', end: '13:05', topic: 'Welcome from DePuy Synthes', speaker: 'Vishnu Kalra - International President DePuy Synthes' },
        { start: '13:05', end: '13:10', topic: 'Welcome from Johnson & Johnson MedTech', speaker: 'Sarah Najdek - President Surgery APAC J&J MedTech' },
        { start: '13:10', end: '13:15', topic: 'Symposium Open & Faculty Introduction', speaker: 'Symposium Chair: Dr. David Liu' },
        { start: '13:15', end: '13:15', topic: 'Session 1: Primary Total Hip Arthroplasty', speaker: 'Moderator: Dr. David Liu', isSession: true },
        { start: '13:15', end: '13:20', topic: 'Is THA as good as it will ever be?', speaker: 'Dr. David Liu' },
        { start: '13:20', end: '13:30', topic: 'Leveraging Marginal Gains to elevate outcomes in THA', speaker: 'Dr. Ryan Nunley?' },
        { start: '13:30', end: '14:00', topic: 'Video Case Presentations: The power of marginal gains\n• Multilayer closure: Dr. Henry Fu\n• Bleeding Management: Dr. Ishikura', speaker: '' },
        { start: '14:05', end: '14:30', topic: 'Debate: My stem choice is the best stem choice / Why and how I make my stem choice work (with videos)\n• For Blade Stems: Dr. David Liu\n• For Cemented stems: Dr. Lincoln Liow\n• For Corail / Fully HA Coated stems: Dr. SKS Marya\n• For ACTIS / Short Triple Tapered Stems: Dr. Ryan Nunley or Alton', speaker: '' },
        { start: '14:30', end: '14:45', topic: 'Debate: Direct Anterior is clearly the superior approach in THA\n• For: Dr. Phonthakorn - Thailand\n• Against: Dr. Yoon PW - Korea', speaker: '' },
        { start: '14:45', end: '15:05', topic: 'Video Based Case Presentations\n• DAA Standard OR table: Dr. Phonthakorn - Thailand\n• Mini incision Posterior THA: Dr. Yoon PW – Korea\n• Piriformis sparing posterior approach: Faculty??', speaker: '' },
        { start: '15:05', end: '15:20', topic: 'Debate: Do we need Dual Mobility?\n• Invaluable Option for Complex cases: Faculty name\n• Head size and Personalized Implant position is better: Faculty name', speaker: '' },
        { start: '15:20', end: '15:30', topic: 'Wound Complication avoidance in Joint Replacement', speaker: 'Faculty Name' },
        { start: '15:30', end: '15:45', topic: 'Afternoon Tea Break', speaker: '', isBreak: true },
        { start: '15:45', end: '15:45', topic: 'Session 2: Technology in Primary THA', speaker: 'Moderator: Dr. Phonthakorn Panichkul', isSession: true },
        { start: '15:45', end: '15:50', topic: 'Technology in THA: what\'s useful, what\'s marketing hype? (or what problems are we trying to solve?)', speaker: 'Faculty Name' },
        { start: '15:50', end: '15:55', topic: 'Spino-pelvic analysis: useful, or a solution in need of a problem?', speaker: 'Faculty Name' },
        { start: '15:55', end: '16:00', topic: 'ABC of Spinopelvic planning – how I do it (video based presentation)', speaker: 'AU orr US Ortoma OTS user- AU better as will have Cuptimize Adv.' },
        { start: '16:00', end: '16:15', topic: 'Debate: Robotic Assistance in THA is overhyped and unnecessary\n• For: Dr. Ryan Nunley or Tim Alton?\n• Against: Dr. David Liu', speaker: '' },
        { start: '16:15', end: '16:20', topic: 'Why are we still using mallets?', speaker: 'Dr. Pang Hee Nee ? Alton? Nunley?' },
        { start: '16:20', end: '16:50', topic: 'Video Based Case Presentations\n• CT Navigation: Dr. Tetsunaga? Ogawa?\n• THA using Fluoroscopic Navigation & Automated Impaction: Dr. Tim Alton', speaker: '' },
        { start: '16:50', end: '17:00', topic: 'Enhancing Patient Satisfaction by Maximizing Cosmesis', speaker: 'Dr. Pil Whan Yoon' },
        { start: '17:00', end: '17:10', topic: 'Video based Case Presentation\n• Wound closure in complex cases; patients with comorbidities:', speaker: 'Faculty Name' },
        { start: '17:10', end: '17:15', topic: '5 Things in 5 Minutes – improving Wound Closure Efficiency in Joint Replacement', speaker: 'Faculty name' },
        { start: '17:15', end: '17:15', topic: 'Session 3: Revision Hip Arthroplasty', speaker: 'Moderator: Dr. Pil Whan Yoon', isSession: true },
        { start: '17:15', end: '17:20', topic: 'Reasons for revision of Primary THA in Asia Pacific', speaker: 'Prof. Richard Carey-Smith?' },
        { start: '17:20', end: '17:25', topic: 'Cemented, Cementless, Modular or Monobloc? What I use and why.', speaker: 'Dr. Tim Alton?' },
        { start: '17:25', end: '17:35', topic: 'Video Based Case presentation – Cementless stem removal made easy\n• Cementless Implant Removal in Revision THA using Watson Extraction System', speaker: 'Dr. Tim Alton?' },
        { start: '17:35', end: '17:40', topic: 'Managing recurrent dislocation', speaker: 'Prof. Richard-Carey-Smith?' },
        { start: '17:40', end: '17:50', topic: 'Closing the Gap on PJI: Multiphase Prevention from Preoperative to Postoperative Care', speaker: 'Faculty Name' },
        { start: '17:50', end: '18:00', topic: 'Closing the Loop on PJI: Integrated Management from Preoperative to Postoperative Care', speaker: 'Faculty Name' },
        { start: '18:00', end: '18:05', topic: 'Day 1 Close', speaker: 'Dr. David Liu' },
      ]
    }
  ];

  const day2Tracks = [
    {
      title: 'Mainstage',
      sessions: [
        { start: '09:00', end: '09:05', topic: 'Day 2 Welcome:', speaker: 'Dr. David Liu' },
        { start: '09:05', end: '09:05', topic: 'Session 4: Primary TKA', speaker: 'Moderator:', isSession: true },
        { start: '09:05', end: '09:10', topic: 'Beyond CPAK – understanding bone and soft tissue phenotypes', speaker: 'Prof. Michael Hirschmann?' },
        { start: '09:10', end: '09:15', topic: 'Optimizing Every Layer: The Impact of Tissue Handling and Hemostasis on TKA Success', speaker: 'Prof. Hyuk Soo Han?' },
        { start: '09:15', end: '09:30', topic: 'Debate: Kinematic Alignment with no boundaries is the new Gold Standard in TKA\n• For: Dr. Lincoln Liow\n• Against: Faculty name', speaker: '' },
        { start: '09:30', end: '09:45', topic: 'Debate: Cementless Fixation in TKA\n• Cementless for all: Dr. Ryan Nunley\n• Cemented is still the way: APAC faculty??', speaker: '' },
        { start: '09:45', end: '10:05', topic: 'Debate: My insert design is the best insert design\n• For Medial Pivot: Dr. Simon Talbot\n• For Medial Stabilised: Dr. Ryan Nunley\n• For Cruciate Retaining: Faculty name', speaker: '' },
        { start: '10:05', end: '10:15', topic: 'The road to patient satisfaction is understanding the Quadriceps? Assessing and managing quadriceps malalignment.', speaker: 'Dr. Simon Talbot' },
        { start: '10:15', end: '10:15', topic: 'Morning Tea Break', speaker: '', isBreak: true },
        { start: '10:15', end: '10:15', topic: 'Session 5: Technology in primary TKA', speaker: 'Moderator:', isSession: true },
        { start: '10:50', end: '10:55', topic: 'Is technology helping us improve TKA? (or what problems is technology solving?)', speaker: 'Prof. Michael Hirschmann?' },
        { start: '10:55', end: '11:10', topic: 'Debate: Robotic Assistance will be ubiquitous in TKA in 5 years\n• For: Dr. Lincoln Liow?\n• Against: Dr. Simon Talbot?', speaker: 'Faculty Name' },
        { start: '11:10', end: '11:25', topic: 'Video Based Case Presentations\n• Kinematic Alignment with Robotic Assistance: Dr Lincoln Liow\n• Femur First Functional Alignment: Faculty name\n• IKA with Robotic Assistance: Dr. David Liu\n• Patellofemoral driven: Dr. Simon Talbot', speaker: 'Faculty Name' },
        { start: '11:25', end: '11:25', topic: 'Session 6: Unicompartmental Knee Arthroplasty', speaker: 'Moderator:', isSession: true },
        { start: '11:25', end: '11:30', topic: 'How to optimize success with UKA', speaker: 'Faculty name' },
        { start: '11:30', end: '11:45', topic: 'Debate: Robotic Assistance is mandatory for UKA success\n• For: Faculty name\n• Against: Faculty name', speaker: '' },
        { start: '11:45', end: '11:55', topic: 'HTO or UKA – when and why?', speaker: 'Dr. Murakami?' },
        { start: '11:55', end: '12:20', topic: 'Video Based Case presentations\n• Robotic Assisted UKA: APAC faculty? Henry Fu?\n• High Tibial Osteotomy: APAC Faculty? Dr. Murakami?', speaker: '' },
        { start: '12:20', end: '12:30', topic: 'Fixed or Mobile Bearing in UKA – what is the data telling us?', speaker: 'Faculty name' },
        { start: '12:30', end: '12:30', topic: 'Lunch', speaker: '', isBreak: true },
        { start: '13:30', end: '16:00', topic: 'Breakout Rotations', speaker: '' },
        { start: '16:00', end: '16:00', topic: 'Afternoon Tea', speaker: '', isBreak: true },
        { start: '16:20', end: '16:20', topic: 'Session 7: Patient-centric considerations in Joint Arthroplasty', speaker: 'Moderator:', isSession: true },
        { start: '16:20', end: '16:50', topic: 'Turning Setbacks Into Success: Managing Infections to Improve Outcomes and Patient Experience\n\nRequest for 30m session multiple presenters sharing video focusing on restoring disastrous infection cases', speaker: 'Faculty Name (6 presenters)' },
        { start: '16:50', end: '17:05', topic: 'Debate: ERAS in Focus - Incremental Gains or Revolutionary Impact?\n• For: Faculty Name\n• Against: Faculty Name', speaker: 'Faculty name' },
        { start: '17:05', end: '17:15', topic: 'Day 2 Close\n• Scientific Chair Dr. David Liu', speaker: '' },
        { start: '17:15', end: '17:15', topic: 'Conclusion of day 2', speaker: '' },
      ]
    }
  ];

  const day3Tracks = [
    {
      title: 'Mainstage',
      sessions: [
        { start: '08:30', end: '08:35', topic: 'Day 3 Welcome', speaker: 'Dr. David Liu' },
        { start: '08:35', end: '08:35', topic: 'Session 8 Revision Knee', speaker: 'Session Chair Prof. Richard Carey-Smith', isSession: true },
        { start: '08:35', end: '08:45', topic: 'Video Case Presentation: Efficient draping for DAIR', speaker: '' },
        { start: '08:45', end: '09:00', topic: '1 vs 1.5 stage Revision TKA', speaker: '' },
        { start: '09:00', end: '09:10', topic: 'Exposure and implant removal in revision TKA - what I do', speaker: '' },
        { start: '09:10', end: '09:25', topic: 'Debate: Metaphyseal Sleeves are the best option for Zone 2 fixation, implant stability and defect management\n• For: Faculty name\n• Against: Faculty name', speaker: '' },
        { start: '09:25', end: '09:40', topic: 'Video Based Case presentation\n• Metaphyseal Sleeves in Revision TKA: Faculty name\n• Cones and cemented stems: Faculty name', speaker: '' },
        { start: '09:40', end: '10:30', topic: 'Faculty \'Survivor\'', speaker: '' },
        { start: '10:30', end: '10:30', topic: 'Morning Tea', speaker: '', isBreak: true },
        { start: '10:45', end: '10:50', topic: 'Surgery Topics TBC', speaker: '' },
        { start: '10:50', end: '10:55', topic: 'Surgery Topics TBC', speaker: '' },
        { start: '10:55', end: '11:25', topic: 'Panel Discussion – One thing I can change today that will improve patient outcomes?\n• Faculty name\n• Faculty name\n• Faculty name\n• Faculty name\n• Moderator: Faculty name', speaker: '' },
        { start: '11:25', end: '11:30', topic: 'Symposium Closing Remarks\n• Scientific Chair – Dr. David Liu', speaker: '' },
        { start: '11:30', end: '11:30', topic: 'Lunch & Departures / transition to Market Breakout Sessions', speaker: '', isBreak: true },
      ]
    }
  ];

  return (
    <div id="schedule" className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">CONFERENCE SCHEDULE</h2>
          <div className="w-16 h-1 bg-primary-500 mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl">
            Explore the sessions and plan your experience with our curated tracks designed for maximum impact.
          </p>
        </div>

        {/* Day Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
          <button
            onClick={() => setActiveDay(1)}
            className={`px-4 md:px-6 py-2 md:py-3 font-semibold text-xs md:text-base transition-all duration-300 whitespace-nowrap ${
              activeDay === 1
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            DAY 1 | 15 MAY
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`px-4 md:px-6 py-2 md:py-3 font-semibold text-xs md:text-base transition-all duration-300 whitespace-nowrap ${
              activeDay === 2
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            DAY 2 | 16 MAY
          </button>
          <button
            onClick={() => setActiveDay(3)}
            className={`px-4 md:px-6 py-2 md:py-3 font-semibold text-xs md:text-base transition-all duration-300 whitespace-nowrap ${
              activeDay === 3
                ? 'text-primary-500 border-b-2 border-primary-500'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            DAY 3 | 17 MAY
          </button>
        </div>

        {/* Day 1 Content */}
        {activeDay === 1 && (
          <div className="mt-8">
            {day1Tracks.map((track, trackIndex) => (
              <div key={trackIndex} className="mb-8 bg-white rounded-lg overflow-hidden border border-gray-200">
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 py-3 px-4 font-semibold text-xs md:text-sm text-gray-600 uppercase">
                  <div className="col-span-2">TIME</div>
                  <div className="col-span-6">SESSION & TOPIC</div>
                  <div className="col-span-4">FACULTY / MODERATOR</div>
                </div>
                
                {/* Table Body */}
                <div>
                  {track.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex}>
                      {session.isSession ? (
                        <div className="grid grid-cols-12 bg-primary-500 text-white py-3 px-4">
                          <div className="col-span-8 font-bold text-sm md:text-base">{session.topic}</div>
                          <div className="col-span-4">
                            <div className="text-xs uppercase tracking-wide opacity-90">MODERATOR</div>
                            <div className="font-semibold text-sm">{session.speaker.replace('Moderator: ', '')}</div>
                          </div>
                        </div>
                      ) : (
                        <div className={`grid grid-cols-12 py-3 px-4 border-b border-gray-100 ${
                          session.isBreak ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                        }`}>
                          <div className={`col-span-2 font-semibold text-xs md:text-sm ${
                            session.isBreak ? 'text-gray-500' : 'text-primary-500'
                          }`}>
                            {session.start} - {session.end}
                          </div>
                          <div className="col-span-6 pr-4">
                            <p className={`text-sm md:text-base ${
                              session.isBreak ? 'text-gray-600' : 'text-black'
                            } whitespace-pre-line`}>
                              {session.topic}
                            </p>
                          </div>
                          <div className="col-span-4 pl-2">
                            {session.speaker && (
                              <div className="text-gray-700 text-xs md:text-sm">
                                <div className="text-black">{session.speaker.split('\n')[0]}</div>
                                {session.speaker.includes('\n') && (
                                  <div className="text-xs text-gray-500 mt-0.5">{session.speaker.split('\n').slice(1).join('\n')}</div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Day 2 Content */}
        {activeDay === 2 && (
          <div className="mt-8">
            {day2Tracks.map((track, trackIndex) => (
              <div key={trackIndex} className="mb-8 bg-white rounded-lg overflow-hidden border border-gray-200">
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 py-3 px-4 font-semibold text-xs md:text-sm text-gray-600 uppercase">
                  <div className="col-span-2">TIME</div>
                  <div className="col-span-6">SESSION & TOPIC</div>
                  <div className="col-span-4">FACULTY / MODERATOR</div>
                </div>
                
                {/* Table Body */}
                <div>
                  {track.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex}>
                      {session.isSession ? (
                        <div className="grid grid-cols-12 bg-primary-500 text-white py-3 px-4">
                          <div className="col-span-8 font-bold text-sm md:text-base">{session.topic}</div>
                          <div className="col-span-4">
                            <div className="text-xs uppercase tracking-wide opacity-90">MODERATOR</div>
                            <div className="font-semibold text-sm">{session.speaker.replace('Moderator: ', '')}</div>
                          </div>
                        </div>
                      ) : (
                        <div className={`grid grid-cols-12 py-3 px-4 border-b border-gray-100 ${
                          session.isBreak ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                        }`}>
                          <div className={`col-span-2 font-semibold text-xs md:text-sm ${
                            session.isBreak ? 'text-gray-500' : 'text-primary-500'
                          }`}>
                            {session.start} - {session.end}
                          </div>
                          <div className="col-span-6 pr-4">
                            <p className={`text-sm md:text-base ${
                              session.isBreak ? 'text-gray-600' : 'text-black'
                            } whitespace-pre-line`}>
                              {session.topic}
                            </p>
                          </div>
                          <div className="col-span-4 pl-2">
                            {session.speaker && (
                              <div className="text-gray-700 text-xs md:text-sm">
                                <div className="text-black">{session.speaker.split('\n')[0]}</div>
                                {session.speaker.includes('\n') && (
                                  <div className="text-xs text-gray-500 mt-0.5">{session.speaker.split('\n').slice(1).join('\n')}</div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Day 3 Content */}
        {activeDay === 3 && (
          <div className="mt-8">
            {day3Tracks.map((track, trackIndex) => (
              <div key={trackIndex} className="mb-8 bg-white rounded-lg overflow-hidden border border-gray-200">
                {/* Table Header */}
                <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200 py-3 px-4 font-semibold text-xs md:text-sm text-gray-600 uppercase">
                  <div className="col-span-2">TIME</div>
                  <div className="col-span-6">SESSION & TOPIC</div>
                  <div className="col-span-4">FACULTY / MODERATOR</div>
                </div>
                
                {/* Table Body */}
                <div>
                  {track.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex}>
                      {session.isSession ? (
                        <div className="grid grid-cols-12 bg-primary-500 text-white py-3 px-4">
                          <div className="col-span-8 font-bold text-sm md:text-base">{session.topic}</div>
                          <div className="col-span-4">
                            <div className="text-xs uppercase tracking-wide opacity-90">MODERATOR</div>
                            <div className="font-semibold text-sm">{session.speaker.replace('Session Chair ', '').replace('Moderator: ', '')}</div>
                          </div>
                        </div>
                      ) : (
                        <div className={`grid grid-cols-12 py-3 px-4 border-b border-gray-100 ${
                          session.isBreak ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                        }`}>
                          <div className={`col-span-2 font-semibold text-xs md:text-sm ${
                            session.isBreak ? 'text-gray-500' : 'text-primary-500'
                          }`}>
                            {session.start} - {session.end}
                          </div>
                          <div className="col-span-6 pr-4">
                            <p className={`text-sm md:text-base ${
                              session.isBreak ? 'text-gray-600' : 'text-black'
                            } whitespace-pre-line`}>
                              {session.topic}
                            </p>
                          </div>
                          <div className="col-span-4 pl-2">
                            {session.speaker && (
                              <div className="text-gray-700 text-xs md:text-sm">
                                <div className="text-black">{session.speaker.split('\n')[0]}</div>
                                {session.speaker.includes('\n') && (
                                  <div className="text-xs text-gray-500 mt-0.5">{session.speaker.split('\n').slice(1).join('\n')}</div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
