# Pluralization with i18next library

i18next library allows us to handle different plural forms within translation sentences.

### English example:

In English language we just have two forms, one singular and one plural form so we have these two cases:

-   1 user is selected
-   0/ 10 users are selected

We are handling this using _interpolation_ + _plurals_ features.

To be set up correctly we need to use the **count** variable for interpolation. And if you want to handle plural form you need to append **\_plural** suffix to the same key.

In the snippet below it is showed how to define these keys inside appropriate _en.json_ file.

```json
    "number-of-selected-users": "{{count}} user is selected", // with this record count with value 1 will be matched
    "number-of-selected-users_plural": "{{count}} users are selected", // with this record count with any other value will be matched
```

To use this in code you just need to provide root key with value for count:

```js
t(‘number-of-selected-users’, { count: 5 })
```

### Croatian/ Serbian example:

When we need to handle translation in languages with different plural forms, depending on the number of elements to which it refers we have three cases to cover:

-   odabran je 1/21 korisnik
-   odabrana su 2 korisnika
-   odabrano je 5 korisnika

So this particular example is handled in snippet below:

```json
    "number-of-selected-users_0": "Odabran je {{count}} korisnik",
    "number-of-selected-users_1": "Odabrana su {{count}} korisnika",
    "number-of-selected-users_2": "Odabrano je {{count}} korisnika",
```

where _\_0_, _\_1_, _\_2_ ara defined suffixes which i18next understands, by mapping them to appropriate values behind the scenes.

In this example for **hr** language defined key suffix will be matched by provided count value using the table below:

```
key_0: 1, 21, 31, 41, 51, 61, 71, 81, 91
key_1: 2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54, 62, 63, 64, 72, 73, 74, 82, 83, 84, 92, 93, 94
key_2: 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59, 60, 65, 66, 67, 68, 69, 70, 75, 76, 77, 78, 79, 80, 85, 86, 87, 88, 89, 90, 95, 96, 97, 98, 99, 100
```

> For this example, and every other language which has special cases for plural forms, there is a javascript code snippet you can access to get similar table and check how to handle a particular language https://jsfiddle.net/sm9wgLze.
