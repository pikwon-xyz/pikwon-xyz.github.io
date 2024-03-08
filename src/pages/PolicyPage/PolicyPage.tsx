import React from "react";
import { Link } from "react-router-dom";

const PolicyPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="name">pikwon privacy policy</div>
        <div className="terms">
          <div className="section">Effective Date: 6/13/2024</div>
          <p>
            This Privacy Policy ("Policy") explains how pikwon ("we," "us," or
            "our") collects, uses, and discloses information from users ("you"
            or "your") of the pikwon mobile application ("App"). We are
            committed to protecting your privacy and ensuring the security of
            the information you provide while using our App. By using the App,
            you consent to the data practices described in this Policy.
          </p>
          <div className="section">Beta App Disclaimer</div>
          <p>
            Please note that the App is currently in beta testing. As such, the
            App may undergo changes, including but not limited to the removal or
            resetting of data, at any point in time if necessary. By using the
            App, you acknowledge and accept that any data you submit or create
            within the App may be subject to removal or reset.
          </p>
          <div className="section">We Collect</div>
          <ul>
            <li>
              Personal Information: When you register and create an account on
              the App, we may collect certain personal information, such as your
              name, email address, and other optional details you provide.
            </li>
            <li>
              User Content: The App allows you to post, select, or share text
              content ("User Content"). We collect and store the User Content
              you provide on the App.
            </li>
            <li>
              Usage Data: We may automatically collect certain information about
              your use of the App, including your device information, IP
              address, operating system, app version, and usage statistics. This
              information is collected through cookies, log files, and similar
              technologies.
            </li>
          </ul>
          <div className="section">Use of Collected Information</div>
          <ul>
            <li>
              Provide and Improve the App: We use the information we collect to
              provide and maintain the App's functionality, personalize your
              user experience, and improve the overall performance and features
              of the App.
            </li>
            <li>
              Communication: We may use your contact information to send you
              updates, notifications, and other communications related to the
              App's operation, such as service announcements or important
              changes to this Policy.
            </li>
            <li>
              Data Analysis: We may analyze and aggregate the collected
              information to understand user preferences, trends, and usage
              patterns. This analysis may be conducted by us or in collaboration
              with third-party analytics providers.
            </li>
            <li>
              Sharing with Third Parties: We may share your information with
              trusted third-party service providers who assist us in operating,
              analyzing, and improving the App. These third parties are
              obligated to maintain the confidentiality and security of your
              information.
            </li>
            <li>
              Legal Compliance: We may disclose your information if required by
              law or in response to valid requests by public authorities (e.g.,
              law enforcement agencies, courts, regulatory bodies).
            </li>
          </ul>
          <div className="section">Data Security</div>
          <p>
            We implement reasonable security measures to protect the information
            we collect and store. However, please note that no method of
            transmission or storage is completely secure. Therefore, while we
            strive to use commercially acceptable means to protect your
            information, we cannot guarantee its absolute security.
          </p>
          <div className="section">Your Choices</div>
          <ul>
            <li>
              Account Settings: You can review and update your account
              information within the App's settings. Please ensure that your
              account information is accurate and up to date.
            </li>
            <li>
              Communications: You may choose to opt-out of receiving
              non-essential communications from us by following the instructions
              provided in those communications or by contacting us directly.
            </li>
            <li>
              Data Access and Deletion: You can request access to the personal
              information we hold about you or request the deletion of your
              personal information by contacting us. However, please note that
              certain information may be retained for legal, administrative, or
              legitimate business purposes.
            </li>
          </ul>
          <div className="section">Children's Privacy</div>
          <p>
            The App is not intended for use by individuals under the age of 13.
            We do not knowingly collect personal information from children under
            13. If we become aware that we have inadvertently collected personal
            information from a child under 13 without parental consent, we will
            take reasonable steps to delete such information.
          </p>
          <div className="section">Third-Party Links and Services</div>
          <p>
            The App may contain links to third-party websites, services, or
            applications that are not owned or controlled by us. This Policy
            does not apply to those third-party platforms. We encourage you to
            review the privacy practices of any third-party platforms you access
            through the App.
          </p>
          <div className="section">Updates to this Policy</div>
          <p>
            We reserve the right to update or modify this Policy at any time,
            and any changes will be effective upon posting the revised version.
            We will notify you of any material changes by posting a prominent
            notice on the App or by sending you an email notification. Your
            continued use of the App after the effective date of the revised
            Policy constitutes your acceptance of the updated terms.
          </p>
          <div className="section">Contact Us</div>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at{" "}
            <a href="mailto:hello@pikwon.xyz">hello@pikwon.xyz</a>.
          </p>
          <p>
            By using the App, you acknowledge that you have read and understood
            this Privacy Policy and agree to the collection, use, and disclosure
            of your information as described herein.
          </p>
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

export default PolicyPage;
