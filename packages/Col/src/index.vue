<script>
export default {
  name: "HCol",
  componentName: "HCol",
  inject: {
    AyuRow: { default: "" }
  },
  props: {
    span: { type: Number, default: 24 },
    tag: { type: String, default: "div" },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    gutter() {
      return this.AyuRow ? this.AyuRow.gutter : 0;
    }
  },
  render(h) {
    let classList = [];
    let style = {};
    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + "px";
      style.paddingRight = style.paddingLeft;
    }
    ["span", "offset", "pull", "push"].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== "span"
            ? `h-clo-${prop}-${this[prop]}`
            : `h-clo-${this[prop]}`
        );
      }
    });
    ["xs", "sm", "md", "lg", "xl"].forEach(size => {
      if (typeof this[size] === "number") {
        classList.push(`h-clo-${size}-${this[size]}`);
        return;
      }
      if (typeof this[size] === "object") {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== "span"
              ? `h-clo-${size}-${prop}-${props[prop]}`
              : `h-clo-${size}-${props[prop]}`
          );
        });
      }
    });
    return h(
      this.tag,
      {
        class: ["h-clo", classList],
        style
      },
      this.$slots.default
    );
  }
};
</script>

<style lang="scss" scoped>
[class*="h-clo-"] {
  float: left;
  box-sizing: border-box;
}

.h-clo-0 {
  display: none;
}

@for $i from 0 through 24 {
  .h-clo-#{$i} {
    width: (1 / 24 * $i * 100) * 1%;
  }

  .h-clo-offset-#{$i} {
    margin-left: (1 / 24 * $i * 100) * 1%;
  }

  .h-clo-pull-#{$i} {
    position: relative;
    right: (1 / 24 * $i * 100) * 1%;
  }

  .h-clo-push-#{$i} {
    position: relative;
    left: (1 / 24 * $i * 100) * 1%;
  }
}

@media only screen and (max-width: 768px) {
  @for $i from 0 through 24 {
    .h-clo-xs-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-offset-xs-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-pull-xs-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-push-xs-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .h-clo-sm-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-offset-sm-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-pull-sm-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-push-sm-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .h-clo-md-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-offset-md-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-pull-md-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-push-md-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .h-clo-lg-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-offset-lg-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-pull-lg-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-push-lg-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}

@media only screen and (min-width: 1920px) {
  @for $i from 0 through 24 {
    .h-clo-xl-#{$i} {
      width: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-offset-xl-#{$i} {
      margin-left: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-pull-xl-#{$i} {
      position: relative;
      right: (1 / 24 * $i * 100) * 1%;
    }

    .h-clo-push-xl-#{$i} {
      position: relative;
      left: (1 / 24 * $i * 100) * 1%;
    }
  }
}
</style>

