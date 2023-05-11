import { useEffect, useRef, useState } from "react";
import { usePedalChain } from "./usePedalChain";
import { Freeverb, Signal } from "tone";

export const useFreeverb = () => {
  const { add } = usePedalChain();
  const [roomSize, setRoomSize] = useState(0);
  const [mixAmount, setMixAmount] = useState(0);

  const ref = useRef<Freeverb>();

  useEffect(() => {
    if (!ref.current) {
      const signal = new Signal(0);
      ref.current = new Freeverb();
      ref.current.connect(signal);
      ref.current.wet.set({ value: mixAmount });
      ref.current.roomSize.set({ value: roomSize });
      add(ref.current);
    }
  }, []);

  const setRoom = (value: number) => {
    setRoomSize(value / 100);
    ref.current?.roomSize.set({ value: value / 100 });
  };

  const setMix = (value: number) => {
    setMixAmount(value / 100);
    // ref.current?.wet.set({ value: value / 100 });
    ref.current?.wet.rampTo(value / 100, 0.1, 0);
  };

  const activate = () => {
    ref.current?.wet.rampTo(mixAmount, 0.6, 0);
  };

  const bypass = () => {
    ref.current?.wet.set({ value: 0 });
  };

  return {
    freeverb: {
      roomSize,
      mixAmount,
      setRoom,
      setMix,
      bypass,
      activate,
      ref,
    },
  };
};
