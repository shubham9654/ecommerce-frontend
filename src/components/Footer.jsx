import { Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"

const Footer = () => {
  return (
    <div className="flex">
      <div className="flex-[1] flex flex-col p-5">
        <h1 className="text-3xl font-bold">Ecom</h1>
        <div className="my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto saepe facilis ab. Praesentium, beatae? Nobis nulla consequatur magni tempora.
        </div>
        <div className="flex">
          <span className="flex items-center justify-center mr-5 w-10 h-10 rounded-full text-white bg-[#3b5999]">
            <Facebook />
          </span>
          <span className="flex items-center justify-center mr-5 w-10 h-10 rounded-full text-white bg-[#e4405f]">
            <Instagram />
          </span>
          <span className="flex items-center justify-center mr-5 w-10 h-10 rounded-full text-white bg-[#55acee]">
            <Twitter />
          </span>
          <span className="flex items-center justify-center mr-5 w-10 h-10 rounded-full text-white bg-[#e60023]">
            <Pinterest />
          </span>
        </div>
      </div>
      <div className="flex-[1] p-5">
        <h3 className="text-xl font-bold mb-6">Useful Links</h3>
        <ul className="flex flex-wrap">
          <li className="w-1/2">Home</li>
          <li className="w-1/2">Cart</li>
          <li className="w-1/2">Man Fashion</li>
          <li className="w-1/2">Women Fashion</li>
          <li className="w-1/2">Home</li>
          <li className="w-1/2">Cart</li>
          <li className="w-1/2">Man Fashion</li>
          <li className="w-1/2">Women Fashion</li>
        </ul>
      </div>
      <div className="flex-[1] p-5">
        <h3 className="text-xl font-bold mb-5">Contact</h3>
        <div className="mb-2.5">
          <Room className="mr-2.5 flex" />
          Lorem ipsum, dolor sit amet consectetur adip
        </div>
        <div className="mb-2.5 flex">
          <Phone className="mr-2.5" />
          +31 45454
        </div>
        <div className="mb-2.5 flex">
          <Email className="mr-2.5" />
          abc@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Footer;
