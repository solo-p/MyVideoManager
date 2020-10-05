<?php

use App\User;
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
        // $this->call(UsersTableSeeder::class);

        $user = factory(User::class)->create([
            'name' => 'Solomon Office',
            'email' => 'solomon@cotechgy.com',
            'password' => bcrypt('password'),
            'active' => 1,
        ]);

        $this->createComments($user->id, 10);

        $user = factory(User::class)->create([
            'name' => 'Paul Personal',
            'email' => 'paul@gmail.com',
            'password' => bcrypt('password'),
            'active' => 1,
        ]);

        $this->createComments($user->id, 4);
    }
}
