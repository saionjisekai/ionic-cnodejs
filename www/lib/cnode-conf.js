var API_HOST = 'https://cnodejs.org/api/v1/';
var API = {

	/**
	 * get /topics 主题首页
	 * @url https://cnodejs.org/api/v1/topics
	 * @param page Number 页数
	 * @param tab String 主题分类
	 * @param limit Number 每一页的主题数量
	 * @param mdrender String 当为 false 时，不渲染。默认为 true
	 */
	TOPICS: API_HOST + 'topics',

	/**
	 * get /topic/:id 主题详情
	 * @url https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312
	 * @param mdrender String 当为 false 时，不渲染。默认为 true
	 */
	TOPIC_DETAIL: API_HOST + 'topic/{:id}',

	/**
	 * post /topics 新建主题
	 * @url https://cnodejs.org/api/v1/topics
	 * @param title String 标题
	 * @param tab String [ask|share|job]
	 * @param content String 主体内容
	 * return {success: true, topic_id: '5433d5e4e737cbe96dcef312'}
	 */
	NEW_TOPICS: API_HOST + 'topics',

	/**
	 * post /topic/:topic_id/replies 新建评论
	 * @url https://cnodejs.org/api/v1/topic/:topic_id/replies
	 * @param accesstoken String 用户的 accessToken
	 * @param content String 评论的主体
	 * @param reply_id String 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。
	 * return {success: true, reply_id: '5433d5e4e737cbe96dcef312'}
	 */
	REPLIES: API_HOST + 'topic/{:id}/replies',

	/**
	 * post /reply/:reply_id/ups 为评论点赞
	 * @desc 接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 action 字段中，up or down。
	 * @url https://cnodejs.org/api/v1/reply/:reply_id/ups
	 * @param accesstoken String
	 * return {"success": true, "action": "down"}
	 */
	UPS: API_HOST + 'reply/{:reply_id}/ups',

	/**
	 * get /user/:loginname 用户详情
	 * @url https://cnodejs.org/api/v1/user/alsotang
	 */
	USER: API_HOST + 'user/{:loginname}'

};

String.prototype.formatParam = function(){
	var string = this + '';
	for ( var i = 0 ; i < arguments.length ; i++ ) {
		string = string.replace(/{(:\w+)}/, arguments[i]);
	}
	return string;
};