$( document ).ready(function() {
    loadNews();
});


function loadNews()
{
  let contaner = $("#news-container");
  let comments = GetNews();
  let html = "";
  comments.forEach(function(_new, i, arr) {
    html = '<div style="padding: 15px">' +
          '<div class="row bordered" style="padding: 0px">' +
          '  <div class="col-md-3 col-xs-12  no-padding">' +
          '    <img class="img-responsive pull-left-on-big pull-center-on-small" src="'+_new.image+'" alt="no icon"/>' +
          '  </div>' +
          '  <div class="col-md-9 col-xs-12">' +
          '    <div class="pull-center-on-small">' +
          '      <div class="header3" style="padding-top: 2%">'+_new.title+'</div>' +
          '      <div style="padding-top: 2%">'+_new.content+'</div>' +
          '      <div class="input-group"style="padding-top: 5%">' +
          '          <div class="media">' +
          '           <div class="media-left media-top">' +
          '            <img src="assets/images/read_more_btn.svg" style="padding: 3px" alt="@l!" class="media-object"/>' +
          '            </div>' +
          '           <div class="media-body">' +
          '              <span class="media-heading product-button-text media-middle">Подробнее</span>' +
          '           </div>' +
          '        </div>' +
  					'		</div>' +
            '  </div>' +
          '  </div>' +
        '</div>' +
      '</div>';
    contaner.append($(html));
  });
}

function GetNews() {
    return [
        {image: 'assets/images/new1.png', title: 'Lexus дал «зеленый свет» серийной версии концепта UX', content: 'Компания Lexus официально объявила, что собирается в ближайшем будущем выпустить серийный кроссовер, созданный на базе концепта UX.'},
        {image: 'assets/images/new2.png', title: 'Будущие Mitsubishi получат новый дизайн', content: 'Стали известны некоторые особенности о том, что ждет новые модели марки Mitsubishi.'},
        {image: 'assets/images/new3.png', title: 'Mercedes-Benz анонсировал гиперкар с мотором от болида F1', content: 'Руководство компании Mercedes-Benz подтвердило информацию о создании гиперкара, который мог бы соперничать с McLaren P1.'},
        {image: 'assets/images/new4.png', title: 'Venturi представляет полностью электрический кроссовер America', content: 'Новая модель Venturi America была представлена на Парижском автосалоне. Она стала одним из наиболее интересных дебютов выставки, благодаря полностью электрической системе.'},
        {image: 'assets/images/new5.png', title: 'Третье поколение Kia Sorento показали европейцам', content: 'Корейский автопроизводитель Kia впервые вывез третье поколение кроссовера Sorento за пределы Кореи — в Париже состоялась европейская премьера новинки.'}
      ];
}
