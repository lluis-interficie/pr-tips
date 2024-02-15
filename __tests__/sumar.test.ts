// sumar.test.ts

import { sumar } from "../src/sumar";

describe("sumar", () => {
    it("debería sumar dos números correctamente", () => {
        expect(sumar(2, 2)).toBe(4);
    });
});
