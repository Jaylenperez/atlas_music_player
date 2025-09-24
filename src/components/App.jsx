import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col justify-between bg-amber-100 p-8">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
