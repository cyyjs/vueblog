---
category: 技术
title: (二)ReactNative图标、app名称及启动页设置
date: 2017-12-18 10:39:35
tags: ["React Native"]
---

## 修改 App 图标

替换项目目录`android\app\src\main\res\mipmap-xxx`中的图片即可
![](https://ws3.sinaimg.cn/large/006tNc79ly1fmkp7lm117j30gg0ou769.jpg)

## 修改 App 名称

打开项目目录`android\app\src\main\res\valuse\strings.xml`,修改即可：

```xml
<resources>
    <string name="app_name">名称</string>
</resources>
```

## 设置启动页

使用[rn-splash-screen](https://github.com/mehcode/rn-splash-screen)组件：使用方法：
1、安装 `npm i rn-splash-screen --save`
2、连接 `react-native link rn-splash-screen`
3、在 res 文件中新建`drawable`文件夹，放置`splash.png`图片
4、修改`android/app/src/main/res/values/styles.xml`文件，添加一行：

````xml
<resources>
    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <item name="android:windowBackground">@drawable/splash</item>
        <!-- Customize your theme here. -->
    </style>
</resources>
5.修改`android/app/src/main/AndroidManifest.xml`文件：
```xml
<application
      android:name=".MainApplication"
      android:allowBackup="true"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher">
      <activity
        android:name=".MainActivity"
        android:theme="@style/AppTheme"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
        android:windowSoftInputMode="adjustResize">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>
````

6.修改`android/app/src/main/java/com/APPNAMES/MainActivity.java`文件：

```xml
import com.facebook.react.ReactActivity;
import android.graphics.Color;
import android.os.Bundle;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext;
import com.mehcode.reactnative.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      // Show the js-controlled splash screen
        SplashScreen.show(this, getReactInstanceManager());
        super.onCreate(savedInstanceState);
    }
}
```

7.修改项目入口页面

```js
import SplashScreen from 'rn-splash-screen'

// Hide the active splash screen
SplashScreen.hide()
```

执行`react-native run-android`启动查看效果
