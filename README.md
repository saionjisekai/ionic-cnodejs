
程序最小化打包在`400KB+`，icon已压，JS、CSS、HTML无压缩，不过也差不了多少了。

从构思到现在的这个挫样，大概总历时3、4个小时左右，效率算低了。也是最近刚刚在研究Ionic，权当练练手，给想尝试PhoneGap开发CNodejs客户端的小伙伴起个头吧。

程序中几乎没有自己写css，通篇都在用Ionic的组件，请大家不要吐槽绿色调跟node不一样，连这个颜色也是自带的。评论的地方参（cao）考(xi)了GItHub的某某处。

-------------------
 ![首页.png](//dn-cnode.qbox.me/FqgP2aejekoukzCL1quwHFEuvWb7)
 ![详情.png](//dn-cnode.qbox.me/FsbqhDmpicdpZWF6hig4mCSYRg-v)
 ![加载中.png](//dn-cnode.qbox.me/FkI6saFAEGdcp8JgpV4RsDv4Fu0f)请无视这个高端的loading，暂时还没想好搞成啥样，打算找机会整个高保真再慢慢改吧。

-------------------
#### 目前的问题还挺多：
1. 一个高端的`loading`；
2. 日期描述，打算还是用`moment.js`来搞好了；
3. 页面切换中有各种诡异的现象待解决；
4. 内链和外链的处理；
5. 主题详情中经常拉不到图片，不知道是哪边的情况；
6. 缓存优化，目前是第一次拉去topics数据后放在`localStorage`，此后点刷新才会重新请求，详情页也打算这么搞，不知道还有没有好点的方法；
7. 靠，做的时候明明记得有很多问题的..
8. ..
9. 榨干API。

-------------------
#### 简单说说 [ionic](http://ionicframework.com)
- 基于 [PhoneGap](http://phonegap.com/)
- 内置 `ionic-angular`
- 据说还有啥硬件加速，反正真心比JQM响应快。但还是没有[@xingrz](https://github.com/xingrz)的原生版顺滑，哈哈。
- ... 没词了
- 详情请移步官网 [http://ionicframework.com](http://ionicframework.com)

#### 反馈与建议

##### 如：
- 机型：HTC Butterfly
- OS：Android 4.3
- 分辨率：1920x1080
- CPU：4 x 1.5G HZ
- RAM：2GB
- 反馈：卡如狗
- 建议：反馈给我也没啥用，我就一部手机。

-------------------

#### 下载地址
这个就是APK：![想办法下载这张打不开的图，改成XXX.apk](//dn-cnode.qbox.me/FuNBfvRha6Qf4T307ELemaUT45Po "想办法下载这张打不开的图，改成XXX.apk")

