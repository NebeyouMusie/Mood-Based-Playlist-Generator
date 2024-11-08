export type Mood = 'happy' | 'sad' | 'energetic' | 'calm' | 'romantic' | 'focused';

export interface Song {
  title: string;
  artist: string;
  duration: string;
  mood: Mood;
}

export const moodDescriptions: Record<Mood, string> = {
  happy: "Upbeat and cheerful tunes to brighten your day",
  sad: "Melancholic melodies for emotional moments",
  energetic: "High-energy tracks to get you moving",
  calm: "Peaceful sounds for relaxation and meditation",
  romantic: "Love songs and sweet melodies",
  focused: "Concentration-enhancing instrumental tracks",
};

export const mockPlaylists: Record<Mood, Song[]> = {
  happy: [
    { title: "Happy", artist: "Pharrell Williams", duration: "3:53", mood: "happy" },
    { title: "Good as Hell", artist: "Lizzo", duration: "2:39", mood: "happy" },
    { title: "Walking on Sunshine", artist: "Katrina & The Waves", duration: "3:58", mood: "happy" },
  ],
  sad: [
    { title: "Someone Like You", artist: "Adele", duration: "4:45", mood: "sad" },
    { title: "All By Myself", artist: "Celine Dion", duration: "5:08", mood: "sad" },
    { title: "Yesterday", artist: "The Beatles", duration: "2:05", mood: "sad" },
  ],
  energetic: [
    { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", duration: "4:18", mood: "energetic" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", duration: "4:30", mood: "energetic" },
    { title: "Shake It Off", artist: "Taylor Swift", duration: "3:39", mood: "energetic" },
  ],
  calm: [
    { title: "River Flows in You", artist: "Yiruma", duration: "3:43", mood: "calm" },
    { title: "Weightless", artist: "Marconi Union", duration: "8:05", mood: "calm" },
    { title: "Claire de Lune", artist: "Claude Debussy", duration: "5:00", mood: "calm" },
  ],
  romantic: [
    { title: "All of Me", artist: "John Legend", duration: "4:29", mood: "romantic" },
    { title: "Perfect", artist: "Ed Sheeran", duration: "4:23", mood: "romantic" },
    { title: "At Last", artist: "Etta James", duration: "3:02", mood: "romantic" },
  ],
  focused: [
    { title: "Experience", artist: "Ludovico Einaudi", duration: "5:15", mood: "focused" },
    { title: "Time", artist: "Hans Zimmer", duration: "4:35", mood: "focused" },
    { title: "Divenire", artist: "Ludovico Einaudi", duration: "6:42", mood: "focused" },
  ],
};