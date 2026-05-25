import Moviecard from './components/Moviecard'; // Adjust the path based on your file structure

function App() {
  // 1. Mock data representing a list of movies
  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      rating: "8.8",
      duration: "2h 28m",
      language: "English",
      img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" // Example image
    },
    {
      id: 2,
      title: "Interstellar",
      genre: "Sci-Fi / Drama",
      rating: "8.7",
      duration: "2h 49m",
      language: "English",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400"
    }
  ];

  return (
    <div style={{ padding: '40px', backgroundColor: '#121212', minHeight: '100vh' }}>
      <h1 style={{ color: '#fff', marginBottom: '20px' }}>My Movie Library</h1>
      
      {/* Container to display cards side-by-side */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Method A: Calling a single card manually */}
        <Moviecard 
          title="The Dark Knight"
          genre="Action"
          rating="9.0"
          duration="2h 32m"
          language="English"
          img="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=400"
        />

        {/* Method B: Dynamically rendering from an array (Recommended) */}
        {movies.map((movie) => (
          <Moviecard 
            key={movie.id} // React needs a unique key for lists
            title={movie.title}
            genre={movie.genre}
            rating={movie.rating}
            duration={movie.duration}
            language={movie.language}
            img={movie.img}
          />
        ))}

      </div>
    </div>
  );
}

export default App;