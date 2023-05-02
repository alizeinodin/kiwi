<?php

namespace App\Http\Requests\DiscountCode;

use Illuminate\Foundation\Http\FormRequest;

class AddDiscount extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'code' => 'required|exists:discount_codes,code',
        ];
    }
}
