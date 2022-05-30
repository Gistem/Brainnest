# CSS

---

### 1. What are the main differences between external, internal, and inline CSS?

- External uses an external css file
- Internal it's written inside the <b>style</b> tag, in the <b>style</b> section
- Inline CSS it's added using the style attibute in the HTML elements

### 2. What is the syntax for class and ID selectors?

- For classes "."
- For ID "#"

### 3. How would you apply a single rule to two different selectors?

Depending on which selector, grouping or chaining them ex:

`p, h1, h2, .class1, .class2, #id1, #id2 { }`

`.class1.class2#id1#id2 { }`

### 4. Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?

`.title#primary { color: red; }`

### 5. What does the descendant combinator do?

Give us the posibility to style the components with the same ancestor

### 6. Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?

Assuming bot are for applying rules to the same element, the rule that uses three types of selectors.

```
<ul>
    <li>
        <p class=text> Lorem </p>
    </li>
<ul>

<p class=text> Lorem </p>
```

In this case if you only use the class, both `p` would be styled but if you use `ul li .text {}` you'll be applying the rule only into the first `p`

### 7. From inside to outside, what is the order of box-model properties?

1 - Content (width, height)
2 - Padding
3 - Border
4 - Margin

### 8. What does the box-sizing CSS property do?

Allows us to include the border and padding in the total width and height

### 9. What is the difference between the standard and alternative box model?

In the <b>standard</b> box model don't use the box-sizing property. The width and height of the box will be equal to = content width & hight + paddings + borders + margins

In the <b>alternative</b> box model, the box-sizing property is used so when you define the width or height attribute it will determine the size of the box

### 10. Would you use margin or padding to create more space between 2 elements?

Margin

### 11. Would you use margin or padding to create more space between the contents of an element and its border?

Padding

### 12. Would you use margin or padding if you wanted two elements to overlap each other?

Margin. Negative margin can be used

### 13. What is the difference between a block element and an inline element?

Block elements always starts on a new line, like width 100%

Inline elements only takes up as much width as necessary

### 14. What is the difference between an inline element and an inline-block element?

In an inline element the box size cant be modified by properties

In an inline-bleck element you can modify the box size

### 15. Is an h1 block or inline?

inline

### 16. Is button block or inline?

inline

### 17. Is div block or inline?

block

### 18. Is span block or inline?

inline

### 19. What’s the difference between a flex container and a flex item?

The flex items are direct childs of a flex container.

Flex container properties:

- flex-direction
- flex-wrap
- flex-flow (first value will set flex-direction & the second one the flex wrap)
- justify-content
- align-items

Flex items properties:

- flex-grow
- flex-shrink
- flex-basis
- flex (first value will set flex-grow, second one the flex-shrink & the 3rd one the flex-basis)

### 20. How do you create a flex item?

Making his parent display: flex

### 21. What are the 3 values defined in the shorthand flex property?

- flex-grow
- flex-shrink
- flex-basis

### 22. How do you make flex items arrange themselves vertically instead of horizontally?

Setting flex-direcction: column in the flex container

### 23. What is the difference between justify-content and align-items?

Justify-content set horizontal alignment/spacing if flex direction is row or vertical if it's column

Align-items set vertical alignment if flex-direction is row or horizontal if it's column

### 24. How do you use flexbox to completely center a div inside a flex container?

```
.flex-container { display: flex; justify-content: center; align-items: center; }
```

### 25. What’s the difference between justify-content: space-between and justify-content: space-around?

- <b>space-between:</b> items are evenly distryibuted in the line but the first item is on the start line & the las item on the end line
- <b>space-around</b> items are evenly distributed in the line with equal space around them

<b>d=====(￣ ▽ ￣\*)b</b>
