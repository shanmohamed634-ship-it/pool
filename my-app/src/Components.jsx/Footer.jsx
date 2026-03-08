export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Main Footer */}
      <div style={{ backgroundColor: '#1a2634', color: '#fff', padding: '60px 0 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            
            {/* Brand Section */}
            <div>
              <div style={{ marginBottom: '20px' }}>
                <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#fff' }}>
                 Kpm  Po
                  <span style={{ color: '#00bcd4' }}>o</span>
                  ls
                </span>
              </div>
              <p style={{ color: '#8a9ba8', fontSize: '15px', lineHeight: '1.7', marginBottom: '25px' }}>
                Feugiat a ligula rutrum luctus primis ultrice nteger congue magna at pretium purus a pretium ligula rutrum and luctus
              </p>
              
              {/* Social Info */}
              <div>
                <h5 style={{ 
                  fontSize: '18px', 
                  fontWeight: '600', 
                  marginBottom: '20px',
                  paddingLeft: '15px',
                  borderLeft: '3px solid #00bcd4'
                }}>
                  Social Info
                </h5>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {['f', '𝕏', 'v', '📷'].map((icon, i) => (
                    <a
                      key={i}
                      href="#"
                      style={{
                        width: '45px',
                        height: '45px',
                        border: '1px solid #3a4a5a',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#8a9ba8',
                        textDecoration: 'none',
                        fontSize: '16px',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#00bcd4';
                        e.target.style.borderColor = '#00bcd4';
                        e.target.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = '#3a4a5a';
                        e.target.style.color = '#8a9ba8';
                      }}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h5 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                marginBottom: '25px',
                paddingLeft: '15px',
                borderLeft: '3px solid #00bcd4'
              }}>
               Services
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Pools works', 'Ponds works', 'cements works', ].map((item) => (
                  <li key={item} style={{ marginBottom: '12px' }}>
                    <a
                      href="#"
                      style={{
                        color: '#8a9ba8',
                        textDecoration: 'none',
                        fontSize: '15px',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#00bcd4'}
                      onMouseLeave={(e) => e.target.style.color = '#8a9ba8'}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h5 style={{ 
                fontSize: '20px', 
                fontWeight: '600', 
                marginBottom: '25px',
                paddingLeft: '15px',
                borderLeft: '3px solid #00bcd4'
              }}>
                Get In Touch
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '15px', color: '#8a9ba8', fontSize: '15px' }}>
                  MALAPPURAM, West Kodur- Kodur (PO)- 676504
                </li>
                <li style={{ marginBottom: '15px', color: '#8a9ba8', fontSize: '15px' }}>
                +91 7736 800 752 | +91 7356 006 542

                </li>
                <li style={{ marginBottom: '15px' }}>
                 
                </li>
                <li style={{ color: '#8a9ba8', fontSize: '15px' }}>
                poolskpm@gmail.com

                </li>
              </ul>
            </div>
          </div>

          {/* Scroll to top button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '30px' }}>
            <button
              onClick={scrollToTop}
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                border: '2px solid #00bcd4',
                backgroundColor: 'transparent',
                color: '#00bcd4',
                cursor: 'pointer',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#00bcd4';
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#00bcd4';
              }}
            >
              ↑
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: '#141d26', padding: '20px 0' }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 15px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '15px'
        }}>
          <p style={{ color: '#8a9ba8', fontSize: '14px', margin: 0 }}>
            © 2023 - 2025 | All rights reserved by{' '}
            <a href="#" style={{ color: '#00bcd4', textDecoration: 'none' }}>Tech-Time</a>
          </p>
          <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
            {['Terms', 'Privacy', 'License', 'Privacy Policy'].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: '#8a9ba8',
                  textDecoration: 'none',
                  fontSize: '14px',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.color = '#00bcd4'}
                onMouseLeave={(e) => e.target.style.color = '#8a9ba8'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}