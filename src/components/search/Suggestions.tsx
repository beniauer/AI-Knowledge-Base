
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const suggestedQuestions = [
  "Ist der XDR-5000 Pro für Überkopfarbeiten geeignet?",
  "Welche Unterschiede gibt es zwischen XDR-5000 Pro und XDR-4000?",
  "Wie lange hält der Akku des XDR-5000 Pro?",
  "Welche Schrauben sind für den UW-275 Profil empfohlen?",
  "Wie installiere ich das UW-275 Profil korrekt?",
];

interface SuggestionsCarouselProps {
  onQuestionClick: (question: string) => void;
}

const SuggestionsCarousel = ({ onQuestionClick }: SuggestionsCarouselProps) => {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Häufig gestellte Fragen</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestedQuestions.map((question, index) => (
          <Card 
            key={index} 
            className="cursor-pointer hover:border-primary transition-colors"
            onClick={() => onQuestionClick(question)}
          >
            <CardHeader className="p-4">
              <CardTitle className="text-base">{question}</CardTitle>
              <CardDescription className="text-xs text-gray-500">
                Häufig gestellte Frage
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SuggestionsCarousel;
