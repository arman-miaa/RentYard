import logo from "../assets/logo.jpg";

const Navbar = ({ step }) => {
  return (
    <div className="border-b border-base-300">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <img className="text-xl cursor-pointer" src={logo} alt="logo" />
        </div>
        <div className="flex-none">
          <button className="btn btn-sm font-bold">
            {step === 1 ? "Exit" : "Save & Exit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
