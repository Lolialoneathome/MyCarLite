$( document ).ready(function() {
    loadStocks();
});


function loadStocks()
{
  let contaner = $("#stocks-container");
  let stocks = GetStocks();
  let html = "";
  stocks.forEach(function(car, i, arr) {
    html = '<div class="col-md-3 col-sm-12 col-xs-12 padding-left-0">' +
      '<img class="img-responsive car-img" src="'+ car.image +'" alt="no icon"/>' +
      '<ul class="list-group bordered">' +
      '  <li  class="list-group-item">' +
      '    <div class="product-name-text">"'+ car.name +'"</div>' +
      '    </li>' +
      '    <li  class="list-group-item">' +
      '    <div class="product-price-text">"'+ car.price +'" <span class="rouble">a</span></div>' +
      '    </li>' +
      '    <li  class="list-group-item">' +
      '    <div class="product-detailed"> "'+ car.description +'" </div>' +
      '    </li>' +
      '    <li  class="list-group-item">' +
      '      <ul class="list-inline" style="display: flex;justify-content: space-around;">' +
      '          <li onclick="showModalBuyCar(\''+car.id+'\')"><span class="rouble media-middle"> a </span> <span class="media-middle">Купить </span></li>' +
      '          <li style="text-align: center; border-right: 1px solid;"></li>' +
      '          <li style="vertical-align: middle"><div class="media" style="text-align: center; margin: auto;">' +
      '             <div class="media-left media-top" style="padding: 3px">' +
      '              <img src="assets/images/read_more_btn.svg" alt="@l!" class="media-object"/>' +
      '              </div>' +
      '             <div class="media-body" style="width: auto; padding-left: 3px">' +
      '                <span class="media-heading product-button-text media-middle">Подробнее</span>' +
      '             </div>' +
      '           </div></li>' +
      '      </ul>' +
      '    </li>' +
      '</ul>' +
    '</div>';
    contaner.append($(html));
  });
}

function GetStocks() {
    return [
      {id: 1, image: 'assets/images/car1.png', price: '5 435', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {id: 2, image: 'assets/images/car2.png', price: '534 534', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {id: 3, image: 'assets/images/car3.png', price: '543 543', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {id: 4, image: 'assets/images/car4.png', price: '534 543', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {id: 5, image: 'assets/images/car1.png', price: '225 348', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {id: 6, image: 'assets/images/car2.png', price: '225 438', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {id: 7, image: 'assets/images/car3.png', price: '4 355', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {id: 8, image: 'assets/images/car4.png', price: '54 353', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'}
    ];
}
