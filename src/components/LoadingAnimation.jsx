import React, { useState, useEffect } from 'react'
import './LoadingAnimation.css'

const LoadingAnimation = () => {
  const text = 'Glamiffy'
  const tagline = 'THE MODERN BLAZER'
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [showTagline, setShowTagline] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsComplete(true)
        clearInterval(interval)
        // Show tagline after a short delay
        setTimeout(() => {
          setShowTagline(true)
        }, 300)
      }
    }, 120) // Adjust speed here (lower = faster)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-text">
          {text.split('').map((char, index) => (
            <span
              key={index}
              className={`letter ${index < displayedText.length ? 'visible' : ''} ${
                index === displayedText.length - 1 ? 'current' : ''
              } ${isComplete && index === text.length - 1 ? 'complete' : ''}`}
              style={{ '--delay': `${index * 0.08}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        {showTagline && (
          <div className="tagline">
            {tagline.split('').map((char, index) => (
              <span
                key={index}
                className="tagline-letter"
                style={{ '--tagline-delay': `${index * 0.03}s` }}
              >
                {char}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default LoadingAnimation

