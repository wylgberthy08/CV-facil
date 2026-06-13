const MODERN_COLOR_RE = /lab\s*\(|oklch\s*\(|oklab\s*\(|color-mix\s*\(/i;

function removeModernColors() {
  return {
    postcssPlugin: "remove-modern-colors",
    Once(root) {
      root.walkAtRules("supports", (atRule) => {
        if (MODERN_COLOR_RE.test(atRule.params)) {
          atRule.remove();
        }
      });
      root.walkDecls((decl) => {
        if (MODERN_COLOR_RE.test(decl.value)) {
          decl.remove();
        }
      });
    },
  };
}
removeModernColors.postcss = true;

export default removeModernColors;
