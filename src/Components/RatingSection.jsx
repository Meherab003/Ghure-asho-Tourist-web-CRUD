const RatingSection = () => {
  const ratingCards = [
    {
      id: 1,
      img: "https://media.licdn.com/dms/image/D5603AQERGsSkFyzUqg/profile-displayphoto-shrink_800_800/0/1674139735067?e=2147483647&v=beta&t=2QWc6VyyWkIl2PW6cq0qFWV6Na6Jyq8SnjhyL20JNhc",
      name: "Meherab",
      rating: 5,
      comment:
        "Exceptional service! Highly recommended by fellow travelers. Their attention to detail sets them apart.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT9WZqWcpfEx_i7pWOrP_crrjmbAAq2RC1v4NOAh9qnA&s",
      name: "Jhankar",
      rating: 5,
      comment:
        "Efficient and friendly staff—top-notch experience every time. Consistently reliable options for travel.",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpmvB2Vl-5S2Shqg_77YAtAFAQMr9O-U9YpF4mrnVY6g&s",
      name: "Albert E.",
      rating: 4,
      comment:
        "Reliable transportation choices that make every journey enjoyable. A trusted partner for all our trips!",
    },
  ];
  return (
    <div>
      <div
        className="hero items-start"
        style={{
          backgroundImage:
            "url(https://www.tourradar.com/days-to-come/wp-content/uploads/2018/11/GroupTour2-min.jpg)",
        }}
      >
        <div className="hero-overlay bg-slate-900 bg-opacity-40"></div>
        <div className="flex flex-col justify-start w-4/5 mx-auto py-10 lg:py-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white pb-2 md:pb-3 lg:pb-5">
            What People Think About Us
          </h1>
          <p className="md:w-4/5 text-slate-100">
            People rave about our exceptional service! From the seamless booking
            process to the friendly staff, we’ve earned their trust. Our
            reliable transportation options—whether by bus, ship, or plane—have
            left travelers delighted. Join the chorus of satisfied passengers
            and experience the difference today
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-14">
            {ratingCards.map((ratingCard) => (
              <div key={ratingCard.id}>
                <div className="bg-slate-900 rounded-2xl hover:bg-slate-200 text-white hover:text-slate-900">
                  <div className="flex gap-3 items-center p-3 md:p-5">
                    {/* image */}
                    <div className="avatar">
                      <div className="w-10 md:w-12 lg:w-14 rounded-full">
                        <img src={ratingCard.img} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg md:text-xl lg:text-2xl font-medium">{ratingCard.name}</p>
                      <div className="rating gap-1">
                        <input
                          type="radio"
                          name="rating-4"
                          className="mask mask-star-2 w-5 bg-green-500"
                        />
                        <input
                          type="radio"
                          name="rating-4"
                          className="mask mask-star-2 w-5 bg-green-500"
                        />
                        <input
                          type="radio"
                          name="rating-4"
                          className="mask mask-star-2 w-5 bg-green-500"
                        />
                        <input
                          type="radio"
                          name="rating-4"
                          className="mask mask-star-2 w-5 bg-green-500"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-4"
                          className="mask mask-star-2 w-5 bg-green-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-28 px-3 lg:px-5">
                    <p>{ratingCard.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
