import React from "react";

import "./legal.css";
import { SlArrowLeft } from "react-icons/sl";

export default function Legalmeasures() {
  const redirect = (a) => {
    window.location.href = `/${a}`;
  };
  return (
    <div className="modules site-container">

      <button
        className="backb"
        onClick={() => redirect("module4")}
        style={{ position: "fixed" }}
      >
        <SlArrowLeft style={{ fontSize: "34px" }} />
      </button>
      <div className="ccontainer">
        <h1>Steps to Take if Your Child Experienced Abuse</h1>
        <ol>
          <li>
            <p>
              Ensure the Child's Safety and Well-being:
              <ul>
                <li>Remove them from the abusive situation if possible.</li>
                <li>Provide comfort and reassurance to the child.</li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Listen and Believe the Child:
              <ul>
                <li>
                  Create a safe and supportive environment for the child to
                  disclose what happened.
                </li>
                <li>Assure them that it's not their fault.</li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Seek Medical Attention:
              <ul>
                <li>
                  Take the child to a trusted healthcare provider for medical
                  examination and treatment.
                </li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Report the Abuse:
              <ul>
                <li>
                  Contact the police, Childline (1098), or the National
                  Commission for Protection of Child Rights (NCPCR).
                </li>
                <li>Provide detailed information about the abuse.</li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Document the Incident:
              <ul>
                <li>Keep detailed notes about the incident.</li>
                <li>Take photographs of any visible injuries as evidence.</li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Seek Legal Advice:
              <ul>
                <li>
                  Consult with a lawyer specializing in child protection or
                  family law.
                </li>
                <li>Understand your rights and legal options.</li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Provide Emotional Support:
              <ul>
                <li>Offer continuous emotional support to the child.</li>
                <li>Consider counseling or therapy for the child.</li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Cooperate with Authorities:
              <ul>
                <li>
                  Provide all necessary information and evidence to law
                  enforcement and child protection agencies.
                </li>
              </ul>
            </p>
          </li>
          <li>
            <p>
              Follow Up and Monitor the Child's Progress:
              <ul>
                <li>Stay actively involved in the child's recovery process.</li>
                <li>Monitor the child's emotional well-being closely.</li>
              </ul>
            </p>
          </li>
        </ol>
        <p>
          By following these steps, parents can ensure that their child receives
          the necessary support, protection, and justice in the aftermath of
          experiencing abuse.
        </p>
      </div>
    </div>
  );
}
