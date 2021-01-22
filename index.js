document.addEventListener('DOMContentLoaded', () => {
    const LEFT = document.querySelector('i.fas.fa-angle-left');
    console.log(LEFT);
    const RIGHT = document.querySelector('i.fas.fa-angle-right');
    console.log(RIGHT);
    const SLIDE = document.querySelectorAll('ul.list-items li.list-item');
    console.log(SLIDE);
    
    // chỉ số của slide đang chiếu
    var presentIndex = 0;
    // chỉ số của slide phía trước
    var previousIndex;
    // chỉ số của slide phía sau
    var nextIndex;
    // tạo ra biến để kiểm tra
    var movingStatus = false;

    // thêm sự kiện khi nút chuyển slide phía bên trái được click
    // LEFT.addEventListener('click', () => {
    //     // nếu moving = true thì return luôn, ko chạy đoạn code phía dưới
    //     if (movingStatus == true){ return false;}
    //     // set moving = true để chắc chắn rằng hàm ko chạy liên tiếp 2 lần
    //     movingStatus = true;
    //     for (let i = 0; i < SLIDE.length - 1 ; i++) {
    //             SLIDE[presentIndex].classList.remove('show');
    //             SLIDE[presentIndex].classList.remove('show1');
    //             SLIDE[presentIndex].classList.add('hidden');
    //     }
    //     // tính chỉ số của phần tử phía trước
    //     previousIndex = presentIndex - 1;
    //     presentIndex = previousIndex < 0 ?  SLIDE.length - 1  :  previousIndex;
    //     console.log("Chỉ số slide hiện tại là : " ,presentIndex);

    //     for (let y = 0; y < SLIDE.length - 1; y++){
    //         SLIDE[presentIndex].classList.remove('hidden');
    //         SLIDE[presentIndex].classList.remove('hidden1');
    //     }
    //     // phần tử tiếp theo hiển thị ra thêm class show vào
    //     SLIDE[presentIndex].classList.add('show');
    //     // dùng sự kiện webkitAnimationEnd để kiểm tra
    //     // chỉ khi animation kết thúc thì mới trả movingStatus về lại false
    //     // từ đó người dùng có thể nhấn tiếp
    //     SLIDE[presentIndex].addEventListener('webkitAnimationEnd',()=> {
    //         movingStatus = false;
    //     })
        
    // });

    // // nút phải tương tự, chỉ có điều sửa chỗ tính toán phần tử tiếp theo
    // RIGHT.addEventListener('click', () => {
    //     if (movingStatus == true){ return false;}
    //     movingStatus = true;
    //     for (let i = 0; i < SLIDE.length - 1 ; i++) {
    //             SLIDE[presentIndex].classList.remove('show');
    //             SLIDE[presentIndex].classList.remove('show1');
    //             SLIDE[presentIndex].classList.add('hidden1');
    //     }
    //     // tính chỉ số của phần tử phía sau
    //     // Nếu slide đang ở vị trí cuối cùng, bấm tiến sẽ phải trả về 0 (slide xoay vòng)
    //     // nếu chưa ở vị trí cuối cùng, thì vẫn tiến bình thường
    //     nextIndex = presentIndex + 1;
    //     presentIndex = nextIndex > SLIDE.length - 1 ?  0  :  nextIndex;
    //     console.log("Chỉ số slide hiện tại là : " ,presentIndex);
    //     for (let y = 0; y < SLIDE.length - 1; y++){
    //         SLIDE[presentIndex].classList.remove('hidden');
    //         SLIDE[presentIndex].classList.remove('hidden1');
    //     }
    //     SLIDE[presentIndex].classList.add('show1');
    //     SLIDE[presentIndex].addEventListener('webkitAnimationEnd',()=> {
    //         movingStatus = false;
    //     })
    // });

    function leftOrRight(button){
        // dùng vòng lặp để xóa class show trước khi thêm mới class hidden
        if (movingStatus == true){ return false;}
            movingStatus = true;
        for (let i = 0; i < SLIDE.length - 1 ; i++) {
            SLIDE[presentIndex].classList.remove('show');
            SLIDE[presentIndex].classList.remove('show1');
        }
        // kiểm tra nút được nhấn là nút nào, từ đó thêm class tương ứng
        if (button == 'left'){
            SLIDE[presentIndex].classList.add('hidden');
            presentIndex = presentIndex - 1;
            if (presentIndex < 0){
                presentIndex = SLIDE.length - 1;
            }
        }
        if (button == 'right'){
            SLIDE[presentIndex].classList.add('hidden1');
            presentIndex = presentIndex + 1;
            if (presentIndex > SLIDE.length - 1){
                presentIndex = 0;
            }
        }

        // dùng vòng lặp để xóa class hidden trước khi thêm class show
        for (let y = 0; y < SLIDE.length - 1; y++){
            SLIDE[presentIndex].classList.remove('hidden');
            SLIDE[presentIndex].classList.remove('hidden1');
        }
        // kiểm tra nút để thêm class tương ứng
        if (button == 'left'){
            SLIDE[presentIndex].classList.add('show');
        } else {
            SLIDE[presentIndex].classList.add('show1');
        }
        SLIDE[presentIndex].addEventListener('webkitAnimationEnd',()=> {
            movingStatus = false;
        })
    }
    LEFT.addEventListener('click', () => {leftOrRight('left')});
    RIGHT.addEventListener('click', () => { leftOrRight('right')});
}, false)

