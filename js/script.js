new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

new VenoBox({
    selector: '.my-video-links',
});

var containerEl = document.querySelector('.itemFilter');

var mixer = mixitup(containerEl, {
    multifilter: {
        enable: true
    },
    animation: {
        effects: 'fade translateZ(-100px)'
    }
});

$(function () {
    $(".typed").typed({
        strings: ["Cats.", "Dogs.", "Rabbits."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () { },
        // starting callback function before each string
        preStringTyped: function () { },
        //callback for every typed string
        onStringTyped: function () { },
        // callback for reset
        resetCallback: function () { }
    });
});
