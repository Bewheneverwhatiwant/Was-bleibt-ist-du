import './RecetCss.tsx';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Footer from './maincomponents/Footer.tsx';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: #B2D1E7;
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
			const imageHeight = 60; // 스프링 이미지 높이

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
						<StyledImage key={index} src={'icon_spring_2.svg'} />
					))}
				</AbsoluteImageContainer>
				{children}
			</Wrapper>
			<Footer />
		</>
	);
};

export default Background_Note;
