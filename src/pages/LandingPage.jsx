import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  Play, Shield, TrendingUp, Zap, Heart, 
  ArrowRight, CheckCircle, Users, DollarSign, BarChart3,
  Sparkles, Globe, Rocket
} from "lucide-react";
import "../styles/aura-design.css";

export default function LandingPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        backgroundColor: '#000',
        padding: '120px 40px',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
            color: '#FFD700',
            padding: '8px 16px',
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            borderRadius: '8px'
          }}>
            <Shield size={18} style={{ color: '#FFD700' }} />
            <span style={{ fontSize: '14px', fontWeight: 500 }}>2026 The world's Best AI e-commerce platform</span>
          </div>
          
          <h1 style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-2px'
          }}>
            Build your e-commerce store in seconds.
          </h1>
          
          <p style={{
            fontSize: '20px',
            color: '#ccc',
            lineHeight: 1.6,
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Creating an online store should be easy. It's time to say goodbye to complex website builders & development teams that don't work for you.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'center', marginBottom: '60px' }}>
            <button
              onClick={handleGetStarted}
              style={{
                backgroundColor: '#32CD32',
                color: '#000',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(50, 205, 50, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Build Now
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => navigate('/generate')}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2a2a2a';
                e.currentTarget.style.borderColor = '#32CD32';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a';
                e.currentTarget.style.borderColor = '#333';
              }}
            >
              <Play size={24} fill="#fff" />
            </button>
          </div>

          {/* User Count */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '12px 24px',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            maxWidth: '300px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', gap: '-8px' }}>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: ['#FF6B9D', '#6C5CE7', '#32CD32'][i - 1],
                    border: '2px solid #000',
                    marginLeft: i > 1 ? '-8px' : '0'
                  }}
                />
              ))}
            </div>
            <div>
              <div style={{ color: '#fff', fontSize: '18px', fontWeight: 600 }}>12 M</div>
              <div style={{ color: '#ccc', fontSize: '12px' }}>Stores created worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        backgroundColor: '#fff',
        padding: '120px 40px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          fontSize: '200px',
          fontWeight: 700,
          color: '#f5f5f5',
          lineHeight: 1,
          zIndex: 0
        }}>01</div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '16px', color: '#666', fontSize: '14px', fontWeight: 500 }}>Features</div>
          <h2 style={{
            fontSize: '56px',
            fontWeight: 700,
            color: '#000',
            marginBottom: '24px',
            lineHeight: 1.1
          }}>
            Best features provided by WebLake.
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '40px',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            WebLake is more than just a website builder. Our AI-powered platform is designed by industry veterans to help you create professional e-commerce stores. It will save you time, money, and the hassle of complex development.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '60px' }}>
            <button
              onClick={handleGetStarted}
              style={{
                backgroundColor: '#000',
                color: '#fff',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#000';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get Started
            </button>
            <Link
              to="/features"
              style={{
                color: '#000',
                textDecoration: 'none',
                padding: '14px 28px',
                fontSize: '16px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px'
          }}>
            {/* AI-Powered */}
            <div 
              style={{
                backgroundColor: hoveredCard === 'ai' ? '#000' : '#fff',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid #e5e5e5',
                boxShadow: hoveredCard === 'ai' ? '0 8px 30px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s',
                cursor: 'pointer',
                transform: hoveredCard === 'ai' ? 'translateY(-4px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredCard('ai')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Sparkles size={48} style={{ color: '#6C5CE7', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px', color: hoveredCard === 'ai' ? '#fff' : '#000', transition: 'color 0.3s' }}>AI-Powered</h3>
              <p style={{ color: hoveredCard === 'ai' ? '#ccc' : '#666', fontSize: '16px', lineHeight: 1.6, transition: 'color 0.3s' }}>Generate complete stores with AI in seconds</p>
            </div>

            {/* Analytics */}
            <div 
              style={{
                backgroundColor: hoveredCard === 'analytics' ? '#000' : '#fff',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid #e5e5e5',
                boxShadow: hoveredCard === 'analytics' ? '0 8px 30px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s',
                cursor: 'pointer',
                transform: hoveredCard === 'analytics' ? 'translateY(-4px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredCard('analytics')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <TrendingUp size={48} style={{ color: '#FF6B9D', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px', color: hoveredCard === 'analytics' ? '#fff' : '#000', transition: 'color 0.3s' }}>Analytics</h3>
              <p style={{ color: hoveredCard === 'analytics' ? '#ccc' : '#666', fontSize: '16px', lineHeight: 1.6, transition: 'color 0.3s' }}>Track all your sales and customer data</p>
            </div>

            {/* Customizable */}
            <div 
              style={{
                backgroundColor: hoveredCard === 'customizable' ? '#000' : '#fff',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid #e5e5e5',
                boxShadow: hoveredCard === 'customizable' ? '0 8px 30px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s',
                cursor: 'pointer',
                transform: hoveredCard === 'customizable' ? 'translateY(-4px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredCard('customizable')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Zap size={48} style={{ color: '#32CD32', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px', color: hoveredCard === 'customizable' ? '#fff' : '#000', transition: 'color 0.3s' }}>Customizable</h3>
              <p style={{ color: hoveredCard === 'customizable' ? '#ccc' : '#666', fontSize: '16px', lineHeight: 1.6, transition: 'color 0.3s' }}>Fully customizable design and features</p>
            </div>

            {/* Payment Ready */}
            <div 
              style={{
                backgroundColor: hoveredCard === 'payment' ? '#000' : '#fff',
                padding: '40px',
                borderRadius: '16px',
                border: '1px solid #e5e5e5',
                boxShadow: hoveredCard === 'payment' ? '0 8px 30px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.05)',
                transition: 'all 0.3s',
                cursor: 'pointer',
                transform: hoveredCard === 'payment' ? 'translateY(-4px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredCard('payment')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Heart size={48} style={{ color: '#FF6B9D', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px', color: hoveredCard === 'payment' ? '#fff' : '#000', transition: 'color 0.3s' }}>Payment Ready</h3>
              <p style={{ color: hoveredCard === 'payment' ? '#ccc' : '#666', fontSize: '16px', lineHeight: 1.6, transition: 'color 0.3s' }}>Integrated payment gateways ready to use</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" style={{
        backgroundColor: '#fff',
        padding: '120px 40px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          fontSize: '200px',
          fontWeight: 700,
          color: '#f5f5f5',
          lineHeight: 1,
          zIndex: 0
        }}>02</div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '16px', color: '#666', fontSize: '14px', fontWeight: 500 }}>About Us</div>
          <h2 style={{
            fontSize: '56px',
            fontWeight: 700,
            color: '#000',
            marginBottom: '24px',
            lineHeight: 1.1
          }}>
            Get to know more about WebLake.
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '60px',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            We are a customer-focused AI platform that provides complete e-commerce solutions to help you build, manage, and grow your online store.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '40px',
            maxWidth: '800px'
          }}>
            <div>
              <div style={{ fontSize: '64px', fontWeight: 700, color: '#000', marginBottom: '12px' }}>243K</div>
              <p style={{ color: '#666', fontSize: '16px' }}>Stores created by users from all over the globe</p>
            </div>
            <div>
              <div style={{ fontSize: '64px', fontWeight: 700, color: '#000', marginBottom: '12px' }}>267%</div>
              <p style={{ color: '#666', fontSize: '16px' }}>Average growth rate of stores using WebLake</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Future Section */}
      <section style={{
        backgroundColor: '#000',
        padding: '120px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          fontSize: '200px',
          fontWeight: 700,
          color: 'rgba(255, 255, 255, 0.05)',
          lineHeight: 1,
          zIndex: 0
        }}>03</div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '40px',
            lineHeight: 1.1
          }}>
            Start building your e-commerce store today with WebLake.
          </h2>
          <button
            onClick={handleGetStarted}
            style={{
              backgroundColor: '#32CD32',
              color: '#000',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(50, 205, 50, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Build Your Store Now
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Partners Section */}
      <section style={{
        backgroundColor: '#fff',
        padding: '120px 40px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          fontSize: '200px',
          fontWeight: 700,
          color: '#f5f5f5',
          lineHeight: 1,
          zIndex: 0
        }}>04</div>
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '16px', color: '#666', fontSize: '14px', fontWeight: 500 }}>Partners</div>
          <h2 style={{
            fontSize: '56px',
            fontWeight: 700,
            color: '#000',
            marginBottom: '24px',
            lineHeight: 1.1
          }}>
            Meet most WebLake trusted partners.
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '60px',
            maxWidth: '600px',
            lineHeight: 1.6
          }}>
            WebLake integrates seamlessly with leading payment gateways, hosting providers, and delivery services. Connect your preferred services to power your store.
          </p>

          {/* Payment Gateways */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#000', marginBottom: '24px' }}>Payment Gateways</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}>
              {[
                { name: 'Stripe', url: 'https://stripe.com', logo: '💳', color: '#635BFF' },
                { name: 'PayPal', url: 'https://paypal.com', logo: '🌐', color: '#0070BA' },
                { name: 'Square', url: 'https://squareup.com', logo: '⬜', color: '#006AFF' },
                { name: 'Razorpay', url: 'https://razorpay.com', logo: '🇮🇳', color: '#0C2451' },
                { name: 'Google Pay', url: 'https://pay.google.com', logo: 'G', color: '#4285F4' },
                { name: 'Apple Pay', url: 'https://apple.com/apple-pay', logo: '🍎', color: '#000' }
              ].map((partner, i) => (
                <a
                  key={i}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '32px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid #e5e5e5',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#666',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.borderColor = '#32CD32';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f9f9f9';
                    e.currentTarget.style.borderColor = '#e5e5e5';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ fontSize: '32px' }}>{partner.logo}</div>
                  <div>{partner.name}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Delivery Providers */}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#000', marginBottom: '24px' }}>Delivery Providers</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}>
              {[
                { name: 'FedEx', url: 'https://fedex.com', logo: '🚚', color: '#4D148C' },
                { name: 'UPS', url: 'https://ups.com', logo: '📦', color: '#7B2009' },
                { name: 'DHL', url: 'https://dhl.com', logo: '✈️', color: '#FFCC00' },
                { name: 'USPS', url: 'https://usps.com', logo: '📮', color: '#004B87' },
                { name: 'ShipStation', url: 'https://shipstation.com', logo: '🚢', color: '#0066CC' },
                { name: 'Shippo', url: 'https://goshippo.com', logo: '📬', color: '#00A8E8' }
              ].map((partner, i) => (
                <a
                  key={i}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#f9f9f9',
                    padding: '32px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    border: '1px solid #e5e5e5',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#666',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.borderColor = partner.color || '#32CD32';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 8px 20px ${partner.color || '#32CD32'}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#f9f9f9';
                    e.currentTarget.style.borderColor = '#e5e5e5';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ 
                    fontSize: '32px',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    border: `2px solid ${partner.color || '#e5e5e5'}`,
                    color: partner.color || '#666'
                  }}>{partner.logo}</div>
                  <div style={{ fontWeight: 600 }}>{partner.name}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{
        backgroundColor: '#fff',
        padding: '120px 40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          fontSize: '200px',
          fontWeight: 700,
          color: '#f5f5f5',
          lineHeight: 1,
          zIndex: 0
        }}>05</div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '80px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ marginBottom: '16px', color: '#666', fontSize: '14px', fontWeight: 500 }}>Strategy</div>
            <h2 style={{
              fontSize: '56px',
              fontWeight: 700,
              color: '#000',
              marginBottom: '24px',
              lineHeight: 1.1
            }}>
              Let's learn how WebLake works.
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '40px',
              lineHeight: 1.6
            }}>
              Your journey is seamless, fast and secure. Simply describe your store idea, and our AI generates a complete e-commerce website in seconds. No coding required.
            </p>
            <p style={{
              fontSize: '14px',
              color: '#999',
              marginTop: '40px'
            }}>
              We are WebLake, AI-powered e-commerce platform builder.
            </p>
          </div>
          
          <div style={{ flex: 1, position: 'relative', textAlign: 'center' }}>
            <div style={{
              fontSize: '120px',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #FF6B9D, #6C5CE7, #32CD32)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              position: 'relative'
            }}>
              WebLake
            </div>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '2px solid rgba(255, 107, 157, 0.2)',
              animation: 'pulse 2s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#000',
        padding: '80px 40px 40px',
        color: '#fff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            marginBottom: '40px'
          }}>
            Start building your online store with WebLake.
          </h2>
          <button
            onClick={handleGetStarted}
            style={{
              backgroundColor: '#32CD32',
              color: '#000',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(50, 205, 50, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Create Your Store Now
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ fontSize: '24px', fontWeight: 600 }}>WebLake</div>
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            <Link to="/terms" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>Terms & Agreements</Link>
            <Link to="/privacy" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</Link>
          </div>
          <div style={{ color: '#999', fontSize: '14px' }}>©2026 WebLake All Rights Reserved</div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
          }
        }
        
        @media (max-width: 1024px) {
          section {
            padding: 80px 24px !important;
          }
          
          h1, h2 {
            font-size: 48px !important;
          }
          
          .grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 36px !important;
          }
          
          h2 {
            font-size: 32px !important;
          }
          
          footer > div:first-child {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
