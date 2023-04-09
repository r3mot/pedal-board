import { useRef, useState } from "react";
import { usePedalChain } from "./usePedalChain";
import { Distortion } from "tone";
import { Source } from "../types";

export const useDistorion = () => {
  const { add, remove } = usePedalChain();
  const [distAmount, setDistAmount] = useState(0);
  const [mixAmount, setMixAmount] = useState(0);

  const ref = useRef<Source<Distortion>>();

  const setDistortion = (value: number) => {
    setDistAmount(value / 100);
    ref.current?.effect.set({ distortion: value / 100 });
  };

  const setMix = (value: number) => {
    setMixAmount(value / 100);
    ref.current?.effect.wet.set({ value: value / 100 });
  };

  const activate = () => {
    ref.current = new Source({
      id: 1,
      effect: new Distortion(),
    });

    ref.current.effect.wet.set({
      value: mixAmount,
    });
    ref.current.effect.set({ distortion: distAmount });
    add(ref.current);
  };

  const bypass = () => {
    ref.current?.effect.dispose();
    remove(ref.current);
  };

  return {
    distortion: {
      distAmount,
      mixAmount,
      setDistortion,
      setMix,
      activate,
      bypass,
      ref,
    },
  };
};
