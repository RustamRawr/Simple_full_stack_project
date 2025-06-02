const cookiesList = [
    {
        name: '1',
        desc: 'dasfasdf 1',
        price: '1',
        weght: '2 шт./ 200гр.',
        img: './img/1.png'
    },
    {
        name: '2',
        desc: 'dasfasdf 2',
        price: '2',
        weght: '2 шт./ 200гр.',
        img: './img/2.png'
    },
    {
        name: '3',
        desc: 'dasfasdf 3',
        price: '3',
        weght: '2 шт./ 200гр.',
        img: './img/3.png'
    }
    
];

document.addEventListener('DOMContentLoaded', ()=>{
    const productsList = document.querySelector('.products-list');
    
    cookiesList.forEach((cookie)=>{
        const dpi = document.createElement('div');
              dpi.setAttribute('class','product-item' );
        const dib = document.createElement('div');
              dib.setAttribute('class','product-img-box' );
        const pi = document.createElement('img');
            pi.setAttribute('class','product-img' );
            pi.setAttribute('alt', cookie.name );
            pi.setAttribute('src',cookie.img );
        const dpinfo = document.createElement('div');
            dpinfo.setAttribute('class','product-info' );
        const dpt = document.createElement('div');
            dpt.setAttribute('class','product-title' );
            dpt.innerText = cookie.name;
        const dpd = document.createElement('div');
            dpd.setAttribute('class','product-description' );
            dpd.innerText = cookie.desc;
        const dpf = document.createElement('div');
            dpf.setAttribute('class','product-footer' );
        const dpun = document.createElement('div');
        const dpp = document.createElement('div');
            dpp.setAttribute('class','product-price' );
            dpp.setAttribute('data-current-price', '20');
            dpp.innerText = cookie.price + ' $';
        const dpw = document.createElement('div');
            dpw.setAttribute('class','product-weight' );
            dpw.innerText = cookie.weght;

        const btn = document.createElement('button');
            dpw.setAttribute('class','btn btn-primary' );
            dpw.innerText = 'Заказать';
        
        dpi.append(dib);
        dib.append(pi);
        dpi.append(dpinfo);
        dpinfo.append(dpt);
        dpinfo.append(dpd);
        dpinfo.append(dpf);
        dpf.append(dpun);
        dpun.append(dpp);
        dpun.append(dpw);
        dpf.append(btn);

        productsList.appendChild(dpi);


    })


})



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