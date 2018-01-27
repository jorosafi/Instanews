$('select[name="news-sections"]').change(function () {


    var selected = $(this).val();
        
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
                  html += "<li>";
                  html += '<img src="' + value.multimedia[3].url + '"/>';
                  html += '<p>' + value.abstract + '</p>';
                  html += "</li>";
                  $(".list").append(html);
                
                // console.log(result.section);
              });
            })
        .fail(function (err) {
            throw err;
        });
    });
