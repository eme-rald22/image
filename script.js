const filterButtons= document.querySelectorAll(".filter-btn");
const galleryImages= document.querySelectorAll(".gallery img");

 filterButtons.forEach(function(btn) {
    btn.addEventListener("click", function (){
        filterButtons.forEach(function(b){
            b.classList.remove("active");
        });
        btn.classList.add("active");
            const filter = btn.dataset.filter;

        galleryImages.forEach(function (img) {
            if (filter==="all"||img.dataset.category===filter) {
                img.style.display="block";
            }else{
                img.style.display="none";
            }
            });
 
        });
    });



const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn=document.getElementById("closeBtn");
const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");

let currentIndex=0;
function openLightbox(index){
    currentIndex=index;
    lightboxImg.src=images[currentIndex].src;
    lightbox.classList.add("active");
}
images. forEach(function(img){
    img.addEventListener("click", function(){
        lightboxImg.src=img.src;
        lightbox.classList.add("active");
    });
});
closeBtn.addEventListener("click",function(){
    lightbox.classList.remove("active")
})
nextBtn.addEventListener("click",function(){
    currentIndex=(currentIndex+1 + images.length)%images.length;
    lightboxImg.src=images[currentIndex].src;
});
prevBtn.addEventListener("click",function(){
    currentIndex=(currentIndex-1 + images.length)%images.length;
    lightboxImg.src=images[currentIndex].src;

});