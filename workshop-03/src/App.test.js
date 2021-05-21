import {render, screen} from "@testing-library/react";
import App from './App'

describe("Todos Component testing", () => {
    test('renders learn react link', () => {
        render(<App/>);
        const linkElement = screen.getByText(/Todos/i);
        expect(linkElement).toBeInTheDocument();
    });
})
