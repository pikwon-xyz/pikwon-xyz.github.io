import React from "react";
import { Link } from 'react-router-dom';

const TOSPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="name">pikwon terms of service</div>
        <div className="terms">
          Welcome to pikwon ("the App"). Please read these Terms of Service
          ("Terms") carefully before using the App. By accessing or using the
          App, you agree to be bound by these Terms and our{" "}
          <Link to="./policy.html">Privacy Policy</Link>. If you do not agree
          with any part of these Terms, please do not use the App.
          <div className="section">Acceptance of Terms</div>
          By downloading, installing, or using the App, you acknowledge that you
          have read, understood, and agree to be bound by these Terms. These
          Terms constitute a legally binding agreement between you and pikwon.
          If you do not agree to these Terms, you may not use the App.
          <div className="section">Beta App Disclaimer</div>
          Please note that the App is currently in beta testing. As such, the
          App may undergo changes, including but not limited to the removal or
          resetting of data, at any point in time if necessary. By using the
          App, you acknowledge and accept that any data you submit or create
          within the App may be subject to removal or reset.
          <div className="section">User Registration</div>
          To use certain features of the App, you must create an account and
          provide accurate, complete, and up-to-date information as requested
          during the registration process. You are solely responsible for
          maintaining the confidentiality of your account information and for
          all activities that occur under your account. You agree to notify
          pikwon immediately of any unauthorized use of your account or any
          other breach of security.
          <div className="section">User-Generated Content</div>
          The App allows you to post, select, or share text content ("User
          Content"). You understand that you are solely responsible for the User
          Content you create, and you retain all ownership rights in your User
          Content. However, by posting User Content on the App, you grant pikwon
          a non-exclusive, worldwide, royalty-free, sublicensable, and
          transferable license to use, modify, reproduce, distribute, display,
          and perform your User Content in connection with the operation of the
          App and pikwon's business.
          <div className="section">Acceptable Use</div>
          When using the App, you agree not to:
          <ul>
            <li>
              Post or transmit any User Content that is unlawful, harmful,
              threatening, abusive, harassing, defamatory, vulgar, obscene,
              invasive of another's privacy, or otherwise objectionable;
            </li>
            <li>
              Impersonate any person or entity, or falsely state or otherwise
              misrepresent your affiliation with a person or entity;
            </li>
            <li>
              Post or transmit any User Content that infringes upon any
              third-party intellectual property rights;
            </li>
            <li>
              Use the App in any manner that could interfere with, disrupt,
              negatively affect, or inhibit other users from using the App, or
              that could damage, disable, overburden, or impair the functioning
              of the App;
            </li>
            <li>
              Engage in any unauthorized access to or use of the App, or any
              accounts, servers, or networks connected to the App;
            </li>
            <li>
              Collect or store personal data about other users without their
              express consent;
            </li>
            <li>
              Circumvent, disable, or otherwise interfere with any
              security-related features of the App;
            </li>
            <li>Use the App for any illegal or unauthorized purpose.</li>
          </ul>
          <div className="section">Intellectual Property</div>
          The App and its original content (excluding User Content) are and will
          remain the exclusive property of pikwon and its licensors. The App is
          protected by copyright, trademark, and other laws of both the country
          of your residence and foreign countries. You agree not to reproduce,
          modify, distribute, sell, or exploit any portion of the App without
          the express written permission of pikwon.
          <div className="section">Data Sharing</div>
          You acknowledge and agree that pikwon may share the data submitted via
          the App with external parties for purposes such as data analysis,
          marketing, and improving the App's functionality. pikwon will handle
          your data in accordance with its{" "}
          <Link to="./policy.html">Privacy Policy</Link>.
          <div className="section">Termination</div>
          pikwon may, in its sole discretion, terminate or suspend your access
          to and use of the App, with or without cause or notice, including if
          pikwon believes that you have violated these Terms. Upon termination,
          your right to access or use the App will immediately cease, and pikwon
          may delete or disable your account and any User Content associated
          with it.
          <div className="section">Disclaimer of Warranty</div>
          The App is provided on an "as-is" and "as available" basis without any
          warranty, either express or implied. pikwon does not warrant that the
          App will be uninterrupted, error-free, or free from harmful
          components. You use the App at your own risk.
          <div className="section">Limitation of Liability</div>
          To the maximum extent permitted by applicable law, pikwon and its
          officers, directors, employees, agents, partners, and licensors shall
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages, including but not limited to damages for loss of
          profits, goodwill, use, data, or other intangible losses arising out
          of or in connection with your use of the App.
          <div className="section">Governing Law</div>
          These Terms shall be subject to the exclusive jurisdiction of the
          federal and state courts located within the United States, without
          regard to its conflict of law principles.
          <div className="section">Entire Agreement</div>
          These Terms constitute the entire agreement between you and pikwon
          regarding your use of the App and supersede any prior or
          contemporaneous understandings. If you have any questions or concerns
          about these Terms, please contact us at{" "}
          <a href="mailto:hello@pikwon.xyz">hello@pikwon.xyz</a>.
        </div>
      </div>
      <footer>
        <Link style={{ color: "black" }} to="/">
          pikwon
        </Link>
      </footer>
    </>
  );
};

export default TOSPage;
