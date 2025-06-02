const cookiesList = [
    {
        name: '🟤 Пряничный дуэт',
        desc: 'Классическое имбирное печенье с лёгкой хрустящей корочкой и тёплым ароматом специй. Идеально к чаю в холодный день.',
        price: '220 ₽',
        weght: '6 шт./ 180 г.',
        img: './img/pngegg (4).png'
    },
    {
        name: '🍬 Ореховая тарелка',
        desc: 'Ассорти мини-печений с ореховой пастой и карамелью. Подходит для подарков и чаепитий.',
        price: '680 ₽',
        weght: '2 шт./ 420 г.',
        img: './img/pngegg (3).png'
    },
    {
        name: '🍥 Воздушные облака',
        desc: 'Лёгкие безе-печенья с тающей текстурой. Белоснежные, нежные и идеально сладкие.',
        price: '360 ₽',
        weght: '6 шт./ 120 г.',
        img: './img/pngegg (5).png'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productsList = document.querySelector('.products-list');

    cookiesList.forEach((cookie) => {
        const dpi = document.createElement('div');
        dpi.setAttribute('class', 'product-item');

        const dib = document.createElement('div');
        dib.setAttribute('class', 'product-img-box');

        const pi = document.createElement('img');
        pi.setAttribute('class', 'product-img');
        pi.setAttribute('alt', cookie.name);
        pi.setAttribute('src', cookie.img);

        const dpinfo = document.createElement('div');
        dpinfo.setAttribute('class', 'product-info');

        const dpt = document.createElement('div');
        dpt.setAttribute('class', 'product-title');
        dpt.innerText = cookie.name;

        const dpd = document.createElement('div');
        dpd.setAttribute('class', 'product-description');
        dpd.innerText = cookie.desc;

        const dpf = document.createElement('div');
        dpf.setAttribute('class', 'product-footer');

        const dpp = document.createElement('div');
        dpp.setAttribute('class', 'product-price');
        dpp.innerText = cookie.price;

        const dpw = document.createElement('div');
        dpw.setAttribute('class', 'product-weight');
        dpw.innerText = cookie.weght;

        const btn = document.createElement('button');
        btn.setAttribute('class', 'btn btn-primary');
        btn.innerText = 'Заказать';

        dpi.append(dib);
        dib.append(pi);
        dpi.append(dpinfo);
        dpinfo.append(dpt);
        dpinfo.append(dpd);
        dpinfo.append(dpf);
        dpf.append(dpp);
        dpf.append(dpw);
        dpf.append(btn);

        productsList.appendChild(dpi);
    });
});




let btn = document.getElementById('action-btn');

btn.addEventListener('click', () => {
     document.getElementById('products').scrollIntoView({behavior: 'smooth'});
})

// const exchangeBtn = document.getElementById('exchange'); // ref na exchange 
// const productsPrice =  document.querySelectorAll('.product-price');
            

//exchangeBtn.addEventListener('click', 
//        () => {
//            productsPrice.forEach((element)=> {
//                currentPrice = element.getAttribute('data-current-price');
//
//                if(element.innerText.slice(-1) == '₽') {
//                    element.innerText = currentPrice + ' $';
//                } else {                    
//                    element.innerText =  currentPrice * 105 + ' ₽'; 
//                }
//            
//           })
//        }
// )
