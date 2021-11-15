import React from 'react';

const ReviewPage = () => {
    const [revies, setReives] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/allReview")
      .then((res) => res.json())
      .then((data) => setReives(data));
  }, []);
  console.log(revies);
    return (
        <div>
      <h1>Customer Revies</h1>
      <div className="services">
        <div className="row container">
          {revies?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                {/* <div className="service-img">
                  <img className="w-50" src={pd?.image} alt="" />
                </div> */}
                <h1>{pd.name}</h1>
                <p>{pd.email}</p>
                <p>{pd.comments}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default ReviewPage;