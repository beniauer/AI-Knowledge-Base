
import ConnectorCard from "@/components/admin/ConnectorCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileIcon, MessageSquare, Settings, Share2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admin = () => {
  // Sample connectors data
  const connectors = [
    {
      name: "Outlook",
      icon: <Share2 size={24} />,
      status: "connected" as const,
      lastSync: new Date(2023, 5, 15, 14, 30),
    },
    {
      name: "Teams",
      icon: <MessageSquare size={24} />,
      status: "connected" as const,
      lastSync: new Date(2023, 5, 14, 9, 15),
    },
    {
      name: "SharePoint",
      icon: <FileIcon size={24} />,
      status: "error" as const,
      lastSync: new Date(2023, 5, 10, 11, 45),
    },
    {
      name: "Confluence",
      icon: <Settings size={24} />,
      status: "disconnected" as const,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin & Integrationen</h1>

      <Tabs defaultValue="connectors">
        <TabsList className="mb-6">
          <TabsTrigger value="connectors">Automatisierte Wissenssammlung</TabsTrigger>
          <TabsTrigger value="roles">Rollen & Berechtigungen</TabsTrigger>
          <TabsTrigger value="analytics">Usage Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="connectors">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Automatisierte Wissenssammlung</CardTitle>
              <CardDescription>
                Synchronisiert laufend E-Mails, Teams-Chats und SharePoint-Ordner, 
                extrahiert neues Wissen und legt es versioniert ab.
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {connectors.map((connector) => (
              <ConnectorCard
                key={connector.name}
                name={connector.name}
                icon={connector.icon}
                status={connector.status}
                lastSync={connector.lastSync}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="roles">
          <Card>
            <CardHeader>
              <CardTitle>Rollen & Berechtigungen</CardTitle>
              <CardDescription>
                Verwalte die verschiedenen Benutzerrollen und Zugriffsrechte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">
                Rollenverwaltung wird geladen...
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Usage Analytics</CardTitle>
              <CardDescription>
                Erhalte Einblicke in die Nutzung der Knowledge Base
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center py-8 text-gray-500">
                Analytics werden geladen...
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
