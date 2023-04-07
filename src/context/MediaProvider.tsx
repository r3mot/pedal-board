import { createContext, useState, useContext, useEffect } from "react";
import { IContextProps, IMediaContextProps, MediaSource } from "../types/type";
import { MediaInput } from "../types/MediaInput";
import sample from "../../public/test-track.wav";
import { UserMedia } from "tone";

const MediaSourceContext = createContext<IMediaContextProps>({
  setSource: () => {},
  hasPermission: false,
  setHasPermission: () => {},
  mediaSources: [],
});

export const MediaSourceProvider = ({ children }: IContextProps) => {
  const [source, setSource] = useState<MediaSource>();
  const [hasPermission, setHasPermission] = useState(false);
  const [mediaSources, setMediaSources] = useState<MediaInput[]>([]);

  const addMediaSource = (mediaSource: MediaInput) =>
    setMediaSources((prev) => [...prev, mediaSource]);

  const addSample = () => {
    console.log("adding sample");
    addMediaSource(new MediaInput(sample, "Electric Guitar Sample"));
  };

  const addMediaSources = () => {
    UserMedia.enumerateDevices().then((devices) => {
      devices.forEach((device) => {
        if (device.kind === "audioinput") {
          addMediaSource(new MediaInput(device, device.label));
        }
      });
    });
  };

  useEffect(() => {
    addSample();
  }, []);

  useEffect(() => {
    if (hasPermission) addMediaSources();
  }, [hasPermission]);

  return (
    <MediaSourceContext.Provider
      value={{
        source,
        setSource,
        hasPermission,
        setHasPermission,
        mediaSources,
      }}>
      {children}
    </MediaSourceContext.Provider>
  );
};

export const useMediaProvider = () => useContext(MediaSourceContext);
