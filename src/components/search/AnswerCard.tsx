
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ThumbsDown, ThumbsUp } from "lucide-react";
import { toast } from "@/components/ui/sonner";

interface AnswerCardProps {
  question: string;
  answer: string;
  sections?: {
    title: string;
    content: string;
  }[];
  relatedQuestions?: string[];
}

const AnswerCard = ({ 
  question, 
  answer, 
  sections = [], 
  relatedQuestions = [] 
}: AnswerCardProps) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleFeedback = (helpful: boolean) => {
    // In a real application, this would send feedback to the server
    toast(helpful ? "Danke für deine positive Bewertung!" : "Danke für dein Feedback. Wir werden die Antwort verbessern.");
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg">Antwort zu: {question}</CardTitle>
        <CardDescription>Basierend auf unserer Produktdokumentation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="prose max-w-none">
          <p>{answer}</p>
        </div>

        {sections.map((section) => (
          <Collapsible
            key={section.title}
            open={openSections[section.title]}
            onOpenChange={() => toggleSection(section.title)}
            className="border rounded-md"
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between p-4 font-medium">
              {section.title}
              {openSections[section.title] ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0 border-t">
              <p>{section.content}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}

        {relatedQuestions.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">Verwandte Fragen</h3>
            <ul className="space-y-2">
              {relatedQuestions.map((q, i) => (
                <li key={i}>
                  <Button variant="link" className="p-0 h-auto text-left justify-start text-primary">
                    {q}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4 text-sm">
        <div>War diese Antwort hilfreich?</div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleFeedback(true)}
            className="flex items-center gap-1"
          >
            <ThumbsUp size={14} />
            <span>Ja</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => handleFeedback(false)}
            className="flex items-center gap-1"
          >
            <ThumbsDown size={14} />
            <span>Nein</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AnswerCard;
