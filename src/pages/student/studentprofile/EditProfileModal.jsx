import { useEffect, useState } from "react";
import { updateStudentProfile } from "../../../services/studentService";

export default function EditProfileModel({ student, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    department: "",
    phoneNumber: "",
    gender: "",
    homeAddress: "",
  });

  useEffect(() => {
    if (student) {
      setFormData({
        fullName: student.fullName || "",
        dateOfBirth: student.dateOfBirth || "",
        department: student.department || "",
        phoneNumber: student.phoneNumber || "",
        gender: student.gender || "",
        homeAddress: student.homeAddress || "",
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit clicked");
    console.log("Student:", student);
    console.log("Form data:", formData);

    try {
      await updateStudentProfile(student.id, formData);

      alert("Profile updated successfully!");

      onClose();
    } catch (error) {
      console.error("UPDATE ERROR:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
    }
  };

  const labelStyle = {
    display: "block",
    marginBottom: "7px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#374151",
  };

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "11px 12px",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    outline: "none",
    fontSize: "14px",
    color: "#111827",
    backgroundColor: "#fff",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.55)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: "650px",
          maxHeight: "90vh",
          overflowY: "auto",
          borderRadius: "16px",
          padding: "28px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: "22px",
                color: "#111827",
              }}
            >
              Edit Personal Information
            </h2>

            <p
              style={{
                margin: "6px 0 0",
                color: "#6B7280",
                fontSize: "14px",
              }}
            >
              Update your personal information below.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              border: "none",
              background: "#F3F4F6",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "20px",
              color: "#374151",
            }}
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
            }}
          >
            {/* Full Name */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Full Name</label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={inputStyle}
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label style={labelStyle}>Date of Birth</label>

              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* Gender */}
            <div>
              <label style={labelStyle}>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Department */}
            <div>
              <label style={labelStyle}>Department</label>

              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter department"
                style={inputStyle}
                disabled
              />
            </div>

            {/* Phone */}
            <div>
              <label style={labelStyle}>Phone Number</label>

              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                style={inputStyle}
              />
            </div>

            {/* Address */}
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Address</label>

              <textarea
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="3"
                style={{
                  ...inputStyle,
                  resize: "vertical",
                }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "12px",
              marginTop: "28px",
              paddingTop: "20px",
              borderTop: "1px solid #E5E7EB",
            }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "11px 20px",
                borderRadius: "8px",
                border: "1px solid #D1D5DB",
                background: "#fff",
                color: "#374151",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>

            <button
              type="submit"
              style={{
                padding: "11px 22px",
                borderRadius: "8px",
                border: "none",
                background: "#2563EB",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
