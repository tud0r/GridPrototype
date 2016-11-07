
class Row extends Array {	

	/**
	Row Object 

	creates row with coordinates positions 

	**/

	constructor( length, xPos, padding, itemWidth, zPos ) {
		super( length, xPos, padding, itemWidth, zPos )

		this.length = length;
		this.xPos = xPos;
		this.padding = padding;
		this.itemWidth = itemWidth;
		this.zPos = zPos;

		var tools = new Tools()

		for ( var i = 0; i < this.length; i++) {
			if (i == 0) {
				this[i] = {avatar:null, x:this.xPos, z:this.zPos }
			} else {
				this[i] = {avatar:null, x:this.xPos + ((this.padding * i) + (this.itemWidth * i)), z:this.zPos }
			}		
		}
	}

	update() {
		console.log( "row.update")

		for (var i = 0; i < this.length; i++ ) {

			if (i == 0) {
				this[i].avatar.position.x = this.xPos;
			} else {
				this[i].avatar.position.x = this.xPos + ((this.padding * i) + (this.itemWidth * i));
			}
			this[i].avatar.position.x = this.zPos;
		} 
	}

	
}