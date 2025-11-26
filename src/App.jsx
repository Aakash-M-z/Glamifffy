import React, { useState } from 'react'
import LoadingAnimation from './components/LoadingAnimation'
import GenderSelection from './components/GenderSelection'
import BlazerSection from './components/BlazerSection'
import './App.css'

function App() {
  const [showGenderSelection, setShowGenderSelection] = useState(false)
  const [showLoading, setShowLoading] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [selectedGender, setSelectedGender] = useState(null)

  const handleLoadingComplete = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setShowLoading(false)
      setShowGenderSelection(true)
      setIsTransitioning(false)
    }, 500)
  }

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender)
    setShowGenderSelection(false)
  }

  const handleBackToSelection = () => {
    setSelectedGender(null)
    setShowGenderSelection(true)
  }

  return (
    <div className="app">
      {showLoading && (
        <div className={isTransitioning ? 'fade-out' : ''}>
          <LoadingAnimation onComplete={handleLoadingComplete} />
        </div>
      )}
      {showGenderSelection && !selectedGender && (
        <div className={isTransitioning ? 'fade-out' : 'fade-in'}>
          <GenderSelection onGenderSelect={handleGenderSelect} />
        </div>
      )}
      {selectedGender && (
        <BlazerSection gender={selectedGender} onBack={handleBackToSelection} />
      )}
    </div>
  )
}

export default App

