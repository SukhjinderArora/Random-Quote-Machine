$(document).ready(function(){
    randomQuote();
    $('#new-quote').on("click",randomQuote);
});

function randomQuote(){
     $(".quote-text, .quote-author,.quote-text>i").animate({
            opacity: '0'
        },500);
    var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        $('body').css('background',randomColorChange);
        $('body').css('color',randomColorChange);
        $('#new-quote').css('background',randomColorChange);

     
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",function(json){
           // var obj=$.parseJSON(json);
            var quote=json['quoteText'];
            var author=json['quoteAuthor'];
            author=author===""?"unknown":author;
            $('#text').html(quote);
            $('#author').html(author);
            $('#twitter').attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&related=RandomQuoteMachine&text=' + "\""+quote+"\""+" - "+author);
     
          $(".quote-text, .quote-author").animate({
            opacity: '1'
        },500);
        });
    
        
}


