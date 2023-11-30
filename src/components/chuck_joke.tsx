interface ChuckJokeProps {
  jokes: {
    joke: string;
    id: number;
  }[];
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ jokes }) => {
  const joke = jokes.map((joke) => {
    return <li key={joke.id}> {joke.joke}</li>;
  });
  console.log(joke);
  return <p>{joke}</p>;
};
export default ChuckJoke;
