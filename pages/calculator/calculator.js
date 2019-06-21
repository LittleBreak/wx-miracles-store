Page({
  data: {
    // 按钮ID
    btnId: {
      "0": "0",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      equal: "equal",
      plus: "plus",
      minus: "minus",
      multiply: "multiply",
      divide: "divide",
      percent: "percent",
      opposite: "opposite",
      clear: "clear",
      dot: 'dot'
    },
    // 当前结果
    result: 0,
  },
  onCalcTap: function(event) {
    console.log(event);
  }
});
