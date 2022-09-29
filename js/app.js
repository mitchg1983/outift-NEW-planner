const clothing = [
  {
    description: "Michael Kors Blue Dress Shirt",
    type: "top",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19226370_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Calvin Klein Steel Gray Dress Shirt",
    type: "top",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/19714862_fpx.tif?bgc=255,255,255&wid=400&qlt=90,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=webp",
  },
  {
    description: "Michael Kors Pink Dress Shirt",
    type: "top",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/21014523_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  },
  {
    description: "Michael Kors White Dress Shirt",
    type: "top",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/10468918_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Alfani Short Sleeve Shirt",
    type: "top",
    dressCode: "casual",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/20929261_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Tommy Hilfiger white Short Sleeve Shirt",
    type: "top",
    dressCode: "casual",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8789631_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Wrangler Graphic T-shirt",
    type: "top",
    dressCode: "sport",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/21436348_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Adidas red T-shirt",
    type: "top",
    dressCode: "sport",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/13336822_fpx.tif?$thumb$&wid=376",
  },
  {
    description: "Nike Giannis Basketball Sneakers",
    type: "shoes",
    dressCode: "sport",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/21824750_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  },
  {
    description: "Adidas High Top Sneakers",
    type: "shoes",
    dressCode: "sport",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/18588060_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  },
  {
    description: "Sperry Brown Shoes",
    type: "shoes",
    dressCode: "casual",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/524862_fpx.tif?$thumb$&wid=376",
  },
  {
    description: "Sperry Blue Shoes",
    type: "shoes",
    dressCode: "casual",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/21650286_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  },
  {
    description: "Casual White Pants",
    type: "bottom",
    dressCode: "casual",
    imageUrl:
      "https://n.nordstrommedia.com/id/sr3/0e7486a9-93bb-47d9-947c-5a4052ff4157.jpeg?h=365&w=240&dpr=2",
  },
  {
    description: "Dress Blue Pants",
    type: "bottom",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8353081_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp",
  },
  {
    description: "Slim Fit Stretch Khaki Pants",
    type: "bottom",
    dressCode: "casual",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/10067433_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
  },
  {
    description: "Brown Dress Pants",
    type: "bottom",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/10067390_fpx.tif?$thumb$&wid=376",
  },
  {
    description: "Black Dress Pants",
    type: "bottom",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/11786133_fpx.tif?$browse$&wid=376&fmt=webp",
  },
  {
    description: "Adidas Track Pants",
    type: "bottom",
    dressCode: "sport",
    imageUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d80911fe0e24f8eb67fac3800e8bee0_9366/Tiro_21_Sweat_Pants_Black_GM7336_21_model.jpg",
  },
  {
    description: "Adidas Jogger Pants",
    type: "bottom",
    dressCode: "sport",
    imageUrl:
      "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f5bf3559e3514ebc8afeac840145abf8_9366/tiro-21-sweat-pants.jpg",
  },
  {
    description: "Brown formal shoes",
    type: "shoes",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/3/optimized/9199563_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
  },
  {
    description: "Black formal shoes",
    type: "shoes",
    dressCode: "formal",
    imageUrl:
      "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/3717082_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
  },
];

//Tracked Variables
let day = "5";
let dayName;

//Button Functions
function dayClick() {
  let selectedDay = document.querySelector("#daySelector");

  day = selectedDay.value;

  switch (day) {
    case "0":
      dayName = "Sunday";
      break;
    case "1":
      dayName = "Monday";
      break;
    case "2":
      dayName = "Tuesday";
      break;
    case "3":
      dayName = "Wednesday";
      break;
    case "4":
      dayName = "Thursday";
      break;
    case "5":
      dayName = "Friday";
      break;
    case "6":
      dayName = "Saturday";
      break;
    default:
      dayName = "FLURSDAY??";
  }

  let displayDay = document.querySelector("#currentDayOutput");
  displayDay.innerText = "The current day is..." + dayName;
}

function refreshClick() {
  let outfitTop = document.querySelector("#outfitTop");
  let outfitBottom = document.querySelector("#outfitBottom");
  let outfitShoes = document.querySelector("#outfitShoes");
  let myTops = getClothesByType("top");
  let myBottoms = getClothesByType("bottom");
  let myShoes = getClothesByType("shoes");

  function getRandomItem(type, list) {
    const filteredClothes = list.filter((e) => {
      return e.dressCode === type;
    });
    const totalClothes = filteredClothes.length;
    const numRoll = Math.floor(Math.random() * totalClothes);
    console.log("Returning this clothing item...", filteredClothes[numRoll]);
    return filteredClothes[numRoll];
  }
  switch (day) {
    case "0":
      const casualTop = getRandomItem("casual", myTops);
      outfitTop.innerHTML = `<img src="${casualTop.imageUrl}">`;
      const casualBottom = getRandomItem("casual", myBottoms);
      outfitBottom.innerHTML = `<img src="${casualBottom.imageUrl}">`;
      const casualShoes = getRandomItem("casual", myShoes);
      outfitShoes.innerHTML = `<img src="${casualShoes.imageUrl}">`;
      break;
    case "6":
      const sportTop = getRandomItem("sport", myTops);
      outfitTop.innerHTML = `<img src="${sportTop.imageUrl}">`;
      const sportBottom = getRandomItem("sport", myBottoms);
      outfitBottom.innerHTML = `<img src="${sportBottom.imageUrl}">`;
      const sportShoes = getRandomItem("sport", myShoes);
      outfitShoes.innerHTML = `<img src="${sportShoes.imageUrl}">`;
      break;
    default:
      const formalTop = getRandomItem("formal", myTops);
      outfitTop.innerHTML = `<img src="${formalTop.imageUrl}">`;
      const formalBottom = getRandomItem("formal", myBottoms);
      outfitBottom.innerHTML = `<img src="${formalBottom.imageUrl}">`;
      const formalShoes = getRandomItem("formal", myShoes);
      outfitShoes.innerHTML = `<img src="${formalShoes.imageUrl}">`;
      break;
  }
}

const getClothesByType = (userType) => {
  //   console.log("Starting getClothes, looking for...", userType);
  const foundTypes = clothing.reduce((acc, current) => {
    if (current.type === userType) {
      acc.push(current);
    }
    return acc;
  }, []);
  return foundTypes;
};
