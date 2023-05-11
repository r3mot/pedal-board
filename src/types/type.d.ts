import * as Tone from "tone";
import * as React from "react";
import { MediaInput } from "./MediaInput";
export type PedalEffect =
  | Tone.AutoFilter!
  | Tone.AutoPanner
  | Tone.BitCrusher
  | Tone.Chorus
  | Tone.Chebyshev
  | Tone.Distortion
  | Tone.FeedbackDelay
  | Tone.Freeverb!
  | Tone.JCReverb
  | Tone.Phaser
  | Tone.PingPongDelay
  | Tone.Reverb
  | Tone.StereoWidener
  | Tone.Tremolo
  | Tone.Vibrato;

export type KnobType = (value: number) => void;
export interface PedalProps {
  player: Tone.Player;
}

export interface IContextProps {
  children: React.ReactNode;
}

export type MediaSource = Tone.Player | Tone.UserMedia | undefined;

export interface IMediaContextProps {
  source?: MediaSource;
  setSource: React.Dispatch<React.SetStateAction<MediaSource | undefined>>;
  hasPermission: boolean;
  setHasPermission: React.Dispatch<React.SetStateAction<boolean>>;
  mediaSources: MediaInput[];
}

export interface IChainContextProps {
  pedalChain: Tone.ToneAudioNode[];
  setPedalChain: React.Dispatch<React.SetStateAction<Tone.ToneAudioNode[]>>;
}

export type AudioNode = Tone.ToneAudioNode;
