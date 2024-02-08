const ChuckJoke: React.FC<{ joke: string }> = ({ joke }) => {
  return <li className="joke">{joke}</li>;
};

export default ChuckJoke;
