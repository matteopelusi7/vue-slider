const app = new Vue ({

    el: '#app',
    data: {

        carouselSlide : [
            {
                items: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                items: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            },
            {
                items: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                items: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                items: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            }
        ],

    },

    methods: {

        buttonDown: function() {

            image[currentIndex].classList.remove('active');
            imageSlider[currentIndex].classList.remove('active');
            titleSlider[currentIndex].classList.remove('active');
            descripionSlider[currentIndex].classList.remove('active');

            if ( currentIndex < image.length - 1 ) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }

            image[currentIndex].classList.add('active');
            imageSlider[currentIndex].classList.add('active');
            titleSlider[currentIndex].classList.add('active');
            descripionSlider[currentIndex].classList.add('active');

        },

        buttonUp: function () {

            image[currentIndex].classList.remove('active');
            imageSlider[currentIndex].classList.remove('active');
            titleSlider[currentIndex].classList.remove('active');
            descripionSlider[currentIndex].classList.remove('active');

            if ( currentIndex > 0 ) {
                currentIndex--;
            } else {
                currentIndex = this.carouselSlide.length - 1;
            }

            image[currentIndex].classList.add('active');
            imageSlider[currentIndex].classList.add('active');
            titleSlider[currentIndex].classList.add('active');
            descripionSlider[currentIndex].classList.add('active');

        }

    }

});

let currentIndex = 0;

const image = [...document.getElementsByClassName('item')];
image[currentIndex].classList.add('active');

const imageSlider = {...document.getElementsByClassName('item-slide')};
imageSlider[currentIndex].classList.add('active');

const titleSlider = {...document.getElementsByClassName('title-slider')};
titleSlider[currentIndex].classList.add('active');

const descripionSlider = {...document.getElementsByClassName('description-slide')};
descripionSlider[currentIndex].classList.add('active');