import React, { useState } from 'react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(1);

  const day1Tracks = [
    {
      title: 'Mainstage',
      sessions: [
/* Day 1*/ 
        { start: '10:00', end: '13:00', topic: 'Registration', speaker: '', },
        { start: '12:00', end: '13:00', topic: 'Lunch', speaker: '',},
        { start: '13:00', end: '13:10', topic: 'Welcome from DePuy Synthes and Johnson & Johnson MedTech', speaker: '' },
        { start: '13:10', end: '13:15', topic: 'Welcome from your Symposium Chair', speaker: '' },
/* Session 1*/
        { start: '13:10', end: '13:15', topic: 'Session 1: Primary Total Hip Arthroplasty', speaker: '', isSession: true },
        { start: '13:10', end: '13:15', topic: 'Is modern THA as good as it will ever be?', speaker: '' },
        { start: '13:15', end: '13:20', topic: 'Leveraging Marginal Gains to elevate outcomes in THA', speaker: '' },
        { start: '13:20', end: '13:40', topic: 'Case Presentations: The Power of Marginal Gains \n• Multilayer Closure \n• Bleeding Management', speaker: '' },
        { start: '13:40', end: '14:05', topic: 'Why and how I make my femoral stem choice work\n• Blade stem\n• Cemented stem\n• Fully HA Coated stem\n• Short Triple Tapered Fit & Fill stem', speaker: '' },
        { start: '14:05', end: '14:20', topic: 'Debate: Direct Anterior Approach is clearly the superior approach in THA\n• Of course, why are we even still talking about this?\n• Absolutely not, posterior is still the gold standard!', speaker: '' },
        { start: '14:20', end: '14:40', topic: 'Case Presentations: Surgical Approach in THA\n• Standard OR table DAA\n• Mini Incision Posterior Approach\n• Piriformis Sparing Posterior Approach', speaker: '' },
        { start: '14:40', end: '14:55', topic: 'Debate: Do we need Dual Mobility in primary THA?\n• Yes, it’s an invaluable option for complex cases!\n• No, a big head with optimized cup position is better!', speaker: '' },
        { start: '14:55', end: '15:05', topic: 'Wound Complication avoidance in Joint Replacement', speaker: '' },
        { start: '15:05', end: '15:20', topic: 'Coffee Break', speaker: '', },
/* Session 2*/
        { start: '15:20', end: '15:25', topic: 'Session 2: Technology in Primary THA', speaker: '', isSession: true },
        { start: '15:20', end: '15:25', topic: 'Technology in THA: what\'s useful, what\'s marketing hype?', speaker: ''},
        { start: '15:25', end: '15:30', topic: 'Spino-pelvic analysis for every patient?', speaker: '' },
        { start: '15:30', end: '15:40', topic: 'Spino-pelvic planning made simple – how I do it', speaker: '' },
        { start: '15:40', end: '15:55', topic: 'Debate: Robotic Assistance in THA\n• Overhyped, unnecessary and a waste of money\n• A valuable tool for planning and execution', speaker: '' },
        { start: '15:55', end: '16:05', topic: 'Case Presentations: Technology in THA\n• CT based Navigation', speaker: '' },
        { start: '16:05', end: '16:10', topic: 'Why are we still using mallets?', speaker: '' },       
        { start: '16:10', end: '16:20', topic: 'Case Presentations: Technology in THA\n• Fluoroscopic Navigation & Automated Impaction', speaker: '' },
        { start: '16:20', end: '16:30', topic: 'Technology isn’t everything – enhancing patient satisfaction by maximizing cosmesis', speaker: '' },
        { start: '16:30', end: '16:40', topic: 'Case Presentation: Wound closure in complex patients', speaker: '' },
        { start: '16:40', end: '16:45', topic: '5 things in 5 minutes: improving wound closure efficiency in Joint Replacement', speaker: '' },
/* Session 3*/        
        { start: '16:50', end: '16:55', topic: 'Session 3: Revision Hip Arthroplasty', speaker: '', isSession: true },
        { start: '16:50', end: '16:55', topic: 'Reasons for Revision of Primary THA in Asia Pacific', speaker: '' },
        { start: '16:55', end: '17:05', topic: 'Reducing Prosthetic Joint Infection: multiphase prevention from preop to postop care', speaker: '' },
        { start: '17:05', end: '17:15', topic: 'Treating Prosthetic Joint Infection: integrated management from preop to postop care', speaker: '' },
        { start: '17:15', end: '17:25', topic: 'Revision implants – what I choose and how I make it work', speaker: '' },
        { start: '17:25', end: '17:35', topic: 'Managing the recurrent dislocator', speaker: '' },
        { start: '17:35', end: '17:45', topic: 'Cementless stem removal made simple', speaker: '' },
        { start: '17:45', end: '17:50', topic: 'Day 1 Close', speaker: '' },
      ]
    }
  ];

  const day2Tracks = [
    {
      title: 'Mainstage',
      sessions: [
/* Day 2*/
/* Session 4*/  
        { start: '08:30', end: '08:40', topic: 'Session 4: Primary Total Knee Arthroplasty', speaker: '', isSession: true },
        { start: '08:30', end: '08:40', topic: 'Optimizing every layer – the impact of tissue handling and hemostasis on TKA success', speaker: ''},
        { start: '08:40', end: '08:50', topic: 'Beyond CPAK – understanding bone and soft tissue phenotypes', speaker: '' },
        { start: '08:50', end: '09:05', topic: 'Debate: Kinematic Alignment with no boundaries is the new Gold Standard in TKA\n• KA all the way!\n• Different patients need different approaches', speaker: ''},
        { start: '09:05', end: '09:25', topic: 'Debate: Fixation in TKA\n• Cementless for all! \n• Cemented is still the best option', speaker: '' },
        { start: '09:25', end: '09:35', topic: 'Case Presentation: Prep for success with Cementless', speaker: '' },
        { start: '09:35', end: '09:55', topic: 'Debate: My insert design is the best insert design\n• Medial Pivot is the best\n• Medial Stabilized is better!\n• CR is still the gold standard', speaker: '' },
        { start: '09:55', end: '10:05', topic: 'The path to patient satisfaction is understanding quadriceps alignment', speaker: '' },
        { start: '10:05', end: '10:20', topic: 'Case Presentation: patellofemoral driven alignment in TKA', speaker: '' },
        { start: '10:20', end: '10:35', topic: 'Coffee Break', speaker: '', },
/* Session 5*/
        { start: '10:35', end: '10:40', topic: 'Session 5: Technology in primary TKA', speaker: '', isSession: true },
        { start: '10:35', end: '10:40', topic: 'Is technology helping to solve a problem?', speaker: '' },
        { start: '10:40', end: '11:00', topic: 'Debate: Robotic Assistance will be ubiquitous in TKA in 5 years\n• Absolutely!\n• Manual instruments and less costly tech still has a place!', speaker: '' },
        { start: '11:00', end: '11:30', topic: 'Case Presentations: Robotic TKA\n• Kinematic Alignment with Robotic Assistance\n• Femur First Functional Alignment\n• iKA with Robotic Assistance', speaker: '' },
/* Session 6*/      
        { start: '11:30', end: '11:40', topic: 'Session 6: Unicompartmental Knee Arthroplasty', speaker: '', isSession: true },
        { start: '11:30', end: '11:40', topic: 'How to optimize success with UKA', speaker: '' },
        { start: '11:40', end: '11:55', topic: 'Debate: Robotic Assistance is mandatory for UKA success\n• Robotic Assistance is a must-have for UKA!\n• Manual instrument UKA performs well!', speaker: '' },
        { start: '11:55', end: '12:05', topic: 'HTO vs UKA – which procedure is right for which patient?', speaker: '' },
        { start: '12:05', end: '12:25', topic: 'Case Presentations\n• Robotic Assisted UKA\n• High Tibial Osteotomy', speaker: '' },
        { start: '12:25', end: '12:30', topic: 'Fixed or Mobile Bearing in UKA – what I use', speaker: '' },
        { start: '12:30', end: '13:30', topic: 'Lunch', speaker: '', },
        { start: '13:30', end: '15:30', topic: 'Breakout Rotations', speaker: '' },
        { start: '15:30', end: '15:45', topic: 'Coffee Break', speaker: '', },
/* Session 7*/      
        { start: '15:45', end: '16:15', topic: 'Session 7: Patient Centric Considerations in Joint Arthroplasty', speaker: '', isSession: true },
        { start: '15:45', end: '16:15', topic: 'Panel Discussion: Turning Setback into Success: Managing Infection to Improve Outcomes and Patient Experience', speaker: '' },
        { start: '16:15', end: '16:35', topic: 'Debate: ERAS in Orthopaedics – Incremental Improvement or Revolutionary Impact?\n• Revolutionary Impact!\n• Incremental Improvement', speaker: '' },
        { start: '16:35', end: '16:40', topic: 'Day 2 Close', speaker: '' },
      ]
    }
  ];

  const day3Tracks = [
    {
      title: 'Mainstage',
      sessions: [
/* Day 3*/
/* Session 8*/  
        { start: '08:30', end: '08:40', topic: 'Session 8 Revision Knee Arthroplasty', speaker: '', isSession: true },
        { start: '08:30', end: '08:40', topic: 'Case Presentation: Efficient DAIR', speaker: '' },
        { start: '08:40', end: '08:55', topic: '1 vs 1.5 stage Revision TKA', speaker: '' },
        { start: '08:55', end: '09:05', topic: 'Exposure and implant removal in Revision TKA – what I do', speaker: '' },
        { start: '09:05', end: '09:20', topic: 'Debate: Metaphyseal Sleeves are the best option for Zone 2 fixation, implant stability and defect management\n• Sleeves for all!\n• Cones and Cemented stems have a place', speaker: '' },
        { start: '09:20', end: '09:35', topic: 'Case Presentation: Zone 2 fixation in Revision TKA\n• Metaphyseal Sleeves\n• Cones and cemented stems', speaker: '' },
        { start: '09:35', end: '10:15', topic: 'Faculty \'Survivor\'', speaker: '' },
        { start: '10:15', end: '10:30', topic: 'Coffee Break', speaker: '', },
        { start: '10:30', end: '10:40', topic: 'Surgery Topics TBC', speaker: '' },
        { start: '10:40', end: '10:50', topic: 'Surgery Topics TBC', speaker: '' },
        { start: '10:50', end: '11:10', topic: 'Panel Discussion – One change I made that improved my practice and patient outcomes', speaker: '' },
        { start: '11:10', end: '11:20', topic: 'Closing Remarks', speaker: '' },
      ]
    }
  ];

  return (
    <div id="schedule" className="py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">CONFERENCE SCHEDULE</h2>
          <div className="w-16 h-1 bg-primary-500 mb-4"></div>
          <p className="text-xs md:text-base text-gray-600 max-w-3xl">
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
                  <div className="col-span-4"></div>
                </div>
                
                {/* Table Body */}
                <div>
                  {track.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex}>
                      {session.isSession ? (
                        <div className="grid grid-cols-12 bg-primary-500 text-white py-3 px-4">
                          <div className="col-span-8 font-bold text-sm md:text-base">{session.topic}</div>
                          <div className="col-span-4">
                            <div className="font-semibold text-sm">{session.speaker.replace(' ', '').replace('Session Chair ', '')}</div>
                          </div>
                        </div>
                      ) : (
                        <div className={`grid grid-cols-12 py-3 px-4 border-b border-gray-100 ${
                          session.isBreak ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                        }`}>
    <div className={`col-span-2 font-semibold text-xs md:text-sm ${
  session.isBreak ? 'text-gray-500' : 'text-primary-500'
}`}>
  {session.start && session.end 
    ? `${session.start} - ${session.end}`
    : (session.start || session.end || '')}
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
                              <div className="text-gray-700 text-xs md:text-sm space-y-3">
                                {session.speaker.split('\n\n').map((person, idx) => (
                                  <div key={idx}>
                                    {person.split('\n').map((line, lineIdx) => (
                                      <div key={lineIdx} className={lineIdx === 0 ? 'text-black font-medium' : 'text-xs text-gray-500'}>
                                        {line}
                                      </div>
                                    ))}
                                  </div>
                                ))}
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
                  <div className="col-span-4"></div>
                </div>
                
                {/* Table Body */}
                <div>
                  {track.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex}>
                      {session.isSession ? (
                        <div className="grid grid-cols-12 bg-primary-500 text-white py-3 px-4">
                          <div className="col-span-8 font-bold text-sm md:text-base">{session.topic}</div>
                          <div className="col-span-4">
                            <div className="font-semibold text-sm">{session.speaker.replace(' ', '').replace('Session Chair ', '')}</div>
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
                              <div className="text-gray-700 text-xs md:text-sm space-y-3">
                                {session.speaker.split('\n\n').map((person, idx) => (
                                  <div key={idx}>
                                    {person.split('\n').map((line, lineIdx) => (
                                      <div key={lineIdx} className={lineIdx === 0 ? 'text-black font-medium' : 'text-xs text-gray-500'}>
                                        {line}
                                      </div>
                                    ))}
                                  </div>
                                ))}
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
                  <div className="col-span-4"></div>
                </div>
                
                {/* Table Body */}
                <div>
                  {track.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex}>
                      {session.isSession ? (
                        <div className="grid grid-cols-12 bg-primary-500 text-white py-3 px-4">
                          <div className="col-span-8 font-bold text-sm md:text-base">{session.topic}</div>
                          <div className="col-span-4">
                            <div className="font-semibold text-sm">{session.speaker.replace(' ', '').replace('Session Chair ', '')}</div>
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
                              <div className="text-gray-700 text-xs md:text-sm space-y-3">
                                {session.speaker.split('\n\n').map((person, idx) => (
                                  <div key={idx}>
                                    {person.split('\n').map((line, lineIdx) => (
                                      <div key={lineIdx} className={lineIdx === 0 ? 'text-black font-medium' : 'text-xs text-gray-500'}>
                                        {line}
                                      </div>
                                    ))}
                                  </div>
                                ))}
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
