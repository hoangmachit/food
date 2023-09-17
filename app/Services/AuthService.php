<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthService
{
    /**
     * Summary of login
     * @param array $data
     * @return array
     */
    public function login(array $data)
    {
        $username = $data['username'];
        $password = $data['password'];
        $remember = $data['remember'] ?? false;
        $user     = User::whereUsername($username)->first();
        if (!$user) {
            return [
                'success' => false,
                'message' => 'Invalid.',
            ];
        }
        if (!Auth::attempt(['username' => $username, 'password' => $password], $remember)) {
            return [
                'success' => false,
                'message' => 'Login fail.',
            ];
        }
        $user = Auth::user();
        $tokenResult = $user->createToken('accessToken');
        return [
            'success' => true,
            'message' => 'Login success.',
            'user'   => $user,
            'accessToken' => $tokenResult->plainTextToken,
        ];
    }
}
