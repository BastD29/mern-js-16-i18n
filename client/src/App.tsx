import { Route, Routes } from "react-router-dom";
import CardList from "./components/CardList";
import Translation from "./components/Translation";
import CardDetail from "./components/CardDetail";

export default function App() {
  return (
    <>
      <Translation />
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/:id" element={<CardDetail />} />
      </Routes>
    </>
  );
}
