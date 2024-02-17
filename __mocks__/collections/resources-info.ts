export type ResourcesInfo =   {
  _id: number;
  id: number;
  title: string;
  url: string;
  description: string | null;
  image: string;
  resource_id: number;
};

export default [
  {
    _id: 1,
    id: 1,
    title: "What The Health",
    url: "https://www.whatthehealthfilm.com/",
    description: null,
    image: "/content/whatthehealth.jpg",
    resource_id: 1,
  },
  {
    _id: 2,
    id: 2,
    title: "What",
    url: "https://www.what.com/",
    description: null,
    image: "/content/what.jpg",
    resource_id: 2,
  },
] as ResourcesInfo[];