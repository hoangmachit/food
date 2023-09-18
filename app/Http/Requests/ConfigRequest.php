<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ConfigRequest extends FormRequest
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
        $config = $this->route('configId');
        return [
            'name' => [
                'required',
                'string',
                Rule::unique('configs', 'name')->ignore($config),
            ],
            'value' => [
                'required',
                'string',
            ],
        ];
    }
}
