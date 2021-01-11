import { motion } from "framer-motion";
import React from "react";

interface CheckIcnProps {}

const icon = {
  hidden: {
    opacity: 0,
    x: "150%",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const CheckIcn: React.FC<CheckIcnProps> = ({}) => {
  return (
    <motion.svg
      height="150px"
      width="150px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      variants={icon}
      initial="hidden"
      animate="visible"
      transition={{
        type: "spring",
      }}
    >
      <path
        fill="#39AC54"
        d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0"
      />
    </motion.svg>
  );
};
export default CheckIcn;
