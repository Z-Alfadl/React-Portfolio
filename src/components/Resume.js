import React from "react";
// import "bootstrap/js/src/"
export default function Resume() {
  return (
    <div>
      <div className="shadow w-75 mx-auto my-4 rounded border">
        <div className="text-center w-75 mx-auto">
          <h2>Languages</h2>
          <ul className="list-group list-group-horizontal row">
            <li className="list-group-item col-sm-3">HTML</li>
            <li className="list-group-item col-sm-3">CSS</li>
            <li className="list-group-item col-sm-3">Javascript</li>
            <li className="list-group-item col-sm-3">SQL</li>
          </ul>
        </div>
        <div className="text-center my-5">
          <h2>Technologies</h2>
          <div className="container rounded my-5">
            <div className="row">
              <div className="col-sm-5 skills mx-auto my-2 rounded shadow tech">
                <ul className="d-flex flex-column p-0">
                  <h3>Front-end</h3>
                  <li className="align-middle">React</li>
                  <li className="align-middle">Bootstrap</li>
                  <li className="align-middle">Jquery</li>
                  <li className="align-middle">Handlebars</li>
                </ul>
              </div>
              <div className="col-sm-5 skills mx-auto rounded shadow">
                <h3>Back-end</h3>
                <ul className="d-flex flex-column p-0">
                  <li>APIs</li>
                  <li>REST</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MySQL, Sequelize</li>
                  <li>MongoDB, Mongoose</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
