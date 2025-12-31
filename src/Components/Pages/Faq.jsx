import { faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Faq() {
    return (
        <>
            <section className="tp-breadcrum-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center mb-3">
                                <h4 className="lg_title">Faq</h4>
                            </div>
                            <div className="admin-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb custom-breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#" className="breadcrumb-link">
                                                <FontAwesomeIcon icon={faHome} />
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Faq
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <h3 className="heading-grad">Frequently Asked Question</h3>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="faq-content-bx">
                                <div className="accordion my-3" id="faqAccordion">


                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button faq-btn "
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqOne"
                                            >
                                                How do I book an appointment?
                                            </button>
                                        </h2>

                                        <div
                                            id="faqOne"
                                            className="accordion-collapse collapse show"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.
                                            </div>
                                        </div>
                                    </div>


                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button faq-btn collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqTwo"
                                            >
                                                Why do we use it?
                                            </button>
                                        </h2>

                                        <div
                                            id="faqTwo"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button faq-btn collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqThree"
                                            >
                                                Is my personal information secure?
                                            </button>
                                        </h2>

                                        <div
                                            id="faqThree"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button faq-btn collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqFour"
                                            >
                                                Can I cancel or reschedule my appointment?
                                            </button>
                                        </h2>

                                        <div
                                            id="faqFour"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button faq-btn collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqFive"
                                            >
                                                How do I find a specific doctor or specialist?
                                            </button>
                                        </h2>

                                        <div
                                            id="faqFive"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                            <div className="faq-content-bx">
                                <div className="accordion my-3" id="faqAccordion">


                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button faq-btn collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqSix"
                                            >
                                                How do I book an appointment?
                                            </button>
                                        </h2>

                                        <div
                                            id="faqSix"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.
                                            </div>
                                        </div>
                                    </div>


                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button faq-btn collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqSeven"
                                            >
                                                Why do we use it?
                                            </button>
                                        </h2>

                                        <div
                                            id="faqSeven"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button faq-btn collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqEight"
                                            >
                                                Is my personal information secure?
                                            </button>
                                        </h2>

                                        <div
                                            id="faqEight"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button faq-btn collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqNine"
                                            >
                                                Can I cancel or reschedule my appointment?
                                            </button>
                                        </h2>

                                        <div
                                            id="faqNine"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button
                                                className="accordion-button faq-btn collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#faqTen"
                                            >
                                                How do I find a specific doctor or specialist?
                                            </button>
                                        </h2>

                                        <div
                                            id="faqTen"
                                            className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Faq