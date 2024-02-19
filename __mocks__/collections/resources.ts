export type Resources = {
  _id: number;
  id: number;
  name: string;
  active: number;
  image: string;
}

export default [
  {
    _id: 1,
    id: 1,
    name: "shoe",
    active: 1,
    image: "shoe.jpg",
  },
  {
    _id: 2,
    id: 2,
    name: "shoe2",
    active: 1,
    image: "shoe2.jpg",
  },
] as Resources[];