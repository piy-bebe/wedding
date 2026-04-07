'use client';
import { useState, useRef, useEffect } from 'react';

import Promo from '@/components/promo';
import Hero from '@/components/hero';
import Address from '@/components/address';
import Info from '@/components/info';
import DressCode from '@/components/dresscode';
import Timer from '@/components/timer';
import Footer from '@/components/footer';

export default function Home() {
  const [hiding, setHiding] = useState(false);
  const [hidden, setHidden] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (hidden && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Браузер заблокировал автовоспроизведение
      });
    }
  }, [hidden]);

  const handleClose = () => {
    setHiding(true);
    setTimeout(() => setHidden(true), 800);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/background.mp3" loop />

      {!hidden && <Promo handleClose={handleClose} hiding={hiding} />}
      {hidden && (
        <>
          <Hero /> <Address /> <Info /> <DressCode />
          {/* <Timer /> <Footer /> */}
        </>
      )}
    </>
  );
}
