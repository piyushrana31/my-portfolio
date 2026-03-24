import React, { useEffect } from 'react'
import styles from './HackerRoom.module.css'

export default function HackerRoom() {
  useEffect(() => {
    if (!document.getElementById('lottie-player-script')) {
      const script = document.createElement('script');
      script.id = 'lottie-player-script';
      script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.scene}>
      <div className={styles.glassCylinder}>
        
        {/* Reflection highlights */}
        <div className={styles.reflection} />
        
        {/* Real Animated Hacker Lottie */}
        <div style={{ position: 'relative', zIndex: 5, width: '280px', height: '280px', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          {/* Using official Web Component to sandbox animation errors from React tree */}
          <lottie-player 
            src="/hacker.json" 
            background="transparent" 
            speed="1" 
            style={{ width: '100%', height: '100%' }} 
            loop 
            autoplay
          ></lottie-player>
        </div>
        
        {/* Scanning laser line inside cylinder */}
        <div className={styles.scanline} />
      </div>
      
      {/* Floor reflection casting shadow below cylinder */}
      <div className={styles.floorGlow} />
    </div>
  )
}
