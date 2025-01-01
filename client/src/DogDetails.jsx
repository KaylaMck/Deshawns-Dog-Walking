import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DogDetails() {
    const { id } = useParams();
    const [dog, setDog] = useState(null);

    useEffect(() => {
        fetch(`/api/dogs/${id}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Dog not found.");
            }
            return res.json();
        })
        .then(setDog)
        .catch((error) => console.error(error));
    }, []);

    if (!dog) {
        return <p>Loading...</p>
    }

    return (
        <div className="container mt-4">
            <h2>{dog.name}</h2>
            <p>City: {dog.city}</p>
            <p>Walker: {dog.walker ? dog.walker : "No walker assigned"}</p>
        </div>
    )
}