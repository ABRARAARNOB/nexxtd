/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  Layout, 
  Rocket, 
  Grid, 
  ChevronLeft, 
  ChevronRight, 
  Check,
  Zap,
  Smartphone,
  Search,
  Layers,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react";
import { useState, useEffect } from "react";
import logo from "./assets/logo.png";

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center px-4 sm:px-6 ${isScrolled ? "py-3 sm:py-4" : "py-5 sm:py-8"}`}>
      <nav className={`w-full max-w-7xl flex items-center justify-between px-4 sm:px-8 py-3 sm:py-4 transition-all duration-500 rounded-full border ${isScrolled ? "subtle-glass shadow-2xl backdrop-blur-xl border-primary/10" : "bg-transparent border-transparent"}`}>
        <div className="flex items-center gap-3">
          <img src={logo} alt="NEXXTD logo" className="h-10 w-auto" />
          <div className="text-xl font-black tracking-tighter text-white dark:text-white light:text-black flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            NEXXTD
          </div>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Portfolio", "Pricing"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="nav-link text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/15 transition-all text-white dark:text-white light:text-primary-container active:scale-95"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="hidden sm:block glow-button bg-primary text-primary-container dark:text-primary-container light:bg-primary-container light:text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:-translate-y-0.5 transition-all active:scale-95 shadow-xl">
            Get Started
          </button>
          <button 
            className="md:hidden text-white dark:text-white light:text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="md:hidden absolute top-[100%] left-4 right-4 lavender-card rounded-lg p-6 shadow-2xl"
        >
          <div className="flex flex-col gap-8">
            {["Services", "Portfolio", "Pricing"].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="glow-button bg-primary-container text-white px-6 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-36 sm:pt-44 lg:pt-[200px] pb-20 sm:pb-28 lg:pb-32 premium-gradient transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/25 text-[10px] font-black text-primary tracking-[0.2em] mb-6 sm:mb-8 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Digital Architecture 2026
          </div>
          <h1 className="text-[clamp(3.25rem,12vw,7.8rem)] font-black tracking-tighter leading-[0.92] text-white dark:text-white light:text-primary-container mb-6 sm:mb-8 text-balance">
            Build your next digital identity.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] mb-8 sm:mb-12 max-w-lg leading-relaxed font-medium">
            We craft high-performance portfolios and landing pages for creators and forward-thinking businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <motion.button whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }} className="glow-button bg-primary text-primary-container light:bg-primary-container light:text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary-container/20">
              Book a project
            </motion.button>
            <motion.button whileHover={{ y: -4 }} whileTap={{ scale: 0.97 }} className="bg-primary/10 dark:bg-primary/10 light:bg-white/65 hover:bg-primary/20 text-white dark:text-white light:text-primary-container px-8 py-4 rounded-full font-bold transition-all border border-primary/20">
              Explore work
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative lg:block hidden float-soft"
        >
          <div className="subtle-glass rounded-lg p-4 transform translate-y-4 overflow-hidden group shadow-2xl border border-primary/15">
            <img 
              alt="Dashboard Mockup" 
              className="rounded-xl w-full h-auto opacity-90 transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHgInN9CFXJ6564cSq2-qmWW1hGQFWcbwQYljY6AqYeUzqON6s1Nc8Z6ditt5UwJHKgsTDiYBUYEi9yjivXVEBn6S5fzfQvwPH4atnVDNwqQdbYTtvnY6qzOMxT6WXB_SkmYvmheolXZVgh74z0FTn6ooVOP9SF9adMfsIJmZXAbn_8Qs9b9xY0FYtTONcJ92jeGMgAkATL3vDb6u2-7AK1wCGv5hALJw_Ein00r7xFVYrUu_WV6cec06FMohkLYH6egzLYkFfuXuO"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Portfolio Systems",
      description: "Minimalist digital resumes that highlight your unique value and land high-tier opportunities."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Conversion Pages",
      description: "Optimized funnels designed for speed, clarity, and turning visitors into active customers."
    },
    {
      icon: <Grid className="w-8 h-8" />,
      title: "Product Showcases",
      description: "Immersive layouts for digital products that demand high-end presentation and trust."
    }
  ];

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-surface-low dark:bg-surface-low light:bg-[#c8b8ef] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="max-w-3xl mb-12 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-[clamp(2.35rem,7vw,4rem)] font-black text-white dark:text-white light:text-primary-container mb-6 tracking-tighter">Tailored expertise.</h2>
          <p className="text-base sm:text-lg text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] leading-relaxed font-medium">Focusing on clarity, speed, and conversion to elevate your digital presence.</p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeUpVariant}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="hover-lift lavender-card p-6 sm:p-8 lg:p-10 rounded-lg group relative overflow-hidden"
            >
              <div className="text-primary mb-8 p-3 bg-primary/10 w-fit rounded-lg transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-primary-container mb-4">{service.title}</h3>
              <p className="text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] leading-relaxed font-medium">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Audience = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-5 sm:gap-8"
        >
          <motion.div 
            variants={fadeUpVariant}
            whileHover={{ y: -8 }}
            className="hover-lift lavender-card p-6 sm:p-10 lg:p-12 rounded-lg flex flex-col justify-between min-h-[340px] sm:min-h-[420px] group"
          >
            <div>
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 block">Individuals</span>
              <h3 className="text-3xl sm:text-4xl font-black text-white dark:text-white light:text-primary-container mb-6 leading-tight">For Students & Professionals</h3>
              <p className="text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] leading-relaxed max-w-sm font-medium">We help you stand out in a crowded market with a brand that reflects your skills perfectly.</p>
            </div>
            <a href="#" className="text-white dark:text-white light:text-primary-container text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group/btn mt-8">
              Build your brand <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          <motion.div 
            variants={fadeUpVariant}
            whileHover={{ y: -8 }}
            className="hover-lift lavender-card p-6 sm:p-10 lg:p-12 rounded-lg flex flex-col justify-between min-h-[340px] sm:min-h-[420px] group"
          >
            <div>
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 block">Commercial</span>
              <h3 className="text-3xl sm:text-4xl font-black text-white dark:text-white light:text-primary-container mb-6 leading-tight">For Emerging Businesses</h3>
              <p className="text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] leading-relaxed max-w-sm font-medium">Scale your customer base with high-velocity landing pages built for modern conversion rates.</p>
            </div>
            <a href="#" className="text-white dark:text-white light:text-primary-container text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 group/btn mt-8">
              Launch your page <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const cases = [
    {
      title: "Lumina Personal",
      subtitle: "UX Design Portfolio",
      metric: "+45% Inquiries",
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZPJjyuHfkmhYHqG3acPuFFQoITbzBvocFsucSlMy-fT0snSDzCiGglPMdQbh4U3-VxX5i13SdKfwWH0RzoWM8xiLmxCDGvO7iqzHpS6DMPSk1p3BTgTmBSxq6y3_10UCvRZV58WKg49E2eKXD06N_xrIuUcFynR1fvC8jR7jJfhgKic8Hlr118DZYdYwV-exN-qfw7R2rTQsNMEAniTYzgGBXFcohD15whyoP03aTlzHnXGIHhcjhpYUReVlyacn3Yo8wGuiVbdLP",
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5gl4FpJz-Mnh21zR--WvQOGGn_8Jb_uJz3XmZtxBIcWaqJXxNOsNQvw3ws4PyjtgVobH-Jzmg9EB9UNjV3-ddoRE6f6RElkkCRj6BVskC-Xss5SQ1qPTtFdzYVULJSt6ISvBI7Bvg_VY3dM3IFR3fKnQ4E2wiRceGRRVVXfo8sjCFJ_DzS-iCHKtQeh4E5h2uYIFWeM6XMOGOwjg0jMQTlsd03llHDqHQIhawPfRDyulBh8JHywinPrIlVlc_A7kAAQ08uRTfsQet"
    },
    {
      title: "Velocity SaaS",
      subtitle: "Product Landing Page",
      metric: "3X Conversion",
      before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBi3F91fEO-Fe7ujkswoN0pBtpLQBWtluve8RxeNBVcD4NdnqaMZuJ6iIsa4G0FkZUB6XK6nmtGx9a_ppya2B4q1tA0PhDvZNNWXmYdS8ooHXTtvCUTsH1aNGlzdoV1LJHSSd3eYVKrfOyE_CIgyVQzTqUWLAQD9bKWhGLlg3ZIluQy6NahRc1-EIFp5kI0GeyyWHsiZ_vdGUuWHXVSc-l8ooiqgTXdiiuex4xIC4u8DF0A40JUjivvF3moN6sdIqa_MTkAkk_nR6aH",
      after: "https://lh3.googleusercontent.com/aida-public/AB6AXuATeS7nf7fP1iFuP70ADLxvoUIV-xC2lftkFPJUuidMuthXfEssVCi1wuVp3Z5OB7QUCVP59pZi6aYFvJo2sRwNZ6zT_USJ-mTT6NILePbD8OuCluIYlWQXhpDadOJu-WzAdHWIkHjX1H9OnktP5IzhrvBBIthHxwLIbe3f2mdPtm_54rRL1PX3ZN2Iq536w-IhO41wL4ors0vc9jMGaY-R9_GIwQIY_LnMsrr7cS2XTmU3ttkBZ2n7fgOx0HzAPvJ2TTdgd2EfPGY8"
    }
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-28 lg:py-32 bg-surface-low dark:bg-surface-low light:bg-[#c8b8ef] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 lg:mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-[clamp(2.35rem,7vw,4rem)] font-black text-white dark:text-white light:text-primary-container mb-6 tracking-tighter">The Edge.</h2>
            <p className="text-base sm:text-lg text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] font-medium leading-relaxed">Real results. Before and after our intervention.</p>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/15 transition-all text-white dark:text-white light:text-primary-container active:scale-95">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/15 transition-all text-white dark:text-white light:text-primary-container active:scale-95">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16"
        >
          {cases.map((item, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariant}
              whileHover={{ y: -8 }}
              className="space-y-6 sm:space-y-8 group"
            >
              <div className="aspect-[16/10] rounded-lg overflow-hidden lavender-card relative flex shadow-2xl">
                <div className="w-1/2 relative overflow-hidden grayscale opacity-40 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100">
                  <img alt={`${item.title} Before`} className="w-full h-full object-cover" src={item.before} referrerPolicy="no-referrer" />
                </div>
                <div className="w-1/2 relative overflow-hidden group-hover:scale-105 duration-1000 transition-transform">
                  <img alt={`${item.title} After`} className="w-full h-full object-cover" src={item.after} referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 px-1 sm:px-4">
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-white dark:text-white light:text-primary-container tracking-tight">{item.title}</h4>
                  <p className="text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] font-medium mt-1">{item.subtitle}</p>
                </div>
                <div className="px-4 py-2 bg-primary/10 rounded-full w-fit">
                  <span className="text-[10px] font-black text-primary dark:text-primary light:text-primary-container tracking-widest uppercase">{item.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const benefits = [
    {
      title: "High Velocity",
      description: "Deployment in 2-4 days. We prioritize your time without compromising on the minute details."
    },
    {
      title: "Mobile Native",
      description: "Fluid responsiveness is at the core. Every layout is optimized for high-end mobile experiences."
    },
    {
      title: "SEO Tier 1",
      description: "Engineered for search visibility and lightning-fast loading speeds from day one."
    },
    {
      title: "Modern Stack",
      description: "We use the same technology frameworks powering companies like Stripe and Linear."
    }
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10 lg:gap-16">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={fadeUpVariant}
        >
          <h2 className="text-[clamp(2.35rem,7vw,3.4rem)] font-black text-white dark:text-white light:text-primary-container mb-6 tracking-tighter">Built for speed.</h2>
          <p className="text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] leading-relaxed font-medium">High-end engineering meets elite design. We don't just build websites; we build assets.</p>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:col-span-2 grid sm:grid-cols-2 gap-6 sm:gap-10 lg:gap-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeUpVariant} whileHover={{ x: 6 }} className="lavender-card rounded-lg p-6 space-y-4">
              <h4 className="text-white dark:text-white light:text-primary-container font-bold flex items-center gap-3">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                {benefit.title}
              </h4>
              <p className="text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] text-sm leading-relaxed font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter Portfolio",
      price: "199",
      features: ["Custom Branding", "3 Optimized Sections", "Responsive Delivery", "48hr Support Window"],
      isPreferred: false
    },
    {
      name: "Full Launch",
      price: "499",
      features: ["High-Architecture", "Advanced SEO Setup", "Motion Design", "Priority 24/7 Support"],
      isPreferred: true
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 lg:py-32 bg-surface-low dark:bg-surface-low light:bg-[#c8b8ef] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center mb-12 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-[clamp(2.35rem,8vw,4.8rem)] font-black text-white dark:text-white light:text-primary-container mb-6 tracking-tighter">Simple pricing.</h2>
          <p className="text-base sm:text-lg text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] font-medium">One-time investment for a lifetime of digital authority.</p>
        </motion.div>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={fadeUpVariant}
              whileHover={{ y: -10 }}
              className={`hover-lift p-6 sm:p-10 lg:p-12 rounded-lg border flex flex-col relative overflow-hidden transition-all duration-300 ${plan.isPreferred ? "bg-primary/10 dark:bg-primary/10 light:bg-primary/35 border-primary/35" : "lavender-card"}`}
            >
              {plan.isPreferred && (
                <div className="absolute top-0 right-0 bg-primary-container text-white text-[10px] font-black px-4 py-2 rounded-bl-2xl uppercase tracking-[0.2em] z-10">
                  Preferred
                </div>
              )}
              <h3 className="text-xl font-black text-white dark:text-white light:text-primary-container mb-2">{plan.name}</h3>
              <div className="text-4xl sm:text-5xl font-black text-white dark:text-white light:text-primary-container mb-8 mt-4 tracking-tighter">
                ${plan.price}
                <span className="text-sm font-bold text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] ml-2">/ project</span>
              </div>
              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.1em] text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d]">
                    <div className="p-1 bg-primary/10 rounded-full">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-full font-black tracking-tight transition-all active:scale-95 ${plan.isPreferred ? "glow-button bg-primary-container text-white hover:-translate-y-1 shadow-xl shadow-primary/20" : "border border-primary/20 text-white dark:text-white light:text-primary-container hover:bg-primary/15"}`}>
                Select {plan.isPreferred ? "Package" : "Starter"}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden transition-colors duration-300">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <h2 className="text-[clamp(3rem,10vw,7rem)] font-black text-white dark:text-white light:text-primary-container mb-8 sm:mb-10 tracking-tighter leading-[0.96] text-balance">
          Let's build something beautiful.
        </h2>
        <p className="text-lg sm:text-xl text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] mb-10 sm:mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
          Join the new generation of creators and businesses setting the standard on the web.
        </p>
        <motion.button whileHover={{ y: -5, scale: 1.02 }} whileTap={{ scale: 0.97 }} className="glow-button bg-primary text-primary-container light:bg-primary-container light:text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-black text-base sm:text-xl transition-all shadow-2xl">
          Get Started Now
        </motion.button>
        <div className="mt-24 pt-12 border-t border-white/5 dark:border-white/5 light:border-black/5">
          <p className="text-[10px] font-black text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] uppercase tracking-[0.4em]">Trusted by innovators worldwide</p>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface dark:bg-surface light:bg-[#d3c5f6] py-16 sm:py-24 border-t border-primary/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="NEXXTD logo" className="h-10 w-auto" />
              <div className="text-xl font-black text-white dark:text-white light:text-primary-container tracking-tighter">
                NEXXTD
              </div>
            </div>
            <p className="text-sm text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] max-w-xs leading-relaxed font-bold">
              The digital foundation for professional talent. Architecture for the web.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-32">
            <div>
              <h5 className="text-white dark:text-white light:text-primary-container text-[10px] font-black uppercase tracking-[0.2em] mb-8">Social</h5>
              <div className="flex flex-col gap-5">
                {["Twitter", "Instagram", "LinkedIn"].map((link) => (
                  <a key={link} href="#" className="nav-link text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] hover:text-primary transition-colors">{link}</a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-white dark:text-white light:text-primary-container text-[10px] font-black uppercase tracking-[0.2em] mb-8">Legal</h5>
              <div className="flex flex-col gap-5">
                {["Privacy", "Terms"].map((link) => (
                  <a key={link} href="#" className="nav-link text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] hover:text-primary transition-colors">{link}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-on-surface-variant/60 dark:text-on-surface-variant/60 light:text-[#67577d] uppercase tracking-widest">
          <p>(c) 2026 Nexxtd Studio.</p>
          <p className="flex items-center gap-2">
            <span className="w-1 h-1 bg-primary rounded-full"></span>
            Crafted for the elite
          </p>
        </div>
      </div>
    </footer>
  );
};

const StickyFooter = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 w-full px-3 sm:px-6 z-40 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-center pointer-events-auto">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="subtle-glass max-w-full px-4 sm:px-6 py-3 rounded-full flex items-center gap-4 sm:gap-8 shadow-2xl backdrop-blur-xl border-primary/10 overflow-x-auto"
        >
          <div className="hidden sm:flex items-center gap-4 border-r border-primary/15 pr-6 mr-2">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant dark:text-on-surface-variant light:text-[#67577d] hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/70 dark:text-on-surface-variant/70 light:text-[#67577d] whitespace-nowrap">
            (c) 2026 NEXXTD
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen relative">
      <div className="ambient-glow" />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="transition-colors duration-300">
        <Hero />
        <Services />
        <Audience />
        <Portfolio />
        <WhyUs />
        <Pricing />
        <CTA />
      </main>
      <Footer />
      <StickyFooter />
    </div>
  );
}
