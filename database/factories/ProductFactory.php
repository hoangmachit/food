<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => Str::random(15),
            'desc' => Str::random(15),
            'price' => rand(25000, 30000),
            'photo' => null,
            'status' => 1,
            'total_buy' => rand(1, 100),
            'user_id' => 1,
        ];
    }
}
