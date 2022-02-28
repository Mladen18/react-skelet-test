import { render, screen } from '@testing-library/react';
import Posts from './Posts';

describe('Posts component', () => {
    test('renders Post Item component', () => {
        render(<Posts message={''} compName={''} />);
        expect(true).toBeTruthy();
    });
});
