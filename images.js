import * as React from 'react';
import { StaticImageData } from 'next/image';
import Oil1 from '@/src/aiOil1.webp'
import Oil2 from '@/src/Oil2.webp'
import Oil4 from '@/src/Oil4.png'
import aiOil5 from '@/src/aiOil5.webp'
import aiOil6 from '@/src/aiOil6.webp'
import aiOil7 from '@/src/aiOil7.webp'
import RealOil1 from '@/src/RealOil1.jpeg'
import RealOil2 from '@/src/RealOil2.jpeg'
import RealOil3 from '@/src/RealOil3.jpeg'
import RealOil4 from '@/src/RealOil4.jpeg'
import RealOil5 from '@/src/RealOil5.jpeg'
import RealOil6 from '@/src/RealOil6.jpeg'
import RealOil7 from '@/src/RealOil7.jpg'
import RealOil8 from '@/src/RealOil8.jpg'
import RealOil9 from '@/src/RealOil9.jpg'
import RealOil10 from '@/src/RealOil10.jpeg'

  
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

const oilAI4 = {
  id: 11,
  image: aiOil5,
  ai: true,
  title: 'AI Generated',
}

const oilAI5 = {
  id: 14,
  image: aiOil6,
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

const oilReal7 = {
  id: 9,
  image: RealOil7,
  ai: false,
  title: 'The Holy Family by Giulio Romano'
}

const oilReal8 = {
  id: 10,
  image: RealOil8,
  ai: false,
  title: 'Lady with an Ermine by Leonardo da Vinci'
}

const oilReal9 = {
  id: 11,
  image: RealOil9,
  ai: false,
  title: 'Christ Pantocrator of Saint Catherine Monastery'
}

const oilReal10 = {
  id: 12,
  image: RealOil10,
  ai: false,
  title: 'Portrait of Ludger Tom Ring the Younger'
}

export default [
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
      oilAI3
    ],
    [
      oilAI4,
      oilReal7,
      oilReal8
    ],
    [
      oilReal9,
      oilReal10,
      oilAI5,
    ]
]