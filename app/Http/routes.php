<?php

// ROUTE::LIST::ALL
//
//GET	    /proposals	            index	    proposals.index
//GET	    /proposals/create	    create	    proposals.create (Show Form)
//POST	    /proposals	            store	    proposals.store
//GET	    /proposals/{id}	        show	    proposals.show
//GET	    /proposals/{id}/edit	edit	    proposals.edit
//PUT/PATCH	/proposals/{id}	        update	    proposals.update
//DELETE	/proposals/{id}	        destroy	    proposals.destroy

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('/', 'WelcomeController@index');
//



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/', 'ProposalsController@index');
    Route::get('/home', 'ProposalsController@index');

    //Route::resource('ideas', 'IdeaController');

    Route::get('proposals',  ['as'=>'proposals', 'uses'=>'ProposalsController@index']);

    Route::get('proposals/{id}', ['as'=>'proposal.show', 'uses'=>'ProposalsController@show'])->where('id', '[0-9]+');

    Route::get('about', ['as'=> 'about', 'uses'=> 'AboutController@index']);
});

Route::group(['middleware' => ['web','auth']], function ()
{
    Route::get('proposals/{id}/like', ['as'=>'proposal.like', 'uses'=>'ProposalsController@like']);

    Route::get('proposals/create', ['as'=>'proposal.create', 'uses'=>'ProposalsController@create']);

    Route::post('proposals', ['as'=>'proposal.store', 'uses'=>'ProposalsController@store']);

    Route::get('proposals/{id}/edit', ['as'=>'proposal.edit', 'uses'=>'ProposalsController@edit']);

    Route::patch('proposals/{id}/update', ['as'=>'proposal.update', 'uses'=>'ProposalsController@update']);

    Route::get('proposals/{id}/destroy', ['as'=>'proposal.destroy', 'uses'=>'ProposalsController@destroy']);

    Route::get('proposals/{id}/response', ['as'=>'proposal.response', 'uses'=>'ProposalsController@response']);

    Route::patch('proposals/{id}/updateResponse', ['as'=>'proposal.updateResponse', 'uses'=>'ProposalsController@updateResponse']);

    Route::get('proposals/notresponded', ['as'=>'proposals.notresponded', 'uses'=>'ProposalsController@notResponded']);

    Route::get('users/{id}/proposals', ['as'=>'users.proposals', 'uses'=>'UsersController@proposals']);

    Route::get('users/{id}/responses', ['as'=>'users.responses', 'uses'=>'UsersController@responses']);

});

//
//Route::group(['middleware' => ['web','auth']], function () {
////     Route::get('/home', 'HomeController@index');
////    Route::get('/', 'ProposalsController@index');
//});
