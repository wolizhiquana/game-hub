import { Button, Text, useBoolean } from '@chakra-ui/react'

interface Props {
  children?: string
}

function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useBoolean(false)
  const limit = 300

  if (!children) return null

  if (children.length < limit) return <Text>{children}</Text>

  const summary = expanded ? children : `${children.substring(0, limit)} ...`

  return (
    <Text>
      {summary}
      <Button
        ml={1}
        size='xs'
        fontWeight='bold'
        colorScheme='yellow'
        onClick={setExpanded.toggle}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </Button>
    </Text>
  )
}

export default ExpandableText
