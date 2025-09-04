import React from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Aditi Sharma",
    department: "Cardiology",
    availability: "Mon - Fri, 10:00 AM - 5:00 PM",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    department: "Orthopedics",
    availability: "Mon - Sat, 9:00 AM - 6:00 PM",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Dr. Sneha Gupta",
    department: "Dermatology",
    availability: "Tue - Fri, 11:00 AM - 4:00 PM",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    id: 4,
    name: "Dr. Arjun Mehta",
    department: "Neurology",
    availability: "Mon - Thu, 1:00 PM - 6:00 PM",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },
];

function DoctorsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Experienced Doctors
        </h2>

        {/* Doctor Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
                <p className="text-blue-600 font-medium">
                  {doctor.department}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  {doctor.availability}
                </p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;
