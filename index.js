const wrapper = document.querySelector(".sliderWrapper");
const menu = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 8999,
        colors: [
            {
                code: "black",
                img: "./img/air.png"
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            }
        ]
    },
    {
        id: 2,
        title: "Air jorden",
        price: 9999,
        colors: [
            {
                code: "black",
                img: "./img/jordan.png"
            },
            {
                code: "darkblue",
                img: "./img/jordan2.png"
            }
        ]
    },

    {
        id: 3,
        title: "Blazer",
        price: 5999,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png"
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            }
        ]
    },
    {
        id: 4,
        title: "Crater",
        price: 4999,
        colors: [
            {
                code: "black",
                img:"./img/crater.png"
            },
            {
                code: "lightgray",
                img: "./img/crater2.png"
            }
        ]
    },
    {
        id: 5,
        title: "Hippie",
        price: 2999,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            }
        ]
    }
]

let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")


menu.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw`;

        choosenProduct = products[index]

        //change the choosen product
        choosenProduct = products[index]

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent ="₹ "+ choosenProduct.price
        
        currentProductImg.src = choosenProduct.colors[0].img
//change assinging new colors
        currentProductColors.forEach((color, index) => {
color.style.backgroundColor = choosenProduct.colors[index].code

        })


    });
});


currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
             size.style.backgroundColor = "white"
        size.style.color = "black"
        })
       size.style.backgroundColor="black"
       size.style.color = "white"
    })
})


let close =document.querySelector(".close")
let open = document.querySelector(".productButton")
let payment = document.querySelector(".payment")
open.addEventListener("click",() =>{
    payment.style.display ="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"

})