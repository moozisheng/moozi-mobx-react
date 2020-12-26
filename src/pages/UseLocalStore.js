import React from "react";
import {useLocalStore, useObserver} from "mobx-react";

function UseLocalStore(props) {
  // useLocalStore 实现组件内状态管理
  const countStore = useLocalStore(
    () => ({
      count: props.init === undefined ? 0 : props.init,
      add() {
        this.count = this.count + 1;
      },
      get emoji() {
        return this.count % 2 ? "😜" : "🏃";
      }
    }),
    props
  );
  return useObserver(() => (
    <div className="border">
      <h3>UseLocalStore 组件内状态管理</h3>
      <button onClick={countStore.add}>count: {countStore.count}</button>
    </div>
  ));
}
export default UseLocalStore;
