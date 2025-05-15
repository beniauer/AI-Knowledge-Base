
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const filters = [
  {
    name: "Produkt",
    options: ["Alle", "Bohrschrauber", "Profile", "Schrauben", "Zubehör"],
  },
  {
    name: "Version",
    options: ["Alle", "Aktuell", "Archiviert"],
  },
  {
    name: "Sprache",
    options: ["Alle", "Deutsch", "Englisch", "Französisch"],
  },
  {
    name: "Tag",
    options: ["Alle", "Datenblatt", "Anleitung", "Zertifikat", "Technische Zeichnung"],
  },
];

interface DocumentFilterProps {
  onFilterChange: (filters: Record<string, string>) => void;
}

const DocumentFilter = ({ onFilterChange }: DocumentFilterProps) => {
  const [currentFilters, setCurrentFilters] = useState<Record<string, string>>(
    Object.fromEntries(filters.map((f) => [f.name, "Alle"]))
  );

  const handleFilterChange = (filterName: string, value: string) => {
    const newFilters = { ...currentFilters, [filterName]: value };
    setCurrentFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = Object.fromEntries(filters.map((f) => [f.name, "Alle"]));
    setCurrentFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <Card className="p-4 mb-4">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <div key={filter.name} className="w-full sm:w-auto">
            <Select
              value={currentFilters[filter.name]}
              onValueChange={(value) => handleFilterChange(filter.name, value)}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder={filter.name} />
              </SelectTrigger>
              <SelectContent>
                {filter.options.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
        <Button variant="outline" onClick={handleReset} className="ml-auto">
          Filter zurücksetzen
        </Button>
      </div>
    </Card>
  );
};

export default DocumentFilter;
