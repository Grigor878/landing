//isShowBtn & isShowBtn_hide
window.onload = () => {

    const scrollBtn = document.querySelector('.isShowBtn')

    window.onscroll = () => {
        if (window.scrollY > 700) {
            scrollBtn.classList.remove('isShowBtn_hide');
        } else if (window.scrollY < 700) {
            scrollBtn.classList.add('isShowBtn_hide');
        }
    };

    scrollBtn.onclick = () => {
        window.scrollTo(0, 0);
    };
};


$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1133,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 652,
                settings: {
                    slidesToShow: 4
                }

            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 267,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});