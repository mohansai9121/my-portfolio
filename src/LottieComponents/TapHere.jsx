import { useLottie, useLottieInteractivity } from "lottie-react";
import Tap from "../assets/Lotties/Animation - 1744535554404.json";

const style = {
  height: 300,
};

const options = {
  animationData: Tap,
  loop: true,
  autoplay: true,
};

const TapHere = () => {
  const lottieObj = useLottie(options, style);

  const InteractiveView = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 40],
      },
    ],
  });

  return InteractiveView;
};

export default TapHere;
