// // include dependencies
// const express = require('express')
// const { createProxyMiddleware } = require('http-proxy-middleware')

// // proxy middleware options
// const options = {
//     target: 'http://127.0.0.1:7001', // target host
//     changeOrigin: true, // needed for virtual hosted sites
//     ws: true, // proxy websockets
//     router: {
//       // when request.headers.host == 'dev.localhost:3000',
//       // override target 'http://www.example.org' to 'http://localhost:8000'
//       'localhost:3000': 'http://127.0.0.1:7001',
//     },
//   }

//   // create the proxy (without context)
// const appProxy = createProxyMiddleware(options)
 
// // mount `appProxy` in web server
// const app = express()
// app.use('/api', appProxy)
// 渲染之前做 something
export default function (context) {
    // If the user is not authenticated
    console.log('middleware', context)
  }