document.addEventListener("DOMContentLoaded",function(){
	var nut = document.getElementsByClassName('declick');
	var xoxuong = document.getElementsByClassName('dehienthi');

	for (var l = 0; l < nut.length; l++) {
		nut[l].onclick = function(){
			if(this.classList[1] == 'mautrang'){
				//khi có class màu trắng với xoxuong thì click lần 2 sẽ loại bỏ
				this.classList.remove('mautrang');
				// khi có class ra sẵn thì click lần 2 sẽ loại bỏ        
				var hienthira = this.getAttribute('data-mk');
				var ndhienthira = document.getElementById(hienthira);

				ndhienthira.classList.remove('ra');
			}
			else{
				for (var k = 0; k < nut.length; k++) {
					nut[k].classList.remove('mautrang');
				}
				this.classList.toggle('mautrang');

				// thao tác với data
				var hienthira = this.getAttribute('data-mk');
				var ndhienthira = document.getElementById(hienthira);
				for (var g = 0; g < xoxuong.length; g++) {
					xoxuong[g].classList.remove('ra');
				}

				ndhienthira.classList.toggle('ra');

			}

		}// hết function
		
	}
},false)




	// var nut	= document.getElementsByClassName('declick');
	// var xoxuong = document.getElementsByClassName('dehienthi');

	// for (var i = 0; i < nut.length; i++) {
	// 	/*đảm bảo cho không có 2 nút được click cùng một lúc
	// 	và khi click vào nút thì đổi màu trắng*/

	// 	nut[i].onclick = function(){
	// 		for (var k = 0; k < nut.length; k++) {
	// 			nut[k].classList.remove('mautrang');
	// 		}
	// 		this.classList.toggle('mautrang');

	// 		// thao tác với data
	// 		var hienthira = this.getAttribute('data-mk');
	// 		var ndhienthira = document.getElementById(hienthira);
	// 		for (var g = 0; g < xoxuong.length; g++) {
	// 			xoxuong[g].classList.remove('ra');
	// 		}

	// 		ndhienthira.classList.toggle('ra');

	// 	}
	// }
