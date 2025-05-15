
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  width?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({
  placeholder = "Stelle deine Produktfrage…",
  width = "90%",
  onSearch,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form
      className={`relative w-full max-w-[${width}]`}
      onSubmit={handleSubmit}
    >
      <Search
        size={18}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      <Input
        className="pl-10 h-12 rounded border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
