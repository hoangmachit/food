<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => [
                'required',
                'string',
                'min:3',
                'max:255',
            ],
            'desc' => [
                'required',
                'string',
                'min:3',
                'max:255',
            ],
            'price' => [
                'required',
                'integer',
                'min:3',
                'max:999999',
            ],
            'media_id' => [
                'nullable',
                'integer',
            ],
            'status' => [
                'required',
                'boolean',
            ],
        ];
    }
}
