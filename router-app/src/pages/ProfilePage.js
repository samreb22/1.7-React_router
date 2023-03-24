import { useParams } from "react-router-dom";

export default function ProfilePage() {
  // Hago la descomposición de lo que reciubo con parámetros con username
  const { username } = useParams();

  return (
    <div>
      <h1>ProfilePage: {username}</h1>
    </div>
  );
}
