import { useEffect } from "react";
import { getDestination, Player, UserMedia, setContext, Context } from "tone";
import { useMediaProvider } from "../context/MediaProvider";
import { MediaInput } from "../types/MediaInput";

export const useSource = () => {
  const { source, setSource, mediaSources, hasPermission, setHasPermission } =
    useMediaProvider();

  useEffect(() => {
    setContext(new Context({ latencyHint: "interactive" }));
  }, []);

  const init = async (input: MediaInput) => {
    source?.dispose();

    if (typeof input.media === "string") {
      const musicPlayer = new Player({
        url: input.media,
        loop: true,
        autostart: true,
      });
      musicPlayer.chain(getDestination());
      setSource(musicPlayer);
    } else {
      const userMedia = new UserMedia();
      await userMedia.open(input.media.deviceId);
      userMedia.chain(getDestination());
      // userMedia.volume.value = -10;
      setSource(userMedia);
    }
  };

  const getPermission = async () => {
    try {
      const medias = await navigator.mediaDevices.getUserMedia({ audio: true });
      medias.getTracks().forEach((track) => track.stop());
      setHasPermission(true);
    } catch (error) {
      console.error(error);
      setHasPermission(false);
    }
  };

  return {
    source,
    isActive: !!source,
    init,
    mediaSources,
    hasPermission,
    setHasPermission,
    getPermission,
  };
};
