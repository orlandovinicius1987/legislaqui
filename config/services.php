<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net')
    ],

    'mandrill' => [
        'secret' => env('MANDRILL_SECRET')
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN')
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1')
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET')
    ],

    'stripe' => [
        'model' => \App\Data\Models\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
        'webhook' => [
            'secret' => env('STRIPE_WEBHOOK_SECRET'),
            'tolerance' => env('STRIPE_WEBHOOK_TOLERANCE', 300)
        ]
    ],

    // Login social - Facebook
    'facebook' => [
        'client_id' => env('FACEBOOK_CLIENT_ID'),
        'client_secret' => env('FACEBOOK_CLIENT_SECRET'),
        'redirect' => env('FACEBOOK_CALLBACK_URL'),
        'scopes' => ['email', 'public_profile'],
    ],

    // Login social - Twitter
    'twitter' => [
        'client_id' => env('TWITTER_CLIENT_ID'),
        'client_secret' => env('TWITTER_SECRET'),
        'redirect' => env('TWITTER_CALLBACK'),
    
    ],

    // Login social - youtube
    'youtube' => [
        'client_id' =>
            '444292796578-roielo2s98st2bnqee9741htltq2tsg8.apps.googleusercontent.com',
        'client_secret' => 'E-CKd9Ddk3AjcpHhlbC4DIJp',
        'redirect' => 'http://local.edemocracia.com/auth/youtube/callback'
    ],

    // Login social - linkedIn

    'linkedin' => [
        'client_id' => '78fg8nqdvhwhs1',
        'client_secret' => 'gmYsYGtGta6Dc3yv',
        'redirect' => 'http://local.edemocracia.com/auth/linkedin/callback'
    ],

    // Login social - instagram
    'instagram' => [
        'client_id' => '48d9bd9957274b57beadbbab85f9f1c8',
        'client_secret' => '1e5a51eba2cc4a8da9a9eeda3b86b29b',
        'redirect' => 'http://local.edemocracia.com/auth/instagram/callback'
    ]
];
