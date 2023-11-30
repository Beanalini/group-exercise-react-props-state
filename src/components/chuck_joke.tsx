interface ChuckJokeProps {
  jokes: {
    joke: string;
    id: number;
  }[];
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ jokes }) => {
  const joke = jokes.map((joke) => {
    return (
      <li className="joke-list" key={joke.id}>
        {joke.joke}
      </li>
    );
  });

  return (
    <>
      <p>{joke}</p>
      <br />
    </>
  );
};
export default ChuckJoke;
