'use client';
import {useEffect,useRef} from 'react';

export default function SiteRecitation(){
  const audioRef=useRef(null);

  useEffect(()=>{
    const audio=audioRef.current;
    if(!audio)return;
    audio.volume=.4;
    const start=async()=>{try{await audio.play()}catch{}}
    start();
    const unlock=()=>{if(audio.paused)start()};
    window.addEventListener('pointerdown',unlock,{once:true});
    window.addEventListener('keydown',unlock,{once:true});
    return()=>{window.removeEventListener('pointerdown',unlock);window.removeEventListener('keydown',unlock)};
  },[]);

  return <audio ref={audioRef} src="/audio/038065.mp3" autoPlay preload="auto" className="site-recitation-audio"/>;
}
