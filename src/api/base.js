import { API } from './index'

function request(method, urlName, data, showLoading = true) {
    let contentType = method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
    let header = {
        'Authorization': `Bearer ${wx.getStorageSync('token')}`,
        'content-type': contentType
    }
    wx.showLoading({
        title: '加载中'
    })
    return new Promise((resolve, reject) => {
        wx.request({
            url: API[urlName],
            data,
            header: header,
            method: method,
            success(res) {
                console.log(res)
                if (res.data.success) {
                    resolve(res.data.result)
                }
                if (res.code === -1999) {
                    wx.setStrorageSync('source', true)
                    wx.navigateTo({
                        url: '/pages/user/login'
                    })
                    return false
                }
                // resolve(res)
            },
            fail() {
                reject(new Error('request failed'))
            },
            complete() {
                wx.hideLoading()
            }
        })
    })
}

module.exports = {
    request
}
