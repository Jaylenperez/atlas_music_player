// src/__tests__/VolumeControls.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import { VolumeControls } from "../components/VolumeControls"; // adjust path if needed

test("VolumeControls renders correctly", () => {
    // Create a mock function for onVolumeChange
    const mockOnVolumeChange = vi.fn();

    const { container } = render(
        <VolumeControls
            lightMode={true}
            volume={50}
            onVolumeChange={mockOnVolumeChange}
        />
    );

    // Snapshot test
    expect(container).toMatchSnapshot();
});
