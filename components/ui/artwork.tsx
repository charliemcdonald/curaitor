'use client'
import * as React from 'react';
import { StaticImageData } from 'next/image';
import Modal from '@/components/ui/modal'
import 'reactjs-popup/dist/index.css';
import gallieries from '@/images';
import frame2 from '@/src/frame2.png'
import fire from '@/src/fire.gif'
import { ClickAwayListener } from '@mui/material';

var aiSelected = -1;
var previousGallery = -1;

type Art = {
  id: number;
  image: StaticImageData;
  ai: boolean;
  title: string
}

const galleries = gallieries;

export function revealElem(elem : HTMLElement | null) {
  if (elem == null) {
    return;
  }
  elem.classList.remove('absolute');
  elem.classList.remove('opacity-0');
  elem.classList.remove('hidden');
  elem.classList.add('opacity-100');
  elem.classList.add('z-10');
  
}

export function selectArtwork() {
  if (aiSelected == -1) {
    return;
  } else if (aiSelected == 1) {
    revealElem(document.getElementById('resultAI'));
  } else {
    revealElem(document.getElementById('resultReal'));
  }
  
  document.getElementById('gallery')?.classList.add('hidden');
  aiSelected = -1;
}

export function updateResult(card: Art) {
  aiSelected = + card.ai;
  // update summary card
  var img = document.getElementById('resultImg') as HTMLImageElement;
  var title = document.getElementById('resultTitle');
  img.src = card.image.src;
  title!.innerText = card.title;
}
  
export function Artwork(card: Art) {
  console.log(card.title);
  return (
    <div onClick={() => updateResult(card)} className="group relative w-[330px] transition-all md:hover:w-[495px] duration-500">
      <img src={frame2.src} className="relative h-[330px] w-[400px] md:group-hover:h-[495px] md:group-hover:w-[600px] transition-all duration-500"/>
      <img src={card.image.src} className='group h-[250px] w-[200px] absolute top-[40px] right-[65px] object-cover md:group-hover:w-[300px] md:group-hover:h-[375px] md:group-hover:top-[60px] md:group-hover:right-[98px] transition-all duration-500'/>
    </div>
  );
}

export function Result() {
  return (
    <div id="testResultSummary" className="bg-black md:w-2/5 w-full text-white flex flex-col justify-center items-center m-0 md:rounded-r-[2em] max-md:rounded-b-[2em]">
      <div id="spacer" className="p-10">
        <img id='resultImg' src={galleries[0][0].image.src} className="w-[300px] h-[300px] object-cover border-2 border-slate-100"/>
      </div>
      <div id='textSpacer' className="mb-5 text-center">
        <p id="resultTitle" className="mb-5">Test artist</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [gallery, setGallery] = React.useState<Array<Art>>();

  React.useEffect(() => {
    var randint = -1;
    while (randint == previousGallery) {
      randint = Math.floor(Math.random() * galleries.length);
    }
    const cards = galleries[randint];
    setGallery(cards);
  }, []);
  
  if (gallery == null) {
    return;
  }
  return (
    <div id="curaitor" className="flex items-center h-3/4 mt-0">
      <div id="gallery" className="z-40 flex flex-col">
        {/* About / Help Button */}
        
        
        <div className='md:h-[500px] h-full w-screen flex justify-center items-center'>
        <form className="items-center"> {/* Sumbission Form to Select AI art*/}
          <div id="artwork" className="flex flex-col columns-[10rem] md:flex-row md:mt-0 justify-between items-center align-middle md:h-[500px]">
            <input className="peer/art1 hidden" id="art1" type="radio" name="artsel" value="1"></input>
            <label htmlFor="art1" className="drop-shadow-lg brightness-90 rounded-3xl border-2 border-transparent peer-checked/art1:border-2 peer-checked/art1:border-yellow-500 peer-checked/art1:brightness-100">
              <Artwork {...gallery[0]} />
            </label>
            <input className="peer/art2 hidden" id="art2" type="radio" name="artsel" value="2"></input>
            <label htmlFor="art2" className="drop-shadow-lg brightness-90 rounded-3xl border-2 border-transparent peer-checked/art2:border-2 peer-checked/art2:border-yellow-500 peer-checked/art2:brightness-100">
              <Artwork {...gallery[1]}/>
            </label>
            <input className="peer/art3 hidden" id="art3" type="radio" name="artsel" value="3"></input>
            <label htmlFor="art3" className="drop-shadow-lg brightness-90 rounded-3xl border-2 border-transparent peer-checked/art3:border-2 peer-checked/art3:border-yellow-500 peer-checked/art3:brightness-100">
              <Artwork {...gallery[2]}/>
            </label>
          </div>

          <div id="submit" className='flex items-center justify-center'>
            <button type="button" className="text-white bg-black p-3 border-2 block rounded-full border-black" onClick={selectArtwork}>Submit</button>
            <div className='z-40 m-3  mt-7 flex justify-center'>
              <Modal />
            </div>
          </div>
        </form>
        </div>
      </div>
      <div id="resultAI" className="transition-all duration-1000 opacity-0 absolute items-center popin hidden">
        <div className="md:w-[550px] md:h-[350px] drop-shadow-lg bg-slate-100 rounded-[2em] flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl pt-10">You chose the <span className="text-red-600 font-bold">AI artwork</span></h1>
          <h1 className='text-center py-5 text-xl'>This image was generated by DALL-E.<br></br>Try to locate the remaining pieces of AI artwork.</h1>
          <button className="text-white text-xl border-2 rounded-full p-3 border-black bg-black mb-5" onClick={() => window.location.reload()}>Play Again</button> 
        </div>
      </div>
      <div id="resultReal" className="transition-all duration-1000 opacity-0 absolute flex md:flex-row flex-col items-center drop-shadow-lg bg-slate-100 rounded-[2em] popin hidden">
        <div className="my-5 md:w-[550px] md:h-[350px] flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl pt-10">You chose the <span className="text-green-600 font-bold">real artwork</span></h1>
          <h1 className='text-center py-5 text-xl w-3/4'>This image was painted by a human.<br></br>The AI painting still hangs in the museum.</h1>
          <button className="text-white text-xl border-2 rounded-full p-3 border-black bg-black" onClick={() => window.location.reload()}>Play Again</button> 
        </div>
        <Result />
      </div>
    </div>
  );
}