import { describe, it } from "node:test";
import { Category, TCategoryN, flattenCategories } from "./flatter.js";
import assert from "node:assert";

const testData: TCategoryN[] = [
  {
    id: "Level_1_Category_No8",
    spm: "cate",
    label: "Women's Fashion",
    subcategories: [
      {
        spm: "cate_1",
        id: "be430cb3-f14d-4851-a097-dc5f191eaa04",
        label: "Clothing",
        subcategories: [
          {
            spm: "cate_1_1",
            id: "3058ab29-535f-4b3b-bdb1-c4446e142555",
            href: "https://www.daraz.com.np/tops/",
            image: {
              src: "https://img.alicdn.com/tfs/TB1KcTbcOrpK1RjSZFhXXXSdXXa-240-240.jpg",
              alt: "Tops & T-shirts",
            },
            label: "Tops & T-shirts",
          },
          {
            spm: "cate_1_1",
            id: "9d0bb4dc-f07f-492a-90c1-b2eb46b6e473",
            href: "https://www.daraz.com.np/womens-hoodies-sweatshirts/",
            image: {
              src: "https://img.alicdn.com/tfs/TB1PGy9cSzqK1RjSZPcXXbTepXa-240-240.jpg",
              alt: "Hoodies & Sweatshirts",
            },
            label: "Hoodies & Sweatshirts",
          },
        ],
        href: "https://www.daraz.com.np/womens-clothing/",
      },
      {
        spm: "cate_1",
        id: "50d91695-168e-4903-8571-03ef80b1e226",
        label: "Traditional Clothing",
        subcategories: [
          {
            spm: "cate_1_2",
            id: "dd721618-9b99-4209-85ed-eefa5ed993f2",
            href: "https://www.daraz.com.np/womens-party-wear/",
            image: {
              src: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1rMmjpRLoK1RjSZFuXXXn0XXa.jpg",
              alt: "Lehenga",
            },
            label: "Lehenga",
          },
          {
            spm: "cate_1_2",
            id: "f8082c14-45e4-44ed-847b-2e2956aace47",
            href: "https://www.daraz.com.np/womens-lawn/",
            image: {
              src: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1SNSypNYaK1RjSZFnXXa80pXa.jpg",
              alt: "Unstitched Fabric",
            },
            label: "Unstitched Fabric",
          },
        ],
        href: "https://www.daraz.com.np/womens-traditional-clothing/",
      },
    ],
  },
];

const expectedData: Category[] = [
  {
    id: "Level_1_Category_No8",
    spm: "cate",
    label: "Women's Fashion",
  },
  {
    spm: "cate_1",
    id: "be430cb3-f14d-4851-a097-dc5f191eaa04",
    label: "Clothing",
    href: "https://www.daraz.com.np/womens-clothing/",
  },
  {
    spm: "cate_1_1",
    id: "3058ab29-535f-4b3b-bdb1-c4446e142555",
    href: "https://www.daraz.com.np/tops/",
    image: {
      src: "https://img.alicdn.com/tfs/TB1KcTbcOrpK1RjSZFhXXXSdXXa-240-240.jpg",
      alt: "Tops & T-shirts",
    },
    label: "Tops & T-shirts",
  },
  {
    spm: "cate_1_1",
    id: "9d0bb4dc-f07f-492a-90c1-b2eb46b6e473",
    href: "https://www.daraz.com.np/womens-hoodies-sweatshirts/",
    image: {
      src: "https://img.alicdn.com/tfs/TB1PGy9cSzqK1RjSZPcXXbTepXa-240-240.jpg",
      alt: "Hoodies & Sweatshirts",
    },
    label: "Hoodies & Sweatshirts",
  },
  {
    spm: "cate_1",
    id: "50d91695-168e-4903-8571-03ef80b1e226",
    label: "Traditional Clothing",
    href: "https://www.daraz.com.np/womens-traditional-clothing/",
  },
  {
    spm: "cate_1_2",
    id: "dd721618-9b99-4209-85ed-eefa5ed993f2",
    href: "https://www.daraz.com.np/womens-party-wear/",
    image: {
      src: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1rMmjpRLoK1RjSZFuXXXn0XXa.jpg",
      alt: "Lehenga",
    },
    label: "Lehenga",
  },
  {
    spm: "cate_1_2",
    id: "f8082c14-45e4-44ed-847b-2e2956aace47",
    href: "https://www.daraz.com.np/womens-lawn/",
    image: {
      src: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1SNSypNYaK1RjSZFnXXa80pXa.jpg",
      alt: "Unstitched Fabric",
    },
    label: "Unstitched Fabric",
  },
];

describe("Check if the flattern category works properly or not", () => {
  it("simply assets correct for input and out", () => {
    const flattened = flattenCategories(testData);
    assert.deepEqual(flattened, expectedData);
  });
});
