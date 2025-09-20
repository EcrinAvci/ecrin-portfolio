import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    padding: '2rem 1rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  maxWidth: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '2rem 0'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#4a5568',
    maxWidth: '48rem',
    margin: '0 auto',
    fontWeight: '300'
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '2rem'
  },
  filterButton: {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  filterButtonActive: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  filterButtonInactive: {
    backgroundColor: '#e5e7eb',
    color: '#374151'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)'
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
  },
  cardContent: {
    padding: '1.5rem'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '0.75rem'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#111827',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  cardStats: {
    display: 'flex',
    gap: '0.5rem',
    marginLeft: '0.5rem'
  },
  stat: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: '#6b7280'
  },
  description: {
    color: '#6b7280',
    fontSize: '0.875rem',
    marginBottom: '1rem',
    lineHeight: '1.5',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  cardMeta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  languageTag: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.625rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '500',
    backgroundColor: '#dbeafe',
    color: '#1e40af'
  },
  date: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  topics: {
    marginBottom: '1rem'
  },
  topicsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.25rem'
  },
  topic: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.75rem',
    fontWeight: '500',
    backgroundColor: '#f3f4f6',
    color: '#374151'
  },
  buttons: {
    display: 'flex',
    gap: '0.75rem'
  },
  button: {
    flex: 1,
    textAlign: 'center',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
    border: 'none',
    cursor: 'pointer'
  },
  buttonPrimary: {
    backgroundColor: '#111827',
    color: 'white'
  },
  buttonSecondary: {
    backgroundColor: '#3b82f6',
    color: 'white'
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9fafb'
  },
  loadingContent: {
    textAlign: 'center'
  },
  spinner: {
    width: '3rem',
    height: '3rem',
    border: '2px solid #e5e7eb',
    borderTop: '2px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 1rem'
  },
  error: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9fafb'
  },
  errorContent: {
    textAlign: 'center'
  },
  errorText: {
    color: '#ef4444',
    marginBottom: '1rem'
  },
  retryButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  noResults: {
    textAlign: 'center',
    padding: '3rem',
    color: '#6b7280'
  }
};

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/github-projects');
      const data = await response.json();
      
      if (data.success) {
        setProjects(data.projects);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Projeler yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const getLanguages = () => {
    const languages = [...new Set(projects.map(p => p.language).filter(Boolean))];
    return languages;
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.language === filter);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <>
        <Head>
          <title>Projelerim | Portfolio</title>
        </Head>
        <div style={styles.loading}>
          <div style={styles.loadingContent}>
            <div style={styles.spinner}></div>
            <p>Projeler yükleniyor...</p>
          </div>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>Projelerim | Portfolio</title>
        </Head>
        <div style={styles.error}>
          <div style={styles.errorContent}>
            <p style={styles.errorText}>{error}</p>
            <button 
              style={styles.retryButton}
              onClick={fetchProjects}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
              Tekrar Dene
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Projelerim | Portfolio</title>
        <meta name="description" content="GitHub projelerimi keşfedin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.container}>
        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          padding: '1rem 0',
          zIndex: 1000,
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/" style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none'
            }}>
              Ecrin Avcı
            </Link>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link href="/" style={{
                padding: '0.5rem 1rem',
                color: '#4a5568',
                textDecoration: 'none',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}>
                Ana Sayfa
              </Link>
              <Link href="/projects" style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#667eea',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}>
                Projeler
              </Link>
              <Link href="/about" style={{
                padding: '0.5rem 1rem',
                color: '#4a5568',
                textDecoration: 'none',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}>
                Hakkımda
              </Link>
              <Link href="/contact" style={{
                padding: '0.5rem 1rem',
                color: '#4a5568',
                textDecoration: 'none',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}>
                İletişim
              </Link>
            </div>
          </div>
        </nav>

        <div style={{ paddingTop: '80px' }}>
          <div style={styles.maxWidth}>
          {/* Header */}
          <div style={styles.header}>
            <h1 style={styles.title}>Projelerim</h1>
            <p style={styles.subtitle}>
              GitHub&apos;daki projelerimi keşfedin. Toplam {projects.length} proje bulundu.
            </p>
          </div>

          {/* Filter */}
          <div style={styles.filterContainer}>
            <button
              style={{
                ...styles.filterButton,
                ...(filter === 'all' ? styles.filterButtonActive : styles.filterButtonInactive)
              }}
              onClick={() => setFilter('all')}
              onMouseOver={(e) => {
                if (filter !== 'all') {
                  e.target.style.backgroundColor = '#d1d5db';
                }
              }}
              onMouseOut={(e) => {
                if (filter !== 'all') {
                  e.target.style.backgroundColor = '#e5e7eb';
                }
              }}
            >
              Tümü ({projects.length})
            </button>
            {getLanguages().map(lang => (
              <button
                key={lang}
                style={{
                  ...styles.filterButton,
                  ...(filter === lang ? styles.filterButtonActive : styles.filterButtonInactive)
                }}
                onClick={() => setFilter(lang)}
                onMouseOver={(e) => {
                  if (filter !== lang) {
                    e.target.style.backgroundColor = '#d1d5db';
                  }
                }}
                onMouseOut={(e) => {
                  if (filter !== lang) {
                    e.target.style.backgroundColor = '#e5e7eb';
                  }
                }}
              >
                {lang} ({projects.filter(p => p.language === lang).length})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div style={styles.grid}>
            {filteredProjects.map(project => (
              <div
                key={project.id}
                style={styles.card}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = styles.card.boxShadow;
                }}
              >
                <div style={styles.cardContent}>
                  <div style={styles.cardHeader}>
                    <h3 style={styles.cardTitle}>{project.name}</h3>
                    <div style={styles.cardStats}>
                      <span style={styles.stat}>⭐ {project.stargazers_count}</span>
                      <span style={styles.stat}>🍴 {project.forks_count}</span>
                    </div>
                  </div>

                  <p style={styles.description}>{project.description}</p>

                  <div style={styles.cardMeta}>
                    {project.language && (
                      <span style={styles.languageTag}>{project.language}</span>
                    )}
                    <span style={styles.date}>{formatDate(project.updated_at)}</span>
                  </div>

                  {project.topics.length > 0 && (
                    <div style={styles.topics}>
                      <div style={styles.topicsContainer}>
                        {project.topics.slice(0, 3).map(topic => (
                          <span key={topic} style={styles.topic}>{topic}</span>
                        ))}
                        {project.topics.length > 3 && (
                          <span style={{...styles.topic, color: '#6b7280'}}>
                            +{project.topics.length - 3} daha
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div style={styles.buttons}>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{...styles.button, ...styles.buttonPrimary}}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#000000'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#111827'}
                    >
                      GitHub&apos;da Gör
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{...styles.button, ...styles.buttonSecondary}}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={styles.noResults}>
              <p>Bu filtre için proje bulunamadı.</p>
            </div>
          )}
          </div>
        </div>
      </main>
    </>
  );
}