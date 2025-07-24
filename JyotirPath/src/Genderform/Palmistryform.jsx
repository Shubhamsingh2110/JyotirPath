import { useState } from "react"
import { User, Phone, ChevronDown } from "lucide-react"

export default function Component() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // WhatsApp Number (without +, use country code)
    const phoneNumber = "917498487413" // 🔁 Replace with your number

    // Message to send
    const message = `Hello! My name is ${formData.fullName}. I would like to inquire about the "${formData.service}" service. My contact number is ${formData.phone}.`

    // Encode the message
    const encodedMessage = encodeURIComponent(message)

    // WhatsApp redirect link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappURL, "_blank")

    setIsSubmitting(false)
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
          {/* Name Field */}
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

          {/* Phone Number Field */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
              required
            />
            <Phone className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
          </div>

          {/* Service Field */}
          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-amber-700 bg-white appearance-none"
              required
            >
              <option value="" className="text-amber-600">
                Select Service
              </option>
              <option value="Marriage Muhurat">palmistry</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600 pointer-events-none" />
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
              {isSubmitting ? "⏳ Redirecting..." : "✦ Check"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
