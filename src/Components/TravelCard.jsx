const TravelCard = ({ card }) => {
  return (
    <div
      className="hero rounded-2xl hover:shadow-xl hover:shadow-slate-600 dark:hover:shadow-slate-800"
      style={{
        backgroundImage:
          `url(${card.img})`,
      }}
    >
      <div className="hero-overlay rounded-2xl bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex items-center justify-center h-52">
          <h1 className="mb-5 text-white text-5xl font-bold hover-text-green-600">{card.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
