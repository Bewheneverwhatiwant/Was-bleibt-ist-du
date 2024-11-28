import './RecetCss.tsx'
import Container from './components/Container.tsx'
import CustomColumn from './components/CustomColumn.tsx'
import CustomFont from './components/CustomFont.tsx'

function App() {

  return (
    <Container>
      <CustomColumn $width='100%' $alignitems='center' $justifycontent='flex-start'>
        <CustomFont $color='black'>안녕!</CustomFont>
      </CustomColumn>
    </Container>
  )
}

export default App