import { MouseParallax } from "react-just-parallax";

export default function MyComponent () {
    return (
  <>
    <MouseParallax  
    strength={0.015}
    lerpEase= {0.8}
    >
      
      <p>I'm reacting to mouse move</p>
    </MouseParallax>
    </>
);
}