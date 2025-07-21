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

  const handleInputChange = (e) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
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
                <option value="general">Marriage Muhurat</option>
                <option value="support">Kundali Matching</option>
                <option value="business">Love Marriage Consultation</option>
                <option value="feedback">Doshas & Remedies</option>
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
              className="bg-[#C89B6D] text-white px-12 py-4 rounded-md text-base font-medium tracking-wide transition-colors duration-200 hover:bg-[#B8895A] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              ✦ SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
