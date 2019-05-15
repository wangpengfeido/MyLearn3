# -*- coding: utf-8 -*-

from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice

device = MonkeyRunner.waitForConnection()

# 触摸
# device.touch(900, 130, MonkeyDevice.DOWN)

# 截图
result = device.takeSnapshot()
result.writeToFile(r'D:\workspace\github\MyLearn3\learn-monkey-runner\010test-start\monkeyrunner-test\shot1.png', 'png')
