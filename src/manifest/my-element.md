# my-element

## Properties

| Property  | Attribute | Type                                   | Default                    | Description                             |
|-----------|-----------|----------------------------------------|----------------------------|-----------------------------------------|
| `color`   | `color`   | `"blue" \| "red" \| "green" \| "gray"` | "blue"                     | Цвет элемента (тип из массива as const) |
| `config`  | `config`  | `{ enabled: boolean; level: number; }` | {"enabled":true,"level":1} | Конфигурация элемента (объект)          |
| `size`    | `size`    | `ElementSizeEnum`                      | "medium"                   | Размер элемента (используется enum)     |
| `tags`    | `tags`    | `string[]`                             | []                         | Список тегов (массив строк)             |
| `variant` | `variant` | `ElementVariantType`                   | "primary"                  | Вариант кнопки (простой union тип)      |
