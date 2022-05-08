
function openNav() {
    document.getElementById("sidebar").style.left = "0";
    if (screen.width < 960) {
        document.getElementById("main").style.marginLeft = "0";
    }
    else {
        document.getElementById("main").style.marginLeft = "300px";
    }
}

function closeNav() {
    document.getElementById("sidebar").style.left = "-300px";
    document.getElementById("main").style.marginLeft = "0";
}


/*TEXT ANIMATE*/

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

/*GOOGLE MAPS*/

// Initialize and add the map
function initMap() {
    // The location
    const gazi = { lat: 41.095119, lng: 28.902189 };
    // The map, centered 
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: gazi,
    });
    // The marker, positioned 
    const marker = new google.maps.Marker({
        position: gazi,
        map: map,
    });
}

window.initMap = initMap;