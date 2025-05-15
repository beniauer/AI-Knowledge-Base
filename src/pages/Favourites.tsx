
import { useState } from "react";
import SearchBar from "@/components/search/SearchBar";
import BookmarkCard from "@/components/favourites/BookmarkCard";

// Sample bookmarks data
const sampleBookmarks = [
  {
    id: "1",
    title: "Datenblatt XDR-5000 Pro",
    lastUpdated: new Date(2023, 5, 15),
    tags: ["Bohrschrauber", "Akkugerät", "Datenblatt"],
    notificationsEnabled: true,
  },
  {
    id: "2",
    title: "Montageleitfaden UW-275 Profil",
    lastUpdated: new Date(2023, 4, 22),
    tags: ["Profil", "Montage", "Anleitung"],
    notificationsEnabled: false,
  },
  {
    id: "4",
    title: "Technische Zeichnung UW-275 Profil",
    lastUpdated: new Date(2023, 2, 5),
    tags: ["Profil", "Technische Zeichnung"],
    notificationsEnabled: true,
  },
];

const Favourites = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBookmarks, setFilteredBookmarks] = useState(sampleBookmarks);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query) {
      setFilteredBookmarks(sampleBookmarks);
      return;
    }
    
    const filtered = sampleBookmarks.filter(
      (bookmark) =>
        bookmark.title.toLowerCase().includes(query.toLowerCase()) ||
        bookmark.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    setFilteredBookmarks(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Meine Favoriten</h1>

      <div className="mb-6">
        <SearchBar 
          placeholder="Suche in Favoriten..." 
          onSearch={handleSearch} 
        />
      </div>

      {filteredBookmarks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Keine favorisierten Dokumente gefunden.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBookmarks.map((bookmark) => (
            <BookmarkCard
              key={bookmark.id}
              id={bookmark.id}
              title={bookmark.title}
              lastUpdated={bookmark.lastUpdated}
              tags={bookmark.tags}
              notificationsEnabled={bookmark.notificationsEnabled}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
