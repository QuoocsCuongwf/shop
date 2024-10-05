const listItem = document.querySelector('.listItem')
console.log(listItem)
const items=document.getElementsByClassName('item')
const btnLeft=document.querySelector('.btnLeft')
const btnRight=document.querySelector('.btnRight')
let current = 0
const handleChange = ()=>{
    current++
    if(current==items.length){
        current=0;
    }
    let width = items[0].offsetWidth
    listItem.style.transform  = `translateX(${width * -1*current}px)`
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
        current=items.length-1
    } else{
        current --
    }
    let width = items[0].offsetWidth
    listItem.style.transform  = `translateX(${width * -1*current}px)`
    handleEvenChangeSlide = setInterval(handleChange ,5000)
})

