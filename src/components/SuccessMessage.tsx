import { Dispatch, SetStateAction } from "react";
import { IconSuccess } from "../icons/IconSuccess";
import { DescriptionTextModal } from "./DescriptionText";
import { Title } from "./Title";

interface Props{
  onModal: Dispatch<SetStateAction<boolean>>
}

export const SuccessMessage = ({onModal}: Props) => {
  return (
    <div className="flex items-center justify-center absolute left-0 bottom-0 top-0 right-0 mx-auto ">
      <div
        className="bg-gray-100 border border-spacing-1 border-black-300 w-full h-full md:rounded-xl px-8 py-7  gap-5 md:w-400 md:h-400 flex flex-col justify-evenly"
      >
        <div className="flex flex-col gap-5">
          <IconSuccess />
          <Title>Thank for subscribing!</Title>
          <DescriptionTextModal>
            A confirmation email has been sent to{" "}
            <span className="font-bold">ash@loremcompany.com</span>. Please open it and click the button
            inside to confirm your subscription.
          </DescriptionTextModal>
        </div>
        <button className="text-lime-50 p-3 hover:bg-orange-600 transition-colors rounded-md font-semibold mb-5 bg-gray-700 cursor-pointer" onClick={() => onModal(false)}>Dismiss message</button>
      </div>
    </div>
  );
};
