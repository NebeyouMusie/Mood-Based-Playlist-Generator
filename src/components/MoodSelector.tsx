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
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">How are you feeling today?</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {(Object.keys(moodDescriptions) as Mood[]).map((mood) => (
          <Button
            key={mood}
            onClick={() => handleMoodSelect(mood)}
            className={`h-32 glass-card flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:scale-105 ${
              selectedMood === mood ? `ring-2 ring-mood-${mood}` : ""
            }`}
            variant="ghost"
          >
            <Music className={`w-8 h-8 text-mood-${mood}`} />
            <span className="capitalize font-medium">{mood}</span>
            <p className="text-xs text-muted-foreground">{moodDescriptions[mood]}</p>
          </Button>
        ))}
      </div>
    </div>
  );
}