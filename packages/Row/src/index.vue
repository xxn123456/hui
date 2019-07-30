<script>
export default {
  name: "HRow",
  componentName: "HRow",
  provide() {
    return { HRow: this }
  },
  props: {
    tag: { type: String, default: "div" },
    gutter: Number,
    type: String,
    justify: { type: String, default: "start" },
    align: { type: String, default: "top" }
  },
  computed: {
    style() {
      const css = {};
      if (this.gutter) {
        css.marginLeft = `-${this.gutter / 2}px`;
        css.marginRight = css.marginLeft;
      }
      return css;
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: [
          "h-row",
          this.justify !== "start" ? `h-row--justify-${this.justify}` : "",
          this.align !== "top" ? `h-row--align-${this.align}` : "",
          { "h-row--flex": this.type === "flex" }
        ],
        style: this.style
      },
      this.$slots.default
    );
  }
};
</script>

<style lang="scss" scoped>
.h-row {
  position: relative;
  box-sizing: border-box;

  &::before,
  &::after {
    display: table;
    content: "";
  }

  &::after {
    clear: both;
  }
}

.h-row--flex {
  display: flex;

  &:before,
  &:after {
    display: none;
  }
}

.h-row--justify-start {
  justify-content: flex-start;
}

.h-row--justify-center {
  justify-content: center;
}

.h-row--justify-end {
  justify-content: flex-end;
}

.h-row--justify-end {
  justify-content: flex-end;
}

.h-row--justify-space-between {
  justify-content: space-between;
}

.h-row--justify-space-around {
  justify-content: space-around;
}

.h-row--align-top {
  align-items: flex-start;
}

.h-row--align-middle {
  align-items: center;
}

.h-row--align-bottom {
  align-items: flex-end;
}
</style>
