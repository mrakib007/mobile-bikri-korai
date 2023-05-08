import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ productBooking, setProductBooking }) => {
  const { title, resale_price, image_url } = productBooking;
  const { user } = useContext(AuthContext);
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const meetingLocation = form.meetingLocation.value;

    const booking = {
         name: name,
         productBooking: title,
         image_url: image_url,
         email,
         phone,
         meetingLocation,
         price,
    }

    fetch('https://y-9jemzp2tg-mrakib007.vercel.app/bookings',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.acknowledged){
            setProductBooking(null);
            toast.success("Booking Confirmed");
        }
        else{
            toast.error(data.message);
        }
    })
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>
          <form
            onSubmit={handleBooking}
            className="gird grid-cols-1 gap-3 mt-8"
          >
            <input
              className="input w-full input-bordered"
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
            />
            <input
              className="input w-full input-bordered"
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
            />
            <input
              className="input w-full input-bordered"
              type="text"
              name="price"
              defaultValue={resale_price}
              disabled
            />
            <input
              className="input w-full input-bordered"
              name="phone"
              type="number"
              placeholder="Phone Number"
              required
            />
            <input
              name="meetingLocation"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
              required
            />
            <br />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
