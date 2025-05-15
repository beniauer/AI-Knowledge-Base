
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { de } from "date-fns/locale";

interface DocumentCardProps {
  id: string;
  title: string;
  lastUpdated: Date;
  tags: string[];
}

const DocumentCard = ({ id, title, lastUpdated, tags }: DocumentCardProps) => {
  const handleOpen = () => {
    // In a real app, this would open the document
    console.log(`Opening document ${id}`);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-col space-y-1.5">
        <CardTitle className="text-base flex items-start gap-2">
          <FileText size={18} className="text-primary mt-1 shrink-0" />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4 text-xs text-gray-500">
        <span>
          Aktualisiert {formatDistanceToNow(lastUpdated, { locale: de, addSuffix: true })}
        </span>
        <Button size="sm" onClick={handleOpen}>
          Öffnen
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
