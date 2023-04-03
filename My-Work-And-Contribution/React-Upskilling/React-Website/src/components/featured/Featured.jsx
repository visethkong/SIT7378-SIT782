import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.timeout.com/images/105303515/1372/772/image.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>64 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://assets3.thrillist.com/v1/image/3128243/1200x600/scale;"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Madrid</h1>
          <h2>53 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.natgeofe.com/n/93231b5d-3b4f-4bd6-bcf4-4172ebda2011/parliment-square-london-england_3x2.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>32 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;