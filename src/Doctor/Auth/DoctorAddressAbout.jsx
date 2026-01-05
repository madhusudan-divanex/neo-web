import {
    faBuilding,
    faBuildingFlag,
    faChevronLeft,
    faDollarSign,
    faEarth,
    faHospital,
    faLanguage,
    faLocationDot,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getApiData, getSecureApiData, securePostData } from "../../Services/api";
import { languageOptions, specialtyOptions } from "../../Services/globalFunction";
import Select from "react-select";
import { toast } from "react-toastify";
import Loader from "../../Loader/Loader";

function DoctorAddressAbout() {
    const navigate=useNavigate()
    const userId = localStorage.getItem('userId')
    const [loading, setLoading] = useState(false)
    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [formData, setFormData] = useState({
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
    const handleChange = (e) => {
        const { type, name, value, files } = e.target;
        setFormData(prev => ({
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
    useEffect(() => {
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await securePostData('doctor/about', formData)
            if (response.success) {
                toast.success('Records saved')
                navigate('/doctor/kyc-message')
            }
        } catch (error) {

        } finally{
            setLoading(false)
        }
    };
    async function fetchAboutData() {
        setLoading(true)
        const result = await getSecureApiData(`doctor/about/${localStorage.getItem('userId')}`)
        if (result.success) {
            const data = result.data
            fetchStates(data?.countryId?.isoCode)
            fetchCities(data?.stateId?.isoCode)

            setFormData({ ...data, countryId: data?.countryId?._id, stateId: data?.stateId?._id, cityId: data?.cityId?._id })
        }setLoading(false)
    }
    useEffect(() => {
        if (userId) {
            fetchAboutData()
        }
    }, [userId])
    const treatmentValue =formData.treatmentAreas[0]!=='' && formData.treatmentAreas?.map(area => ({
        value: area,
        label: area
    }));
    const language =formData.language[0]!=='' && formData.language?.map(area => ({
        value: area,
        label: area
    }));


    return (
        <>
            {loading?<Loader/>
            :<section className="admin-login-section nw-hero-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="admin-pisture-bx">
                                <div className="position-relative">
                                    <Link to="/doctor/medical-license" className="login-back-btn"> <FontAwesomeIcon icon={faChevronLeft} /> </Link>
                                </div>

                                <img src="/doctor-pic.png" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 d-flex flex-column justify-content-center ">
                            <div className="nw-form-container">
                                <div className="login-logo">
                                    <img src="/logo.png" alt="" />
                                </div>

                                <div className="admin-vndr-login my-2">
                                    <h3 className="heading-grad">Address & About you</h3>

                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Organization / Hospital Name</label>
                                        <input type="text" name="hospitalName" value={formData?.hospitalName} onChange={handleChange} required className="form-control new-control-frm px-5" placeholder="Enter Organization / Hospital Name" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faHospital} /> </span>
                                        </div>
                                    </div>

                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Full Address</label>
                                        <input type="text" name="fullAddress" value={formData?.fullAddress} onChange={handleChange} required className="form-control new-control-frm px-5" placeholder="Enter Full Address" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faLocationDot} /> </span>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Country</label>
                                                <select required name="countryId" value={formData.countryId} onChange={handleChange} id="" className="form-select">
                                                    <option value="">---Select Country---</option>
                                                    {countries?.map((item, key) =>
                                                        <option value={item?._id} key={key}>{item?.name}</option>)}
                                                </select>
                                                {/* <input type="text" className="form-control new-control-frm px-5" placeholder="Enter Country" /> */}
                                                {/* <div className="contact-add-icon">
                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faEarth} /> </span>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-sm-12">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">State</label>
                                                <select required name="stateId" value={formData.stateId} onChange={handleChange} id="" className="form-select">
                                                    <option value="">---Select State---</option>
                                                    {states?.map((item, key) =>
                                                        <option value={item?._id} key={key}>{item?.name}</option>)}
                                                </select>
                                                {/* <div className="contact-add-icon">
                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faBuilding} /> </span>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-sm-12">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">City</label>
                                                <select required name="cityId" value={formData.cityId} onChange={handleChange} id="" className="form-select">
                                                    <option value="">---Select City---</option>
                                                    {cities?.map((item, key) =>
                                                        <option value={item?._id} key={key}>{item?.name}</option>)}
                                                </select>
                                                {/* <div className="contact-add-icon">
                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faBuildingFlag} /> </span>
                                                </div> */}
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-sm-12">
                                            <div className="custom-frm-bx">
                                                <label htmlFor="">Pin code</label>
                                                <input required type="number" name="pinCode" value={formData?.pinCode} onChange={handleChange} className="form-control new-control-frm px-5" placeholder="Enter Pin Code" />
                                                <div className="contact-add-icon">
                                                    <span className="nw-contact-icon"> <FontAwesomeIcon icon={faLocationDot} /> </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="custom-frm-bx">
                                        <label>Specialty</label>
                                        <div className="field custom-frm-bx mb-0 custom-select nw-custom-select admin-table-search-frm ">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faUser} /> </span>
                                            <select required className="nw-select" name="specialty" value={formData.specialty} onChange={handleChange}>
                                                <option>--Select--</option>
                                                {specialtyOptions?.map((item, key) =>
                                                    <option value={item?.value} key={key}>{item?.label}</option>)}
                                            </select>
                                        </div>
                                    </div>
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
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        treatmentAreas: selectedOptions ? selectedOptions.map(opt => opt.value) : []
                                                    }));
                                                }}
                                            />
                                        </div>
                                    </div>



                                    <div className="custom-frm-bx">
                                        <label htmlFor="">Fees($)</label>
                                        <input type="number" required name="fees" value={formData?.fees} onChange={handleChange} className="form-control new-control-frm px-5" placeholder="Enter Fees" />
                                        <div className="contact-add-icon">
                                            <span className="nw-contact-icon"> <FontAwesomeIcon icon={faDollarSign} /> </span>
                                        </div>
                                    </div>

                                    <div className="custom-frm-bx">
                                        <label>Languages</label>
                                        <div className="mb-0 ">
                                            {/* <span className="nw-contact-icon"> <FontAwesomeIcon icon={faLanguage} /> </span> */}
                                            {/* <select className="nw-select">
                                                <option>--Select--</option>

                                            </select> */}
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
                                                        setFormData(prev => ({
                                                            ...prev,
                                                            language: selectedOptions ? selectedOptions.map(opt => opt.value) : []
                                                        }));
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>


                                    <div className="custom-frm-bx">
                                        <label htmlFor="">About You</label>
                                        <textarea required name="aboutYou" value={formData?.aboutYou} onChange={handleChange} id="" className="form-control new-control-frm"></textarea>
                                    </div>

                                    <div className="mt-3 text-center">
                                        <button type="submit" className="nw-thm-btn w-100">Continue</button>
                                    </div>



                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}



        </>
    )
}

export default DoctorAddressAbout