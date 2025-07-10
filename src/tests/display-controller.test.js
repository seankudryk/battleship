import { stopIt } from "../modules/display-controller.js"

test("jesus christ, stop throwing errors bro", () => {
    expect(stopIt()).not.toBeNull();
});