import './RecetCss.tsx';
import { useEffect, useRef, useState } from 'react';

import CustomColumn from './components/CustomColumn.tsx';
import CustomBox from './components/CustomBox.tsx';
import StyledImg from './components/StyledImg.tsx';

import './hiddenscroll.css'
import Background_Note from './Background_Note';
import Iam from './maincomponents/Iam.tsx';
import MyHobby from './maincomponents/MyHobby.tsx';
import FavorFood from './maincomponents/FavorFood.tsx';
import FavorMovie from './maincomponents/FavorMovie.tsx';

function App() {

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
      updateContentHeight(); // 모든 요소 로드 후 높이 계산 (포인트 !!!)
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

          <Iam />
          <MyHobby />
          <FavorFood />
          <FavorMovie />

        </CustomColumn>
      </CustomBox>
    </Background_Note>
  );
}

export default App;
