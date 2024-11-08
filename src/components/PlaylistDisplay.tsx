import { Song } from "@/lib/playlist-data";
import { Clock, Music2 } from "lucide-react";

interface PlaylistDisplayProps {
  songs: Song[];
}

export function PlaylistDisplay({ songs }: PlaylistDisplayProps) {
  if (!songs.length) return null;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
      <div className="glass-card p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg md:text-xl font-semibold">Your Personalized Playlist</h3>
          <span className="text-xs md:text-sm text-muted-foreground">{songs.length} songs</span>
        </div>
        <div className="space-y-2">
          {songs.map((song, index) => (
            <div
              key={`${song.title}-${index}`}
              className="flex items-center justify-between p-2 md:p-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                <Music2 className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-sm md:text-base truncate">{song.title}</p>
                  <p className="text-xs md:text-sm text-muted-foreground truncate">{song.artist}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-muted-foreground flex-shrink-0 ml-2">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm">{song.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}