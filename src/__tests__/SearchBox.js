import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../containers/UserGists/SearchBox';

const sampleProps = {
    onSearch:jest.fn()
}

test('Checking placeholder and search button', () => {
    render(<SearchBox {...sampleProps}/>);
    const inputElement = screen.queryByPlaceholderText("Search Github username");
    const button = screen.getByText("Search");
    expect(button).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
});

test('Call search function on clicking search', () => {
    render(<SearchBox {...sampleProps}/>);
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);
    expect(sampleProps.onSearch).toBeCalled();
});

test('Calls function only pressing ENTER. ', () => {
    render(<SearchBox {...sampleProps} />);
    const inputElement = screen.queryByPlaceholderText("Search Github username");
    fireEvent.keyPress(inputElement, { key: "Enter", code: 13, charCode: 13 });
    expect(sampleProps.onSearch).toBeCalled();
});
