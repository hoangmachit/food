<?php

namespace App\Repositories\Payment;

use App\Models\Payment;
use App\Repositories\BaseRepository;

class PaymentRepository extends BaseRepository implements PaymentRepositoryInterface
{
    /**
     * @return mixed
     */
    public function getModel()
    {
        return Payment::class;
    }
}
