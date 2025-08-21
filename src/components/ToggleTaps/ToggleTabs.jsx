import { useEffect, useRef, useState } from "react"

export default function ToggleTabs({ activeTab, handleTabChange,btn }) {
  const standardButtonRef = useRef(null)
  const customButtonRef = useRef(null)
  const sliderRef = useRef(null)

  useEffect(() => {
    if (sliderRef.current && standardButtonRef.current && customButtonRef.current) {
      const activeButton = activeTab === "standard" ? standardButtonRef.current : customButtonRef.current
      const buttonWidth = activeButton.offsetWidth
      const buttonLeft = activeButton.offsetLeft - 4 // Account for container padding

      sliderRef.current.style.width = `${buttonWidth}px`
      sliderRef.current.style.transform = `translateX(${buttonLeft}px)`
    }
  }, [activeTab])

  return (
    <div className="toggle-container">
      <div ref={sliderRef} className="toggle-slider"></div>
      <button
        ref={standardButtonRef}
        className={`toggle-button ${activeTab === "standard" ? "active" : ""}`}
        onClick={() => handleTabChange("standard")}
      >
        {btn[0]}
      </button>
      <button
        ref={customButtonRef}
        className={`toggle-button ${activeTab === "custom" ? "active" : ""}`}
        onClick={() => handleTabChange("custom")}
      >
        {btn[1]}
      </button>
    </div>
  )
}
