let openshopping = document.querySelector('.shopping');
let closeshopping = document.querySelector('.closeshopping');
let list = document.querySelector('.list');
let listcard = document.querySelector('listcard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('quantity');

openshopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeshopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
let product = [
    {
        id:1,
        name:'PRODUCT NAME 1',
        Image:'1.png',
        price:12000
    },
    {
        id:2,
        name:'PRODUCT NAME 2',
        Image:'2.png',
        price:13000
    },
    {
        id:3,
        name:'PRODUCT NAME 3',
        Image:'3.png',
        price:12000
    },
    {
        id:4,
        name:'PRODUCT NAME 4',
        Image:'4.png',
        price:12000
    },
    {
        id:5,
        name:'PRODUCT NAME 5',
        Image:'5.png',
        price:12000
    },
    {
        id:6,
        name:'PRODUCT NAME 6',
        Image:'6.png',
        price:12000
    }
   
];
let listcards = [];
function iniapp(){
    product.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML=`
            <img src="image/$(value.image)"/>
            <div class=tit
        `;
        list.appendChild(newDiv);
    })
}
