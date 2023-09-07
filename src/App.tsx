import { useState } from "react";
import { DescriptionText } from "./components/DescriptionText";
import { FormEventAdress } from "./components/FormEventAdress";
import { ImageBackground } from "./components/ImageBackground";
import { Title } from "./components/Title";
import { IconList } from "./icons/IconCheck";
import { SuccessMessage } from "./components/SuccessMessage";

function App() {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="md:h-screen md:flex md:items-center">
      {modal ? (
        <SuccessMessage onModal={setModal}/>
      ) : (
        <main className="relative flex flex-col md:flex-row-reverse md:justify-between lg:w-3/4 xl:w-1/2 2xl:w-2/5 mx-auto gap-5 md:gap-3 bg-white md:p-5 md:rounded-3xl">
          <ImageBackground />
          <div className="p-4 md:p-0 flex flex-col gap-3 md:justify-center items-center md:w-2/4">
            <div className="flex flex-col gap-3 md:justify-center">
              <Title>Stay Updated!</Title>
              <DescriptionText>
                <span className="my-3">
                  Join 60,000+ product managers receiving monthly updates on:
                </span>
              </DescriptionText>
              <DescriptionText>
                <IconList />
                Product discovery and building what matters
              </DescriptionText>
              <DescriptionText>
                <IconList />
                Measuring to ensure updates are a success
              </DescriptionText>
              <DescriptionText>
                <IconList />
                And much more!
              </DescriptionText>
              <FormEventAdress onModal={setModal} />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
