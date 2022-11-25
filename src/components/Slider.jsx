import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { sliderItems } from "../utils/data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (side) => {
    if (side === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  console.log(slideIndex)

  return (
    <div className="h-screen w-full relative overflow-hidden">
      <span
        className="w-12	h-12 bg-slate-300 rounded-full flex items-center justify-center absolute top-0 bottom-0 left-2.5 m-auto	cursor-pointer z-50 opacity-50"
        onClick={() => handleClick("left")}
      >
        <ArrowLeftOutlined />
      </span>

      {
        sliderItems.length > 0 ? (
          <div className="flex h-full w-full" style={{ transform: `translateX(${slideIndex * -100}vw)`, transition: "all 1.5s ease" }}>
            {
              sliderItems.map((el) => (
                <div key={el.id} className={`flex items-center h-screen bg-[#f5fafd] bg-[${el.bg}]`} style={{minWidth: "100vw"}}>
                  <div className="w-2/4 h-full flex justify-center">
                    <img className="h-[85%]" alt="slider_image" src={el.img} />
                  </div>
                  <div lassName="w-2/4 p-12">
                    <div className="font-bold text-7xl uppercase">{el.title}</div>
                    <p className="uppercase my-12 text-xl font-medium break-all	w-4/5">{el.desc}</p>
                    <button className="p-2.5 cursor-pointer text-x 0l bg-transparent uppercase border-2 border-solid border-slate-500	">shop Now</button>
                  </div>
                </div>
              ))
            }
          </div>
        ) : null
      }
      <span
        className="w-12	h-12 bg-slate-300 rounded-full flex items-center justify-center absolute top-0 bottom-0 right-2.5 m-auto cursor-pointer opacity-50"
        onClick={() => handleClick("right")}
      >
        <ArrowRightOutlined />
      </span>
    </div>
  )
}

export default Slider;                                                                                              