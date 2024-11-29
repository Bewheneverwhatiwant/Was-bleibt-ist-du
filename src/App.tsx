import './RecetCss.tsx';
import { useEffect, useRef, useState } from 'react';

import CustomColumn from './components/CustomColumn.tsx';
import CustomRow from './components/CustomRow.tsx';
import CustomFont from './components/CustomFont.tsx';
import CustomBox from './components/CustomBox.tsx';
import StyledImg from './components/StyledImg.tsx';
import CustomButton from './components/CustomButton.tsx';

import './hiddenscroll.css'
import Background_Note from './Background_Note';

function App() {

  const GoNY = () => {
    window.location.href = 'https://mobile-leenayeong.vercel.app/';
  };

  const customBoxRef = useRef<HTMLDivElement>(null); // CustomBox의 높이를 측정할 ref 생성
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    const updateContentHeight = () => {
      if (customBoxRef.current) {
        setContentHeight(customBoxRef.current.offsetHeight); // CustomBox 높이 계산
        console.log('App의 높이는', customBoxRef.current.offsetHeight);
      }
    };

    const handleLoad = () => {
      updateContentHeight(); // 모든 요소 로드 후 높이 계산
    };

    // 창 로드 완료 시 실행
    window.addEventListener('load', handleLoad);
    // 창 크기 변경 시 실행
    window.addEventListener('resize', updateContentHeight);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('resize', updateContentHeight);
    };
  }, []);

  return (
    <Background_Note contentHeight={contentHeight}>
      <CustomBox
        ref={customBoxRef}
        $backgroundcolor="#B6AA9F"
        $width="95%"
        $height='auto'
        $alignitems="flex-start"
        $justifycontent="flex-start"
        $padding="0.5rem 0.5rem 35px 0.5rem"
        style={{ zIndex: 5 }}
      >
        <CustomColumn $width="100%" $alignitems="flex-end" $justifycontent="flex-start" $gap='3rem'>
          <StyledImg src={'Banner_Top.svg'} $width="90%" />

          <CustomColumn $width='85%' $gap='0.5rem'>
            <CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
              <CustomFont $color='black' $font='1rem'>1. 나는...</CustomFont>
            </CustomRow>
            <CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent='space-between'>
              <StyledImg src={'Banner_Info.svg'} $width='70%' />
              <CustomButton $width='30%' $height='auto' $backgroundColor='transparent' $padding='0' onClick={GoNY}>
                <StyledImg src={'Banner_NameTag.svg'} $width='100%' />
              </CustomButton>
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
              <StyledImg src={'Banner_Food.svg'} $width='70%' />
              <StyledImg src={'Banner_refrig.svg'} $width='30%' />
            </CustomRow>
            <StyledImg src={'Banner_FavorList.svg'} $width='90%' />
          </CustomColumn>

          <CustomColumn $width='85%' $gap='0.5rem'>
            <CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
              <CustomFont $color='black' $font='1rem'>4. 좋아하는 드라마, 영화, 웹툰은...</CustomFont>
            </CustomRow>
            <CustomRow
              $width="100%"
              $height="auto"
              $alignitems="center"
              $justifycontent="space-between"
              $gap='1rem'
              className="no-scrollbar"
            >
              {Array.from({ length: 7 }, (_, index) => (
                <StyledImg
                  $width='100px'
                  $height='auto'
                  key={index}
                  src={`Favor_${index + 1}.png`}
                  alt={`Favorite ${index + 1}`}

                />
              ))}
            </CustomRow>
          </CustomColumn>
        </CustomColumn>
      </CustomBox>
    </Background_Note>
  );
}

export default App;
