
// mengurus bottom navbar

// const Menutogle = document.querySelector('.menu-toggle input')
// const navMarkup = document.querySelector('.navbar-nav')


// Menutogle.addEventListener('click', function () {
//     navMarkup.classList.toggle('slide');
// })



// mengurusi quates

const quates = document.querySelector(".p-quates");  

window.addEventListener('scroll', function() {
    var wScroll = quates.getBoundingClientRect().top; 
    //  (buat tes posisi dari atas ke bawah)
    // console.log(wScroll); 

    if (wScroll < 539.1875) {

        // quates.classList.add('muncul');

        gsap.to(quates, {duration: 4, text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur obcaecati iusto repellat."'})
    }
});