const listBanner=document.querySelector('.listItem')
console.log(listBanner)
const banner=document.getElementsByClassName('items')
const btnLeft=document.querySelector('.btnLeft')
const btnRight=document.querySelector('.btnRight')


let current = 0


const handleChange = ()=>{
    current++
    if(current==banner.length){
        current=0;
    }
    let width = banner[0].offsetWidth
    listBanner.style.transform  = `translateX(${width * -1*current}px)`
}

let handleEvenChangeSlide = setInterval(handleChange ,5000)

btnRight.addEventListener('click', ()=>{
    clearInterval(handleEvenChangeSlide)
    handleChange()
    handleEvenChangeSlide = setInterval(handleChange ,5000)
})

btnLeft.addEventListener('click', ()=>{
    clearInterval(handleEvenChangeSlide)
    if(current==0) {
        current=banner.length-1
    } else{
        current --
    }
    let width = banner[0].offsetWidth
    listBanner.style.transform  = `translateX(${width * -1*current}px)`
    handleEvenChangeSlide = setInterval(handleChange ,5000)
})