import React, { useState, useEffect } from 'react'
import './BlazerSection.css'

const BlazerSection = ({ gender, onBack }) => {
  const [imagesLoaded, setImagesLoaded] = useState({})

  const maleBlazers = [
    {
      id: 1,
      image: "/men blazer's/H2cf3c6ed285e48a0a72b96f8d6126911A.jpg_321x321.avif",
      title: "Classic Navy Blazer",
      description: "A timeless navy blazer crafted from premium wool blend fabric that offers exceptional durability and comfort. This sophisticated piece features a tailored fit with classic notch lapels, functional buttons, and a single-breasted design. Perfect for business meetings, formal events, or adding elegance to your casual wardrobe. The versatile navy color pairs effortlessly with khakis, dress pants, or dark denim. Features include interior pockets, structured shoulders, and a refined silhouette that flatters every body type. Made with meticulous attention to detail, this blazer is a wardrobe essential that transcends seasons and trends. The navy hue provides a professional yet approachable appearance, making it suitable for corporate environments, social gatherings, and special occasions. The premium wool blend ensures breathability and comfort throughout extended wear.",
      fabric: "Premium Wool Blend",
      fit: "Tailored Fit",
      style: "Single-Breasted, Notch Lapel",
      occasions: "Business, Formal Events, Casual Elegance"
    },
    {
      id: 2,
      image: "/men blazer's/H68625db4f6854d8ab7936578dab6e00cV.jpg_321x321.avif",
      title: "Elegant Black Blazer",
      description: "Sophisticated black blazer designed for the modern gentleman who values both style and substance. Made with high-quality fabric that drapes beautifully and maintains its shape throughout the day. This versatile piece is ideal for evening events, weddings, formal dinners, or professional settings. The sleek black color makes it a perfect foundation piece that can be dressed up or down. Features include a modern slim fit, structured shoulders, and premium construction. Versatile enough to pair with dress pants for formal occasions or dark jeans for a smart-casual look. The refined tailoring ensures a polished appearance that commands attention. The classic black color provides unmatched versatility, allowing you to create multiple sophisticated looks with a single piece. Perfect for building a capsule wardrobe that emphasizes quality over quantity.",
      fabric: "Premium Quality Fabric",
      fit: "Slim Fit",
      style: "Modern Tailored",
      occasions: "Evening Events, Weddings, Professional Settings"
    },
    {
      id: 3,
      image: "/men blazer's/H7423e69170d34c44aab1d21351a464bcI.jpg_321x321.avif",
      title: "Charcoal Gray Blazer",
      description: "Refined charcoal gray blazer offering exceptional versatility and timeless appeal. This essential piece transitions seamlessly from office to evening, making it perfect for the modern professional. Features a modern slim fit with attention to detail in every stitch, including perfectly aligned patterns and reinforced seams. The charcoal gray color is sophisticated yet approachable, making it ideal for business meetings, client presentations, or weekend gatherings. Crafted with premium materials that ensure longevity and comfort. The neutral tone pairs beautifully with a wide range of colors, from crisp white shirts to bold patterned ties. Perfect for building a polished wardrobe foundation that reflects your refined taste. The charcoal gray shade provides a perfect balance between formal and casual, making it an excellent choice for the contemporary professional who values versatility and style.",
      fabric: "Premium Wool Blend",
      fit: "Modern Slim Fit",
      style: "Contemporary Tailored",
      occasions: "Office, Business Meetings, Weekend Gatherings"
    }
  ]

  const femaleBlazers = [
    {
      id: 1,
      image: "/women blazer's/1532707025-everlane-oversized-black-blazer-1532707006.avif",
      title: "Oversized Black Blazer",
      description: "A contemporary oversized black blazer that masterfully combines comfort with cutting-edge style. This statement piece features a relaxed, boxy fit that's perfect for layering over dresses, blouses, or t-shirts. Made from premium fabric with a modern, fashion-forward silhouette that exudes confidence and sophistication. The oversized design creates a bold, architectural look while maintaining elegance. Perfect for creating powerful, professional ensembles or edgy street-style outfits. The versatile black color ensures it pairs seamlessly with any wardrobe piece. Features include extended shoulders, longer sleeves, and a relaxed body that allows for comfortable movement. This blazer is a must-have for the fashion-forward woman who values both style and comfort. The oversized silhouette provides a modern, relaxed aesthetic that's perfect for those who want to make a bold fashion statement while maintaining professional appeal.",
      fabric: "Premium Quality Fabric",
      fit: "Oversized/Relaxed Fit",
      style: "Contemporary Oversized",
      occasions: "Professional Ensembles, Street Style, Fashion Forward Looks"
    },
    {
      id: 2,
      image: "/women blazer's/IMG_6329.jpg",
      title: "Tailored Professional Blazer",
      description: "Elegant and structured blazer designed for the modern professional woman who demands both style and functionality. Features a classic cut with contemporary details, making it perfect for office wear, business meetings, or formal presentations. The refined tailoring creates a flattering silhouette that accentuates your figure while maintaining comfort throughout the day. Crafted with premium materials and impeccable construction, this blazer features structured shoulders, a defined waist, and a sophisticated button closure. The versatile design works beautifully with matching trousers for a complete suit look or pairs effortlessly with skirts, dresses, or jeans. The professional yet feminine cut ensures you look polished and confident in any business setting. This blazer empowers you to command attention in the boardroom while maintaining your personal style and comfort throughout long workdays.",
      fabric: "Premium Tailored Fabric",
      fit: "Tailored Professional Fit",
      style: "Classic with Modern Details",
      occasions: "Office Wear, Business Meetings, Formal Presentations"
    },
    {
      id: 3,
      image: "/women blazer's/rBVa3mAXsHmAUUQMAADXnZAtLps440.jpg",
      title: "Chic Contemporary Blazer",
      description: "Stylish blazer that brilliantly blends classic elegance with modern design elements, creating a piece that's both timeless and on-trend. Versatile enough for both professional and casual settings, this blazer features premium materials and impeccable craftsmanship that ensures longevity. The contemporary cut offers a fresh take on traditional tailoring, with subtle design details that set it apart. Perfect for pairing with trousers for a polished, professional look or jeans for a smart-casual ensemble. The refined silhouette flatters various body types while maintaining a sophisticated appearance. Whether you're heading to the office, attending a business lunch, or enjoying a weekend brunch, this blazer elevates any outfit with effortless style and elegance. The perfect balance of classic sophistication and modern flair makes this piece a versatile addition to any wardrobe.",
      fabric: "Premium Materials",
      fit: "Contemporary Fit",
      style: "Modern Classic Blend",
      occasions: "Office, Business Lunches, Weekend Brunch, Smart Casual"
    }
  ]

  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }))
  }

  const blazers = gender === 'male' ? maleBlazers : femaleBlazers
  const sectionTitle = gender === 'male' ? "Men's Blazers" : "Women's Blazers"
  const sectionDescription = gender === 'male' 
    ? "Discover our curated collection of premium men's blazers, designed to elevate your style with timeless elegance and modern sophistication."
    : "Explore our exquisite collection of women's blazers, crafted to empower your wardrobe with contemporary designs and classic refinement."

  useEffect(() => {
    // Reset loaded state when gender changes
    setImagesLoaded({})
  }, [gender])

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
          {blazers.map((blazer, index) => (
            <div 
              key={blazer.id} 
              className="blazer-card"
              style={{ '--index': index }}
            >
              <div className="blazer-image-container">
                <div className="flip-card">
                  <div className="flip-face front-face">
                    <div className="image-loader">
                      <div className="loader-spinner"></div>
                    </div>
                    <img 
                      src={blazer.image} 
                      alt={blazer.title}
                      className={`blazer-image ${imagesLoaded[blazer.id] ? 'loaded' : ''}`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(blazer.id)}
                    />
                    <div className="blazer-overlay"></div>
                  </div>
                  <div className="flip-face back-face">
                    <div className="back-face-gradient"></div>
                    <div className="back-face-content">
                      <h4 className="back-title">{blazer.title}</h4>
                      <ul className="back-list">
                        <li><strong>Fabric:</strong> {blazer.fabric}</li>
                        <li><strong>Fit:</strong> {blazer.fit}</li>
                        <li><strong>Style:</strong> {blazer.style}</li>
                        {blazer.occasions && (
                          <li><strong>Perfect For:</strong> {blazer.occasions}</li>
                        )}
                      </ul>
                      <p className="back-description">{blazer.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blazer-info">
                <h3 className="blazer-title">{blazer.title}</h3>
                <div className="blazer-details">
                  <span className="detail-item"><strong>Fabric:</strong> {blazer.fabric}</span>
                  <span className="detail-item"><strong>Fit:</strong> {blazer.fit}</span>
                  <span className="detail-item"><strong>Style:</strong> {blazer.style}</span>
                  {blazer.occasions && (
                    <span className="detail-item occasions"><strong>Perfect For:</strong> {blazer.occasions}</span>
                  )}
                </div>
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

