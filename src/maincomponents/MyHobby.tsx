import CustomColumn from '../components/CustomColumn.tsx';
import CustomRow from '../components/CustomRow.tsx';
import CustomFont from '../components/CustomFont.tsx';
import StyledImg from '../components/StyledImg.tsx';

function MyHobby() {

	return (

		<CustomColumn $width='85%' $gap='0.5rem'>
			<CustomRow $width='100%' $alignitems='center' $justifycontent='flex-start'>
				<CustomFont $color='black' $font='1rem'>2. 취미는...</CustomFont>
			</CustomRow>
			<CustomRow $width='100%' $height='auto' $alignitems='center' $justifycontent='space-between'>
				<StyledImg src={'Banner_Hobby_2.svg'} $width='60%' />
				<StyledImg src={'Banner_Hobby_Shelf.svg'} $width='40%' />
			</CustomRow>
		</CustomColumn>
	);
}

export default MyHobby;
