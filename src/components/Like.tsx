import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const handleClick = () => {
    setFillHeart(!fillHeart);
    onClick();
  };
  const [fillHeart, setFillHeart] = useState(false);
  if (fillHeart) {
    return <BsHeartFill size={40} color="#ff6b81" onClick={handleClick} />;
  } else {
    return <BsHeart size={40} color="#ff6b81" onClick={handleClick} />;
  }
};

export default Like;
