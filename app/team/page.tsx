"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

type TeamMember = {
  id: number
  name: string
  role: string
  bio: string
  image: string
  social: {
    facebook?: string
    twitter?: string
    linkedin?: string
    email?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Executive Director",
    bio: "With over 15 years of experience in humanitarian work, Dr. Sharma leads our organization's mission to create lasting change in Nepal.",
    image: "/team/director.jpg",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "rajesh@example.com"
    }
  },
  {
    id: 2,
    name: "Maya Gurung",
    role: "Program Director",
    bio: "Maya specializes in community development and has successfully implemented numerous projects across rural Nepal.",
    image: "/team/program-director.jpg",
    social: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "maya@example.com"
    }
  },
  // Add more team members as needed
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Dedicated professionals working together to create positive change in Nepal
          </motion.p>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-80 w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white p-8">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent z-10" />
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center space-x-4">
                      {member.social.facebook && (
                        <Link href={member.social.facebook} className="text-gray-400 hover:text-blue-600 transition-colors">
                          <Facebook className="h-5 w-5" />
                        </Link>
                      )}
                      {member.social.twitter && (
                        <Link href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </Link>
                      )}
                      {member.social.linkedin && (
                        <Link href={member.social.linkedin} className="text-gray-400 hover:text-blue-700 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      )}
                      {member.social.email && (
                        <Link href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-red-500 transition-colors">
                          <Mail className="h-5 w-5" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
