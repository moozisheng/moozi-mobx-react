import React, { useRef, useEffect } from 'react';
import { Reaction } from 'mobx';
import { useForceUpdate } from './utils';

const observerComponentNameFor = (baseComponentName) => `observer${baseComponentName}`;

export const useObserver = (fn, baseComponentName='observed', options={}) => {

    // 创建响应函数
    const wanteForceUpdateHook = options.useForceUpdate || useForceUpdate;
    const forceUpdate = wanteForceUpdateHook();

    // 组件有初次渲染和更新，需要对 reaction 做一个缓存
    const reactionTrackingRef = useRef(null);

    if (!reactionTrackingRef.current) {
        reactionTrackingRef.current = {
            reaction: new Reaction(
                observerComponentNameFor(baseComponentName),
                () => {
                    // 响应函数使用 forceUpdate
                    forceUpdate();
                }
            )
        }
    }

    const { reaction } = reactionTrackingRef.current;

    useEffect(() => {
        // 清理 reaction
        return () => {
            reactionTrackingRef.current.reaction.dispose();
            reactionTrackingRef.current = null;
        }
    }, [])
    
    let rendering;

    reaction.track(() => {
        rendering = fn();
    })
    
    return rendering;
}