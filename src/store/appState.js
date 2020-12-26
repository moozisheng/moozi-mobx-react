import {observable, action} from "mobx";

// step1. 定义状态并使其可观察
const appState = observable({
  timer: 0
});


// step3. 更改状态
appState.resetTimer = action(function reset() {
  appState.timer = 0;
});

setInterval(
  action(function tick() {
    appState.timer += 1;
  }),
  1000
);

export default appState;
