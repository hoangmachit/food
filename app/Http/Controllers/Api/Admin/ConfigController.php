<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ConfigRequest;
use App\Repositories\Config\ConfigRepositoryInterface;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    /**
     * Summary of configRepository
     * @var ConfigRepositoryInterface $configRepository
     */
    private $configRepository;
    /**
     * Summary of __construct
     * @param ConfigRepositoryInterface $configRepository
     */
    public function __construct(
        ConfigRepositoryInterface $configRepository
    ) {
        $this->configRepository = $configRepository;
    }
    /**
     * Summary of index
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function index(Request $request)
    {
        $configs = $this->configRepository->getAll();
        return response()->json([
            'success' => true,
            'message' => 'Success.',
            'configs' => $configs,
        ]);
    }
    /**
     * Summary of update
     * @param string $configId
     * @param \App\Http\Requests\ConfigRequest $request
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function update(string $configId, ConfigRequest $request)
    {
        $config = $this->configRepository->find($configId);
        $data = $request->validated();
        $config->update($data);
        return response()->json([
            'success' => true,
            'message' => 'Update config success.',
            'config' => $config,
        ]);
    }
}
