requirejs.config({
    baseUrl: './src/js',
    // 注意，paths config是相对于baseUrl的，
    // 而且不要包含".js"的后缀，因为一个path
    // 有可能是个目录
    paths: {
        app: './app',
        com:'./com',
        jquery:'./lib/jquery'
    }
});

// 加载入口模块
requirejs(['./app/index']);