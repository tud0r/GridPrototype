class GridMatrix {
	
	constructor( size, rowPadding, itemWidth ) {

		this.size = size; 
		this.matrix = this.setMatrix(this.size);
		this.rowsCount = this.matrix.length;
		this.rows = [];
		this.firstRowZpos = (rowPadding * -1);
		this.padding = rowPadding;
		this.rowZpadding = [];

		this.setRowPadding( this.padding ); 			// populates rowZpaddingArray 
		this.createGridRows( this.padding, itemWidth ); // create grid
		this.populateGrid();
	};

	updateMatrix( newSize ) {
		// // update grid layout
		this.size = newSize;
		this.matrix = this.setMatrix( this.size );

		for (var i = 0; i < this.matrix.length; i ++) {

			var newRowCount = this.matrix[i];
			var rowCount = this.rows[i].length;
			var row = this.rows[i];
	
			if ( newRowCount > rowCount ) {
				for (var k=0; k < newRowCount; k++ ) {
					if (row[k] == null ) {
						row.addItemAtIndex(k);
					}
				}	

			} else if (newRowCount < rowCount) {

				var diff = (rowCount - newRowCount);
				for (var k=0; k< diff; k++) {
					var index = rowCount - (k+1);
					row.removeItemAtIndex(index);
				}

			} else {
				// no change needed for position if using same avatar image 
				// otherwise here you could update avatar images for items in the grid
				// console.log( "[~] update "+rowCount+" existing avatars")

				// row.update();
			}
		}
	};

	updateItemSize( newItemWidth ) {
		for (var i = 0; i < this.rowsCount; i++ ) {

			var row = this.rows[i];
			row.itemWidth = newItemWidth;
			row.update()

			for ( var k = 0; k < row.length; k++ ) {
				 var newPlaneGeometry = new THREE.PlaneGeometry( newItemWidth, (newItemWidth * 0.75), 1);
				 row[k].avatar.geometry = newPlaneGeometry;
			};
			// row.update(); //decided to call update earlier to update row before scaling items
		}
	};


	/**********************************
			 CREATE GRID 
	**********************************/
	createGridRows( rowItemPaddding, itemWidth ) {
		for (var i=0; i < this.rowsCount; i++ ) {

			var row = new Row( this.matrix[i], rowItemPaddding, itemWidth, this.rowZpadding[i]);
			this.rows[i] = row;
		};
	};


	/********************************************************
		 CREATE AVATARS AND POPULATE GRID SLOTS
		 (set Avatar coords to match coords of slots in grid rows)
	*********************************************************/ 
	populateGrid() {
		for ( var i = 0; i < this.rowsCount; i++ ) {

			var row = this.rows[i];

			for (var k = 0; k < row.length; k++ ) {

				if (row[k].avatar == null) {

					row[k].avatar = new THREE.Mesh(planeGeo, imgMat); 
					row[k].avatar.position.x = row[k].x;
					row[k].avatar.position.z = row[k].z;
					scene.add( row[k].avatar )

				} else {
					row[k].avatar.position.x = row[k].x;
					row[k].avatar.position.z = row[k].z;
				}
			}
		}
	};

	setRowPadding( zPadding ) {
		this.padding = zPadding;
		for ( var i = 0; i < this.rowsCount; i++) {
			var rowIndex = [i];

			// this.firstRowZpos = (this.padding * -1) // uncomment to update padding for first row
		
			this.rowZpadding[ rowIndex ] = (this.firstRowZpos  + (rowIndex * this.padding) * -1);
		}

		console.log( "grid.setRowPadding - padding", this.padding);
		console.log( "grid.rowZpadding - rowZpadding", this.rowZpadding);
	};



	setMatrix( size ) {

		var key = String( size );

		var four_row_matrix_config = {
			"1":[0, 1, 0, 0],
			"2":[2, 0, 0, 0],
			"3":[2, 1, 0, 0],
			"4":[4, 0, 0, 0],
			"5":[4, 1, 0, 0],
			"6":[4, 0, 2, 0],
			"7":[4, 3, 0, 0],
			"8":[4, 1, 2, 1],
			"9":[2, 3, 4, 0],
			"10":[4, 3, 2, 1],
			"11":[4, 3, 4, 0],
			"12":[4, 3, 4, 1],
			"13":[4, 3, 2, 3],
			"14":[4, 3, 4, 3],
			"15":[4, 5, 6, 0],
			"16":[4, 5, 6, 1],
			"17":[6, 5, 6, 0],
			"18":[6, 5, 4, 3],
			"19":[6, 7, 6, 0],
			"20":[6, 5, 6, 3],
			"21":[6, 7, 8, 0],
			"22":[6, 7, 8, 1],
			"23":[6, 7, 8, 2],
			"24":[0, 1, 0, 0],
			"25":[0, 1, 0, 0]
		};
		return four_row_matrix_config[key];
	};


}