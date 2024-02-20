<?php

use PHPUnit\Framework\TestCase;

require "EQ.php";

class EQTest extends TestCase
{
    public function testX()
    {
        $eq = new EQ();

        $res = $eq->solve(1, 1, 2);

        $this->assertEquals(1, $res);
    }
    public function testBeqC()
    {
        $eq = new EQ();

        $res = $eq->solve(0, 2, 2);

        $this->assertEquals("x - any", $res);
    }
    public function testBneqC()
    {
        $eq = new EQ();

        $res = $eq->solve(0, 1, 5);

        $this->assertEquals("no result", $res);
    }
}
