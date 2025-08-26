import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "../buttons/button";
import Input from "../inputs/input ";
import Heading from "./heading";
import Paragraph from "./paragraph";

const ContactFrom = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 text-black rounded-xl border">
      <Card className="border bg-white">
        <CardContent className="grid gap-6">
          <Heading text="Остались вопросы?" />
          <Paragraph
            className="text-xs"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer."
          />
          <div className="grid gap-3">
            <Input
              className="flex border-none bg-[#4762FF14]"
              placeholder="Имя"
            />
          </div>
          <div className="grid gap-3">
            <Input
              className="flex border-none bg-[#4762FF14]"
              placeholder="Номер телефона"
            />
          </div>
          <Button text="Отправить" className="flex w-full" />
        </CardContent>
      </Card>
    </div>
  );
};
export default ContactFrom;
