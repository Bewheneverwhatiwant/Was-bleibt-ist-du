import './RecetCss.tsx';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import CustomColumn from './components/CustomColumn.tsx';
import CustomBox from './components/CustomBox.tsx';
import CustomFont from './components/CustomFont.tsx';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #422A07;
`;

const AbsoluteImageContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;

`;

const StyledImage = styled.img`
  width: 3rem;
  margin-bottom: 35px;
  z-index: 10;
`;

interface BackgroundNoteProps {
	children: React.ReactNode;
	contentHeight: number;
}

const Background_Note: React.FC<BackgroundNoteProps> = ({ children, contentHeight }) => {
	const [images, setImages] = useState<number[]>([]);

	useEffect(() => {
		const updateImages = () => {
			const imageHeight = 60; // 각 이미지의 높이(px)

			// contentHeight / 이미지 높이로 필요한 이미지 수 계산
			const requiredImagesCount = Math.ceil(contentHeight / imageHeight);
			console.log('필요한 스프링 개수는:', requiredImagesCount);

			// 배열 업데이트
			setImages(Array.from({ length: requiredImagesCount }, (_, i) => i));
		};

		updateImages();
	}, [contentHeight]); // contentHeight가 변경될 때마다 업데이트


	return (
		<>
			<Wrapper>
				<AbsoluteImageContainer>
					{images.map((_, index) => (
						<StyledImage key={index} src={'component_spring.svg'} />
					))}
				</AbsoluteImageContainer>
				{children}
			</Wrapper>
			<CustomBox $width='100%' $height='5rem' $backgroundcolor='#666666' $alignitems='center' $justifycontent='center' $borderradius='0'>
				<CustomColumn $width='100$' $height='auto' $alignitems='center' $justifycontent='center'>
					<CustomFont $color='#D9D9D9' $font='1rem'>
						Life is a maze, and love is a riddle.
					</CustomFont>
				</CustomColumn>
			</CustomBox>
		</>
	);
};

export default Background_Note;
