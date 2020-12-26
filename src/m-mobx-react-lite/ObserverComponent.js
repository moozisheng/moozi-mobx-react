import { useObserver } from './useObserver'

const ObserverComponent = ({ children, render}) => {

    // children： Observer 组件的子元素，即 props.children
    // render：Observer 组件的props属性，即 props.render

    const component = children || render;
    return useObserver(component)
}

export { ObserverComponent as Observer }