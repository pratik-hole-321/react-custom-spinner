// types/index.d.ts

import * as React from "react";

export interface CommonProps {
  color?: string;
  loading: boolean;
}

export interface BarsLoaderProps extends CommonProps {}

export interface CircleLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface DotsWaveProps extends CommonProps {
  size?: string;
}

export interface DualRingProps extends CommonProps {
  size?: string;
}

export interface FadingDotsProps extends CommonProps {
  size?: string;
}

export interface GrowingBarsProps extends CommonProps {}

export interface PulseCircleProps extends CommonProps {
  size?: string;
}

export interface RippleLoaderProps extends CommonProps {
  size?: string;
}

export interface RotatingSquareProps extends CommonProps {
  size?: string;
  speed?: number;
}
//color loading
export interface BlinkingLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface BounceCircleLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface CubeBounceLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface FlipDotLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface HeartbeatLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface PuffLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface PulseSquareLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface RingBounceLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface RipplePulseLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}
export interface ShimmerLineLoaderProps extends CommonProps {
  width?: string;
  height?: string;
  bg?: string;
}

export interface SlideInBarsLoaderProps extends CommonProps {
  barWidth?: string;
  barHeight?: string;
}

export interface SpinBubbleLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}
export interface SpinDotsLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}
export interface StretchBarLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface TunnelSpinnerProps extends CommonProps {
  size?: string;
  speed?: number;
}

export interface ZigZagLoaderProps extends CommonProps {
  size?: string;
  speed?: number;
}

export const BarsLoader: React.FC<BarsLoaderProps>;
export const CircleLoader: React.FC<CircleLoaderProps>;
export const DotsWave: React.FC<DotsWaveProps>;
export const DualRing: React.FC<DualRingProps>;
export const FadingDots: React.FC<FadingDotsProps>;
export const GrowingBars: React.FC<GrowingBarsProps>;
export const RippleLoader: React.FC<RippleLoaderProps>;
export const RotatingSquare: React.FC<RotatingSquareProps>;
export const PulseCircle: React.FC<PulseCircleProps>;
export const BlinkingLoader: React.FC<BlinkingLoaderProps>;
export const BounceCircleLoader: React.FC<BounceCircleLoaderProps>;
export const CubeBounceLoader: React.FC<CubeBounceLoaderProps>;
export const FlipDotLoader: React.FC<FlipDotLoaderProps>;
export const HeartbeatLoader: React.FC<HeartbeatLoaderProps>;
export const PuffLoader: React.FC<PuffLoaderProps>;
export const PulseSquareLoader: React.FC<PulseSquareLoaderProps>;
export const RingBounceLoader: React.FC<RingBounceLoaderProps>;
export const RipplePulseLoader: React.FC<RipplePulseLoaderProps>;
export const ShimmerLineLoader: React.FC<ShimmerLineLoaderProps>;
export const SlideInBarsLoader: React.FC<SlideInBarsLoaderProps>;
export const SpinBubbleLoader: React.FC<SpinBubbleLoaderProps>;
export const SpinDotsLoader: React.FC<SpinDotsLoaderProps>;
export const StretchBarLoader: React.FC<StretchBarLoaderProps>;
export const TunnelSpinner: React.FC<TunnelSpinnerProps>;
export const ZigZagLoader: React.FC<ZigZagLoaderProps>;
