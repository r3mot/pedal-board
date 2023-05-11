import { useEffect, useRef, useState } from "react";
import { usePedalChain } from "./usePedalChain";
import { Volume, Destination, Signal } from "tone";

export const useVolume = () => {
  const { add } = usePedalChain();
  const [volumeValue, setVolumeValue] = useState(Destination.volume.value);

  const ref = useRef<Volume>();

  useEffect(() => {
    if (!ref.current) {
      const signal = new Signal(0);
      ref.current = new Volume(-10);
      ref.current.connect(signal);
      ref.current.volume.set({ value: volumeValue });
      add(ref.current);
    }
  }, []);

  const setVolume = (value: number) => {
    setVolumeValue(value);
    console.log(value);
    ref.current?.volume.set({ value: value });
  };

  const activate = () => {
    ref.current?.volume.rampTo(volumeValue, 0.6, 0);
  };

  const bypass = () => {
    ref.current?.volume.set({ value: -10 });
  };

  return {
    volume: {
      value: volumeValue,
      setVolume,
      bypass,
      activate,
      ref,
    },
  };
};
