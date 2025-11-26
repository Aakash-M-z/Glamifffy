import React, { useState, useEffect, useRef } from 'react'
import './GenderSelection.css'

const GenderSelection = ({ onGenderSelect }) => {
  const [selectedGender, setSelectedGender] = useState(null)
  const [hoveredGender, setHoveredGender] = useState(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [splashes, setSplashes] = useState([])
  const [isHoveringButton, setIsHoveringButton] = useState(false)
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender)
    if (onGenderSelect) {
      onGenderSelect(gender)
    }
    console.log(`Selected: ${gender}`)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      
      // Calculate mouse position as percentage for gradient effect
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
      }
    }

    const handleClick = (e) => {
      const newSplash = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setSplashes((prev) => [...prev, newSplash])
      
      // Remove splash after animation
      setTimeout(() => {
        setSplashes((prev) => prev.filter((splash) => splash.id !== newSplash.id))
      }, 1000)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('click', handleClick)
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('click', handleClick)
      }
    }
  }, [])

  return (
    <div className="gender-selection-container" ref={containerRef}>
      {/* Custom Cursor */}
      <div 
        className={`splash-cursor ${isHoveringButton ? 'hovered' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      
      {/* Splash Effects */}
      {splashes.map((splash) => (
        <div
          key={splash.id}
          className="splash-effect"
          style={{
            left: `${splash.x}px`,
            top: `${splash.y}px`,
          }}
        />
      ))}
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
            onMouseEnter={() => {
              setHoveredGender('male')
              setIsHoveringButton(true)
            }}
            onMouseLeave={() => {
              setHoveredGender(null)
              setIsHoveringButton(false)
            }}
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
            onMouseEnter={() => {
              setHoveredGender('female')
              setIsHoveringButton(true)
            }}
            onMouseLeave={() => {
              setHoveredGender(null)
              setIsHoveringButton(false)
            }}
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
      
      {/* Animated Gradient Background Effect */}
      <div className="animated-gradient-bg">
        <div 
          className="gradient-orb orb-1"
          style={{
            left: `${20 + (mousePosition.x - 50) * 0.3}%`,
            top: `${20 + (mousePosition.y - 50) * 0.3}%`,
          }}
        ></div>
        <div 
          className="gradient-orb orb-2"
          style={{
            right: `${15 + (50 - mousePosition.x) * 0.2}%`,
            top: `${60 + (50 - mousePosition.y) * 0.2}%`,
          }}
        ></div>
        <div 
          className="gradient-orb orb-3"
          style={{
            left: `${10 + (mousePosition.x - 50) * 0.25}%`,
            bottom: `${20 + (50 - mousePosition.y) * 0.25}%`,
          }}
        ></div>
        <div 
          className="gradient-orb orb-4"
          style={{
            right: `${30 + (50 - mousePosition.x) * 0.3}%`,
            top: `${50 + (mousePosition.y - 50) * 0.3}%`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default GenderSelection

