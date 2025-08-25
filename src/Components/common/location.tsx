import React from "react";
import Heading from "./heading";
import Paragraph from "./paragraph";

const Location = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Text Section */}
      <div className="flex flex-col gap-y-4 pl-4 pr-4 sm:pl-7 sm:pr-4 md:pl-12 md:pr-4 xl:pl-24 xl:pr-4 justify-center py-9 md:py-0 bg-[#F4F4F4]">
        <Heading className="md:text-5xl" text="Где мы?" />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer sdvdsvds  consectetur adipiscing elit."
        />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer  consectetur adipiscing elit."
        />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer  consectetur adipiscing elit."
        />
      </div>
      {/* Map Section */}
      <div className="flex w-full h-80">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14469.956193830852!2d66.99664346461297!3d24.94947055128286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36ae71fc40a31%3A0xcfbb1d61e6ab566d!2sOrangi%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1736282756099!5m2!1sen!2s"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
