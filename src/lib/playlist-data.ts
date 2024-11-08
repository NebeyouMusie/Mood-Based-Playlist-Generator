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
    { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", duration: "3:56", mood: "happy" },
    { title: "Shake It Off", artist: "Taylor Swift", duration: "3:39", mood: "happy" },
    { title: "Best Day of My Life", artist: "American Authors", duration: "3:14", mood: "happy" },
    { title: "I Wanna Dance with Somebody", artist: "Whitney Houston", duration: "4:52", mood: "happy" },
    { title: "Don't Stop Believin'", artist: "Journey", duration: "4:11", mood: "happy" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", duration: "4:30", mood: "happy" },
    { title: "Three Little Birds", artist: "Bob Marley", duration: "3:00", mood: "happy" },
  ],
  sad: [
    { title: "Someone Like You", artist: "Adele", duration: "4:45", mood: "sad" },
    { title: "All By Myself", artist: "Celine Dion", duration: "5:08", mood: "sad" },
    { title: "Yesterday", artist: "The Beatles", duration: "2:05", mood: "sad" },
    { title: "Say Something", artist: "A Great Big World", duration: "3:49", mood: "sad" },
    { title: "Fix You", artist: "Coldplay", duration: "4:55", mood: "sad" },
    { title: "The Sound of Silence", artist: "Simon & Garfunkel", duration: "3:05", mood: "sad" },
    { title: "Mad World", artist: "Gary Jules", duration: "3:09", mood: "sad" },
    { title: "Hurt", artist: "Johnny Cash", duration: "3:38", mood: "sad" },
    { title: "Nothing Compares 2 U", artist: "Sinéad O'Connor", duration: "5:07", mood: "sad" },
    { title: "Hallelujah", artist: "Jeff Buckley", duration: "6:53", mood: "sad" },
  ],
  energetic: [
    { title: "Can't Hold Us", artist: "Macklemore & Ryan Lewis", duration: "4:18", mood: "energetic" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", duration: "4:30", mood: "energetic" },
    { title: "Shake It Off", artist: "Taylor Swift", duration: "3:39", mood: "energetic" },
    { title: "Eye of the Tiger", artist: "Survivor", duration: "4:05", mood: "energetic" },
    { title: "I Gotta Feeling", artist: "The Black Eyed Peas", duration: "4:49", mood: "energetic" },
    { title: "Levels", artist: "Avicii", duration: "3:19", mood: "energetic" },
    { title: "Don't Stop Me Now", artist: "Queen", duration: "3:29", mood: "energetic" },
    { title: "Titanium", artist: "David Guetta ft. Sia", duration: "4:05", mood: "energetic" },
    { title: "Wake Me Up", artist: "Avicii", duration: "4:07", mood: "energetic" },
    { title: "All Star", artist: "Smash Mouth", duration: "3:21", mood: "energetic" },
  ],
  calm: [
    { title: "River Flows in You", artist: "Yiruma", duration: "3:43", mood: "calm" },
    { title: "Weightless", artist: "Marconi Union", duration: "8:05", mood: "calm" },
    { title: "Claire de Lune", artist: "Claude Debussy", duration: "5:00", mood: "calm" },
    { title: "The Rain", artist: "Brian Crain", duration: "3:45", mood: "calm" },
    { title: "Gymnopédie No.1", artist: "Erik Satie", duration: "3:00", mood: "calm" },
    { title: "Meditation", artist: "Jules Massenet", duration: "4:25", mood: "calm" },
    { title: "Spiegel im Spiegel", artist: "Arvo Pärt", duration: "8:09", mood: "calm" },
    { title: "Air on the G String", artist: "Johann Sebastian Bach", duration: "5:00", mood: "calm" },
    { title: "The Scientist", artist: "Coldplay", duration: "5:09", mood: "calm" },
    { title: "Saturn", artist: "Sleeping At Last", duration: "4:48", mood: "calm" },
  ],
  romantic: [
    { title: "All of Me", artist: "John Legend", duration: "4:29", mood: "romantic" },
    { title: "Perfect", artist: "Ed Sheeran", duration: "4:23", mood: "romantic" },
    { title: "At Last", artist: "Etta James", duration: "3:02", mood: "romantic" },
    { title: "Can't Help Falling in Love", artist: "Elvis Presley", duration: "3:00", mood: "romantic" },
    { title: "Make You Feel My Love", artist: "Adele", duration: "3:32", mood: "romantic" },
    { title: "Thinking Out Loud", artist: "Ed Sheeran", duration: "4:41", mood: "romantic" },
    { title: "Just the Way You Are", artist: "Bruno Mars", duration: "3:40", mood: "romantic" },
    { title: "Your Song", artist: "Elton John", duration: "4:02", mood: "romantic" },
    { title: "The Way You Look Tonight", artist: "Frank Sinatra", duration: "3:23", mood: "romantic" },
    { title: "Endless Love", artist: "Diana Ross & Lionel Richie", duration: "4:26", mood: "romantic" },
  ],
  focused: [
    { title: "Experience", artist: "Ludovico Einaudi", duration: "5:15", mood: "focused" },
    { title: "Time", artist: "Hans Zimmer", duration: "4:35", mood: "focused" },
    { title: "Divenire", artist: "Ludovico Einaudi", duration: "6:42", mood: "focused" },
    { title: "Nuvole Bianche", artist: "Ludovico Einaudi", duration: "5:57", mood: "focused" },
    { title: "Una Mattina", artist: "Ludovico Einaudi", duration: "3:24", mood: "focused" },
    { title: "Comptine d'un autre été", artist: "Yann Tiersen", duration: "2:21", mood: "focused" },
    { title: "The Theory of Everything", artist: "Jóhann Jóhannsson", duration: "2:59", mood: "focused" },
    { title: "Arrival of the Birds", artist: "The Cinematic Orchestra", duration: "2:52", mood: "focused" },
    { title: "Now We Are Free", artist: "Hans Zimmer & Lisa Gerrard", duration: "4:14", mood: "focused" },
    { title: "Time Away", artist: "Max Richter", duration: "3:36", mood: "focused" },
  ],
};