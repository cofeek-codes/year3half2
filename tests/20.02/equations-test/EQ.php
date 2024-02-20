<?php

class EQ
{
    public function solve($a, $b, $c)
    {
        $x = 0;

        if ($a != 0) {
            $x = ($c - $b) / $a;
        } else if ($a == 0 && $b == $c) {
            $x = "x - any";
        } else {
            $x = "no result";
        }

        return $x;
    }
}
