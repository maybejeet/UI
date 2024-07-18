var counter=0;
const slide =document.querySelectorAll(".image")

slide.forEach(
    (image,index) => {
        image.style.left = `${index * 100}%` 
    }
)
const goPrev = () => {
    counter--
    slideImage()
}
const goNext = () => {
    counter++
    slideImage()
}
const slideImage = () =>{
    slide.forEach(
        (image) =>{
            image.style.transform = `translateX( -${counter*100}%)`
        }
    )
}

