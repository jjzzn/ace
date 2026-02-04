import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import SignatureCanvas from 'react-signature-canvas';
import { createClient } from '@supabase/supabase-js';

// TODO: Replace with your actual Supabase anon key
const supabase = createClient(
  'https://eeotixwvwphvcgysajys.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlb3RpeHd2d3BodmNneXNhanlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMTM0NzMsImV4cCI6MjA3Mjg4OTQ3M30.SUE-mxkCEXp63KNJXQB4EbwhnyO2ZuLXFAbaU1NHT6E'
);

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSubmitted]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    organization: '',
    country: 'Thailand',
    email: '',
    phone: '',
    hipVolume: '',
    kneeVolume: '',
    unicompartmentalKneeVolume: '',
    privacyConsent: false,
    signature: '',
  });

  const phoneInputRef = useRef(null);
  const itiRef = useRef(null);
  const signatureRef = useRef(null);
  const signatureContainerRef = useRef(null);

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
    "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
  ];

  const volumeOptions = [
    "0",
    "1 - 50",
    "50 - 100",
    "100 - 150",
    ">150"
  ];

  useEffect(() => {
    if (phoneInputRef.current && !itiRef.current) {
      itiRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: 'th',
        separateDialCode: true,
        preferredCountries: ['th', 'us', 'gb', 'sg', 'my'],
        utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js',
      });
    }

    return () => {
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, []);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleClearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
      setFormData((prev) => ({ ...prev, signature: '' }));
    }
  };

  const handleSaveSignature = () => {
    if (signatureRef.current && !signatureRef.current.isEmpty()) {
      const signatureData = signatureRef.current.toDataURL('image/png');
      setFormData((prev) => ({ ...prev, signature: signatureData }));
    }
  };

  useEffect(() => {
    const container = signatureContainerRef.current;
    if (container) {
      const preventScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
      };
      
      // ป้องกันทั้ง touchmove และ scroll
      container.addEventListener('touchmove', preventScroll, { passive: false });
      container.addEventListener('touchstart', preventScroll, { passive: false });
      container.addEventListener('scroll', preventScroll, { passive: false });
      
      return () => {
        container.removeEventListener('touchmove', preventScroll);
        container.removeEventListener('touchstart', preventScroll);
        container.removeEventListener('scroll', preventScroll);
      };
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const webhookUrl = 'https://in2it.app.n8n.cloud/webhook/ace';

    try {
      // Upload signature to Supabase
      let signatureUrl = '';
      if (formData.signature) {
        const base64Data = formData.signature.split(',')[1];
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/png' });

        const fileName = `signature_${formData.email.replace(/[@.]/g, '_')}_${Date.now()}.png`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('aaphks2026')
          .upload(`signatures/${fileName}`, blob, {
            contentType: 'image/png',
            upsert: false
          });

        if (uploadError) {
          console.error('Upload error:', uploadError);
          throw new Error('Failed to upload signature: ' + uploadError.message);
        }

        signatureUrl = `https://eeotixwvwphvcgysajys.supabase.co/storage/v1/object/public/aaphks2026/signatures/${fileName}`;
      }

      // Prepare phone number
      let fullPhoneNumber = '';
      if (itiRef.current && phoneInputRef.current) {
        const phoneValue = phoneInputRef.current.value || formData.phone;
        if (phoneValue) {
          const selectedCountryData = itiRef.current.getSelectedCountryData();
          const cleanPhone = phoneValue.replace(/^0+/, '');
          fullPhoneNumber = `+${selectedCountryData.dialCode}${cleanPhone}`;
        }
      } else if (formData.phone) {
        fullPhoneNumber = formData.phone;
      }

      // Submit to webhook
      const dataToSubmit = {
        ...formData,
        phone: fullPhoneNumber,
        signature: signatureUrl ? [{ url: signatureUrl }] : [],
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error('Submission Error:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="register" className="bg-gray-50 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-xl text-center mx-4">
          <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full mx-auto">
            <svg className="w-10 h-10 md:w-12 md:h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 md:mt-6">Thank You!</h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">Your registration has been submitted successfully.</p>
          <p className="text-gray-500 mt-3 md:mt-4 text-xs md:text-sm">A confirmation email is on its way to you.</p>
          <Link
            to="/"
            className="inline-block mt-5 md:mt-6 bg-primary-500 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 text-sm md:text-base"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen py-8 md:py-16 px-4 md:px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Background Image Header */}
          <div
            className="p-8 md:p-12 text-center bg-cover bg-center relative"
            style={{ backgroundImage: 'url(https://eeotixwvwphvcgysajys.supabase.co/storage/v1/object/public/aaphks2026/banner4.png)' }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase tracking-tight">
                ACE: Asia Pacific Hip & Knee Symposium 2026 REGISTRATION
              </h1>
              <p className="text-white text-sm md:text-base">
                FILL OUT THE FORM BELOW TO SECURE YOUR SPOT
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-xs font-bold mb-2 uppercase">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-xs font-bold mb-2 uppercase">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-xs font-bold mb-2 uppercase">
                Position <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm"
                placeholder="Your Position"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-xs font-bold mb-2 uppercase">
                Organization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm"
                placeholder="Your Organization Name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-xs font-bold mb-2 uppercase">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm appearance-none"
                >
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-xs font-bold mb-2 uppercase">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 text-xs font-bold mb-2 uppercase">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div style={{ width: '100%' }}>
                  <input
                    type="tel"
                    ref={phoneInputRef}
                    name="phone"
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, phone: e.target.value }));
                    }}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm"
                    placeholder="Enter phone number"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-base font-bold text-gray-800 mb-6 uppercase tracking-wide">Procedural Volume</h2>

              <div className="grid grid-cols-1 gap-6">

                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-2 uppercase">
                    What is your approximate procedural volume for Total Knee Arthroplasty cases per year? <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="kneeVolume"
                      value={formData.kneeVolume}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm appearance-none"
                    >
                      <option value="">Please select an option</option>
                      {volumeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-2 uppercase">
                    What is your approximate procedural volume for Total Hip Arthroplasty cases per year? <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="hipVolume"
                      value={formData.hipVolume}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm appearance-none"
                    >
                      <option value="">Please select an option</option>
                      {volumeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-2 uppercase">
                    What is your approximate procedural volume for Unicompartmental Knee Arthroplasty cases per year? <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="unicompartmentalKneeVolume"
                      value={formData.unicompartmentalKneeVolume}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition text-sm appearance-none"
                    >
                      <option value="">Please select an option</option>
                      {volumeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                    <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>



              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h2 className="text-base font-bold text-gray-800 mb-6 uppercase tracking-wide">Privacy & Data Collection Consent</h2>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    required
                    className="mt-1 h-5 w-5 text-primary-500 focus:ring-primary-500 border-gray-300 rounded flex-shrink-0"
                    id="privacyConsent"
                  />
                  <label htmlFor="privacyConsent" className="text-sm text-gray-700 leading-relaxed">
                    By providing your personal information (including full name, contact, and passport ID) for the <strong>ACE: Asia Pacific Hip & Knee Symposium (AAPHKS) 2026</strong>, you agree to the processing of your data by <strong>Johnson & Johnson Services, Inc.</strong> regarding:

                    <ul className="list-disc pl-5 my-2 space-y-1 text-gray-600">
                      <li><strong>Event Management:</strong> Organization, attendance management, and logistics.</li>
                      <li><strong>Third-Party Disclosure:</strong> Necessary sharing with hotels, airlines, and event organizers.</li>
                      <li><strong>Data Transfer:</strong> Potential transfer to countries outside your residence (including the US).</li>
                    </ul>

                    <p className="mb-1">
                      We will <strong>not</strong> use your data for marketing purposes.
                    </p>

                    <span>
                      Read full details in our{' '}
                      <a
                        href="https://jnjinstitute.com/en-eapac/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-700 underline font-medium"
                      >
                        Privacy Policy
                      </a>. <span className="text-red-500 font-bold">*</span>
                    </span>
                  </label>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <label className="block text-gray-700 text-xs font-bold mb-3 uppercase">
                    Signature <span className="text-red-500">*</span>
                  </label>
                  {!formData.signature ? (
                    <>
                      <div 
                        ref={signatureContainerRef}
                        className="border-2 border-gray-300 rounded-lg bg-white"
                        style={{ 
                          touchAction: 'none', 
                          overflow: 'hidden',
                          WebkitOverflowScrolling: 'auto',
                          position: 'relative'
                        }}
                      >
                        <SignatureCanvas
                          ref={signatureRef}
                          canvasProps={{
                            className: 'w-full h-40 rounded-lg',
                            style: { 
                              touchAction: 'none',
                              msTouchAction: 'none',
                              userSelect: 'none',
                              WebkitUserSelect: 'none'
                            }
                          }}
                        />
                      </div>
                      <div className="flex justify-end gap-2 mt-2">
                        <button
                          type="button"
                          onClick={handleClearSignature}
                          className="text-sm text-gray-600 hover:text-gray-800 underline"
                        >
                          Clear
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveSignature}
                          className="px-4 py-2 bg-primary-500 text-white text-sm rounded hover:bg-primary-700 transition-colors"
                        >
                          Save Signature
                        </button>
                      </div>
                      <p className="text-xs text-red-500 mt-2">Please sign and click "Save Signature" to continue</p>
                    </>
                  ) : (
                    <>
                      <div className="border-2 border-green-500 rounded-lg bg-green-50 p-4">
                        <img 
                          src={formData.signature} 
                          alt="Your signature" 
                          className="max-w-full h-auto mx-auto"
                          style={{ maxHeight: '160px' }}
                        />
                      </div>
                      <div className="flex justify-end mt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, signature: '' }));
                            if (signatureRef.current) {
                              signatureRef.current.clear();
                            }
                          }}
                          className="text-sm text-red-600 hover:text-red-800 underline"
                        >
                          Change Signature
                        </button>
                      </div>
                      <p className="text-xs text-green-600 mt-2">✓ Signature saved successfully</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                type="submit"
                disabled={loading || !formData.signature}
                className="flex-1 bg-primary-500 text-white px-8 py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-primary-700 transition-all duration-300 disabled:bg-primary-400 disabled:cursor-not-allowed text-sm shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Register Now'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
