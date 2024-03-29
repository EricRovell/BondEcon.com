import { mediaObserver } from "svelte-media-observer";
import type { MediaQueries } from "svelte-media-observer";

const mediaQueries: MediaQueries<"mobile"> = [
  [ "mobile", "(max-width: 600px)" ]
];

export const media = mediaObserver(mediaQueries);