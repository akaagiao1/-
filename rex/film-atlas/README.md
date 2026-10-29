# 片场 · FILM ATLAS 1.1

面向 rex 的电影与剧集首页，覆盖 143 个公开 TMDB 榜单。

## 下载

- [首页布局 FilmAtlas-v1.1.rex](https://raw.githubusercontent.com/akaagiao1/-/main/rex/film-atlas/FilmAtlas-v1.1.rex)
- [完整包 FilmAtlas-v1.1.zip](https://raw.githubusercontent.com/akaagiao1/-/main/rex/film-atlas/FilmAtlas-v1.1.zip)
- [数据模块 emby-public-lists.js](https://raw.githubusercontent.com/akaagiao1/-/main/rex/film-atlas/emby-public-lists.js?v=1.1.0)
- [使用说明](USAGE.md)
- [校验报告](VALIDATION.md)
- [设计预览源文件](preview.html)

先将数据模块更新至 **1.1.0**，清除旧模块缓存，再导入新版首页。

## 1.1 更新

修复默认只返回前20条的问题：全量响应保留完整列表，分页接口自动获取全部页。首页电影与剧集成对展示趋势、口碑、经典和动画，地区剧集目录提前。

使用 rex 原生样式，面向 iOS / iPadOS / macOS / tvOS 共用；尚未分别实机验证四端渲染及长榜单性能。原本名为 Top20 的源榜单不会凭空增加条目。

目录来自 [ffinly/emby-collection-sync](https://github.com/ffinly/emby-collection-sync)。内容随源TMDB列表更新；新增榜单目录需更新模块。预览HTML为设计示意，不是rex皮肤或实机截图。
