/**
 * @api {get} /api/tabBar_api 取得 tab bar當下檔期資料
 * @apiName GetTabBar
 * @apiGroup TabBar
 *
 *
 * @apiSuccess {String} name 按鈕名稱
 * @apiSuccess {String} link 連結位置
 * @apiSuccess {String} default_image 按鈕預設圖片
 * @apiSuccess {String} pressed_image 按鈕點擊圖片
 * @apiSuccess {String} start_ts 開始日期
 * @apiSuccess {String} end_ts 結束日期..
 *
 * @apiSuccessExample Success-Response:
*    {
*     "data": [
*        {
*          "name": "所有好康",
*          "link": "https://www.buy123.com.tw",
*          "sorting": "1",
*          "start_ts": "2018-07-01 00:00:00",
*          "end_ts": "2018-07-31 23:59:59",
*          "default_image": "https://s3-us-west-1.amazonaws.com/s3.buy123.com.tw/bottom_bar/default_image/cc083e35fb0f36ca4384e2d9dbbdae99.png",
*          "pressed_image": "https://s3-us-west-1.amazonaws.com/s3.buy123.com.tw/bottom_bar/pressed_image/cd1c054925fb4d86d7ffe5dd484f2846.png"
*        },
*        {
*          "name": "我的最愛",
*          "link": "https://m.buy123.com.tw/site/favorite12",
*          "sorting": "2",
*          "start_ts": "2018-07-03 00:00:00",
*          "end_ts": "2018-07-29 23:59:59",
*          "default_image": "https://s3-us-west-1.amazonaws.com/s3.buy123.com.tw/bottom_bar/default_image/c0e114ab315763726c9e98cfa89a2013.png",
*          "pressed_image": "https://s3-us-west-1.amazonaws.com/s3.buy123.com.tw/bottom_bar/pressed_image/9126c56e20a0e969bb1341a335bf39f8.png"
*        }
*      ]
*    }
 *
 */