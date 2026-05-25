function Moviecard({ title, genre, rating, duration, img, language }) {
  return (
    <div style={{ 
        width: "200px", // Bumped up slightly for better spacing
        borderRadius: "12px",
        overflow: "hidden",
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1a1a1a', // Dark theme background
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        transition: 'transform 0.2s ease', // Smooth hover effect
        cursor: 'pointer'
    }}>
      
      {/* Movie Poster Wrapper */}
      <div style={{ width: '100%', height: '280px', overflow: 'hidden' }}>
        <img 
          src={img || 'https://via.placeholder.com/200x280'} 
          alt={title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>

      {/* Content Container */}
      <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        
        {/* Title */}
        <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </h3>

        {/* Genre & Language Row */}
        <div style={{ display: 'flex', gap: '6px', fontSize: '11px', color: '#aaa' }}>
          <span>{genre}</span>
          <span>•</span>
          <span>{language}</span>
        </div>

        {/* Footer Row (Rating & Duration) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
          {/* Rating Badge */}
          <span style={{ 
            backgroundColor: '#ffc107', 
            color: '#000', 
            padding: '2px 6px', 
            borderRadius: '4px', 
            fontWeight: 'bold', 
            fontSize: '12px' 
          }}>
            ⭐ {rating}
          </span>
          
          {/* Duration */}
          <span style={{ fontSize: '12px', color: '#888' }}>
            {duration}
          </span>
        </div>

      </div>
    </div>
  )
}

export default Moviecard