import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

type FormData = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date | null;
  gender: string;
  countryCode: string;
  mobileNumber: string;
  email: string;
  applicationDescription: string;
  resume: File | null;
};

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    gender: '',
    countryCode: '+234',
    mobileNumber: '',
    email: '',
    applicationDescription: '',
    resume: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData(prev => ({
      ...prev,
      dateOfBirth: date,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white w-[80%] rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
            required
          />
        </div>

        <div className='flex gap-4 mb-4'>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of birth</label>
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
              required
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <div className="flex">
            <input
              type="text"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-1/4 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="89501234"
              className="w-3/4 px-3 py-2 border-t border-b border-r border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Application Description</label>
          <textarea
            name="applicationDescription"
            value={formData.applicationDescription}
            onChange={handleChange}
            placeholder="Provide short details"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a00000]"
            rows={3}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Resume</label>
          <div className="flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md">
            <span className="text-sm text-gray-500">
              {formData.resume ? formData.resume.name : 'Upload document (PDF only, max 5 MB)'}
            </span>
            <label className="cursor-pointer bg-[#a00000] text-white px-3 py-1 rounded-md hover:bg-[#800000]">
              Browse
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf"
                className="hidden"
                required
              />
            </label>
          </div>
        </div>

        <div className="mb-6 text-sm text-gray-600 w-[80%] text-center mx-auto">
          <p>By submitting, you consent to the collection and secure storage of your data for this application, in line with our privacy policy.</p>
        </div>

        <div className='flex justify-center'>
        <button
          type="submit"
          className="bg-[#a00000] text-white py-2 px-10 rounded-md  focus:outline-none focus:ring-2 focus:ring-[#a00000] focus:ring-offset-2 cursor-pointer transition duration-300"
        >
          Submit Form
        </button>
        </div>
      </form>
    </div>
  );
}