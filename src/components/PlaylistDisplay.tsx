import { Song } from "@/lib/playlist-data";
import { Clock, Music2 } from "lucide-react";

interface PlaylistDisplayProps {
  songs: Song[];
}

export function PlaylistDisplay({ songs }: PlaylistDisplayProps) {
  if (!songs.length) return null;

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Your Personalized Playlist</h3>
          <span className="text-sm text-muted-foreground">{songs.length} songs</span>
        </div>
        <div className="space-y-2">
          {songs.map((song, index) => (
            <div
              key={`${song.title}-${index}`}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-4">
                <Music2 className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{song.title}</p>
                  <p className="text-sm text-muted-foreground">{song.artist}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{song.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}