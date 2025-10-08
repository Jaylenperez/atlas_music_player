import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { SongTitle } from "../components/SongTitle";


test("SongTitle renders correctly", () => {
    const { container } = render(
        <SongTitle
            songName="Radio"
            artistName="Lana Del Rey"
        />
    );
    expect(container).toMatchSnapshot();
});