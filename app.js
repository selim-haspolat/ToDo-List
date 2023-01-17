const input = document.getElementById('input')
const addBtn = document.querySelector('.fa-plus')
const listMaker = document.querySelector(".list-maker");
const h1 = document.querySelector('h1')
let sec;
const isEmpty = str => !str.trim().length
let localCounter = localStorage.length

console.log(localStorage);




// const localAddId = () =>{
//     console.log(Object.keys(localStorage));
//     console.log(Object.values(localStorage));
//     Object.values(localStorage).map((x,i) => console.log(x.parent))
//     console.log(Array.from(localStorage));
// }
// // x.closest('section').id = Object.keys(localStorage)[i] 
// localAddId()

const localGet = () => {
    Object.keys(localStorage).map(x => {
        sec = document.createElement('section')
        boxIcon = document.createElement('i')
        boxIcon.className = "fa-regular fa-square"
        xIcon = document.createElement('i')
        xIcon.className = "fa-solid fa-xmark"
        span = document.createElement('span')
        content = document.createTextNode(localStorage.getItem(x));
        span.appendChild(content)
        sec.appendChild(boxIcon)
        sec.appendChild(span)
        sec.appendChild(xIcon)
        listMaker.after(sec);
        sec.addEventListener('click', (e) => {
            if(e.target.classList.contains("fa-xmark")){
                console.log(e.target.closest('section').id);
                localStorage.removeItem(e.target.closest('section').id)
                e.target.closest('section').remove()
            }
            else if(e.target.classList.contains("fa-regular")){
                if(e.target.classList.contains("fa-square-check")){
                    e.target.classList.add("fa-square")
                    e.target.classList.remove("fa-square-check")
                }
                else{                
                    e.target.classList.add("fa-square-check")
                    e.target.classList.remove("fa-square")
                }
                e.target.closest("section").classList.toggle('dark')
                e.target.nextElementSibling.classList.toggle('span-line')
            };
        })
    })  
}
localGet()
console.log(Array.from(localStorage));

const sections = document.querySelectorAll('section')
console.log(sections);


// for(i = Array.from(sections).length-1 ; i >= 0; i--){
//     Array.from(sections)[i].id = Object.keys(localStorage)[i]
// }

Array.from(sections).map((x,i) => x.id = Object.keys(localStorage).reverse()[i])
// Array.from(sections).map(x => console.log(x.innerText))
// Array.from(sections).map(x => console.log(x.children[1].closest('section')))
// console.log(sections.outerText);


const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
h1.innerText = `Happy ${days[(new Date().getDay())-1]} ☕📒`



addBtn.addEventListener('click', (e) => {
    if(isEmpty(input.value)){
        input.value = ''
        return alert('write something') 
    }
    sec = document.createElement('section')
    sec.setAttribute("id",`${localCounter}`)
    boxIcon = document.createElement('i')
    boxIcon.className = "fa-regular fa-square"
    xIcon = document.createElement('i')
    xIcon.className = "fa-solid fa-xmark"
    span = document.createElement('span')
    content = document.createTextNode(input.value);
    span.appendChild(content)
    sec.appendChild(boxIcon)
    sec.appendChild(span)
    sec.appendChild(xIcon)
    listMaker.after(sec);
    console.log(input.value);
    localStorage.setItem((localCounter),input.value)
    console.log(localStorage);
    input.value = ''
    sec.addEventListener('click', (e) => {
        if(e.target.classList.contains("fa-xmark")){
            console.log(e.target.closest('section').id);
            localStorage.removeItem(e.target.closest('section').id)
            e.target.closest('section').remove()
        }
        else if(e.target.classList.contains("fa-regular")){
            if(e.target.classList.contains("fa-square-check")){
                e.target.classList.add("fa-square")
                e.target.classList.remove("fa-square-check")
            }
            else{                
                e.target.classList.add("fa-square-check")
                e.target.classList.remove("fa-square")
            }
            e.target.closest("section").classList.toggle('dark')
            e.target.nextElementSibling.classList.toggle('span-line')
        };
    })
    localCounter++
})

window.addEventListener('keyup', (e) => {
    e.code === 'Enter' && addBtn.click()
})