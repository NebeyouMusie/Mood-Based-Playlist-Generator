import { useState } from "react";
import { MoodSelector } from "@/components/MoodSelector";
import { PlaylistDisplay } from "@/components/PlaylistDisplay";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Mood, getRandomSongs } from "@/lib/playlist-data";
import { Music, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [selectedMood, setSelectedMood] = useState<Mood>("happy");
  const [selectedMoodSongs, setSelectedMoodSongs] = useState(getRandomSongs("happy"));
  const { toast } = useToast();

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
    setSelectedMoodSongs(getRandomSongs(mood));
  };

  const handleRefresh = () => {
    setSelectedMoodSongs(getRandomSongs(selectedMood));
    toast({
      title: "Playlist Refreshed!",
      description: "We've shuffled the songs for you.",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 animate-gradient-x">
      <ThemeToggle />
      <div className="container px-4 py-8 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center mb-4">
            <Music className="w-12 h-12 md:w-16 md:h-16 text-primary animate-float" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Mood-Based Playlist Generator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect soundtrack for your every mood
          </p>
        </div>
        <MoodSelector onMoodSelect={handleMoodSelect} />
        <div className="flex justify-end mb-4">
          <Button
            onClick={handleRefresh}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <RefreshCw className="h-4 w-4" />
            Shuffle Playlist
          </Button>
        </div>
        <PlaylistDisplay songs={selectedMoodSongs} />
      </div>
    </div>
  );
};

export default Index;