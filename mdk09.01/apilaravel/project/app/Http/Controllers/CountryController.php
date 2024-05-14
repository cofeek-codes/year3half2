<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CountryController extends Controller
{
    public function getAll() {
       
        return Country::all();
    }

    public function getOne($id) {
        
        return Country::findOrFail($id);
    }

    public function addCountry(Request $request) {
      return Country::create($request->all());
    }

    public function editCountry($id, Request $request) {
        $countryToUpdate = Country::findOrFail($id);
        $countryToUpdate->update(['name' => $request->input('name')]);
        return $countryToUpdate;
    }

    public function deleteCountry($id) {
         Country::findOrFail($id)->delete();
         return 204;
    }
}
