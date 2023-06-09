import { SimpleGrid, Text } from '@chakra-ui/react'
import { Game } from '../entities'
import CriticScore from './CriticScore'
import DefinitionItem from './DefinitionItem'

interface Props {
  game: Game
}

export default function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2} as='dl'>
      <DefinitionItem term='Platform'>
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Matascore'>
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term='Geners'>
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term='Publishers'>
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  )
}
