import { useCallback, useEffect, useRef } from "react";
import { KnobType } from "../../types/type";
import "../pedals/pedal.css";

interface KnobProps {
  min: number;
  max: number;
  initial: number;
  change: KnobType;
  name: string;
}

export const Knob = ({ min, max, initial, change, name }: KnobProps) => {
  const knobRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    change(Number(target.value));
  }, []);

  useEffect(() => {
    knobRef.current?.addEventListener("input", handleChange);
    return () => knobRef.current?.removeEventListener("input", handleChange);
  }, []);

  return (
    <div className='pedal-controls-knob'>
      <input
        type='range'
        ref={knobRef}
        min={min}
        max={max}
        defaultValue={initial}
        className='input-knob'
        data-src='/knob08.png'
        data-sprites='100'
      />
      <h3 className='control-title'>{name}</h3>
    </div>
  );
};
