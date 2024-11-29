import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

import CustomFont from './CustomFont';
import CustomColumn from './CustomColumn';
import CustomRow from './CustomRow';

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
	background-image: url('icon_postit.svg');
	background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 280px;
    height: 300px;
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

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	// 모달이 열려있을 때만 렌더링
	if (!isOpen) return null;

	return (
		<ModalOverlay onClick={onClose}>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<CustomColumn $width='100%' $alignitems='flex-start' $justifycontent='center' $gap='1.5rem'>
					<CustomRow $width='100%' $alignitems='center' $justifycontent='center'>
						<CustomFont $color='black' $font='1.2rem' $fontweight='bold'>MEMO</CustomFont>
					</CustomRow>

					<CustomColumn $width='100%' $alignitems='center' $justifycontent='center' $gap='0.5rem'>
						<CustomFont $color='black' $font='0.8rem'>꾸덕한 오리지널 짜빠게티</CustomFont>
						<CustomFont $color='black' $font='0.8rem'>구운 베이컨 반찬</CustomFont>
						<CustomFont $color='black' $font='0.8rem'>구운 새송이버섯 반찬</CustomFont>
						<CustomFont $color='black' $font='0.8rem'>삼겹살, 김치, 된장찌개, 공기밥</CustomFont>
						<CustomFont $color='black' $font='0.8rem'>마라탕(유부 필수)</CustomFont>
					</CustomColumn>
				</CustomColumn>
			</ModalContainer>
		</ModalOverlay>
	);
};

export default Modal;