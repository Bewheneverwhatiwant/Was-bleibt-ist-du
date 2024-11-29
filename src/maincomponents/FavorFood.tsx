import CustomColumn from '../components/CustomColumn.tsx';
import CustomRow from '../components/CustomRow.tsx';
import CustomFont from '../components/CustomFont.tsx';
import StyledImg from '../components/StyledImg.tsx';

function FavorFood() {

	return (

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
	);
}

export default FavorFood;
