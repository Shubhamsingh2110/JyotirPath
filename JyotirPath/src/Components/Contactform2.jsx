// use this below code and upload in your google apps script editor

// function doPost(e) {
//   try {
//     // Get the active spreadsheet
//     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
//     // If this is the first time, add headers
//     if (sheet.getLastRow() === 0) {
//       sheet.getRange(1, 1, 1, 6).setValues([
//         ['Timestamp', 'Full Name', 'Email', 'Phone', 'Subject', 'Message']
//       ]);
//     }
    
//     // Get form data
//     var formData = e.parameter;
    
//     // Prepare data array
//     var rowData = [
//       new Date(), // Timestamp
//       formData.fullName || '',
//       formData.email || '',
//       formData.phone || '',
//       formData.subject || '',
//       formData.message || ''
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









import { useState } from "react"
import { User, Mail, Phone, MessageSquare, ChevronDown } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.agreeToTerms) {
      alert("Please accept the terms to proceed.")
      return
    }

    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)
    
    // Replace this with your Google Apps Script Web App URL
    const formUrl = "https://script.google.com/macros/s/AKfycbyWiH0MjPWB26eFesJzvjYbpwaHxRTqq8T1DEmAL2KdtzoObL23rk4yM863bAgvKJkJjw/exec"
    
    const dataToSend = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message
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

      // With no-cors mode, we can't actually read the response
      // but if no error is thrown, we assume success
      alert("Your message was sent successfully! We will contact you soon.")
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light font-cinzel tracking-wider text-[#C89B6D] leading-tight">
            GET IN TOUCH
            <br />
            WITH US TODAY
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full h-14 pl-4 pr-12 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
                required
              />
              <User className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#C89B6D]" />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-14 pl-4 pr-12 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
                required
              />
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#C89B6D]" />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
              />
              <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
            </div>

            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-amber-700 bg-white appearance-none"
                required
              >
                <option value="" className="text-amber-600">
                  Subject
                </option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="business">Business</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600 pointer-events-none" />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full pl-4 pr-12 pt-4 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white resize-none"
              required
            />
            <MessageSquare className="absolute right-4 top-4 h-5 w-5 text-amber-600" />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3 pt-4">
            <input
              type="checkbox"
              id="terms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-blue-600 border-[#C89B6D] rounded focus:ring-blue-500 focus:ring-2"
              required
            />
            <label htmlFor="terms" className="text-sm text-[#C89B6D] leading-relaxed">
              BY ACCEPTING YOU AGREE TO OUR TERMS OF SERVICE AND PRIVACY POLICY.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#C89B6D] text-white px-12 py-4 rounded-md text-base font-medium tracking-wide transition-colors duration-200 hover:bg-[#B8895A] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? '⏳ SENDING...' : '✦ SEND MESSAGE'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
