import { getDogs, getGreeting } from "./apiManager";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [greeting, setGreeting] = useState({
    message: "Not Connected to the API",
  });

  useEffect(() => {
    getGreeting()
      .then(setGreeting)
      .catch(() => {
        console.log("API not connected");
      });
  }, []);

  useEffect(() => {
    getDogs()
    .then(setDogs)
    .catch(() => {
      console.log("API not connected");
    })
  })

  return (
    <div className="container mt-4">
      <h2 className="text-center">{greeting.message}</h2>

      <div className="mt-5">
        <h4 className="bs-emphasis-color mb-4">All Dogs:</h4>
        <ul className="list-group list-group-horizontal d-flex justify-content-center">
          {dogs.map((dog) => (
            <li className="list-group-item" key={dog.id}>
              <Link to={`/dogs/${dog.id}`}>{dog.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
