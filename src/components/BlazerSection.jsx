import React from 'react'
import './BlazerSection.css'

const BlazerSection = ({ gender, onBack }) => {
  const maleBlazers = [
    {
      id: 1,
      image: "/men blazer's/H2cf3c6ed285e48a0a72b96f8d6126911A.jpg_321x321.avif",
      title: "Classic Navy Blazer",
      description: "A timeless navy blazer crafted from premium wool blend. Perfect for business meetings, formal events, or adding sophistication to your casual wardrobe. Features a tailored fit with notch lapels and functional buttons."
    },
    {
      id: 2,
      image: "/men blazer's/H68625db4f6854d8ab7936578dab6e00cV.jpg_321x321.avif",
      title: "Elegant Black Blazer",
      description: "Sophisticated black blazer designed for the modern gentleman. Made with high-quality fabric that drapes beautifully. Ideal for evening events, weddings, or professional settings. Versatile enough to pair with dress pants or dark jeans."
    },
    {
      id: 3,
      image: "/men blazer's/H7423e69170d34c44aab1d21351a464bcI.jpg_321x321.avif",
      title: "Charcoal Gray Blazer",
      description: "Refined charcoal gray blazer offering exceptional versatility. This essential piece transitions seamlessly from office to evening. Features a modern slim fit with attention to detail in every stitch. Perfect for building a polished wardrobe foundation."
    }
  ]

  const femaleBlazers = [
    {
      id: 1,
      image: "/women blazer's/1532707025-everlane-oversized-black-blazer-1532707006.avif",
      title: "Oversized Black Blazer",
      description: "A contemporary oversized black blazer that combines comfort with style. This statement piece features a relaxed fit perfect for layering over dresses, blouses, or t-shirts. Made from premium fabric with a modern, fashion-forward silhouette that exudes confidence and sophistication."
    },
    {
      id: 2,
      image: "/women blazer's/IMG_6329.jpg",
      title: "Tailored Professional Blazer",
      description: "Elegant and structured blazer designed for the modern professional woman. Features a classic cut with contemporary details, perfect for office wear or business meetings. The refined tailoring creates a flattering silhouette while maintaining comfort throughout the day."
    },
    {
      id: 3,
      image: "/women blazer's/rBVa3mAXsHmAUUQMAADXnZAtLps440.jpg",
      title: "Chic Contemporary Blazer",
      description: "Stylish blazer that blends classic elegance with modern design elements. Versatile enough for both professional and casual settings. Features premium materials and impeccable craftsmanship. Pair with trousers for a polished look or jeans for a smart-casual ensemble."
    }
  ]

  const blazers = gender === 'male' ? maleBlazers : femaleBlazers
  const sectionTitle = gender === 'male' ? "Men's Blazers" : "Women's Blazers"
  const sectionDescription = gender === 'male' 
    ? "Discover our curated collection of premium men's blazers, designed to elevate your style with timeless elegance and modern sophistication."
    : "Explore our exquisite collection of women's blazers, crafted to empower your wardrobe with contemporary designs and classic refinement."

  return (
    <div className="blazer-section-container">
      <div className="blazer-section-content">
        <button className="back-button" onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Selection
        </button>
        
        <div className="section-header">
          <h1 className="section-title">{sectionTitle}</h1>
          <p className="section-description">{sectionDescription}</p>
        </div>

        <div className="blazers-grid">
          {blazers.map((blazer) => (
            <div key={blazer.id} className="blazer-card">
              <div className="blazer-image-container">
                <img 
                  src={blazer.image} 
                  alt={blazer.title}
                  className="blazer-image"
                  loading="lazy"
                />
                <div className="blazer-overlay"></div>
              </div>
              <div className="blazer-info">
                <h3 className="blazer-title">{blazer.title}</h3>
                <p className="blazer-description">{blazer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="background-pattern"></div>
    </div>
  )
}

export default BlazerSection

