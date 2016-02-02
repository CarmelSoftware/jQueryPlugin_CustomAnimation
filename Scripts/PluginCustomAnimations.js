
///////////////////////////////////////////////////////////////////////////////////////////////////
/// jQuery Plugin to create custom animations
///     - support for a callback function     
///     - support for speed settings
/// 
/// You can send create an animation named "customAnimation" 
///     defined by the options : "params" 
/// customAnimation = the name of the custom animation 
/// params = the animation to be done , for example :  { 'opacity': 'toggle', 'height': 'toggle' }
////////////////////////////////////////////////////////////////////////////////////////////////////

_.fn.createCustomAnimation = function (customAnimation, params)
{

    var _this = _(this);

    _.fn[customAnimation] = function (speed, callback)
    {
        return this.animate(
            params,
            speed,
            _.isFunction(callback) && _.proxy(callback, this)
            );
    };

    return _this;
};



