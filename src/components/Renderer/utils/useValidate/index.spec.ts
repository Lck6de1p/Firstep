// import { test, expect } from "@playwright/experimental-ct-vue";
import { test, describe, expect } from "vitest";
import { ref } from "vue";
import { SubProps } from "../../types";
import { useValidate } from "./index";

const config: SubProps = {
  label: "标题2",
  type: "input",
  value: "",
  props: {},
  rules: [
    {
      required: true,
      message: "请输入标题",
    },
    {
      pattern: new RegExp("^[0-9]*$"),
      "message": "请填写整数"
    },
  ],
};
describe("useValidate", () => {
  test("isRequired", async () => {
    const formData = ref({});
    const { validate, errorMsg, isRequired } = await useValidate(
      config,
      "123123",
      formData
    );
    expect(validate()).toBe(true);
    expect(isRequired).toBe(true);
  });

  test("validate success", () => {
    const formData = ref({});
    const { validate, errorMsg } = useValidate(config, "123123", formData);
    expect(validate()).toBe(true);
    expect(errorMsg.value).toBe("");
  });

  test("validate required fail", () => {
    const formData = ref({});
    const { validate, errorMsg } = useValidate(config, "", formData);
    expect(validate()).toBe(false);
    expect(errorMsg.value).toBe("请输入标题");
  });

  test("validate pattern success", () => {
    const formData = ref({});
    const { validate, errorMsg } = useValidate(config, "12", formData);
    expect(validate()).toBe(true);
    expect(errorMsg.value).toBe("");
  });

  test("validate pattern fail", () => {
    const formData = ref({});
    const { validate, errorMsg } = useValidate(config, "aaa", formData);
    expect(validate()).toBe(false);
    expect(errorMsg.value).toBe("请填写整数");
  });
});
