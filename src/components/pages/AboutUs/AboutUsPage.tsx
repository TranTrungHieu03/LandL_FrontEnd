import red_truck from "../../../assets/images/home/red-line.jpg";
import green_truck from "../../../assets/images/home/truck-green.jpg";
import purple_truck from "../../../assets/images/home/truck-purple.jpg";

const AboutUsPage = () => {
  return (
    <div className="bg-white mt-5 w-full grid grid-cols-2 items-center mb-5">
      <div
        className="relative flex justify-center items-center col-span-1 justify-self-end"
        style={{ width: "550px", height: "450px" }}
      >
        {/* Orange border outline */}
        <div
          className="absolute border-4 border-orange-500 mr-20"
          style={{ width: "400px", height: "400px" }}
        ></div>

        {/* Top-left image */}
        <div className="absolute top-0 left-0">
          <img
            src={red_truck}
            alt="Red truck"
            className="w-60 h-42 rounded-md"
          />
        </div>

        {/* Center image */}
        <div className="relative">
          <img
            src={purple_truck}
            alt="Purple truck"
            className="w-[350px] h-[200px] rounded-md"
          />
        </div>

        {/* Bottom-left image */}
        <div className="absolute bottom-0 left-0">
          <img
            src={green_truck}
            alt="Green truck"
            className="w-60 h-44 rounded-md"
          />
        </div>
      </div>

      {/* Right section with text */}
      <div className="col-span-1 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-orange-500 font-semibold text-xl mb-2">
          Our story
        </h2>
        <h1 className="text-3xl font-bold mb-4">ABOUT L&L</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Welcome to Leopard Lorry (L&L), a pioneering force in the transport industry, driven by a passion for improving domestic logistics. "Leopard" harnesses the power of the sharing economy to create an innovative platform that optimizes transportation efficiency across Vietnam.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          With a vision to transform the way goods are moved, "Leopard's" platform connects shippers with a network of reliable carriers, ensuring fast, reliable, and cost-effective delivery solutions.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Benefits for drivers and businesses: "Leopard" offers drivers the opportunity to increase their income through flexible loads, optimizing their time and effort, along with dedicated support via a modern app. For businesses, accessing a vast transport network helps reduce costs and optimize supply chains, while effectively expanding business capabilities.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Join "Leopard" on the journey to redefine transport. Experience the future of logistics with Leopard Lorry and discover how we can drive success together.
        </p>
        <div className="flex justify-end">
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
