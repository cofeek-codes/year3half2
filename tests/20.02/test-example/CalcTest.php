<?php

use PHPUnit\Framework\TestCase;

require "Calc.php";



class CalcTest extends TestCase
{

    public function testAdd()
    {
        $calc = new Calc();

        $res = $calc->add(1, 2);

        $this->assertEquals(3, $res);
    }


    public function testSub()
    {
        $calc = new Calc();

        $res = $calc->sub(1, 2);

        $this->assertEquals(-1, $res);
    }
    public function testMul()
    {
        $calc = new Calc();

        $res = $calc->mul(1, 2);

        $this->assertEquals(2, $res);
    }
}
