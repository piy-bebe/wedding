'use client';
import { useState } from 'react';

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

  const handleClose = () => {
    setHiding(true);
    setTimeout(() => setHidden(true), 800);
  };

  return (
    <>
      {!hidden && <Promo handleClose={handleClose} hiding={hiding} />}
      {hidden && (
        <>
          <Hero /> <Address /> <Info /> <DressCode /> <Timer /> <Footer />
        </>
      )}
    </>
  );
}
