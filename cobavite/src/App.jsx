import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

function HomePage() {
  const students = ["akbar", "nuraziza", "icaa"];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  function kurangClick() {
    setLikes(likes - 1);
  }
  function refresh() {
    setLikes(0);
  }
  return (
    <>
      <Header name="ica" />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
      <div className="kalkulator">
        <Button onClick={kurangClick}> - </Button>
        <h1>{likes}</h1>
        <Button onClick={handleClick}> + </Button>
      </div>
      <Button onClick={refresh}>reset</Button>
    </>
  );
}

export default HomePage;
