<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Summary of index
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function index()
    {
        $products = Product::all();
        return response()->json([
            'success' => true,
            'message' => 'Success.',
            'products' => $products,
        ]);
    }
    /**
     * Summary of detail
     * @param string $productId
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function detail(string $productId)
    {
        $product = Product::find($productId);
        return response()->json([
            'success' => true,
            'message' => 'Success.',
            'product' => $product,
        ]);
    }
    /**
     * Summary of update
     * @param string $productId
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function update(string $productId, ProductRequest $request)
    {
        $product = Product::find($productId);
        $data    = $request->validated();
        $product->update($data);
        return response()->json([
            'success' => true,
            'message' => 'Update product success.',
            'product' => $product,
        ]);
    }
}
