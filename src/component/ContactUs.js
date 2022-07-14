import React from 'react'
import Navbar from './Navbar';

const ContactUs = () => {
  return (
    <section>
        <div className="container">
            <Navbar/>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h2>Licensing and Bidding Eligibility</h2>
                    <h3>Why can't I bid on a lot?</h3>
                    <p className='fw-bold'>
                        First determine if you have a valid government-issued ID on file and that it has been processed by Copart.
                    </p>
                    <p>If you do not have a government-issued ID on file, click the "Upload License" button in the top right on the account information page.</p>
                    <p className='fw-bold'>Each province has specific licensing requirements</p>
                    <p>Find more licensing information on our licensing requirements page.</p>

                    <h3>What licenses do I need?</h3>
                    <p>To find detailed information about licensing requirements and the Copart licensing process, check out our licensing requirements page.</p>

                    <h2>Updating My Password</h2>
                    <h3>What happens if I forget my password?</h3>
                    <p>To reset your password, click the “Forgot User ID/Password” link on the log in page.</p>

                    <h1>Upload a License</h1>
                    <p>If you have not already uploaded a valid government-issued ID, or if you need to add a business license to your account, you can do so by using our License Uploader.</p>
                </div>
                <div className="col-md-6">
                    <h2>Additional Fees Charged to My Invoice</h2>
                    <h3>Are you unsure about additional fees charged to your invoice?</h3>
                    <p className='fw-bold'>Please reach out to the Copart location where the vehicle was sold.</p>
                    <p>Click here for a list of all Copart locations and their contact information.</p>

                    <h2>Terms on the Website</h2>
                    <h3>Do you have questions about terms used on Copart’s website?</h3>
                    <p>We have a glossary of common terms available to help members understand terms used by Copart.</p>

                    <h2>Selling a Vehicle</h2>
                    <h3>Are you looking for information on how you can sell a vehicle to Copart?</h3>
                    <p>Get a free quote, on our website.</p>

                    <h2>Payment Options</h2>
                    <h3>Looking for information about different payment options?</h3>
                    <p>You can find detailed information about each of our payment options page.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs;