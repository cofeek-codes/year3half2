<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function getAll()
    {
        return Post::all();
    }

    public function getById($id)
    {
        return Post::findOrFail($id);
    }

    public function create(Request $request)
    {
        return Post::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $postToUpdate = Post::findOrFail($id);
        $postToUpdate->update($request->all());
        return $postToUpdate;
    }

    public function delete($id)
    {
        $postToDelete = Post::findOrFail($id);
        $postToDelete->delete();

        return 204;
    }
}
