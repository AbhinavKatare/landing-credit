"use client";

import React, { useState, useEffect } from "react";
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
    BookOpen
} from "lucide-react";

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? "bg-white shadow-lg py-3 border-b border-slate-100" 
                    : "bg-white/95 backdrop-blur-md py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-11 h-11 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-xl flex items-center justify-center shadow-lg shadow-[#74bc1f]/20 group-hover:scale-105 transition-transform">
                            <CreditCard className="text-white w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-2xl font-bold tracking-tight text-slate-900 block leading-tight">
                                Credit<span className="text-[#74bc1f]">Hub</span>
                            </span>
                            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
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
                                className="text-sm font-semibold text-slate-700 hover:text-[#74bc1f] transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#74bc1f] group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link 
                            href="/login" 
                            className="text-sm font-semibold text-slate-700 hover:text-[#74bc1f] transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="#contact"
                            className="bg-gradient-to-r from-[#74bc1f] to-[#5da612] hover:from-[#5da612] hover:to-[#4a8a0f] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-[#74bc1f]/25 hover:shadow-xl hover:shadow-[#74bc1f]/30 flex items-center gap-2"
                        >
                            Request Demo
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-slate-800 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl">
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
                                className="text-base font-semibold text-slate-800 hover:text-[#74bc1f] py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <div className="h-px bg-slate-100 my-2" />
                        <Link
                            href="/login"
                            className="text-base font-semibold text-slate-800 hover:text-[#74bc1f] py-2"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="#contact"
                            className="w-full bg-gradient-to-r from-[#74bc1f] to-[#5da612] text-white py-3 rounded-lg font-semibold text-center"
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
    return (
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-green-50/30">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#74bc1f]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#74bc1f]/10 text-[#5da612] text-xs font-bold uppercase tracking-wider mb-8 border border-[#74bc1f]/20 backdrop-blur-sm">
                        <Sparkles className="w-3 h-3" />
                        <span>Enterprise Credit Management Platform</span>
                    </div>
                    
                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                        Complete Vehicle Credit
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#74bc1f] via-[#5da612] to-[#74bc1f] bg-[length:200%_auto] animate-gradient">
                            Management System
                        </span>
                    </h1>
                    
                    {/* Subheadline */}
                    <p className="text-xl sm:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        Streamline your entire vehicle financing workflow from application to collection.
                        <br className="hidden sm:block" />
                        Built for automotive dealers, banks, and fintech companies.
                    </p>
                    
                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            href="#contact"
                            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#74bc1f] to-[#5da612] hover:from-[#5da612] hover:to-[#4a8a0f] text-white rounded-xl font-bold text-lg shadow-xl shadow-[#74bc1f]/30 hover:shadow-2xl hover:shadow-[#74bc1f]/40 transition-all flex items-center justify-center gap-2"
                        >
                            Start Free Trial
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 hover:border-slate-300 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-sm">
                            <Play className="w-5 h-5" />
                            Watch Demo
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#74bc1f]" />
                            <span className="font-medium">No Credit Card Required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#74bc1f]" />
                            <span className="font-medium">14-Day Free Trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#74bc1f]" />
                            <span className="font-medium">Enterprise Security</span>
                        </div>
                    </div>
                </div>

                {/* Dashboard Preview */}
                <div className="mt-20 relative mx-auto max-w-6xl">
                    <div className="relative">
                        {/* Main Dashboard */}
                        <div className="aspect-[16/10] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                            {/* Browser Chrome */}
                            <div className="h-14 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 flex items-center px-6 gap-2">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex-1 mx-4 bg-white border border-slate-200 rounded-lg px-4 py-2 text-xs text-slate-500 font-mono">
                                    app.credithub.com/dashboard
                                </div>
                            </div>
                            
                            {/* Dashboard Content */}
                            <div className="h-full p-8 bg-gradient-to-br from-slate-50 to-white grid grid-cols-12 gap-6">
                                {/* Sidebar */}
                                <div className="col-span-3 bg-white rounded-xl shadow-sm border border-slate-100 p-5 space-y-3">
                                    <div className="h-7 w-3/4 bg-slate-100 rounded-lg"></div>
                                    <div className="h-4 w-1/2 bg-slate-100 rounded"></div>
                                    <div className="h-4 w-full bg-slate-100 rounded"></div>
                                    <div className="h-4 w-2/3 bg-slate-100 rounded"></div>
                                    <div className="h-32 w-full bg-gradient-to-br from-[#74bc1f]/10 to-slate-50 rounded-lg mt-6 border border-[#74bc1f]/10"></div>
                                </div>
                                
                                {/* Main Content */}
                                <div className="col-span-9 grid grid-cols-2 gap-6">
                                    <div className="col-span-2 h-72 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="h-6 w-48 bg-slate-100 rounded-lg"></div>
                                            <div className="h-9 w-32 bg-gradient-to-r from-[#74bc1f] to-[#5da612] rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg">
                                                Active Accounts
                                            </div>
                                        </div>
                                        <div className="h-52 w-full bg-gradient-to-br from-[#74bc1f]/5 via-slate-50 to-blue-50 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center">
                                            <div className="text-center">
                                                <LineChart className="w-16 h-16 text-[#74bc1f] mx-auto mb-3 opacity-30" />
                                                <p className="text-sm text-slate-400 font-medium">Analytics Dashboard</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-48 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                                        <div className="h-5 w-32 bg-slate-100 rounded mb-4"></div>
                                        <div className="h-32 w-full bg-slate-50 rounded-lg border border-slate-100"></div>
                                    </div>
                                    <div className="h-48 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                                        <div className="h-5 w-32 bg-slate-100 rounded mb-4"></div>
                                        <div className="h-32 w-full bg-slate-50 rounded-lg border border-slate-100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Floating Notification Card */}
                        <div className="absolute -bottom-6 -right-6 hidden lg:block bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-xs animate-bounce-slow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#74bc1f] to-[#5da612] flex items-center justify-center shadow-lg">
                                    <CheckCircle2 className="text-white w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Application Approved</p>
                                    <p className="text-2xl font-bold text-slate-900">QAR 125,000</p>
                                </div>
                            </div>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div className="bg-gradient-to-r from-[#74bc1f] to-[#5da612] w-3/4 h-full rounded-full"></div>
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
        <div className="bg-white border-y border-slate-100 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 text-center">
                    Trusted by leading automotive finance companies
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700 group">
                            <company.icon className="w-7 h-7 group-hover:text-[#74bc1f] transition-colors" />
                            <span className="text-lg font-bold group-hover:text-[#74bc1f] transition-colors">{company.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const PlatformOverview = () => {
    return (
        <section id="platform" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#74bc1f]/10 text-[#5da612] text-xs font-bold uppercase tracking-wider mb-6 border border-[#74bc1f]/20">
                        <Target className="w-3 h-3" />
                        Platform Overview
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Complete Credit Management
                        <br />
                        <span className="text-[#74bc1f]">Built for Scale</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
                        From application submission to final payment collection, manage every aspect of your vehicle financing operations
                        with a single, powerful platform designed for enterprise reliability and scalability.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="group p-10 rounded-3xl bg-gradient-to-br from-[#74bc1f]/5 via-white to-white border-2 border-[#74bc1f]/10 hover:border-[#74bc1f]/30 transition-all hover:shadow-2xl hover:shadow-[#74bc1f]/10">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                            <Workflow className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Automated Workflow Engine</h3>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                            Multi-stage approval workflows that route applications automatically through Sales, Sales Manager,
                            and Credit Department with configurable rules and real-time notifications.
                        </p>
                        <ul className="space-y-3">
                            {["Role-based access control", "Customizable approval matrices", "Real-time status tracking", "Complete audit trail for compliance"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-[#74bc1f] flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="group p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-slate-300 transition-all hover:shadow-2xl">
                        <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                            <Database className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Unified Data Platform</h3>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                            Centralized database for customers, vehicles, accounts, and documents with powerful search,
                            filtering, and comprehensive reporting capabilities.
                        </p>
                        <ul className="space-y-3">
                            {["360° customer view", "Vehicle inventory management", "Document management system", "Advanced analytics & reporting"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <CheckCircle2 className="w-5 h-5 text-[#74bc1f] flex-shrink-0" />
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
        <section id="features" className="py-32 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#74bc1f]/10 text-[#5da612] text-xs font-bold uppercase tracking-wider mb-6 border border-[#74bc1f]/20">
                        <Sparkles className="w-3 h-3" />
                        Key Features
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Everything You Need to Run
                        <br />
                        <span className="text-[#74bc1f]">Modern Credit Operations</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Modular architecture allowing you to deploy the full suite or integrate specific modules
                        into your existing infrastructure.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#74bc1f]/30 hover:shadow-2xl hover:shadow-[#74bc1f]/10 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
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
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#74bc1f]/10 text-[#5da612] text-xs font-bold uppercase tracking-wider mb-6 border border-[#74bc1f]/20">
                        <Award className="w-3 h-3" />
                        Why Choose Us
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Why Choose CreditHub?
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        Built by finance professionals for finance professionals. Every feature designed with
                        real-world credit management workflows in mind.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {benefits.map((benefit, i) => (
                        <div
                            key={i}
                            className="group p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white border-2 border-slate-200 hover:border-[#74bc1f]/30 transition-all hover:shadow-2xl"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-16 h-16 bg-[#74bc1f]/10 rounded-2xl flex items-center justify-center group-hover:bg-[#74bc1f] transition-colors">
                                    <benefit.icon className="w-8 h-8 text-[#74bc1f] group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-right">
                                    <p className="text-4xl font-extrabold text-[#74bc1f]">{benefit.stat}</p>
                                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold mt-1">{benefit.label}</p>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">{benefit.desc}</p>
                        </div>
                    ))}
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
        <section id="solutions" className="py-32 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#74bc1f]/10 text-[#5da612] text-xs font-bold uppercase tracking-wider mb-6 border border-[#74bc1f]/20">
                        <Gauge className="w-3 h-3" />
                        How It Works
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                        Simple, Streamlined Process
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        From first application to final payment, see how CreditHub streamlines your entire credit management process.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-[#74bc1f] via-[#74bc1f]/50 to-[#74bc1f] -z-10"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((s, i) => (
                            <div key={i} className="relative bg-white p-8 rounded-3xl border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:border-[#74bc1f]/30 transition-all group">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-3xl flex items-center justify-center text-3xl font-extrabold text-white mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                                    {s.step}
                                </div>
                                <div className="w-14 h-14 bg-[#74bc1f]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#74bc1f] transition-colors">
                                    <s.icon className="w-7 h-7 text-[#74bc1f] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{s.title}</h3>
                                <p className="text-slate-600 text-center leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
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
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#74bc1f]/20 text-[#74bc1f] text-xs font-bold uppercase tracking-wider mb-6 border border-[#74bc1f]/30">
                        <Globe2 className="w-3 h-3" />
                        Industries
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Solutions for Every Sector
                    </h2>
                    <p className="text-xl text-slate-300 leading-relaxed font-light">
                        Whether you're a small dealership or a large financial institution, CreditHub scales to meet your needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {industries.map((industry, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border-2 border-slate-700 hover:border-[#74bc1f] hover:bg-slate-800 transition-all hover:shadow-2xl hover:shadow-[#74bc1f]/20"
                        >
                            <div className="w-14 h-14 bg-[#74bc1f]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#74bc1f] transition-colors">
                                <industry.icon className="w-7 h-7 text-[#74bc1f] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                            <p className="text-sm text-slate-400">{industry.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTA = () => {
    return (
        <section id="contact" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-gradient-to-br from-[#74bc1f] via-[#5da612] to-[#4a8a0f] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                    {/* Geometric Shapes */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-900 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Ready to Transform Your
                            <br />
                            Credit Management?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 font-light leading-relaxed">
                            Join leading automotive finance companies who trust CreditHub to power their operations.
                            Start your 14-day free trial today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#contact"
                                className="px-10 py-5 bg-white text-[#74bc1f] font-bold text-lg rounded-xl hover:bg-slate-50 transition-all shadow-2xl flex items-center justify-center gap-2 group"
                            >
                                Schedule a Demo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 transition-all">
                                Contact Sales
                            </button>
                        </div>
                        <p className="text-white/80 text-sm mt-8 font-medium">
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
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#74bc1f] to-[#5da612] rounded-xl flex items-center justify-center shadow-lg">
                                <CreditCard className="text-white w-7 h-7" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold block">CreditHub</span>
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
                                    className="w-11 h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[#74bc1f] transition-all group"
                                >
                                    <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 text-lg">Platform</h4>
                        <ul className="space-y-3 text-slate-400">
                            {["Features", "Solutions", "How It Works", "Industries"].map((item, i) => (
                                <li key={i}>
                                    <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#74bc1f] transition-colors">
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
                                    <Link href="#" className="hover:text-[#74bc1f] transition-colors">
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
                                    <Link href="#" className="hover:text-[#74bc1f] transition-colors">
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
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>support@credithub.com</span>
                        </div>
                        <div className="flex items-center gap-2">
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
