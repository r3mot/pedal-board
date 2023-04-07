import { v4 as uuidv4 } from "uuid";

export class MediaInput {
  id: string;
  media: MediaDeviceInfo | string;
  name: string;

  constructor(media: MediaDeviceInfo | string, name: string) {
    this.id = uuidv4();
    this.media = media;
    this.name = name;
  }
}
