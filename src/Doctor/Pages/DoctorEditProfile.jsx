import { faCalendar, faCircleDollarToSlot, faCity, faClose, faEarth, faEnvelope, faFile, faHospital, faLanguage, faLocationCrosshairs, faLocationDot, faMapPin, faMarsAndVenus, faPhone, faTrash, faUser, } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProfileSidebar from "./ProfileSidebar"
import { FiPlusSquare } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDoctorDetail } from "../../Redux/features/doctor";
import { getApiData, securePostData, updateApiData } from "../../Services/api";
import { toast } from "react-toastify";
import { languageOptions, specialtyOptions } from "../../Services/globalFunction";
import Select from "react-select";
import Loader from "../../Loader/Loader";
function DoctorEditProfile() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const userId = localStorage.getItem('userId')
    const [message, setMessage] = useState('')
    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [hospitalOptions, setHospitalOptions] = useState([])
    const { profiles, kyc, medicalLicense, allowEdit, aboutDoctor, educationWork, customId, isRequest } = useSelector(state => state.doctor)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        dob: null,
        password: "",
        gender: "",
    })
    const handleFormChange = (e) => {
        const { type, name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    };
    const [addressData, setAddressData] = useState({
        hospitalName: "",
        countryId: "",
        stateId: "",
        cityId: "",
        pinCode: "",
        specialty: "",
        treatmentAreas: [""],
        fees: "",
        language: [""],
        aboutYou: "",
        fullAddress: "",
        userId
    });
    const handleAddressChange = (e) => {
        const { type, name, value, files } = e.target;
        setAddressData(prev => ({
            ...prev,
            [name]: value
        }));
        if (name === 'countryId' && value) {
            const data = countries?.filter(item => item?._id === value)
            fetchStates(data[0].isoCode);
        }
        if (name === 'stateId' && value) {
            const data = states?.filter(item => item?._id === value)
            fetchCities(data[0].isoCode);
        }

    };
    const addressSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const data={...addressData,hospitalName:addressData?.hospitalName?.value}
        try {
            const response = await securePostData('doctor/about', addressData)
            if (response.success) {
                toast.success('Records saved')
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    };
    const basicSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await updateApiData('doctor', formData)
            if (response.success) {
                dispatch(fetchDoctorDetail())
                toast.success('Records saved')
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    };
    async function fetchCountries() {
        setLoading(true)
        try {
            const response = await getApiData('api/location/countries')
            const data = await response
            setCountries(data)
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    async function fetchHospitals() {
        setLoading(true)
        try {
            const response = await getApiData('api/hospital/list')
            if (response.success) {
                const formattedOptions = response.data.map(hospital => ({
                    value: hospital._id,   // or hospital._id depending on your data
                    label: hospital.name, // display name
                }));

                setHospitalOptions(formattedOptions)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchHospitals()
        fetchCountries()
    }, [])
    async function fetchStates(value) {
        setLoading(true)
        try {
            const response = await getApiData(`api/location/states/${value}`)
            const data = await response
            setStates(data)
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    async function fetchCities(value) {
        setLoading(true)
        try {
            const response = await getApiData(`api/location/cities/${value}`)
            const data = await response
            setCities(data)
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    const [education, setEducation] = useState([
        {
            university: "",
            degree: "",
            startYear: "",
            endYear: "",
        },
    ]);
    const [experience, setExperience] = useState([
        {
            organization: "",
            totalYear: "",
            month: "",
            present: false,
        },
    ]);
    /* ================= EDUCATION ================= */

    const addEducation = () => {
        setEducation([
            ...education,
            { university: "", degree: "", startYear: "", endYear: "" },
        ]);
    };

    const removeEducation = (index) => {
        setEducation(education.filter((_, i) => i !== index));
    };

    const handleEducationChange = (index, field, value) => {
        const updated = [...education];
        updated[index][field] = value;
        setEducation(updated);
    };

    /* ================= EXPERIENCE ================= */

    const addExperience = () => {
        setExperience([
            ...experience,
            { organization: "", startYear: "", endYear: "", present: false },
        ]);
    };

    const removeExperience = (index) => {
        setExperience(experience.filter((_, i) => i !== index));
    };

    const handleExperienceChange = (index, field, value) => {
        const updated = [...experience];
        updated[index][field] = value;
        setExperience(updated);
    };

    /* ================= SUBMIT ================= */

    const handleWorkEduSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const data = { userId, education, work: experience }
        try {
            const response = await securePostData('doctor/education-work', data)
            if (response.success) {
                toast.success('Records saved')
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    };
    const [licenses, setLicenses] = useState([
        { certName: "", certFile: null, preview: "" },
    ]);

    const handleLicChange = (index, field, value) => {
        const updated = [...licenses];
        updated[index][field] = value;
        setLicenses(updated);
    };

    const handleFileChange = (index, file) => {
        const updated = [...licenses];
        updated[index].certFile = file;

        if (file && file.type.startsWith("image/")) {
            updated[index].preview = URL.createObjectURL(file);
        } else {
            updated[index].preview = ""; // PDF ke liye no preview
        }

        setLicenses(updated);
    };


    const addMore = () => {
        setLicenses([...licenses, { certName: "", certFile: null, preview: "" }]);
    };

    const removeItem = (index) => {
        const updated = licenses.filter((_, i) => i !== index);
        setLicenses(updated);
    };

    const handleLicenseSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('medicalLicense', JSON.stringify(
            licenses.map(report => ({
                certName: report.certName,

            }))
        ));

        licenses.forEach(report => {
            if (report.certFile instanceof File) {
                formData.append('certFile', report.certFile);
            }
        });

        try {
            const response = await securePostData('doctor/medical-license', formData);
            if (response.success) {
                toast.success('Prescriptions submitted successfully!');
                navigate('/doctor/address-about')
            } else {
                toast.error('Submission failed: ' + data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong!');
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        dispatch(fetchDoctorDetail())
    }, [dispatch])

    useEffect(() => {
        if (profiles) {
            setFormData({
                ...profiles, dob: profiles?.dob
                    ? new Date(profiles.dob).toISOString().split('T')[0]
                    : ''
            })
        }
        if (medicalLicense) {
            setLicenses(medicalLicense?.medicalLicense)
        }
        if (educationWork) {
            setEducation(educationWork?.education)
            setExperience(educationWork?.work)
        }
        if (aboutDoctor) {
            // fetchStates(aboutDoctor?.countryId?.isoCode)
            // fetchCities(aboutDoctor?.stateId?.isoCode)
            setAddressData({
                ...aboutDoctor, countryId: aboutDoctor?.countryId?._id,
                stateId: aboutDoctor?.stateId?._id, cityId: aboutDoctor?.cityId?._id, hospitalName: aboutDoctor?.hospitalName
                    ? {
                        value: aboutDoctor.hospitalName._id,
                        label: aboutDoctor.hospitalName.name, // must match what Select expects
                    }
                    : null
            })


        }

    }, [profiles, medicalLicense, educationWork, aboutDoctor])
    const treatmentValue = addressData.treatmentAreas[0] !== '' && addressData.treatmentAreas?.map(area => ({
        value: area,
        label: area
    }));
    const language = addressData.language[0] !== '' && addressData.language?.map(area => ({
        value: area,
        label: area
    }));
    useEffect(() => {
        if (aboutDoctor?.countryId?.isoCode) {
            fetchStates(aboutDoctor.countryId.isoCode);
        }
    }, [aboutDoctor?.countryId?.isoCode]);

    useEffect(() => {
        if (aboutDoctor?.stateId?.isoCode) {
            fetchCities(aboutDoctor.stateId.isoCode);
        }
    }, [aboutDoctor?.stateId?.isoCode]);
    return (
        <>
            {loading ? <Loader />
                : <section className="new-profile-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-12 mb-3">
                                <ProfileSidebar />
                            </div>

                            <div className="col-lg-9 col-sm-12">
                                <div className="profile-right-card">
                                    <div className="profile-tp-header">
                                        <h5 className="heading-grad fz-24 mb-0">Edit Profile</h5>
                                    </div>

                                    <div className="">
                                        <div className="employee-tabs">
                                            <ul className="nav nav-tabs gap-3 mt-3 px-3" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link active"
                                                        id="home-tab"
                                                        data-bs-toggle="tab"
                                                        href="#home"
                                                        role="tab"
                                                    >
                                                        Basic Details
                                                    </a>
                                                </li>

                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link"
                                                        id="profile-tab"
                                                        data-bs-toggle="tab"
                                                        href="#profile"
                                                        role="tab"
                                                    >
                                                        Education & Work & Experience
                                                    </a>
                                                </li>

                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link"
                                                        id="contact-tab"
                                                        data-bs-toggle="tab"
                                                        href="#contact"
                                                        role="tab"
                                                    >
                                                        Medical License
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a
                                                        className="nav-link"
                                                        id="upload-tab"
                                                        data-bs-toggle="tab"
                                                        href="#upload"
                                                        role="tab"
                                                    >
                                                        Address & About you
                                                    </a>
                                                </li>

                                            </ul>

                                            <div className="">
                                                <div className="employee-tabs">
                                                    <div className="tab-content" id="myTabContent">
                                                        <div
                                                            className="tab-pane fade show active"
                                                            id="home"
                                                            role="tabpanel"
                                                        >
                                                            <form onSubmit={basicSubmit}>
                                                                <div className="all-profile-data-bx">
                                                                    <div className="row">

                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">Name</label>
                                                                                <input type="text" name="name" value={formData?.name} onChange={handleFormChange} className="form-control new-control-frm px-5" placeholder="Enter your name" />
                                                                                <div className="contact-add-icon">
                                                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faUser} /> </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">Mobile Number</label>
                                                                                <input type="number" name="contactNumber" value={formData?.contactNumber} onChange={handleFormChange} className="form-control new-control-frm px-5" placeholder="Enter your number" />
                                                                                <div className="contact-add-icon">
                                                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faPhone} /> </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">Email</label>
                                                                                <input type="email" name="email" value={formData?.email} onChange={handleFormChange} className="form-control new-control-frm px-5" placeholder="Enter your email" />
                                                                                <div className="contact-add-icon">
                                                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faEnvelope} /> </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">Date of Birth</label>
                                                                                <input type="date" name="dob" value={formData?.dob} onChange={handleFormChange} className="form-control new-control-frm px-5" placeholder="Enter your date" />
                                                                                <div className="contact-add-icon">
                                                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCalendar} /> </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label>Gender</label>
                                                                                <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm ">
                                                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faMarsAndVenus} /> </span>
                                                                                    <select className="nw-select" name="gender" value={formData?.gender} onChange={handleFormChange}>
                                                                                        <option>--Select Gender--</option>
                                                                                        <option value="Male">Male</option>
                                                                                        <option value="Female">Female</option>
                                                                                        <option value="Other">Other</option>
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>

                                                                <div className="profile-btm-footer">
                                                                    <div className="text-end">
                                                                        <button className="thm-btn">Save & Next</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>

                                                        <div className="tab-pane fade" id="profile" role="tabpanel">
                                                            <form onSubmit={handleWorkEduSubmit}>
                                                                <div className="all-profile-data-bx">
                                                                    <h5 className="fz-20 fw-700 text-black">Education</h5>
                                                                    {education?.map((item, key) =>
                                                                        <div className="pres-report-bx nw-press-report-bx" key={key}>
                                                                            <div className="row">
                                                                                <div className="col-lg-6 col-md-6 col-sm-12" >
                                                                                    <div className="custom-frm-bx">
                                                                                        <label htmlFor="">University / Institution</label>
                                                                                        <input type="text" name="university" value={item?.university} onChange={(e) => handleEducationChange(key, 'university', e.target.value)} className="form-control new-control-frm px-5" placeholder="Enter Your University / Institution" />
                                                                                        <div className="contact-add-icon">
                                                                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faFile} /> </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                    <div className="custom-frm-bx">
                                                                                        <label>Degree / Qualification</label>
                                                                                        <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm ">
                                                                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faUser} /> </span>
                                                                                            <select className="nw-select" name="degree" value={item?.degree} onChange={(e) => handleEducationChange(key, 'degree', e.target.value)}>
                                                                                                <option>--Select Degree / Qualification--</option>
                                                                                                <option value="High School">High School</option>
                                                                                                <option value="Intermediate">Intermediate / Higher Secondary</option>

                                                                                                {/* Diploma */}
                                                                                                <option value="Diploma">Diploma</option>
                                                                                                <option value="Medical Diploma">Medical Diploma</option>

                                                                                                {/* Undergraduate */}
                                                                                                <option value="BA">BA</option>
                                                                                                <option value="BSc">BSc</option>
                                                                                                <option value="BCom">BCom</option>
                                                                                                <option value="BBA">BBA</option>
                                                                                                <option value="BCA">BCA</option>
                                                                                                <option value="MBBS">MBBS</option>
                                                                                                <option value="BDS">BDS</option>
                                                                                                <option value="BAMS">BAMS</option>
                                                                                                <option value="BHMS">BHMS</option>
                                                                                                <option value="BPT">BPT</option>
                                                                                                <option value="BPharm">B.Pharm</option>
                                                                                                <option value="GNM">GNM</option>
                                                                                                <option value="BSc Nursing">B.Sc Nursing</option>

                                                                                                {/* Postgraduate */}
                                                                                                <option value="MA">MA</option>
                                                                                                <option value="MSc">MSc</option>
                                                                                                <option value="MCom">MCom</option>
                                                                                                <option value="MBA">MBA</option>
                                                                                                <option value="MCA">MCA</option>
                                                                                                <option value="MD">MD</option>
                                                                                                <option value="MS">MS</option>
                                                                                                <option value="MDS">MDS</option>
                                                                                                <option value="MPT">MPT</option>
                                                                                                <option value="MPharm">M.Pharm</option>
                                                                                                <option value="MSc Nursing">M.Sc Nursing</option>

                                                                                                {/* Doctorate */}
                                                                                                <option value="PhD">PhD</option>

                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                    <div className="custom-frm-bx">
                                                                                        <label htmlFor="">Year form</label>
                                                                                        <input type="number" name="startYear" value={item?.startYear} onChange={(e) => handleEducationChange(key, 'startYear', e.target.value)} className="form-control new-control-frm px-5" placeholder="" />
                                                                                        <div className="contact-add-icon">
                                                                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCalendar} /> </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                    <div className="custom-frm-bx">
                                                                                        <label htmlFor="">Year To</label>
                                                                                        <input type="number" name="endYear" value={item?.endYear} onChange={(e) => handleEducationChange(key, 'endYear', e.target.value)} className="form-control new-control-frm px-5" placeholder="" />
                                                                                        <div className="contact-add-icon">
                                                                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCalendar} /> </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>

                                                                            <div className="nw-press-delete-bx">
                                                                                <button disabled={education?.length == 1} type="button" className="text-danger" onClick={() => removeEducation(key)}> <FontAwesomeIcon icon={faTrash} /> </button>
                                                                            </div>

                                                                        </div>
                                                                    )}
                                                                    <div className="add-more-bx d-flex justify-content-end mt-3">
                                                                        <button type="button" onClick={addEducation} className="nw-thm-btn outline d-flex align-items-center justify-content-center gap-2 nw-dashed-brd"> <FiPlusSquare />   Add More</button>
                                                                    </div>

                                                                    <h5 className="fz-20 fw-700 text-black">Work & Experience</h5>
                                                                    {experience?.map((item, key) =>
                                                                        <div className="pres-report-bx nw-press-report-bx" key={key}>
                                                                            <div className="row flex-grow-1">
                                                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                                                    <div className="custom-frm-bx">
                                                                                        <label htmlFor="">Organization / Hospital Name</label>
                                                                                        <input type="text" name="organization" value={item?.organization} onChange={(e) => handleExperienceChange(key, 'organization', e.target.value)} className="form-control new-control-frm px-5" placeholder="Enter Your Organization / Hospital Name" />
                                                                                        <div className="contact-add-icon">
                                                                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faFile} /> </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                                                    <div className="custom-frm-bx">
                                                                                        <label htmlFor="">Year</label>
                                                                                        <input type="number" name="totalYear" value={item?.totalYear} onChange={(e) => handleExperienceChange(key, 'totalYear', e.target.value)} className="form-control new-control-frm px-5" placeholder="" />
                                                                                        <div className="contact-add-icon">
                                                                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCalendar} /> </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="col-lg-3 col-md-6 col-sm-12">
                                                                                    <div className="custom-frm-bx">
                                                                                        <label htmlFor="">Month</label>
                                                                                        <input type="number" name="month" value={item?.month} onChange={(e) => handleExperienceChange(key, 'month', e.target.value)} className="form-control new-control-frm px-5" placeholder="" />
                                                                                        <div className="contact-add-icon">
                                                                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCalendar} /> </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="nw-press-delete-bx">
                                                                                <button className="text-danger"> <FontAwesomeIcon icon={faTrash} /> </button>
                                                                            </div>

                                                                        </div>)}

                                                                    <div className="add-more-bx d-flex justify-content-end mt-3">
                                                                        <button type="button" onClick={addExperience} className="nw-thm-btn outline d-flex align-items-center justify-content-center gap-2 nw-dashed-brd"> <FiPlusSquare />   Add More</button>
                                                                    </div>

                                                                </div>


                                                                <div className="profile-btm-footer">
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <button className="nw-thm-btn outline">Back</button>
                                                                        </div>
                                                                        <div>
                                                                            <button className="thm-btn">Save & Next</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>

                                                        <div className="tab-pane fade" id="contact" role="tabpanel">
                                                            <form onSubmit={handleLicenseSubmit}>


                                                                <div className="all-profile-data-bx">
                                                                    <div className="pres-report-bx nw-press-report-bx">
                                                                        <div className="row flex-grow-1">
                                                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                                                <div className="custom-frm-bx">
                                                                                    <label htmlFor="">Prescriptions and Reports Name</label>
                                                                                    <input type="text" className="form-control new-control-frm px-5" placeholder="Enter Prescriptions and Reports Name " />
                                                                                    <div className="contact-add-icon">
                                                                                        <span className="nw-contact-icon"> <FontAwesomeIcon icon={faFile} /> </span>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="pres-uploading-box">
                                                                                    <div className="custom-frm-bx">
                                                                                        <label htmlFor="">Prescriptions and Reports  Upload</label>
                                                                                        <div className="pres-picture-bx">
                                                                                            <img src="/report-pic.png" alt="" />
                                                                                        </div>

                                                                                        <div className="close-pres-bx">
                                                                                            <button className="remv-pic-btn">
                                                                                                <FontAwesomeIcon icon={faClose} />
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="nw-press-delete-bx">
                                                                            <button className="text-danger"> <FontAwesomeIcon icon={faTrash} /> </button>
                                                                        </div>
                                                                    </div>

                                                                    <div className="add-more-bx d-flex justify-content-end mt-3">
                                                                        <button className="nw-thm-btn outline d-flex align-items-center justify-content-center gap-2 nw-dashed-brd"> <FiPlusSquare />   Add More</button>
                                                                    </div>
                                                                </div>
                                                                <div className="profile-btm-footer">
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <button className="nw-thm-btn outline">Back</button>
                                                                        </div>
                                                                        <div>
                                                                            <button className="thm-btn">Save & Next</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="tab-pane fade" id="upload" role="tabpanel">
                                                            <form onSubmit={addressSubmit}>
                                                                <div className="all-profile-data-bx">
                                                                    <div className="row">
                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">Organization / Hospital Name</label>
                                                                                {/* <input type="text" name="hospitalName" value={addressData?.hospitalName} onChange={handleAddressChange} id="" className="form-control new-control-frm px-5" placeholder="Enter your Organization / Hospital Name" /> */}
                                                                                <div className="select-wrapper">

                                                                                    <Select
                                                                                        options={hospitalOptions}
                                                                                        name="hospitalName"
                                                                                        value={addressData?.hospitalName || null}
                                                                                        classNamePrefix="custom-select"
                                                                                        placeholder="Select areas(s)"
                                                                                        onChange={(selectedOption) => {
                                                                                            setAddressData(prev => ({
                                                                                                ...prev,
                                                                                                hospitalName: selectedOption
                                                                                            }));
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                                <div className="contact-add-icon">
                                                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faHospital} /> </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">Full Address</label>
                                                                                <input type="text" name="fullAddress" value={addressData?.fullAddress} onChange={handleAddressChange} id="" className="form-control new-control-frm px-5" placeholder="Enter Your Address" />
                                                                                <div className="contact-add-icon">
                                                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faLocationDot} /> </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">Country</label>
                                                                                <select required name="countryId" value={addressData.countryId} onChange={handleAddressChange} id="" className="form-select">
                                                                                    <option value="">---Select Country---</option>
                                                                                    {countries?.map((item, key) =>
                                                                                        <option value={item?._id} key={key}>{item?.name}</option>)}
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">State</label>
                                                                                <select required name="stateId" value={addressData.stateId} onChange={handleAddressChange} id="" className="form-select">
                                                                                    <option value="">---Select State---</option>
                                                                                    {states?.map((item, key) =>
                                                                                        <option value={item?._id} key={key}>{item?.name}</option>)}
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">City</label>
                                                                                <select required name="cityId" value={addressData.cityId} onChange={handleAddressChange} id="" className="form-select">
                                                                                    <option value="">---Select City---</option>
                                                                                    {cities?.map((item, key) =>
                                                                                        <option value={item?._id} key={key}>{item?.name}</option>)}
                                                                                </select>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-3 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">Pin code</label>
                                                                                <input type="number" name="pinCode" value={addressData?.pinCode} onChange={handleAddressChange} id="" className="form-control new-control-frm px-5" placeholder="enter pin code" />
                                                                                <div className="contact-add-icon">
                                                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faMapPin} /> </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label>Specialty</label>
                                                                                <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm ">
                                                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faUser} /> </span>
                                                                                    <select required className="nw-select" name="specialty" value={addressData.specialty} onChange={handleAddressChange}>
                                                                                        <option>--Select--</option>
                                                                                        {specialtyOptions?.map((item, key) =>
                                                                                            <option value={item?.value} key={key}>{item?.label}</option>)}
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label>Treatment Areas</label>
                                                                                <div className="select-wrapper">
                                                                                    <Select
                                                                                        options={specialtyOptions}
                                                                                        isMulti
                                                                                        required
                                                                                        name="treatMent"
                                                                                        value={treatmentValue}
                                                                                        classNamePrefix="custom-select"
                                                                                        placeholder="Select areas(s)"
                                                                                        onChange={(selectedOptions) => {
                                                                                            // selectedOptions is an array of { value, label }
                                                                                            setAddressData(prev => ({
                                                                                                ...prev,
                                                                                                treatmentAreas: selectedOptions ? selectedOptions.map(opt => opt.value) : []
                                                                                            }));
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">Fees($)</label>
                                                                                <input type="number" name="fees" value={addressData?.fees} onChange={handleAddressChange} id="" className="form-control new-control-frm px-5" placeholder="enter pin code" />
                                                                                <div className="contact-add-icon">
                                                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faCircleDollarToSlot} /> </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label>Languages</label>
                                                                                <div className="select-wrapper">
                                                                                    <Select
                                                                                        options={languageOptions}
                                                                                        isMulti
                                                                                        required
                                                                                        name="language"
                                                                                        value={language}
                                                                                        classNamePrefix="custom-select"
                                                                                        placeholder="Select language(s)"
                                                                                        onChange={(selectedOptions) => {
                                                                                            // selectedOptions is an array of { value, label }
                                                                                            setAddressData(prev => ({
                                                                                                ...prev,
                                                                                                language: selectedOptions ? selectedOptions.map(opt => opt.value) : []
                                                                                            }));
                                                                                        }}
                                                                                    />
                                                                                </div>

                                                                                {/* <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm ">
                                                                            <select ref={selectRef} multiple ></select>
                                                                            </div> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                                                            <div className="custom-frm-bx">
                                                                                <label htmlFor="">About You</label>
                                                                                <textarea name="aboutYou" value={addressData?.aboutYou} onChange={handleAddressChange} id="" className="form-control new-control-frm"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="profile-btm-footer">
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div>
                                                                            <button className="nw-thm-btn outline">Back</button>
                                                                        </div>
                                                                        <div>
                                                                            <button className="thm-btn">Save & Next</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </section>}
        </>
    )
}

export default DoctorEditProfile