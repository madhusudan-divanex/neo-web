function formatDateTime(dateValue) {
        const date = new Date(dateValue);

        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();

        let hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "pm" : "am";

        hours = hours % 12 || 12;

        return `${day} ${month} ${year}, at ${hours}:${minutes}${ampm}`;
    }
  
const languageOptions = [
  { value: "English", label: "English" },
  { value: "Hindi", label: "Hindi" },
  { value: "Bengali", label: "Bengali" },
  { value: "Tamil", label: "Tamil" },
  { value: "Telugu", label: "Telugu" },
  { value: "Marathi", label: "Marathi" },
  { value: "Gujarati", label: "Gujarati" },
  { value: "Punjabi", label: "Punjabi" },
  { value: "Malayalam", label: "Malayalam" },
  { value: "Kannada", label: "Kannada" },
  { value: "Urdu", label: "Urdu" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" }
];
const specialtyOptions = [
  { value: "General Medicine", label: "General Medicine" },
  { value: "Pediatrics", label: "Pediatrics" },
  { value: "Dermatology", label: "Dermatology" },
  { value: "Cardiology", label: "Cardiology" },
  { value: "Neurology", label: "Neurology" },
  { value: "Orthopedics", label: "Orthopedics" },
  { value: "Psychiatry", label: "Psychiatry" },
  { value: "Ophthalmology", label: "Ophthalmology" },
  { value: "ENT", label: "ENT" },
  { value: "Gynecology", label: "Gynecology" },
  { value: "Urology", label: "Urology" },
  { value: "Pulmonology", label: "Pulmonology" },
  { value: "Oncology", label: "Oncology" },
  { value: "Nephrology", label: "Nephrology" },
  { value: "Gastroenterology", label: "Gastroenterology" },
  { value: "Endocrinology", label: "Endocrinology" },
  { value: "Rheumatology", label: "Rheumatology" },
  { value: "Physiotherapy", label: "Physiotherapy" },
  { value: "Dentistry", label: "Dentistry" }
];
const calculateAge = (dob) => {
        if (!dob) return "";

        const birthDate = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--; // haven't had birthday yet this year
        }
        return age;
    };


export {formatDateTime,languageOptions,specialtyOptions,calculateAge}