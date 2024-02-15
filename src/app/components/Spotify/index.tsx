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
  style = {},
  wide = false,
  width = wide ? "100%" : 400,
  height = wide ? 80 : 352,
  frameBorder = 0,
  allow = "encrypted-media",
  ...props
}: SpotifyProps) => {
  const url = new URL(link);
  // https://open.spotify.com/track/1KFxcj3MZrpBGiGA8ZWriv?si=f024c3aa52294aa1
  return (
    <iframe
      title="Spotify Web Player"
      src={`https://open.spotify.com/embed${url.pathname}`}
      width={400}
      height={352}
      allow={allow}
      style={{
        borderRadius: 12,
        ...style,
      }}
      {...props}
    />
  );
};
