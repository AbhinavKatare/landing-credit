"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    BarChart3,
    Zap,
    Layers,
    FileText,
    CreditCard,
    Users,
    Building2,
    Car,
    TrendingUp,
    Lock,
    Globe2,
    Menu,
    X,
    Play,
    Award,
    Clock,
    Database,
    Workflow,
    FileCheck,
    Calculator,
    Receipt,
    Calendar,
    AlertCircle,
    CheckCircle,
    Star,
    ChevronRight,
    Phone,
    Mail,
    Linkedin,
    Twitter,
    Facebook,
    Youtube,
    ArrowDown,
    Sparkles,
    Target,
    Gauge,
    LineChart,
    Settings,
    BookOpen,
    Activity,
    PieChart,
    TrendingDown,
    DollarSign,
    Percent,
    ArrowUpRight,
    BadgeCheck
} from "lucide-react";

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        let start = 0;
                        const increment = end / (duration / 16);
                        const timer = setInterval(() => {
                            start += increment;
                            if (start >= end) {
                                setCount(end);
                                clearInterval(timer);
                            } else {
                                setCount(Math.floor(start));
                            }
                        }, 16);
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [end, duration, hasAnimated]);

    return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

// Scroll Animation Hook
const useScrollAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return { ref, isVisible };
};

// --- Components ---

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? "bg-white/80 backdrop-blur-xl shadow-xl py-3 border-b border-slate-200/50" 
                    : "bg-white/60 backdrop-blur-lg py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative w-12 h-12 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-xl flex items-center justify-center shadow-xl shadow-[#74bc1f]/30 group-hover:scale-110 transition-transform duration-300">
                                <CreditCard className="text-white w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <span className="text-2xl font-extrabold tracking-tight text-slate-900 block leading-tight">
                                Credit<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74bc1f] to-[#5da612]">Hub</span>
                            </span>
                            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                                Enterprise Platform
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10">
                        {[
                            { label: "Platform", href: "#platform" },
                            { label: "Solutions", href: "#solutions" },
                            { label: "Features", href: "#features" },
                            { label: "Resources", href: "#resources" }
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm font-semibold text-slate-700 hover:text-[#74bc1f] transition-all duration-300 relative group py-2"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#74bc1f] to-[#5da612] group-hover:w-full transition-all duration-500"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link 
                            href="/login" 
                            className="text-sm font-semibold text-slate-700 hover:text-[#74bc1f] transition-colors duration-300"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="#contact"
                            className="relative group bg-gradient-to-r from-[#74bc1f] to-[#5da612] hover:from-[#5da612] hover:to-[#4a8a0f] text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-[#74bc1f]/25 hover:shadow-xl hover:shadow-[#74bc1f]/40 flex items-center gap-2 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Request Demo
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#5da612] to-[#74bc1f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl animate-in slide-in-from-top duration-300">
                    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
                        {[
                            { label: "Platform", href: "#platform" },
                            { label: "Solutions", href: "#solutions" },
                            { label: "Features", href: "#features" },
                            { label: "Resources", href: "#resources" }
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-base font-semibold text-slate-800 hover:text-[#74bc1f] py-2 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-2" />
                        <Link
                            href="/login"
                            className="text-base font-semibold text-slate-800 hover:text-[#74bc1f] py-2"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="#contact"
                            className="w-full bg-gradient-to-r from-[#74bc1f] to-[#5da612] text-white py-3 rounded-xl font-bold text-center shadow-lg"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Request Demo
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

const Hero = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-green-50/30">
            {/* Advanced Background Elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#74bc1f]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#74bc1f]/5 via-transparent to-blue-500/5 rounded-full blur-3xl"></div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div ref={ref} className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#74bc1f]/10 via-[#74bc1f]/5 to-[#74bc1f]/10 text-[#5da612] text-xs font-bold uppercase tracking-wider mb-8 border border-[#74bc1f]/20 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                        <span>Enterprise Credit Management Platform</span>
                    </div>
                    
                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                        Complete Vehicle Credit
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74bc1f] via-[#5da612] to-[#74bc1f] bg-[length:200%_auto] animate-gradient">
                            Management System
                        </span>
                    </h1>
                    
                    {/* Subheadline */}
                    <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                        Streamline your entire vehicle financing workflow from application to collection.
                        <br className="hidden sm:block" />
                        <span className="text-slate-500">Built for automotive dealers, banks, and fintech companies.</span>
                    </p>
                    
                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <Link
                            href="#contact"
                            className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#74bc1f] to-[#5da612] hover:from-[#5da612] hover:to-[#4a8a0f] text-white rounded-2xl font-bold text-lg shadow-2xl shadow-[#74bc1f]/40 hover:shadow-[#74bc1f]/50 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#5da612] to-[#74bc1f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                        <button className="group w-full sm:w-auto px-10 py-5 bg-white/80 backdrop-blur-md hover:bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-300 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl">
                            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Watch Demo
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-600">
                        {[
                            { icon: CheckCircle, text: "No Credit Card Required" },
                            { icon: CheckCircle, text: "14-Day Free Trial" },
                            { icon: CheckCircle, text: "Enterprise Security" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 group">
                                <item.icon className="w-5 h-5 text-[#74bc1f] group-hover:scale-110 transition-transform" />
                                <span className="font-semibold">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Advanced Dashboard Preview */}
                <div className="mt-24 relative mx-auto max-w-7xl">
                    <div className="relative">
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#74bc1f]/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                        
                        {/* Main Dashboard */}
                        <div className="relative aspect-[16/10] bg-white rounded-3xl shadow-2xl border border-slate-200/50 overflow-hidden backdrop-blur-xl">
                            {/* Browser Chrome */}
                            <div className="h-16 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/50 flex items-center px-6 gap-3 backdrop-blur-sm">
                                <div className="flex gap-2">
                                    <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-sm"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm"></div>
                                </div>
                                <div className="flex-1 mx-6 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl px-5 py-2.5 text-xs text-slate-500 font-mono shadow-sm">
                                    app.credithub.com/dashboard
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"></div>
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"></div>
                                </div>
                            </div>
                            
                            {/* Dashboard Content */}
                            <div className="h-full p-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 grid grid-cols-12 gap-6">
                                {/* Sidebar */}
                                <div className="col-span-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100 p-6 space-y-4">
                                    <div className="h-8 w-3/4 bg-gradient-to-r from-[#74bc1f] to-[#5da612] rounded-lg shadow-md"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                                        <div className="h-4 w-full bg-slate-100 rounded"></div>
                                        <div className="h-4 w-2/3 bg-slate-100 rounded"></div>
                                    </div>
                                    <div className="h-40 w-full bg-gradient-to-br from-[#74bc1f]/10 via-slate-50 to-blue-50 rounded-xl mt-6 border-2 border-dashed border-[#74bc1f]/20 flex items-center justify-center">
                                        <div className="text-center">
                                            <Activity className="w-12 h-12 text-[#74bc1f] mx-auto mb-2 opacity-40" />
                                            <p className="text-xs text-slate-400 font-medium">Quick Stats</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Main Content */}
                                <div className="col-span-9 grid grid-cols-3 gap-6">
                                    {/* Large Chart */}
                                    <div className="col-span-3 h-80 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100 p-8">
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="h-7 w-56 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg"></div>
                                            <div className="h-10 w-36 bg-gradient-to-r from-[#74bc1f] to-[#5da612] rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                                <TrendingUp className="w-4 h-4 mr-2" />
                                                Active Accounts
                                            </div>
                                        </div>
                                        <div className="h-64 w-full bg-gradient-to-br from-[#74bc1f]/5 via-slate-50 to-blue-50 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center relative overflow-hidden">
                                            {/* Animated Chart Lines */}
                                            <div className="absolute inset-0 flex items-end justify-around px-8 pb-4">
                                                {[40, 60, 45, 75, 55, 85, 70].map((height, i) => (
                                                    <div key={i} className="flex-1 mx-1 flex items-end">
                                                        <div 
                                                            className="w-full bg-gradient-to-t from-[#74bc1f] to-[#5da612] rounded-t-lg shadow-md animate-pulse"
                                                            style={{ height: `${height}%`, animationDelay: `${i * 0.1}s` }}
                                                        ></div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="relative z-10 text-center">
                                                <LineChart className="w-20 h-20 text-[#74bc1f] mx-auto mb-3 opacity-20" />
                                                <p className="text-sm text-slate-400 font-medium">Real-time Analytics</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Stats Cards */}
                                    {[
                                        { label: "Total Applications", value: "2,847", trend: "+12%" },
                                        { label: "Active Accounts", value: "1,234", trend: "+8%" },
                                        { label: "Revenue", value: "QAR 45M", trend: "+23%" }
                                    ].map((stat, i) => (
                                        <div key={i} className="h-48 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100 p-6 hover:shadow-xl transition-all duration-300">
                                            <div className="h-5 w-32 bg-slate-100 rounded mb-4"></div>
                                            <div className="h-12 w-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200 flex items-center justify-center mb-3">
                                                <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="w-4 h-4 text-[#74bc1f]" />
                                                <span className="text-xs font-semibold text-[#74bc1f]">{stat.trend}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating Notification Cards */}
                        <div className="absolute -bottom-8 -right-8 hidden lg:block bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-xs animate-bounce-slow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-2xl blur-md opacity-50"></div>
                                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#74bc1f] to-[#5da612] flex items-center justify-center shadow-lg">
                                        <CheckCircle2 className="text-white w-7 h-7" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Application Approved</p>
                                    <p className="text-2xl font-bold text-slate-900">QAR 125,000</p>
                                </div>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-gradient-to-r from-[#74bc1f] to-[#5da612] w-3/4 h-full rounded-full shadow-sm"></div>
                            </div>
                        </div>

                        <div className="absolute -top-6 -left-6 hidden lg:block bg-white/90 backdrop-blur-xl p-5 rounded-xl shadow-xl border border-slate-100 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                                    <Users className="text-white w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold">New Customer</p>
                                    <p className="text-lg font-bold text-slate-900">+24 Today</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocialProof = () => {
    const companies = [
        { name: "AutoFinance Group", icon: Car },
        { name: "CreditFirst Bank", icon: Building2 },
        { name: "VehicleLend", icon: CreditCard },
        { name: "FinTech Motors", icon: TrendingUp },
        { name: "DealerCredit", icon: Users }
    ];

    return (
        <div className="bg-gradient-to-b from-white via-slate-50/50 to-white border-y border-slate-100 py-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-12 text-center">
                    Trusted by leading automotive finance companies
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                    {companies.map((company, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700 group hover:scale-110 transition-transform duration-300">
                            <company.icon className="w-8 h-8 group-hover:text-[#74bc1f] transition-colors duration-300" />
                            <span className="text-lg font-bold group-hover:text-[#74bc1f] transition-colors duration-300">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const PlatformOverview = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="platform" className="py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div ref={ref} className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#74bc1f]/10 via-[#74bc1f]/5 to-[#74bc1f]/10 text-[#5da612] text-xs font-bold uppercase tracking-wider mb-8 border border-[#74bc1f]/20 backdrop-blur-sm shadow-lg">
                        <Target className="w-3.5 h-3.5" />
                        Platform Overview
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                        Complete Credit Management
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74bc1f] to-[#5da612]">Built for Scale</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
                        From application submission to final payment collection, manage every aspect of your vehicle financing operations
                        with a single, powerful platform designed for enterprise reliability and scalability.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className={`group p-10 rounded-3xl bg-gradient-to-br from-[#74bc1f]/5 via-white to-white border-2 border-[#74bc1f]/10 hover:border-[#74bc1f]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#74bc1f]/10 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative w-16 h-16 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <Workflow className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Automated Workflow Engine</h3>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                            Multi-stage approval workflows that route applications automatically through Sales, Sales Manager,
                            and Credit Department with configurable rules and real-time notifications.
                        </p>
                        <ul className="space-y-3">
                            {["Role-based access control", "Customizable approval matrices", "Real-time status tracking", "Complete audit trail for compliance"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 group/item">
                                    <CheckCircle2 className="w-5 h-5 text-[#74bc1f] flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className={`group p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            <div className="relative w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                                <Database className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Unified Data Platform</h3>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                            Centralized database for customers, vehicles, accounts, and documents with powerful search,
                            filtering, and comprehensive reporting capabilities.
                        </p>
                        <ul className="space-y-3">
                            {["360° customer view", "Vehicle inventory management", "Document management system", "Advanced analytics & reporting"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 group/item">
                                    <CheckCircle2 className="w-5 h-5 text-[#74bc1f] flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Features = () => {
    const features = [
        {
            title: "Credit Application Management",
            desc: "Streamline the entire application lifecycle from customer submission through multi-stage approvals. Support for both staff-initiated and customer portal applications.",
            icon: FileText,
            gradient: "from-[#74bc1f] to-[#5da612]"
        },
        {
            title: "Payment & Schedule Management",
            desc: "Automated payment schedule generation with flexible installment types. Track PDCs, guarantee cheques, and payment history with comprehensive reporting.",
            icon: Calendar,
            gradient: "from-blue-500 to-blue-600"
        },
        {
            title: "Account Lifecycle Tracking",
            desc: "Complete account management from opening to closure. Handle reschedules, early settlements, and vehicle returns with automated calculations.",
            icon: CreditCard,
            gradient: "from-purple-500 to-purple-600"
        },
        {
            title: "Document Management",
            desc: "Secure document upload, verification, and template system. Support for multiple document types with version control and automated generation.",
            icon: FileCheck,
            gradient: "from-orange-500 to-orange-600"
        },
        {
            title: "Contract Management",
            desc: "Digital contract creation, signing, and management. Track signatures from both customers and sales representatives with full audit trails.",
            icon: ShieldCheck,
            gradient: "from-teal-500 to-teal-600"
        },
        {
            title: "Analytics & Reporting",
            desc: "Comprehensive dashboards and reports for applications, accounts, collections, and customer history. Real-time statistics for data-driven decisions.",
            icon: BarChart3,
            gradient: "from-red-500 to-red-600"
        }
    ];

    return (
        <section id="features" className="py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#74bc1f]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#74bc1f]/10 via-[#74bc1f]/5 to-[#74bc1f]/10 text-[#5da612] text-xs font-bold uppercase tracking-wider mb-8 border border-[#74bc1f]/20 backdrop-blur-sm shadow-lg">
                        <Sparkles className="w-3.5 h-3.5" />
                        Key Features
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                        Everything You Need to Run
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74bc1f] to-[#5da612]">Modern Credit Operations</span>
                    </h2>
                    <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                        Modular architecture allowing you to deploy the full suite or integrate specific modules
                        into your existing infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, i) => {
                        const { ref, isVisible } = useScrollAnimation();
                        return (
                            <div
                                key={i}
                                ref={ref}
                                className={`group p-8 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-[#74bc1f]/30 hover:shadow-2xl hover:shadow-[#74bc1f]/10 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="relative mb-6">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                                    <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const WhyChooseUs = () => {
    const benefits = [
        {
            title: "Enterprise Security",
            desc: "Bank-grade security with role-based access control, complete audit trails, and compliance-ready architecture.",
            icon: Lock,
            stat: "99.99%",
            label: "Uptime SLA"
        },
        {
            title: "Scalable Architecture",
            desc: "Built to handle thousands of applications and accounts with PostgreSQL and optimized API endpoints.",
            icon: TrendingUp,
            stat: "10K+",
            label: "Concurrent Users"
        },
        {
            title: "Fast Implementation",
            desc: "Get up and running in weeks, not months. Comprehensive APIs and documentation for rapid integration.",
            icon: Clock,
            stat: "< 4 weeks",
            label: "Time to Launch"
        },
        {
            title: "Compliance Ready",
            desc: "Built-in audit trails, document verification workflows, and reporting for regulatory compliance.",
            icon: ShieldCheck,
            stat: "100%",
            label: "Compliant"
        }
    ];

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#74bc1f]/10 via-[#74bc1f]/5 to-[#74bc1f]/10 text-[#5da612] text-xs font-bold uppercase tracking-wider mb-8 border border-[#74bc1f]/20 backdrop-blur-sm shadow-lg">
                        <Award className="w-3.5 h-3.5" />
                        Why Choose Us
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                        Why Choose CreditHub?
                    </h2>
                    <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                        Built by finance professionals for finance professionals. Every feature designed with
                        real-world credit management workflows in mind.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit, i) => {
                        const { ref, isVisible } = useScrollAnimation();
                        return (
                            <div
                                key={i}
                                ref={ref}
                                className={`group p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-[#74bc1f]/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${i * 150}ms` }}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#74bc1f] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                        <div className="relative w-16 h-16 bg-[#74bc1f]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#74bc1f] transition-colors duration-300">
                                            <benefit.icon className="w-8 h-8 text-[#74bc1f] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#74bc1f] to-[#5da612]">
                                            {benefit.stat}
                                        </p>
                                        <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">{benefit.label}</p>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">{benefit.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const HowItWorks = () => {
    const steps = [
        {
            step: "01",
            title: "Application Submission",
            desc: "Customers or sales staff create credit applications with vehicle and customer details. System automatically routes to appropriate workflow stage.",
            icon: FileText
        },
        {
            step: "02",
            title: "Multi-Stage Approval",
            desc: "Applications flow through Sales Manager review, then Credit Department decision. Configurable approval matrices ensure proper authorization.",
            icon: CheckCircle2
        },
        {
            step: "03",
            title: "Account Creation",
            desc: "Upon approval, system automatically creates account, generates payment schedule, and prepares contract documents with all terms.",
            icon: CreditCard
        },
        {
            step: "04",
            title: "Ongoing Management",
            desc: "Track payments, manage PDCs, handle reschedules or early settlements, and maintain complete customer and account history.",
            icon: BarChart3
        }
    ];

    return (
        <section id="solutions" className="py-32 bg-gradient-to-b from-slate-50/50 via-white to-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#74bc1f]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#74bc1f]/10 via-[#74bc1f]/5 to-[#74bc1f]/10 text-[#5da612] text-xs font-bold uppercase tracking-wider mb-8 border border-[#74bc1f]/20 backdrop-blur-sm shadow-lg">
                        <Gauge className="w-3.5 h-3.5" />
                        How It Works
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                        Simple, Streamlined Process
                    </h2>
                    <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                        From first application to final payment, see how CreditHub streamlines your entire credit management process.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-24 left-0 w-full h-1 bg-gradient-to-r from-[#74bc1f] via-[#74bc1f]/50 to-[#74bc1f] -z-10"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((s, i) => {
                            const { ref, isVisible } = useScrollAnimation();
                            return (
                                <div 
                                    key={i} 
                                    ref={ref}
                                    className={`relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border-2 border-slate-200 shadow-xl hover:shadow-2xl hover:border-[#74bc1f]/30 transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                    style={{ transitionDelay: `${i * 150}ms` }}
                                >
                                    <div className="relative mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                        <div className="relative w-24 h-24 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-3xl flex items-center justify-center text-3xl font-extrabold text-white mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                            {s.step}
                                        </div>
                                    </div>
                                    <div className="w-14 h-14 bg-[#74bc1f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#74bc1f] transition-colors duration-300">
                                        <s.icon className="w-7 h-7 text-[#74bc1f] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{s.title}</h3>
                                    <p className="text-slate-600 text-center leading-relaxed">{s.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Industries = () => {
    const industries = [
        { name: "Automotive Dealers", icon: Car, desc: "Manage vehicle financing for your dealership" },
        { name: "Banks & NBFCs", icon: Building2, desc: "Enterprise-grade credit management for financial institutions" },
        { name: "FinTech Startups", icon: Zap, desc: "Scalable platform for modern lending operations" },
        { name: "Fleet Management", icon: Users, desc: "Specialized solutions for fleet financing" }
    ];

    return (
        <section id="resources" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#74bc1f]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#74bc1f]/20 text-[#74bc1f] text-xs font-bold uppercase tracking-wider mb-8 border border-[#74bc1f]/30 backdrop-blur-sm shadow-lg">
                        <Globe2 className="w-3.5 h-3.5" />
                        Industries
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                        Solutions for Every Sector
                    </h2>
                    <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed font-light">
                        Whether you're a small dealership or a large financial institution, CreditHub scales to meet your needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {industries.map((industry, i) => {
                        const { ref, isVisible } = useScrollAnimation();
                        return (
                            <div
                                key={i}
                                ref={ref}
                                className={`group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-xl border-2 border-slate-700 hover:border-[#74bc1f] hover:bg-slate-800/70 transition-all duration-500 hover:shadow-2xl hover:shadow-[#74bc1f]/20 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-[#74bc1f] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="relative w-14 h-14 bg-[#74bc1f]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#74bc1f] transition-colors duration-300">
                                        <industry.icon className="w-7 h-7 text-[#74bc1f] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                                <p className="text-sm text-slate-400">{industry.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const CTA = () => {
    return (
        <section id="contact" className="py-32 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#74bc1f]/5 via-transparent to-blue-500/5"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="bg-gradient-to-br from-[#74bc1f] via-[#5da612] to-[#4a8a0f] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    {/* Geometric Shapes */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-900 opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-5 rounded-full blur-3xl"></div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-tight">
                            Ready to Transform Your
                            <br />
                            Credit Management?
                        </h2>
                        <p className="text-xl lg:text-2xl text-white/90 mb-12 font-light leading-relaxed">
                            Join leading automotive finance companies who trust CreditHub to power their operations.
                            Start your 14-day free trial today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Link
                                href="#contact"
                                className="group relative px-10 py-5 bg-white text-[#74bc1f] font-bold text-lg rounded-2xl hover:bg-slate-50 transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Schedule a Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                            <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                Contact Sales
                            </button>
                        </div>
                        <p className="text-white/80 text-sm font-medium">
                            No credit card required • 14-day free trial • Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-xl blur-lg opacity-50"></div>
                                <div className="relative w-12 h-12 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-xl flex items-center justify-center shadow-xl">
                                    <CreditCard className="text-white w-7 h-7" />
                                </div>
                            </div>
                            <div>
                                <span className="text-2xl font-extrabold block">CreditHub</span>
                                <span className="text-xs text-slate-400 uppercase tracking-wider">Enterprise Platform</span>
                            </div>
                        </div>
                        <p className="text-slate-400 max-w-md mb-6 leading-relaxed">
                            Enterprise-grade credit management platform for vehicle financing. Streamline operations,
                            ensure compliance, and scale your business with confidence.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Linkedin, href: "#" },
                                { icon: Twitter, href: "#" },
                                { icon: Facebook, href: "#" },
                                { icon: Youtube, href: "#" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-11 h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#74bc1f] transition-all duration-300 group hover:scale-110"
                                >
                                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Platform</h4>
                        <ul className="space-y-3 text-slate-400">
                            {["Features", "Solutions", "How It Works", "Industries"].map((item, i) => (
                                <li key={i}>
                                    <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#74bc1f] transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-3 text-slate-400">
                            {["About Us", "Careers", "Blog", "Contact"].map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="hover:text-[#74bc1f] transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Legal</h4>
                        <ul className="space-y-3 text-slate-400">
                            {["Privacy Policy", "Terms of Service", "Security", "Compliance"].map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="hover:text-[#74bc1f] transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        © 2024 CreditHub. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8 text-sm text-slate-400">
                        <div className="flex items-center gap-2 hover:text-[#74bc1f] transition-colors cursor-pointer">
                            <Mail className="w-4 h-4" />
                            <span>support@credithub.com</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-[#74bc1f] transition-colors cursor-pointer">
                            <Phone className="w-4 h-4" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main Page Composition ---

export default function Home() {
    return (
        <div id="__next" className="min-h-screen w-full">
            <main className="min-h-screen w-full font-sans antialiased bg-white text-slate-900">
                <Navbar />
                <Hero />
                <SocialProof />
                <PlatformOverview />
                <Features />
                <WhyChooseUs />
                <HowItWorks />
                <Industries />
                <CTA />
                <Footer />
            </main>
        </div>
    );
}
