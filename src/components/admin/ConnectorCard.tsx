
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ConnectorCardProps {
  name: string;
  icon: React.ReactNode;
  status: "connected" | "disconnected" | "error";
  lastSync?: Date;
}

const ConnectorCard = ({ name, icon, status, lastSync }: ConnectorCardProps) => {
  const statusColor = {
    connected: "bg-green-500",
    disconnected: "bg-gray-400",
    error: "bg-red-500",
  };

  const statusText = {
    connected: "Verbunden",
    disconnected: "Nicht verbunden",
    error: "Fehler",
  };

  const formatDate = (date?: Date) => {
    if (!date) return "Nie";
    return new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 pb-2 gap-2">
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <CardTitle className="text-base">{name}</CardTitle>
          <CardDescription className="text-xs">
            Datensynchronisation
          </CardDescription>
        </div>
        <Badge
          variant="outline"
          className="text-xs flex items-center gap-1"
        >
          <span className={`w-2 h-2 rounded-full ${statusColor[status]}`} />
          {statusText[status]}
        </Badge>
      </CardHeader>
      <CardContent className="text-xs text-gray-500">
        <p>Letzte Synchronisierung: {formatDate(lastSync)}</p>
      </CardContent>
    </Card>
  );
};

export default ConnectorCard;
