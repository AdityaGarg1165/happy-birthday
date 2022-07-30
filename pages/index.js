import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import ConfettiGenerator from "confetti-js";
export default function Home() {
  function showConfetti(){
    const confettiSettings = { target: 'my-canvas' ,max:600,clock:50,size:1.2};
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render(); 
    return
    // return () => confetti.clear();
  }
  return (
    <div className={styles.container}>
      <Script src='/script.js'></Script>
      <Head>
        <title>Happy Birthday!</title>
        <meta name="description" content="Happy Birthday" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div onMouseMove={showConfetti} className={styles.card}>
      <div className={styles.outside}>
        <div className={styles.front}>
          <p>Happy Birthday<br/>Click Me!</p>
          <div className={styles.cake}>
            <div className={styles.toplayer}></div>
            <div className={styles.middlelayer}></div>
            <div className={styles.bottomlayer}></div>
            <div className={styles.candle}></div>
          </div>
        </div>
        <div className="back"></div>
      </div>
      <div className={styles.inside}>
        <p>Wishing you a very happy birthday Papa<br/>-Aditya Garg</p>
        <h1>&#127873;</h1>
      </div>
    </div>
      <canvas id="my-canvas"></canvas>
    </div>
  )
}
