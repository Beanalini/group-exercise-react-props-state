import ChuckJoke from "./chuck_joke";
interface ChuckJokeProps {
  jokes: {
    joke: string;
    id: number;
  }[];
}

const ChuckJokeList: React.FC<ChuckJokeProps> = ({ jokes }) => (
  <ul>
    {jokes.map((j) => (
      <ChuckJoke key={j.id} joke={j.joke} />
    ))}
  </ul>
);
export default ChuckJokeList;
