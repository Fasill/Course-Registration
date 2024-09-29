import React, { useState } from "react";

const RegistrationForm = ({
  myState,
  id,
}: {
  myState: Function;
  id: string;
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "Male",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-white p-[1rem] rounded flex flex-col items-center gap-[1rem]">
      <h1 className="text-[2rem] self-start">Registration {id}</h1>
      <p className="text-blue-400 cursor-pointer" onClick={() => myState("0")}>
        Go back to Home
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[2rem] ">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <p>Full Name</p>
            <input
              required
              className="shadow-lg border p-[0.4rem]"
              type="text"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Username</p>
            <input
              required
              className="shadow-lg border p-[0.4rem]"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              required
              className="shadow-lg border p-[0.4rem]"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Phone Number</p>
            <input
              type="text"
              required
              name="phoneNumber"
              className="shadow-lg border p-[0.4rem]"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              className="shadow-lg border p-[0.4rem]"
              type="password"
              required
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Confirm Password</p>
            <input
              required
              type="password"
              name="password"
              className="shadow-lg border p-[0.4rem]"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <p>Gender (Optional)</p>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <button
          type="submit"
          className=" p-[0.6rem] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 font-bold text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
