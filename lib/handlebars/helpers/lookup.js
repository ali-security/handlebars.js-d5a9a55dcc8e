export const dangerousPropertyRegex = /^(constructor|__defineGetter__|__defineSetter__|__lookupGetter__|__lookupSetter__|__proto__)$/;

export default function(instance) {
  instance.registerHelper('lookup', function(obj, field, options) {
    if (!obj) {
      return obj;
    }
    // A call with a single argument, e.g. `{{lookup "x"}}`, passes the options
    // object where `field` should be and leaves `options` undefined.
    if (!options) {
      return undefined;
    }
    return options.lookupProperty(obj, field);
  });
}
