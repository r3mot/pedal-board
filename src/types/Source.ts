import { ToneWithContextOptions } from "tone/build/esm/core/context/ToneWithContext";

interface SourceProps<T> {
  id: number;
  effect: T;
}

export class Source<T extends ToneWithContextOptions> {
  id: number;
  effect: T;
  constructor({ id, effect }: SourceProps<T>) {
    this.id = id;
    this.effect = effect;
  }
}
