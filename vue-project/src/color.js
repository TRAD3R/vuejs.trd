export default {
    /*
    el - элемент, к которому привязывается директива
    bandings (readonly) - свойства директивы
    vnode (readonly) - виртуальное дерево, где хранится директива
     */
    bind(el, bindings, vnode){
        el.style.color = 'green';
    }
}