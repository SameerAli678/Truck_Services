import { serviceCardT } from "@/types/common/service-card-type";
import carChors from "@/../public/images/carChors.png";
import oil from "@/../public/images/oil.png";
import Speaker from "@/../public/images/Speaker.png";
import car from "@/../public/images/car.png";

export const ServicesCardData: serviceCardT[] = [
  {
    heading: "Б/у запчасти для грузовых авто из Европы",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: carChors.src,
  },
  {
    heading: "Автомойка грузовых и легковых авто",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: car.src,
  },
  {
    heading: "Магазин аксессуаров",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: Speaker.src,
  },
  {
    heading: "Пункт замены масла легковых авто",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: oil.src,
  },
];
