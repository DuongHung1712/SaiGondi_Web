'use client';

import React from 'react';

const BlurBackground = () => {
  return (
    <>
    <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: "-220px", left: "-140px" }} />
    <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: "-230px", left: "1170px" }} />
    <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: "700px", left: "-60px" }} />
    <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: "650px", left: "1160px" }} />
    </>
  );
};

export default BlurBackground;
