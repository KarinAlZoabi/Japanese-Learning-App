import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/Auth/Signup";
import SignIn from "./pages/Auth/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";
import StudyHome from "./pages/Study/StudyHome";
import FeaturePlaceholder from "./pages/Shared/FeaturePlaceholder";
import Profile from "./pages/Shared/Profile";
import ForgotPasswordInfo from "./pages/Shared/ForgotPasswordInfo";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";
import { AuthProvider } from "./context/AuthContext";

const plannedPages = [
  { path: "analyzer", title: "Sentence Analyzer", description: "Analyze Japanese sentences with vocabulary, grammar, and meaning breakdowns.", section: "AI tools" },
  { path: "chat", title: "AI Chat Partner", description: "Practice Japanese conversations with adjustable level, scenarios, and hints.", section: "AI tools" },
  { path: "study/kana", title: "Kana Charts", description: "Explore interactive hiragana and katakana charts.", section: "Study" },
  { path: "study/hiragana", title: "Hiragana", description: "Learn the full hiragana chart with readings and example words.", section: "Study" },
  { path: "study/katakana", title: "Katakana", description: "Learn the full katakana chart with readings and example words.", section: "Study" },
  { path: "study/vocabulary", title: "Vocabulary", description: "Discover Japanese vocabulary, word details, and saved words.", section: "Study" },
  { path: "study/vocabulary/:wordId", title: "Vocabulary details", description: "Explore readings, meanings, and examples for each word.", section: "Study" },
  { path: "flashcards", title: "Flashcard Decks", description: "Keep your saved words organized and review them with flashcards.", section: "Study" },
  { path: "flashcards/:deckId", title: "Flashcard Deck", description: "Browse the flashcards within a selected deck.", section: "Study" },
  { path: "flashcards/:deckId/review", title: "Flashcard Review", description: "Flip cards and strengthen your recall in focused study sessions.", section: "Study" },
  { path: "quizzes", title: "Quizzes", description: "Browse quizzes to test your Japanese skills.", section: "Study" },
  { path: "quizzes/:quizId", title: "Quiz", description: "Take a quiz and check your understanding.", section: "Study" },
  { path: "quizzes/:quizId/results", title: "Quiz Results", description: "Review your quiz answers and see what to practice next.", section: "Study" },
  { path: "study/kanji", title: "Kanji", description: "Explore beginner kanji, readings, and meanings.", section: "Study" },
  { path: "study/kanji/:kanjiId", title: "Kanji details", description: "Study individual kanji readings and example words.", section: "Study" },
  { path: "library", title: "Your Library", description: "Find saved sentences, vocabulary, conversations, and flashcards.", section: "Your space" },
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPasswordInfo />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/study" element={<StudyHome />} />
              <Route path="/profile" element={<Profile />} />
              {plannedPages.map(({ path, ...details }) => (
                <Route key={path} path={`/${path}`} element={<FeaturePlaceholder {...details} />} />
              ))}
              <Route path="*" element={<FeaturePlaceholder title="Page not found" description="This page doesn't exist yet. Find your way back to your Japanese learning story." section="Navigation" />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
