import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderComponent from '../Header';
import CardComponent from './CardComponent';

describe('product card interaction', () => {
    test('renders brand name correctly', () =>{
        //Arrange
        render(<HeaderComponent/>);
        // Act
        // nothing
        //Assert
        const outputElement = screen.getByText('sassy', {exact: false})
        expect(outputElement).toBeInTheDocument();
    });
    test('renders "view" text if image is hovered over', () =>{
        // Arrange
        render(<CardComponent/>);
        // Act
        const imgElement = screen.getAllByAltText('product');
        userEvent.hover(imgElement);

        // Assert
        const imageHovered = screen.getByText('view', {exact: false})
        expect(imageHovered).toBeInTheDocument();
    });
    
});

