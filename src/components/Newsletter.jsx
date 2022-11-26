import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <div className="h-[45vh] bg-[#fcf5f5] flex flex-col items-center justify-center">
      <h1 className="text-[70px] font-bold mb-1.5 capitalize">Newsletter</h1>
      <div className="text-2xl font-light mb-5">Get timely updates from your favorite products.</div>
      <div className="w-1/2 h-[40px] flex items-center justify-center bg-teal-600 border border-slate-400">
        <input className="w-full h-full flex-[8] focus:outline-none px-2.5 bg-white " placeholder="Your email"/>
        <button className="flex-[1] bg-teal-600 h-full w-full">
          <Send />
        </button>
      </div>
    </div>
  )
}

export default Newsletter;
