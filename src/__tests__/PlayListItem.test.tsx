import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import PlayListItem from "../components/PlayListItem";

test("PlayListItem renders correctly", () => {
    const props = {
        title: "Song Title",
        artist: "Artist Name",
        length: "3:45",
    };

    const { container } = render(<PlayListItem {...props} />);

    // Snapshot test
    expect(container).toMatchSnapshot();

    // Extra assertions to verify props are rendered correctly
    expect(screen.getByText("Song Title")).toBeTruthy();
    expect(screen.getByText("Artist Name")).toBeTruthy();
    expect(screen.getByText("3:45")).toBeTruthy();
});
