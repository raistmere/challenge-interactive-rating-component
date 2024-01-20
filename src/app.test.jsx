import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.tsx";

// Arrange
const ren = render(<App />);
const user = userEvent.setup();
const rate4Button = ren.getByRole("button", {name: "4"});
const rate5Button = ren.getByRole("button", {name: "5"});
const submitButton = ren.getByRole("button", {name: /SUBMIT/i});

describe("Rate button functionality", () => {
    test("Check if rate button gets selected after click", async () => {
        // Act
        await user.click(rate4Button);
    
        // Assert
        expect(rate4Button.classList.contains("selected")).toBe(true);
    });
    
    test("Check if rate button gets deselected when selection change", async () => {
        // Act
        await user.click(rate5Button);
    
        // Assert
        expect(rate4Button.classList.contains("selected")).toBe(false);
    });
});

describe("Submit Button functionality", () => {
    test("Pressing submit should update to thank you element", async () => {
        // Act
       await user.click(submitButton);

        // Assert
        expect(ren.getByText("Thank You!"));
    });


});
