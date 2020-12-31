import React, {useRef, useContext} from "react";
// 导入 Context 上下文对象
import { MobXProviderContext } from "./MobXProviderContext";

export function Provider({children, ...stores}) {
  // 使用 useContext hook 获取当前 Context 上下文对象的当前值
  const parentValue = useContext(MobXProviderContext);
  // 使用 useRef hook 创建一个可变的 ref 对象，它的 .current 属性的初始值为当前的 Context 上下文对象的当前值和 stores
  const mutableProvdierRef = useRef({...parentValue, ...stores});
  // 通过 ref 对象的 current 属性获取保存在 ref 对象中的 Context 上下文对象当前值和 stores
  const value = mutableProvdierRef.current;
  
  // 每个 Context 对象都会返回一个 Provider React 组件
  // 将存储在可变对象ref中的  Context 上下文对象的当前值和 stores 传递给 Context 上下文对象的 value属性
  // 当 value 值发生改变时，Provider 内部的子组件都会重新渲染
  return (
    <MobXProviderContext.Provider value={value}>
      {children}
    </MobXProviderContext.Provider>
  );
}