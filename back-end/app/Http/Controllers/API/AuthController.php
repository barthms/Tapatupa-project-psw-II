<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function index(){
        $data = User::where('isDeleted', false)->get();
        return response()->json($data);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'token' => Str::random(60),
        ]);

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        $user = User::where('username', $request->username)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user->token = Str::random(60);
        $user->save();

        return response()->json([
            'message' => 'Login successful',
            'token' => $user->token,
            'user' => $user
        ]);
    }

    public function logout(Request $request)
    {
        $user = User::where('token', $request->bearerToken())->first();

        if ($user) {
            $user->token = null;
            $user->save();
        }

        return response()->json(['message' => 'Logged out successfully']);
    }

    public function me(Request $request)
    {
        $user = User::where('token', $request->bearerToken())->first();

        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        return response()->json($user);
    }
}
