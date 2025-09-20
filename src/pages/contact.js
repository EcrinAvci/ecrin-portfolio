import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    color: 'white',
    position: 'relative',
    overflow: 'hidden'
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    zIndex: 1
  },
  content: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
    minHeight: '100vh'
  },
  nav: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '1rem 0',
    zIndex: 1000,
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navBrand: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textDecoration: 'none'
  },
  navLinks: {
    display: 'flex',
    gap: '1rem'
  },
  navLink: {
    padding: '0.5rem 1rem',
    color: 'rgba(255, 255, 255, 0.8)',
    textDecoration: 'none',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
    fontSize: '0.95rem'
  },
  navLinkActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white'
  },
  main: {
    paddingTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  },
  hero: {
    textAlign: 'center',
    padding: '2rem 0'
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    opacity: 0.9,
    fontWeight: '300',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  contactCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
    textAlign: 'center'
  },
  contactCardHover: {
    transform: 'translateY(-5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)'
  },
  contactIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
    display: 'block'
  },
  contactTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  contactDescription: {
    fontSize: '1rem',
    opacity: 0.9,
    lineHeight: '1.5',
    marginBottom: '1.5rem'
  },
  contactLink: {
    display: 'inline-block',
    padding: '0.75rem 1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: '0.95rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.3)'
  },
  contactLinkHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-2px)'
  },
  formSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    maxWidth: '600px',
    margin: '0 auto'
  },
  formTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  label: {
    fontSize: '1rem',
    fontWeight: '600',
    opacity: 0.9
  },
  input: {
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontSize: '1rem',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease'
  },
  inputFocus: {
    borderColor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    outline: 'none'
  },
  textarea: {
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontSize: '1rem',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    minHeight: '120px',
    resize: 'vertical'
  },
  textareaFocus: {
    borderColor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    outline: 'none'
  },
  submitButton: {
    padding: '1rem 2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },
  submitButtonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
  },
  placeholder: {
    color: 'rgba(255, 255, 255, 0.6)'
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağım.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>İletişim | Ecrin Avcı</title>
        <meta name="description" content="Ecrin Avcı ile iletişime geçin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.container}>
        <div style={styles.backgroundPattern}></div>

        {/* Navigation */}
        <nav style={styles.nav}>
          <div style={styles.navContent}>
            <Link href="/" style={styles.navBrand}>
              Ecrin Avcı
            </Link>
            <div style={styles.navLinks}>
              <Link href="/" style={styles.navLink}>
                Ana Sayfa
              </Link>
              <Link href="/projects" style={styles.navLink}>
                Projeler
              </Link>
              <Link href="/about" style={styles.navLink}>
                Hakkımda
              </Link>
              <Link href="/contact" style={{...styles.navLink, ...styles.navLinkActive}}>
                İletişim
              </Link>
            </div>
          </div>
        </nav>

        <div style={styles.content}>
          <div style={styles.main}>
            {/* Hero Section */}
            <section style={styles.hero}>
              <h1 style={styles.heroTitle}>İletişim</h1>
              <p style={styles.heroSubtitle}>
                Projeleriniz hakkında konuşmak veya işbirliği yapmak için benimle iletişime geçebilirsiniz
              </p>
            </section>

            {/* Contact Cards */}
            <section>
              <div style={styles.contactGrid}>
                <div style={styles.contactCard}>
                  <span style={styles.contactIcon}>📧</span>
                  <h3 style={styles.contactTitle}>E-posta</h3>
                  <p style={styles.contactDescription}>
                    En hızlı iletişim yöntemi. Genellikle 24 saat içinde yanıtlarım.
                  </p>
                  <a 
                    href="mailto:ecrinavci@example.com" 
                    style={styles.contactLink}
                  >
                    E-posta Gönder
                  </a>
                </div>

                <div style={styles.contactCard}>
                  <span style={styles.contactIcon}>💼</span>
                  <h3 style={styles.contactTitle}>LinkedIn</h3>
                  <p style={styles.contactDescription}>
                    Profesyonel bağlantılar için LinkedIn üzerinden iletişime geçin.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/ecrin-avcı-53095625a" 
                    style={styles.contactLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    LinkedIn'de Bağlan
                  </a>
                </div>

                <div style={styles.contactCard}>
                  <span style={styles.contactIcon}>🐙</span>
                  <h3 style={styles.contactTitle}>GitHub</h3>
                  <p style={styles.contactDescription}>
                    Projelerimi inceleyin ve kodlarımı GitHub üzerinden takip edin.
                  </p>
                  <a 
                    href="https://github.com/EcrinAvci" 
                    style={styles.contactLink}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GitHub'da Görüntüle
                  </a>
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section style={styles.formSection}>
              <h2 style={styles.formTitle}>Mesaj Gönder</h2>
              <form style={styles.form} onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="name">Ad Soyad</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Adınızı ve soyadınızı girin"
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="email">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="E-posta adresinizi girin"
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="subject">Konu</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Mesajınızın konusunu girin"
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label} htmlFor="message">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                    placeholder="Mesajınızı buraya yazın..."
                    required
                  />
                </div>

                <button type="submit" style={styles.submitButton}>
                  Mesajı Gönder
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>

      <style jsx>{`
        .contact-card:hover {
          transform: translateY(-5px) !important;
          background-color: rgba(255, 255, 255, 0.15) !important;
        }
        .contact-link:hover {
          background-color: rgba(255, 255, 255, 0.3) !important;
          transform: translateY(-2px) !important;
        }
        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }
        input:focus {
          border-color: rgba(255, 255, 255, 0.6) !important;
          background-color: rgba(255, 255, 255, 0.15) !important;
          outline: none !important;
        }
        textarea:focus {
          border-color: rgba(255, 255, 255, 0.6) !important;
          background-color: rgba(255, 255, 255, 0.15) !important;
          outline: none !important;
        }
        button:hover {
          background-color: rgba(255, 255, 255, 0.3) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3) !important;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
        }
      `}</style>
    </>
  );
}
