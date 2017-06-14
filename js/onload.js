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
            '      <li style="vertical-align: middle">' +
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
  let contaner = $("#modal-container");
  let car = GetCarById(carId);
  let html = '<!-- Modal --> ' +
  '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> ' +
  '  <div class="modal-dialog"> ' +
  '    <div class="modal-content"> ' +
  '      <div class="modal-header"> ' +
  '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> ' +
  '        <h4 class="modal-title header2" id="myModalLabel">Купить выбранный автомобиль</h4> ' +
  '      </div> ' +
  '      <div class="modal-body"> ' +
  '        <div style="padding: 15px" *ngFor="let special of specials"> ' +
  '          <div class="row" style="padding: 0px"> ' +
  '            <div class="col-md-3 col-xs-12  no-padding"> ' +
  '              <img class="img-responsive" src="'+car.image+'" alt="no icon"/>' +
  '            </div>' +
  '            <div class="col-md-9 col-xs-12">' +
  '              <div class="pull-center-on-small">' +
  '                <div class="header3" style="padding-top: 2%">'+car.name+'</div>' +
                  '                <div class="input-group">' +
  '                <div class="red-bold-text">'+car.price+'<span class="rouble">a</span></div>' +
  '                <div style="padding-top: 15px">'+car.description+'</div>' +
  '                </div>' +
  '              </div>' +
  '            </div>' +
  '          <div>' +
  '          </div>' +
  '        </div>' +
  '      </div>' +
  '      <div class="row padding-top-25">' +
  '                <div class="col-md-12">' +
  '                      <input class="form-control" id="name" placeholder="ФИО">' +
  '                </div>' +
  '          </div>' +
  '          <div class="row padding-top-25">' +
  '                    <div class="col-md-12">' +
  '                          <input class="form-control" id="name" placeholder="Телефон">' +
  '                    </div>' +
  '              </div>' +
  '              <div class="row padding-top-25">' +
  '                        <div class="col-md-12">' +
  '                              <input class="form-control" id="name" placeholder="Email">' +
  '                        </div>' +
  '                  </div>' +
  '      </div>' +
  '      <div class="modal-footer" style="text-align: left;">' +
  '        <button type="button" class="btn btn-primary btn-custom-red  btn-primary-custom-red btn-lg btn-lg-custom" >Отправить</button>' +
  '        <button type="button" class="btn btn-primary btn-custom-red  btn-primary-custom-red btn-lg btn-lg-custom" data-dismiss="modal">Закрыть</button>' +
  '      </div>' +
  '    </div>' +
  '  </div>' +
  '</div>';

    contaner.append($(html));
    $('#myModal').modal('show');
}


function GetCarById()
{
  return {id: 4, image: 'assets/images/car4.png', price: '34 534 543', name: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'};
}
