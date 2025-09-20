// GitHub API'den projeleri çeken endpoint
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // GitHub kullanıcı adını buraya girin
    const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'EcrinAvci';
    
    // GitHub API'den repositories çek
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        // GitHub token varsa (rate limit için)
        ...(process.env.GITHUB_TOKEN && {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        })
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    
    // Sadece gerekli bilgileri filtrele
    const projects = repos
      .filter(repo => !repo.fork && !repo.private) // Fork'ları ve private repo'ları hariç tut
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description || 'Açıklama eklenmemiş',
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        topics: repo.topics || [],
        size: repo.size,
        default_branch: repo.default_branch,
        has_pages: repo.has_pages,
        clone_url: repo.clone_url,
        // README varsa çekmek için
        has_readme: true
      }))
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // Son güncellenen önce

    res.status(200).json({
      success: true,
      count: projects.length,
      projects
    });

  } catch (error) {
    console.error('GitHub API Error:', error);
    res.status(500).json({
      success: false,
      message: 'GitHub projelerini çekerken hata oluştu',
      error: error.message
    });
  }
}
