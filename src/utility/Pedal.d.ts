interface PedalProps {
  title: string;
  knobs: {
    min: number;
    max: number;
    initial: number;
    change: KnobType;
    name: string;
  }[];
  activate: () => void;
  bypass: () => void;
}
