import { useState } from "react";

export default function Card({name}) {
  const [isOpen, setIsOpen] = useState(false);

  //   const currentTime = new Date().toLocaleTimeString();
  function currentTime() {
    const date = new Date();
    const showTime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return showTime;
  }

  function currentDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className="w-4/5 h-fit p-8 my-8 bg-gray-300 rounded-3xl shadow-2xl cursor-pointer"
      onClick={handleToggle}
    >
      <div
        className={`flex items-center justify-between h-fit p-5 my-2  ${
          isOpen ? "border-b-2 border-b-gray-700" : ""
        }`}
      >
        <h1 className="font-bold animate-pulse">
          <span>{currentTime()}</span> | <span>{currentDate()}</span>
        </h1>
        <h1 className="font-bold animate-pulse">{name} | {isOpen ? "-" : "+"}</h1>
      </div>

      {isOpen && (
        <div>
          <p className="block text-center italic">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            quibusdam placeat error facere maiores, maxime dolorem adipisci
            animi rem dolorum recusandae nemo reprehenderit molestias aut
            aliquam, numquam corporis vero dicta, blanditiis voluptates eum
            debitis omnis non veniam? Unde ipsam quam quis nulla, eum dolorem
            fugiat laboriosam voluptatibus? Accusantium minima fugiat ab ea
            sequi laudantium repellat officiis unde cum quo consequuntur tempore
            provident ex, tempora soluta praesentium! Autem, explicabo.
            Temporibus repellendus inventore minima iusto tempora dolorem
            eveniet voluptate similique corrupti illo quam fugit a eligendi
            officia voluptatibus at, molestias ipsam repudiandae? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Sed quibusdam placeat
            error facere maiores, maxime dolorem adipisci animi rem dolorum
            recusandae nemo reprehenderit molestias aut aliquam, numquam
            corporis vero dicta, blanditiis voluptates eum debitis omnis non
            veniam? Unde ipsam quam quis nulla, eum dolorem fugiat laboriosam
            voluptatibus? Accusantium minima fugiat ab ea sequi laudantium
            repellat officiis unde cum quo consequuntur tempore provident ex,
            tempora soluta praesentium! Autem, explicabo. Temporibus repellendus
            inventore minima iusto tempora dolorem eveniet voluptate similique
            corrupti illo quam fugit a eligendi officia voluptatibus at,
            molestias ipsam repudiandae? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Sed quibusdam placeat error facere maiores, maxime
            dolorem adipisci animi rem dolorum recusandae nemo reprehenderit
            molestias aut aliquam, numquam corporis vero dicta, blanditiis
            voluptates eum debitis omnis non veniam? Unde ipsam quam quis nulla,
            eum dolorem fugiat laboriosam voluptatibus? Accusantium minima
            fugiat ab ea sequi laudantium repellat officiis unde cum quo
            consequuntur tempore provident ex, tempora soluta praesentium!
            Autem, explicabo. Temporibus repellendus inventore minima iusto
            tempora dolorem eveniet voluptate similique corrupti illo quam fugit
            a eligendi officia voluptatibus at, molestias ipsam repudiandae?
          </p>
        </div>
      )}
    </div>
  );
}
