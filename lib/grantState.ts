'use strict';

import { split, isString, isArray, find, eq } from "lodash/fp";

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
const fn = (param: string | (number|string)[] | 'all') => {
  const list: (Props)[] = [
    { dataIndex: 1, title: '未发放' },
    { dataIndex: 2, title: '已发放' },
    { dataIndex: 3, title: '已取消' },
    { dataIndex: 4, title: '已累计' }
  ];
  let paramOk: (number)[] = [];
  const result = [];

  if (eq(param, 'all')) {
    return list;
  } else if (isString(param)) {
    paramOk = split(',', param).map(v => +v) as any;
  } else if (isArray(param)) {
    paramOk = param.map(v => +v);
  }
  paramOk.map(v => {
    result.push(find({dataIndex: v}, list).title);
  });
  return String(result) as any;
};

export default fn;

interface Props {
  dataIndex: number,
  title: string
}
