// import { useContext } from "react";

// import line from "../../assets/images/line.png";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
// import { SpinnerContext } from "../SpinnerContext";
// import Button from "../Button/Buttton";
import "./form.css";
import { companyDetails } from "../../../globals/constants";
const FormComponent = () => {
  //   const { setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    // setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "You have a new message from NEXTGENAI",
      body: emailBody,
    };

    await fetch("https://smtp-api-tawny.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Email sent successfully");
        reset();
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => "");
    // setSpinner(false));
  };
  return (
    <div className="form-container">
      <section className="form-wrapper">
        <div className="form-content">
          <div className="form-header">
            <div className="contact-info">
              <h6 className="contact-heading">Contact Us</h6>
            </div>
            <h2 className="form-title">Let’s Collaborate to Innovate</h2>
            <p className="form-description">
              At BlueBillionaire.ai, we’re committed to delivering technology
              solutions that drive business transformation. Contact us today to
              explore how our expertise can support your business goals.
            </p>
          </div>
          <form
            // onSubmit={handleSubmit(handleFormSubmit)}
            className="form-body"
          >
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-input"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Full name is required",
                    validate: (val) =>
                      val.trim() !== "" ? true : "Full name is required",
                  })}
                />
                <small className="form-error">{errors.name?.message}</small>
              </div>
              <div className="form-field">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Entered email is invalid",
                    },
                  })}
                />
                <small className="form-error">{errors.email?.message}</small>
              </div>
            </div>
            <div className="form-group">
              <div className="form-field">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="form-input"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/i,
                      message: "Entered phone number is invalid",
                    },
                  })}
                />
                <small className="form-error">{errors.phone?.message}</small>
              </div>
              <div className="form-field">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="form-input"
                  placeholder="Enter Subject"
                  {...register("subject", {
                    required: "Subject is required",
                    validate: (val) =>
                      val.trim() !== "" ? true : "Subject is required",
                  })}
                />
                <small className="form-error">{errors.subject?.message}</small>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-textarea"
                placeholder="Enter Message"
                rows="4"
                {...register("message", {
                  required: "Message is required",
                  validate: (val) =>
                    val.trim() !== "" ? true : "Message is required",
                })}
              />
              <small className="form-error">{errors.message?.message}</small>
            </div>
            <button disabled={isSubmitting} className="form-button">
              Send Message
              {/* <Button buttonName={"Send Message"} style={""} border={true} /> */}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormComponent;
