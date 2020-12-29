import { Reaction } from 'mobx';
import { Component } from 'react';

export function makeClassComponentObserver(componentClass) {
    const target = componentClass.prototype;
    const baseRender = target.render;

    target.render = function() {
        return makeComponentReactive.call(this, baseRender);
    }

    return componentClass;
}

function makeComponentReactive(render) {
    const baseRender = render.bind(this);
    this.render = reactiveRender;

    let isRenderingPending = false;
    const reaction = new Reaction(`${this.constructor.name}.render`, () => {
        if (!isRenderingPending) {
            isRenderingPending = true;
            Component.prototype.forceUpdate.call(this);
        }
    });

    function reactiveRender() {
        isRenderingPending = false;
        let rendering;
        reaction.track(() => {
            // rendering 存储的是 render 函数返回的结果
            rendering = baseRender();
        });

        return rendering;
    }

    return reactiveRender.call(this)
}