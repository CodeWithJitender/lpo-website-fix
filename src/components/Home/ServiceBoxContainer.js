import React from 'react';

import serviceImage1 from "@/assets/images/service-image-1.jpg";
import serviceImage2 from "@/assets/images/service-image-2.jpg";
import serviceImage3 from "@/assets/images/service-image-3.jpg";
import serviceImage4 from "@/assets/images/service-image-4.jpg";
import serviceImage5 from "@/assets/images/service-image-5.jpg";
import serviceImage6 from "@/assets/images/service-image-6.jpg";
import serviceImage7 from "@/assets/images/service-image-7.jpg";
import serviceImage8 from "@/assets/images/service-image-8.jpg";
import serviceImage9 from "@/assets/images/service-image-9.jpg";
import serviceImage10 from "@/assets/images/service-image-10.jpg";

import ServiceBox from './ServiceBox';

const servicesArray = [
	{
		id: "01",
		title: "Real Estate Litigation",
		description: "From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
		contentBoxTitle: "Real estate law isn't just about property—it's about power.",
		image: serviceImage1,
	}, {
		id: "02",
		title: "Personal Injury",
		description: "Accidents happen, but accountability is non-negotiable. We draft demand letters with legal precision, ensuring your clients get the maximum compensation which they deserve.",
		contentBoxTitle: "Injury wasn't your clients' choice. Justice is.",
		image: serviceImage2,
	}, {
		id: "03",
		title: "Civil Litigation Support",
		description: "Every strong case starts with strategic documentation. From binding contracts to persuasive motions, we prepare the legal foundation that positions your clients for success.",
		contentBoxTitle: "Lawsuits aren't just won in court—they're built on paperwork.",
		image: serviceImage3,
	}, {
		id: "04",
		title: "Employment Law",
		description: "Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served.",
		contentBoxTitle: "Your clients' rights aren't optional. They're enforceable.",
		image: serviceImage4,
	}, {
		id: "05",
		title: "Workers' Compensation",
		description: "From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is bulletproof.",
		contentBoxTitle: "Injured on the job? We make sure the law works for you.",
		image: serviceImage5,
	}, {
		id: "06",
		title: "Contracts",
		description: "From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests.",
		contentBoxTitle: "A contract is only as strong as the words that bind it.",
		image: serviceImage6,
	}, {
		id: "07",
		title: "Business Litigation Support",
		description: "When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice.",
		contentBoxTitle: "In business, the fine print is where battles are won.",
		image: serviceImage7,
	}, {
		id: "08",
		title: "Immigration",
		description: "Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward.",
		contentBoxTitle: "Borders may divide, but the law unites.",
		image: serviceImage8,
	}, {
		id: "09",
		title: "Family Law",
		description: "Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you.",
		contentBoxTitle: "Family disputes need finesse, not just force.",
		image: serviceImage9,
	}, {
		id: "10",
		title: "Bankruptcy",
		description: "Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise.",
		contentBoxTitle: "Bankruptcy isn't the end. It's a fresh start.",
		image: serviceImage10,
	}, 
];

const ServiceBoxContainer = () => {
  return (
		servicesArray.map((service) => <ServiceBox key={service.id} {...service} />)
  );
};

export default ServiceBoxContainer;
