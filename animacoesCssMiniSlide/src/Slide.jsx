import React from 'react';
import styles from './Slide.module.css';

const Slide = ({slides}) => {

  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef()

  function slidePrev(){
    const {width} = contentRef.current.getBoundingClientRect()
    setPosition(position + width);
  }

  function slideNext(){
    const {width} = contentRef.current.getBoundingClientRect()
    setPosition(position - width);
  }

  return (
    <section className={styles.container}>
      <div className={styles.content} style={{transform:`translateX(${position}px)`} } ref={contentRef}>
                                      
        {slides.map((slide) =>(
          <div key={slide.id} className={styles.item}>{slide.text}</div>
        ))}
      </div>

      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Proximo</button>
      </nav>
    </section>
  )
}

export default Slide;
