import PropTypes from 'prop-types';

const TravelCard = ({ card }) => {
  return (
    <div
      className="hero hover:shadow-inner border-4 border-slate-800 dark:border-slate-300 rounded-tr-2xl text-5xl lg:text-7xl"
      style={{
        backgroundImage:
          `url(${card.img})`,
      }}
    >
      <div className="hero-overlay rounded-tr-2xl bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex flex-col items-center justify-center h-52">
          <h1 className="mb-5 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300 font-bold hover-text-green-600">{card.name}</h1>
          <button className='text-sm btn btn-sm dark:bg-slate-900 dark:text-white hover:btn-md rounded-none rounded-tr-lg'>Buy Ticket</button>
        </div>
      </div>
    </div>
  );
};

TravelCard.propTypes = {
    card: PropTypes.object,
}

export default TravelCard;
