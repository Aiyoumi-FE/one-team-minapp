let server = 'http://192.168.4.12:8081'


// function GET(url, data, showLoading) {
//  return request('GET', url, data, showLoading)
// }

// function request(method, url, data, showLoading = true) {
//   let contentType = method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
//   return new Promise (function(resolve, reject) {
//     wx.request({
//       url,
//       data,
//       header: {
//         'content-type':contentType
//       },
//       nethod: method || 'GET',
//       success(res) {
//         console.log(res)
//         if (res.success) {
//           resolve(res)
//         } else {
//           reject(res)
//         }
//       },
//       fail() {
//         reject(new Error('request failed'))
//       },
//       complete() {

//       }
//     })
//   })
// }

// module.exports = {
//   GET
// }
