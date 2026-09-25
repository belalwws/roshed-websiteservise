'use client';
import {useEffect,useRef} from 'react';

export default function SiteRecitation(){
  const audioRef=useRef(null);

  useEffect(()=>{
    const audio=audioRef.current;
    if(!audio)return;
    audio.volume=.4;
    const events=['touchstart','touchend','pointerdown','click','keydown'];
    const start=async()=>{
      if(!audio.paused)return;
      try{
        await audio.play();
        events.forEach((event)=>window.removeEventListener(event,start,true));
      }catch{}
    };
    start();
    events.forEach((event)=>window.addEventListener(event,start,true));
    return()=>events.forEach((event)=>window.removeEventListener(event,start,true));
  },[]);

  return <audio ref={audioRef} src="/audio/0925.mp3" autoPlay playsInline preload="auto" className="site-recitation-audio"/>;
}
