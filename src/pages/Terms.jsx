import React, { useEffect, useState } from "react";
import { formBackground } from "../assets/images";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

// Define the universal array outside the component
export const termsSections = [
  {
    name: "Introduction",
    href: "#Introduction",
    content: (
      <p>
        Welcome to Safe Herbs (“Website”), the official website of Safe Herbs
        (hereafter referred to as “our”). Use of the Website is subject to the
        following terms and conditions, as amended from time to time (the
        “Terms”), which govern the use of and interaction with the Website and
        its respective services (the “Service” or “Services”) by all users.
        These Terms are to be read together with our{" "}
        <span>
          <a href="#PrivacyPolicy" className="text-highlight font-bold">
            Privacy Policy
          </a>
        </span>{" "}
        and any supplemental terms, conditions, or disclaimers provided in the
        pages of the Website. <br /> <br /> PLEASE READ THESE TERMS CAREFULLY
        BEFORE USING THE WEBSITE AND/OR ANY SERVICE. YOU ACKNOWLEDGE YOUR
        ACCEPTANCE OF THESE TERMS BY VISITING OR USING THE WEBSITE AND SERVICE.
        IF YOU DO NOT AGREE TO THESE TERMS, YOU ARE NOT AUTHORIZED TO ACCESS OR
        USE THE WEBSITE OR ANY OF ITS SERVICES.
      </p>
    ),
  },
  {
    name: "Use of Products and Services",
    href: "#ProductandServices",
    content: (
      <p>
        At Safe Herbs, our mushroom supplements and other products are intended
        solely as collectible, adult, novelty souvenirs. If we are concerned
        that any customer will be using, eating, swallowing, planting,
        germinating, or harvesting our products in a country where this is
        illegal, we have the right to refuse sales. Our products are sold with
        the condition that they not be used in any way that interferes with or
        directly goes against laws established in the country, city, or region
        where the purchaser resides.
        <br />
        <br />
        <strong>i. Age of Majority:</strong> The Website is intended for your
        use only if you are 21 years of age or older. If you do not fall within
        this category, you may be in breach of laws or regulations applicable in
        your province or country of residence or access, and you should leave
        the Website immediately. You may restrict access to this Website using
        content filtering software or by changing your computer settings (e.g.,
        browser or operating system), as appropriate.
        <br />
        <br />
        <strong>ii. Updates:</strong> Safe Herbs reserves the right to modify
        these Terms at any time, at its sole discretion. If Safe Herbs decides
        to change these Terms, Safe Herbs will post those changes here. We will
        also update the “Last Updated Date” at the top of these Terms. We
        encourage you to visit this section of the Website regularly to remain
        informed of any changes. If you do not agree to any changes that have
        been made, you must immediately stop using the Website and all Services.
      </p>
    ),
  },
  {
    name: "Conditions of Use",
    href: "#ConditionsofUse",
    content: (
      <p>
        Our Website and any of our Services are offered solely for your own
        personal, informational, or non-commercial use. By accessing the Website
        or any Service, you agree to only use the Website and Services for
        legitimate purposes in compliance with these Terms and all applicable
        laws and regulations. You represent and warrant that all information
        provided to us in relation to our Online Services is true and accurate.
        You acknowledge and agree that content posted by you will be publicly
        attributable to you. You further acknowledge and agree that once you
        post content, it may not be possible to delete the content. The Website
        may contain interactive services, including but not limited to
        discussion groups, news groups, bulletin boards, chat rooms, blogs, and
        other social networking features, such as the display of linked content,
        which may allow you to post, transmit, or submit information, including
        but not limited to writings, images, illustrations, audio recordings,
        and video recordings. We may or may not actively monitor postings on
        public forums. Similarly, we may or may not exercise editorial control
        over postings on any public forum. We may assign these Terms to anyone
        for any reason in our sole discretion without notice. You may not assign
        these Terms without our prior written consent.
      </p>
    ),
  },
  {
    name: "Prohibited Use",
    href: "#ProhibitedUse",
    content: (
      <p>
        In addition to the requirements set forth in other sections of these
        Terms, you agree not to access and/or use the Website or Services for
        any purpose not expressly authorized by these Terms and/or transmit or
        upload to the Website or any Service content that in any form or
        respect:
        <br />
        <br />
        <strong>i.</strong> Contravenes or violates any applicable laws or
        regulations, including, without limitation, criminal, intellectual
        property, privacy, competition, securities, and other laws and
        regulations.
        <br />
        <strong>ii.</strong> Constitutes an advertisement or solicitation of
        business of any kind, including but not limited to spam, chain letters,
        and pyramid schemes.
        <br />
        <strong>iii.</strong> Contains or constitutes software, computer
        programs, or routines of any kind, including but not limited to viruses,
        bots, worms, spiders, or offline readers.
        <br />
        <strong>iv.</strong> Enables hacking or permits any automated device,
        program, tool (including but not limited to robot, bot, spider,
        deep-link, other data-mining or harvesting processes) or any manual
        process that in any way would facilitate access, or allow the
        acquisition, copying, or monitoring of any portion of the Website,
        including all data and networks, without the prior express written
        consent of Safe Herbs.
        <br />
        <strong>v.</strong> Collects information about others, including but not
        limited to, users’ emails, passwords, or other account information.
      </p>
    ),
  },
  {
    name: "Privacy Policy",
    href: "#PrivacyPolicy",
    content: (
      <p>
        At Safe Herbs, your privacy is our priority. We are committed to
        protecting the confidentiality and security of your personal
        information. This Privacy Policy outlines how we collect, use, and
        safeguard your data when you use our website and services.
        <br />
        <br />
        <strong>1. Information We Collect:</strong> When you register or place
        an order with us, we collect the following personal information:
        <ul className="list-disc pl-5">
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Delivery address</li>
          <li>
            Payment information (processed securely via third-party payment
            processors)
          </li>
          <li>Order history and preferences</li>
        </ul>
        <br />
        <strong>2. How We Use Your Information:</strong> We use your information
        to:
        <ul className="list-disc pl-5">
          <li>Process and fulfill your orders discreetly</li>
          <li>
            Communicate with you regarding your order, shipping, or customer
            support
          </li>
          <li>Improve our services and user experience</li>
          <li>
            Send you updates, promotions, or relevant product information (only
            if you opt-in)
          </li>
        </ul>
        <br />
        <strong>3. Data Confidentiality & Discretion:</strong> We understand the
        sensitive nature of our products and guarantee:
        <ul className="list-disc pl-5">
          <li>All packaging is discreet with no identifying labels</li>
          <li>Your data is stored securely and encrypted where applicable</li>
          <li>
            Access to your data is restricted to authorized personnel only
          </li>
        </ul>
        <br />
        <strong>4. Third-Party Services:</strong> We may share necessary
        information with trusted third parties only for:
        <ul className="list-disc pl-5">
          <li>Payment processing (e.g., Venmo, Crypto, PayPal)</li>
          <li>
            Order fulfillment and delivery (e.g., postal/courier services)
          </li>
        </ul>
        We ensure these parties uphold strict privacy standards and do not use
        your data beyond the scope of our services.
        <br />
        <br />
        <strong>5. Your Rights:</strong> You have the right to:
        <ul className="list-disc pl-5">
          <li>Access, correct, or delete your personal data</li>
          <li>Withdraw consent for marketing communications at any time</li>
          <li>Request information on how your data is used</li>
        </ul>
        To exercise these rights, contact us at{" "}
        <a href="mailto:psychedeliestore@gmail.com">
          psychedeliestore@gmail.com
        </a>
        .
        <br />
        <br />
        <strong>6. Cookies & Tracking:</strong> We use cookies for essential
        website functionality, analytics, and to enhance your browsing
        experience. You can manage cookie preferences through your browser
        settings.
        <br />
        <br />
        <strong>7. Data Retention:</strong> We retain your data only for as long
        as necessary to fulfill the purposes stated above, or as required by
        law.
        <br />
        <br />
        <strong>8. Security Measures:</strong> We implement advanced security
        measures, including encryption, secure servers, and routine audits to
        protect your data from unauthorized access, alteration, or disclosure.
        <br />
        <br />
        <strong>9. Changes to This Policy:</strong> We may update this{" "}
        <span>
          <a href="#PrivacyPolicy" className="text-highlight font-bold">
            Privacy Policy
          </a>
        </span>{" "}
        from time to time. Any changes will be posted on this page with an
        updated effective date.
        <br />
        <br />
        <strong>10. Contact Us:</strong> If you have any questions or concerns
        about this{" "}
        <span>
          <a href="#PrivacyPolicy" className="text-highlight font-bold">
            Privacy Policy
          </a>
        </span>{" "}
        or our data practices, please contact us at:
        <ul className="list-disc pl-5">
          <li>
            Email:{" "}
            <a href="mailto:psychedeliestore@gmail.com">
              psychedeliestore@gmail.com
            </a>
          </li>
          <li>Facebook</li>
          <li>Mailing Address: [Insert Discreet Return Address]</li>
        </ul>
        <br />
        By using our website, you agree to the terms outlined in this{" "}
        <span>
          <a href="#PrivacyPolicy" className="text-highlight font-bold">
            Privacy Policy
          </a>
        </span>
      </p>
    ),
  },
  {
    name: "Links",
    href: "#Links",
    content: (
      <p>
        Our Website may contain links to third-party websites or resources. You
        acknowledge and agree that Safe Herbs is not responsible or liable for:
        <br />
        <strong>i.</strong> The availability or accuracy of such websites or
        resources.
        <br />
        <strong>ii.</strong> The content, products, or services on or available
        from such websites or resources.
        <br />
        Third-party websites or resources can include, but are not limited to,
        advertisements, promotional offers, or applications included in or made
        available on the Website. These third-party websites and resources are
        not owned or controlled by us.
      </p>
    ),
  },
  {
    name: "Copyright and Intellectual Property",
    href: "#CopyrightandIntellectualProperty",
    content: (
      <p>
        All information, content and materials made available by Safe Herbs
        through the Website or Service, including, without limitation, any
        computer code, design, text, drawings, photographs, graphics, sound
        recordings and video recordings, as well as any copyrights, trademarks,
        service marks, logos, patents, trade names or other intellectual
        property or proprietary rights comprising the Website and Services, or
        any component or element of the Website and Service (collectively, the
        “Content”) is the exclusive property of Safe Herbs and its license and
        is protected by U.S. and international copyright law. Safe Herbs is
        licensed to retain all rights in the Content of this Website. The
        Content is provided to you AS IS, without any representation or
        warranty, whether express or implied, for your informational, personal,
        non-commercial use and may not be modified, copied, distributed,
        downloaded, displayed, emailed, transmitted, sold, licensed, performed
        or otherwise exploited in any form or by any means, for any purpose
        whatsoever, in whole or in part, without the prior written consent of
        the respective owner thereof. You agree to not engage in the use,
        copying, distribution, transmission or modification of any of the
        Content for any commercial purpose. If you download or print a copy of
        the Content for personal use, you must retain all copyright and other
        proprietary notices contained therein. You agree not to circumvent,
        disable or otherwise interfere with the Website, Services or any of
        their related security features that prevent or restrict use or copying
        of any Content or enforce limitations on use of the Website, Services or
        the Content therein.
      </p>
    ),
  },
  {
    name: "Liability for Incorrect Payments",
    href: "#LiabilityforIncorrectPayments",
    content: (
      <p>
        Safe Herbs is not responsible for any incorrect or inaccurate
        information, whether caused by users of the Website, or by any of the
        equipment or programming associated with or utilized in the Website.
        Safe Herbs assumes no responsibility for any error, omission,
        interruption, deletion, defect, delay in operation or transmission,
        communications line failure, theft or destruction or unauthorized access
        to, or alteration of, any user communication. When you/the customer
        choose to pay via E- payment or cryptocurrency / Bitcoin (BTC) and
        accidentally send your payment to the wrong address due to not copying
        our Bitcoin Address correctly, no refunds will be made. Any mistake on
        the sender’s or customer’s side is completely their liability and
        responsibility.
      </p>
    ),
  },
  {
    name: "Disclaimers",
    href: "#Disclaimers",
    content: (
      <p>
        IF YOU RESIDE IN A JURISDICTION WHERE THIS SECTION OR PARTS HEREOF MAY
        NOT BE VALID BY VIRTUE OF LOCAL CONSUMER PROTECTION OR OTHER LAWS THEN
        PARTS OF ALL OF THIS SECTION MAY NOT APPLY TO YOU AND YOU MAINTAIN YOUR
        RECOURSES PROVIDED BY LAW. PLEASE READ THIS ENTIRE SECTION CAREFULLY.
        CERTAIN FEDERAL OR PROVINCIAL/TERRITORIAL LAWS MAY NOT ALLOW LIMITATIONS
        ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES.
        IF THESE LAWS APPLY TO YOU, YOU WILL HAVE THOSE MINIMUM RIGHTS AVAILABLE
        TO YOU UNDER THAT CONSUMER PROTECTION LAW AND THE FOLLOWING PROVISIONS
        IN THIS SECTION WILL NOT APPLY TO YOU. YOU AGREE THAT ALL CONTENT ON
        THIS WEBSITE AND ANY RELATED SERVICES ARE PROVIDED “AS IS” AND “AS
        AVAILABLE,” AND ALL USE OF THIS WEBSITE AND SERVICE IS AT YOUR OWN RISK.
        SAFE HERB DOES NOT GUARANTEE THE ACCURACY OF ITS CONTENT AND YOU AGREE
        TO ACCEPT ANY RISKS ASSOCIATED WITH THE USE OF THIS SERVICE ON AN ONLINE
        PLATFORM, INCLUDING, BUT NOT LIMITED TO, EXPOSURE TO VIRUSES, DAMAGING
        OR DISABLING CODE. SAFE HERB DISCLAIMS, AND YOU HEREBY WAIVE, ANY AND
        ALL WARRANTIES, CONDITIONS AND LIABILITIES OF SAFE HERB, WHETHER EXPRESS
        OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTY OR
        CONDITION OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
        QUALITY AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, YOU
        ACKNOWLEDGE THAT SAFE HERB DOES NOT GUARANTEE, REPRESENT OR WARRANT THAT
        THE WEBSITE AND ANY RELATED SERVICE WILL BE ACCESSIBLE WITHOUT
        INTERRUPTION OR THAT THE WEBSITE, SERVICE OR THE SERVER THAT THE WEBSITE
        AND SERVICE ARE AVAILABLE ON ARE ERROR-FREE, INCLUDING DEFECTS, DESIGN
        FLAWS, OMISSIONS, VIRUSES, OR OTHER HARMFUL COMPONENTS, AND THAT YOUR
        USE OF THE WEBSITE, SERVICE AND ANY CONTENT MADE AVAILABLE THROUGH THE
        WEBSITE OR SERVICE IS SOLELY AT YOUR OWN RISK. YOU ACKNOWLEDGE AND AGREE
        THAT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE ENTIRE RISK ARISING
        OUT OF YOUR ACCESS TO AND USE OF THE WEBSITE AND ANY RELATED SERVICE
        REMAINS WITH YOU.{" "}
      </p>
    ),
  },
  {
    name: "Limitation of Liability",
    href: "#LimitationofLiability",
    content: (
      <p>
        You expressly agree that the limitations and exclusions of liability and
        the disclaimers set forth herein will survive, and, subject to
        applicable laws, continue to apply in the case of, a fundamental breach
        or breaches, the failure of essential purpose of the contract, the
        failure of any exclusive remedy or termination of these Terms. TO THE
        FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, SAFE HERB AND ITS
        AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, LICENSORS, AND ANY
        OTHER PARTY INVOLVED IN CREATING, PRODUCING, SERVING, HOSTING,
        MAINTAINING AND/OR UPDATING THE WEBSITE, SERVICE OR ANY CONTENT THEREIN
        (COLLECTIVELY, THE “INVOLVED PARTIES”) DISCLAIM ALL LIABILITY WHETHER
        BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY,
        VICARIOUS LIABILITY OR OTHERWISE. THE INVOLVED PARTIES DO NOT ACCEPT ANY
        LIABILITY FOR ANY LOSS OR DAMAGE, INCLUDING DIRECT, INDIRECT, PUNITIVE,
        ACTUAL, CONSEQUENTIAL, INCIDENTAL, SPECIAL OR EXEMPLARY DAMAGES,
        RESULTING FROM OR IN CONNECTION WITH:
        <br />
        &nbsp;<strong>A.</strong> ANY USE OF, OR INABILITY TO USE THE WEBSITE,
        THE SERVICE, CONTENT OR OTHER MATERIALS IN OR ASSOCIATED WITH THE
        WEBSITE AND SERVICE; OR
        <br />
        &nbsp;<strong>B.</strong> ANY OTHER MATTER RELATING TO THE WEBSITE,
        SERVICE, CONTENT, THE MEMBER SUBMISSIONS, THIRD PARTY SOFTWARE,
        THIRD-PARTY PLATFORMS OR OTHER MATERIALS IN OR ASSOCIATED WITH THE
        WEBSITE AND SERVICE, REGARDLESS OF THE BASIS UPON WHICH LIABILITY IS
        CLAIMED AND EVEN IF THE INVOLVED PARTIES HAVE BEEN ADVISED OF, OR COULD
        HAVE FORESEEN, THE POSSIBILITY OF SUCH LOSS OR DAMAGE. WITHOUT
        LIMITATION, YOU ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING,
        REPAIR OR CORRECTION IN THE EVENT OF ANY SUCH LOSS OR DAMAGE.
      </p>
    ),
  },
  {
    name: "Health and Medical Disclaimer",
    href: "#HealthandMedicalDisclaimer",
    content: (
      <p>
        Safe Herbs does not provide any medical advice, diagnosis or treatment.
        The information provided on the Website and any related Service is for
        informational purposes only and is not intended to be a substitute for
        professional medical advice, diagnosis or treatment. You should always
        seek the advice of your physician or other qualified health provider
        with any questions you may have regarding a medical condition. Never
        disregard professional medical advice or delay in seeking it because of
        something you have read on the Website or any related Service.<br></br>
        All health or medical related content found on this Website is offered
        strictly for informational and educational purposes only and is not
        intended to cure, treat, or diagnosis any condition or disease. The
        content, information or Services on this Website are not intended,
        implied or construed to be a substitute for medical advice, diagnosis or
        treatment, nor should it in any way be used as a replacement for
        professional medical care, counseling or other professional services.
        This Website does not offer or give medical advice or provide medical or
        diagnostic services and Safe Herbs does not represent themselves as
        licensed professionals. No decision, action or inaction should be taken
        by you or anyone else based solely upon the information found within
        this Website, or any other linked site, without seeking the professional
        advice of a doctor or other licensed health or medical professional.
        Never disregard professional medical advice or delay seeking any
        necessary medical treatment based upon the information provided on this
        or any other website. This Website makes no representation and assumes
        no responsibility for the accuracy of information contained on or
        available through this Website, and such information is subject to
        change without notice. You are encouraged to confirm any information
        obtained from or through this Website with other sources, and review all
        information regarding any health or medical condition, concern,
        diagnosis or treatment with your primary care physician, or another
        licensed or appropriately credentialed health care worker or medical
        professional. This Website does not recommend, endorse or make any
        representation about the accuracy, reliability, efficacy,
        appropriateness or suitability of any products, procedures, treatments,
        remedies, Services, opinions, advice, health care providers, or any
        other information that may be contained on or available through this web
        site. Use of any of the content, information or Services contained in
        this website is at the sole choice and risk of the reader or
        participant. By using, accessing or viewing this Website, you agree that
        Safe Herbs will not be held responsible or liable for any course of
        action, treatment, diagnosis or resulting consequence of using the
        information provided on or through this Website, or by a third party
        website or affiliate website. Safe Herbs will not be held responsible or
        liable for any subsequent results or damages of any kind that result
        from the use or misuse of the information provided on or through this
        Website, or any third party or affiliate sites, including any decisions
        made, or actions or inaction based upon content or reliance of the
        information found on this or any other linked site.
      </p>
    ),
  },
  {
    name: "Indemnification",
    href: "#Indemnification",
    content: (
      <p>
        You shall release, defend, indemnify, and hold Safe Herbs and its
        affiliates and subsidiaries, and their officers, directors, employees
        and agents, harmless from and against any claims, liabilities, damages,
        losses, and expenses, including, without limitation, reasonable legal
        and accounting fees, arising out of or in any way connected with:
        <br></br>
        i.your access to or use of the Website or Services; or <br></br>
        ii.your violation of these Terms
      </p>
    ),
  },
  {
    name: "Governing Law",
    href: "#GoverningLaw",
    content: (
      <p>
        You expressly understand and agree to submit to the personal and
        exclusive jurisdiction of the courts of the country, state, province or
        territory determined solely by Safe Herbs to resolve any legal matter
        arising from the Terms and Conditions or related to your use of the Safe
        Herbs Website. If the court of law having jurisdiction rules that any
        provision of the agreement is invalid, then that provision will be
        removed from the Terms and Conditions and the remaining terms and
        conditions will continue to be valid in full force and effect.
      </p>
    ),
  },
  {
    name: "Termination of Website and/or Service",
    href: "#TerminationofWebsiteandorService",
    content: (
      <p>
        Safe herbs may discontinue at any time, without notice, the Website,
        Service, Content, materials, products and/or other services described on
        the Website or the availability thereof. Safe Herbs also reserves the
        right, in its sole discretion, to terminate these Terms and your access
        to all or part of the Website and/or Service with or without notice to
        you. Safe Herbs may also terminate or suspend your access to the Website
        and/or Service for any conduct that Safe Herbs, in its sole discretion,
        believes is in violation of these Terms or any applicable law or is
        harmful to the interests of another user, third party provider, Safe
        Herbs or its affiliates. Upon termination of these Terms, you will no
        longer be authorized to access the Website and/or Service. The
        provisions of these Terms that are intended to survive termination shall
        survive termination.
      </p>
    ),
  },
  {
    name: "Entire Agreement",
    href: "#EntireAgreement",
    content: (
      <p>
        These Terms and any policies or operating rules posted by us on the
        Website constitute the entire agreement and understanding between you
        and Safe Herbs with respect to the Website and Service, and supersede
        all prior or contemporaneous communications and proposals, whether
        electronic, oral or written, between you and Safe Herbs with respect to
        the Website and Service. Any failure of Safe Herbs to exercise or
        enforce any right or provision of these Terms shall not constitute a
        waiver of such right or provision.<br></br>
        In conclusion these Terms, the{" "}
        <span>
          <a href="#PrivacyPolicy" className="text-highlight font-bold">
            Privacy Policy
          </a>
        </span>
        , and any other terms or conditions expressly referred to therein,
        constitute the entire agreement between you and Safe Herbs regarding
        your use of the Website, Service and any other subject matter herein. If
        any portion of these Terms is declared or held unlawful, invalid, or
        unenforceable, then such portions of these Terms shall be deemed severed
        here from and shall not affect the validity or enforcement of the
        remainder of these Terms. We may, from time to time, offer you the
        opportunity to participate in or use other special services, events,
        contests, and so forth, both on and off the Website. By participating in
        any such special service, you agree to any and all special terms set
        forth in connection with any such service, in addition to these Terms.
        Website, or by a third party website or affiliate website. Safe Herbs
        will not be held responsible or liable for any subsequent results or
        damages of any kind that result from the use or misuse of the
        information provided on or through this Website, or any third party or
        affiliate sites, including any decisions made, or actions or inaction
        based upon content or reliance of the information found on this or any
        other linked site.
      </p>
    ),
  },
];

export default function Terms() {
  const [activeLink, setActiveLink] = useState(""); // State to track the active link
  const [navOpen, setNavOpen] = useState(false); // State to track the navigation menu
useEffect(() => {
  return () => {
    window.scrollTo(0, 0);
  };
}, []);
  const handleLinkClick = (href) => {
    setActiveLink(href); // Set the clicked link as active
    const targetElement = document.querySelector(href); // Select the target section
    if (targetElement) {
      const offset = 0; // Adjust this value if needed
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <section className="container relative flex flex-col mx-auto lg:mx-0 bg-light">
      {/* Header Image */}
      <div className="w-full h-[60vh] mx-auto">
        <img
          className="object-cover w-full h-full"
          src={formBackground}
          alt="Terms and Conditions"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-primary text-center">
        Terms and Conditions
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row w-full mx-auto">
        {/* Navigation Links */}
        <nav className="lg:w-1/4 ps-4 lg:ps-8 sticky top-16 lg:h-fit w-fit z-10 bg-light rounded-lg lg:shadow-lg lg:p-6">
          <button
            className="lg:hidden text-white bg-highlight px-4 py-2 rounded"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
          <ul
            className={`transition-all duration-300 ease-in-out ${
              navOpen ? "block" : "hidden"
            } lg:block`}
          >
            {termsSections.map((section) => (
              <li
                key={section.href}
                className={`cursor-pointer text-xl px-5 w-fit items-center font-semibold justify-start py-2 md:px-0 ${
                  activeLink === section.href
                    ? "text-highlight font-bold"
                    : "text-dark hover:text-highlight"
                }`}
              >
                <a
                  href={section.href}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleLinkClick(section.href);
                    setNavOpen(!navOpen);
                  }}
                  className="items-center justify-end gap-2 flex flex-row-reverse"
                >
                  {section.name}
                  <FaArrowRight
                    className={`${activeLink === section.href ? "" : "hidden"}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Terms Content */}
        <div className="lg:w-3/4 w-full mx-auto px-5 md:px-10 text-justify">
          {termsSections.map((section) => (
            <div id={section.href.slice(1)} key={section.href} className="mb-8">
              <h3 className="text-2xl font-bold mb-4">{section.name}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
