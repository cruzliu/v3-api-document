/**
 * @api {get} /api/bottomBar_api 取得bottom bar當下檔期資料
 * @apiName GetBottomBar
 * @apiGroup Bottom
 *
 * @apiParam {Integer} device App:1, Mobile Web:2
 *
 * @apiSuccess {String} name 按鈕名稱
 * @apiSuccess {String} link 連結位置
 * @apiSuccess {String} default_image 按鈕預設圖片
 * @apiSuccess {String} pressed_image 按鈕點擊圖片
 * @apiSuccess {String} start_ts 開始日期
 * @apiSuccess {String} end_ts 結束日期
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */