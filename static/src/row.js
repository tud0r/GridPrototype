
class Row extends Array {	

	/**
		Row Object 
		creates row with coordinates positions 
	**/

	constructor( length, padding, itemWidth, zPos ) {
		super( length, padding, itemWidth, zPos )

		this.tools = new Tools()

		this.length 	= length;
		this.padding 	= padding;
		this.itemWidth 	= itemWidth;

		this.zPos = zPos;
		this.xPos = this.rowXpos( this.length, this.padding, this.itemWidth );	

		for ( var i = 0; i < this.length; i++) {
			if (i == 0) {
				this[i] = {avatar:null, x:this.xPos, z:this.zPos }
			} else {
				this[i] = {avatar:null, x:this.xPos + ((this.padding * i) + (this.itemWidth * i)), z:this.zPos }
			}		
		}
	};

	addItemAtIndex( index ) {
		this[index] = {avatar:null, x:this.xPos + ((this.padding * index) + (this.itemWidth * index)), z:this.zPos }
		this[index].avatar = new THREE.Mesh(planeGeo, imgMat);
		scene.add( this[index].avatar );
		this.update()
	};

	removeItemAtIndex( index ){
		scene.remove( this[index].avatar );
		this.splice(index, 1);
		this.update()
	};

	update() {
		this.xPos = this.rowXpos( this.length, this.padding, this.itemWidth );
		for (var i = 0; i < this.length; i++ ) {
			if (i == 0) {
				 this[i].avatar.position.x = this.xPos;
			} else {
				this[i].avatar.position.x = this.xPos + ((this.padding * i) + (this.itemWidth * i));
			}
			this[i].avatar.position.z = this.zPos;
		} 
	};

	rowXpos( length, padding, itemWidth ) {
		var startX = 0;

		if( this.tools.isEvenNumber( this.length ) ) {

			var offset = itemWidth/2;
			var halfRow = (this.length/2);
			var fistAvatarXpos = ((plane_W * halfRow) + (padding/2)) - offset;
			var paddingTotal  = (padding * (halfRow-1));
			startX = (fistAvatarXpos + paddingTotal);

			return startX * -1;

		} else {

			var halfRowMinusHalfAvatar = Math.floor(this.length / 2);
			startX = (halfRowMinusHalfAvatar * plane_W) + (padding * halfRowMinusHalfAvatar);
			
			return startX * -1;
		}
	};

	
}