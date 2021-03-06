grunt-config
===========================
grunt一个前端的打包工具，相似的还有gulp、webpack等优秀的前端打包工具。当然这里不是在做这些打包工具的比较，这里主要是介绍下我平时是如何使用grunt（一是分享快速搭建项目开发环境的方法，二是为了做一个笔记记录下来）。
当然有人会问为啥选择用grunt，基本是基于一个先入为主的原则。而且个人觉得前端这块资源特别多（框架、插件、打包工具、开发工具等），个人觉得好用、能用、方便用的原则即可，当然这个也要看具体项目。像我平时做的比较多的是单页面的小型应用（pc单页及h5、小游戏等），所以用grunt、gulp等打包工具就足矣。比较大型的项目（vue、react等项目）,会选择用webpack。（本人前端菜鸟，webpack不怎么会配置，只会用简单的vue-cli生成的默认配置）
***
### [grunt安装](http://www.gruntjs.net/getting-started)
```
grunt 的安装是基于npm安装的（npm不会有人不知道咋弄吧/捂脸）
```
***

### grunt的配置

主要配置的项有以下这些
>cssmin:css压缩。前端优化中比较常见和基础的一种方式，在实际搬砖的过程中，会结合webstorm中的less一起使用

>uglify:js丑化和混淆。一是为了前端的优化（压缩文件的大小），二是为了代码的保护（当然还是鼓励大家开源自己的代码，除非有敏感数据或敏感算法的项目）

>imagemin:图片压缩。这里其实不太推荐这个，想推荐大家一个很好用的压缩工具，[智图](http://zhitu.isux.us/index.php/preview/download)。在这个之前我都是使用[https://tinypng.com/](https://tinypng.com/)这个去压缩，毕竟是网页版，存在很多问题（1，一次只能压缩20张，而且还有大小限制；2，打包下载，还的解压，占位置；），但是不得不说，这个能把图片压得很小也不会丢失太多的精度。智图拥有tinypng的优点，也规避了它的缺点，智图支持压缩完图片直接覆盖本地图片（这个真的很酷，节省电脑空间，也不必繁琐的解压缩了），还支持生成webp格式的图片。

>connect:本地的前端服务器。这个似乎可以不需要，但是往往前端搬砖的过程中需要网页在手机端调试和在同事电脑上调试，所以启用一个简单的前端服务器来开发很有必要。而且有的项目中，比如canvas、游戏项目等，引入资源文件的时候就得通过这种同域服务器的请求才行。

>watch:代码监听。这个不必太多做解释，这个估计都达成一种共识了，前端的代码变动不希望要手动的刷新代码，而是自动的反应到页面上，提高项目开发的效率。我开发的时候一般都是三个屏幕同时的进行，代码编辑、查看设计稿、浏览器看页面，这个时候watch就很有必要了。

>jshint:js语法检查。说实话，作为一个前端菜鸟，这个用的很少，目前做的项目，个人能独立完成的小项目偏多，大型项目的时候发现去配置一个能说服协同工作的搬砖者的jshint规则比较难，最终还是鄙弃了。但是个人觉得这个比较重要，以后有机会再去研究下这个。


>autoprefixer:css3中后缀的自动补全。也是为了提升开发效率吧。由于公司性质的原因，如今pc端页面还需做ie7的兼容处理（想死），样式处理这块，本人是本着渐进式开发的理念，能实现css3效果的就去显示css3效果，不能的话能正常显示即可。

***
### grunt的指令
```
grunt:打包指令。这里主要是进行打包的处理，会对js、css、image这三类资源文件进行打包，放在项目根目录下的build文件夹下
```
```
grunt serve:启用服务器。启动本地服务器，开启监听
```

--------------------------------
希望自己的一个经验能帮到需要的人，当然，作为一个前端菜鸟，以上很多东西肯定有理解不足的地方，欢迎大家留言吐槽。




