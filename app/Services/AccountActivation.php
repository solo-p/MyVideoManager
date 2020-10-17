<?php

namespace App\Services;

use App\Mail\ActivateUserAccount;
use App\User;
use Illuminate\Support\Facades\Mail;


class AccountActivation
{
    private function generateToken()
    {
        return mt_rand() . time();
    }

    public function handle($registeredUser)
    {
        $user = User::find($registeredUser->user->id);
        $user->activation_token = $this->generateToken();
        $user->save();

        Mail::to($user)->queue(new ActivateUserAccount($user));
    }
}
