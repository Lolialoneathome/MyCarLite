$( document ).ready(function() {
    LoadFeedback();
});


function LoadFeedback()
{
  let contaner = $("#feedback-container");
  let comments = GetFeedback();
  let html = "";
  comments.forEach(function(comment, i, arr) {
    html ='<div style="padding-top: 25px">' +
          '<div class="row" style="padding: 0px">' +
          '  <div class="col-md-12 col-xs-12">' +
            '  <span> '+comment.author+'</span>' +
            '  <span> <p> '+comment.date+'</p></span>' +
            '  <div style="padding-top: 25px">' +
            '    <span class="header3">'+comment.title+'</span>' +
            '    <p style="padding-top: 10px">'+comment.text+'</p>' +
            '  </div>' +
            '  <hr>' +
            '</div>' +
      '  </div>'+
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
