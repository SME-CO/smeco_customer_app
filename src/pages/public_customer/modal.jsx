import React from "react";
import img from "../../assets/bottle1.jpg";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <button
        className="bg-blue-900 text-white active:bg-blue-400 font-bold uppercase text-sm py-2 px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        More Details
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                  <p className="text-xl font-extrabold px-24">
                    Product Details
                  </p>
                </div>

                <div className="relative p-6 flex-auto">
                  <img src={img} className="max-w-xs h-auto px-12"></img>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Shop : Glitters<br></br>
                    Price : Rs 450<br></br>
                    Location : Matale
                    <br></br>
                    Discription : Flexible Smooth Sport Shoe
                  </p>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
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
