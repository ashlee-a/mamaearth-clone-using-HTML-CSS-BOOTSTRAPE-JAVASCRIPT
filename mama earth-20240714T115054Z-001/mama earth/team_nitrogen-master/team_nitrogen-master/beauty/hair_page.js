window.addEventListener('load', function(){
    showData()
})

let all = document.getElementById('all').addEventListener('click',all_filter)
let hair_oil = document.getElementById('hair_oil').addEventListener('click',hair_oil_filter)
let hair_mask = document.getElementById('hair_mask').addEventListener('click',hair_mask_filter)
let shampoo = document.getElementById('shampoo').addEventListener('click',shampoo_filter)
let conditioner = document.getElementById('conditioner').addEventListener('click',conditioner_filter)

function all_filter(){
    fetch(`https://nitrogen-project.herokuapp.com/hair_page`)
    .then(res => res.json())
    .then(res => displayData(res))
}

function hair_oil_filter(){
    fetch(`https://nitrogen-project.herokuapp.com/hair_page?category=hair_oil`)
    .then(res => res.json())
    .then(res => {
        displayData(res)
        console.log(res)
    })
}

function hair_mask_filter(){
    fetch(`https://nitrogen-project.herokuapp.com/hair_page?category=hair_mask`)
    .then(res => res.json())
    .then(res => {
        displayData(res)
        console.log(res)
    })
}
function shampoo_filter(){
    fetch(`https://nitrogen-project.herokuapp.com/hair_page?category=shampoo`)
    .then(res => res.json())
    .then(res => {
        displayData(res)
        console.log(res)
    })
}

function conditioner_filter(){
    fetch(`https://nitrogen-project.herokuapp.com/hair_page?category=conditioner`)
    .then(res => res.json())
    .then(res => {
        displayData(res)
        console.log(res)
    })
}




function showData(){
    let url = "https://nitrogen-project.herokuapp.com/hair_page"
    fetch(url)
    .then(res => res.json())
    .then(res => displayData(res))
}


function displayData(data){
    let product = ""

    for( i in data){
        product +=
         `<div id = "cards">
         <img src="${data[i].img}"></img>
         <h5>${data[i].desc}</h5>
         <h4>${data[i].price}</h4>
         <div class="row">
            <p>${data[i].rating}<i class="fa fa-star"></i></p>
            <button>ADD TO CART</button>
         </div>
        </div>`
        document.getElementById('card').innerHTML = product
    } 
}





// function displayData(data){
//     let cards = document.getElementById('cards')
    
//     for(i in data){
//         let card = document.createElement('div')
//         card.setAttribute('class', 'card')
//         cards.append(card)

//         let img = document.createElement('img')
//         img.src = data[i].img
//         img.setAttribute('class', 'image')
//         card.append(img)

//         let desc = document.createElement('p')
//         desc.setAttribute('class', 'desc')
//         desc.textContent = data[i].desc
//         card.append(desc)

//         let price = document.createElement('p')
//         price.setAttribute('class', 'price')
//         price.textContent = data[i].price
//         card.append(price)

//         let bottom_div = document.createElement('div')
//         bottom_div.setAttribute('class', 'bottom_div')
//         card.append(bottom_div)

//         let div = document.createElement('div')
//         div.setAttribute('class', 'div')
//         bottom_div.append(div)

//         let rating = document.createElement('p')
//         rating.setAttribute('class', 'rating')
//         rating.textContent = data[i].rating
//         div.append(rating)

//         let rating_img = document.createElement('img')
//         rating_img.setAttribute('class', 'rating_img')
//         rating_img.src = data[i].rating_img
//         div.append(rating_img)

//         let cart_btn = document.createElement('button')
//         cart_btn.setAttribute('class', 'cart_btn')
//         cart_btn.textContent="ADD TO CART"
//         bottom_div.append(cart_btn)

//     }
// }