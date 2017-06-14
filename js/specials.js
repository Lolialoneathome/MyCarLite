$( document ).ready(function() {
    loadSpecials();
});


function loadSpecials()
{
  let contaner = $("#specials-container");
  let comments = GetSpecials();
  let html = "";
  comments.forEach(function(special, i, arr) {
    html = '<div style="padding: 15px" *ngFor="let special of specials">' +
      '<div class="row bordered" style="padding: 0px">' +
        '<div class="col-md-3 col-xs-12  no-padding">' +
          '<img class="img-responsive pull-left-on-big pull-center-on-small" src='+special.image+' alt="no icon"/>' +
        '</div>' +
        '<div class="col-md-9 col-xs-12">' +
        '  <div class="pull-center-on-small">' +
        '    <div class="header3" style="padding-top: 2%">'+special.title+'</div>' +
        '    <div style="padding-top: 2%">'+special.description+'</div>' +
        '    <div class="input-group"style="padding-top: 5%">' +
        '        <div class="media">' +
        '         <div class="media-left media-top">' +
        '          <img src="assets/images/read_more_btn.svg" style="padding: 3px" alt="@l!" class="media-object"/>' +
        '          </div>' +
        '         <div class="media-body">' +
        '            <span class="media-heading product-button-text media-middle">Подробнее</span>' +
        '         </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>' +
      '<div>' +
      '</div>' +
    '</div>' +
  '</div>';
    contaner.append($(html));
  });
}

function GetSpecials() {
    return [
      {image: 'assets/images/car1.png', title: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {image: 'assets/images/car2.png', title: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {image: 'assets/images/car3.png', title: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {image: 'assets/images/car4.png', title: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'},
      {image: 'assets/images/car4.png', title: 'Porsche Cayenne', description: '2011 г. / 3.6 л. / 120 000 км. / бензин'}
    ];
}
