// use this below code and upload in your google apps script editor

// function doPost(e) {
//   try {
//     // Get the active spreadsheet (make sure to create one first)
//     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
//     // If this is the first time, add headers
//     if (sheet.getLastRow() === 0) {
//       sheet.getRange(1, 1, 1, 7).setValues([
//         ['Timestamp', 'Full Name', 'Gender', 'Birth Date', 'Birth Time', 'Birth Location', 'Email']
//       ]);
//     }
    
//     // Get form data
//     var formData = e.parameter;
    
//     // Prepare data array
//     var rowData = [
//       new Date(), // Timestamp
//       formData.fullName || '',
//       formData.gender || '',
//       formData.birthDate || '',
//       formData.birthTime || '',
//       formData.birthLocation || '',
//       formData.email || ''
//     ];
    
//     // Add data to sheet
//     sheet.appendRow(rowData);
    
//     // Return success response
//     return ContentService
//       .createTextOutput(JSON.stringify({
//         status: 'success',
//         message: 'Data saved successfully'
//       }))
//       .setMimeType(ContentService.MimeType.JSON);
      
//   } catch (error) {
//     // Return error response
//     return ContentService
//       .createTextOutput(JSON.stringify({
//         status: 'error',
//         message: error.toString()
//       }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }
// }

// function doGet(e) {
//   // Handle GET requests (optional)
//   return ContentService
//     .createTextOutput(JSON.stringify({
//       status: 'success',
//       message: 'GET request received'
//     }))
//     .setMimeType(ContentService.MimeType.JSON);
// }







import React, { useState } from "react"
import { User, Calendar, Clock, MapPin, Mail, ChevronDown } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    birthDate: "",
    birthTime: "",
    birthLocation: "",
    email: "",
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.birthDate) {
      alert("Please fill in all required fields (Full Name, Email, Birth Date).")
      return
    }

    if (!formData.agreeToTerms) {
      alert("Please accept the terms to proceed.")
      return
    }

    setIsSubmitting(true)

    // Replace this URL with your actual Google Apps Script web app URL
    const formUrl = "https://script.google.com/macros/s/AKfycbx8GuuuFZ07c5M1yCbl6Aqf5pMYugNHP-uzDQPTZzDRVZLL6m3bV47vHXcTdKduYicu/exec"

    const dataToSend = {
      fullName: formData.fullName,
      gender: formData.gender,
      birthDate: formData.birthDate,
      birthTime: formData.birthTime,
      birthLocation: formData.birthLocation,
      email: formData.email
    }

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(dataToSend)
      })

      // Note: With no-cors mode, we can't read the response
      // but if no error is thrown, we assume success
      alert("Your birth chart request was submitted successfully! We'll contact you soon.")
      
      // Reset form
      setFormData({
        fullName: "",
        gender: "",
        birthDate: "",
        birthTime: "",
        birthLocation: "",
        email: "",
        agreeToTerms: false,
      })
      
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred while submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white border-t-[0.2px] relative overflow-hidden flex items-center justify-center p-4 border-b-[0.2px] border-[#C89B6D]">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-[#C89B6D] font-cinzel tracking-wider leading-tight">
            RECEIVE YOUR FREE
            <br />
            BIRTH CHART GUIDE
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            {/* Full Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
                required
              />
              <User className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5" />
            </div>

            {/* Gender */}
            <div className="relative">
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] h-14 pl-4 pr-12 focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5 pointer-events-none" />
            </div>

            {/* Birth Date */}
            <div className="relative">
              <input
                type="text"
                placeholder="dd/mm/yyyy *"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
                required
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5" />
            </div>

            {/* Time of Birth */}
            <div className="relative">
              <input
                type="text"
                placeholder="Time of Birth"
                value={formData.birthTime}
                onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
              />
              <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5" />
            </div>

            {/* Birth Location */}
            <div className="relative">
              <input
                type="text"
                placeholder="Birth Location"
                value={formData.birthLocation}
                onChange={(e) => setFormData({ ...formData, birthLocation: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
              />
              <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
                required
              />
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-amber-400/60 w-5 h-5" />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-start space-x-3 pt-4">
            <div className="relative">
              <input
                type="checkbox"
                id="terms"
                checked={formData.agreeToTerms}
                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                className="w-5 h-5 border border-[#C89B6D] text-[#C89B6D] focus:ring-[#C89B6D] mt-1"
              />
            </div>
            <label htmlFor="terms" className="text-[#C89B6D] font-cinzel text-base leading-relaxed cursor-pointer">
              By accepting you agree to our Terms of Service and Privacy Policy.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#C89B6D] hover:bg-[#C89B6D] text-black font-medium px-12 py-4 text-base tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? '⏳ SUBMITTING...' : '✦ GET YOUR CHART'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
