import { test, expect } from "@playwright/experimental-ct-vue";
import Counter from "./Counter.vue";
test("Counter Render", async ({ mount }) => {
  const component = await mount(<Counter initCount={0} />);
    await expect(component).toContainText("counter");
    await expect(component).toHaveScreenshot();
});

    test("Count Increase", async ({mount}) => {
  const component = await mount(<Counter initCount={1} />);
    await expect(component.getByTestId("count")).toContainText("1");
    await component.getByRole('button', {name: "increase" }).click();
    await expect(component.getByTestId("count")).toContainText("2");
    await component.getByRole('button', {name: "decrease" }).click();
    await expect(component.getByTestId("count")).toContainText("1");
});


    test("Count min", async ({mount}) => {
  const component = await mount(<Counter initCount={1} min={0} />);
    await expect(component.getByTestId("count")).toContainText("1");
    await component.getByRole('button', {name: "decrease" }).click();
    await expect(component.getByTestId("count")).toContainText("0");
    await component.getByRole('button', {name: "decrease" }).click();
    await expect(component.getByTestId("count")).toContainText("0");
});


    test("Count max", async ({mount}) => {
  const component = await mount(<Counter initCount={0} max={2} />);
    await expect(component.getByTestId("count")).toContainText("0");
    await component.getByRole('button', {name: "increase" }).click();
    await expect(component.getByTestId("count")).toContainText("1");
    await component.getByRole('button', {name: "increase" }).click();
    await expect(component.getByTestId("count")).toContainText("2");
    await component.getByRole('button', {name: "increase" }).click();
    await expect(component.getByTestId("count")).toContainText("2");
});