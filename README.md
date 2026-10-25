# baxian-example

baxian 演示项目：一个可以输入名字的问候网页，用于体验提出任务、Dev 开发、QA 评审和人工确认合并。

需要 Node.js 22 或更新版本；没有第三方依赖，不需要 `npm install`。

```sh
npm test
npm start
```

打开 http://127.0.0.1:5173 查看网页。预览只监听本机，使用 `Ctrl+C` 停止。

`hello.js` 提供问候逻辑，`index.html` 是页面，`server.js` 提供本地预览。

可在 baxian 中尝试的小任务：空名字使用默认问候、去掉名字两端的空格、增加中英文问候选项。每次任务保持范围小，并为行为变化补充测试。
