import React from "react";

export default function Contact() {
  return (
    <div className="text-center my-4">
      <h2>Contact</h2>
      <div>
        <form className="rounded shadow w-50 mx-auto py-3">
          <div className="form-group">
            <label for="contactName">
              Name:
              <input name="contactName" className="form-control"></input>
            </label>
          </div>
          <div className="form-group">
            <label for="contactEmail">
              Email:
              <input name="contactEmail" type="email" className="form-control"></input>
            </label>
          </div>
          <div className="form-group">
            <label for="message">
              Message:
              <textarea name="message" type="textarea" className="form-control" rows="5" cols="30"></textarea>
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
      
    </div>
  );
}
