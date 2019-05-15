# -*- coding: utf-8 -*-

from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice
import random

BASE_X = 200
BASE_Y = 220

device = MonkeyRunner.waitForConnection()

while True:
    device.touch(BASE_X, BASE_Y, MonkeyDevice.DOWN_AND_UP)
    MonkeyRunner.sleep(5)
    device.press('KEYCODE_BACK', MonkeyDevice.DOWN_AND_UP)
    MonkeyRunner.sleep(5)
