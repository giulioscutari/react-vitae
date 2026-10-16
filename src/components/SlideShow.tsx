import { useState } from "react";
import ChevronLeft from "../assets/chevron-left.svg"
import ChevronRight from "../assets/chevron-right.svg"

function SlideShow({ images }: { images: string[] }) {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    function handleClickNext(event){
        if (currentIndex + 1 < images.length){
            setCurrentIndex(currentIndex+1);
        } 
        event?.stopPropagation()
    }
    
    function handleClickPrevious(event){
        if (currentIndex > 0){
            setCurrentIndex(currentIndex-1);
        } 
        event?.stopPropagation()
    }
    
    function handleClickThumbnail(index){
        setCurrentIndex(index)
        setOpen(true)
    }
    const nImages = images.length
    let thumbnails = null
    if (nImages <= 4) {
        thumbnails = images.map((src, index) => <img src={src} className="w-23 h-23 min-w-23 min-h-23 object-cover" key={index} onClick={() => handleClickThumbnail(index)}/>)
    }else{
        let three_images = images.filter((value, index) => index < 3)
        thumbnails = three_images.map((src, index) => <img src={src} className="w-23 h-23 min-w-23 min-h-23 object-cover cursor-pointer border border-slate-600 rounded-2xl shadow-sm" key={index} onClick={() => handleClickThumbnail(index)}/>)
        thumbnails.push(<span className="text-4xl text-center mx-auto my-auto cursor-pointer" onClick={() => handleClickThumbnail(0)}>+{images.length - 3}</span>)

    }``
    return (
    <>
    <div className="grid grid-rows-2 grid-cols-2 gap-2 min-w-48 min-h-48">
        {thumbnails}
    </div>
      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
            {/* onClick={(event) => event.stopPropagation()} */}
          
            <div className="relative">
                { images.map((image, index) => (
                    <img src={image} key={index} className={currentIndex === index ? "": "hidden"}></img>
                ))}
                <img src={ChevronLeft} className="absolute p-2 inset-y-0 left-0 h-10 my-auto mx-3 cursor-pointer scale-125" onClick={handleClickPrevious}/>
                <img src={ChevronRight} className="absolute p-2 inset-y-0 right-0 h-10 my-auto mx-3 cursor-pointer scale-125" onClick={handleClickNext}/>
                {/* <button className="absolute bg-white border rounded-2xl p-2 inset-y-0 left-0 h-10 my-auto mx-3  cursor-pointer" onClick={handleClickPrevious}>Previous</button>
                <button className="absolute bg-white border rounded-2xl p-2 inset-y-0 right-0 h-10 my-auto mx-3  cursor-pointer" onClick={handleClickNext}>Next</button> */}
            </div>
            <span className="text-3xl text-white font-bold">{currentIndex + 1 } / {images.length}</span>
            <button
              onClick={() => setOpen(false)}
              className=" rounded bg-gray-900 px-4 py-2 text-white cursor-pointer"
            >
              Close
            </button>
        </div>
      )}
    </>
  )
}

export default SlideShow;