import HOST_URL from "../../constants/url";
import { getURL } from "../urlHelper";

test("get url", () => {
  expect(getURL("/api/v1/users")).toBe(`${HOST_URL}/api/v1/users`);
});
