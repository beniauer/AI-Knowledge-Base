
import { useState } from "react";
import SearchBar from "@/components/search/SearchBar";
import DocumentFilter from "@/components/library/DocumentFilter";
import DocumentCard from "@/components/library/DocumentCard";

// Sample document data
const sampleDocuments = [
  {
    id: "1",
    title: "Datenblatt XDR-5000 Pro",
    lastUpdated: new Date(2023, 5, 15),
    tags: ["Bohrschrauber", "Akkugerät", "Datenblatt"],
  },
  {
    id: "2",
    title: "Montageleitfaden UW-275 Profil",
    lastUpdated: new Date(2023, 4, 22),
    tags: ["Profil", "Montage", "Anleitung"],
  },
  {
    id: "3",
    title: "Sicherheitsdatenblatt XDR-Serie",
    lastUpdated: new Date(2023, 3, 10),
    tags: ["Bohrschrauber", "Sicherheit"],
  },
  {
    id: "4",
    title: "Technische Zeichnung UW-275 Profil",
    lastUpdated: new Date(2023, 2, 5),
    tags: ["Profil", "Technische Zeichnung"],
  },
  {
    id: "5",
    title: "Ersatzteilkatalog XDR-5000 Pro",
    lastUpdated: new Date(2023, 1, 20),
    tags: ["Bohrschrauber", "Ersatzteile", "Katalog"],
  },
  {
    id: "6",
    title: "Zertifikat EN 14566 - XDR-5000 Pro",
    lastUpdated: new Date(2023, 0, 15),
    tags: ["Bohrschrauber", "Zertifikat"],
  },
];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDocuments, setFilteredDocuments] = useState(sampleDocuments);
  const [appliedFilters, setAppliedFilters] = useState<Record<string, string>>({});

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterDocuments(query, appliedFilters);
  };

  const handleFilterChange = (filters: Record<string, string>) => {
    setAppliedFilters(filters);
    filterDocuments(searchQuery, filters);
  };

  const filterDocuments = (query: string, filters: Record<string, string>) => {
    let filtered = [...sampleDocuments];

    // Apply text search
    if (query) {
      filtered = filtered.filter(
        (doc) =>
          doc.title.toLowerCase().includes(query.toLowerCase()) ||
          doc.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
      );
    }

    // Apply filters (simplified version - in a real app, this would be more sophisticated)
    if (filters) {
      Object.entries(filters).forEach(([filterName, value]) => {
        if (value !== "Alle") {
          if (filterName === "Tag") {
            filtered = filtered.filter((doc) =>
              doc.tags.some((tag) => tag === value)
            );
          } else if (filterName === "Produkt") {
            filtered = filtered.filter((doc) =>
              doc.tags.some((tag) => tag === value)
            );
          }
        }
      });
    }

    setFilteredDocuments(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Dokument-Bibliothek</h1>

      <div className="mb-4">
        <SearchBar 
          placeholder="Suche nach Dokumenten..." 
          onSearch={handleSearch} 
        />
      </div>

      <DocumentFilter onFilterChange={handleFilterChange} />

      {filteredDocuments.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          Keine Dokumente gefunden. Bitte passe deine Suche an.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocuments.map((doc) => (
            <DocumentCard
              key={doc.id}
              id={doc.id}
              title={doc.title}
              lastUpdated={doc.lastUpdated}
              tags={doc.tags}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;
