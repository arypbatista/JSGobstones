// Author: Ary Pablo Batista <arypbatista@gmail.com>
/*
	This file is part of JSGobstones.
    JSGobstones is free software: you can redistribute it and/or 
    modify it under the terms of the GNU General Public License as published 
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    JSGobstones is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with JSGobstones.  If not, see <http://www.gnu.org/licenses/>.
*/


/// <reference path="IBoard.ts" />
/// <reference path="./formats/GbtBoardFormat.ts" />

class BoardPrinter {
	
	toString(board:IBoard) {
		var format:IBoardFormat = new GbtBoardFormat()
		return format.dump(board)
	}
	
	print(board:IBoard) {
		console.log(this.toString(board))
	}
	
}