import CustomBox from "../components/CustomBox";
import CustomColumn from "../components/CustomColumn";
import CustomFont from "../components/CustomFont";


function Footer() {

	return (
		<CustomBox $width='100%' $height='5rem' $backgroundcolor='#666666' $alignitems='center' $justifycontent='center' $borderradius='0'>
			<CustomColumn $width='100$' $height='auto' $alignitems='center' $justifycontent='center'>
				<CustomFont $color='#D9D9D9' $font='1rem'>
					Life is a maze, and love is a riddle.
				</CustomFont>
			</CustomColumn>
		</CustomBox>
	);
};

export default Footer;
