<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ConfigSeeder::class);
        \App\Models\User::factory(1)->create();
        \App\Models\Product::factory(25)->create();
        \App\Models\Customer::factory(50)->create();
    }
}
