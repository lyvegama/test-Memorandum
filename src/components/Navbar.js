import { Typography, Button } from "@material-tailwind/react";
import logo from "../assets/logo-gray.png";

const Nav = () => {
  return (
    <div className="px-4 mx-auto bg-blue-700">
      <a class="navbar-brand" href="/">
        <img src={logo} className="nav-img"/>
      </a>
      <div className="container mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <span>DEMO Streaming</span>
        </Typography>
        <div className="flex-row-reverse">
        <span>Login in</span>
        <Button className="bg-gray-900 hidden m-5 lg:inline-block">
          <span>Start your free trial</span>
        </Button>
      </div>
      </div>
    </div>
  );
};

export default Nav;
