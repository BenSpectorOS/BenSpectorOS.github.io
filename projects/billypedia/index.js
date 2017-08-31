/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
    
        $('#section-bio').css('background-color', 'rgb(200, 140, 80')
            .css('border-radius', '20px')
            .css('padding', '5px');
        
        $('#section-quotes').css('background-color', 'rgb(200, 140, 80')
            .css('border-radius', '20px')
            .css('padding', '5px');
        $('#section-quotes p:last-child').css('color', 'white');
        // uncomment this to inspect all available data; delete when done //
        console.log(data);
        
    
        
        // TOPRATED Section
        let topRated = data.discography.topRated;
        
        let topRatedImageContainer = $('<div>')
            .attr('id', 'top-rated-image-container')
            .addClass('image-container');
        let topRatedImage = $('<img>')
            .attr('id', 'top-rated-image')
            .attr('src', topRated[0].art)
            .addClass('image');
            
        topRatedImageContainer.append(topRatedImage);
        $('#list-top-rated').prepend(topRatedImageContainer);
        
        _.forEach(topRated, function(recording) {
            let record = $('<li>').attr('data-imgPath', recording.art);
            let title = $('<h4>').text(recording.title);
            let recordInfo = $('<p>')
                .text(recording.artist + ', ' + recording.release + ', ' + recording.year)
                .css('font-style', 'italic');
                
            record.append(title).append(recordInfo);
            
            $('#list-top-rated').append(record);
        });
        // I don't see how using map would make this simpler?
        
        
        
        // Create RECORDINGS section
        let recordingsSection = $('<section>').attr('id', 'section-recordings')
            .css('margin-top', '50px')
            .css('background-color', 'rgb(200, 140, 80')
            .css('border-radius', '20px')
            .css('padding', '5px');
        let recordingsHeader = $('<header>')
            .attr('id', 'header-recordings')
            .addClass('header-recordings')
            .text('Recordings')
            .css('padding', '15px');
        let recordingsList = $('<ul>')
            .attr('id', 'list-recordings')
            .css('background-color', 'rgb(200, 140, 80');
        
        recordingsSection.append(recordingsHeader);
        recordingsSection.append(recordingsList);
        
        let recordings = data.discography.recordings;
        
        let recordingsImageContainer = $('<div>')
            .attr('id', 'recordings-image-container')
            .addClass('image-container');
        let recordingsImage = $('<img>')
            .attr('id', 'recordings-image')
            .attr('src', recordings[0].art)
            .addClass('image');
            
        recordingsImageContainer.append(recordingsImage);
        recordingsList.prepend(recordingsImageContainer);
        
        _.forEach(recordings, function(recording) {
            let record = $('<li>')
                .addClass('recording')
                .attr('data-imgPath', recording.art);
            let title = $('<h4>').text(recording.title);
            let recordInfo = $('<p>').text(recording.artist + ', ' + recording.release + ', ' + recording.year).css('font-style', 'italic');
            record.append(title).append(recordInfo);
            recordingsList.append(record);
        });
        
        $('#sidebar').append(recordingsSection)
        
        $('#section-top-rated li').click(function () {
            let imgPath = $(this).data('imgpath');

            topRatedImage.remove();
            topRatedImage = $('<img>')
            .attr('id', 'top-rated-image')
            .attr('src', imgPath)
            .addClass('image');
            topRatedImageContainer.append(topRatedImage);
        });
        
        $('#section-recordings li').click(function () {
            let imgPath = $(this).data('imgpath');
    
            recordingsImage.remove();
            recordingsImage = $('<img>')
            .attr('id', 'recordings-image')
            .attr('src', imgPath)
            .addClass('image');
            recordingsImageContainer.append(recordingsImage);
        });
        
        var createTable = function(riderObjects){
            var createRow = function(riderObject){
                var $row = $("<tr>");
                var $desc = $("<td>").text(riderObject.desc);
                var $type = $("<td>").text(riderObject.type);
                $row.append($desc);
                $row.append($type);
                return $row;
            }
            var $table = $("<table>");
            var $rows = riderObjects.map(createRow);
            $table.append($rows);
            return $table;
        };
        let riderObjects = data.rider;
        createTable(riderObjects).appendTo("body");
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


