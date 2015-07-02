var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    // css
     mix.styles([
         "bootstrap/dist/css/bootstrap.min.css",
         "metisMenu/dist/metisMenu.min.css",
         "bootstrapadmin/css/timeline.css",
         "bootstrapadmin/css/sb-admin-2.css",
         "font-awesome/css/font-awesome.min.css"
     ], 'resources/assets/css/vendor.css', 'resources/assets/vendor')

    mix.styles([
       "vendor.css"
    ], 'public/css/appall.css')

    // script
     mix.scripts([
         "jquery/dist/jquery.min.js",
         "bootstrap/dist/js/bootstrap.min.js",
         "metisMenu/dist/metisMenu.min.js",
         "bootstrapadmin/js/sb-admin-2.js"
     ], 'resources/assets/js/vendor.js', 'resources/assets/vendor')

    mix.scripts([
        "vendor.js"
    ], 'public/js/appall.js')

    //version
    mix.version(['public/css/appall.css', 'public/js/appall.js'])

    //font copy
    .copy('resources/assets/vendor/font-awesome/fonts/', 'public/build/fonts');
});
