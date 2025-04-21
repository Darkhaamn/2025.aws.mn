import { FC } from "react";
import { AWSIcon } from "./icons";

const Logo: FC = () => {
  return (
    <a href="/" className="flex items-center space-x-2">
      <AWSIcon />
      <span className="inline-block font-semibold">
        Community <span className="text-primary">Mongolia</span>
      </span>
    </a>
  );
};
export default Logo;
