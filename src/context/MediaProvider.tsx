import { createContext, useState, useContext, useEffect } from "react";
import { IContextProps, IMediaContextProps, MediaSource } from "../types/type";
import { shortLabel } from "../utility";
import { MediaInput } from "../types/MediaInput";
import sample from "../../public/test-track.wav";
import sample2 from "../../public/test-track-2.wav";
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

  const addMediaSources = () => {
    UserMedia.enumerateDevices().then((devices) => {
      devices.forEach((device) => {
        if (device.kind === "audioinput") {
          addMediaSource(new MediaInput(device, shortLabel(device.label)));
        }
      });
    });
  };

  useEffect(() => {
    addMediaSource(new MediaInput(sample, "Guitar Sample"));
    addMediaSource(new MediaInput(sample2, "Guitar Sample - 2"));
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
