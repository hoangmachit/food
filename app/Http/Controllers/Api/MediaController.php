<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\MediaRequest;
use App\Http\Resources\MediaResource;
use App\Repositories\Media\MediaRepositoryInterface;
use Illuminate\Support\Facades\File;

class MediaController extends Controller
{
    /**
     * Summary of mediaRepository
     * @var MediaRepositoryInterface $mediaRepository
     */
    private $mediaRepository;
    /**
     * Summary of __construct
     * @param MediaRepositoryInterface $mediaRepository
     */
    public function __construct(
        MediaRepositoryInterface $mediaRepository
    ) {
        $this->mediaRepository = $mediaRepository;
    }
    /**
     * Summary of upload
     * @param \App\Http\Requests\MediaRequest $request
     * @return \Illuminate\Http\JsonResponse|mixed
     */
    public function upload(MediaRequest $request)
    {
        $file = $request->file;
        $clientName = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();
        $name = $this->makeName($clientName, $extension);
        $success = $file->move(public_path('uploads'), $name);
        $media = null;
        if (!$success) {
            return response()->json([
                'success' => $success,
                'message' => 'Error',
            ]);
        }
        $media = $this->mediaRepository->create([
            'name' => $name,
            'extension' => $extension,
            'status' => 0,
        ]);
        return response()->json([
            'success' => $success,
            'message' => 'Success',
            'media' => new MediaResource($media),
        ]);
    }
    /**
     * Summary of makeName
     * @param string $clientName
     * @param string $extension
     * @return string
     */
    private function makeName(string $clientName, string $extension)
    {
        $currentName = pathinfo($clientName, PATHINFO_FILENAME);
        $newName = $currentName . "_" . uniqid() . "." . $extension;
        while (File::exists(public_path('uploads') . $newName)) {
            $newName = $currentName . "_" . uniqid() . "." . $extension;
        }
        return $newName;
    }
}
