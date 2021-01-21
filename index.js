document.addEventListener('DOMContentLoaded', () => {
    const LEFT = document.querySelector('i.fas.fa-angle-left');
    console.log(LEFT);
    const RIGHT = document.querySelector('i.fas.fa-angle-right');
    console.log(RIGHT);
    const SLIDE = document.querySelectorAll('ul.list-items li.list-item');
    console.log(SLIDE);
    
    // chỉ số của slide đang chiếu
    var chiSoHienTai = 0;
    // chỉ số của slide phía trước
    var chiSoPhiaTruoc;
    var chiSoPhiaSau;
    LEFT.addEventListener('click', () => {
        for (let i = 0; i < SLIDE.length - 1 ; i++) {
            for (let y = 0; y < SLIDE.length - 1; y++){
                SLIDE[chiSoHienTai].classList.remove('show');
                SLIDE[chiSoHienTai].classList.add('hidden');
            }
        }
        chiSoPhiaTruoc = chiSoHienTai - 1;
        chiSoHienTai = chiSoPhiaTruoc < 0 ?  SLIDE.length - 1  :  chiSoPhiaTruoc;
        console.log("Chỉ số slide hiện tại là : " ,chiSoHienTai);
        for (let y = 0; y < SLIDE.length - 1; y++){
            SLIDE[chiSoHienTai].classList.remove('hidden');
        }
        SLIDE[chiSoHienTai].classList.add('show');
    });
    RIGHT.addEventListener('click', () => {
        for (let i = 0; i < SLIDE.length - 1 ; i++) {
            for (let y = 0; y < SLIDE.length - 1; y++){
                SLIDE[chiSoHienTai].classList.remove('show');
                SLIDE[chiSoHienTai].classList.add('hidden');
            }
        }
        chiSoPhiaSau = chiSoHienTai + 1;
        chiSoHienTai = chiSoPhiaSau > SLIDE.length - 1 ?  0  :  chiSoPhiaSau;
        console.log("Chỉ số slide hiện tại là : " ,chiSoHienTai);
        for (let y = 0; y < SLIDE.length - 1; y++){
            SLIDE[chiSoHienTai].classList.remove('hidden');
        }
        SLIDE[chiSoHienTai].classList.add('show');
    });
    
    
}, false)

