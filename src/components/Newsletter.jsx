import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <div className="h-[50vh] bg-[#fcf5f5] flex flex-col items-center justify-center">
      <h1 className="text-[70px] font-bold mb-1.5 capitalize ms:text-[60px]">Newsletter</h1>
      <div className="text-2xl font-light mb-5 ms:text-center">Get timely updates from your favorite products.</div>
      <div className="w-2/5 h-[40px] flex items-center justify-cente border border-slate-400 mb-5 ms:w-3/4">
        <input className="w-full h-full flex-[8] focus:outline-none px-2.5 bg-white " placeholder="Your email"/>
        <button className="flex-[2] bg-teal-600 h-full w-full border-2 border-teal-600">
          <Send />
        </button>
      </div>
    </div>
  )
}

export default Newsletter;
