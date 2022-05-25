// play video
const about_video = document.querySelector('.about_video')
const lightbox = document.querySelector('.lightbox')
const light_content = document.querySelector('.light_content')


about_video.addEventListener('click', () => {
    lightbox.classList.add('lightbox_play')
})
lightbox.addEventListener('click', () =>{
    lightbox.classList.remove('lightbox_play')
})
light_content.addEventListener('click', (e) =>{
    e.stopPropagation();
});
// bookin notification
(() =>{
    if(!("Notification" in window)){
        alert('Notification Api Not Suppoted')
    }
    if(Notification.permission === "granted"){}
    else
       Notification.requestPermission(permission =>{
        if(permission === "granted"){
           }else{
               alert('Permission Not Granted')
           }
       })
    
})();
const btn_book = document.querySelector('#btn_book')

btn_book.addEventListener("click", bookingNotification)

function bookingNotification() {
    const notification = new Notification('Thanks For Booking a table')
};
// Selector
const image_lightbox = document.querySelector('.image_lightbox');
const image_lightbox_content = document.querySelector('.image_lightbox');
const lightbox_img = document.querySelector('.lightbox_img img');
const img_gallery = document.querySelectorAll('.img_gallery');


// Images Gallery
img_gallery.forEach((img) => {
    img.addEventListener('click', () => {
        image_lightbox.classList.add('show_img')
        lightbox_img.src = img.src
    })
})

image_lightbox_content.addEventListener('click', () =>{
    image_lightbox.classList.remove('show_img')
})

// nav_btn_mobile_screen

const mobile_nav_btn = document.querySelector('.mobile_nav_btn')
const nav_bar = document.querySelector('.nav_bar')

const togglenavbar = (e) => {
    nav_bar.classList.toggle('active')
    e.preventDefault()
}
mobile_nav_btn.addEventListener('click', (e) => togglenavbar(e))