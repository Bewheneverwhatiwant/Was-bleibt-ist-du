import './RecetCss.tsx';
import CustomColumn from './components/CustomColumn.tsx';
import CustomRow from './components/CustomRow.tsx';
import CustomFont from './components/CustomFont.tsx';
import CustomBox from './components/CustomBox.tsx';
import StyledImg from './components/StyledImg.tsx';

import Background_Note from './Background_Note';

function App() {
  return (
    <Background_Note>
      <CustomBox
        $backgroundcolor="#B6AA9F"
        $width="95%"
        $minHeight="100vh"
        $alignitems="flex-start"
        $justifycontent="center"
        $padding="0.5rem"
        $overflowx='hidden'
        style={{ zIndex: 5 }}
      >
        <CustomColumn $width="100%" $height="100vh" $alignitems="flex-end" $justifycontent="flex-start">
          <StyledImg src={'Banner_Top.svg'} $width="90%" />

          <CustomColumn $width='85%' $gap='0.5rem'>
            <CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
              <CustomFont $color='black' $font='1rem'>1. 나는...</CustomFont>
            </CustomRow>
            <CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent='space-between'>
              <StyledImg src={'Banner_Info.svg'} $width='70%' />
              <StyledImg src={'Banner_NameTag.svg'} $width='30%' />
            </CustomRow>
          </CustomColumn>

          <CustomColumn $width='85%' $gap='0.5rem'>
            <CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
              <CustomFont $color='black' $font='1rem'>2. 취미는...</CustomFont>
            </CustomRow>
            <CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent='space-between'>
              <StyledImg src={'Banner_Hobby.svg'} $width='60%' />
              <StyledImg src={'Banner_Hobby_Shelf.svg'} $width='40%' />
            </CustomRow>
          </CustomColumn>

          <CustomColumn $width='85%' $gap='0.5rem'>
            <CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
              <CustomFont $color='black' $font='1rem'>3. 좋아하는 음식은...</CustomFont>
            </CustomRow>
            <CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent='space-between'>
              <StyledImg src={'Banner_Food.svg'} $width='60%' />
              <StyledImg src={'Banner_Hobby_Shelf.svg'} $width='40%' />
            </CustomRow>
          </CustomColumn>

        </CustomColumn>
      </CustomBox>
    </Background_Note>
  );
}

export default App;
