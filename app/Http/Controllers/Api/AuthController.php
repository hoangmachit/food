<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Summary of authService
     * @var AuthService $authService
     */
    private $authService;
    /**
     * Summary of __construct
     * @param AuthService $authService
     */
    public function __construct(
        AuthService $authService
    ) {
        $this->authService = $authService;
    }
    /**
     * Summary of login
     * @param \App\Http\Requests\UserRequest $request
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function login(UserRequest $request)
    {
        $data = $request->validated();
        $result = $this->authService->login($data);
        return response()->json($result);
    }
}
