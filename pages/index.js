import Game from '../components/Game'
import styled from '@emotion/styled'
import Theme from '../utils/theme'

export default function Home() {
  return (
    <Container>
      <Game level={0} />
    </Container>
  )
}

const Container = styled('div')`
  height: 100vh;
  width: 100vw;
  background-color: ${Theme.default};
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
`