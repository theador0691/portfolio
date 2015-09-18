var myKittens = [{
        title: "First poo Project",
        pic: "https://www.petfinder.com/wp-content/uploads/2012/09/Blog-Kitty-Cam-solo.jpg"
    },
    {
        title: "Second Project",
        pic: "http://www.animal-photography.com/thumbs/red_tabby_long_hair_kitten_~AP-0UJFTC-TH.jpg"
    },
    {
        title: "Third Project",
        pic: "http://www.animal-photography.com/thumbs/silver_tabby_kittens~AP-0JO6Y9-TH.jpg"
    },
    {
        title: "Forth Project",
        pic: "http://www.animal-photography.com/thumbs/silver_tabby_kitten_looking_up~AP-0DLVMB-TH.jpg"
    }];

$(document).ready(function () {
    append_text();
    override_css();
    $("#message-box").on("Click", on_click);
    $("#message-box").on("keyup", change_color);
    table();
    tooltip();
    $("#submit").on("click", function () {});
    for (var i = 0; i < myKittens.length; i++) {
        $("#" + i).css("background-image", "url(" + myKittens[i].pic + ")");
    }
    pictures();
    initialize();

});

function initialize(){
    var mapOptions = {
        center: new google.maps.LatLng(53.196381,-3.1970095,17),
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'Click to zoom'
});
    google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
});
}


function append_text() {
    $(".jquery").append("<p>I added this using Jquery, I also added a bootstrap class!!</p>");

}

function pictures() {
    $(".image").mouseenter(function () {
        console.log(myKittens[this.id].title);
        $(this).html("<p class='info'><span class='proj-title'>Title:</span>" + myKittens[this.id].title + "</p>");
    }).mouseleave(function () {
        $("p.info").html("");
    });
}


function tooltip() {
    $('[data-toggle="tooltip"]').tooltip();
}


function override_css() {
    $(".jquery").addClass("text-center");
    $(".jquery").css("background-color", "white");
}

function on_click() {
    console.log("clicked");
    var comment = $("#message-box").val();
    $("#visable-comment").html(comment);
    comment = comment.toUpperCase();
    console.log(comment);
    console.log(comment.length);
    return false;
}

function change_color() {
    console.log("Key happened");
    var charCount = $("#message-box").val().length;
    $("#char-Count").html(charCount).append(" spaces in the box used");
    console.log(charCount);
    if (charCount >= 10) {
        $("#char-Count").css("color", "red");
    } else {
        $("#char-Count").css("color", "blue");
    }
}


function table() {
    var rows = $(".my-row");

    for (var i = 0; i < rows.length; i++) {
        if (i % 2 === 0) {
            $(rows[i]).css("background-color", "pink");
        }
    }

}