import {it, describe, expect} from "@jest/globals";
import {shuffle} from "./helper-component";


describe("Тестируем функцию перемешивания массива", () => {
    it("Проверяем, что количество элементов не изменилось", () => {
        const userArray = ["item1", "item2", "item3", "item4"];
        const expected = userArray.length;
        // Действие
        const nArray = shuffle(userArray);
        // Сверяем
        expect(nArray).toHaveLength(expected);
    });

    it("Проверяем, что элементы те-же самые, что и в исходном массиве", () => {
        // Подготовка
        const userArray = ["item1", "item2", "item3", "item4", "item5"];
        // Действие
        const nArray = shuffle(userArray);
        // Сверяем
        expect(nArray).toEqual(expect.arrayContaining(userArray));
    });
});