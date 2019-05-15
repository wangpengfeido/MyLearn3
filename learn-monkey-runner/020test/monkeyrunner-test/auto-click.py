# -*- coding: utf-8 -*-

from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice
import random

BASE_X = 510
BASE_Y = 930

device = MonkeyRunner.waitForConnection()

while True:
    MonkeyRunner.sleep(0.3)
    x = BASE_X + random.randint(-10, 10)
    y = BASE_Y + random.randint(-10, 10)
    device.touch(x, y, MonkeyDevice.DOWN_AND_UP)
