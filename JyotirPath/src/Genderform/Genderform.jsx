
import { useState } from "react"
import { User, Users, MapPin, Clock, Calendar } from "lucide-react"

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    timeOfBirth: "",
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value, type } = e.target

    if (type === "checkbox") {
      const checked = e.target.checked
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)

    // Reset form or show success message
    alert("Form submitted successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-wider text-[#C89B6D] leading-tight">
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
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-amber-700 bg-white appearance-none"
                required
              >
                <option value="" className="text-amber-600">
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <Users className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600 pointer-events-none" />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type=""
                name="dateOfBirth"
                placeholder="Date of Birth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
                required
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
            </div>

            <div className="relative">
              <input
                type=""
                name="timeOfBirth"
                placeholder="Time of Birth"
                value={formData.timeOfBirth}
                onChange={handleInputChange}
                className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
                required
              />
              <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
            </div>
          </div>

          {/* Third Row - Place of Birth */}
          <div className="relative">
            <input
              type="text"
              name="placeOfBirth"
              placeholder="Place of Birth"
              value={formData.placeOfBirth}
              onChange={handleInputChange}
              className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
              required
            />
            <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
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
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "⏳ SENDING..." : "✦ SEND MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
