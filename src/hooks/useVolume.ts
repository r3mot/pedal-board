import { useRef, useState } from "react";
import { usePedalChain } from "./usePedalChain";
import { Volume, Destination } from "tone";
import { Source } from "../types";

export const useVolume = () => {
  const { add, remove } = usePedalChain();
  const [volumeValue, setVolumeValue] = useState(Destination.volume.value);

  const ref = useRef<Source<Volume>>();

  const setVolume = (value: number) => {
    setVolumeValue(value / 10);
    ref.current?.effect.volume.set({ value: value / 10 });
  };

  const activate = () => {
    ref.current = new Source({
      id: 0,
      effect: new Volume(-10),
    });
    ref.current.effect.volume.set({ value: volumeValue });
    add(ref.current);
  };

  const bypass = () => {
    ref.current?.effect.dispose();
    remove(ref.current);
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
