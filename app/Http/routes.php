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

//  Route::get('/', 'WelcomeController@index');


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

    Route::get('/', ['as' => 'home', 'uses' => 'ProposalsController@index']);

    Route::post('/', ['as' => 'home.post', 'uses' => 'ProposalsController@index']);

    Route::get('proposals/{id}', ['as' => 'proposal.show', 'uses' => 'ProposalsController@show'])->where('id', '[0-9]+');

//    Route::get('cookieset', function()
//    {
//        //$foreverCookie = Cookie::forever('forever', 'ttt');
//        //$tempCookie = Cookie::make('temporary', 'Victory', 5);
//        $uuid = \Ramsey\Uuid\Uuid::uuid4();
//        $uuid = Cookie::forever('uuid', $uuid);
//        //return Response::make()->withCookie($foreverCookie)->withCookie($tempCookie);
//        return Response::make()->withCookie($uuid);
//    });
//
//
//    Route::get('cookietest', ['as' => 'view.cookietest'], function()
//    {
//        $unique = Cookie::get('uuid');
//        //$forever = Cookie::get('forever');
//        //$temporary = Cookie::get('temporary');
//        //return View::make('cookietest', array('forever' => $forever, 'temporary' => $temporary, 'variableTest' => 'works'));
//        return View::make('cookietest', array('uuid' => $unique));
//        //return $request->cookie('uuid');
//    });


    // Like Button
    Route::get('proposals/{id}/like', ['as' => 'proposal.like', 'uses' => 'ProposalsController@like']);
    Route::get('proposals/{id}/unlike', ['as' => 'proposal.unlike', 'uses' => 'ProposalsController@unlike']);

    //About - Contact Form
    Route::get('about', ['as' => 'about', 'uses' => 'AboutController@index']);
    Route::get('terms', ['as' => 'terms', 'uses' => 'AboutController@terms']);
    Route::get('contact', ['as' => 'contact', 'uses' => 'AboutController@create']);
    Route::post('contact', ['as' => 'contact_store', 'uses' => 'AboutController@store']);
    // relationship commissions
    Route::get('committee', ['as' => 'committee', 'uses' => 'AboutController@committee']);
});

Route::group(['middleware' => ['web', 'auth']], function () {
    //Proposals
    Route::get('proposals/{id}/approval', ['as' => 'proposal.approval', 'uses' => 'ProposalsController@approval']);

    Route::get('proposals/create', ['as' => 'proposal.create', 'uses' => 'ProposalsController@create']);

    Route::post('proposals', ['as' => 'proposal.store', 'uses' => 'ProposalsController@store']);

    Route::get('proposals/{id}/edit', ['as' => 'proposal.edit', 'uses' => 'ProposalsController@edit']);

    Route::patch('proposals/{id}/update', ['as' => 'proposal.update', 'uses' => 'ProposalsController@update']);

    Route::get('proposals/{id}/destroy', ['as' => 'proposal.destroy', 'uses' => 'ProposalsController@destroy']);

    Route::get('proposals/{id}/response', ['as' => 'proposal.response', 'uses' => 'ProposalsController@response']);

    Route::patch('proposals/{id}/updateResponse', ['as' => 'proposal.updateResponse', 'uses' => 'ProposalsController@updateResponse']);

    Route::get('proposals/notresponded', ['as' => 'proposals.notresponded', 'uses' => 'ProposalsController@notResponded']);

    //Users
    Route::get('users/{id}/proposals', ['as' => 'users.proposals', 'uses' => 'UsersController@proposals']);

    Route::get('users/{id}/responses', ['as' => 'users.responses', 'uses' => 'UsersController@responses']);
});

Route::group(['middleware' => ['web', 'auth', 'admin']], function () {

    //Admin
    View::composer('admin.*', 'App\Http\ViewComposers\StatusComposer');

    Route::get('admin', ['as' => 'admin', 'uses' => 'AdminController@index']);

    Route::get('admin/users', ['as' => 'admin.users', 'uses' => 'AdminController@users']);

    Route::get('admin/users/{id}', ['as' => 'admin.users.show', 'uses' => 'AdminController@showUser'])->where('id', '[0-9]+');

    Route::get('admin/users/create', ['as' => 'admin.users.create', 'uses' => 'AdminController@createUser']);

    Route::post('admin/users', ['as' => 'admin.users.store', 'uses' => 'AdminController@storeUser']);

    Route::get('admin/users/{id}/edit', ['as' => 'admin.users.edit', 'uses' => 'AdminController@editUser']);

    Route::patch('admin/users/{id}/update', ['as' => 'admin.users.update', 'uses' => 'AdminController@updateUser']);

    Route::get('admin/users/{id}/destroy', ['as' => 'admin.users.destroy', 'uses' => 'AdminController@destroyUser']);

    Route::get('admin/proposals', ['as' => 'admin.proposals', 'uses' => 'AdminController@proposals']);

    Route::get('admin/proposals/{id}', ['as' => 'admin.proposal.show', 'uses' => 'AdminController@showProposal'])->where('id', '[0-9]+');

    Route::get('admin/proposals/notresponded', ['as' => 'admin.proposals.notresponded', 'uses' => 'AdminController@notResponded']);

    Route::get('admin/proposals/{id}/response', ['as' => 'admin.proposal.response', 'uses' => 'AdminController@response']);

    Route::patch('admin/proposals/{id}/updateResponse', ['as' => 'admin.proposal.updateResponse', 'uses' => 'AdminController@updateResponse']);

    Route::get('admin/proposals/create', ['as' => 'admin.proposal.create', 'uses' => 'AdminController@createProposal']);

    Route::post('admin/proposals', ['as' => 'admin.proposal.store', 'uses' => 'AdminController@storeProposal']);

    Route::get('admin/proposals/{id}/edit', ['as' => 'admin.proposal.edit', 'uses' => 'AdminController@editProposal']);

    Route::patch('admin/proposals/{id}/update', ['as' => 'admin.proposal.update', 'uses' => 'AdminController@updateProposal']);

    Route::get('admin/proposals/{id}/destroy', ['as' => 'admin.proposal.destroy', 'uses' => 'AdminController@destroyProposal']);

    Route::get('admin/proposals/{id}/approved_at_by', ['as' => 'admin.proposal.approved', 'uses' => 'AdminController@approvedProposal']);

    Route::get('admin/proposals/{id}/disapproved_at_by', ['as' => 'admin.proposal.disapproved', 'uses' => 'AdminController@disapprovedProposal']);

    Route::get('admin/proposals/approved', ['as' => 'admin.proposals.approved', 'uses' => 'AdminController@approved']);

    Route::get('admin/proposals/disapproved', ['as' => 'admin.proposals.disapproved', 'uses' => 'AdminController@disapproved']);

    Route::get('/admin/logout', function () {
        Auth::logout();

        return redirect('/');
    });
});
