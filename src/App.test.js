import React from 'react'
import { render, screen, fireEvent, wait } from '@testing-library/react'
import App from './App'

import { fetchMissions as mockFetchMissions } from './api/fetchMissions'

jest.mock('./api/fetchMissions')

describe('App Test', () => {
    test('Renders without errors', () => {
        render(<App />)
    })

    test('fetches mission data and renders data', async () => {
        render(<App />)

        mockFetchMissions.mockResolvedValueOnce({ data :
            [{mission_name: 'Mission 1'}, {mission_name: 'Mission 2'}]
        })

        const button = screen.getByRole('button')
        fireEvent.click(button)

        await wait()

        expect(screen.queryAllByTestId('mission').toHaveLength(2))
    })
})