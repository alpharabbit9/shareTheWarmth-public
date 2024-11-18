import { Link } from "react-router-dom";

const DonationCard = ({donation}) => {

    const {title,image,description,id} = donation ;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img className="w-full h-48 object-cover"
      src={image}
      alt="donation" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/${id}`} className="btn btn-primary">Donate Now</Link>
    </div>
  </div>
</div>
    );
};

export default DonationCard;