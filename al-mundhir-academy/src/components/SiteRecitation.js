'use client';
import {useEffect,useRef,useState} from 'react';
import {Pause,Play,Volume2} from 'lucide-react';

export default function SiteRecitation(){
  const audioRef=useRef(null);
  const [playing,setPlaying]=useState(false);
  const [blocked,setBlocked]=useState(false);

  useEffect(()=>{
    const audio=audioRef.current;
    if(!audio)return;
    audio.volume=.45;
    const start=async()=>{try{await audio.play();setPlaying(true);setBlocked(false)}catch{setBlocked(true)}};
    start();
    const unlock=()=>{if(audio.paused)start()};
    window.addEventListener('pointerdown',unlock,{once:true});
    window.addEventListener('keydown',unlock,{once:true});
    return()=>{window.removeEventListener('pointerdown',unlock);window.removeEventListener('keydown',unlock)};
  },[]);

  const toggle=async()=>{const audio=audioRef.current;if(audio.paused){try{await audio.play();setPlaying(true);setBlocked(false)}catch{setBlocked(true)}}else{audio.pause();setPlaying(false)}};
  return <div className={`site-recitation ${blocked?'awaiting-play':''}`}><audio ref={audioRef} src="/audio/038065.mp3" autoPlay preload="auto" onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>setPlaying(false)}/><button onClick={toggle} aria-label={playing?'إيقاف التلاوة مؤقتًا':'تشغيل التلاوة القرآنية'}>{playing?<Pause size={18}/>:<Play size={18}/>}<span>{blocked?'اضغط لتشغيل التلاوة':'تلاوة قرآنية'}</span><Volume2 size={16}/></button></div>;
}
