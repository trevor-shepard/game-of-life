import Game from '../components/Game'
import styled from '@emotion/styled'
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
  background-color: #D9C791;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
`