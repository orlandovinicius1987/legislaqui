<?php

return [
    'approvalGoal' => env('APPROVAL_GOAL', 12000),

    'timeLimit' => 120,

    'timeLimitMonth' => 4,

    'pagination' => 10,

    'daysUntilExpiration' => env('PROPOSAL_DAYS_UNTIL_EXPIRATION', 120)
];
