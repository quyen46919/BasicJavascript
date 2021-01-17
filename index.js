document.addEventListener('DOMContentLoaded',() => {
    var btn = document.querySelectorAll('._1element');
    var dropdown = document.querySelectorAll('.drop-down');
    console.log(dropdown);
//block scope
    for (let i = 0; i < btn.length; i++) {
       btn[i].addEventListener('click',function(){
        // bỏ hết tất cả class của thằng có active hiện tại
            if(this.classList.contains('active') == 1){
                this.classList.remove('active');
                dropdown[i].classList.remove('active2');                
            }        
            else {
                // nếu cái nút mà có active thì phải hiển thị cái dropdown -> dropdown phải thêm class active2
                // bỏ hết những thằng khác đang có active
                for (let y = 0; y < btn.length; y++) {
                    btn[y].classList.remove('active'); 
                }
                // thêm active vào thằng được bấm
                this.classList.add('active');

                for (let z = 0; z < dropdown.length; z++) {
                    dropdown[z].classList.remove('active2');                
                }
                dropdown[i].classList.add('active2');
            }
       })    
       
    }

},false);