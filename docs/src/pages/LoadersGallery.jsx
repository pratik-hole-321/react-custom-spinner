import {
  RotatingSquare,
  CircleLoader,
  BarsLoader,
  DotsWave,
  DualRing,
  FadingDots,
  GrowingBars,
  PulseCircle,
  RippleLoader,
  BlinkingLoader,
  BounceCircleLoader,
  CubeBounceLoader,
  FlipDotLoader,
  HeartbeatLoader,
  PuffLoader,
  PulseSquareLoader,
  RingBounceLoader,
  RipplePulseLoader,
  ShimmerLineLoader,
  SlideInBarsLoader,
  SpinBubbleLoader,
  SpinDotsLoader,
  StretchBarLoader,
  TunnelSpinner,
  ZigZagLoader,
} from "../../../src"; // live import
import "./LoadersGallery.css";

const loaders = [
  {
    name: "Circle Loader",
    component: <CircleLoader loading size="60px" color="orange" />,
  },
  {
    name: "Rotating Square",
    component: <RotatingSquare loading size="50px" color="orange" />,
  },
  {
    name: "Bars Loader",
    component: <BarsLoader loading size="20px" color="orange" />,
  },
  {
    name: "Dots Wave",
    component: <DotsWave loading size="15px" color="orange" />,
  },
  {
    name: "Dual Ring",
    component: <DualRing loading size="40px" color="orange" />,
  },
  {
    name: "Fading Dots",
    component: <FadingDots loading color="orange" />,
  },
  {
    name: "Growing Bars",
    component: <GrowingBars loading size="50px" color="orange" />,
  },
  {
    name: "Ripple Loader",
    component: <RippleLoader loading size="60px" color="orange" />,
  },
  {
    name: "Pulse Circle",
    component: <PulseCircle loading size="50px" color="orange" />,
  },
  {
    name: "Blinking Loader",
    component: <BlinkingLoader loading size="15px" color="orange" />,
  },
  {
    name: "Bounce Circle Loader",
    component: <BounceCircleLoader loading size="15px" color="orange" />,
  },
  {
    name: "Cube Bounce Loader",
    component: <CubeBounceLoader loading size="15px" color="orange" />,
  },
  {
    name: "Flip Dot Loader",
    component: <FlipDotLoader loading size="40px" color="orange" />,
  },

  {
    name: "Puff Loader",
    component: <PuffLoader loading size="40px" color="orange" />,
  },
  {
    name: "Pulse Square Loader",
    component: <PulseSquareLoader loading size="40px" color="orange" />,
  },
  {
    name: "Ring Bounce Loader",
    component: <RingBounceLoader loading size="50px" color="orange" />,
  },
  {
    name: "Ripple Pulse Loader",
    component: <RipplePulseLoader loading size="50px" color="orange" />,
  },
  {
    name: "Shimmer Line Loader",
    component: (
      <ShimmerLineLoader loading width="120px" height="5px" color="orange" />
    ),
  },
  {
    name: "SlideInBars Loader",
    component: <SlideInBarsLoader loading size="10px" color="orange" />,
  },
  {
    name: "Spin Bubble Loader",
    component: <SpinBubbleLoader loading size="50px" color="orange" />,
  },
  {
    name: "SpinDots Loader",
    component: <SpinDotsLoader loading size="10px" color="orange" />,
  },
  {
    name: "StretchBar Loader",
    component: <StretchBarLoader loading size="40px" color="orange" />,
  },
  {
    name: "Tunnel Spinner",
    component: <TunnelSpinner loading size="40px" color="orange" />,
  },
  {
    name: "ZigZag Loader",
    component: <ZigZagLoader loading size="10px" color="orange" />,
  },
  {
    name: "Heartbeat Loader",
    component: <HeartbeatLoader loading size="30px" color="orange" />,
  },
];

const LoadersGallery = () => (
  <div className="main-section">
    <div className="content">
      <h2>Loaders Gallery</h2>
      <div className="gallery-grid">
        {loaders.map((loader, index) => (
          <div className="loader-card" key={index}>
            <div className="loader-wrapper">{loader.component}</div>
            <div className="loader-name">{loader.name}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LoadersGallery;
