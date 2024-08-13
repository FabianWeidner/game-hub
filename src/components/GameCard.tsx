import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlattformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

type GameCardProps = {
  games: Game;
};

const GameCard = ({ games }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={games.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <HStack justifyContent="space-between">
          <PlattformIconList
            platforms={games.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={games.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
export default GameCard;
