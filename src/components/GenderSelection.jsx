import React, { useState } from 'react'
import './GenderSelection.css'

const GenderSelection = ({ onGenderSelect }) => {
  const [selectedGender, setSelectedGender] = useState(null)
  const [hoveredGender, setHoveredGender] = useState(null)

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender)
    if (onGenderSelect) {
      onGenderSelect(gender)
    }
    console.log(`Selected: ${gender}`)
  }

  return (
    <div className="gender-selection-container">
      <div className="background-video-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background/back ground.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="gender-selection-content">
        <h2 className="selection-title">Choose Your Style</h2>
        <div className="gender-buttons">
          <button
            className={`gender-button male-button ${selectedGender === 'male' ? 'selected' : ''} ${hoveredGender === 'male' ? 'hovered' : ''}`}
            onClick={() => handleGenderSelect('male')}
            onMouseEnter={() => setHoveredGender('male')}
            onMouseLeave={() => setHoveredGender(null)}
          >
            <div className="button-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="14" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M10 1V7M10 7L7 4M10 7L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="button-text">Male</span>
            <div className="button-glow"></div>
            <div className="button-particles"></div>
          </button>

          <button
            className={`gender-button female-button ${selectedGender === 'female' ? 'selected' : ''} ${hoveredGender === 'female' ? 'hovered' : ''}`}
            onClick={() => handleGenderSelect('female')}
            onMouseEnter={() => setHoveredGender('female')}
            onMouseLeave={() => setHoveredGender(null)}
          >
            <div className="button-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M12 13C8 13 4 15 4 19V23H20V19C20 15 16 13 12 13Z" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="button-text">Female</span>
            <div className="button-glow"></div>
            <div className="button-particles"></div>
          </button>
        </div>
      </div>
      <div className="background-pattern"></div>
    </div>
  )
}

export default GenderSelection

