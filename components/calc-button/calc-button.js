Component({
  properties: {
    id: {
      type: String,
      value: ""
    },
    // 按钮大小
    // normal | large
    size: {
      type: String,
      value: "normal"
    },
    // 背景颜色
    background: {
      type: String,
      value: "#333"
    },
    // 字体颜色
    color: {
      type: String,
      value: "#fff"
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    onTap: function(e) {
      this.triggerEvent("calctap", this.data.id);
    }
  }
});
