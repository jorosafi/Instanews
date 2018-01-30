$('select[name="news-sections"]').change(function () {


    var selected = $(this).val();
    $('.site-header').addClass('newHeader');
    $('.list').addClass('newList');

    $('.list').before('<div class ="loading"><img src="./images/ajax-loader.gif"> </div>');    
    $('.list').empty()
        var url = "https://api.nytimes.com/svc/topstories/v2/" +  selected + ".json";
        url += '?' + $.param({
            'api-key': "17775b5e0bca48a08fa11a8aaa0d3b41"
        });
        $.ajax({
            url: url,
            method: 'GET',
        })
        .done(function (result) {
            var picStories = result.results.filter(function(article){
                return article.multimedia.length;
            }).slice(0,12);
    
            console.log(result);
            $.each(picStories, function(index, value) {

                var articleLink = value.url;
                  var html = "";
                  html += '<a href=' + articleLink + '>';
                  html += '<li>';
                  html += '<div class="bkimg" style="background-image:url(' + value.multimedia[4].url + ')">';
                  html += '<div class="abstract">';
                  html += '<p>' + value.abstract + '</p></div></div>';
                  html += "</li>";
                  html += '</a>';
                  $(".list").append(html);
                
                // console.log(result.section);
              });
            })    

        .fail(function (err) {
            throw err;
        })

        .always(function (){
            $('.loading').remove();
        
        });

    });
