import { type Component, createSignal, onMount } from "solid-js";

interface YTPlayerProps {
  url: string;
}

const YTPlayer: Component<YTPlayerProps> = (props) => {
  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getVideoId(props.url);

  // Try maxresdefault first, fallback to hqdefault
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div class="aspect-video">
      <div
        class="youtube-player__preview cursor-pointer w-full h-full relative"
        onClick={(e) => {
          const target = e.currentTarget;
          // Replace preview with iframe on click
          target.innerHTML = `
            <iframe
              src="https://www.youtube.com/embed/${videoId}?autoplay=1"
              width="100%"
              height="100%"
              style="border:0;"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          `;
        }}
        style={{
          "background-image": `url(${thumbnailUrl})`,
          "background-size": "cover",
          "background-position": "center",
        }}
        role="button"
        aria-label="Play video"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <svg
            class="w-16 h-16 text-white opacity-80 hover:opacity-100 transition-opacity"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default YTPlayer;
