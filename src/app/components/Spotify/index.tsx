import { type HTMLAttributes } from "react";

interface SpotifyProps extends HTMLAttributes<HTMLIFrameElement> {
  [key: string]: any;

  link: string;
  wide?: boolean;
  width?: number | string;
  height?: number | string;
  frameBorder?: number | string;
  allow?: string;
}

export const Spotify = ({
  link,
  style = {
    backgroundColor: "transparent",
  },
  wide = false,
  width = wide ? "100%" : 352,
  height = wide ? 80 : 352,
  frameBorder = 12,
  allow = "encrypted-media",
  ...props
}: SpotifyProps) => {
  const url = new URL(link);
  // https://open.spotify.com/track/1KFxcj3MZrpBGiGA8ZWriv?si=f024c3aa52294aa1
  return (
    <iframe
      title="Spotify Web Player"
      src={`https://open.spotify.com/embed${url.pathname}`}
      width={352}
      height={352}
      allow={allow}
      style={{
        borderRadius: 12,
        backgroundColor: "transparent",
        ...style,
      }}
      {...props}
    />
  );
};
