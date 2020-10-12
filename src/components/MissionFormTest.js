import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import MissionForm from './MissionForm'

describe('MissionForm Tests', () => {
    test('render without error', () => {
        //Arrange
        //Act
        //Assert
        render(<MissionForm />)
    })

    test('redners message when isFetchingData is true', () => {
        render(<MissionForm isFetchingData={true} />)
       //screen.getByText(/we are fetching data/i)) 
        expect(screen.getByText(/we are fetching data/i)).not.toBeNull() 
        expect(screen.queryByText(/get data/i)).toBeNull() 
    })

    test('renders button when itFetchingData is false', () => {
        render(<MissionForm isFetchingData={false} />)
        expect(screen.getByRole('button')).not.toBeNull()  
        expect(screen.queryByText(/we are fetching data/i)).toBeNull() 
    })

    test('calls getData when button is pressed', () => {
        // const mockGetData = jest.fn(() => {
        //     return('virginia')
        // })
        const mockGetData = jest.fn()
        render(<MissionForm getData={mockGetData} />)
        // render(<MissionForm getData={() => {mockGetData(122, 'virginia')}}/>)
        
        const button = screen.getByRole('button')
        fireEvent.click(button)

        //mockGetData.mockReturnValueOnce('virginia')
        //mockGetData.mockReturnValue('virginia')
        
        expect(mockGetData.mock.calls.length === 1)
        expect(mockGetData.mock.calls.length).toBe(1)
        expect(mockGetData.mock.calls).toHaveLength(1)
    })
})