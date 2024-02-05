const FeaturedCard = ({ image, content }) => {
  return (
    <section className="flex gap-4 border-[#cecece] hover:border-blue-500 border rounded-xl p-2 w-[24rem] ">
      <img
        src="https://th.bing.com/th/id/OIP.stozmrdvQwUsnVqzRvyq0QHaE7?rs=1&pid=ImgDetMain"
        className="h-[110px] w-[110px] bg-cover rounded-xl"
        alt="featured"
      />
      <aside>
        <p className="font-medium">Tnstant Demo</p>
        <p className="line-clamp-2 text-sm">
          See why modern organizations across industries choose Rhombus to
          protect their spaces.
        </p>
      </aside>
    </section>
  );
};

export default FeaturedCard;
