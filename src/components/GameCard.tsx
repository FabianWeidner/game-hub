import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlattformIconList from "./PlatformIconList";

type GameCardProps = {
  games: Game;
};

const GameCard = ({ games }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={games.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <PlattformIconList
          platforms={games.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};
export default GameCard;
