import { reactive as i, computed as l, openBlock as c, createElementBlock as s, normalizeClass as u, normalizeStyle as y, toDisplayString as m } from "vue";
const b = (t, o) => {
  const n = t.__vccOpts || t;
  for (const [e, r] of o)
    n[e] = r;
  return n;
}, d = {
  name: "my-button",
  props: {
    label: {
      type: String,
      required: !0
    },
    primary: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      validator: function(t) {
        return ["small", "medium", "large"].indexOf(t) !== -1;
      }
    },
    backgroundColor: {
      type: String
    }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    return t = i(t), {
      classes: l(() => ({
        "storybook-button": !0,
        "storybook-button--primary": t.primary,
        "storybook-button--secondary": !t.primary,
        [`storybook-button--${t.size || "medium"}`]: !0
      })),
      style: l(() => ({
        backgroundColor: t.backgroundColor
      })),
      onClick() {
        o("click");
      }
    };
  }
};
function k(t, o, n, e, r, g) {
  return c(), s("button", {
    type: "button",
    class: u(e.classes),
    onClick: o[0] || (o[0] = (...a) => e.onClick && e.onClick(...a)),
    style: y(e.style)
  }, m(n.label), 7);
}
const f = /* @__PURE__ */ b(d, [["render", k]]), C = {
  install(t) {
    t.component("MyButton", f);
  }
};
export {
  f as MyButton,
  C as default
};
