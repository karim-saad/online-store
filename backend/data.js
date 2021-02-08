import bcrypt from "bcrypt";

const data = {
  products: [
    {
      name: "Dog Tag",
      category: "Basic",
      image: "/images/p1.jpg",
      price: 15,
      rating: 5,
      numReviews: 10,
      description: "A simple silver dog tag with a chain necklace.",
      countInStock: 5,
    },
    {
      name: "Weird Gold Pendant",
      category: "Basic",
      image: "/images/p2.jpg",
      price: 15,
      rating: 4,
      numReviews: 20,
      description: "A very weird gold pendant on a gold necklace.",
      countInStock: 0,
    },
    {
      name: "Black Ring",
      category: "Basic",
      image: "/images/p3.jpg",
      price: 15,
      rating: 4.5,
      numReviews: 15,
      description: "A small black chain necklace with gold studs.",
      countInStock: 5,
    },
    {
      name: "Ornate Pendant",
      category: "Basic",
      image: "/images/p4.jpg",
      price: 15,
      rating: 3,
      numReviews: 12,
      description: "A cool pendant with diamond and gold.",
      countInStock: 5,
    },
    {
      name: "Silver Heart",
      category: "Basic",
      image: "/images/p5.jpg",
      price: 12,
      rating: 5,
      numReviews: 18,
      description: "A simple silver necklace and heart pendant.",
      countInStock: 5,
    },
    {
      name: "Double Heart",
      category: "Basic",
      image: "/images/p6.jpg",
      price: 20,
      rating: 0.5,
      numReviews: 25,
      description:
        "A cute concentric heart pendant with a simple silver chain.",
      countInStock: 5,
    },
  ],
  users: [
    {
      name: "Karim",
      email: "karimsaad47@gmail.com",
      password: bcrypt.hashSync("ilovecaro", 8),
      isAdmin: true,
    },
    {
      name: "Caroline",
      email: "xinqi82.xqs@gmail.com",
      password: bcrypt.hashSync("ilovekarim", 8),
      isAdmin: false,
    },
  ],
};

export default data;
