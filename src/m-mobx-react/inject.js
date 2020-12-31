import React, { useContext } from "react";
import { MobXProviderContext } from "./MobXProviderContext";

export const inject = (...storeNames) => component => {
  // 使用 forwardRef 创建一个支持 refs 转发的组件
  const Injector = React.forwardRef((props, ref) => {
    // 使用 useContext hook 获取当前 Context 上下文对象的当前值
    const context = useContext(MobXProviderContext);
    const newProps = {
      ...props,
      ...context
    };
    if (ref) {
      newProps.ref = ref;
    }
    // 根据传进来的组件和 props 创建一个新的组件
    return React.createElement(component, newProps);
  });

  return Injector;
};
