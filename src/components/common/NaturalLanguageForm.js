import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid2";

import { CircleArrow } from "@/components/Icons";

import Animate from "./Animate";

import * as styles from "./NaturalLanguageForm.module.scss";

export default function NaturalLanguageForm() {
  // References to keep track of elements
  const formRef = useRef(null);
  const overlayRef = useRef(null);

  // State to track which field is open and form values
  const [openFieldIndex, setOpenFieldIndex] = useState(-1);
  const [formValues, setFormValues] = useState({
    platform: "platform",
    time: "time",
		timezone: "time zone",
    city: "any city",
  });

  // Handle click on the overlay (close all fields)
  const handleOverlayClick = () => {
    setOpenFieldIndex(-1);
  };

  // Update form values from child components
  const updateFormValue = (key, value) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  // DropdownField component
  const DropdownField = ({ options, defaultValue, index, valueKey }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);
    const fieldRef = useRef(null);

    // This was causing the infinite loop - removed the empty useEffect

    // Update parent's open field index when this field opens/closes
    useEffect(() => {
      if (openFieldIndex === index) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }, [openFieldIndex, index]);

    const handleToggleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenFieldIndex(isOpen ? -1 : index);
    };

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      updateFormValue(valueKey, option);
      setOpenFieldIndex(-1);
    };

    return (
      <div
        ref={fieldRef}
        className={`${styles["nl-field"]} ${styles["nl-dd"]} ${isOpen ? styles["nl-field-open"] : ""}`}
      >
        <a className={styles["nl-field-toggle"]} onClick={handleToggleClick}>
          {formValues[valueKey]}
        </a>
        <ul>
          {options.map((option, i) => (
            <li
              key={i}
              className={option === formValues[valueKey] ? styles["nl-dd-checked"] : ""}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // InputField component
  const InputField = ({ placeholder, subline, index, valueKey }) => {
    const [value, setValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const fieldRef = useRef(null);
    const inputRef = useRef(null);

    // This was causing the infinite loop - removed the empty useEffect

    // Update parent's open field index when this field opens/closes
    useEffect(() => {
      if (openFieldIndex === index) {
        setIsOpen(true);
        if (inputRef.current) inputRef.current.focus();
      } else {
        setIsOpen(false);
      }
    }, [openFieldIndex, index]);

    const handleToggleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenFieldIndex(isOpen ? -1 : index);
    };

    const handleSubmit = () => {
      const updatedValue = value.trim() !== "" ? value : placeholder;
      updateFormValue(valueKey, updatedValue);
      setOpenFieldIndex(-1);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    };

    const handleInputChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <div
        ref={fieldRef}
        className={`${styles["nl-field"]} ${styles["nl-ti-text"]} ${isOpen ? styles["nl-field-open"] : ""}`}
      >
        <a className={styles["nl-field-toggle"]} onClick={handleToggleClick}>
          {formValues[valueKey]}
        </a>
        <ul>
          <li className={styles["nl-ti-input"]}>
            <input
              ref={inputRef}
              type="text"
              placeholder={placeholder}
              value={value || formValues[valueKey]}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button className={styles["nl-field-go"]} onClick={handleSubmit}>
              Go
            </button>
          </li>
          <li
            className={styles["nl-ti-example"]}
            dangerouslySetInnerHTML={{ __html: subline }}
          />
        </ul>
      </div>
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with your form values here
    alert(
      `Finding ${formValues.food} restaurants in ${formValues.city} (${formValues.restaurant} style) for ${formValues.time}`
    );
  };

  return (
		<>
			<Grid
				size={{
					xs: 12,
					sm: 12,
					md: 12,
					lg: 8,
				}}
				className={styles.infoTextSection}
			>
				<Animate.FadeUp direction="up">
					<form
						ref={formRef}
						id="nl-form"
						className={styles["nl-form"]}
						onSubmit={handleSubmit}
					>
						Pick a {" "}
						<DropdownField
							options={["10 am", "11 am", "12 am", "01 pm", "02 pm", "03 pm"]}
							defaultValue="time"
							index={0}
							valueKey="time"
						/>, 
						as per your {" "}
						<DropdownField
							options={["EST", "CST", "MST", "PST", "HST"]}
							defaultValue="time zone"
							index={1}
							valueKey="timezone"
						/>. 
						choose a preferred {" "} 
						<DropdownField
							options={["zoom", "google meet", "old fashioned call"]}
							defaultValue="platform"
							index={2}
							valueKey="platform"
						/>. Schedule a meeting and we'll make things happen.
						<div
							ref={overlayRef}
							className={`${styles["nl-overlay"]} ${
								openFieldIndex !== -1 ? styles["nl-field-open"] : ""
							}`}
							onClick={handleOverlayClick}
						/>
					</form>
				</Animate.FadeUp>
			</Grid>
			<Grid
				size={{
					xs: 12,
					sm: 12,
					md: 12,
					lg: 1,
				}}
				className={styles.winButton}
			>
				<Animate.FadeUp direction="up" delay="100ms">
					<CircleArrow />
				</Animate.FadeUp>
			</Grid>
		</>
  );
}
