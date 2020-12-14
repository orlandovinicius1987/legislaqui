<?php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Contact implements Rule
{
    protected $fieldNamesArray = [
        'mobile' => 'Celular',
        'whatsapp' => 'Whatsapp',
        'email' => 'E-mail',
        'phone' => 'Telefone Fixo',
        'facebook' => 'Facebook',
        'twitter' => 'Twitter',
        'instagram' => 'Instagram'
    ];

    protected $field;
    protected $showName;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($field, $showName)
    {
        $this->field = $field;
        $this->showName = $showName;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return $this->regexRules($value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'O campo ' . $this->showName . ' não é válido.';
    }

    private function validatePhone($phone, $type)
    {
        $phone = preg_replace('/\D/', '', $phone);
        switch ($type) {
            case 'mobile':
                return strlen($phone) == 11;
                break;
            case 'phone':
                return strlen($phone) == 10;
                break;
            default:
                return false;
        }
    }

    /**
     * @param $contactTypeCode
     * @param $contact
     * @param $match
     * @return bool
     */
    protected function regexRules($contact)
    {
        $pass = true;
        if (!is_null($contact)) {
            switch ($this->field) {
                case 'mobile':
                    $pass = $this->validatePhone($contact, 'mobile');
                    break;
                case 'whatsapp':
                    $pass = $this->validatePhone($contact, 'mobile');
                    break;
                case 'email':
                    preg_match_all(
                        "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/m",
                        $contact,
                        $match
                    );
                    $pass = sizeof($match[0]) == 1;
                    break;
                case 'phone':
                    $pass = $this->validatePhone($contact, 'phone');
                    break;
                case 'facebook':
                    $pass = true;
                    break;
                case 'twitter':
                    $pass = true;
                    break;
                case 'instagram':
                    $pass = true;
                    break;
            }
        }
        return $pass;
    }
}
