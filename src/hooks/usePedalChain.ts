import { useEffect } from "react";
import { useChainProvider, useMediaProvider } from "../context";
import { getDestination } from "tone";
import { ToneAudioNode } from "tone";

export const usePedalChain = () => {
  const { pedalChain, setPedalChain } = useChainProvider();
  const { source } = useMediaProvider();

  const addPedal = (pedal: ToneAudioNode) => {
    setPedalChain((value: any) => [...value, pedal]);
  };

  const removePedal = (pedal?: ToneAudioNode) => {
    pedal?.dispose;
  };

  useEffect(() => {
    getDestination().chain(...pedalChain);
  }, [pedalChain, source]);

  return {
    add: addPedal,
    remove: removePedal,
    pedalChain,
  };
};
