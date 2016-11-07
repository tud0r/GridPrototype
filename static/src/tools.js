
class Tools {

	isEvenNumber( num ) {
		return num % 2 == 0
	}

	startingXposForRow( numberOfAvatarsInRow, padding, plane_W ) {
		var startX = 0

		if( this.isEvenNumber( numberOfAvatarsInRow ) ) {

			var offset = plane_W/2;
			var halfRow = (numberOfAvatarsInRow/2);
			var fistAvatarXpos = ((plane_W * halfRow) + (padding/2)) - offset;
			var paddingTotal  = (padding * (halfRow-1));

			startX = (fistAvatarXpos + paddingTotal);
			return startX * -1;
		} else {

			var halfRowMinusHalfAvatar = Math.floor(numberOfAvatarsInRow / 2)
			startX = (halfRowMinusHalfAvatar * plane_W) + (padding * halfRowMinusHalfAvatar);
			
			return startX * -1
		}
	}

}




