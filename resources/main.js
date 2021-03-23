$(function() {
    const overlay = $('.overlay');
    const productImgWrapper = $('.product-img-wrapper');
    const productsWrapper = $('.products-wrapper');
    const productItem = $('.product-item');
    const closeModal = $('.close-modal');
   

    getproductsHTML = function(productObject){
        return `<div class="product-item" data-id=${productObject.id}>
                    <div class="coat-image" style="background-image: url(assets/coats/${productObject.imgUrl})"></div>
                    <div class="coat-details">
                        <div class="name">${productObject.name}</div>
                        <div class="price">${productObject.currency}${productObject.price}</div>
                    </div>
                </div>
                `;
    };

    for(let i = 0; i < products.coats.length; i++){
        let productObject = products.coats[i],
        productHTML = getproductsHTML(productObject);
        productsWrapper.append(productHTML);
    };

    productsWrapper.delegate('.product-item', 'click', function(){
        overlay.removeClass('hidden');
    });

    closeModal.click(function(){
        overlay.addClass('hidden');
    });

});

