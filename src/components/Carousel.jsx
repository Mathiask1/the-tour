import React, { useState, useEffect } from 'react'
import '../styles/Carousel.css' //will be added later

const Carousel = (props) => {
    const { children } = props

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        } else {
            setCurrentIndex(length-1)
        }
    }

    useEffect(() => {
        setLength(children.length)
    }, [children])

    return (
        <div className="carousel-wrapper">
            <button onClick={prev} className="left-arrow">
                <img src="media/left-arrow.png" alt="buttonpng" border="0" width="40" />
            </button>
            <div className="carousel-content-wrapper">
                <div
                    className="carousel-content"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {children}
                </div>
            </div>
            <button onClick={next} className="right-arrow">
                <img src="media/right-arrow.png" alt="buttonpng" border="0" width="40" />
            </button>
        </div>
    )
}

export default Carousel
