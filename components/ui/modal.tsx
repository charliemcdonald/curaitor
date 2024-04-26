import React from "react";
import curator from '@/src/curator.png'

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    <button
        className= "z-40 bg-transparent border-2 border-gray-300 text-gray-500 px-5 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
    >
        ?
    </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none popin"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-center">
                  
                  <button
                    className=" bg-black border-0 text-white rounded-full float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none relative bottom-[0.3rem]">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex">
                    <img src={curator.src} className="h-[350px] absolute bottom-[-97px] left-0 rounded-xl" loading="eager"/>
                    <div id="textbox" className="bg-amber-100 w-[75%] ml-auto rounded-xl">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed ml-auto px-10">
                            <span className="text-3xl font-semibold ml-auto w-3/4 relative">Welcome to my Museum...</span><br/>
                            ...unfortunately I have just been informed one of the paintings that hangs in the gallery is a forgery! 
                            It has been created by a generative AI replicating the Renaissance artwork of humans.
                            I will not allow such paintings in my museum. Please, find it and dispose of it!
                        </p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                 
                  <button
                    className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}