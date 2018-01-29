$('select[name="news-sections"]').change(function () {


    var selected = $(this).val();
    $('.site-header').addClass('newHeader');
    $('.list').addClass('newList');

        
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
                  var html = "";
                  html += '<li>';
                  html += '<div class="bkimg" style="background-image:url(' + value.multimedia[4].url + ')">';
                  html += '<div class="abstract">';
                  html += '<p>' + value.abstract + '</p></div></div>';
                  html += "</li>";
                  $(".list").append(html);
                
                // console.log(result.section);
              });
            })
        .fail(function (err) {
            throw err;
        });
    });
