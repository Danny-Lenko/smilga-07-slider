import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import Slider from './Slider'

function App() {
  const [activeSlideId, setActiveSlideId] = useState(2)
  const [timerState, setTimerState] = useState(true)

  const allSlides = data.map(slide => (      
    <Slider 
      key={slide.id}
      slide={slide} 
      className={ determineSlideClass(slide, activeSlideId) } 
    />
  ))

  function determineSlideClass(slide, activeSlide) {
    if ( slide.id === activeSlide ) {
      return 'activeSlide'
    } else if ( activeSlide === 1 && slide.id === data.length ) {
      return 'lastSlide'
    } else if ( activeSlide === data.length && slide.id === 1) {
      return 'nextSlide'
    } else if ( slide.id === activeSlide - 1 ) {
      return 'lastSlide'
    } else if ( slide.id === activeSlide + 1 ) {
      return 'nextSlide'
    } else {
      return ''
    }
  }

  function goToNextSlide() {
    setActiveSlideId(prevState => 
      (prevState + 1 < data.length + 1) ? prevState + 1 : 1 
    )
  }

  function goToPreviousSlide() {
    setActiveSlideId(prevState => 
      (prevState - 1 > 0) ? prevState - 1 : data.length
    )
  }

  useEffect(() => {
    setTimeout(() => {
      goToNextSlide()
      setTimerState(!timerState)
    }, 5000)
  }, [timerState])

  return (
    <section className="section">

      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>

      <section className="section-center">

        {allSlides}

        <FiChevronLeft onClick={goToPreviousSlide} className="prev" />
        <FiChevronRight onClick={goToNextSlide} className="next" />

      </section>

    </section>
  );
}

export default App;
