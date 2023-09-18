<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use App\Repositories\Product\ProductRepositoryInterface;

class ProductController extends Controller
{
    /**
     * Summary of productRepository
     * @var ProductRepositoryInterface $productRepository
     */
    private $productRepository;
    /**
     * Summary of __construct
     * @param ProductRepositoryInterface $productRepository
     */
    public function __construct(
        ProductRepositoryInterface $productRepository
    ) {
        $this->productRepository = $productRepository;
    }
    /**
     * Summary of index
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function index()
    {
        $products = $this->productRepository->getAll();
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
        $product = $this->productRepository->find($productId);
        return response()->json([
            'success' => true,
            'message' => 'Success.',
            'product' => new ProductResource($product),
        ]);
    }
    /**
     * Summary of update
     * @param string $productId
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function update(string $productId, ProductRequest $request)
    {
        $data = $request->validated();
        $product = $this->productRepository->find($productId);
        $product->update($data);
        return response()->json([
            'success' => true,
            'data' => $data,
            'message' => 'Update product success.',
            'product' => new ProductResource($product),
        ]);
    }
}
