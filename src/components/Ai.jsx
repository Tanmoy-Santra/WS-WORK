import React from 'react'
import LiquidEther from './LiquidEther';
import { FaMicrophone } from "react-icons/fa";
const Ai = () => {
  return (

<div className="h-20 w-20 fixed bottom-28 right-8 bg-black z-50 rounded-full">
  <div className="relative h-20 w-20">

    {/* Liquid circle */}
    <LiquidEther
      className="h-20 w-20 rounded-full"
      colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
      mouseForce={20}
      cursorSize={70}
      isViscous
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={1000}
      autoRampDuration={0.6}
      color0="#5227FF"
      color1="#FF9FFC"
      color2="#B19EEF"
    />

    {/* Mic centered on both circles */}
    <div className="absolute inset-0 flex items-center justify-center z-50">
      <FaMicrophone size={36} className="text-white" />
    </div>

  </div>
</div>

  )
}

export default Ai
