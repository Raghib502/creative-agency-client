import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-start contact">
        <div className="col-md-4 text-left offset-md-1 mt-5">
            <h3>Let us handle your<br/> project, professionally. </h3>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
        </div>
        <div className="col-md-6 mt-5">
        <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your email Address "/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name/company name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="form-group text-left">
                           <button type="button" className="btn btn-dark"> Send </button>
                       </div>
                  </form>
                   
        </div>
        <footer className="copyRight">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </footer>
    </main>
    );
};

export default Contact;