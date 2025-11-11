import React, { useState } from 'react'
import LoadingAnimation from './components/LoadingAnimation'
import GenderSelection from './components/GenderSelection'
import './App.css'

function App() {
  const [showGenderSelection, setShowGenderSelection] = useState(false)
  const [showLoading, setShowLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleLoadingComplete = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setShowLoading(false)
      setShowGenderSelection(true)
      setIsTransitioning(false)
    }, 500)
  }

  const handleGenderSelect = (gender) => {
    console.log(`Selected: ${gender}`)
  }

  return (
    <div className="app">
      {showLoading && (
        <div className={isTransitioning ? 'fade-out' : ''}>
          <LoadingAnimation onComplete={handleLoadingComplete} />
        </div>
      )}
      {showGenderSelection && (
        <div className={isTransitioning ? 'fade-out' : 'fade-in'}>
          <GenderSelection onGenderSelect={handleGenderSelect} />
        </div>
      )}
    </div>
  )
}

export default App

