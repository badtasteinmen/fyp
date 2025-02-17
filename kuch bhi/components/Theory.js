import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

import backgroundImage from "../assets/back.png"; // Replace with your image path

  //  { type: "image", value: require("../assets/preamble.jpg") },

const units = [
  {
    title: "Unit 1: The Preamble and Fundamental Concepts",
    content: [
      {
        type: "text",
        value:
          "The preamble serves as an introductory statement outlining the guiding principles, values, and objectives of the Constitution. It emphasizes justice, liberty, equality, and fraternity, reflecting the aspirations of the people of India,",
      },
      { type: "image", value: require("../assets/preamble.jpg") },
      {
        type: "text",
        value:
          "We, the people of India: Symbolizes democracy and popular sovereignty,",
      },
      { type: "text", value: "Sovereign: India is free and independent," },
      {
        type: "text",
        value: "Socialist: Ensures social and economic equality,",
      },
      { type: "text", value: "Secular: Equal respect for all religions," },
      {
        type: "text",
        value: "Democratic: Representatives elected through free elections,",
      },
      { type: "text", value: "Republic: President elected, not hereditary," },
      { type: "text", value: "Justice: Promotes equality and fair treatment," },
      {
        type: "text",
        value:
          "Liberty: Guarantees freedom of thought, expression, and worship,",
      },
      {
        type: "text",
        value:
          "Equality: Ensures equal rights and opportunities for all citizens,",
      },
      {
        type: "text",
        value: "Fraternity: Promotes unity and individual dignity,",
      },
      {
        type: "text",
        value:
          "In summary, the Preamble of the Indian Constitution encapsulates the core ideals of justice, liberty, equality, and fraternity, which guide the nation in its democratic governance and social policies. It reflects the aspirations of the people of India and serves as the foundation for the Constitution’s values and goals,",
      },
      { type: "text", value: "1.2: Doctrine of Basic Structure" },
      {
        type: "text",
        value:
          "This judicial principle restricts Parliament from amending the Constitution’s core features, ensuring its fundamental framework remains intact. Introduced in the Kesavananda Bharati case (1973), it safeguards democracy, fundamental rights, and separation of powers,",
      },
      {
        type: "text",
        value:
          "The doctrine of basic structure is a judicial principle developed by the Supreme Court of India, which states that certain fundamental features or basic structures of the Indian Constitution cannot be altered or destroyed through amendments by Parliament. While the Constitution can be amended to adapt to changing needs and circumstances, this doctrine places a limitation on Parliament's power under Article 368, which provides the mechanism for amending the Constitution,",
      },
      { type: "text", value: "Origin of the Doctrine" },
      {
        type: "text",
        value:
          "The doctrine of basic structure was first articulated in the landmark Kesavananda Bharati v. State of Kerala case in 1973. The Supreme Court, in this case, held that while Parliament has broad powers to amend the Constitution, it cannot alter its basic structure or framework. This doctrine was a response to concerns that unrestricted amendment powers could lead to the erosion of fundamental rights and the democratic structure of the Constitution,",
      },
      { type: "text", value: "Key Components of the Basic Structure" },
      { type: "text", value: "Supremacy of the Constitution," },
      { type: "text", value: "Republican and democratic form of government," },
      { type: "text", value: "Secularism," },
      { type: "text", value: "Separation of powers," },
      { type: "text", value: "Judicial review," },
      { type: "text", value: "Federalism," },
      { type: "text", value: "Unity and integrity of the nation," },
      { type: "text", value: "Sovereignty of India," },
      { type: "text", value: "Individual freedom and fundamental rights," },
      { type: "text", value: "Importance of the Doctrine" },
      { type: "text", value: "Preserving the essence of the Constitution," },
      { type: "text", value: "Checks on parliamentary power," },
      { type: "text", value: "Upholding democracy and individual rights," },
      { type: "text", value: "Key Cases Involving the Doctrine" },
      { type: "text", value: "Kesavananda Bharati v. State of Kerala (1973)," },
      { type: "text", value: "Indira Nehru Gandhi v. Raj Narain (1975)," },
      { type: "text", value: "Minerva Mills v. Union of India (1980)," },
      {
        type: "text",
        value:
          "Conclusion: The doctrine of basic structure plays a critical role in safeguarding the core values of the Indian Constitution, ensuring that they are protected from any changes that might undermine the democratic and republican character of the nation. It provides a powerful check on legislative authority, preserving the constitutional framework for future generations,",
      },
      {
        type: "text",
        value: "1.3: Salient Features of the Indian Constitution",
      },
      {
        type: "text",
        value:
          "The Constitution of India is a comprehensive and detailed document that lays down the legal and institutional framework for governance in India. It is unique in many respects, reflecting the country's diverse social, cultural, and political landscape. Below are the salient features of the Indian Constitution,",
      },
      {
        type: "text",
        value:
          "Lengthiest Written Constitution: The Constitution of India is the longest written constitution in the world. It originally had 395 articles, 22 parts, and 8 schedules. Over time, through various amendments, it has expanded to include more articles and schedules,",
      },
      {
        type: "text",
        value:
          "Sovereign, Socialist, Secular, Democratic, Republic: The Preamble declares India to be a sovereign, socialist, secular, democratic republic, signifying that India is free from external control, aims for equality, and treats all religions equally,",
      },
      {
        type: "text",
        value:
          "Federal System with Unitary Bias: India has a federal structure with powers divided between the Union and State governments, though the Union holds more power, especially during emergencies,",
      },
      {
        type: "text",
        value:
          "Parliamentary Form of Government: India follows a parliamentary system of government where the Prime Minister and Council of Ministers are responsible to the Lok Sabha (House of the People),",
      },
      {
        type: "text",
        value:
          "Fundamental Rights: The Constitution guarantees several fundamental rights, such as equality, freedom of expression, and religious freedom,",
      },
      {
        type: "text",
        value:
          "Directive Principles of State Policy (DPSP): The DPSPs are guidelines for the state to follow in order to promote social welfare, though they are not enforceable by law,",
      },
      {
        type: "text",
        value:
          "Fundamental Duties: Added in 1976, these duties highlight moral obligations for citizens, including respecting the Constitution and protecting the environment,",
      },
      {
        type: "text",
        value:
          "Independent Judiciary and Judicial Review: The judiciary is independent, with powers to review laws that are unconstitutional, ensuring the protection of citizens' rights,",
      },
      {
        type: "text",
        value:
          "Single Citizenship: Every Indian citizen enjoys the same rights across the country, promoting national unity,",
      },
      {
        type: "text",
        value:
          "Secular State: The government treats all religions equally and guarantees the right to practice any religion,",
      },
      {
        type: "text",
        value:
          "Universal Adult Suffrage: All citizens above the age of 18 can vote, regardless of caste, gender, or religion,",
      },
      {
        type: "text",
        value:
          "Bicameral Legislature: The Parliament consists of the Lok Sabha (lower house) and Rajya Sabha (upper house),",
      },
      {
        type: "text",
        value:
          "Emergency Provisions: The Constitution allows for emergencies, such as national, state, and financial emergencies, providing special powers to the government,",
      },
      {
        type: "text",
        value:
          "Amendment Procedure: The Constitution can be amended through Article 368, with certain provisions being immutable, as per the basic structure doctrine,",
      },
      {
        type: "text",
        value:
          "Provisions for Minorities and Weaker Sections: Special provisions exist for the protection and upliftment of minorities and weaker sections, including reservations,",
      },
      {
        type: "text",
        value:
          "Official Language: Hindi is the official language, but English is also used for official purposes, and states may have their own official languages,",
      },
      {
        type: "text",
        value:
          "Conclusion: These salient features reflect the adaptability and comprehensiveness of the Indian Constitution, ensuring a balance between individual rights and national unity, while safeguarding democratic values and justice,",
      },
      {
        type: "text",
        value: "1.4: Key Characteristics of the Indian Constitution",
      },
      {
        type: "text",
        value:
          "The Constitution of India has several defining characteristics that make it a unique and robust legal document. These characteristics ensure that it not only provides a framework for governance but also protects the rights and freedoms of its citizens,",
      },
      {
        type: "text",
        value:
          "Written Constitution: The Constitution is a written document, clearly outlining the powers and duties of the government and citizens,",
      },
      {
        type: "text",
        value:
          "Lengthiest Constitution: The Constitution is the longest written Constitution, originally with 395 articles and 8 schedules,",
      },
      {
        type: "text",
        value:
          "Sovereign, Socialist, Secular, Democratic Republic: The Preamble declares India as a sovereign, socialist, secular, democratic republic,",
      },
      {
        type: "text",
        value:
          "Federal Structure with Unitary Bias: The federal system with a unitary tilt during emergencies,",
      },
      {
        type: "text",
        value:
          "Parliamentary System of Government: The real executive power is vested in the Council of Ministers headed by the Prime Minister,",
      },
      {
        type: "text",
        value:
          "Fundamental Rights: The Constitution guarantees a set of fundamental rights to protect civil liberties,",
      },
      {
        type: "text",
        value:
          "Directive Principles of State Policy (DPSP): Provides guidelines for the state to follow in the promotion of welfare and equality,",
      },
      {
        type: "text",
        value:
          "Fundamental Duties: Moral obligations for citizens to respect national symbols, protect the environment, and uphold the unity of India,",
      },
      {
        type: "text",
        value:
          "Independent Judiciary: An independent judiciary that has judicial review powers to protect the Constitution,",
      },
      {
        type: "text",
        value:
          "Single Citizenship: India practices the principle of single citizenship, ensuring equal rights and duties for all citizens,",
      },
      {
        type: "text",
        value:
          "Secularism: The state does not favor any religion and ensures religious freedom,",
      },
      {
        type: "text",
        value:
          "Universal Adult Suffrage: Every citizen over the age of 18 has the right to vote,",
      },
      {
        type: "text",
        value:
          "Bicameral Legislature: The Parliament consists of two houses – Lok Sabha and Rajya Sabha,",
      },
      {
        type: "text",
        value:
          "Emergency Provisions: Emergency provisions allow the central government to assume wide powers during national or state crises,",
      },
      {
        type: "text",
        value:
          "Amendability: The Constitution can be amended to meet changing needs, but the basic structure remains intact,",
      },
      {
        type: "text",
        value:
          "Special Provisions for Certain States: Provisions for special treatment for states like Jammu and Kashmir (Article 370, now abrogated),",
      },
      {
        type: "text",
        value:
          "Provisions for Minority Protection: Provisions to protect the rights of minorities, scheduled castes, tribes, and other backward classes,",
      },
      {
        type: "text",
        value:
          "Official Language: Hindi is the official language, but English is also used for official purposes, with states having the freedom to use their own languages,",
      },
      {
        type: "text",
        value:
          "Conclusion: The characteristics of the Indian Constitution reflect its democratic, federal, and secular nature while ensuring flexibility and rigidity in governance, catering to the diverse socio-political landscape of India",
      },
    ],
  },
  {
    title: "Unit 2: Fundamental Rights, Duties, and DPSPs",
    content: [
      { type: "text", value: "2.1: Fundamental Rights" },
      {
        type: "text",
        value:
          "The Fundamental Rights guaranteed by the Constitution of India are enshrined in Part III (Articles 12 to 35). These rights are essential for the overall development of individuals and are justiciable, meaning that citizens can approach the courts for their enforcement. Here is the list of Fundamental Rights:",
      },
      { type: "text", value: "Right to Equality (Articles 14-18):" },
      {
        type: "text",
        value:
          "Article 14: Equality before the law and equal protection of the laws.",
      },
      {
        type: "text",
        value:
          "Article 15: Prohibition of discrimination on grounds of religion, race, caste, sex, or place of birth.",
      },
      {
        type: "text",
        value:
          "Article 16: Equality of opportunity in matters of public employment.",
      },
      { type: "text", value: "Article 17: Abolition of untouchability." },
      {
        type: "text",
        value:
          "Article 18: Abolition of titles, except military and academic distinctions.",
      },
      { type: "text", value: "Right to Freedom (Articles 19-22):" },
      {
        type: "text",
        value: "Article 19: Protection of six fundamental freedoms:",
      },
      {
        type: "text",
        value:
          "Freedom of speech and expression, Freedom to assemble peaceably and without arms, Freedom to form associations or unions, Freedom to move freely throughout the territory of India, Freedom to reside and settle in any part of India, Freedom to practice any profession, or to carry on any occupation, trade, or business.",
      },
      {
        type: "text",
        value:
          "Article 20: Protection in respect of conviction for offenses (no ex post facto law, no double jeopardy, and protection against self-incrimination).",
      },
      {
        type: "text",
        value: "Article 21: Protection of life and personal liberty.",
      },
      {
        type: "text",
        value:
          "Article 21A: Right to education (free and compulsory education for children between the ages of 6 and 14 years).",
      },
      {
        type: "text",
        value:
          "Article 22: Protection against arrest and detention in certain cases, including rights of the arrested persons.",
      },
      { type: "text", value: "Right against Exploitation (Articles 23-24):" },
      {
        type: "text",
        value: "Article 23: Prohibition of human trafficking and forced labor.",
      },
      {
        type: "text",
        value:
          "Article 24: Prohibition of child labor in factories, mines, or hazardous employment for children below 14 years.",
      },
      { type: "text", value: "Right to Freedom of Religion (Articles 25-28):" },
      {
        type: "text",
        value:
          "Article 25: Freedom of conscience and the right to freely profess, practice, and propagate religion.",
      },
      {
        type: "text",
        value: "Article 26: Freedom to manage religious affairs.",
      },
      {
        type: "text",
        value:
          "Article 27: Freedom from payment of taxes for the promotion of any religion.",
      },
      {
        type: "text",
        value:
          "Article 28: Freedom from attending religious instruction or worship in certain educational institutions.",
      },
      {
        type: "text",
        value: "Cultural and Educational Rights (Articles 29-30):",
      },
      {
        type: "text",
        value:
          "Article 29: Protection of interests of minorities to conserve their culture, language, and script.",
      },
      {
        type: "text",
        value:
          "Article 30: Right of minorities to establish and administer educational institutions.",
      },
      { type: "text", value: "Right to Constitutional Remedies (Article 32):" },
      {
        type: "text",
        value:
          "Article 32: Right to move the Supreme Court or High Courts for the enforcement of fundamental rights. It is also known as the 'Right to Constitutional Remedies' or the 'heart and soul of the Constitution,' as termed by Dr. B.R. Ambedkar.",
      },
      {
        type: "text",
        value:
          "The courts can issue writs like habeas corpus, mandamus, prohibition, quo warranto, and certiorari to enforce these rights.",
      },
      {
        type: "text",
        value:
          "Conclusion: These Fundamental Rights are crucial in safeguarding the liberties of individuals in India, ensuring equality, freedom, protection from exploitation, and the promotion of cultural diversity. They are enforceable by the courts, and their violation can be challenged in court through Article 32 or Article 226 (in High Courts).",
      },
      {
        type: "text",
        value: "2.2: Fundamental Duties and Directive Principles",
      },
      {
        type: "text",
        value:
          "The Fundamental Duties of Indian citizens are listed in Article 51A under Part IV-A of the Constitution. These were added by the 42nd Amendment Act, 1976, to promote a sense of moral obligation and civic responsibility among citizens. While these duties are not legally enforceable, they are considered essential for the proper functioning of society.",
      },
      { type: "text", value: "General Fundamental Duties (Article 51A):" },
      {
        type: "text",
        value:
          "To abide by the Constitution and respect its ideals and institutions, the National Flag, and the National Anthem.",
      },
      {
        type: "text",
        value:
          "To cherish and follow the noble ideals that inspired the national struggle for freedom.",
      },
      {
        type: "text",
        value:
          "To uphold and protect the sovereignty, unity, and integrity of India.",
      },
      {
        type: "text",
        value:
          "To defend the country and render national service when called upon to do so.",
      },
      {
        type: "text",
        value:
          "To promote harmony and the spirit of common brotherhood among all the people of India, transcending religious, linguistic, regional, or sectional diversities; and to renounce practices derogatory to the dignity of women.",
      },
      {
        type: "text",
        value: "To value and preserve the rich heritage of India’s culture.",
      },
      {
        type: "text",
        value:
          "To protect and improve the natural environment, including forests, lakes, rivers, and wildlife, and to have compassion for living creatures.",
      },
      {
        type: "text",
        value:
          "To develop the scientific temper, humanism, and the spirit of inquiry and reform.",
      },
      {
        type: "text",
        value: "To safeguard public property and to abjure violence.",
      },
      {
        type: "text",
        value:
          "To strive toward excellence in all spheres of individual and collective activity, so that the nation constantly rises to higher levels of endeavor and achievement.",
      },
      {
        type: "text",
        value:
          "To provide opportunities for education to children between the ages of six and fourteen (for parents or guardians).",
      },
      {
        type: "text",
        value:
          "Conclusion: While the Fundamental Duties apply to all citizens, engineers have specific responsibilities to uphold these duties through their profession. Their work has a direct impact on the development, sustainability, and security of the nation, and by adhering to these duties, they contribute positively to society and the advancement of the country.",
      },
      {
        type: "text",
        value: "2.3: Directive Principles of State Policy (DPSPs)",
      },
      {
        type: "text",
        value:
          "The Directive Principles of State Policy (DPSP), outlined in Part IV of the Indian Constitution, are guidelines for the state to follow in order to achieve social and economic justice. Although they are non-justiciable (i.e., they cannot be enforced in a court of law), they are fundamental in the governance of the country.",
      },
      {
        type: "text",
        value:
          "Conclusion: In general, while Fundamental Rights are enforceable and hold a high place in the constitutional scheme, Directive Principles have, in specific circumstances, prevailed or been given priority, particularly when they aim to promote social and economic justice or protect public welfare. The judiciary has balanced these two parts of the Constitution by emphasizing that neither should be seen in isolation, and both are meant to complement each other for the overall development of the country.",
      },
    ],
  },
  {
    title: "Unit 3: Constitutional Amendments",
    content: [
      { type: "text", value: "3.1: Constitutional Amendments" },
      {
        type: "text",
        value:
          "India's Constitution has been amended several times to address evolving political, social, and economic needs. As of now, there are 105 constitutional amendments. Below is an outline of some of the most significant constitutional amendments:",
      },
      { type: "text", value: "First Amendment Act, 1951" },
      {
        type: "text",
        value:
          "Introduced restrictions on freedom of speech and expression. Empowered the state to make special provisions for the advancement of socially and economically backward classes.",
      },
      { type: "text", value: "Seventh Amendment Act, 1956" },
      {
        type: "text",
        value:
          "Reorganized the states on a linguistic basis. Introduced changes in the structure of states and union territories.",
      },
      { type: "text", value: "Ninth Amendment Act, 1960" },
      {
        type: "text",
        value:
          "Facilitated the transfer of certain territories to Pakistan under the 1958 agreement.",
      },
      { type: "text", value: "Tenth Amendment Act, 1961" },
      {
        type: "text",
        value: "Incorporated Dadra and Nagar Haveli into the Union of India.",
      },
      { type: "text", value: "Fourteenth Amendment Act, 1962" },
      {
        type: "text",
        value:
          "Included Puducherry (Pondicherry) as a Union Territory of India.",
      },
      { type: "text", value: "Twenty-Fourth Amendment Act, 1971" },
      {
        type: "text",
        value:
          "Affirmed the power of Parliament to amend any part of the Constitution, including Fundamental Rights. Ensured that Article 368 allows amendments to the Constitution.",
      },
      { type: "text", value: "Twenty-Fifth Amendment Act, 1971" },
      {
        type: "text",
        value:
          "Curtailed the right to property as a fundamental right by amending Article 31.",
      },
      { type: "text", value: "Thirty-First Amendment Act, 1973" },
      {
        type: "text",
        value:
          "Increased the number of seats in the Lok Sabha from 525 to 545.",
      },
      { type: "text", value: "Thirty-Ninth Amendment Act, 1975" },
      {
        type: "text",
        value:
          "Placed certain election disputes involving the President, Vice-President, Prime Minister, and Speaker of the Lok Sabha beyond the jurisdiction of the judiciary.",
      },
      {
        type: "text",
        value: "Forty-Second Amendment Act, 1976 (Mini-Constitution)",
      },
      {
        type: "text",
        value:
          "Added the terms “Socialist” and “Secular” to the Preamble. Increased the power of the central government and curtailed the powers of the judiciary. Made Directive Principles of State Policy (DPSP) superior to Fundamental Rights in certain cases. Added Fundamental Duties under Article 51A.",
      },
      { type: "text", value: "Forty-Fourth Amendment Act, 1978" },
      {
        type: "text",
        value:
          "Restored civil liberties and curtailed some powers of the executive that were expanded during the Emergency. Right to Property was removed from Fundamental Rights and made a legal right under Article 300A. Reaffirmed judicial review of laws.",
      },
      {
        type: "text",
        value: "Fifty-Second Amendment Act, 1985 (Anti-Defection Law)",
      },
      {
        type: "text",
        value:
          "Introduced the Anti-Defection Law under Tenth Schedule, disqualifying MPs and MLAs who defect from one party to another.",
      },
      { type: "text", value: "Sixty-First Amendment Act, 1989" },
      {
        type: "text",
        value:
          "Reduced the voting age from 21 to 18 years for both Lok Sabha and state legislative assembly elections.",
      },
      {
        type: "text",
        value: "Seventy-Third Amendment Act, 1992 (Panchayati Raj)",
      },
      {
        type: "text",
        value:
          "Gave constitutional status to Panchayati Raj Institutions. Introduced Part IX of the Constitution, containing provisions related to Panchayats. Reserved seats for SCs, STs, and women in local government bodies.",
      },
      {
        type: "text",
        value: "Seventy-Fourth Amendment Act, 1992 (Municipalities)",
      },
      {
        type: "text",
        value:
          "Gave constitutional status to Urban Local Bodies (Municipalities). Introduced Part IXA to the Constitution, focusing on the governance of cities and towns.",
      },
      {
        type: "text",
        value: "Eighty-Sixth Amendment Act, 2002 (Right to Education)",
      },
      {
        type: "text",
        value:
          "Made education a fundamental right under Article 21A, providing free and compulsory education to children between the ages of 6 and 14.",
      },
      { type: "text", value: "Ninety-First Amendment Act, 2003" },
      {
        type: "text",
        value:
          "Limited the size of the Council of Ministers in the central and state governments to 15% of the total members of the Lok Sabha or the Legislative Assembly.",
      },
      { type: "text", value: "Ninety-Ninth Amendment Act, 2014 (NJAC)" },
      {
        type: "text",
        value:
          "Established the National Judicial Appointments Commission (NJAC) for appointing judges to the Supreme Court and High Courts. Later struck down by the Supreme Court as unconstitutional, reaffirming the collegium system.",
      },
      { type: "text", value: "One Hundredth Amendment Act, 2015" },
      {
        type: "text",
        value:
          "Facilitated the exchange of territories between India and Bangladesh to settle border disputes.",
      },
      {
        type: "text",
        value: "One Hundred and First Amendment Act, 2016 (GST)",
      },
      {
        type: "text",
        value:
          "Introduced the Goods and Services Tax (GST), a unified indirect tax system replacing multiple indirect taxes. Created the GST Council for regulating and managing GST.",
      },
      {
        type: "text",
        value: "One Hundred and Third Amendment Act, 2019 (EWS Quota)",
      },
      {
        type: "text",
        value:
          "Introduced 10% reservation for Economically Weaker Sections (EWS) in educational institutions and public employment.",
      },
      { type: "text", value: "One Hundred and Fourth Amendment Act, 2020" },
      {
        type: "text",
        value:
          "Extended the reservation of seats for Scheduled Castes (SCs) and Scheduled Tribes (STs) in the Lok Sabha and state assemblies for another 10 years. Ended the reserved seats for Anglo-Indians in the Lok Sabha and state legislative assemblies.",
      },
      { type: "text", value: "One Hundred and Fifth Amendment Act, 2021" },
      {
        type: "text",
        value:
          "Restored the power of state governments to identify and notify Socially and Educationally Backward Classes (SEBCs), after it was diluted by the Supreme Court in the Maratha reservation case.",
      },
      { type: "text", value: "3.2: Centre-State Relations" },
      {
        type: "text",
        value:
          "The Centre-State relationship in India refers to the distribution of powers, functions, and responsibilities between the Union (Central) Government and the State Governments, as outlined in the Constitution of India. This relationship is crucial in a federal system like India's, where both the center and the states have their own spheres of authority. The Centre-State relations can be broadly categorized into three main areas:",
      },
      { type: "text", value: "Legislative Relations (Articles 245-255)" },
      {
        type: "text",
        value:
          "These define how legislative powers are divided between the Centre and the states. Key elements include:",
      },
      {
        type: "text",
        value:
          "Three Lists under the Seventh Schedule: Union List, State List, and Concurrent List.",
      },
      {
        type: "text",
        value:
          "Residuary Powers: The Parliament has the exclusive authority to legislate on matters not mentioned in any of the three lists.",
      },
      { type: "text", value: "Repugnancy Doctrine" },
      {
        type: "text",
        value:
          "If there is a conflict between central law and state law on a matter in the Concurrent List, the central law prevails unless the state law has received Presidential assent.",
      },
      { type: "text", value: "Administrative Relations (Articles 256-263)" },
      {
        type: "text",
        value:
          "These define how administrative powers and responsibilities are distributed between the Centre and the states. Key elements include:",
      },
      { type: "text", value: "Distribution of Executive Power" },
      {
        type: "text",
        value:
          "The executive power of the Union extends to matters on which Parliament can legislate, and the executive power of the States extends to matters on which State Legislatures can legislate.",
      },
      { type: "text", value: "Control of the Union over States" },
      {
        type: "text",
        value:
          "The Centre can give directions to the states in the case of infrastructure, protection, and ensuring compliance with laws.",
      },
      { type: "text", value: "All-India Services" },
      {
        type: "text",
        value:
          "Uniformity in administrative standards through services like IAS, IPS, and IFS.",
      },
      { type: "text", value: "Financial Relations (Articles 268-293)" },
      {
        type: "text",
        value:
          "These determine the financial distribution and sharing of resources between the Centre and states. Key elements include:",
      },
      {
        type: "text",
        value: "Division of Taxes: Union Taxes, State Taxes, and Shared Taxes.",
      },
      {
        type: "text",
        value:
          "Grants-in-Aid: Financial aid provided by the Centre to states, especially those with limited resources.",
      },
      { type: "text", value: "Finance Commission" },
      {
        type: "text",
        value:
          "Constituted to recommend how tax revenues should be shared between the Centre and the states.",
      },
      { type: "text", value: "Other Relations" },
      {
        type: "text",
        value:
          "Additional provisions, such as Emergency Provisions and Zonal Councils, further shape Centre-State Relations.",
      },
      { type: "text", value: "3.3: Purposes of Constitutional Amendments" },
      {
        type: "text",
        value:
          "Constitutional amendments in India serve several key purposes, including:",
      },
      { type: "text", value: "Strengthening Democracy and Governance" },
      {
        type: "text",
        value:
          "Many amendments have aimed to strengthen the democratic framework, governance structures, and the relationship between different branches of government.",
      },
      { type: "text", value: "Enhancing Social Justice and Equality" },
      {
        type: "text",
        value:
          "Amendments have promoted social equality by addressing historical injustices and ensuring opportunities for underprivileged sections of society.",
      },
      { type: "text", value: "Ensuring Cooperative Federalism" },
      {
        type: "text",
        value:
          "Amendments have improved the functioning of India’s federal structure and the relationship between the Centre and the States.",
      },
      { type: "text", value: "Economic Reforms and Redistribution" },
      {
        type: "text",
        value:
          "Amendments focused on economic restructuring, resource allocation, and promoting social welfare.",
      },
      { type: "text", value: "Judicial and Legislative Reforms" },
      {
        type: "text",
        value:
          "Amendments aimed at addressing issues related to judicial independence, accountability, and the relationship between the legislature and judiciary.",
      },
      {
        type: "text",
        value: "Addressing National Security and Emergency Situations",
      },
      {
        type: "text",
        value:
          "Amendments responded to security and emergency needs to ensure the integrity and stability of the nation.",
      },
      { type: "text", value: "Promoting Inclusion and Representation" },
      {
        type: "text",
        value:
          "Amendments enhanced representation of historically marginalized groups and ensured their inclusion in the political process.",
      },
      {
        type: "text",
        value:
          "These amendments reflect India’s efforts to balance democracy, social justice, federalism, economic development, and national security.",
      },
    ],
  },
  {
    title: "Unit 4: Centre-State Relations",
    content: [
      { type: "text", value: "4.1: Electoral Rights" },
      {
        type: "text",
        value:
          "Electoral rights are fundamental to the functioning of any democratic system, as they ensure that citizens have the power to participate in choosing their representatives and shaping the policies of their government. In India, electoral rights are an integral part of the democratic process and are protected by the Constitution. These rights not only empower individuals but also play a crucial role in maintaining the legitimacy, accountability, and inclusiveness of the political system.",
      },
      { type: "text", value: "Importance of Electoral Rights" },
      {
        type: "text",
        value:
          "Foundation of Democracy: Electoral rights form the core of democratic governance. They give citizens the power to elect their representatives, thus ensuring that the government reflects the will of the people. Through elections, citizens express their sovereignty, reinforcing the concept of a government of the people, by the people, and for the people.",
      },
      {
        type: "text",
        value:
          "Political Participation: Voting is the primary means by which citizens participate in the political process. It enables individuals to choose leaders who will represent their interests and work on policies that reflect the people's needs. Political participation fosters a sense of belonging, responsibility, and involvement in public affairs.",
      },
      {
        type: "text",
        value:
          "Accountability of Government: Electoral rights ensure that elected officials remain accountable to the people. Since elections are held periodically, representatives must seek the approval of the electorate to continue in office. This process holds politicians accountable for their actions and encourages them to fulfill their promises. If they fail to perform, voters have the right to remove them from office through elections.",
      },
      {
        type: "text",
        value:
          "Safeguard of Fundamental Rights: Electoral rights serve as a safeguard for fundamental rights by ensuring that the government remains answerable to the people. An elected government is more likely to respect and protect the civil liberties and freedoms of its citizens. If the government violates these rights, voters can replace it in the next election.",
      },
      {
        type: "text",
        value:
          "Expression of Public Will: Elections provide a structured way for the public to express its political will. Through voting, citizens influence the policies, laws, and direction of governance. It ensures that majority opinion prevails while safeguarding the rights of minorities. Electoral rights ensure that every vote counts, promoting a system where decisions are made based on collective public opinion.",
      },
      {
        type: "text",
        value:
          "Peaceful Change of Government: Elections offer a peaceful means of transferring power. In a democratic system, changes in government happen through the ballot rather than through violence or revolution. Electoral rights ensure that political transitions are smooth, stable, and legitimate, preventing social unrest and political instability.",
      },
      {
        type: "text",
        value:
          "Representation of Diverse Groups: Electoral rights ensure the representation of diverse groups within society, including minorities, marginalized communities, and underrepresented groups. This is crucial in India, where the population is highly diverse in terms of caste, religion, language, and culture. Electoral systems like reserved seats for Scheduled Castes (SCs) and Scheduled Tribes (STs) in legislatures ensure that marginalized groups have a voice in the democratic process.",
      },
      {
        type: "text",
        value:
          "Promotion of Political Awareness: The exercise of electoral rights encourages citizens to stay informed about political issues, candidates, and government policies. This promotes a more politically aware and educated electorate, which is essential for the health of democracy. Elections often trigger public debates and discussions, raising awareness about social, economic, and political matters.",
      },
      {
        type: "text",
        value:
          "Strengthening Rule of Law: Electoral rights reinforce the rule of law by ensuring that the government is formed through a constitutional and legal process. It legitimizes the authority of the government and ensures that governance is based on the consent of the governed, rather than on arbitrary or authoritarian control. The regular exercise of electoral rights ensures that democratic institutions are strong and operate within the framework of the law.",
      },
      {
        type: "text",
        value:
          "Equality and Non-Discrimination: Electoral rights promote political equality, ensuring that every citizen, regardless of their socio-economic background, has an equal say in the governance of the country. In India, where universal adult suffrage grants voting rights to all citizens over 18 years, electoral rights promote equality and inclusiveness. Each vote carries the same weight, irrespective of the voter’s caste, religion, gender, or financial status.",
      },
      {
        type: "text",
        value:
          "Empowerment of Citizens: Voting gives citizens a sense of empowerment as they directly influence the political process. This empowerment is essential in developing a civic-minded society where citizens are aware of their rights and responsibilities. The act of voting reinforces the idea that the government is answerable to the people and must work in their interests.",
      },
      {
        type: "text",
        value:
          "Protection Against Authoritarianism: Electoral rights act as a bulwark against authoritarianism by ensuring that political power is periodically subject to the will of the people. They provide a mechanism for removing leaders who abuse power or fail to govern effectively, thus preventing the rise of autocratic rule. In democracies like India, the right to vote serves as a critical check on the concentration of power in a single authority.",
      },
      { type: "text", value: "Electoral Rights in India" },
      {
        type: "text",
        value:
          "Right to Vote (Article 326): The Constitution of India guarantees the right to vote to every citizen aged 18 and above through the system of universal adult suffrage. This ensures that every eligible citizen, regardless of caste, religion, gender, or economic status, can participate in elections and have a say in choosing the government.",
      },
      {
        type: "text",
        value:
          "Right to Contest Elections: Citizens have the right to contest elections for legislative bodies, subject to certain qualifications (such as age, citizenship, and absence of disqualifications). This ensures that anyone with the necessary qualifications can represent the people and work toward the welfare of society.",
      },
      {
        type: "text",
        value:
          "Right to Free and Fair Elections: The Election Commission of India is an independent body responsible for ensuring free and fair elections. It safeguards electoral rights by maintaining an impartial and transparent election process, ensuring that voters can exercise their rights without coercion, fear, or fraud.",
      },
      {
        type: "text",
        value:
          "Protection of Electoral Rights: The Representation of the People Act, 1951 outlines the legal framework for elections in India and provides for the protection of electoral rights, including the conduct of elections, qualifications for voters, and the prevention of electoral malpractices.",
      },
    ],
  },

  // {
  //   title: "Unit 4: Centre-State Relations",
  //   content: [
  //     { type: "text", value: "4.1: Electoral Rights" },
  //     {
  //       type: "text",
  //       value:
  //         "Electoral rights are fundamental to the functioning of any democratic system, as they ensure that citizens have the power to participate in choosing their representatives and shaping the policies of their government. In India, electoral rights are an integral part of the democratic process and are protected by the Constitution. These rights not only empower individuals but also play a crucial role in maintaining the legitimacy, accountability, and inclusiveness of the political system.",
  //     },
  //     { type: "image", value: require("../assets/preamble.jpg") }, // Example image URL
  //     { type: "text", value: "Importance of Electoral Rights" },
  //     { type: "image", value: require("../assets/preamble.jpg") },
  //     {
  //       type: "text",
  //       value:
  //         "Foundation of Democracy: Electoral rights form the core of democratic governance.",
  //     },
  //     // Add more content as needed
  //   ],
  // },
];

const Theory = ({ navigation }) => {
  const toggleUnit = (index) => {
    const unit = units[index]; // Get the unit data
    navigation.navigate("Unit", { unit }); // Pass the unit as a parameter
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Select Unit</Text>
        {units.map((unit, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => toggleUnit(index)} // Call the toggleUnit function with the index
              style={styles.unitOption}
            >
              <Text style={styles.unitText}>{unit.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#06038D",
    textAlign: "center",
    marginBottom: 20,
  },
  unitOption: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
  },
  unitText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#06038D",
  },
});

export default Theory;
