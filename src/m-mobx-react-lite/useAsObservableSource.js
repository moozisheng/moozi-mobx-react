import React from 'react';
import { observable, runInAction } from 'mobx';

export const useAsObservableSource = (current) => {
    // 使用 observable 将 current 转换成可观察对象 
    const [res] = React.useState(() => observable(current));

    // runInAction 接收代码块并在(异步的)动作中执行
    // runInAction(fn) 是 action(fn)() 的语法糖
    runInAction(() => {
        Object.assign(res, current);
    })

    return res;
}