<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

get('/', 'HomeController@index');

get('home', 'HomeController@index');

// Route for authentication
Route::group(['namespace' => 'Auth'], function() {
    Route::group(['prefix' => 'auth'], function() {
        // Authentication routes...
        get('login', 'AuthController@getLogin');
        get('logout', 'AuthController@getLogout');
        post('login', 'AuthController@postLogin');

         // Registration routes...
        get('register', 'AuthController@getRegister');
        post('register', 'AuthController@postRegister');
    });
    Route::group(['prefix' => 'password'], function() {
        // Password reset link request routes...
        get('email', 'PasswordController@getEmail');
        post('email', 'PasswordController@postEmail');

        // Password reset routes...
        get('reset/{token}', 'PasswordController@getReset');
        post('reset', 'PasswordController@postReset');
    });
});


