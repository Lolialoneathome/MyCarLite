$( document ).ready(function() {




    loadBestSellers();
    LoadFeedback();


});


function loadBestSellers()
{
  let contaner = $("#best-sellers-container");
  let cars = GetBestSellers();
  let html = "";
  cars.forEach(function(car, i, arr) {
    html = '<div class="col-md-3 col-sm-12 col-xs-12">';
    html += '<img class="img-responsive car-img" src="'+car.image+'" alt="No Icon"/>';
    html += '<ul class="list-group bordered">';
    html += '<li  class="list-group-item">';
    html += '<div class="product-name-text">'+car.name+'</div>';
    html +='</li>' +
            '<li  class="list-group-item">' +
            '<div class="product-price-text">'+car.price+'<span class="rouble">a</span></div>' +
            '</li>' +
            '<li  class="list-group-item">' +
            '<div class="product-detailed">'+car.description+'</div>' +
            '</li>' +
            '<li  class="list-group-item">' +
            '  <ul class="list-inline" style="display: flex;justify-content: space-around;">' +
            '      <li onclick="showModalBuyCar(\''+car.id+'\')"><span class="rouble media-middle"> a </span> <span class="media-middle">Купить </span></li>' +
            '      <li style="text-align: center; border-right: 1px solid;"></li>' +
            '      <li onclick="showModalMoreInfo(\''+car.id+'\')" style="vertical-align: middle">' +
            '        <div class="media" style="text-align: center; margin: auto;">' +
            '         <div class="media-left media-top" style="padding: 3px">' +
            '          <img src="assets/images/read_more_btn.svg" alt="@l!" class="media-object"/>' +
            '          </div>' +
            '         <div class="media-body" style="width: auto; padding-left: 3px">' +
            '            <span class="media-heading product-button-text media-middle">Подробнее</span>' +
            '         </div>' +
            '       </div>' +
            '     </li>' +
            '  </ul>' +
          '</li>' +
        '</ul>' +
        '</div>';

        contaner.append($(html));
  });
}


function GetBestSellers() {
    return [
      {id: 1, image: 'assets/images/car1.png', price: '1 235', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {id: 2, image: 'assets/images/car2.png', price: '4 325', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {id: 3, image: 'assets/images/car3.png', price: '77 654', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {id: 4, image: 'assets/images/car4.png', price: '34 534 543', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'}
    ];
}



function LoadFeedback()
{
  let contaner = $("#feedback-container");
  let comments = GetFeedback();
  let html = "";
  comments.forEach(function(comment, i, arr) {
    html = '<div class="col-md-3">' +
    '<div class="comment-info ">' +
     '<div class="comment-author-text">'+comment.author+'</div>' +
     '<div class="comment-date-text"> '+comment.date+'</div>' +
     '<div class="comment-title-text">'+comment.title+' </div>' +
     '<div class="comment-content-text"> '+comment.text+' </div>' +
   '</div>' +
   '<div class="show-full-comment text-center">' +
     '<p><a class="btn btn-gray" href="#" role="button">Читать полностью</a></p>' +
   '</div>' +
    '</div>';
    contaner.append($(html));
  });
}

function GetFeedback() {
    return [
      {author: "Евгений Батиков", title: "Всем рекомендую!", text: " Автомобили просто супер. Предо мной стоял выбор какое авто взять. Представители компании мне посоветовали и рассказали все плюсы и минусы, помогли  ", date: "10 марта 2017"},
      {author: "Евгений Батиков", title: "Всем рекомендую!", text: " Автомобили просто супер. Предо мной стоял выбор какое авто взять. Представители компании мне посоветовали и рассказали все плюсы и минусы, помогли  ", date: "10 марта 2017"},
      {author: "Евгений Батиков", title: "Всем рекомендую!", text: " Автомобили просто супер. Предо мной стоял выбор какое авто взять. Представители компании мне посоветовали и рассказали все плюсы и минусы, помогли  ", date: "10 марта 2017"},
      {author: "Евгений Батиков", title: "Всем рекомендую!", text: " Автомобили просто супер. Предо мной стоял выбор какое авто взять. Представители компании мне посоветовали и рассказали все плюсы и минусы, помогли  ", date: "10 марта 2017"}
    ];
}


function showModalBuyCar(carId)
{
  let car = GetCarById(carId);
    $('#modalBuy').modal('show')
    {
      $("#popup-buy-name").html(car.name);
      $("#popup-buy-price").html(car.price);
      $("#popup-buy-description").html(car.description);
      $("#popup-buy-image").attr("src", car.images[0]);
    }
}


function GetCarById()
{
  return {
    id: 4,
    images: ['assets/images/car4.png', 'assets/images/car3.png', 'assets/images/car2.png', 'assets/images/car1.png'],
    price: '34 534 543',
    name: 'Porsche Cayenne',
    description: '2011 г. / 3.6 л. / 120 000 км. / бензин',
    year: '2005',
    mileage: '149 000 км',
    color: 'черный',
    saloon: 'титановый жемчуг',
    engine: 'дизель',
    engine_amount: '6.0',
    power: '708 лс',
    transmission: 'автомат',
    full_description: 'Описание автомобиля:</br>Здесь</br>Какой-то</br>Текст </br>Здесь</br>Какой-то</br>Текст </br>Здесь</br>Какой-то</br>Текст </br>Здесь</br>Какой-то</br>Текст </br>Здесь</br>Какой-то</br>Текст </br>'
    };
}


function showModalMoreInfo(carId)
{
  let car = GetCarById(carId);
  //let html = '<!-- Modal --> ' +
    //contaner.append($(html));
    $('#modalMoreInfo').modal('show')
    {
      $("#popup-moreinfo-name").html(car.name);
      $("#popup-moreinfo-price").html(car.price);
      $("#popup-moreinfo-year").html(car.year);
      $("#popup-moreinfo-mileage").html(car.mileage);
      $("#popup-moreinfo-saloon").html(car.saloon);
      $("#popup-moreinfo-engine").html(car.engine);
      $("#popup-moreinfo-engine_amount").html(car.engine_amount);
      $("#popup-moreinfo-power").html(car.power);
      $("#popup-moreinfo-transmission").html(car.transmission);
      $("#popup-moreinfo-full_description").html(car.full_description);
      $("#popup-moreinfo-car").attr("src", car.images[0]);
      let imgContainer = $("#img-picker");
      let html = '';

            imgContainer.html('');
      car.images.forEach(function(image, i, arr) {
        html += '<option data-img-src="' + image + '" data-img-alt="Page 1" value=' + (i + 1) +'> </option>';
      });
      imgContainer.append($(html));



      $("#img-picker").imagepicker({
        clicked:function(){
              let carImgPath = $(this).find("option[value='" + $(this).val() + "']").data('img-src');
              $("#popup-moreinfo-car").attr("src", carImgPath);
          }
      });
    }
}
