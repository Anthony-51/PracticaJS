$(document).ready(function () {

    //slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
        });

        //posts
        var posts = [{
                title: 'Prueba de titulo 1',
                date: "Publicado el " + moment().format("LL"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima quaerat explicabo libero eligendi culpa cumque ad reiciendis fugit. Atque expedita quia voluptatem repudiandae natus beatae magnam pariatur possimus reprehenderit.'
            },
            {
                title: 'Prueba de titulo 2',
                date: "Publicado el " + moment().format("LL"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima quaerat explicabo libero eligendi culpa cumque ad reiciendis fugit. Atque expedita quia voluptatem repudiandae natus beatae magnam pariatur possimus reprehenderit.'
            },
            {
                title: 'Prueba de titulo 3',
                date: "Publicado el " + moment().format("LL"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima quaerat explicabo libero eligendi culpa cumque ad reiciendis fugit. Atque expedita quia voluptatem repudiandae natus beatae magnam pariatur possimus reprehenderit.'
            },
            {
                title: 'Prueba de titulo 4',
                date: "Publicado el " + moment().format("LL"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima quaerat explicabo libero eligendi culpa cumque ad reiciendis fugit. Atque expedita quia voluptatem repudiandae natus beatae magnam pariatur possimus reprehenderit.'
            },
        ];

        posts.forEach((item, index) => {
            var post = `
            <article class="posts">
                <h3>${item.title}</h3>
                <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
            </article>
        `;
            $("#posts").append(post);
        })
    }
    //cambiar fondo
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    })
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    })
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    })

    //scroll

    $('.subir').click(function (e) {
        e.preventDefault(); //para que no redirija a otra pagina

        $('html,body').animate({
            scrollTop: 0
        }, 3000);
        return false;
    })


    //login falso
    $("#login form").submit(function () {
        var form_name = $("#name").val();

        localStorage.setItem("form_name", form_name);
    })

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != "undefined") {
        var parrafo_about = $("#about p");

        parrafo_about.html('<br><h1>Bienvenido, ' + form_name + '</h1>');
        parrafo_about.append('<a href="index.html" id="login_out">Cerrar sesion</a>');

        $('#login').hide();

        $('#login_out').click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    //acordeon
    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    //reloj
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
    }

    //validacion de formulario

    if(window.location.href.indexOf('contact') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
})