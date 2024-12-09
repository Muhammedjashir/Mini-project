import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {  useNavigate } from "react-router-dom";
const Bar = () => {
  const Navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() =>  {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <button
          className="flex items-center text-gray-700 hover:text-black"
          onClick={() => Navigate("/products")}
        >
          Products
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        
            <button className="flex items-center text-gray-700 hover:text-black" onClick={()=>Navigate('/cart')}>
            Cart 
            </button>
      </Typography>
    </ul>
  );

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.converse.in/media/wysiwyg/oct_30_homepage-03.png?auto=webp&format=png&quality=85')",
      }}
    >
      <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-md bg-opacity-50 px-4 py-2 lg:px-8 lg:py-4 backdrop-blur-md">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="text-lg font-semibold text-gray-800"
          >
            All Star
          </Typography>
          <div className="hidden lg:flex items-center gap-6">
            {navList}
            <Button
              variant="text"
              size="sm"
              className="text-gray-700 hover:text-black focus:ring-2 "
              onClick={() => Navigate("/signin")}
            >
              Sign In
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className=" text-white "
              onClick={() => Navigate("/signup")}
            >
              Sign Up
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-gray-700 hover:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex flex-col gap-2 p-4">
            <Button
              fullWidth
              variant="text"
              size="sm"
              className=""
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className=""
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </div>
        </MobileNav>
      </Navbar>
      <div className="flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-center">
          <Typography
            variant="h3"
            color="gray-900"
            className="mb-4 font-semibold"
          >
            Welcome to All Star
          </Typography>
          <p className="text-gray-700">
            Discover our exclusive collection of footwear and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bar;
