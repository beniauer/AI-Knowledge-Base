
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Mail, MessageSquare } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const ActionPanel = () => {
  const handleAction = (action: string) => {
    switch (action) {
      case "chat":
        toast("Chat-Funktion wird geöffnet...");
        break;
      case "document":
        toast("Dokument wird geöffnet...");
        break;
      case "contact":
        toast("E-Mail an Produktmanager wird geöffnet...");
        break;
      default:
        break;
    }
  };

  return (
    <Card className="p-4 w-full md:w-[220px]">
      <div className="space-y-3">
        <Button 
          className="w-full flex items-center gap-2 justify-start" 
          onClick={() => handleAction("chat")}
        >
          <MessageSquare size={16} />
          <span>Nachfrage stellen</span>
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2 justify-start" 
          onClick={() => handleAction("document")}
        >
          <FileText size={16} />
          <span>Datenblatt anzeigen</span>
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full flex items-center gap-2 justify-start" 
          onClick={() => handleAction("contact")}
        >
          <Mail size={16} />
          <span>PM kontaktieren</span>
        </Button>
      </div>
    </Card>
  );
};

export default ActionPanel;
