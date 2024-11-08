import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mood, moodDescriptions } from "@/lib/playlist-data";
import { Music } from "lucide-react";

interface MoodSelectorProps {
  onMoodSelect: (mood: Mood) => void;
}

export function MoodSelector({ onMoodSelect }: MoodSelectorProps) {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
    onMoodSelect(mood);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">How are you feeling today?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {(Object.keys(moodDescriptions) as Mood[]).map((mood) => (
          <Button
            key={mood}
            onClick={() => handleMoodSelect(mood)}
            className={`h-[200px] glass-card flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-105 p-4 ${
              selectedMood === mood ? `ring-2 ring-mood-${mood}` : ""
            }`}
            variant="ghost"
          >
            <Music className={`w-6 h-6 md:w-8 md:h-8 text-mood-${mood}`} />
            <span className="capitalize font-medium text-sm md:text-base">{mood}</span>
            <div className="flex-1 flex items-center">
              <p className="text-xs md:text-sm text-muted-foreground line-clamp-3 text-center">
                {moodDescriptions[mood]}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}