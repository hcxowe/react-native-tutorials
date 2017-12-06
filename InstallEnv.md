# React-Native本地window系统安装android开发环境？

### Node, Python2, JDK 安装

官网下载并安装

[Node](https://nodejs.org/en/)

[Python](https://www.python.org/downloads/)

[JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

**注意**
- 目前不支持Python 3版本
- 目前已知Node 7.1版本在windows上无法正常工作，请避开这个版本！
- 需要安装 JDK 1.8+

### Android Studio 2.0+ 安装

**请不要改动安装过程中的选项**
1. 确定所有安装都勾选了，尤其是Android SDK和Android Device Emulator
2. 在初步安装完成后，选择Custom安装项
3. 检查已安装的组件，尤其是模拟器和HAXM加速驱动
4. 安装完成后，在Android Studio的欢迎界面中选择Configure | SDK Manager
5. 在SDK Platforms窗口中，选择Show Package Details，然后在Android 6.0 (Marshmallow)中勾选Google APIs、Android SDK Platform 23、Intel x86 Atom System Image、Intel x86 Atom_64 System Image以及Google APIs Intel x86 Atom_64 System Image
6. 在SDK Tools窗口中，选择Show Package Details，然后在Android SDK Build Tools中勾选Android SDK Build-Tools 23.0.1。（必须是这个版本）


### 设置环境变量

1. 确保`ANDROID_HOME`环境变量正确地指向了你安装的Android SDK的路径
2. 确保`JAVA_HOME`环境变量正确地指向了你安装的JDK的路径

### 测试

启动安卓模拟器，执行以下命令

> $ git install -g react-native

> react-native init AwesomeProject

> cd AwesomeProject

> react-native run-android