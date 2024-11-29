import CustomColumn from '../components/CustomColumn.tsx';
import CustomRow from '../components/CustomRow.tsx';
import CustomFont from '../components/CustomFont.tsx';
import StyledImg from '../components/StyledImg.tsx';

function FavorMovie() {

	return (

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
	);
}

export default FavorMovie;
