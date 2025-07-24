import React from 'react'
import { MapPin, BadgeDollarSign, Clock, Target, Sparkles, Settings, Link2, Mail, Filter, Linkedin, Briefcase, Globe, Users, Inbox, Star } from "lucide-react";

const Home = () => {
  return (
    <>
    {/* Hero Section */}
    <section className="relative bg-[var(--color-white)] min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-accent)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[var(--color-info)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[var(--color-secondary)] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center bg-[var(--color-accent)] rounded-full px-4 py-2 mb-6">
            <span className="bg-[var(--color-info)] w-2 h-2 rounded-full mr-2"></span>
            <span className="text-[var(--color-info)] text-sm font-medium">
              AI-Powered Job Discovery
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-primary)] mb-6 leading-tight">
            Stop Searching.
            <br />
            <span className="bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-dark)] to-[var(--color-primary)] bg-clip-text text-transparent">
              Start Finding.
            </span>
          </h1>

          <p className="text-xl text-[var(--color-dark)] mb-8 max-w-lg leading-relaxed">
            JobMatrix automatically scans multiple job platforms, filters
            opportunities based on your preferences, and delivers personalized
            job matches directly to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-dark)] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Get Started Free →
            </button>
            <button className="border-2 border-[var(--color-info)] text-[var(--color-primary)] px-8 py-4 rounded-2xl font-semibold hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all duration-300">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 text-center sm:text-left">
            <div>
              <div className="text-3xl font-bold text-[var(--color-primary)]">
                10K+
              </div>
              <div className="text-[var(--color-dark)] text-sm">
                Jobs Matched Daily
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-primary)]">
                50+
              </div>
              <div className="text-[var(--color-dark)] text-sm">
                Job Platforms
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--color-primary)]">
                95%
              </div>
              <div className="text-[var(--color-dark)] text-sm">
                Match Accuracy
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Mock Dashboard */}
        <div className="relative">
          <div className="bg-[var(--color-white)] rounded-3xl shadow-2xl p-8 border border-[var(--color-light)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-[var(--color-dark)]">
                Your Job Feed
              </h3>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-[var(--color-secondary)] rounded-full"></div>
                <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full"></div>
                <div className="w-3 h-3 bg-[var(--color-info)] rounded-full"></div>
              </div>
            </div>

            {/* Mock Job Cards */}
            <div className="space-y-4">
              {[
                {
                  title: "Senior Frontend Developer",
                  company: "Tech Corp",
                  match: "98%",
                },
                {
                  title: "Full Stack Engineer",
                  company: "StartupX",
                  match: "94%",
                },
                {
                  title: "React Developer",
                  company: "Digital Agency",
                  match: "91%",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-light)] rounded-xl p-4 hover:bg-[var(--color-accent)] transition-colors cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-[var(--color-dark)]">
                      {job.title}
                    </h4>
                    <span className="bg-[var(--color-accent)] text-[var(--color-info)] text-xs px-2 py-1 rounded-full">
                      {job.match}
                    </span>
                  </div>
                  <p className="text-[var(--color-primary)] text-sm">
                    {job.company}
                  </p>
                  <div className="flex items-center mt-2 text-xs text-[var(--color-info)]">
                    <span className="mr-3 flex items-center gap-1">
                      <MapPin size={14} /> Remote
                    </span>
                    <span className="mr-3 flex items-center gap-1">
                      <BadgeDollarSign size={14} /> $80k-120k
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> 2h ago
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-gradient-to-r from-[var(--color-info)] to-[var(--color-dark)] text-white py-3 rounded-xl font-medium hover:shadow-lg transition-shadow">
              View All Matches
            </button>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 bg-[var(--color-secondary)] rounded-full p-4 shadow-lg animate-bounce flex items-center justify-center">
            <Target className="text-white" size={32} />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-[var(--color-info)] rounded-full p-3 shadow-lg flex items-center justify-center">
            <Sparkles className="text-white" size={24} />
          </div>
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="bg-[var(--color-light)] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[var(--color-accent)] rounded-full px-4 py-2 mb-6">
            <span className="bg-[var(--color-info)] w-2 h-2 rounded-full mr-2"></span>
            <span className="text-[var(--color-info)] text-sm font-medium">Simple 3-Step Process</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6">
            Set It Once,
            <br />
            <span className="bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-secondary)] bg-clip-text text-transparent">
              Let AI Do The Rest
            </span>
          </h2>
          
          <p className="text-xl text-[var(--color-dark)] max-w-3xl mx-auto leading-relaxed">
            No more endless scrolling through job boards. JobMatrix learns your preferences and delivers only the opportunities that matter to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="relative group">
            <div className="bg-[var(--color-white)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-[var(--color-info)] to-[var(--color-dark)] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-[var(--color-accent)] rounded-2xl p-6 mb-6 flex items-center justify-center">
                  <Settings size={36} className="text-[var(--color-secondary)]" />
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  Define Your Dream Job
                </h3>
                
                <p className="text-[var(--color-dark)] leading-relaxed mb-6">
                  Set your preferred roles, skills, salary range, location, and company size. Our AI learns what makes you tick professionally.
                </p>
                
                <div className="bg-[var(--color-light)] rounded-xl p-4">
                  <div className="text-sm text-[var(--color-info)] mb-2">Example Filters:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[var(--color-accent)] text-[var(--color-info)] px-3 py-1 rounded-full text-xs flex items-center gap-1"><Filter size={14}/>React Developer</span>
                    <span className="bg-[var(--color-accent)] text-[var(--color-info)] px-3 py-1 rounded-full text-xs flex items-center gap-1"><Globe size={14}/>Remote OK</span>
                    <span className="bg-[var(--color-accent)] text-[var(--color-info)] px-3 py-1 rounded-full text-xs flex items-center gap-1"><BadgeDollarSign size={14}/> $80k+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="bg-[var(--color-white)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-secondary)] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-[var(--color-accent)] rounded-2xl p-6 mb-6 flex items-center justify-center">
                  <Link2 size={36} className="text-[var(--color-secondary)]" />
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  Connect Your Platforms
                </h3>
                
                <p className="text-[var(--color-dark)] leading-relaxed mb-6">
                  Link LinkedIn, Indeed, Glassdoor, and 50+ job boards. One dashboard to rule them all, no more tab juggling.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[var(--color-accent)] rounded-lg p-3 text-center flex items-center justify-center gap-2">
                    <Linkedin size={16} className="text-[var(--color-info)]" />
                    <div className="font-semibold text-[var(--color-info)]">LinkedIn</div>
                  </div>
                  <div className="bg-[var(--color-accent)] rounded-lg p-3 text-center flex items-center justify-center gap-2">
                    <Briefcase size={16} className="text-[var(--color-info)]" />
                    <div className="font-semibold text-[var(--color-info)]">Indeed</div>
                  </div>
                  <div className="bg-[var(--color-accent)] rounded-lg p-3 text-center flex items-center justify-center gap-2">
                    <Globe size={16} className="text-[var(--color-info)]" />
                    <div className="font-semibold text-[var(--color-info)]">Glassdoor</div>
                  </div>
                  <div className="bg-[var(--color-accent)] rounded-lg p-3 text-center flex items-center justify-center gap-2">
                    <Users size={16} className="text-[var(--color-info)]" />
                    <div className="font-semibold text-[var(--color-info)]">+47 More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="bg-[var(--color-white)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-info)] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              
              <div className="mt-8">
                <div className="bg-[var(--color-accent)] rounded-2xl p-6 mb-6 flex items-center justify-center">
                  <Mail size={36} className="text-[var(--color-secondary)]" />
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  Receive Smart Updates
                </h3>
                
                <p className="text-[var(--color-dark)] leading-relaxed mb-6">
                  Get daily or weekly curated job matches in your inbox. Each email contains only high-quality, relevant opportunities.
                </p>
                
                <div className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-info)] rounded-xl p-4">
                  <div className="flex items-center text-sm text-[var(--color-info)]">
                    <Star size={16} className="mr-2" />
                    <span className="font-medium">95% match accuracy guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-dark)] text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
            Start Your Job Hunt Automation →
          </button>
          {/* <p className="text-[var(--color-info)] mt-4">No credit card required • 14-day free trial</p> */}
        </div>
      </div>
    </section>

  </>
  )
}

export default Home
