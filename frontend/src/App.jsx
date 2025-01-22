import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [score, setScore] = useState(0);
    const [prizes, setPrizes] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            const { data } = await axios.get("http://localhost:5000/api/user");
            setScore(data.totalScore);
            setPrizes(data.prizesWon);
        };
        fetchUserData();
    }, []);

    const handleClick = async () => {
        const { data } = await axios.post("http://localhost:5000/api/update");
        setScore(data.user.totalScore);
        setPrizes(data.user.prizesWon);
        setMessage(data.prizeWon ? "You won a prize!" : `You gained ${data.points} points.`);
    };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1>Cookie Clicker</h1>
          <p className="py-2">Total Score: {score}</p>
          <p className="py-2">Prizes Won: {prizes}</p>
          <button onClick={handleClick} className="border bg-purple-500 rounded-md text-white px-4 py-2">Click Me!</button>
          {message && <p className="mt-4">{message}</p>}
        </div>
      </div>
    </>
  )
}

export default App
