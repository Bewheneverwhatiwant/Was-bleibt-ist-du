import CustomColumn from '../components/CustomColumn.tsx';
import CustomRow from '../components/CustomRow.tsx';
import CustomFont from '../components/CustomFont.tsx';
import StyledImg from '../components/StyledImg.tsx';
import CustomButton from '../components/CustomButton.tsx';

function Iam() {

	const GoNY = () => {
		window.location.href = 'https://mobile-leenayeong.vercel.app/';
	};

	return (

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
	);
}

export default Iam;
