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

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.agreeToTerms) {
      alert("Please accept the terms to proceed.")
      return
    }

    const formUrl = "https://script.google.com/macros/s/AKfycby3j17WgOEtD_3pLdTtOgBCxN8pc4d5iVjEyFhTld9UNkO0npz6EgsYBn51uYpgcQwP/exec" // <-- Replace this with your real URL

    const dataToSend = {
      fullName: formData.fullName,
      gender: formData.gender,
      birthDate: formData.birthDate,
      birthTime: formData.birthTime,
      birthLocation: formData.birthLocation,
      email: formData.email
    }

    const queryParams = new URLSearchParams(dataToSend)

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: queryParams,
      })

      if (response.ok) {
        alert("Your birth chart request was submitted successfully!")
        setFormData({
          fullName: "",
          gender: "",
          birthDate: "",
          birthTime: "",
          birthLocation: "",
          email: "",
          agreeToTerms: false,
        })
      } else {
        alert("Submission failed. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred. Please try again.")
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
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
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
                placeholder="dd/mm/yyyy"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
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
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border border-[#C89B6D] text-[#C89B6D] placeholder:text-[#C89B6D] h-14 pl-4 pr-12 focus:ring-2 focus:ring-[#C89B6D] focus:outline-none transition-colors"
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
              className="bg-[#C89B6D] hover:bg-[#C89B6D] text-black font-medium px-12 py-4 text-base tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            >
              ✦ GET YOUR CHART
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
