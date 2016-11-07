
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
		this.xPos = this.startXpos( this.length, this.padding, this.itemWidth );
		

		for ( var i = 0; i < this.length; i++) {
			if (i == 0) {
				this[i] = {avatar:null, x:this.xPos, z:this.zPos }
			} else {
				this[i] = {avatar:null, x:this.xPos + ((this.padding * i) + (this.itemWidth * i)), z:this.zPos }
			}		
		}
	}

	update() {

		this.xPos = this.startXpos( this.length, this.padding, this.itemWidth );

		for (var i = 0; i < this.length; i++ ) {

			if (i == 0) {
				 this[i].avatar.position.x = this.xPos;
			} else {
				this[i].avatar.position.x = this.xPos + ((this.padding * i) + (this.itemWidth * i));
			}
			this[i].avatar.position.z = this.zPos;
		} 
	}

	startXpos( length, padding, itemWidth ) {
	
		 return this.tools.startingXposForRow( length, padding, itemWidth );
	}

	
}