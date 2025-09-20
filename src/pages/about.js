import Head from 'next/head'
import Link from 'next/link'

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
    gap: '4rem'
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
  section: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '1rem',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '2rem'
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease'
  },
  cardHover: {
    transform: 'translateY(-5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.15)'
  },
  cardIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    textAlign: 'center'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.75rem',
    textAlign: 'center'
  },
  cardDescription: {
    fontSize: '0.95rem',
    opacity: 0.9,
    lineHeight: '1.5',
    textAlign: 'center'
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginTop: '1.5rem'
  },
  skillItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '0.75rem 1rem',
    borderRadius: '25px',
    textAlign: 'center',
    fontSize: '0.9rem',
    fontWeight: '500',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease'
  },
  skillItemHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)'
  },
  timeline: {
    position: 'relative',
    paddingLeft: '2rem'
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '2rem',
    paddingLeft: '2rem'
  },
  timelineItemBefore: {
    content: '""',
    position: 'absolute',
    left: '-8px',
    top: '0',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '3px solid rgba(255, 255, 255, 0.3)'
  },
  timelineItemAfter: {
    content: '""',
    position: 'absolute',
    left: '-1px',
    top: '16px',
    width: '2px',
    height: 'calc(100% + 1rem)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  timelineContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  timelineTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  timelinePeriod: {
    fontSize: '0.9rem',
    opacity: 0.8,
    marginBottom: '0.75rem',
    fontStyle: 'italic'
  },
  timelineDescription: {
    fontSize: '0.95rem',
    opacity: 0.9,
    lineHeight: '1.5'
  },
  contactSection: {
    textAlign: 'center',
    padding: '2rem 0'
  },
  contactTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  contactSubtitle: {
    fontSize: '1.1rem',
    opacity: 0.9,
    marginBottom: '2rem'
  },
  contactButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  },
  contactButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '1rem 2rem',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '30px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },
  contactButtonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
  }
};

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS', 'Tailwind CSS',
    'Python', 'Django', 'Flask', 'Redis', 'GraphQL', 'REST API'
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      period: '2023 - Devam Ediyor',
      description: 'Modern web teknolojileri kullanarak kullanıcı dostu uygulamalar geliştiriyorum. React, Next.js ve Node.js ile projeler üretiyorum.'
    },
    {
      title: 'Frontend Developer',
      period: '2022 - 2023',
      description: 'Responsive ve modern kullanıcı arayüzleri tasarladım. JavaScript, React ve CSS ile interaktif web uygulamaları geliştirdim.'
    },
    {
      title: 'Web Developer',
      period: '2021 - 2022',
      description: 'HTML, CSS ve JavaScript ile web siteleri geliştirdim. Kullanıcı deneyimini ön planda tutarak projeler tamamladım.'
    }
  ];

  return (
    <>
      <Head>
        <title>Hakkımda | Ecrin Avcı</title>
        <meta name="description" content="Full Stack Developer Ecrin Avcı hakkında bilgi alın" />
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
              <Link href="/about" style={{...styles.navLink, ...styles.navLinkActive}}>
                Hakkımda
              </Link>
            </div>
          </div>
        </nav>

        <div style={styles.content}>
          <div style={styles.main}>
            {/* Hero Section */}
            <section style={styles.hero}>
              <h1 style={styles.heroTitle}>Hakkımda</h1>
              <p style={styles.heroSubtitle}>
                Merhaba! Ben Ecrin Avcı, tutkulu bir Full Stack Developer&apos;ım. 
                Modern web teknolojileri ile kullanıcı dostu ve performanslı uygulamalar geliştiriyorum.
              </p>
            </section>

            {/* About Section */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Kimim?</h2>
              <p style={{fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9, textAlign: 'center'}}>
                Teknolojiye olan tutkum ve sürekli öğrenme isteğimle, web geliştirme alanında 
                kendimi geliştiriyorum. Kullanıcı deneyimini ön planda tutarak, modern ve 
                etkili çözümler üretmeyi hedefliyorum. Her projede yeni bir şeyler öğrenmeyi 
                ve teknolojinin sınırlarını zorlamayı seviyorum.
              </p>
            </section>

            {/* Skills Section */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Teknolojiler</h2>
              <div style={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <div key={index} style={styles.skillItem}>
                    {skill}
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>Deneyim</h2>
              <div style={styles.timeline}>
                {experiences.map((exp, index) => (
                  <div key={index} style={styles.timelineItem}>
                    <div style={styles.timelineContent}>
                      <h3 style={styles.timelineTitle}>{exp.title}</h3>
                      <p style={styles.timelinePeriod}>{exp.period}</p>
                      <p style={styles.timelineDescription}>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section style={styles.contactSection}>
              <h2 style={styles.contactTitle}>İletişime Geçin</h2>
              <p style={styles.contactSubtitle}>
                Projeleriniz hakkında konuşmak için benimle iletişime geçebilirsiniz
              </p>
              <div style={styles.contactButtons}>
                <a 
                  href="https://github.com/EcrinAvci" 
                  style={styles.contactButton}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/ecrinavci" 
                  style={styles.contactButton}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <Link href="/projects" style={styles.contactButton}>
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Projelerim
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <style jsx>{`
        .card:hover {
          transform: translateY(-5px) !important;
          background-color: rgba(255, 255, 255, 0.15) !important;
        }
        .skill-item:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          transform: scale(1.05) !important;
        }
        .contact-button:hover {
          background-color: rgba(255, 255, 255, 0.25) !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3) !important;
        }
        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }
      `}</style>
    </>
  );
}
