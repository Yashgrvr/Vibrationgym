import React, { useState } from 'react';

const mediaItems = [
  { 
    type: 'image', 
    src: '/media/training.jpg', 
    alt: 'General Training Area',
    description: 'Spacious multi-purpose area perfect for functional fitness and group workouts'
  },
  { 
    type: 'image', 
    src: '/media/dead.jpg', 
    alt: 'Deadlift Training Area',
    description: 'Professional Olympic barbell setup with safety platform for serious strength training'
  },
  { 
    type: 'image', 
    src: '/media/dumbellarea.jpg', 
    alt: 'Dumbbell Training Section',
    description: 'Complete range of dumbbells with adjustable benches and mirror setup'
  },
  { 
    type: 'image', 
    src: '/media/cardio.jpg', 
    alt: 'Cardio Zone',
    description: 'Modern cardio equipment including treadmills, bikes and elliptical machines'
  },
  { 
    type: 'image', 
    src: '/media/legs.webp', 
    alt: 'Leg Training Area',
    description: 'Specialized leg training equipment for building lower body strength'
  },
  { 
    type: 'image', 
    src: '/media/zumba.jpg', 
    alt: 'Zumba & Dance Studio',
    description: 'Spacious dance floor with mirrors and sound system for Zumba classes'
  },
];

export default function Media() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [imageLoaded, setImageLoaded] = useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section 
      id="media"
      style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Golden Pattern Background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        zIndex: 0
      }} />

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Golden Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '4rem' 
        }}>
          {/* Golden Badge */}
          <div style={{
            display: 'inline-block',
            padding: '0.8rem 2rem',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            borderRadius: '50px',
            marginBottom: '2rem',
            boxShadow: '0 8px 25px rgba(255, 215, 0, 0.3)'
          }}>
            <span style={{
              color: '#000',
              fontSize: '0.9rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              VibRation Gallery
            </span>
          </div>

          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            textShadow: '0 4px 8px rgba(0,0,0,0.3)'
          }}>
            Our Gym Facilities
          </h2>
          
          <p style={{
            fontSize: '1.2rem',
            color: '#cccccc',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Explore our complete range of training areas and modern fitness equipment
          </p>
        </div>

        {/* Premium Grid Layout - 6 Photos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {mediaItems.map((item, i) => (
            <div
              key={i}
              onClick={() => { setCurrent(item); setOpen(true); }}
              style={{
                position: 'relative',
                cursor: 'pointer',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'linear-gradient(145deg, #1a1a1a, #000000)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,215,0,0.1)',
                border: '2px solid transparent',
                backgroundClip: 'padding-box',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0) scale(1)',
                minHeight: '420px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(255,215,0,0.2)';
                e.currentTarget.style.borderImage = 'linear-gradient(135deg, #FFD700, #FFA500) 1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,215,0,0.1)';
                e.currentTarget.style.borderImage = 'none';
              }}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                height: '280px',
                overflow: 'hidden',
                borderRadius: '18px 18px 0 0'
              }}>
                {/* Loading State */}
                {!imageLoaded[i] && !imageErrors[i] && (
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(45deg, #1a1a1a, #000000)',
                    color: '#FFD700'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      border: '4px solid #FFD700',
                      borderTop: '4px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                  </div>
                )}

                {/* Error State */}
                {imageErrors[i] && (
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(45deg, #1a1a1a, #000000)',
                    color: '#FFD700',
                    border: '2px dashed #FFD700'
                  }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏋️‍♂️</div>
                    <div style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                      Coming Soon
                    </div>
                    <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                      {item.src}
                    </div>
                  </div>
                )}

                {/* Actual Image */}
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    display: imageErrors[i] ? 'none' : 'block',
                    filter: 'brightness(0.9) contrast(1.1)'
                  }}
                  onLoad={() => handleImageLoad(i)}
                  onError={() => handleImageError(i)}
                  onMouseEnter={(e) => {
                    if (imageLoaded[i]) {
                      e.target.style.transform = 'scale(1.08)';
                      e.target.style.filter = 'brightness(1) contrast(1.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.filter = 'brightness(0.9) contrast(1.1)';
                  }}
                />

                {/* Golden Overlay */}
                {imageLoaded[i] && (
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,165,0,0.2))',
                    opacity: 0,
                    transition: 'opacity 0.4s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0'}
                  />
                )}

                {/* Corner Accent */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)',
                  opacity: imageLoaded[i] ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}>
                  <span style={{ color: '#000', fontSize: '1.2rem' }}>⭐</span>
                </div>
              </div>

              {/* Title & Description Section */}
              <div style={{
                padding: '2rem',
                textAlign: 'center',
                background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
                position: 'relative'
              }}>
                {/* Golden Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                  borderRadius: '2px'
                }} />

                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: '#FFD700',
                  margin: '0 0 1rem 0',
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  letterSpacing: '1px'
                }}>
                  {item.alt}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.95rem',
                  color: '#cccccc',
                  lineHeight: '1.6',
                  margin: '0',
                  opacity: 0.9
                }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {open && current && (
          <div 
            onClick={() => setOpen(false)}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(135deg, rgba(0,0,0,0.95), rgba(26,26,26,0.95))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '20px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{ 
                position: 'relative',
                maxWidth: '95vw',
                maxHeight: '95vh',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 80px rgba(0,0,0,0.8), 0 0 40px rgba(255,215,0,0.1)',
                border: '2px solid #FFD700'
              }}
            >
              <img 
                src={current.src} 
                alt={current.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '90vh',
                  display: 'block',
                  borderRadius: '18px'
                }}
              />

              {/* Golden Close Button */}
              <button
                onClick={() => setOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                  color: '#000',
                  border: 'none',
                  borderRadius: '50%',
                  fontSize: '28px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #FFA500, #FFD700)';
                  e.target.style.transform = 'scale(1.1) rotate(90deg)';
                  e.target.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .media-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}