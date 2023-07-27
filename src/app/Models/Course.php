<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Morilog\Jalali\Jalalian;

class Course extends Model
{
    use HasFactory;

    protected $fillable = ['course_date'];

    public function students(): BelongsToMany
    {
        return $this->belongsToMany(Student::class, 'pays')
            ->withTimestamps()
            ->withPivot(['amount', 'discount_code_id']);
    }

    public function pays(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Pay::class);
    }

    public function discountCodes(): BelongsToMany
    {
        return $this->belongsToMany(DiscountCode::class);
    }

    public function getCourseDateAttribute($value)
    {
        return Jalalian::fromCarbon($value)->format('Y-m-d');
    }

    public function setCourseDateAttribute($value)
    {
        $this->attributes['course_date'] = Jalalian::fromFormat('Y-m-d', $value)->toCarbon();
    }
}
