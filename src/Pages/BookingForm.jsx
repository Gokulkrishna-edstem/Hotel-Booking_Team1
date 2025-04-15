import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import easyinvoice from "easyinvoice";
import { saveAs } from "file-saver";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { updateSearch } from "../feature/hotelSlice";

import Rating from "../components/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function BookingForm() {
  const dispatch = useDispatch();
  const [showCheckDates, setShowCheckDates] = useState(false);
  const [tempCheckIn, setTempCheckIn] = useState(null);
  const [tempCheckOut, setTempCheckOut] = useState(null);
  const [guest, setGuests] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const {
    hotelName,
    hotelLocation,
    hotelrating,
    hotelImage,
    price,
    description,
  } = useSelector((state) => state.booking);

  const { location, checkIn, checkOut, guests } = useSelector(
    (state) => state.hotel
  );

  useEffect(() => {
    if (!location || checkIn === "" || checkOut === "" || !guests) {
      setShowCheckDates(true);
    } else {
      setShowCheckDates(false);
    }
  }, [location, checkIn, checkOut, guests]);

  // generating invoice
  const generateInvoice = async () => {
    const invoiceData = {
      sender: {
        company: "CozyNest",
        address: "Kochi",
        city: "Ernakulam",
        country: "India",
      },
      client: {
        company: name,
        address: email,
        city: phone,
        country: "India",
      },
      information: {
        number: `INV-${Date.now()}`,
        date: new Date().toLocaleDateString(),
        "due-date": "Paid",
      },
      products: [
        {
          quantity: 1,
          description: `${hotelName} - ${hotelLocation}`,
          price: price,
        },
      ],
      bottomNotice: "Thank you for booking with us!",
    };

    const result = await easyinvoice.createInvoice(invoiceData);
    const base64 = result.pdf;
    const blob = new Blob(
      [Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))],
      { type: "application/pdf" }
    );
    saveAs(blob, `invoice_${hotelName}.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      Swal.fire("Missing Info", "Please fill all personal details", "warning");
      return;
    }

    // updating the reducer
    dispatch(updateSearch({ name, email, phone }));

    // using sweet alert
    Swal.fire({
      title: "Booking Confirmed!",
      text: "Do you want to download your invoice?",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Download Invoice",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.isConfirmed) {
        generateInvoice();
      }
    });
  };

  return (
    <>
      {/* Hotel Info Card */}
      <div className="contaienr w-11/12 flex flex-col sm:flex-row justify-self-center mt-5 rounded-2xl p-5 shadow-2xl">
        <div className=" w-full sm:w-[500px] h-[250px] rounded-2xl overflow-hidden">
          <img src={hotelImage} className="w-full sm:w-full h-full" alt="" />
        </div>
        <div className="flex flex-col w-full mx-4 ">
          <div className="w-full flex justify-between">
            <div>
              <h2 className="font-bold text-lg sm:text-4xl">{hotelName}</h2>
              <p className="font-light text-sm sm:text-xl">{description}</p>
            </div>
            <Rating rating={hotelrating} width={"100px"} />
          </div>
          <div className="mt-5">
            <h4 className="font-bold text-md text-slate-500">
              Check in on :{" "}
              {tempCheckIn
                ? new Date(tempCheckIn).toDateString()
                : checkIn || "Not selected"}
            </h4>
            <h4 className="font-bold text-md text-slate-500">
              Check out on :{" "}
              {tempCheckOut
                ? new Date(tempCheckOut).toDateString()
                : checkOut || "Not selected"}
            </h4>
            <p className="mt-3">
              Number of guests : {guest ? guest : guests || "Not specified"}
            </p>
            <p className="mt-2">Location : {hotelLocation}</p>
            <p className="mt-2 font-bold">Price : ₹{price}</p>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="container w-11/12 flex flex-col items-center mt-10">
        <h1 className="font-bold uppercase text-lg text-center">
          Fill the details below to confirm your booking
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-10 w-[80%] sm:w-[40%] flex gap-7 flex-col"
        >
          {showCheckDates && (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <div className="flex flex-col gap-4">
                <h1 className="w-full uppercase text-sm">
                  Enter the booking details
                </h1>
                <DatePicker
                  label="Check-in Date"
                  value={tempCheckIn}
                  onChange={(newValue) => setTempCheckIn(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                  required
                />
                <DatePicker
                  label="Check-out Date"
                  value={tempCheckOut}
                  onChange={(newValue) => setTempCheckOut(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                  required
                />
                <TextField
                  label="Number of guests"
                  variant="outlined"
                  value={guest}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                />
              </div>
            </LocalizationProvider>
          )}

          <div className="flex flex-col gap-4">
            <h1 className="uppercase text-sm">
              <span className="font-bold">Step 1 :</span> Personal Data
            </h1>
            <TextField
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label="Email address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1>
              <span className="font-bold">Step 2 :</span> Payment Method
            </h1>
            <TextField label="Name on the card" variant="outlined" />
            <TextField label="Card Number" variant="outlined" />
            <div className="w-full flex justify-between">
              <TextField label="Valid-until" variant="outlined" />
              <TextField label="CVV" variant="outlined" type="password" />
            </div>
          </div>

          <Button type="submit" variant="outlined">
            Book
          </Button>
        </form>
      </div>
    </>
  );
}

export default BookingForm;
