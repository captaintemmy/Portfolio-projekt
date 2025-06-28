'use client'

import TextPressure from '../components/TextPressure';
import RotatingText from '../components/RotatingText';
import ParticleBg from '../components/ParticleBg';
import Image from 'next/image';
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      {/* Particle background behind everything */}
      <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full">
        <ParticleBg
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Sticky, Centered Navbar/Header */}
      <header className="flex justify-center items-center gap-8 py-2 mb-8 sticky top-0 z-50 bg-black/80 backdrop-blur-md rounded-2xl shadow-lg">
        <a
          className="text-lg font-mono text-white px-3 py-1 rounded transition duration-200 hover:bg-white hover:text-black"
          href="https://fortnite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="text-lg font-mono text-white px-3 py-1 rounded transition duration-200 hover:bg-white hover:text-black"
          href="https://fortnite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Projects
        </a>
        <a
          className="text-lg font-mono text-white px-3 py-1 rounded transition duration-200 hover:bg-white hover:text-black"
          href="https://fortnite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          News
        </a>
      </header>

      <div style={{ position: 'relative' }}>
        <TextPressure
          text="Aleksander Syre"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      <div className="flex-grow flex-col grid grid-cols-2 items-center text-center">
        <div>
          <Image
            src="/Portfolio backround.png"
            alt="Portfolio"
            style={{ objectFit: 'cover' }}
            width={500}
            height={500}
            blurDataURL="data:..."
            placeholder="blur"
          />
        </div>
        <div className="text-2xl font-mono">
          <h1>
            Hello i am Aleksander Syre a:
          </h1>
          <RotatingText
            texts={['Frontend Developer', 'Prompt Engineer', 'Designer', 'Ux and UI Wizard']}
            mainClassName="px-2 sm:px-2 md:px-3 text-3xl text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>
    </div>
  );
}