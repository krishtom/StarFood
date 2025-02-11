
import { assets } from "../../assets/assets"
import './appdownload.css'



const AppDownload = () => {
    return (
       <div  className=" w-full mt-8  " id="aboutus">
        <h4 className="text-2xl ">About us </h4>
  <div className="flex flex-row justify-between w-[80%]  items-center  md:space-y-0 ">
    
        <p className="text-gray-500 width-[80%] ">Hey there! We are the Tastebud Explorers at <span className="font-bold">Star Food</span>, ready to guide you on your next culinary adventure  
            We are a community of food lovers dedicated to sharing delicious recipes and dellivery inspiration.
        </p>
        <img className="w-1/3 ml-8" src={assets.logo} alt="" />
    </div>

  <div className="w-[100%]  mt-8">
    <h6 className="text-2xl my-2">Review from our customers :-</h6>
    <p className="text-gray-500">Amazing reviews from our customers. We love hearing from all of them!</p>

    <div className=" width-[100%] flex flex-col md:flex-row gap-4 my-4">
     

      <div className=" rounded shadow-md bg-white text-center p-4  ">
        <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto"></div>
        <h5 className="mt-4">Monika</h5>
        <p className="italic text-gray-600 mt-2">The perfect blend of taste and presentation. A truly unforgettable experience!</p>
      </div>

      <div className="text-center p-4 rounded shadow-md bg-white">
        <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto"></div>
        <h5 className="mt-4">Richa</h5>
        <p className="italic text-gray-600 mt-2">Truly outstanding taste and service to Customer. Highly recommend!</p>
      </div>

      <div className="text-center p-4 rounded shadow-md bg-white">
        <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto"></div>
        <h5 className="mt-4">Jyoti</h5>
        <p className="italic text-gray-600 mt-2">The meals were absolutely delicious! Fresh ingredients and perfectly seasoned.</p>
      </div>

      <div className="text-center p-4 rounded shadow-md bg-white ">
        <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto"></div>
        <h5 className="mt-4">Deepak</h5>
        <p className="italic text-gray-600 mt-2">Every dish was a delight. Can't wait to order again!</p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-[30%] mx-auto my-24">
    <h6 className="text-2xl my-4">Love to hear from you:-</h6>
    <div className="flex items-center">
      <input type="text" className="w-full bg-white border rounded p-2 shadow-md" placeholder="Give your feedback" />
      <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2">
        <span>Submit</span>
        <img src={assets.arrow_right} alt="" />
      </button>
    </div>
  </div>
</div>


    )
}

export default AppDownload
