import React from "react";

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
import serviceImage11 from "@/assets/images/service-image-11.jpg";
import serviceImage12 from "@/assets/images/service-image-12.jpg";

import { routes } from "./routesPath";

export const servicesInfo = {
	"bankrupcy": {
		title: "Bankrupcy",
		heading: <>
			Strategic Support <br />
			for Injury Claims <br />
			That Win.</>,
		background: require("../assets/images/services-bg/bankrupcy.jpg"),
		description: {
			mainDescription: "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
			smallDesription: "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight."
		},
		casesSpecializedIn: [
			{
				id: "01",
				title: "Motor Vehicle Accidents Accidents",
				description: "Car, truck, bicycle and motorcycle accident claims.",
				image: require("../assets/images/service-1.jpg"),
			},
			{
				id: "02",
				title: "Medical Negligence & Malpractice",
				description: "Ensuring Compliance with Legal Standards.",
				image: require("../assets/images/service-2.jpg"),
			},
			{
				id: "03",
				title: "Slip & Fall or Trip and Fall Cases",
				description: "Highlightin`g Maximum Injury Compensation.",
				image: require("../assets/images/service-3.jpg"),
			},
			{
				id: "04",
				title: "Dog Bite",
				description: "Nerve damage, disfigurement, or long-term medical issues.",
				image: require("../assets/images/service-4.jpg"),
			},
			{
				id: "05",
				title: "Brain & Spinal Cord Injuries",
				description: "Securing Justice for Those with Devastating Injuries.",
				image: require("../assets/images/service-5.jpg"),
			},
			{
				id: "06",
				title: "Workplace & Construction Accidents",
				description: "Protecting Legal Rights for Workplace Injuries.",
				image: require("../assets/images/service-6.jpg"),
			}
		],
		accordianItems: [
			{
				header: {
					icon: require("../assets/icons/accordian-icon-1.png"),
					title: "Client Onboarding & Case Merit Evaluation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-2.png"),
					title: "Medical Record Retrieval & Summarization",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-3.png"),
					title: "Document Drafting & Discovery Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-4.png"),
					title: "Legal Research, Case Law Review & Legal Interpretation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-5.png"),
					title: "Litigation & Trial Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-6.png"),
					title: "Administrative Tasks",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}
		]
	},
	"real-estate-litigation": {
		title: "Real Estate Litigation",
		heading: <>
			Strategic Support <br />
			for Injury Claims <br />
			That Win.</>,
		background: require("../assets/images/services-bg/real-estate-litigation.jpg"),
		description: {
			mainDescription: "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
			smallDesription: "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight."
		},
		casesSpecializedIn: [
			{
				id: "01",
				title: "Motor Vehicle Accidents Accidents",
				description: "Car, truck, bicycle and motorcycle accident claims.",
				image: require("../assets/images/service-1.jpg"),
			},
			{
				id: "02",
				title: "Medical Negligence & Malpractice",
				description: "Ensuring Compliance with Legal Standards.",
				image: require("../assets/images/service-2.jpg"),
			},
			{
				id: "03",
				title: "Slip & Fall or Trip and Fall Cases",
				description: "Highlightin`g Maximum Injury Compensation.",
				image: require("../assets/images/service-3.jpg"),
			},
			{
				id: "04",
				title: "Dog Bite",
				description: "Nerve damage, disfigurement, or long-term medical issues.",
				image: require("../assets/images/service-4.jpg"),
			},
			{
				id: "05",
				title: "Brain & Spinal Cord Injuries",
				description: "Securing Justice for Those with Devastating Injuries.",
				image: require("../assets/images/service-5.jpg"),
			},
			{
				id: "06",
				title: "Workplace & Construction Accidents",
				description: "Protecting Legal Rights for Workplace Injuries.",
				image: require("../assets/images/service-6.jpg"),
			}
		],
		accordianItems: [
			{
				header: {
					icon: require("../assets/icons/accordian-icon-1.png"),
					title: "Client Onboarding & Case Merit Evaluation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-2.png"),
					title: "Medical Record Retrieval & Summarization",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-3.png"),
					title: "Document Drafting & Discovery Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-4.png"),
					title: "Legal Research, Case Law Review & Legal Interpretation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-5.png"),
					title: "Litigation & Trial Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-6.png"),
					title: "Administrative Tasks",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}
		]
	},
	"personal-injury": {
		title: "Personal Injury",
		heading: <>
			Strategic Support <br />
			for Injury Claims <br />
			That Win.</>,
		background: require("../assets/images/services-bg/personal-injury.jpg"),
		description: {
			mainDescription: "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
			smallDesription: "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight."
		},
		casesSpecializedIn: [
			{
				id: "01",
				title: "Motor Vehicle Accidents Accidents",
				description: "Car, truck, bicycle and motorcycle accident claims.",
				image: require("../assets/images/service-1.jpg"),
			},
			{
				id: "02",
				title: "Medical Negligence & Malpractice",
				description: "Ensuring Compliance with Legal Standards.",
				image: require("../assets/images/service-2.jpg"),
			},
			{
				id: "03",
				title: "Slip & Fall or Trip and Fall Cases",
				description: "Highlightin`g Maximum Injury Compensation.",
				image: require("../assets/images/service-3.jpg"),
			},
			{
				id: "04",
				title: "Dog Bite",
				description: "Nerve damage, disfigurement, or long-term medical issues.",
				image: require("../assets/images/service-4.jpg"),
			},
			{
				id: "05",
				title: "Brain & Spinal Cord Injuries",
				description: "Securing Justice for Those with Devastating Injuries.",
				image: require("../assets/images/service-5.jpg"),
			},
			{
				id: "06",
				title: "Workplace & Construction Accidents",
				description: "Protecting Legal Rights for Workplace Injuries.",
				image: require("../assets/images/service-6.jpg"),
			}
		],
		accordianItems: [
			{
				header: {
					icon: require("../assets/icons/accordian-icon-1.png"),
					title: "Client Onboarding & Case Merit Evaluation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-2.png"),
					title: "Medical Record Retrieval & Summarization",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-3.png"),
					title: "Document Drafting & Discovery Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-4.png"),
					title: "Legal Research, Case Law Review & Legal Interpretation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-5.png"),
					title: "Litigation & Trial Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-6.png"),
					title: "Administrative Tasks",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}
		]
	},
	"civil-litigation-support": {
		title: "Civil Litigation Support",
		heading: <>
			Strategic Support <br />
			for Injury Claims <br />
			That Win.</>,
		background: require("../assets/images/services-bg/civil-litigation.jpg"),
		description: {
			mainDescription: "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
			smallDesription: "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight."
		},
		casesSpecializedIn: [
			{
				id: "01",
				title: "Motor Vehicle Accidents Accidents",
				description: "Car, truck, bicycle and motorcycle accident claims.",
				image: require("../assets/images/service-1.jpg"),
			},
			{
				id: "02",
				title: "Medical Negligence & Malpractice",
				description: "Ensuring Compliance with Legal Standards.",
				image: require("../assets/images/service-2.jpg"),
			},
			{
				id: "03",
				title: "Slip & Fall or Trip and Fall Cases",
				description: "Highlightin`g Maximum Injury Compensation.",
				image: require("../assets/images/service-3.jpg"),
			},
			{
				id: "04",
				title: "Dog Bite",
				description: "Nerve damage, disfigurement, or long-term medical issues.",
				image: require("../assets/images/service-4.jpg"),
			},
			{
				id: "05",
				title: "Brain & Spinal Cord Injuries",
				description: "Securing Justice for Those with Devastating Injuries.",
				image: require("../assets/images/service-5.jpg"),
			},
			{
				id: "06",
				title: "Workplace & Construction Accidents",
				description: "Protecting Legal Rights for Workplace Injuries.",
				image: require("../assets/images/service-6.jpg"),
			}
		],
		accordianItems: [
			{
				header: {
					icon: require("../assets/icons/accordian-icon-1.png"),
					title: "Client Onboarding & Case Merit Evaluation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-2.png"),
					title: "Medical Record Retrieval & Summarization",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-3.png"),
					title: "Document Drafting & Discovery Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-4.png"),
					title: "Legal Research, Case Law Review & Legal Interpretation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-5.png"),
					title: "Litigation & Trial Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-6.png"),
					title: "Administrative Tasks",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}
		]
	},
	"employee-law": {
		title: "Employment Law",
		heading: <>
			Strategic Support <br />
			for Injury Claims <br />
			That Win.</>,
		background: require("../assets/images/services-bg/employement-law.jpg"),
		description: {
			mainDescription: "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
			smallDesription: "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight."
		},
		casesSpecializedIn: [
			{
				id: "01",
				title: "Motor Vehicle Accidents Accidents",
				description: "Car, truck, bicycle and motorcycle accident claims.",
				image: require("../assets/images/service-1.jpg"),
			},
			{
				id: "02",
				title: "Medical Negligence & Malpractice",
				description: "Ensuring Compliance with Legal Standards.",
				image: require("../assets/images/service-2.jpg"),
			},
			{
				id: "03",
				title: "Slip & Fall or Trip and Fall Cases",
				description: "Highlightin`g Maximum Injury Compensation.",
				image: require("../assets/images/service-3.jpg"),
			},
			{
				id: "04",
				title: "Dog Bite",
				description: "Nerve damage, disfigurement, or long-term medical issues.",
				image: require("../assets/images/service-4.jpg"),
			},
			{
				id: "05",
				title: "Brain & Spinal Cord Injuries",
				description: "Securing Justice for Those with Devastating Injuries.",
				image: require("../assets/images/service-5.jpg"),
			},
			{
				id: "06",
				title: "Workplace & Construction Accidents",
				description: "Protecting Legal Rights for Workplace Injuries.",
				image: require("../assets/images/service-6.jpg"),
			}
		],
		accordianItems: [
			{
				header: {
					icon: require("../assets/icons/accordian-icon-1.png"),
					title: "Client Onboarding & Case Merit Evaluation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-2.png"),
					title: "Medical Record Retrieval & Summarization",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-3.png"),
					title: "Document Drafting & Discovery Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-4.png"),
					title: "Legal Research, Case Law Review & Legal Interpretation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-5.png"),
					title: "Litigation & Trial Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-6.png"),
					title: "Administrative Tasks",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}
		]
	},
	"workers-compensation": {
		title: "Workers Compensation",
		heading: <>
			Strategic Support <br />
			for Injury Claims <br />
			That Win.</>,
		background: require("../assets/images/services-bg/workers-compensation.jpg"),
		description: {
			mainDescription: "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
			smallDesription: "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight."
		},
		casesSpecializedIn: [
			{
				id: "01",
				title: "Motor Vehicle Accidents Accidents",
				description: "Car, truck, bicycle and motorcycle accident claims.",
				image: require("../assets/images/service-1.jpg"),
			},
			{
				id: "02",
				title: "Medical Negligence & Malpractice",
				description: "Ensuring Compliance with Legal Standards.",
				image: require("../assets/images/service-2.jpg"),
			},
			{
				id: "03",
				title: "Slip & Fall or Trip and Fall Cases",
				description: "Highlightin`g Maximum Injury Compensation.",
				image: require("../assets/images/service-3.jpg"),
			},
			{
				id: "04",
				title: "Dog Bite",
				description: "Nerve damage, disfigurement, or long-term medical issues.",
				image: require("../assets/images/service-4.jpg"),
			},
			{
				id: "05",
				title: "Brain & Spinal Cord Injuries",
				description: "Securing Justice for Those with Devastating Injuries.",
				image: require("../assets/images/service-5.jpg"),
			},
			{
				id: "06",
				title: "Workplace & Construction Accidents",
				description: "Protecting Legal Rights for Workplace Injuries.",
				image: require("../assets/images/service-6.jpg"),
			}
		],
		accordianItems: [
			{
				header: {
					icon: require("../assets/icons/accordian-icon-1.png"),
					title: "Client Onboarding & Case Merit Evaluation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-2.png"),
					title: "Medical Record Retrieval & Summarization",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-3.png"),
					title: "Document Drafting & Discovery Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-4.png"),
					title: "Legal Research, Case Law Review & Legal Interpretation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-5.png"),
					title: "Litigation & Trial Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-6.png"),
					title: "Administrative Tasks",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}
		]
	},
	"contracts": {
		title: "Contracts",
		heading: <>
			Strategic Support <br />
			for Injury Claims <br />
			That Win.</>,
		background: require("../assets/images/services-bg/contracts.jpg"),
		description: {
			mainDescription: "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
			smallDesription: "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight."
		},
		casesSpecializedIn: [
			{
				id: "01",
				title: "Motor Vehicle Accidents Accidents",
				description: "Car, truck, bicycle and motorcycle accident claims.",
				image: require("../assets/images/service-1.jpg"),
			},
			{
				id: "02",
				title: "Medical Negligence & Malpractice",
				description: "Ensuring Compliance with Legal Standards.",
				image: require("../assets/images/service-2.jpg"),
			},
			{
				id: "03",
				title: "Slip & Fall or Trip and Fall Cases",
				description: "Highlightin`g Maximum Injury Compensation.",
				image: require("../assets/images/service-3.jpg"),
			},
			{
				id: "04",
				title: "Dog Bite",
				description: "Nerve damage, disfigurement, or long-term medical issues.",
				image: require("../assets/images/service-4.jpg"),
			},
			{
				id: "05",
				title: "Brain & Spinal Cord Injuries",
				description: "Securing Justice for Those with Devastating Injuries.",
				image: require("../assets/images/service-5.jpg"),
			},
			{
				id: "06",
				title: "Workplace & Construction Accidents",
				description: "Protecting Legal Rights for Workplace Injuries.",
				image: require("../assets/images/service-6.jpg"),
			}
		],
		accordianItems: [
			{
				header: {
					icon: require("../assets/icons/accordian-icon-1.png"),
					title: "Client Onboarding & Case Merit Evaluation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-2.png"),
					title: "Medical Record Retrieval & Summarization",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-3.png"),
					title: "Document Drafting & Discovery Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-4.png"),
					title: "Legal Research, Case Law Review & Legal Interpretation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-5.png"),
					title: "Litigation & Trial Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-6.png"),
					title: "Administrative Tasks",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}
		]
	},
	"business-litigation-support": {
		title: "Business Litigation Support",
		heading: <>
			Strategic Support <br />
			for Injury Claims <br />
			That Win.</>,
		background: require("../assets/images/services-bg/business-litigation.jpg"),
		description: {
			mainDescription: "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
			smallDesription: "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight."
		},
		casesSpecializedIn: [
			{
				id: "01",
				title: "Motor Vehicle Accidents Accidents",
				description: "Car, truck, bicycle and motorcycle accident claims.",
				image: require("../assets/images/service-1.jpg"),
			},
			{
				id: "02",
				title: "Medical Negligence & Malpractice",
				description: "Ensuring Compliance with Legal Standards.",
				image: require("../assets/images/service-2.jpg"),
			},
			{
				id: "03",
				title: "Slip & Fall or Trip and Fall Cases",
				description: "Highlightin`g Maximum Injury Compensation.",
				image: require("../assets/images/service-3.jpg"),
			},
			{
				id: "04",
				title: "Dog Bite",
				description: "Nerve damage, disfigurement, or long-term medical issues.",
				image: require("../assets/images/service-4.jpg"),
			},
			{
				id: "05",
				title: "Brain & Spinal Cord Injuries",
				description: "Securing Justice for Those with Devastating Injuries.",
				image: require("../assets/images/service-5.jpg"),
			},
			{
				id: "06",
				title: "Workplace & Construction Accidents",
				description: "Protecting Legal Rights for Workplace Injuries.",
				image: require("../assets/images/service-6.jpg"),
			}
		],
		accordianItems: [
			{
				header: {
					icon: require("../assets/icons/accordian-icon-1.png"),
					title: "Client Onboarding & Case Merit Evaluation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-2.png"),
					title: "Medical Record Retrieval & Summarization",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-3.png"),
					title: "Document Drafting & Discovery Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-4.png"),
					title: "Legal Research, Case Law Review & Legal Interpretation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-5.png"),
					title: "Litigation & Trial Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-6.png"),
					title: "Administrative Tasks",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}
		]
	},
	"immigration": {
		title: "Immigration",
		heading: <>
			Strategic Support <br />
			for Injury Claims <br />
			That Win.</>,
		background: require("../assets/images/services-bg/immigration.jpg"),
		description: {
			mainDescription: "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
			smallDesription: "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight."
		},
		casesSpecializedIn: [
			{
				id: "01",
				title: "Motor Vehicle Accidents Accidents",
				description: "Car, truck, bicycle and motorcycle accident claims.",
				image: require("../assets/images/service-1.jpg"),
			},
			{
				id: "02",
				title: "Medical Negligence & Malpractice",
				description: "Ensuring Compliance with Legal Standards.",
				image: require("../assets/images/service-2.jpg"),
			},
			{
				id: "03",
				title: "Slip & Fall or Trip and Fall Cases",
				description: "Highlightin`g Maximum Injury Compensation.",
				image: require("../assets/images/service-3.jpg"),
			},
			{
				id: "04",
				title: "Dog Bite",
				description: "Nerve damage, disfigurement, or long-term medical issues.",
				image: require("../assets/images/service-4.jpg"),
			},
			{
				id: "05",
				title: "Brain & Spinal Cord Injuries",
				description: "Securing Justice for Those with Devastating Injuries.",
				image: require("../assets/images/service-5.jpg"),
			},
			{
				id: "06",
				title: "Workplace & Construction Accidents",
				description: "Protecting Legal Rights for Workplace Injuries.",
				image: require("../assets/images/service-6.jpg"),
			}
		],
		accordianItems: [
			{
				header: {
					icon: require("../assets/icons/accordian-icon-1.png"),
					title: "Client Onboarding & Case Merit Evaluation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-2.png"),
					title: "Medical Record Retrieval & Summarization",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-3.png"),
					title: "Document Drafting & Discovery Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-4.png"),
					title: "Legal Research, Case Law Review & Legal Interpretation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-5.png"),
					title: "Litigation & Trial Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-6.png"),
					title: "Administrative Tasks",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}
		]
	},
	"family-law": {
		title: "Family Law",
		heading: <>
			Strategic Support <br />
			for Injury Claims <br />
			That Win.</>,
		background: require("../assets/images/services-bg/family-law.jpg"),
		description: {
			mainDescription: "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
			smallDesription: "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight."
		},
		casesSpecializedIn: [
			{
				id: "01",
				title: "Motor Vehicle Accidents Accidents",
				description: "Car, truck, bicycle and motorcycle accident claims.",
				image: require("../assets/images/service-1.jpg"),
			},
			{
				id: "02",
				title: "Medical Negligence & Malpractice",
				description: "Ensuring Compliance with Legal Standards.",
				image: require("../assets/images/service-2.jpg"),
			},
			{
				id: "03",
				title: "Slip & Fall or Trip and Fall Cases",
				description: "Highlightin`g Maximum Injury Compensation.",
				image: require("../assets/images/service-3.jpg"),
			},
			{
				id: "04",
				title: "Dog Bite",
				description: "Nerve damage, disfigurement, or long-term medical issues.",
				image: require("../assets/images/service-4.jpg"),
			},
			{
				id: "05",
				title: "Brain & Spinal Cord Injuries",
				description: "Securing Justice for Those with Devastating Injuries.",
				image: require("../assets/images/service-5.jpg"),
			},
			{
				id: "06",
				title: "Workplace & Construction Accidents",
				description: "Protecting Legal Rights for Workplace Injuries.",
				image: require("../assets/images/service-6.jpg"),
			}
		],
		accordianItems: [
			{
				header: {
					icon: require("../assets/icons/accordian-icon-1.png"),
					title: "Client Onboarding & Case Merit Evaluation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-2.png"),
					title: "Medical Record Retrieval & Summarization",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-3.png"),
					title: "Document Drafting & Discovery Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-4.png"),
					title: "Legal Research, Case Law Review & Legal Interpretation",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-5.png"),
					title: "Litigation & Trial Support",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}, {
				header: {
					icon: require("../assets/icons/accordian-icon-6.png"),
					title: "Administrative Tasks",
				},
				content: {
					heading: "Medical Records - The Linchpins of every personal injury claim's success.",
					smallHeading: "Glocal's Distinctive Edge:",
					description: "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
					listItems: [
						"Retrieving & organizing medical records",
						"Patient Record Extraction",
						"Summarizing diagnosis & treatments",
						"Creating medical chronologies & injury assessments",
						"Medical History Compilation",
						"Medical Billing Summarization",
						"Privilege Logs"
					]
				}
			}
		]
	}
};

export const serviceCards = [
	{
		id: "01",
		title: routes["civil-litigation-support"].label,
		link: routes["civil-litigation-support"].href,
		image: require("../assets/images/service-image-3.jpg"),
		description: "Every strong case starts with strategic documentation. From binding contracts to persuasive motions, we prepare the legal foundation that positions your clients for success.",
		mobileDescription: "Every strong case starts with strategic documentation. From binding contracts to persuasive motions, we prepare the legal foundation that positions your clients for success."
	},
	{
		id: "02",
		title: routes["personal-injury"].label,
		link: routes["personal-injury"].href,
		image: require("../assets/images/service-image-2.jpg"),
		description: "Accidents happen, but accountability is non-negotiable. We draft demand letters with legal precision, ensuring your clients get the maximum compensation which they deserve.",
		mobileDescription: "Accidents happen, but accountability is non-negotiable. We draft demand letters with legal precision, ensuring your clients get the maximum compensation which they deserve."
	},
	{
		id: "03",
		title: routes["employee-law"].label,
		link: routes["employee-law"].href,
		image: require("../assets/images/service-image-4.jpg"),
		description: "Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served.",
		mobileDescription: "Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served."
	},
	{
		id: "04",
		title: routes["workers-compensation"].label,
		link: routes["workers-compensation"].href,
		image: require("../assets/images/service-image-5.jpg"),
		description: "From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is foolproof.",
		mobileDescription: "From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is foolproof."
	},
	{
		id: "05",
		title: routes["real-estate-litigation"].label,
		link: routes["real-estate-litigation"].href,
		image: require("../assets/images/service-image-1.jpg"),
		description: "From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
		mobileDescription: "From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results."
	},
	{
		id: "06",
		title: routes["family-law"].label,
		link: routes["family-law"].href,
		image: require("../assets/images/service-image-9.jpg"),
		description: "Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you.",
		mobileDescription: "Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you."
	},
	{
		id: "07",
		title: routes["immigration"].label,
		link: routes["immigration"].href,
		image: require("../assets/images/service-image-8.jpg"),
		description: "Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward.",
		mobileDescription: "Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward."
	},
	{
		id: "08",
		title: routes["intellectual-property"].label,
		link: routes["intellectual-property"].href,
		image: require("../assets/images/service-image-11.jpg"),
		description: "We support attorneys with watertight IP documentation—trademark, patent, and copyright filings that stand strong under scrutiny.",
		mobileDescription: "We support attorneys with watertight IP documentation—trademark, patent, and copyright filings that stand strong under scrutiny."
	},
	{
		id: "09",
		title: routes["criminal-law"].label,
		link: routes["criminal-law"].href,
		image: require("../assets/images/service-image-12.jpg"),
		description: "We power defense attorneys with sharp, strategic paralegal support—from pre-trial prep to courtroom execution. Fast. Focused. Built to defend every right, every time.",
		mobileDescription: "We power defense attorneys with sharp, strategic paralegal support—from pre-trial prep to courtroom execution. Fast. Focused. Built to defend every right, every time."
	},
	{
		id: "10",
		title: routes["bankrupcy"].label,
		link: routes["bankrupcy"].href,
		image: require("../assets/images/service-image-10.jpg"),
		description: "Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise.",
		mobileDescription: "Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise."
	},
	{
		id: "11",
		title: routes["contracts"].label,
		link: routes["contracts"].href,
		image: require("../assets/images/service-image-6.jpg"),
		description: "From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests.",
		mobileDescription: "From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests."
	},
	{
		id: "12",
		title: routes["business-litigation-support"].label,
		link: routes["business-litigation-support"].href,
		image: require("../assets/images/service-image-7.jpg"),
		description: "When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice.",
		mobileDescription: "When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice."
	}
];

export const servicesArray = [
	{
		id: "01",
		title: "Civil Litigation Support",
		description: "Every strong case starts with strategic documentation. From binding contracts to persuasive motions, we prepare the legal foundation that positions your clients for success.",
		contentBoxTitle: "Lawsuits aren't just won in court—they're built on paperwork.",
		link: routes["civil-litigation-support"].href,
		image: serviceImage3,
	}, {
		id: "02",
		title: "Personal Injury",
		description: "Accidents happen, but accountability is non-negotiable. We draft demand letters with legal precision, ensuring your clients get the maximum compensation which they deserve.",
		contentBoxTitle: "Injury wasn't your clients' choice. Justice is.",
		link: routes["personal-injury"].href,
		image: serviceImage2,
	}, {
		id: "03",
		title: "Employment Law",
		description: "Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served.",
		contentBoxTitle: "Your clients' rights aren't optional. They're enforceable.",
		link: routes["employee-law"].href,
		image: serviceImage4,
	}, {
		id: "04",
		title: "Workers Compensation",
		description: "From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is foolproof.",
		contentBoxTitle: "Injured on the job? We make sure the law works for you.",
		link: routes["workers-compensation"].href,
		image: serviceImage5,
	}, {
		id: "05",
		title: "Real Estate Litigation",
		description: "From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
		contentBoxTitle: "Real estate law isn't just about property—it's about power.",
		link: routes["real-estate-litigation"].href,
		image: serviceImage1,
	}, {
		id: "06",
		title: "Family Law",
		description: "Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you.",
		contentBoxTitle: "Family disputes need finesse, not just force.",
		link: routes["family-law"].href,
		image: serviceImage9,
	}, {
		id: "07",
		title: "Immigration",
		description: "Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward.",
		contentBoxTitle: "Borders may divide, but the law unites.",
		link: routes["immigration"].href,
		image: serviceImage8,
	}, {
		id: "08",
		title: "Intellectual Property",
		description: "We support attorneys with watertight IP documentation—trademark, patent, and copyright filings that stand strong under scrutiny.",
		contentBoxTitle: "IP Protection. Drafted Right. Defended Better.",
		link: routes["intellectual-property"].href,
		image: serviceImage11,
	}, {
		id: "09",
		title: "Criminal Law",
		description: "We power defense attorneys with sharp, strategic paralegal support—from pre-trial prep to courtroom execution. Fast. Focused. Built to defend every right, every time.",
		contentBoxTitle: "Criminal Defense. Backed by Precision.",
		link: routes["criminal-law"].href,
		image: serviceImage12,
	}, {
		id: "10",
		title: "Bankrupcy",
		description: "Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise.",
		contentBoxTitle: "Bankrupcy isn't the end. It's a fresh start.",
		link: routes["bankrupcy"].href,
		image: serviceImage10,
	}, {
		id: "11",
		title: "Contracts",
		description: "From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests.",
		contentBoxTitle: "A contract is only as strong as the words that bind it.",
		link: routes["contracts"].href,
		image: serviceImage6,
	}, {
		id: "12",
		title: "Business Litigation Support",
		description: "When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice.",
		contentBoxTitle: "In business, the fine print is where battles are won.",
		link: routes["business-litigation-support"].href,
		image: serviceImage7,
	},
];
