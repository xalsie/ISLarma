var myInterval = false;

if (localStorage.getItem('switch_4') == 1) {
    fluxRss();
}

function fluxRss() {
    var i = 3;
    
    // let myTimeout = setTimeout(() => {
    myInterval = setInterval(() => {

        if (localStorage.getItem('switch_4') == 0) {
            console.log("clearInterval (normalement)");
            clearInterval(myInterval);
            myInterval = false;
        } else {
            $.ajax({
                type: "GET",
                url: "http://localhost:81/DEV/rss.xml",
                dataType: "xml",
        
                success: function (response) {
                    $xml = $(response);
                    $allItems = $xml[0].children[0].children[0].children;
        
                    // console.log($xml[0].children[0].children[0].children);
        
                    $($allItems).each(function( index, element ) {
                        if (element.localName == "item") {

                            var words = $(element)[0].children[0].childNodes[0].data.split(' - ');

                            if (regexR(words[1])) {
                                console.log("yes!");

                                console.log($(element));
                                console.log($(element)[0].children[2].childNodes[0].data);

                                console.log($(element)[0].children[0].childNodes[0].data);
                                console.log($(element)[0].children[4].childNodes[0].data);

                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost:81/verif.php",
                                    // dataType: 'json',
                                    data: {
                                        action: "getNameDL",
                                        Name: words[0]
                                    },
                                    success: function (json){
                                        console.log(json);
                                        if (json == "true") {
                                            dlLinkMovie($(element)[0].children[2].childNodes[0].data);
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }
    }, (i * 3000));
}

function dlLinkMovie(_Link) {
    $.ajax({
        type: "GET",
        // url: _Link,
        url: "http://localhost/DEV/hd.html",
        dataType: "html",

        success: function (response) {
            var ele = $(response);
            ele = $(ele[75].children[4].children[0].children[1].children[4].children[2]);
            ele = ele[0].querySelectorAll("[href]");

            for(var i = 0; i < ele.length; i++) {
                if (typeof ele[i].children[0] !== 'undefined') {
                    if (ele[i].children[0].textContent == "Uptobox") {
                        console.log(ele[i]["href"]);
                        // addLink(ele[i]["href"]);
                    }
                }
            }
        }
    });
}

function regexR(str) {
    let regex = /^(french|720p|hdlight| ){1,}$/gim;
    let m;

    m = regex.exec(str)

    if (m !== null) {
        return true;
    } else {
        return false;
    }
}