import React from "react";
import { useDrag, useDrop } from "react-dnd";

const ImageCard = ({ image, onDrop }) => {
  const tags = image.tags.split(",");
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { image },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => onDrop(item.image), // Handles the drop event
  }));

  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${
        isDragging ? "opacity-50" : "" // Reduce opacity when dragging
      }`}
    >
      <div className="relative pb-3/4" ref={(node) => drag(drop(node))}>
        <img
          src={image.webformatURL}
          alt="image name"
          style={{
            border: isDragging ? "5px solid black" : "0px",
          }}
          className="w-[350px] h-[150px] sm:w-[250px] sm:h-[150px] lg:w-[500px] xl:h-[400px] object-cover"
        />
      </div>
      <div className="px-6 py-4 hidden md:block">
        <div className="font-bold text-blue-800 text-xl mb-2 ">
          Photo by {image.user ?? null}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views ?? null}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads ?? null}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes ?? null}
          </li>
        </ul>
      </div>
      <div className="grid gap-1 pt-2 pb-2 pl-2 sm:flex sm:flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-700 rounded-full px-2 py-1 text-[6px] font-semibold text-green-300 mr-1 mb-2 sm:text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
