<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerRequest;
use App\Repositories\Customer\CustomerRepositoryInterface;

class CustomerController extends Controller
{
    /**
     * Summary of customerRepository
     * @var
     */
    private $customerRepository;
    /**
     * Summary of __construct
     * @param CustomerRepositoryInterface $customerRepository
     */
    public function __construct(
        CustomerRepositoryInterface $customerRepository
    ) {
        $this->customerRepository = $customerRepository;
    }
    /**
     * Summary of index
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function index()
    {
        $customers = $this->customerRepository->getAll();
        return response()->json([
            'success' => true,
            'message' => 'Success.',
            'customers' => $customers,
        ]);
    }
    /**
     * Summary of detail
     * @param string $customerId
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function detail(string $customerId)
    {
        $customer = $this->customerRepository->find($customerId);
        return response()->json([
            'success' => true,
            'message' => 'Success.',
            'customer' => $customer,
        ]);
    }
    /**
     * Summary of update
     * @param string $customerId
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function update(string $customerId, CustomerRequest $request)
    {
        $data = $request->validated();
        $customer = $this->customerRepository->find($customerId);
        $customer->update($data);
        return response()->json([
            'success' => true,
            'data' => $data,
            'message' => 'Update customer success.',
            'product' => $customer,
        ]);
    }
}
