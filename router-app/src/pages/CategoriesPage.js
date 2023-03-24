import { useLocation, useHistory } from "react-router-dom";

export default function CategoriesPage() {
  const location = useLocation();
  const history = useHistory();

  // Guardo en "query" los parámetros de la búsqueda en la URL mediante querystrings
  const query = new URLSearchParams(location.search);
  // Guardo en "skip" el valor del parámetro skip de la URL
  const skip = parseInt(query.get("skip")) || 0;
  // Guardo en "limit" el valor del parámetro limit de la URL
  const limit = parseInt(query.get("limit")) || 15;

  const handleNext = () => {
    query.set("skip", skip + limit);
    // query.set("limit", 200);
    history.push({ search: query.toString() });
  };

  return (
    <div>
      <h1>CategoriesPage</h1>
      <h2>Skip: {skip}</h2>
      <h2>Limit: {limit}</h2>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}
