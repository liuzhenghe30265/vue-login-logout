/**
 * @name: 设置 cookie
 * @param {String} cname cookie 名称
 * @param {String} cvalue cookie 值
 * @param {Number} exdays cookie 过期时间
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires=" + d.toGMTString()
    document.cookie = cname + "=" + cvalue + "; " + expires
}

/**
 * @name: 获取 cookie 值
 * @param {String} cname
 */
function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim()
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length)
    }
    return ""
}

/**
 * @name: 删除 cookie 值
 * @param {String} cname
 */
function delCookie(cname) {
    var expires = 'Thu, 01 Jan 1970 00:00:00 GMT"'
    document.cookie = cname + "=" + "; " + expires
}
export default {
    setCookie,
    getCookie,
    delCookie
}