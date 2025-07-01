
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    img: "/1.webp",
  },
  {
    img: "/2.webp",
  },
  {
    img: "/3.webp",
  },
  {
    img: "/4.webp",
  },
  {
    img: "/5.webp",
  },
  {
    img: "/6.webp",
  },
  {
    img: "/7.webp",
  },
  {
    img: "/8.webp",
  },
  {
    img: "/europe.webp",
  },
  {
    img: "/final-affiliate.webp",
  },
  {
    img: "/free.webp",
  },
  {
    img: "/icpa.webp",
  },
];

const firstRow = reviews.slice(0, reviews.length);

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <div className="flex flex-row w-full items-center overflow-hidden  gap-5">
      <img
        className="item-center justify-center "
        width="85"
        height="55"
        alt="winner"
        src={img}
      />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:50s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
