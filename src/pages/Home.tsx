
import { useState } from "react";
import SearchBar from "@/components/search/SearchBar";
import SuggestionsCarousel from "@/components/search/Suggestions";
import AnswerCard from "@/components/search/AnswerCard";
import ActionPanel from "@/components/search/ActionPanel";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowAnswer(true);
  };

  const handleSuggestionClick = (question: string) => {
    setSearchQuery(question);
    setShowAnswer(true);
  };

  // Sample data for the answer card
  const answerDetails = {
    question: searchQuery || "Ist der XDR-5000 Pro für Überkopfarbeiten geeignet?",
    answer:
      "Ja, der XDR-5000 Pro ist gemäß EN 14566 für Überkopfmontagen freigegeben. Das Gerät ist mit einem ergonomischen Design und einer speziellen Auswuchtung ausgestattet, die das Arbeiten über Kopf erleichtert. Das geringe Gewicht und der schlanke Griff reduzieren die Ermüdung bei längerer Überkopfarbeit.",
    sections: [
      {
        title: "Produktdetails",
        content:
          "Der XDR-5000 Pro ist ein leistungsstarker Akku-Bohrschrauber mit 18V und einem maximalen Drehmoment von 250 Nm. Das Gerät verfügt über eine elektronische Drehzahlregulierung und ein 2-Gang-Getriebe.",
      },
      {
        title: "Technische Daten",
        content:
          "Gewicht: 1,8 kg, Akkukapazität: 4,0 Ah, Laufzeit: bis zu 60 Minuten bei kontinuierlicher Nutzung, Ladezeit: 45 Minuten, Drehmomentstufen: 25+1",
      },
      {
        title: "Anwendungshinweise",
        content:
          "Für optimale Ergebnisse bei Überkopfarbeiten empfehlen wir die Verwendung des ergonomischen Zusatzhandgriffs und das Arbeiten in der niedrigen Drehzahlstufe. Achten Sie auf regelmäßige Pausen, um Ermüdung vorzubeugen.",
      },
    ],
    relatedQuestions: [
      "Wie lange hält der Akku des XDR-5000 Pro?",
      "Welche Schrauben sind für den XDR-5000 Pro geeignet?",
      "Welche Unterschiede gibt es zwischen XDR-5000 Pro und XDR-4000?",
    ],
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Knowledge Search</h1>
        <div className="w-full md:w-3/4">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      {showAnswer ? (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-4">
          <div>
            <AnswerCard
              question={answerDetails.question}
              answer={answerDetails.answer}
              sections={answerDetails.sections}
              relatedQuestions={answerDetails.relatedQuestions}
            />
          </div>
          <div>
            <ActionPanel />
          </div>
        </div>
      ) : (
        <SuggestionsCarousel onQuestionClick={handleSuggestionClick} />
      )}
    </div>
  );
};

export default Home;
