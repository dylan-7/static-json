/**
 * @desc
 * 支付类型
 * 1支付宝, 2微信支付, 3QQ钱包, 4网银支付, 5京东支付, 6银联支付, 7百度支付, 8财付通, 9点卡支付, 10云闪付
 *
 * @param
 * {'1,2'} 字符串，返回对应名称
 * {[1,2]} 数组，返回对应名称
 * {'all'} 返回全部
 */
declare const fn: (param: string | (string | number)[]) => any;
export default fn;
