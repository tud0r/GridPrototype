
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
		this.xPos = this.setXpos();	

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
		var planeGeometry = new THREE.PlaneGeometry( this.itemWidth, (this.itemWidth * 0.75), 1);
		this[index].avatar = new THREE.Mesh(planeGeometry, imgMat);
		scene.add( this[index].avatar );
		this.update();
	};

	removeItemAtIndex( index ){
		scene.remove( this[index].avatar );
		this.splice(index, 1);
		this.update();
	};

	update() {
		this.xPos = this.setXpos();
		for (var i = 0; i < this.length; i++ ) {
			if (i == 0) {
				 this[i].avatar.position.x = this.xPos;
			} else {
				this[i].avatar.position.x = this.xPos + ((this.padding * i) + (this.itemWidth * i));
			}
			this[i].avatar.position.z = this.zPos;
		} 
	};

	setXpos() {
		var startX = 0;

		if( this.tools.isEvenNumber( this.length ) ) {

			var offset = (this.itemWidth / 2);
			var halfRow = (this.length / 2);
			var fistAvatarXpos = ((this.itemWidth * halfRow) + (this.padding/2)) - offset;
			var paddingTotal  = (this.padding * (halfRow-1));
			startX = (fistAvatarXpos + paddingTotal);

			return startX * -1;

		} else {

			var halfRowMinusHalfAvatar = Math.floor(this.length / 2);
			startX = (halfRowMinusHalfAvatar * this.itemWidth) + (this.padding * halfRowMinusHalfAvatar);
			
			return startX * -1;
		}
	};

	
}