import styles from '../styles/Work.module.css'
import React, { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from "@chakra-ui/react"
import { headings } from '../Constants/userinfo'

export const CarouselItem = ({ children, width, currentTheme }) => {
  return (
    <div
      className={styles.carouselItem}
      style={{ width: width, backgroundColor: currentTheme.secondary }}
    >
      {children}
    </div>
  );
};

const Carousel = ({ children, currentTheme }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isSmall] = useMediaQuery("(max-width: 1200px)");
  const [isVerySmall] = useMediaQuery("(max-width: 800px)");
  const touchStartX = useRef(null);

  const dividingFactor = isSmall ? (isVerySmall ? 1 : 2) : 3;
  const totalItems = React.Children.count(children);
  const arrayLength = Math.ceil(totalItems / dividingFactor);
  const repeat = Array.from({ length: arrayLength }, (_, i) => i);

  // Reset index if layout changes (e.g. resizing from 3 columns to 1)
  useEffect(() => {
    setActiveIndex(0);
  }, [dividingFactor]);

  // Auto-advance every 3s when not paused
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, paused, arrayLength]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = arrayLength - 1;
    } else if (newIndex >= arrayLength) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  // Touch swipe handlers (replace react-swipeable)
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    const threshold = 50; // minimum swipe distance

    if (deltaX > threshold) {
      // swipe right → previous
      updateIndex(activeIndex - 1);
    } else if (deltaX < -threshold) {
      // swipe left → next
      updateIndex(activeIndex + 1);
    }

    touchStartX.current = null;
  };

  return (
    <div
      className={styles.carousel}
      id="blogs"
      style={{ backgroundColor: currentTheme.secondary }}
      data-aos="fade-up"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.blogHeading}>{headings.blogs}</div>

      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            width: isSmall ? (isVerySmall ? '100%' : '50%') : '33.33%',
          })
        )}
      </div>

      <div className={styles.indicators}>
        <button onClick={() => updateIndex(activeIndex - 1)}>
          &lt;
        </button>

        {repeat.map((dot, index) => (
          <button
            key={dot}
            className={index === activeIndex ? styles.active : ""}
            onClick={() => updateIndex(index)}
          >
            &bull;
          </button>
        ))}

        <button onClick={() => updateIndex(activeIndex + 1)}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
