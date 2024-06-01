// let's flatten the categories for effecient data storage

/*
 * [{
 *  id
 *  spm
 *  subcategories: [
 *    spm // cate
 *    id // id and _id
 *    label
 *    subcategories: [
 *      spm // cate_1
 *      id
 *      label
 *      subcategories: [
 *        {
 *          spm // cate_1_1
 *          id
 *          href
 *          image: {
 *            src
 *            alt
 *          }
 *          label
 *        }
 *      ]
 *    ]
 *  ]
 * }]
 *
 * lets change it into something like
 *
 *[{
 *  id
 *  spm = cate | cate_1 | cate_1_1
 *  id
 *  label
 *  image? = {
 *    src
 *    alt
 *  }
 * // we can link products later on schema?
 * }]
 *
 */
export type Category = {
  id: string;
  spm: string;
  label: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type TCategoryN = {
  subcategories?: TCategoryN[];
} & Category;

// we can recurse if object has `subCategories` propery
// if not then it will probably have image propery

export const flattenCategories = (categories: TCategoryN[]) => {
  return categories.reduce<Category[]>((acc, curr) => {
    const { subcategories, spm, id, label, href, image } = curr;

    const newCat: Category = {
      spm,
      id,
      label,
    };

    if (image) {
      newCat["image"] = image;
    }

    if (href) {
      newCat["href"] = href;
    }

    acc.push(newCat);

    if (subcategories) {
      const flattened: Category[] = flattenCategories(curr.subcategories || []);
      acc.push(...flattened);
    }

    return acc;
  }, []);
};
