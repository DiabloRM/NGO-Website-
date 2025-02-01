"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { Heart, Book, Users, Leaf, ArrowRight } from "lucide-react"
import Image from "next/image"

type VolunteerProfile = {
  id: number
  name: string
  role: string
  location: string
  duration: string
  image: string
  story: string
}

const volunteerProfiles: VolunteerProfile[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Education Volunteer",
    location: "Kathmandu",
    duration: "6 months",
    image: "/volunteers/sarah.jpg",
    story: "Teaching English to local children has been the most rewarding experience of my life."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Healthcare Worker",
    location: "Pokhara",
    duration: "1 year",
    image: "/volunteers/michael.jpg",
    story: "Working in rural health clinics has given me a new perspective on community healthcare."
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Community Developer",
    location: "Chitwan",
    duration: "9 months",
    image: "/volunteers/emma.jpg",
    story: "Helping build sustainable infrastructure for local communities has been incredibly fulfilling."
  }
]

const impactAreas = [
  {
    icon: <Book className="w-8 h-8 text-blue-500" />,
    title: "Education",
    description: "Teach and mentor students in local schools"
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Healthcare",
    description: "Support medical camps and health initiatives"
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "Community",
    description: "Work on community development projects"
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    title: "Environment",
    description: "Participate in conservation efforts"
  }
]

export default function VolunteerPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    experience: "",
    availability: ""
  })

  useEffect(() => {
    // Disable scroll temporarily
    document.body.style.overflow = 'hidden'
    
    // Enable scroll after animation
    setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 2000) // Adjust timing as needed
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Application Submitted!",
      description: "We'll be in touch with you soon.",
      duration: 5000,
    })
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      experience: "",
      availability: ""
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Initial Mountain Reveal */}
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: "70vh" }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="relative w-full"
      >
        <Image
          src="/mountain.jpg"
          alt="mountain"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        className="relative -mt-20 bg-white rounded-t-[3rem] shadow-2xl"
      >
        {/* Hero Content */}
        <section className="relative pt-20 pb-24 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="container mx-auto px-4 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Empowering Nepal
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              Make a lasting impact by sharing your skills and time with communities in need.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer shadow-xl"
              onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </section>

        {/* Impact Areas */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Areas of Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-center">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Volunteer Profiles */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Meet Our Volunteers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {volunteerProfiles.map((profile, index) => (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-24 w-24 mb-4 ring-4 ring-blue-100">
                          <AvatarImage src={profile.image} alt={profile.name} />
                          <AvatarFallback className="bg-blue-600 text-white">
                            {profile.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
                        <p className="text-blue-600 font-medium mb-1">{profile.role}</p>
                        <p className="text-gray-500 text-sm mb-4">
                          {profile.location} • {profile.duration}
                        </p>
                        <p className="text-gray-600 italic">&quot;{profile.story}&quot;</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Application Form */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          id="application-form"
          className="py-20"
        >
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl">Volunteer Application</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below to start your volunteer journey with us.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Your contact number"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Area of Interest</label>
                    <select
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select an area</option>
                      <option value="education">Education</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="community">Community Development</option>
                      <option value="environment">Environmental Conservation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Relevant Experience</label>
                    <textarea
                      rows={4}
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Tell us about your relevant experience..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Availability</label>
                    <select
                      required
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    >
                      <option value="">Select duration</option>
                      <option value="1-3">1-3 months</option>
                      <option value="3-6">3-6 months</option>
                      <option value="6-12">6-12 months</option>
                      <option value="12+">More than 12 months</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
                  >
                    Submit Application
                  </motion.button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}