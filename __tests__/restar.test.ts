// restar.test.ts

import { restar } from "../src/restar";

describe("restar", () => {
    it("debería restar dos números correctamente", () => {
        expect(restar(2, 2)).toBe(0);
    });
});
