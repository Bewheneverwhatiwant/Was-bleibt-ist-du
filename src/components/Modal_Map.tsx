import React, { MouseEventHandler, useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactPortal from './ReactPortal';

import CustomFont from './CustomFont';
import CustomColumn from './CustomColumn';
import CustomRow from './CustomRow';

import KakaoMap from './KakaoMap';

const ModalOverlay = styled.div`
    position: fixed;
	top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
	background-color: transparent;
	background-image: url('icon_big_postit.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 320px;
	height: 600px;
	padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    gap: 3rem;
`;

interface ModalProps {
	isOpen: boolean;
	onClose: MouseEventHandler<HTMLDivElement>;
}

const Modal_Map: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	const [showMap, setShowMap] = useState(false);

	useEffect(() => {
		if (isOpen) {
			// 모달이 열리면 지연 없이 KakaoMap 표시
			setShowMap(true);
			console.log(showMap);
		} else {
			setShowMap(false);
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<ReactPortal>
			<ModalOverlay onClick={onClose}>
				<ModalContainer onClick={(e) => e.stopPropagation()}>
					<CustomColumn $width="100%" $height='100%' $alignitems="center" $justifycontent="flex-end" $gap="2rem">
						<CustomRow $width="100%" $alignitems="center" $justifycontent="center">
							<CustomFont $color="black" $font="1.2rem" $fontweight="bold">
								MEMO
							</CustomFont>
						</CustomRow>
						<KakaoMap />
					</CustomColumn>
				</ModalContainer>
			</ModalOverlay>
		</ReactPortal>
	);
};


export default Modal_Map;