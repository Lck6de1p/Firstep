export const config = {
  baseConfig: {
    title: "基础配置",
    content: {
      input: {
        label: "标题",
        type: 'input',
        value: "",
        props: {},
        rules: {
          required: true,
          message: "请输入标题"
        },
      },
      input2: {
        label: "标题2",
        type: 'input',
        value: "",
        props: {},
        rules: [{
          required: true,
          message: "请输入标题2"
        }],
      },
      select: {
        label: "搜索",
        type: 'select',
        value: "",
        props: {
          options: [
            { value: 'lckTest1', label: 'lckLabel1' },
            { value: 'lckTest2', label: 'lckLabel2' },
            { value: 'lckTest3', label: 'lckLabel3' },
            { value: 'lckTest4', label: 'lckLabel4' },
          ]
        },
        rules: {},
      },
      checkbox: {
        label: "checkbox",
        type: 'checkbox',
        value: [],
        props: {
          options: [
            { value: 'lckTest1', label: 'lckLabel1' },
            { value: 'lckTest2', label: 'lckLabel2' },
            { value: 'lckTest3', label: 'lckLabel3' },
            { value: 'lckTest4', label: 'lckLabel4' },
          ]
        },
        rules: {},
      },
    },
  },
  playConfig: {
    title: "玩法配置",
    content: {},
  },
  homeConfig: {
    title: "界面配置",
    content: {},
  },
};
