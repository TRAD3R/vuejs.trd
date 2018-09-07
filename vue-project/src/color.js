export default {
    /*
    el - элемент, к которому привязывается директива
    bandings (readonly) - свойства директивы
    vnode (readonly) - виртуальное дерево, где хранится директива
     */
    bind(el, bindings, vnode){
        const args = bindings.arg;
        el.style[args] = bindings.value;
    }
}