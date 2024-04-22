import type {Metadata} from 'next'
import Head from 'next/head'
import * as React from 'react';
import Gallery, { selectArtwork } from '@/components/ui/artwork';



export const metadata: Metadata = {
  title: "CurAItor",
  viewport: "initial-scale=1, width=device-width", 
}

export default function Home() {
  return (
    <div className="">
      <Head>
        <meta name="viewport" content="initial-scale=1 width=device-width" />
      </Head>

      <main className="flex flex-col items-center justify-center p-24 box-border h-full md:h-screen w-screen">
        <h1 className="text-8xl text-center">Museum Cur<span className='font-bold bg-gradient-to-tr from-amber-500 to-yellow-300 text-transparent bg-clip-text'>AI</span>tor</h1>
        <h1 className="text-lg text-center pt-5">Can you find the image hanging in the gallery that is <span className="">generated by an AI</span>?</h1>
        <Gallery />
      </main>
    </div>
  );
}
