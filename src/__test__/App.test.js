import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Person from "../component/person";

test("form labels", async () => {
  render(<Person />);

  const name = await waitFor(() => screen.findByTestId("name"));
  const age = await waitFor(() => screen.findByTestId("age"));
  const gender = await waitFor(() => screen.findByTestId("gender"));

  expect(name).toHaveTextContent("Name");
  expect(age).toHaveTextContent("Age");
  expect(gender).toHaveTextContent("Gender");
});

test("form inputs", async () => {
  render(<Person />);
  const nameInput = await waitFor(() => screen.findByTestId("name-input"));
  const ageInput = await waitFor(() => screen.findByTestId("age-input"));
  const genderInput = await waitFor(() => screen.findByTestId("gender-input"));

  fireEvent.change(nameInput, { target: { value: "Mohammed" } });
  fireEvent.change(ageInput, { target: { value: "20" } });
  fireEvent.change(genderInput, { target: { value: "Male" } });

  expect(nameInput).toHaveValue("Mohammed");
  expect(ageInput).toHaveValue("20");
  expect(genderInput).toHaveValue("Male");
});

test("render data", async () => {
  render(<Person />);
  const displayedName = await waitFor(() =>
    screen.findByTestId("displayed-name")
  );
  const displayedAge = await waitFor(() =>
    screen.findByTestId("displayed-age")
  );
  const displayedGender = await waitFor(() =>
    screen.findByTestId("displayed-gender")
  );
  const nameInput = await waitFor(() => screen.findByTestId("name-input"));
  const ageInput = await waitFor(() => screen.findByTestId("age-input"));
  const genderInput = await waitFor(() => screen.findByTestId("gender-input"));

  fireEvent.change(nameInput, { target: { value: "Mohammed" } });
  fireEvent.change(ageInput, { target: { value: "20" } });
  fireEvent.change(genderInput, { target: { value: "Male" } });

  expect(displayedName).toHaveTextContent("Name: Mohammed");
  expect(displayedAge).toHaveTextContent("Age: 20");
  expect(displayedGender).toHaveTextContent("Gender: Male");
});
