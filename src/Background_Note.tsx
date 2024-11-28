import './RecetCss.tsx';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  overflow-y: hidden;
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
  margin-bottom: 1rem;
`;

const StyledImage = styled.img`
  width: 3rem;
  margin-bottom: 4rem;
  z-index: 10;
`;

interface BackgroundNoteProps {
	children: React.ReactNode;
}

const Background_Note: React.FC<BackgroundNoteProps> = ({ children }) => {
	const [images, setImages] = useState<number[]>([]);

	useEffect(() => {
		const updateImages = () => {
			const containerHeight = document.documentElement.scrollHeight; // 전체 문서 높이
			const viewportHeight = window.innerHeight; // 화면 높이
			const hasScroll = containerHeight > viewportHeight; // 스크롤 여부 확인

			if (hasScroll) {
				// 스크롤이 있는 경우
				const newCount = Math.ceil(window.scrollY / 60) + Math.ceil(viewportHeight / 60);
				setImages(Array.from({ length: newCount }, (_, i) => i));
			} else {
				// 스크롤이 없는 경우 화면에 8개만 균등하게 표시
				const evenlySpacedCount = 8;
				setImages(Array.from({ length: evenlySpacedCount }, (_, i) => i));
			}
		};

		window.addEventListener('scroll', updateImages);
		updateImages(); // 초기 렌더링 시에도 호출

		return () => window.removeEventListener('scroll', updateImages);
	}, []);

	return (
		<Wrapper>
			<AbsoluteImageContainer>
				{images.map((_, index) => (
					<StyledImage key={index} src={'component_spring.svg'} />
				))}
			</AbsoluteImageContainer>
			{children}
		</Wrapper>
	);
};

export default Background_Note;
