<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, Mandrill, and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'mandrill' => [
        'secret' => env('MANDRILL_SECRET'),
    ],

    'ses' => [
        'key'    => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'stripe' => [
        'model'  => App\User::class,
        'key'    => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    // Login social - Facebook
    'facebook' => [
        'client_id'     => '924736410991077',
        'client_secret' => '8184d025a6a35a2b1d7a2eb6610d45a6',
        'redirect'      => 'http://local.edemocracia.com/auth/facebook/callback',
      ],

    // Login social - Twitter
        'twitter' => [
            'client_id'     => 'fdScJuZRoTB8F3awCgFS85ooi',
            'client_secret' => 'kA6iIggVCoSB757Yb0pGjQPDqqarlKAYYQyxKoIddtcobG5RaK',
            'redirect'      => 'http://local.edemocracia.com/auth/twitter/callback',
       ],

    // Login social - youtube
        'youtube' => [
          'client_id'     => '444292796578-roielo2s98st2bnqee9741htltq2tsg8.apps.googleusercontent.com',
          'client_secret' => 'E-CKd9Ddk3AjcpHhlbC4DIJp',
          'redirect'      => 'http://local.edemocracia.com/auth/youtube/callback',
        ],

    // Login social - linkedIn

        'linkedin' => [
            'client_id' => '78fg8nqdvhwhs1',
            'client_secret' => 'gmYsYGtGta6Dc3yv',
            'redirect' => 'http://local.edemocracia.com/auth/linkedin/callback',
        ],

    // Login social - linkedIn
        'instagram' => [
            'client_id' => '48d9bd9957274b57beadbbab85f9f1c8',
            'client_secret' => '1e5a51eba2cc4a8da9a9eeda3b86b29b',
            'redirect' => 'http://local.edemocracia.com/auth/instagram/callback',
        ],

];
