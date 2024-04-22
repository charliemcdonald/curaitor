'use client'
import * as React from 'react';
import { StaticImageData } from 'next/image';
import Oil1 from '@/src/Oil1.webp'
import Oil2 from '@/src/Oil2.webp'
import Oil4 from '@/src/Oil4.png'
import RealOil1 from '@/src/RealOil1.jpeg'
import RealOil2 from '@/src/RealOil2.jpeg'
import RealOil3 from '@/src/RealOil3.jpeg'
import RealOil4 from '@/src/RealOil4.jpeg'
import RealOil5 from '@/src/RealOil5.jpeg'
import RealOil6 from '@/src/RealOil6.jpeg'
import frame2 from '@/src/frame2.png'
import frame1 from '@/src/frame1.png'
import ropes from '@/src/ropes.png'
import test from 'node:test';

var aiSelected = -1;
var resultUpdated = -1;

type Art = {
  id: number;
  image: StaticImageData;
  ai: boolean;
  title: string
}

const oilAI1 = {
  id: 0,
  image: Oil2,
  ai: true,
  title: 'AI Generated',
}

const oilAI2 = {
  id: 5,
  image: Oil4,
  ai: true,
  title: 'AI Generated',
}

const oilAI3 = {
  id: 8,
  image: Oil1,
  ai: true,
  title: 'AI Generated',
}

const oilReal1 = {
  id: 1,
  image: RealOil1,
  ai: false,
  title: 'The Beggars by Pieter Bruegel',
}

const oilReal2 = {
  id: 2,
  image: RealOil2,
  ai: false,
  title: 'The Arnolfini Portrait by Jan van Eyck',
}

const oilReal3 = {
  id: 3,
  image: RealOil3,
  ai: false,
  title: 'Unconscious Patient by Rembrandt',
}

const oilReal4 = {
  id: 4,
  image: RealOil4,
  ai: false,
  title: 'St. George & the Dragon by Uccello',
}

const oilReal5 = {
  id: 6,
  image: RealOil5,
  ai: false,
  title: 'Saint Jerome in his Study by Antonello da Messina',
}

const oilReal6 = {
  id: 7,
  image: RealOil6,
  ai: false,
  title: 'Saint Lucy by Francesco del Cossa',
}

const testGallery = [
  oilAI1,
  oilReal1,
  oilReal2,
]

const galleries = [
  [
    oilAI1,
    oilReal1,
    oilReal2,
  ],
  [
    oilReal6,
    oilAI2,
    oilReal4,
  ],
  [
    oilReal3,
    oilReal5,
    oilAI3,
  ],
]

export function revealElem(elem : HTMLElement | null) {
  if (elem == null) {
    return;
  }
  elem.classList.remove('absolute');
  elem.classList.remove('opacity-0');
  elem.classList.add('opacity-100');
  elem.classList.add('z-10');
}

export function selectArtwork() {
  if (aiSelected == -1 || resultUpdated == -1) {
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
  console.log(aiSelected);
  aiSelected = + card.ai;
  // update summary card
  var img = document.getElementById('resultImg') as HTMLImageElement;
  var title = document.getElementById('resultTitle');
  img.src = card.image.src;
  title!.innerText = card.title;
  resultUpdated = 1;
  console.log(aiSelected);
}
  
export function Artwork(card: Art) {
  console.log(card.title);
  return (
    <div onClick={() => updateResult(card)} className="group m-4 mt-4 mb-4 relative w-[330px] transition-all hover:w-[495px] duration-500">
      <img src={frame2.src} className="relative h-[330px] w-[400px] group-hover:h-[495px] group-hover:w-[600px] transition-all duration-500"/>
      <img src={card.image.src} className='group h-[250px] w-[200px] absolute top-[40px] right-[65px] object-cover group-hover:w-[300px] group-hover:h-[375px] group-hover:top-[60px] group-hover:right-[98px] transition-all duration-500'/>
    </div>
  );
}

export function Result() {
  return (
    <div id="testResultSummary" className="bg-black w-2/5 text-white flex flex-col justify-center items-center m-0 rounded-r-[2em]">
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
    const randint = Math.floor(Math.random() * galleries.length);
    const cards = galleries[randint];
    setGallery(cards);
  }, []);
  
  if (gallery == null) {
    return;
  }
  return (
    <div id="curaitor" className="flex items-center h-3/4">
      <div id="gallery" className="z-40">
        <form className="items-center"> {/* Sumbission Form to Select AI art*/}
          <div id="artwork" className="flex flex-col md:flex-row md:mt-0 justify-between items-center">
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

          <div id="submit" className='flex flex-col items-center justify-center m-10'>
            <button type="button" className="text-white bg-black p-3 border-2 block rounded-full border-black" onClick={selectArtwork}>Submit</button>
          </div>
        </form>
      </div>
      <div id="resultAI" className="transition-opacity duration-1000 opacity-0 absolute items-center">
        <div className="w-[550px] h-[350px] drop-shadow-lg bg-slate-100 rounded-[2em] flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl pt-10">You chose the <span className="text-red-600 font-bold">AI artwork</span></h1>
          <h1 className='text-center py-5 text-xl'>This image was generated by DALL-E.<br></br>Try to locate the remaining pieces of AI artwork.</h1>
          <button className="text-white text-xl border-2 rounded-full p-3 border-black bg-black" onClick={() => window.location.reload()}>Play Again</button> 
        </div>
      </div>
      <div id="resultReal" className="transition-opacity duration-1000 opacity-0 absolute flex items-center drop-shadow-lg bg-slate-100 rounded-[2em]">
        <div className="m-5 w-[550px] h-[350px] flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl pt-10">You chose the <span className="text-green-600 font-bold">real artwork</span></h1>
          <h1 className='text-center py-5 text-xl w-3/4'>This image was painted by a human.<br></br>The AI painting still hangs in the museum.</h1>
          <button className="text-white text-xl border-2 rounded-full p-3 border-black bg-black" onClick={() => window.location.reload()}>Play Again</button> 
        </div>
        <Result />
      </div>
    </div>
  );
}