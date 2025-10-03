'use client';

import { Sparkles, ArrowUpRight, Mail, Clock, MessageCircle, Dribbble, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0b1a] via-[#141529] to-[#1a1b3a]">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                <div className="w-6 h-6 border-2 border-white/90 rounded-lg" />
              </div>
              <span className="text-white font-semibold text-lg">Crestive</span>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors text-sm">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors text-sm">
                Projects
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-sm">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </button>
            </nav>

            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </header>

      <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>UI/UX & Graphic Designer</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Haze Codes
                <span className="inline-flex items-center ml-4">
                  <ArrowUpRight className="w-12 h-12 text-cyan-400" />
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                I'm a versatile designer specializing in graphic, web, and product design to help grow your business. Let's build something great!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-white hover:bg-gray-100 text-black font-medium"
              >
                See All Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Contact Now
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ml-auto max-w-sm transform hover:scale-105 transition-transform">
                <p className="text-gray-300 italic mb-2">"Super talented and easy to work with. Highly recommend!"</p>
                <p className="text-cyan-400 text-sm">- Moran</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ml-auto max-w-sm transform hover:scale-105 transition-transform">
                <p className="text-gray-300 italic mb-2">"Super helpful and appreciable work"</p>
                <p className="text-cyan-400 text-sm">- Michael</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Crestive | Haze, <span className="text-gray-400">Your Designer</span>
            </h2>
            <p className="text-gray-400">Brief initial presentation of myself and my previous experiences.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="relative aspect-square lg:aspect-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-[#1a1b3a] to-[#0a0b1a] rounded-2xl overflow-hidden aspect-square flex items-end justify-center border border-white/10">
                <div className="w-64 h-64 rounded-t-full bg-gradient-to-b from-gray-700 to-gray-900 opacity-40" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Hey, I'm Hatze — designer, developer, and founder of Crestive. I turn half-baked ideas and "what-if" thoughts into polished digital magic. Whether it's pixels or code, I obsess over the tiny details that make things feel just right.
              </p>

              <div className="flex flex-wrap gap-3">
                {['Product Design', 'UX Design', 'UI Design', 'GFX Work', 'Discord Development', 'Branding'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-gray-400">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">30+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Featured Projects</h2>
          <p className="text-gray-400 mb-12">Coming soon - showcasing my best work</p>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">About Me</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            With over 5 years of experience in design and development, I've helped businesses transform their ideas into beautiful, functional digital products.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-black/40 border-t border-white/5 px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white/90 rounded-lg" />
                </div>
                <span className="text-white font-semibold text-lg">Haze</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting exceptional digital experiences through innovative design and seamless development.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Dribbble, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 border-b border-cyan-500 pb-2 inline-block">Navigation</h3>
              <ul className="space-y-3">
                {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 border-b border-cyan-500 pb-2 inline-block">Services</h3>
              <ul className="space-y-3">
                {['UI/UX Design', 'Web Development', 'Brand Identity', 'GFX Work', 'Discord Services'].map((service) => (
                  <li key={service} className="text-gray-400 text-sm">{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 border-b border-cyan-500 pb-2 inline-block">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  teamcrestive@gmail.com
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  Mon - Fri, 9pm - 1am IST
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <MessageCircle className="w-4 h-4 text-cyan-400" />
                  hxze.777
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-white font-medium">Ready to start your project?</p>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                  Get in touch →
                </Button>
              </div>
              <div className="text-center md:text-right space-y-2">
                <p className="text-gray-400 text-sm">© 2025 Haze. All rights reserved.</p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
