hmm
what sort of schema do i want?
should i link? or embed?
what can i link and what can i embed?

first let's focus on head section's categories

```javascript
type TLevelOne = {
  id: string,
  label: string,
  subcategories: TLevelTwo[],
};

type TLevelTwo = {
  id: string,
  label: string,
  href: string,
  subcategories: TLevelThree[],
};

type TLevelThree = {
  id: string,
  label: string,
  href: string,
  image: {
    src: string,
    alt: string,
  },
};

type Categories = TLevelOne;
```

we have data like this fron end right?
hmm
we have to save website name and have categories for it?

```javascript
{
    website: 'daraz',
    categories: [],

    products: [],
}

or we can do maybe
{
    categories: [{...props, site: 'daraz'}]
    products: [{...props, site: 'daraz'}]
}

I will go with second method
- that way i can just query data irrespective of which website they belong to
- and check for website name if i need to

so we need schema for
- category
    - name
    - other stuffs
- product
    - name
    - category
    - price
    - others...
- comment
    - content
    - user
    - product
    - others...

even if we scrap multiple website we can somehow expect or make it into same schema? and website will be the differentiator?

do I denormalize categories of daraz?
hmm i will start with nested structure lol
let's make it work and we can refactor it later (:p)
```

---
