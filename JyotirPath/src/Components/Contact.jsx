import React, { useState } from "react"
import { User, Calendar, Clock, MapPin, Mail, ChevronDown } from "lucide-react"

const Contact = () => {
  return (
     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light font-cinzel tracking-wider text-[#C89B6D] leading-tight">
            RECEIVE YOUR FREE
            <br />
            BIRTH CHART GUIDE
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-14 pl-4 pr-12 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
              />
              <User className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#C89B6D]" />
            </div>

            <div className="relative">
              <select className="w-full h-14 pl-4 pr-12 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 text-amber-700 bg-white appearance-none">
                <option value="" className="text-amber-600">
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600 pointer-events-none" />
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="dd/mm/yyyy"
                className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Time of Birth"
                className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
              />
              <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
            </div>
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Birth Location"
                className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
              />
              <MapPin className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-14 pl-4 pr-12 border border-[#C89B6D] rounded-md focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 placeholder:text-amber-600 text-amber-700 bg-white"
              />
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-600" />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3 pt-4">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 h-4 w-4 text-blue-600 border-[#C89B6D] rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor="terms" className="text-sm text-[#C89B6D] leading-relaxed">
              BY ACCEPTING YOU AGREE TO OUR TERMS OF SERVICE AND PRIVACY POLICY.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="bg-[#C89B6D] text-white px-12 py-4 rounded-md text-base font-medium tracking-wide transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
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
