import { useRef, useState } from "react";
import { usePedalChain } from "./usePedalChain";
import { Freeverb } from "tone";
import { Source } from "../types";

export const useFreeverb = () => {
  const { add, remove } = usePedalChain();
  const [roomSize, setRoomSize] = useState(0);
  const [mixAmount, setMixAmount] = useState(0);

  const ref = useRef<Source<Freeverb>>();

  const setRoom = (value: number) => {
    setRoomSize(value / 100);
    ref.current?.effect.roomSize.set({ value: value / 100 });
  };

  const setMix = (value: number) => {
    setMixAmount(value / 100);
    ref.current?.effect.wet.set({ value: value / 100 });
  };

  const activate = () => {
    ref.current = new Source({
      id: 0,
      effect: new Freeverb(),
    });
    ref.current.effect.wet.set({ value: mixAmount });
    ref.current.effect.roomSize.set({ value: roomSize });
    add(ref.current);
  };

  const bypass = () => {
    ref.current?.effect.dispose();
    remove(ref.current);
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
