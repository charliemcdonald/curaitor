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

      <main className="flex flex-col items-center justify-center p-24 box-border h-screen w-full">
        <h1 className="font-bold text-xl">Museum CurAItor</h1>
        <Gallery />
      </main>
    </div>
  );
}
