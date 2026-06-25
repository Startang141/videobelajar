"use client";

import { useCourse } from "@/src/context/CourseContext";
import { FC, useState } from "react";

interface modalAddProps {
  handleCloseModal: () => void;
}

const ModalAdd: FC<modalAddProps> = ({ handleCloseModal }) => {
  const { addCourse } = useCourse();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    thumbImage: "",
    instructorName: "",
    instructorRole: "",
    instructorCompany: "",
    instructorImage: "",
    rating: "",
    price: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCourse = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      category: formData.category,
      thumbImage: formData.thumbImage,
      instructor: {
        name: formData.instructorName,
        role: formData.instructorRole,
        company: formData.instructorCompany,
        image: formData.instructorImage,
      },
      rating: Number(formData.rating),
      price: Number(formData.price),
      totalReviews: 0,
    };

    // console.log(newCourse);

    addCourse(newCourse);

    handleCloseModal();
  };

  return (
    <>
      <div>
        <div className="bg-white border border-slate-200 rounded-md p-4 w-fit mx-auto mt-16">
          <div className="flex flex-row justify-between items-center mb-4">
            <h2 className="font-bold text-2xl">Create Course</h2>
            <button className="cursor-pointer" onClick={handleCloseModal}>
              X
            </button>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="title" className="mb-1">
                Course Title
              </label>
              <input
                required
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                type="text"
                className="rounded-md border border-slate-200 px-3 py-2 focus:outline-green-700"
                placeholder="Example: Big 4 Auditor Financial Analyst"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="description" className="mb-1">
                Description
              </label>
              <textarea
                required
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="min-h-24 rounded-md border border-slate-200 px-3 py-2 focus:outline-green-700"
                placeholder="Write course description..."
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="category" className="mb-1">
                Category
              </label>
              <select
                required
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="rounded-md border border-slate-200 px-3 py-2 focus:outline-green-700"
              >
                <option value="" disabled>
                  Choose Category
                </option>
                <option value="bisnis">Bisnis</option>
                <option value="teknologi">Teknologi</option>
                <option value="desain">Desain</option>
                <option value="marketing">Marketing</option>
                <option value="keuangan">Keuangan</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="thumbImage" className="mb-1">
                Thumbnail Image URL
              </label>
              <input
                required
                id="thumbImage"
                name="thumbImage"
                value={formData.thumbImage}
                onChange={handleChange}
                type="url"
                className="rounded-md border border-slate-200 px-3 py-2 focus:outline-green-700"
                placeholder="https://example.com/course-image.jpg"
              />
            </div>

            <div className="rounded-md border border-slate-200 p-4">
              <h3 className="mb-4 text-lg font-semibold text-slate-700">
                Instructor Information
              </h3>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="instructorName" className="mb-1">
                    Instructor Name
                  </label>
                  <input
                    required
                    id="instructorName"
                    name="instructorName"
                    value={formData.instructorName}
                    onChange={handleChange}
                    type="text"
                    className="rounded-md border border-slate-200 px-3 py-2 focus:outline-green-700"
                    placeholder="Example: Jenna Ortega"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="instructorRole" className="mb-1">
                    Instructor Role
                  </label>
                  <input
                    required
                    id="instructorRole"
                    name="instructorRole"
                    value={formData.instructorRole}
                    onChange={handleChange}
                    type="text"
                    className="rounded-md border border-slate-200 px-3 py-2 focus:outline-green-700"
                    placeholder="Example: Senior Accountant"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="instructorCompany" className="mb-1">
                    Company
                  </label>
                  <input
                    required
                    id="instructorCompany"
                    name="instructorCompany"
                    value={formData.instructorCompany}
                    onChange={handleChange}
                    type="text"
                    className="rounded-md border border-slate-200 px-3 py-2 focus:outline-green-700"
                    placeholder="Example: Gojek"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="instructorImage" className="mb-1">
                    Instructor Image URL
                  </label>
                  <input
                    required
                    id="instructorImage"
                    name="instructorImage"
                    value={formData.instructorImage}
                    onChange={handleChange}
                    type="url"
                    className="rounded-md border border-slate-200 px-3 py-2 focus:outline-green-700"
                    placeholder="https://example.com/instructor.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="rating" className="mb-1">
                  Rating
                </label>
                <input
                  required
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  className="rounded-md border border-slate-200 px-3 py-2 focus:outline-green-700"
                  placeholder="Example: 4.5"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="price" className="mb-1">
                  Price
                </label>
                <input
                  required
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  type="number"
                  min="0"
                  className="rounded-md border border-slate-200 px-3 py-2 focus:outline-green-700"
                  placeholder="Example: 300000"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-green-700 py-2 font-medium text-white transition hover:bg-green-800"
            >
              Submit Course
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalAdd;
