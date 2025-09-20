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
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem'
  },
  greeting: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
    opacity: 0.9,
    fontWeight: '300'
  },
  name: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    opacity: 0.9,
    fontWeight: '300'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto 3rem',
    opacity: 0.8
  },
  projectsSection: {
    textAlign: 'center'
  },
  projectsTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    fontWeight: '600'
  },
  projectsSubtitle: {
    fontSize: '1rem',
    marginBottom: '2rem',
    opacity: 0.8
  },
  projectsButton: {
    display: 'inline-block',
    padding: '1rem 2rem',
    backgroundColor: 'rgba(255,255,255,0.15)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '30px',
    border: '2px solid rgba(255,255,255,0.3)',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  },
  projectsButtonHover: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
  },
  socialLinks: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '1rem',
    zIndex: 2
  },
  socialLink: {
    width: '50px',
    height: '50px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)'
  },
  socialLinkHover: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    transform: 'translateY(-3px)'
  }
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Ecrin Avcı | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer - Modern web uygulamaları geliştiriyorum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main style={styles.container}>
        <div style={styles.backgroundPattern}></div>

        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: '1rem 0',
          zIndex: 1000,
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/" style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #fff, #f0f0f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none'
            }}>
              Ecrin Avcı
            </Link>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/projects" style={{
                padding: '0.5rem 1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}>
                Projelerim
              </Link>
              <Link href="/about" style={{
                padding: '0.5rem 1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}>
                Hakkımda
              </Link>
              <a href="https://github.com/EcrinAvci" style={{
                padding: '0.5rem 1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </nav>
        
        <div style={{...styles.content, paddingTop: '100px'}}>
          <header style={styles.header}>
            <div style={styles.greeting}>Merhaba, ben</div>
            <h1 style={styles.name}>Ecrin Avcı</h1>
            <h2 style={styles.title}>Software Engineer</h2>
            <p style={styles.description}>
            Manisa Celal Bayar Üniversitesi Yazılım Mühendisliği 4. sınıf öğrencisiyim. Yazılım geliştirme sürecinde edindiğim bilgi ve deneyimleri ileriye taşımak için özellikle makine öğrenmesi, veri analizi ve ağ teknolojileri alanlarında kendimi geliştirmeye devam ediyorum. Yeni teknolojileri öğrenmeye, projeler üzerinde çalışarak deneyim kazanmaya ve sektörde güçlü bir altyapı oluşturmayı hedefliyorum.

            </p>
          </header>

          {/* Navigation moved to top navbar */}

          <section style={styles.projectsSection}>
            <h3 style={styles.projectsTitle}>Projelerimi Keşfedin</h3>
            <p style={styles.projectsSubtitle}>
              GitHub&apos;daki projelerimi görüntüleyin ve kodlarımı inceleyin
            </p>
            <Link href="/projects" style={styles.projectsButton}>
              Projeleri Görüntüle →
            </Link>
          </section>
        </div>

        <div style={styles.socialLinks}>
          <a href="https://github.com/EcrinAvci" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ecrin-avcı-53095625a" style={styles.socialLink} target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </main>

      <style jsx>{`
        .nav-link:hover {
          background-color: rgba(255,255,255,0.2) !important;
          color: white !important;
        }
        a[href="/projects"]:hover {
          background-color: rgba(255,255,255,0.25) !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3) !important;
        }
        .social-link:hover {
          background-color: rgba(255,255,255,0.2) !important;
          transform: translateY(-3px) !important;
        }
      `}</style>
    </>
  )
}
