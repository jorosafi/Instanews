$('select[name="news-sections"]').change(function () {


    var selected = $(this).val();
        
    $('.list').empty()
        var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
        url += '?' + $.param({
            'api-key': "17775b5e0bca48a08fa11a8aaa0d3b41"
        });
        $.ajax({
            url: url,
            method: 'GET',
        })
        .done(function (result) {
            $.each(result.results, function(index, value) {
                //     console.log(value.collectionName);
                if (selected == value.section) {
                  console.log(result.results);
                  var html = "";
                  html += "<li>";
                  html += '<img src="' + value.multimedia[3].url + '"/>';
                  html += '<p>' + value.abstract + '</p>';
                  html += "</li>";
                  $(".list").append(html);
                }
        
                // console.log(result.section);
              });
            })
        .fail(function (err) {
            throw err;
        });
    });
