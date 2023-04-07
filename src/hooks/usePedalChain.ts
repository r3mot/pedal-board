import { useEffect } from "react";
import { useChainProvider } from "../context";
import { Source } from "../types";
import { getDestination } from "tone";
import { ToneAudioNode } from "tone";

export const usePedalChain = () => {
  const { pedalChain, setPedalChain } = useChainProvider();

  const addPedal = (pedal: Source<ToneAudioNode>) => {
    setPedalChain((value: any) =>
      [...value, pedal].sort((a, b) => (a.id < b.id ? -1 : 1))
    );
  };

  const removePedal = (pedal?: Source<ToneAudioNode>) => {
    pedal?.effect.dispose();
    setPedalChain((value) => value.filter((p) => p.id !== pedal?.id));
  };

  useEffect(() => {
    getDestination().chain(...pedalChain.map((p) => p.effect));
  }, [pedalChain]);

  return {
    add: addPedal,
    remove: removePedal,
    pedalChain,
  };
};
