
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, BellOff, FileText, Star } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { de } from "date-fns/locale";
import { useState } from "react";

interface BookmarkCardProps {
  id: string;
  title: string;
  lastUpdated: Date;
  tags: string[];
  notificationsEnabled: boolean;
}

const BookmarkCard = ({
  id,
  title,
  lastUpdated,
  tags,
  notificationsEnabled: initialNotifications,
}: BookmarkCardProps) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(initialNotifications);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleOpen = () => {
    // In a real app, this would open the document
    console.log(`Opening bookmarked document ${id}`);
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-start gap-2 space-y-0">
        <FileText size={18} className="text-primary mt-1 shrink-0" />
        <div className="flex-1">
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7 shrink-0"
          onClick={handleNotificationsToggle}
        >
          {notificationsEnabled ? (
            <Bell size={16} className="text-primary" />
          ) : (
            <BellOff size={16} className="text-gray-400" />
          )}
        </Button>
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

export default BookmarkCard;
