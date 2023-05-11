import { createContext, useState, useContext } from "react";
import { IChainContextProps, AudioNode, IContextProps } from "../types/type";

const PedalChainContext = createContext<IChainContextProps>({
  pedalChain: [],
  setPedalChain: () => {},
});

export const PedalChainProvider = ({ children }: IContextProps) => {
  const [pedalChain, setPedalChain] = useState<AudioNode[]>([]);

  return (
    <PedalChainContext.Provider
      value={{
        pedalChain,
        setPedalChain,
      }}
    >
      {children}
    </PedalChainContext.Provider>
  );
};

export const useChainProvider = () => useContext(PedalChainContext);
