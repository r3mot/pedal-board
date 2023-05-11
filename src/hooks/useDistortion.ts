import { useEffect, useRef, useState } from "react";
import { usePedalChain } from "./usePedalChain";
import { Distortion, Signal } from "tone";

export const useDistorion = () => {
  const { add } = usePedalChain();
  const [distAmount, setDistAmount] = useState(0);
  const [mixAmount, setMixAmount] = useState(0);

  const ref = useRef<Distortion>();

  useEffect(() => {
    if (!ref.current) {
      const signal = new Signal(0);
      ref.current = new Distortion();
      ref.current.connect(signal);
      ref.current.set({ distortion: distAmount });
      ref.current.wet.set({ value: mixAmount });
      add(ref.current);
    }
  }, []);

  const setDistortion = (value: number) => {
    setDistAmount(value / 100);
    ref.current?.set({ distortion: value / 100 });
  };

  const setMix = (value: number) => {
    setMixAmount(value / 100);
    ref.current?.wet.rampTo(value / 100, 0.6, 0);
  };

  const activate = () => {
    ref.current?.wet.rampTo(mixAmount, 0.6, 0);
  };

  const bypass = () => {
    ref.current?.wet.set({ value: 0 });
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
