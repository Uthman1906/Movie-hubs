<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Movie Hub</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background-color: #0b0c10;
      color: #c5c6c7;
    }
    header {
      background: #1f2833;
      padding: 20px;
      text-align: center;
    }
    header h1 {
      margin: 0;
      font-size: 2em;
      color: #66fcf1;
    }
    nav {
      margin: 10px 0;
    }
    nav a {
      margin: 0 10px;
      text-decoration: none;
      color: #45a29e;
      cursor: pointer;
    }
    #search {
      padding: 10px;
      width: 80%;
      border: none;
      border-radius: 5px;
      margin-bottom: 20px;
    }
    .movie-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    .movie-card {
      background: #1f2833;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.3s;
    }
    .movie-card:hover {
      transform: scale(1.05);
    }
    .movie-card img {
      width: 100%;
      height: auto;
    }
    .movie-card h3 {
      padding: 10px;
      margin: 0;
      color: white;
    }
    footer {
      text-align: center;
      padding: 20px;
      background: #1f2833;
      color: #45a29e;
    }
  </style>
</head>
<body>
  <header>
    <h1>🎬 Movie Hub</h1>
    <nav>
      <a onclick="filterCategory('all')">All</a>
      <a onclick="filterCategory('hollywood')">Hollywood</a>
      <a onclick="filterCategory('bollywood')">Bollywood</a>
      <a onclick="filterCategory('nollywood')">Nollywood</a>
      <a onclick="filterCategory('korean')">Korean</a>
      <a onclick="filterCategory('chinese')">Chinese</a>
    </nav>
    <input type="text" id="search" placeholder="Search movies..." onkeyup="searchMovies()"/>
  </header>

  <main>
    <div class="movie-grid" id="movieGrid">
      <!-- Movies will appear here -->
    </div>
  </main>

  <footer>
    <p>&copy; 2025 Movie Hub. All rights reserved.</p>
  </footer>

  <script>
    const movies = [
      {
        title: "The Midnight Heist",
        category: "hollywood",
        image: "https://placehold.co/300x450?text=Midnight+Heist",
        download: " https://example.com/heist.mp4 "
      },
      {
        title: "Love in Mumbai",
        category: "bollywood",
        image: "https://placehold.co/300x450?text=Love+in+Mumbai",
        download: " https://example.com/love.mp4 "
      },
      {
        title: "Nollywood Nights",
        category: "nollywood",
        image: "https://placehold.co/300x450?text=Nollywood+Nights",
        download: " https://example.com/nollywood.mp4 "
      },
      {
        title: "Seoul Secrets",
        category: "korean",
        image: "https://placehold.co/300x450?text=Seoul+Secrets",
        download: " https://example.com/seoul.mp4 "
      },
      {
        title: "Dragon Empire",
        category: "chinese",
        image: "https://placehold.co/300x450?text=Dragon+Empire",
        download: " https://example.com/dragon.mp4 "
      }
    ];

    function loadMovies() {
      const grid = document.getElementById('movieGrid');
      grid.innerHTML = movies.map(movie => `
        <div class="movie-card" onclick="alert('You clicked: ${movie.title}')">
          <img src="${movie.image}" alt="${movie.title}">
          <h3>${movie.title}</h3>
        </div>
      `).join('');
    }

    function filterCategory(category) {
      const filtered = category === 'all' ? movies : movies.filter(m => m.category === category);
      const grid = document.getElementById('movieGrid');
      grid.innerHTML = filtered.map(movie => `
        <div class="movie-card" onclick="alert('You clicked: ${movie.title}')">
          <img src="${movie.image}" alt="${movie.title}">
          <h3>${movie.title}</h3>
        </div>
      `).join('');
    }

    function searchMovies() {
      const query = document.getElementById('search').value.toLowerCase();
      const filtered = movies.filter(m => m.title.toLowerCase().includes(query));
      const grid = document.getElementById('movieGrid');
      grid.innerHTML = filtered.map(movie => `
        <div class="movie-card" onclick="alert('You clicked: ${movie.title}')">
          <img src="${movie.image}" alt="${movie.title}">
          <h3>${movie.title}</h3>
        </div>
      `).join('');
    }

    window.onload = loadMovies;
  </script>
</body>
</html>
